'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-0e546f5c.js');

const Preload = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    async componentWillLoad() {
        await this.resolveName();
        this.element.addEventListener('mouseenter', () => this.onHoverIn());
        this.element.addEventListener('mouseleave', () => this.onHoverOut());
    }
    async onHoverIn() {
        if (!this.didLoad) {
            const dict = await document.querySelector('intl-dictionary').componentOnReady();
            await dict.resolvePhrase(this.name);
            this.didLoad = true;
        }
    }
    onHoverOut() {
        this.element.removeEventListener('mouseenter', () => this.onHoverIn());
        this.element.removeEventListener('mouseleave', () => this.onHoverOut());
    }
    async resolveName() {
        return new Promise((resolve) => {
            const group = this.element.parentElement.closest('intl-phrase-group');
            if (group) {
                this.inGroup = true;
                this.name = `${group.name}.${this.name}`;
                resolve();
            }
            else {
                resolve();
            }
        });
    }
    render() {
        return core.h("slot", null);
    }
    get element() { return core.getElement(this); }
    static get style() { return "intl-preload{display:inline-block}"; }
};

exports.intl_preload = Preload;
