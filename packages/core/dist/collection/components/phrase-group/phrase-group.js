import { h } from "@stencil/core";
export class PhraseGroup {
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
    static get is() { return "intl-phrase-group"; }
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
        "inGroup": {}
    }; }
    static get elementRef() { return "element"; }
}
