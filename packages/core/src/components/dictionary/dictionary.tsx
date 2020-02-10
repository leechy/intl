import { Component, Element, Prop, Method, Event, EventEmitter, Watch, State } from '@stencil/core';
import { Lazy, IntlChange } from '../../declarations';
import { locale } from '../../utils/locale';
import { direction } from '../../utils/direction';

@Component({
    tag: 'intl-dictionary',
    styleUrl: 'dictionary.css',
    shadow: true
})
export class Dictionary {
    
    private hasWarned: boolean = false;
    private mo: MutationObserver;
    private dicts: Map<string, Map<string, string|Lazy>> = new Map();
    private requests: Map<string, Promise<void>> = new Map();

    @Element() element: HTMLElement;

    @Event({ eventName: 'intlChange', bubbles: true, composed: true }) onIntlChange: EventEmitter<IntlChange>;
    
    @State() global: { [key: string]: any };

    @Prop() src: string;

    @Prop({ mutable: true }) lang: string;
    @Watch('lang')
    async langChanged() {
        this.triggerLocaleChange();
        await this.setDirFromDict();
    }

    @Prop({ mutable: true }) dir: string;
    @Watch('dir')
    dirChanged(newValue, oldValue) {
        console.log({ newValue, oldValue });
        if (!this.dir.match(/ltr|rtl|auto/g)) this.dir = 'auto';
        this.triggerLocaleChange();
    }

    private triggerLocaleChange() {
        const { lang: locale, dir } = this;

        console.log('onIntlChange', { dir, locale});
        
        this.onIntlChange.emit({
            dir: dir as 'ltr' | 'rtl' | 'auto',
            locale
        })
    }

    async componentWillLoad() {
        this.dicts = new Map();
        this.addMO();
        if (!this.lang) this.lang = locale.get();
        if (!this.dir) this.dir = direction.get();
        
        if (!this.src) throw new Error('<intl-dictionary> requires a `src` attribute. Did you forget to include an <intl-dictionary> element in your app root?')
        await this.fetchDictionary();
    }

    componentDidUnload() {
        this.removeMO();
    }
    
    async exists(path: string): Promise<string|boolean> {
        try {
            const headers = new Headers();
            // headers.append('Accept', 'application/json');
            // headers.append('Content-Type', 'application/json');

            return fetch(path, {
                method: 'GET',
                headers
            }).then((response) => {
                const { status, url, headers } = response;
                if (status !== 200) return false;
                const contentType = headers.get('content-type');
                const isJSON = (contentType && contentType.includes('application/json'));
                if (!isJSON) return false;
                return url;
            })
        } catch (e) {
            return Promise.resolve(false)
        }
    }
    
    private isFile(lang: string) {
        const path = `${this.src.replace(/\/$/, '')}/${lang}.json`;
        return this.exists(path);
    }
    private isDirWithIndex(lang: string) {
        const path = `${this.src.replace(/\/$/, '')}/${lang}/index.json`;
        return this.exists(path);
    }

    private async getResourceUrl(lang: string) {
        let file: string | boolean = false;
        try {
            file = await this.isFile(lang);
            if (!file && !this.hasWarned) {
                const styledPrefix = [
                    '%c' + 'INTL',
                    `background: #ffc107; color: white; padding: 2px 4px; border-radius: 2px; font-size: 0.9em;`
                ];
                console.log(...styledPrefix, `Getting a "404 (Not Found)" error?\n      You can safely ignore it! 👉 https://intljs.com/faq#404`);
                this.hasWarned = true;
            }
            if (!file) file = await this.isDirWithIndex(lang);

        } catch (e) { }
        return Promise.resolve(file);
    }

    async fetchGlobal() {
        try {
            const path = `${this.src.replace(/\/$/, '')}/index.json`;
            const request = fetch(path)
                .then(response => response.json())
                .then(dict => this.global = dict)
                .then(() => {
                    this.requests.delete('global');
                })
            
            this.requests.set('global', request);
            return this.requests.get('global');
        } catch (e) {
            return Promise.resolve();
        }
    }

