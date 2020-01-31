const get = () => {
    return document.documentElement.getAttribute('dir');
};
const set = (dir) => {
    document.documentElement.setAttribute('dir', dir);
};
export const direction = { get, set };
