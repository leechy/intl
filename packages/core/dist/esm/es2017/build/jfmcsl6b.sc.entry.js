/*! Built with http://stenciljs.com */
import { h } from '../intl.core.js';

import { a as locale, b as direction } from './chunk-b900dc0c.js';

class Dictionary {
    constructor() {
        this.hasWarned = false;
        this.dicts = new Map();
        this.requests = new Map();
    }
    async langChanged() {
        this.triggerLocaleChange();
        await this.setDirFromDict();
    }
    dirChanged(newValue, oldValue) {
        console.log({ newValue, oldValue });
        if (!this.dir.match(/ltr|rtl|auto/g))
            this.dir = 'auto';
        this.triggerLocaleChange();
    }
    triggerLocaleChange() {
        const { lang: locale$$1, dir } = this;
        this.onIntlChange.emit({
            dir: dir,
            locale: locale$$1
        });
    }
    async componentWillLoad() {
        this.dicts = new Map();
        this.addMO();
        if (!this.lang)
            this.lang = locale.get();
        if (!this.dir)
            this.dir = direction.get();
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
    isFile(lang) {
        const path = `${this.src.replace(/\/$/, '')}/${lang}.json`;
        return this.exists(path);
    }
    isDirWithIndex(lang) {
        const path = `${this.src.replace(/\/$/, '')}/${lang}/index.json`;
        return this.exists(path);
    }
    async getResourceUrl(lang) {
        let file = false;
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
            if (!file)
                file = await this.isDirWithIndex(lang);
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
    async addDictionary(lang, dict) {
        this.dicts.set(lang, dict);
    }
    async appendToDictionary(lang, dictName, dict) {
        const copy = new Map(this.dicts.get(lang)).set(dictName, dict);
        this.dicts.set(lang, copy);
    }
    async fetchDictionary(lang = this.lang) {
        try {
            if (this.requests.has(lang)) {
                return this.requests.get(lang);
            }
            else {
                const request = this.getResourceUrl(lang)
                    .then(path => {
                    if (!path)
                        throw new Error();
                    return fetch(path);
                })
                    .then(response => response.json())
                    .then(dict => this.jsonToDict(dict))
                    .then(dict => this.addDictionary(lang, dict))
                    .then(() => {
                    this.requests.delete(lang);
                })
                    .catch(() => {
                    this.requests.delete(lang);
                });
                this.requests.set(lang, request);
                return this.requests.get(lang);
            }
        }
        catch (e) { }
    }
    async lazyloadRef(ref, refName, lang = this.lang) {
        try {
            const url = ref.url.trim().replace(/^\//, '').replace(/\:lang/g, lang);
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
                    .then(dict => this.appendToDictionary(lang, refName, dict))
                    .then(() => {
                    this.requests.delete(path);
                })
                    .catch(() => {
                    this.requests.delete(path);
                });
                this.requests.set(path, request);
                return this.requests.get(lang);
            }
        }
        catch (e) { }
    }
    async resolvePhrase(name, lang = this.lang) {
        if (!this.dicts.has(lang))
            await this.fetchDictionary(lang);
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
            }
            else {
                return (typeof values === 'string') ? values : false;
            }
        }
        else {
            console.error(`Unable to resolve phrase "${name}" for "${lang}"`);
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
                    this.lang = locale.get();
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
        if (this.requests.has(this.lang))
            await this.requests.get(this.lang);
        if (this.dicts.has(this.lang)) {
            const dir = this.dicts.get(this.lang).get('dir');
            if (dir && typeof dir === 'string' && /ltr|rtl|auto/g.test(dir) && this.dir !== dir) {
                direction.set(dir);
            }
        }
    }
    static get is() { return "intl-dictionary"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "dir": {
            "type": String,
            "attr": "dir",
            "mutable": true,
            "watchCallbacks": ["dirChanged"]
        },
        "element": {
            "elementRef": true
        },
        "global": {
            "state": true
        },
        "lang": {
            "type": String,
            "attr": "lang",
            "mutable": true,
            "watchCallbacks": ["langChanged"]
        },
        "resolvePhrase": {
            "method": true
        },
        "src": {
            "type": String,
            "attr": "src"
        }
    }; }
    static get events() { return [{
            "name": "intlChange",
            "method": "onIntlChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ".sc-intl-dictionary-h{display:none}"; }
}

class Phrase {
    constructor() {
        this.inGroup = false;
        this.value = '';
        this.error = '';
        this.resolvedName = '';
        this.lazy = true;
    }
    async nameChanged() {
        await this.resolveName();
        this.addIO();
    }
    replaceChanged() {
        switch (typeof this.replace) {
            case 'string':
                try {
                    const obj = JSON.parse(this.replace);
                    this.replacements = new Map(Object.entries(obj));
                }
                catch (e) {
                    throw new Error(`Invalid value for "replace" in <intl-phrase>. "replace" must either be an object or a valid JSON string.`);
                }
                break;
            case 'object':
                this.replacements = new Map(Object.entries(this.replace));
                break;
            default: throw new Error(`Invalid value for "replace" in <intl-phrase>. "replace" must either be an object or a valid JSON string.`);
        }
    }
    langChangeHandler() {
        this.addIO();
    }
    async componentWillLoad() {
        this.addIO();
        if (this.replace)
            this.replaceChanged();
        await this.resolveName();
    }
    componentWillUnload() {
        this.removeIO();
    }
    async resolveName() {
        return new Promise((resolve) => {
            const group = this.element.parentElement.closest('intl-phrase-group');
            if (group) {
                this.inGroup = true;
                this.resolvedName = `${group.name}.${this.name}`;
                resolve();
            }
            else {
                this.resolvedName = this.name;
                resolve();
            }
        });
    }
    async resolveValue() {
        const { resolvedName: name, lang } = this;
        const dict = await this.dict.componentOnReady();
        const value = this.replaceValue(await dict.resolvePhrase(name, lang));
        if (value !== false && value !== undefined) {
            this.value = value;
        }
        else {
            this.error = this.name;
        }
    }
    replaceValue(value) {
        if (value === false)
            return value;
        const hbs = /{{\s*([^}}\s]*)\s*}}/g;
        return value.replace(hbs, (matched, ident) => {
            return this.replacements.has(ident) ? this.replacements.get(ident).toString() : matched;
        });
    }
    addIO() {
        if (this.name === undefined)
            return;
        if ('IntersectionObserver' in window) {
            this.io = new IntersectionObserver(data => {
                if (data[0].isIntersecting) {
                    this.resolveValue().then(() => {
                        this.removeIO();
                    });
                }
            });
            this.io.observe(this.element);
        }
        else {
            setTimeout(() => this.resolveValue(), 200);
        }
    }
    removeIO() {
        if (this.io) {
            this.io.disconnect();
            this.io = undefined;
        }
    }
    hostData() {
        return {
            style: {
                color: (this.error !== '') ? 'red' : null
            }
        };
    }
    render() {
        return this.value ? h("ins", { style: { textDecoration: 'inherit' }, innerHTML: this.value }) : this.error;
    }
    static get is() { return "intl-phrase"; }
    static get properties() { return {
        "dict": {
            "connect": "intl-dictionary"
        },
        "element": {
            "elementRef": true
        },
        "error": {
            "state": true
        },
        "inGroup": {
            "state": true
        },
        "lang": {
            "type": String,
            "attr": "lang",
            "mutable": true
        },
        "lazy": {
            "type": Boolean,
            "attr": "lazy"
        },
        "name": {
            "type": String,
            "attr": "name",
            "watchCallbacks": ["nameChanged"]
        },
        "replace": {
            "type": String,
            "attr": "replace",
            "watchCallbacks": ["replaceChanged"]
        },
        "replacements": {
            "state": true
        },
        "resolvedName": {
            "state": true
        },
        "value": {
            "state": true
        }
    }; }
    static get listeners() { return [{
            "name": "document:intlChange",
            "method": "langChangeHandler"
        }]; }
}

export { Dictionary as IntlDictionary, Phrase as IntlPhrase };
