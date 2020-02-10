import { h } from "@stencil/core";
import { locale as appLocale } from '../../utils/locale';
/**
 * Plural is a web component that enables plural sensitive formatting,
 * adhering to variations of plural rules per locale.
 *
 * It uses `Intl.PluralRules` under the hood, providing a slot-based interface
 * for passing in different options.
 *
 * #### Simple Example, Singular/Plural
 * ```html
<intl-plural number="1">
  <span slot="one">dog</span>
  <span> dogs </span>
</intl-plural>
 ```
 * #### Complex Example, Ordinal
 * ```html
<intl-plural locale="en-US" type="ordinal" number="1">
  <span slot="one">st</span>
  <span slot="two">nd</span>
  <span slot="few">rd</span>
  <span>th</span>
</intl-plural>
 ```
 */
export class Plural {
    onValueChanged() {
        if (typeof this.value === 'number')
            this.format();
        this.value = Number.parseInt(this.value);
    }
    langChanged() {
        const locale = this.locale || appLocale.get();
        if (locale.indexOf(',') > -1) {
            this._locale = locale.split(',').map(x => x.trim()).filter(x => x);
        }
        else {
            this._locale = locale;
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
    static get is() { return "intl-plural"; }
    static get originalStyleUrls() { return {
        "$": ["plural.css"]
    }; }
    static get styleUrls() { return {
        "$": ["plural.css"]
    }; }
    static get properties() { return {
        "value": {
            "type": "any",
            "mutable": true,
            "complexType": {
                "original": "number|string",
                "resolved": "number | string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "An integer value which will be passed to `Intl.PluralRules`\n\nIf omitted, the componenet will automatically look for an integer value in the parent element,\nlike so:\n```html\n<div>\n42\n<intl-plural locale=\"en-US\" type=\"ordinal\">\n<span slot=\"one\">st</span>\n<span slot=\"two\">nd</span>\n<span slot=\"few\">rd</span>\n<span>th</span>\n</intl-plural>\n</div>\n```"
            },
            "attribute": "value",
            "reflect": false
        },
        "localeMatcher": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'lookup' | 'best fit'",
                "resolved": "\"best fit\" | \"lookup\"",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The `localeMatcher` that will be passed to `Intl.PluralRules` \n\nPossible options are `best fit` (default) or `lookup`"
            },
            "attribute": "locale-matcher",
            "reflect": false
        },
        "type": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'cardinal' | 'ordinal'",
                "resolved": "\"cardinal\" | \"ordinal\"",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The `type` that will be passed to `Intl.PluralRules`\n\nPossible options are `cardinal` (default) or `ordinal`"
            },
            "attribute": "type",
            "reflect": false
        },
        "locale": {
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
                "text": "The `locale` that will be passed to `Intl.PluralRules`\n\nYou may also pass in a comma-separated list of values, providing fallbacks"
            },
            "attribute": "locale",
            "reflect": false
        }
    }; }
    static get states() { return {
        "formatter": {},
        "result": {}
    }; }
    static get methods() { return {
        "format": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "value",
            "methodName": "onValueChanged"
        }, {
            "propName": "locale",
            "methodName": "langChanged"
        }]; }
}
