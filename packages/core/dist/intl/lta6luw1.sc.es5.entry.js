/*! Built with http://stenciljs.com */
intl.loadBundle("lta6luw1",["exports","./chunk-181f951f.js"],function(t,e){var n=window.intl.h,r=function(){function t(){}return t.prototype.onValueChanged=function(){"number"==typeof this.value&&this.format(),this.value=Number.parseInt(this.value)},t.prototype.langChanged=function(){var t=this.lang||e.locale.get();this._locale=t.indexOf(",")>-1?t.split(",").map(function(t){return t.trim()}).filter(function(t){return t}):t},t.prototype.componentWillLoad=function(){var t=this;this.langChanged(),this.setFormatter(),void 0===this.value?this.el.parentElement.componentOnReady().then(function(e){t.value=e.innerText.trim()}):this.onValueChanged()},t.prototype.format=function(){this.result=this.formatter.select(this.value)},t.prototype.setFormatter=function(){this.formatter=new Intl.PluralRules(this._locale,{localeMatcher:this.localeMatcher,type:this.type})},t.prototype.render=function(){switch(this.result){case"other":return n("slot",null);default:return n("slot",{name:this.result})}},Object.defineProperty(t,"is",{get:function(){return"intl-plural"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{el:{elementRef:!0},format:{method:!0},formatter:{state:!0},lang:{type:String,attr:"lang",watchCallbacks:["langChanged"]},localeMatcher:{type:String,attr:"locale-matcher"},result:{state:!0},type:{type:String,attr:"type"},value:{type:"Any",attr:"value",mutable:!0,watchCallbacks:["onValueChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return""},enumerable:!0,configurable:!0}),t}();t.IntlPlural=r,Object.defineProperty(t,"__esModule",{value:!0})});