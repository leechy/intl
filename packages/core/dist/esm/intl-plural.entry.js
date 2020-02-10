import { r as registerInstance, h, c as getElement } from './core-5c47e8bc.js';
import { l as locale } from './locale-205a8dd2.js';

const Plural = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    onValueChanged() {
        if (typeof this.value === 'number')
            this.format();
        this.value = Number.parseInt(this.value);
    }
    langChanged() {
        const locale$1 = this.locale || locale.get();
        if (locale$1.indexOf(',') > -1) {
            this._locale = locale$1.split(',').map(x => x.trim()).filter(x => x);
        }
        else {
            this._locale = locale$1;
        }
    }
    componentWillLoad() {
        this.langChanged();
        this.setFormatter();
        if (this.value === undefined) {
            this.el.parentElement.componentOnReady().then((parent) => {
                this.value = parent.innerText.trim();
            });
        }
        else {
            this.onValueChanged();
        }
    }
    async format() {
        this.result = this.formatter.select(this.value);
    }
    setFormatter() {
        const { localeMatcher, type } = this;
        this.formatter = new Intl.PluralRules(this._locale, {
            localeMatcher, type
        });
    }
    render() {
        switch (this.result) {
            case 'other': return h("slot", null);
            default: return h("slot", { name: this.result });
        }
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "value": ["onValueChanged"],
        "locale": ["langChanged"]
    }; }
    static get style() { return ""; }
};

export { Plural as intl_plural };
