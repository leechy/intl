import { r as registerInstance, h, c as getElement } from './core-5c47e8bc.js';

const Preload = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return h("slot", null);
    }
    get element() { return getElement(this); }
    static get style() { return "intl-preload{display:inline-block}"; }
};

export { Preload as intl_preload };
