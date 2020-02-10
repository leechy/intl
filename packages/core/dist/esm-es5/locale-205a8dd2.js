var get = function () {
    return document.documentElement.getAttribute('lang');
};
var set = function (locale) {
    document.documentElement.setAttribute('lang', locale);
};
var locale = { get: get, set: set };
export { locale as l };
