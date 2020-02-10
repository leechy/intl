var get = function () {
    return document.documentElement.getAttribute('dir');
};
var set = function (dir) {
    document.documentElement.setAttribute('dir', dir);
};
var direction = { get: get, set: set };
export { direction as d };
