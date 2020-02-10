'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-0e546f5c.js');

const Phrase = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.inGroup = false;
        this.value = '';
        this.error = '';
        this.resolvedName = '';
        this.lazy = true;
        this.dict = core.getConnect(this, "intl-dictionary");
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
        console.log('langChangeHandler');
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
        const { resolvedName: name, locale } = this;
        const dict = await this.dict.componentOnReady();
        const value = this.replaceValue(await dict.resolvePhrase(name, locale));
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
                // because there will only ever be one instance
                // of the element we are observing
                // we can just use data[0]
                if (data[0].isIntersecting) {
                    this.resolveValue().then(() => {
                        this.removeIO();
                    });
                }
            });
            this.io.observe(this.element);
        }
        else {
            // fall back to setTimeout for Safari and IE
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
    __stencil_render() {
        return this.value ? core.h("ins", { style: { textDecoration: 'inherit' }, innerHTML: this.value }) : this.error;
    }
    get element() { return core.getElement(this); }
    static get watchers() { return {
        "name": ["nameChanged"],
        "replace": ["replaceChanged"]
    }; }
    render() { return core.h(core.Host, this.hostData(), this.__stencil_render()); }
};

exports.intl_phrase = Phrase;
