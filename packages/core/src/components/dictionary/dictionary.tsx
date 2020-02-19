import { Component, Element, Prop, Method, Event, EventEmitter, Watch, State } from '@stencil/core';
import { Lazy, IntlChange } from '../../declarations';
import { locale as appLocale } from '../../utils/locale';
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

    @Event({
        eventName: 'intlChange',
        bubbles: true,
        composed: true
    }) onIntlChange: EventEmitter<IntlChange>;
    
    @State() global: { [key: string]: any };

    @Prop() src: string;

    @Prop() default: string = 'en';
    @Prop() locales: string;

    @Prop({ mutable: true }) locale: string;
    @Watch('locale')
    async langChanged() {
        this.triggerLocaleChange();
        await this.setDirFromDict();
    }

    @Prop({ mutable: true }) dir: string;
    @Watch('dir')
    dirChanged() {
        if (!this.dir.match(/ltr|rtl|auto/g)) this.dir = 'auto';
        this.triggerLocaleChange();
    }

    private triggerLocaleChange() {
        const { locale, dir } = this;

        // try to store chosen language at localStorage
        try {
            localStorage.setItem('locale', locale);
        } catch (e) {
            console.error('Error accessing localStorage. Selected language not stored.')
        }

        this.onIntlChange.emit({
            dir: dir as 'ltr' | 'rtl' | 'auto',
            locale
        })
    }

    async componentWillLoad() {
        this.dicts = new Map();
        this.addMO();
        if (!this.locale) {
            // initial locale choose

            try {
                // is there something stored in the local storage?
                this.locale = localStorage.getItem('locale');
            } catch (e) {
                console.error('Local Storage is not accessible. Not storing the language there.')
            }

            if (!this.locale) {
                // if not, looking at the user languages in the browser
                const targets = window?.navigator.languages || // user language preferences list
                [
                    (window?.navigator as any).userLanguage || // IE 10-
                    window?.navigator.language ||              // browser ui language
                    this.default                               // there is no window (sapper | node)
                ]

                console.log('locales', this.locales);
            
                const availableLocales = this.locales.replace(' ', '').split(',');
                for (let i = 0; i < targets.length; i = i + 1) {
                    if (availableLocales.includes(targets[i])) {
                        this.locale = targets[i]; // exact match
                        break;
                    }
                    const bestMatch = availableLocales.find((locale: any) => targets[i].startsWith(locale))
                    if (bestMatch) {
                        this.locale = bestMatch; // en-US -> en
                        break;
                    }
                }
            }

            // if locale is still unknown, then getting default locale
            if (!this.locale) {
                this.locale = this.default
            }
        }
        if (!this.dir) {
            this.dir = direction.get();
        }

        // set the locale for everybody
        appLocale.set(this.locale);
        
        if (!this.src) throw new Error('<intl-dictionary> requires a `src` attribute. Did you forget to include an <intl-dictionary> element in your app root?');
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
                return url === '' ? path : url;
            })
        } catch (e) {
            return Promise.resolve(false)
        }
    }
    
    private isFile(locale: string) {
        const path = `${this.src.replace(/\/$/, '')}/${locale}.json`;
        return this.exists(path);
    }
    private isDirWithIndex(locale: string) {
        const path = `${this.src.replace(/\/$/, '')}/${locale}/index.json`;
        return this.exists(path);
    }

    private async getResourceUrl(locale: string) {
        let file: string | boolean = false;
        try {
            file = await this.isFile(locale);
            if (!file && !this.hasWarned) {
                const styledPrefix = [
                    '%c' + 'INTL',
                    `background: #ffc107; color: white; padding: 2px 4px; border-radius: 2px; font-size: 0.9em;`
                ];
                console.log(...styledPrefix, `Getting a "404 (Not Found)" error?\n      You can safely ignore it! 👉 https://intljs.com/faq#404`);
                this.hasWarned = true;
            }
            if (!file) file = await this.isDirWithIndex(locale);

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

    async addDictionary(locale, dict) {
        this.dicts.set(locale, dict);
    }
    
    async appendToDictionary(locale, dictName, dict) {
        const copy = new Map(this.dicts.get(locale)).set(dictName, dict);
        this.dicts.set(locale, copy);
    }

    async fetchDictionary(locale: string = this.locale) {
        try {
            // There is already a fetch event in progress
            // To avoid multiple fetches, just `await` the one in progress
            if (this.requests.has(locale)) {
                return this.requests.get(locale);
            } else {
                const request = this.getResourceUrl(locale)
                    .then(path => {
                        if (!path) throw new Error();
                        return fetch(path as string);
                    })                
                    .then(response => response.json())
                    .then(dict => this.jsonToDict(dict))
                    .then(dict => this.addDictionary(locale, dict))
                    .then(() => {
                        // Request has been resolved
                        this.requests.delete(locale);
                    })
                    .catch(() => {
                        // Request threw an error
                        this.requests.delete(locale);
                    });
                this.requests.set(locale, request);
                console.log('requests set', locale, request);

                return this.requests.get(locale);
            }
        } catch (e) { }
    }

    private async lazyloadRef(ref: Lazy, refName: string, locale: string = this.locale) {
        try {
            const url = ref.url.trim().replace(/^\//, '').replace(/\:locale/g, locale);
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
                    .then(dict => this.appendToDictionary(locale, refName, dict))
                    .then(() => {
                        // Request has been resolved
                        this.requests.delete(path);
                    })
                    .catch(() => {
                        // Request threw an error
                        this.requests.delete(path);
                    });
                this.requests.set(path, request);
                return this.requests.get(locale);
            }
        } catch (e) { }
    }

    @Method()
    async resolvePhrase(name: string, locale: string = this.locale): Promise<string|false> {
        if (!this.dicts.has(locale)) await this.fetchDictionary(locale);
        const dict = this.dicts.get(locale);
        
        const [key, ...parts] = name.split('.').map(x => x.trim()).filter(x => x);
        if (dict && dict.has(key)) {
            const values = dict.get(key);
            
            if (typeof values === 'object' && values.lazy) {
                await this.lazyloadRef(values, key, locale);
                return this.resolvePhrase(name, locale);
            }

            if (parts.length) {
                let resolved = parts.reduce((o, i) => o[i], dict.get(key));
                return (typeof values === 'object' && typeof resolved === 'string') ? resolved : false;
            } else {
                return (typeof values === 'string') ? values : false;
            }
        } else {
            console.error(`Unable to resolve phrase "${name}" for "${locale}"`);
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
                    this.locale = appLocale.get();
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
        if (this.requests.has(this.locale)) await this.requests.get(this.locale);

        if (this.dicts.has(this.locale)) {
            const dir = this.dicts.get(this.locale).get('dir');
            if (dir && typeof dir === 'string' && /ltr|rtl|auto/g.test(dir) && this.dir !== dir) {
                direction.set(dir as any)
            }
        }
    }
}
