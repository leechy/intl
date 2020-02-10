import { h } from "@stencil/core";
export class Preload {
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
    static get originalStyleUrls() { return {
        "$": ["preload.css"]
    }; }
    static get styleUrls() { return {
        "$": ["preload.css"]
    }; }
    static get properties() { return {
        "name": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "name",
            "reflect": false
        }
    }; }
    static get states() { return {
        "inGroup": {},
        "didLoad": {}
    }; }
    static get elementRef() { return "element"; }
}
