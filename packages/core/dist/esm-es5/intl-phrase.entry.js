var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, g as getConnect, h, c as getElement, H as Host } from './core-5c47e8bc.js';
var Phrase = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.inGroup = false;
        this.value = '';
        this.error = '';
        this.resolvedName = '';
        this.lazy = true;
        this.dict = getConnect(this, "intl-dictionary");
    }
    class_1.prototype.nameChanged = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.resolveName()];
                    case 1:
                        _a.sent();
                        this.addIO();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.replaceChanged = function () {
        switch (typeof this.replace) {
            case 'string':
                try {
                    var obj = JSON.parse(this.replace);
                    this.replacements = new Map(Object.entries(obj));
                }
                catch (e) {
                    throw new Error("Invalid value for \"replace\" in <intl-phrase>. \"replace\" must either be an object or a valid JSON string.");
                }
                break;
            case 'object':
                this.replacements = new Map(Object.entries(this.replace));
                break;
            default: throw new Error("Invalid value for \"replace\" in <intl-phrase>. \"replace\" must either be an object or a valid JSON string.");
        }
    };
    class_1.prototype.langChangeHandler = function () {
        console.log('langChangeHandler');
        this.addIO();
    };
    class_1.prototype.componentWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.addIO();
                        if (this.replace)
                            this.replaceChanged();
                        return [4 /*yield*/, this.resolveName()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.componentWillUnload = function () {
        this.removeIO();
    };
    class_1.prototype.resolveName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var group = _this.element.parentElement.closest('intl-phrase-group');
                        if (group) {
                            _this.inGroup = true;
                            _this.resolvedName = group.name + "." + _this.name;
                            resolve();
                        }
                        else {
                            _this.resolvedName = _this.name;
                            resolve();
                        }
                    })];
            });
        });
    };
    class_1.prototype.resolveValue = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, locale, dict, value, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this, name = _a.resolvedName, locale = _a.locale;
                        return [4 /*yield*/, this.dict.componentOnReady()];
                    case 1:
                        dict = _c.sent();
                        _b = this.replaceValue;
                        return [4 /*yield*/, dict.resolvePhrase(name, locale)];
                    case 2:
                        value = _b.apply(this, [_c.sent()]);
                        if (value !== false && value !== undefined) {
                            this.value = value;
                        }
                        else {
                            this.error = this.name;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.replaceValue = function (value) {
        var _this = this;
        if (value === false)
            return value;
        var hbs = /{{\s*([^}}\s]*)\s*}}/g;
        return value.replace(hbs, function (matched, ident) {
            return _this.replacements.has(ident) ? _this.replacements.get(ident).toString() : matched;
        });
    };
    class_1.prototype.addIO = function () {
        var _this = this;
        if (this.name === undefined)
            return;
        if ('IntersectionObserver' in window) {
            this.io = new IntersectionObserver(function (data) {
                // because there will only ever be one instance
                // of the element we are observing
                // we can just use data[0]
                if (data[0].isIntersecting) {
                    _this.resolveValue().then(function () {
                        _this.removeIO();
                    });
                }
            });
            this.io.observe(this.element);
        }
        else {
            // fall back to setTimeout for Safari and IE
            setTimeout(function () { return _this.resolveValue(); }, 200);
        }
    };
    class_1.prototype.removeIO = function () {
        if (this.io) {
            this.io.disconnect();
            this.io = undefined;
        }
    };
    class_1.prototype.hostData = function () {
        return {
            style: {
                color: (this.error !== '') ? 'red' : null
            }
        };
    };
    class_1.prototype.__stencil_render = function () {
        return this.value ? h("ins", { style: { textDecoration: 'inherit' }, innerHTML: this.value }) : this.error;
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "name": ["nameChanged"],
                "replace": ["replaceChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    class_1.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
    return class_1;
}());
export { Phrase as intl_phrase };
