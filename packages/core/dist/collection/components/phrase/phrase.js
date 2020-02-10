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
