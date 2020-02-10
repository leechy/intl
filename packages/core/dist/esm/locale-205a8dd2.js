const get = () => {
    return document.documentElement.getAttribute('lang');
};
const set = (locale) => {
    document.documentElement.setAttribute('lang', locale);
};
const locale = { get, set };

export { locale as l };
