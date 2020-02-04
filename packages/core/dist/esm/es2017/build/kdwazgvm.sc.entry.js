/*! Built with http://stenciljs.com */
import { h } from '../intl.core.js';

import { a as locale } from './chunk-b900dc0c.js';

class Plural {
    onValueChanged() {
        if (typeof this.value === 'number')
            this.format();
        this.value = Number.parseInt(this.value);
    }
    langChanged() {
        const lang = this.lang || locale.get();
        if (lang.indexOf(',') > -1) {
            this._locale = lang.split(',').map(x => x.trim()).filter(x => x);
        }
        else {
            this._locale = lang;
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
            case 'other': return h("slot", null);
            default: return h("slot", { name: this.result });
        }
    }
    static get is() { return "intl-plural"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "format": {
            "method": true
        },
        "formatter": {
            "state": true
        },
        "lang": {
            "type": String,
            "attr": "lang",
            "watchCallbacks": ["langChanged"]
        },
        "localeMatcher": {
            "type": String,
            "attr": "locale-matcher"
        },
        "result": {
            "state": true
        },
        "type": {
            "type": String,
            "attr": "type"
        },
        "value": {
            "type": "Any",
            "attr": "value",
            "mutable": true,
            "watchCallbacks": ["onValueChanged"]
        }
    }; }
    static get style() { return ""; }
}

export { Plural as IntlPlural };