    async addDictionary(lang, dict) {
        this.dicts.set(lang, dict);
    }
    
    async appendToDictionary(lang, dictName, dict) {
        const copy = new Map(this.dicts.get(lang)).set(dictName, dict);
        this.dicts.set(lang, copy);
    }

    async fetchDictionary(lang: string = this.lang) {
        try {
            // There is already a fetch event in progress
            // To avoid multiple fetches, just `await` the one in progress
            if (this.requests.has(lang)) {
                return this.requests.get(lang);
            } else {
                const request = this.getResourceUrl(lang)
                    .then(path => {
                        if (!path) throw new Error();
                        return fetch(path as string);
                    })                
                    .then(response => response.json())
                    .then(dict => this.jsonToDict(dict))
                    .then(dict => this.addDictionary(lang, dict))
                    .then(() => {
                        // Request has been resolved
                        this.requests.delete(lang);
                    })
                    .catch(() => {
                        // Request threw an error
                        this.requests.delete(lang);
                    });
                this.requests.set(lang, request);
                return this.requests.get(lang);
            }
        } catch (e) { }
    }

    private async lazyloadRef(ref: Lazy, refName: string, lang: string = this.lang) {
        try {
            const url = ref.url.trim().replace(/^\//, '').replace(/\:lang/g, lang);
            if (!url.endsWith('.json')) {
                console.error(`Unable to lazyload "${refName}" because it is not a .json file`);
                return;
            }

            const path = `${this.src.replace(/\/$/, '')}/${url}`;

            if (this.requests.has(path)) {
                return this.requests.get(path);
            } else {
                const request = fetch(path)
                    .then(response => response.json())
                    .then(dict => this.appendToDictionary(lang, refName, dict))
                    .then(() => {
                        // Request has been resolved
                        this.requests.delete(path);
                    })
                    .catch(() => {
                        // Request threw an error
                        this.requests.delete(path);
                    });
                this.requests.set(path, request);
                return this.requests.get(lang);
            }
        } catch (e) { }
    }

    @Method()
    async resolvePhrase(name: string, lang: string = this.lang): Promise<string|false> {
        if (!this.dicts.has(lang)) await this.fetchDictionary(lang);
        const dict = this.dicts.get(lang);
        
        const [key, ...parts] = name.split('.').map(x => x.trim()).filter(x => x);
        if (dict && dict.has(key)) {
            const values = dict.get(key);
            
            if (typeof values === 'object' && values.lazy) {
                await this.lazyloadRef(values, key, lang);
                return this.resolvePhrase(name, lang);
            }

            if (parts.length) {
                let resolved = parts.reduce((o, i) => o[i], dict.get(key));
                return (typeof values === 'object' && typeof resolved === 'string') ? resolved : false;
            } else {
                return (typeof values === 'string') ? values : false;
            }
        } else {
            console.error(`Unable to resolve phrase "${name}" for "${lang}"`);
            return false;
        }
    }

    async jsonToDict(obj: { [key: string]: string }) {
        if (!this.global) await this.fetchGlobal();
        const global = this.global ? Object.entries(this.global) : [];
        const dict = Object.entries(obj);
        return new Map([...global, ...dict]);
    }

    private addMO() {
        if ('MutationObserver' in window) {
            this.removeMO();
            this.mo = new MutationObserver(data => {
                if (data[0].attributeName === 'lang') {
                    this.lang = locale.get();
                }
                if (data[0].attributeName === 'dir') {
                    this.dir = direction.get();
                }
            });

            this.mo.observe(document.documentElement, { attributes: true, attributeFilter: ['lang', 'dir']});
        }
    }

    private removeMO() {
        if (this.mo) {
            this.mo.disconnect();
            this.mo = undefined;
        }
    }

    private async setDirFromDict() {
        if (this.requests.has(this.lang)) await this.requests.get(this.lang);

        if (this.dicts.has(this.lang)) {
            const dir = this.dicts.get(this.lang).get('dir');
            if (dir && typeof dir === 'string' && /ltr|rtl|auto/g.test(dir) && this.dir !== dir) {
                direction.set(dir as any)
            }
        }
    }
}
