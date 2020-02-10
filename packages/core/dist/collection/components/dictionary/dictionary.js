import { locale as appLocale } from '../../utils/locale';
import { direction } from '../../utils/direction';
export class Dictionary {
    constructor() {
        this.hasWarned = false;
        this.dicts = new Map();
        this.requests = new Map();
        this.default = 'en';
    }
    parseLocales() {
        this.availableLocales = this.locales.replace(' ', '').split(',');
        console.log(this.availableLocales);
    }
    async langChanged() {
        this.triggerLocaleChange();
        await this.setDirFromDict();
    }
    dirChanged() {
        if (!this.dir.match(/ltr|rtl|auto/g))
            this.dir = 'auto';
        this.triggerLocaleChange();
    }
    triggerLocaleChange() {
        const { locale, dir } = this;
        this.onIntlChange.emit({
            dir: dir,
            locale
        });
    }
    async componentWillLoad() {
        var _a, _b, _c;
        this.dicts = new Map();
        this.addMO();
        if (!this.locale) {
            // initial locale choose
            // is there something stored in the local storage?
            // if not, looking at the user languages in the browser
            const targets = ((_a = window) === null || _a === void 0 ? void 0 : _a.navigator.languages) || // user language preferences list
                [
                    ((_b = window) === null || _b === void 0 ? void 0 : _b.navigator).userLanguage || // IE 10-
                     ((_c = window) === null || _c === void 0 ? void 0 : _c.navigator.language) || // browser ui language
                        this.default // there is no window (sapper | node)
                ];
            for (let i = 0; i < targets.length; i = i + 1) {
                if (this.availableLocales.includes(targets[i])) {
                    this.locale = targets[i]; // exact match
                    break;
                }
                const bestMatch = this.availableLocales.find((locale) => targets[i].startsWith(locale));
                if (bestMatch) {
                    this.locale = bestMatch; // en-US -> en
                    break;
                }
            }
            // if locale is still unknown, then getting default locale
            if (!this.locale) {
                this.locale = this.default;
            }
        }
        if (!this.dir) {
            this.dir = direction.get();
        }
        if (!this.src)
            throw new Error('<intl-dictionary> requires a `src` attribute. Did you forget to include an <intl-dictionary> element in your app root?');
        await this.fetchDictionary();
    }
    componentDidUnload() {
        this.removeMO();
    }
    async exists(path) {
        try {
            const headers = new Headers();
            // headers.append('Accept', 'application/json');
            // headers.append('Content-Type', 'application/json');
            return fetch(path, {
                method: 'GET',
                headers
            }).then((response) => {
                const { status, url, headers } = response;
                if (status !== 200)
                    return false;
                const contentType = headers.get('content-type');
                const isJSON = (contentType && contentType.includes('application/json'));
                if (!isJSON)
                    return false;
                return url;
            });
        }
        catch (e) {
            return Promise.resolve(false);
        }
    }
    isFile(locale) {
        const path = `${this.src.replace(/\/$/, '')}/${locale}.json`;
        return this.exists(path);
    }
    isDirWithIndex(locale) {
        const path = `${this.src.replace(/\/$/, '')}/${locale}/index.json`;
        return this.exists(path);
    }
    async getResourceUrl(locale) {
        let file = false;
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
            if (!file)
                file = await this.isDirWithIndex(locale);
        }
        catch (e) { }
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
            });
            this.requests.set('global', request);
            return this.requests.get('global');
        }
        catch (e) {
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
    async fetchDictionary(locale = this.locale) {
        try {
            // There is already a fetch event in progress
            // To avoid multiple fetches, just `await` the one in progress
            if (this.requests.has(locale)) {
                return this.requests.get(locale);
            }
            else {
                const request = this.getResourceUrl(locale)
                    .then(path => {
                    if (!path)
                        throw new Error();
                    return fetch(path);
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
                return this.requests.get(locale);
            }
        }
        catch (e) { }
    }
    async lazyloadRef(ref, refName, locale = this.locale) {
        try {
            const url = ref.url.trim().replace(/^\//, '').replace(/\:locale/g, locale);
            if (!url.endsWith('.json')) {
                console.error(`Unable to lazyload "${refName}" because it is not a .json file`);
                return;
            }
            const path = `${this.src.replace(/\/$/, '')}/${url}`;
            if (this.requests.has(path)) {
                return this.requests.get(path);
            }
            else {
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
        }
        catch (e) { }
    }
    async resolvePhrase(name, locale = this.locale) {
        if (!this.dicts.has(locale))
            await this.fetchDictionary(locale);
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
            }
            else {
                return (typeof values === 'string') ? values : false;
            }
        }
        else {
            console.error(`Unable to resolve phrase "${name}" for "${locale}"`);
            return false;
        }
    }
    async jsonToDict(obj) {
        if (!this.global)
            await this.fetchGlobal();
        const global = this.global ? Object.entries(this.global) : [];
        const dict = Object.entries(obj);
        return new Map([...global, ...dict]);
    }
    addMO() {
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
            this.mo.observe(document.documentElement, { attributes: true, attributeFilter: ['lang', 'dir'] });
        }
    }
    removeMO() {
        if (this.mo) {
            this.mo.disconnect();
            this.mo = undefined;
        }
    }
    async setDirFromDict() {
        if (this.requests.has(this.locale))
            await this.requests.get(this.locale);
        if (this.dicts.has(this.locale)) {
            const dir = this.dicts.get(this.locale).get('dir');
            if (dir && typeof dir === 'string' && /ltr|rtl|auto/g.test(dir) && this.dir !== dir) {
                direction.set(dir);
            }
        }
    }
    static get is() { return "intl-dictionary"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["dictionary.css"]
    }; }
    static get styleUrls() { return {
        "$": ["dictionary.css"]
    }; }
    static get properties() { return {
        "src": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "src",
            "reflect": false
        },
        "default": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "default",
            "reflect": false,
            "defaultValue": "'en'"
        },
        "locales": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "locales",
            "reflect": false
        },
        "locale": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "locale",
            "reflect": false
        },
        "dir": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "dir",
            "reflect": false
        }
    }; }
    static get states() { return {
        "global": {},
        "availableLocales": {}
    }; }
    static get events() { return [{
            "method": "onIntlChange",
            "name": "intlChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "IntlChange",
                "resolved": "IntlChange",
                "references": {
                    "IntlChange": {
                        "location": "import",
                        "path": "../../declarations"
                    }
                }
            }
        }]; }
    static get methods() { return {
        "resolvePhrase": {
            "complexType": {
                "signature": "(name: string, locale?: string) => Promise<string | false>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }, {
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<string | false>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "element"; }
    static get watchers() { return [{
            "propName": "locales",
            "methodName": "parseLocales"
        }, {
            "propName": "locale",
            "methodName": "langChanged"
        }, {
            "propName": "dir",
            "methodName": "dirChanged"
        }]; }
}
