/*! Built with http://stenciljs.com */
import { h } from '../intl.core.js';

const get = () => {
    return document.documentElement.getAttribute('lang');
};
const set = (locale) => {
    document.documentElement.setAttribute('lang', locale);
};
const locale = { get, set };

const get$1 = () => {
    return document.documentElement.getAttribute('dir');
};
const set$1 = (dir) => {
    document.documentElement.setAttribute('dir', dir);
};
const direction = { get: get$1, set: set$1 };

export { locale as a, direction as b };
