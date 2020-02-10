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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { r as registerInstance, d as createEvent, c as getElement } from './core-5c47e8bc.js';
import { l as locale } from './locale-205a8dd2.js';
import { d as direction } from './direction-01e446bf.js';
var Dictionary = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.hasWarned = false;
        this.dicts = new Map();
        this.requests = new Map();
        this.default = 'en';
        this.onIntlChange = createEvent(this, "intlChange", 7);
    }
    class_1.prototype.parseLocales = function () {
        this.availableLocales = this.locales.replace(' ', '').split(',');
        console.log(this.availableLocales);
    };
    class_1.prototype.langChanged = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.triggerLocaleChange();
                        return [4 /*yield*/, this.setDirFromDict()];
                    case 1:
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.dirChanged = function () {
        if (!this.dir.match(/ltr|rtl|auto/g))
            this.dir = 'auto';
        this.triggerLocaleChange();
    };
    class_1.prototype.triggerLocaleChange = function () {
        var _d = this, locale = _d.locale, dir = _d.dir;
        this.onIntlChange.emit({
            dir: dir,
            locale: locale
        });
    };
    class_1.prototype.componentWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, targets_1, _loop_1, this_1, i, state_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.dicts = new Map();
                        this.addMO();
                        if (!this.locale) {
                            targets_1 = ((_a = window) === null || _a === void 0 ? void 0 : _a.navigator.languages) || // user language preferences list
                                [
                                    ((_b = window) === null || _b === void 0 ? void 0 : _b.navigator).userLanguage || // IE 10-
                                        ((_c = window) === null || _c === void 0 ? void 0 : _c.navigator.language) || // browser ui language
                                        this.default // there is no window (sapper | node)
                                ];
                            _loop_1 = function (i) {
                                if (this_1.availableLocales.includes(targets_1[i])) {
                                    this_1.locale = targets_1[i]; // exact match
                                    return "break";
                                }
                                var bestMatch = this_1.availableLocales.find(function (locale) { return targets_1[i].startsWith(locale); });
                                if (bestMatch) {
                                    this_1.locale = bestMatch; // en-US -> en
                                    return "break";
                                }
                            };
                            this_1 = this;
                            for (i = 0; i < targets_1.length; i = i + 1) {
                                state_1 = _loop_1(i);
                                if (state_1 === "break")
                                    break;
                            }
                            // if locale is still unknown, then getting default locale
                            if (!this.locale) {
                                this.locale = this.default;
                            }
                        }
                        if (!this.dir) {
                            this.dir = direction.get();
                        }
                        if (!this.src)
                            throw new Error('<intl-dictionary> requires a `src` attribute. Did you forget to include an <intl-dictionary> element in your app root?');
                        return [4 /*yield*/, this.fetchDictionary()];
                    case 1:
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.componentDidUnload = function () {
        this.removeMO();
    };
    class_1.prototype.exists = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            var headers;
            return __generator(this, function (_d) {
                try {
                    headers = new Headers();
                    // headers.append('Accept', 'application/json');
                    // headers.append('Content-Type', 'application/json');
                    return [2 /*return*/, fetch(path, {
                            method: 'GET',
                            headers: headers
                        }).then(function (response) {
                            var status = response.status, url = response.url, headers = response.headers;
                            if (status !== 200)
                                return false;
                            var contentType = headers.get('content-type');
                            var isJSON = (contentType && contentType.includes('application/json'));
                            if (!isJSON)
                                return false;
                            return url;
                        })];
                }
                catch (e) {
                    return [2 /*return*/, Promise.resolve(false)];
                }
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.isFile = function (locale) {
        var path = this.src.replace(/\/$/, '') + "/" + locale + ".json";
        return this.exists(path);
    };
    class_1.prototype.isDirWithIndex = function (locale) {
        var path = this.src.replace(/\/$/, '') + "/" + locale + "/index.json";
        return this.exists(path);
    };
    class_1.prototype.getResourceUrl = function (locale) {
        return __awaiter(this, void 0, void 0, function () {
            var file, styledPrefix, e_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        file = false;
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, this.isFile(locale)];
                    case 2:
                        file = _d.sent();
                        if (!file && !this.hasWarned) {
                            styledPrefix = [
                                '%c' + 'INTL',
                                "background: #ffc107; color: white; padding: 2px 4px; border-radius: 2px; font-size: 0.9em;"
                            ];
                            console.log.apply(console, __spreadArrays(styledPrefix, ["Getting a \"404 (Not Found)\" error?\n      You can safely ignore it! \uD83D\uDC49 https://intljs.com/faq#404"]));
                            this.hasWarned = true;
                        }
                        if (!!file) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.isDirWithIndex(locale)];
                    case 3:
                        file = _d.sent();
                        _d.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        e_1 = _d.sent();
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/, Promise.resolve(file)];
                }
            });
        });
    };
    class_1.prototype.fetchGlobal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, request;
            var _this = this;
            return __generator(this, function (_d) {
                try {
                    path = this.src.replace(/\/$/, '') + "/index.json";
                    request = fetch(path)
                        .then(function (response) { return response.json(); })
                        .then(function (dict) { return _this.global = dict; })
                        .then(function () {
                        _this.requests.delete('global');
                    });
                    this.requests.set('global', request);
                    return [2 /*return*/, this.requests.get('global')];
                }
                catch (e) {
                    return [2 /*return*/, Promise.resolve()];
                }
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.addDictionary = function (locale, dict) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_d) {
                this.dicts.set(locale, dict);
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.appendToDictionary = function (locale, dictName, dict) {
        return __awaiter(this, void 0, void 0, function () {
            var copy;
            return __generator(this, function (_d) {
                copy = new Map(this.dicts.get(locale)).set(dictName, dict);
                this.dicts.set(locale, copy);
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.fetchDictionary = function (locale) {
        if (locale === void 0) { locale = this.locale; }
        return __awaiter(this, void 0, void 0, function () {
            var request;
            var _this = this;
            return __generator(this, function (_d) {
                try {
                    // There is already a fetch event in progress
                    // To avoid multiple fetches, just `await` the one in progress
                    if (this.requests.has(locale)) {
                        return [2 /*return*/, this.requests.get(locale)];
                    }
                    else {
                        request = this.getResourceUrl(locale)
                            .then(function (path) {
                            if (!path)
                                throw new Error();
                            return fetch(path);
                        })
                            .then(function (response) { return response.json(); })
                            .then(function (dict) { return _this.jsonToDict(dict); })
                            .then(function (dict) { return _this.addDictionary(locale, dict); })
                            .then(function () {
                            // Request has been resolved
                            _this.requests.delete(locale);
                        })
                            .catch(function () {
                            // Request threw an error
                            _this.requests.delete(locale);
                        });
                        this.requests.set(locale, request);
                        return [2 /*return*/, this.requests.get(locale)];
                    }
                }
                catch (e) { }
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.lazyloadRef = function (ref, refName, locale) {
        if (locale === void 0) { locale = this.locale; }
        return __awaiter(this, void 0, void 0, function () {
            var url, path_1, request;
            var _this = this;
            return __generator(this, function (_d) {
                try {
                    url = ref.url.trim().replace(/^\//, '').replace(/\:locale/g, locale);
                    if (!url.endsWith('.json')) {
                        console.error("Unable to lazyload \"" + refName + "\" because it is not a .json file");
                        return [2 /*return*/];
                    }
                    path_1 = this.src.replace(/\/$/, '') + "/" + url;
                    if (this.requests.has(path_1)) {
                        return [2 /*return*/, this.requests.get(path_1)];
                    }
                    else {
                        request = fetch(path_1)
                            .then(function (response) { return response.json(); })
                            .then(function (dict) { return _this.appendToDictionary(locale, refName, dict); })
                            .then(function () {
                            // Request has been resolved
                            _this.requests.delete(path_1);
                        })
                            .catch(function () {
                            // Request threw an error
                            _this.requests.delete(path_1);
                        });
                        this.requests.set(path_1, request);
                        return [2 /*return*/, this.requests.get(locale)];
                    }
                }
                catch (e) { }
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.resolvePhrase = function (name, locale) {
        if (locale === void 0) { locale = this.locale; }
        return __awaiter(this, void 0, void 0, function () {
            var dict, _d, key, parts, values, resolved;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!!this.dicts.has(locale)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fetchDictionary(locale)];
                    case 1:
                        _e.sent();
                        _e.label = 2;
                    case 2:
                        dict = this.dicts.get(locale);
                        _d = name.split('.').map(function (x) { return x.trim(); }).filter(function (x) { return x; }), key = _d[0], parts = _d.slice(1);
                        if (!(dict && dict.has(key))) return [3 /*break*/, 5];
                        values = dict.get(key);
                        if (!(typeof values === 'object' && values.lazy)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.lazyloadRef(values, key, locale)];
                    case 3:
                        _e.sent();
                        return [2 /*return*/, this.resolvePhrase(name, locale)];
                    case 4:
                        if (parts.length) {
                            resolved = parts.reduce(function (o, i) { return o[i]; }, dict.get(key));
                            return [2 /*return*/, (typeof values === 'object' && typeof resolved === 'string') ? resolved : false];
                        }
                        else {
                            return [2 /*return*/, (typeof values === 'string') ? values : false];
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        console.error("Unable to resolve phrase \"" + name + "\" for \"" + locale + "\"");
                        return [2 /*return*/, false];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.jsonToDict = function (obj) {
        return __awaiter(this, void 0, void 0, function () {
            var global, dict;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!!this.global) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fetchGlobal()];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        global = this.global ? Object.entries(this.global) : [];
                        dict = Object.entries(obj);
                        return [2 /*return*/, new Map(__spreadArrays(global, dict))];
                }
            });
        });
    };
    class_1.prototype.addMO = function () {
        var _this = this;
        if ('MutationObserver' in window) {
            this.removeMO();
            this.mo = new MutationObserver(function (data) {
                if (data[0].attributeName === 'lang') {
                    _this.locale = locale.get();
                }
                if (data[0].attributeName === 'dir') {
                    _this.dir = direction.get();
                }
            });
            this.mo.observe(document.documentElement, { attributes: true, attributeFilter: ['lang', 'dir'] });
        }
    };
    class_1.prototype.removeMO = function () {
        if (this.mo) {
            this.mo.disconnect();
            this.mo = undefined;
        }
    };
    class_1.prototype.setDirFromDict = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dir;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!this.requests.has(this.locale)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.requests.get(this.locale)];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        if (this.dicts.has(this.locale)) {
                            dir = this.dicts.get(this.locale).get('dir');
                            if (dir && typeof dir === 'string' && /ltr|rtl|auto/g.test(dir) && this.dir !== dir) {
                                direction.set(dir);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "locales": ["parseLocales"],
                "locale": ["langChanged"],
                "dir": ["dirChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ":host{display:none}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { Dictionary as intl_dictionary };
