'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-0e546f5c.js');
const locale = require('./locale-2b02513f.js');

const Plural = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    onValueChanged() {
        if (typeof this.value === 'number')
            this.format();
        this.value = Number.parseInt(this.value);
    }
    langChanged() {
        const locale$1 = this.locale || locale.locale.get();
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
    format() {
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
            case 'other': return core.h("slot", null);
            default: return core.h("slot", { name: this.result });
        }
    }
    get el() { return core.getElement(this); }
    static get watchers() { return {
        "value": ["onValueChanged"],
        "locale": ["langChanged"]
    }; }
    static get style() { return ""; }
};

exports.intl_plural = Plural;
