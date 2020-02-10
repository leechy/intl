import { r as registerInstance, h, c as getElement } from './core-5c47e8bc.js';
import { l as locale } from './locale-205a8dd2.js';
var Plural = /** @class */ (function () {
    function Plural(hostRef) {
        registerInstance(this, hostRef);
    }
    Plural.prototype.onValueChanged = function () {
        if (typeof this.value === 'number')
            this.format();
        this.value = Number.parseInt(this.value);
    };
    Plural.prototype.langChanged = function () {
        var locale$1 = this.locale || locale.get();
        if (locale$1.indexOf(',') > -1) {
            this._locale = locale$1.split(',').map(function (x) { return x.trim(); }).filter(function (x) { return x; });
        }
        else {
            this._locale = locale$1;
        }
    };
    Plural.prototype.componentWillLoad = function () {
        var _this = this;
        this.langChanged();
        this.setFormatter();
        if (this.value === undefined) {
            this.el.parentElement.componentOnReady().then(function (parent) {
                _this.value = parent.innerText.trim();
            });
        }
        else {
            this.onValueChanged();
        }
    };
    Plural.prototype.format = function () {
        this.result = this.formatter.select(this.value);
    };
    Plural.prototype.setFormatter = function () {
        var _a = this, localeMatcher = _a.localeMatcher, type = _a.type;
        this.formatter = new Intl.PluralRules(this._locale, {
            localeMatcher: localeMatcher, type: type
        });
    };
    Plural.prototype.render = function () {
        switch (this.result) {
            case 'other': return h("slot", null);
            default: return h("slot", { name: this.result });
        }
    };
    Object.defineProperty(Plural.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Plural, "watchers", {
        get: function () {
            return {
                "value": ["onValueChanged"],
                "locale": ["langChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Plural, "style", {
        get: function () { return ""; },
        enumerable: true,
        configurable: true
    });
    return Plural;
}());
export { Plural as intl_plural };
