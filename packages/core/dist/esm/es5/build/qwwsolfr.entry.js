/*! Built with http://stenciljs.com */
import*as tslib_1 from"../polyfills/tslib.js";import{h}from"../intl.core.js";var Preload=function(){function e(){}return e.prototype.componentWillLoad=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){var e=this;return tslib_1.__generator(this,function(t){switch(t.label){case 0:return[4,this.resolveName()];case 1:return t.sent(),this.element.addEventListener("mouseenter",function(){return e.onHoverIn()}),this.element.addEventListener("mouseleave",function(){return e.onHoverOut()}),[2]}})})},e.prototype.onHoverIn=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){return tslib_1.__generator(this,function(e){switch(e.label){case 0:return this.didLoad?[3,3]:[4,document.querySelector("intl-dictionary").componentOnReady()];case 1:return[4,e.sent().resolvePhrase(this.name)];case 2:e.sent(),this.didLoad=!0,e.label=3;case 3:return[2]}})})},e.prototype.onHoverOut=function(){var e=this;this.element.removeEventListener("mouseenter",function(){return e.onHoverIn()}),this.element.removeEventListener("mouseleave",function(){return e.onHoverOut()})},e.prototype.resolveName=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){var e=this;return tslib_1.__generator(this,function(t){return[2,new Promise(function(t){var n=e.element.parentElement.closest("intl-phrase-group");n?(e.inGroup=!0,e.name=n.name+"."+e.name,t()):t()})]})})},e.prototype.render=function(){return h("slot",null)},Object.defineProperty(e,"is",{get:function(){return"intl-preload"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{didLoad:{state:!0},element:{elementRef:!0},inGroup:{state:!0},name:{type:String,attr:"name",mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"intl-preload{display:inline-block}"},enumerable:!0,configurable:!0}),e}();export{Preload as IntlPreload};