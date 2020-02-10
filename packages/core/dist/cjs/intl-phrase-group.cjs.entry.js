'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-0e546f5c.js');

const PhraseGroup = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
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
        return core.h("slot", null);
    }
    get element() { return core.getElement(this); }
};

exports.intl_phrase_group = PhraseGroup;
