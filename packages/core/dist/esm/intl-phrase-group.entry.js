import { r as registerInstance, h, c as getElement } from './core-5c47e8bc.js';

const PhraseGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    async componentWillLoad() {
        await this.resolveName();
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
};

export { PhraseGroup as intl_phrase_group };
