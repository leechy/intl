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
export { l as locale } from './locale-205a8dd2.js';
export { d as direction } from './direction-01e446bf.js';
function phrase(name) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, document
                    .querySelector('intl-dictionary').componentOnReady()
                    .then(function (dict) { return dict.resolvePhrase(name); })
                    .then(function (x) { return x ? x : null; })];
        });
    });
}
var LanguageObserver = /** @class */ (function () {
    /** Creates and returns a new LanguageObserver which will invoke a specified callback function when Language changes occur. */
    function LanguageObserver(callback) {
        this.callback = callback;
        this.previous = [];
        this.phraseFilter = null;
        this.localeFilter = null;
        this.oldValue = false;
    }
    /** Configures the LanguageObserver to begin receiving notifications through its callback function when Language changes matching the given options occur. */
    LanguageObserver.prototype.observe = function (opts) {
        var _this = this;
        if (opts === void 0) { opts = {}; }
        if (opts.localeFilter)
            this.localeFilter = opts.localeFilter;
        if (opts.phraseFilter)
            this.phraseFilter = opts.phraseFilter;
        if (opts.oldValue)
            this.oldValue = opts.oldValue;
        var onChange = function (dict) {
            return function (event) {
                if (!_this.localeFilter || !_this.localeFilter.length || _this.localeFilter && _this.localeFilter.findIndex(function (x) { return x === event.detail.locale; }) > -1) {
                    var localeRecord = {
                        type: 'locale',
                        value: event.detail.locale
                    };
                    if (_this.oldValue) {
                        var oldValue = _this.previous.find(function (x) { return x.type === 'locale'; });
                        localeRecord = Object.assign(Object.assign({}, localeRecord), { oldValue: oldValue ? oldValue.value : null });
                    }
                    var records_1 = [localeRecord];
                    if (_this.phraseFilter) {
                        var phrases = _this.phraseFilter.map(function (phrase) { return dict.resolvePhrase(phrase).then(function (x) { return x ? x : null; }); });
                        Promise.all(phrases)
                            .then(function (resolved) {
                            var phraseRecords = resolved.map(function (value, i) {
                                var record = {
                                    type: 'phrase',
                                    phraseName: _this.phraseFilter[i],
                                    value: value
                                };
                                if (_this.oldValue) {
                                    var oldValue = _this.previous.find(function (x) { return x.type === 'phrase' && x.phraseName === _this.phraseFilter[i]; });
                                    record = Object.assign(Object.assign({}, record), { oldValue: oldValue ? oldValue.value : null });
                                }
                                return record;
                            });
                            records_1 = __spreadArrays(records_1, phraseRecords);
                            _this.previous = records_1;
                            _this.callback(records_1);
                        });
                    }
                    else {
                        _this.previous = records_1;
                        _this.callback(records_1);
                    }
                }
            };
        };
        var cb;
        document
            .querySelector('intl-dictionary').componentOnReady()
            .then(function (dict) {
            cb = onChange(dict);
            cb({ detail: { locale: dict.locale, dir: dict.dir } });
            return dict;
        })
            .then(function (dict) {
            _this.onChange = function (event) { return cb(event); };
            dict.addEventListener('intlChange', _this.onChange);
        });
    };
    /** Stops the LanguageObserver instance from receiving further notifications until and unless observe() is called again. */
    LanguageObserver.prototype.disconnect = function () {
        var _this = this;
        document
            .querySelector('intl-dictionary').componentOnReady()
            .then(function (dict) { return dict.removeEventListener('intlChange', _this.onChange); });
    };
    return LanguageObserver;
}());
export { LanguageObserver, phrase };
