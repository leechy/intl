import { h } from "@stencil/core";
export class Phrase {
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
        if (this.lazy) {
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
        "lazy": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "lazy",
            "reflect": false,
            "defaultValue": "true"
        },
        "name": {
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
            "attribute": "name",
            "reflect": false
        },
        "replace": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string | { [key: string]: any }",
                "resolved": "string | { [key: string]: any; }",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "replace",
            "reflect": false
        }
    }; }
    static get connectProps() { return [{
            "name": "dict",
            "connect": "intl-dictionary"
        }]; }
    static get states() { return {
        "inGroup": {},
        "replacements": {},
        "value": {},
        "error": {},
        "resolvedName": {}
    }; }
    static get elementRef() { return "element"; }
    static get watchers() { return [{
            "propName": "name",
            "methodName": "nameChanged"
        }, {
            "propName": "replace",
            "methodName": "replaceChanged"
        }]; }
    static get listeners() { return [{
            "name": "intlChange",
            "method": "langChangeHandler",
            "target": "document",
            "capture": false,
            "passive": false
        }]; }
}
