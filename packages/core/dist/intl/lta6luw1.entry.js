/*! Built with http://stenciljs.com */
const{h:t}=window.intl;import{a as e}from"./chunk-b900dc0c.js";class a{onValueChanged(){"number"==typeof this.value&&this.format(),this.value=Number.parseInt(this.value)}langChanged(){const t=this.lang||e.get();this._locale=t.indexOf(",")>-1?t.split(",").map(t=>t.trim()).filter(t=>t):t}componentWillLoad(){this.langChanged(),this.setFormatter(),void 0===this.value?this.el.parentElement.componentOnReady().then(t=>{this.value=t.innerText.trim()}):this.onValueChanged()}format(){this.result=this.formatter.select(this.value)}setFormatter(){const{localeMatcher:t,type:e}=this;this.formatter=new Intl.PluralRules(this._locale,{localeMatcher:t,type:e})}render(){switch(this.result){case"other":return t("slot",null);default:return t("slot",{name:this.result})}}static get is(){return"intl-plural"}static get encapsulation(){return"shadow"}static get properties(){return{el:{elementRef:!0},format:{method:!0},formatter:{state:!0},lang:{type:String,attr:"lang",watchCallbacks:["langChanged"]},localeMatcher:{type:String,attr:"locale-matcher"},result:{state:!0},type:{type:String,attr:"type"},value:{type:"Any",attr:"value",mutable:!0,watchCallbacks:["onValueChanged"]}}}static get style(){return""}}export{a as IntlPlural};