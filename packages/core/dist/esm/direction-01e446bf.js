const get = () => {
    return document.documentElement.getAttribute('dir');
};
const set = (dir) => {
    document.documentElement.setAttribute('dir', dir);
};
const direction = { get, set };

export { direction as d };
