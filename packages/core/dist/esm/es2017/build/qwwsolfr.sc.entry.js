/*! Built with http://stenciljs.com */
import { h } from '../intl.core.js';

class Preload {
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
    static get is() { return "intl-preload"; }
    static get properties() { return {
        "didLoad": {
            "state": true
        },
        "element": {
            "elementRef": true
        },
        "inGroup": {
            "state": true
        },
        "name": {
            "type": String,
            "attr": "name",
            "mutable": true
        }
    }; }
    static get style() { return "intl-preload{display:inline-block}"; }
}

export { Preload as IntlPreload };
