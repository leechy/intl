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
}
