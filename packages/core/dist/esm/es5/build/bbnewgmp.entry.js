/*! Built with http://stenciljs.com */
import*as tslib_1 from"../polyfills/tslib.js";import{h}from"../intl.core.js";import{a as locale,b as direction}from"./chunk-b900dc0c.js";var Dictionary=function(){function t(){this.hasWarned=!1,this.dicts=new Map,this.requests=new Map}return t.prototype.langChanged=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){return tslib_1.__generator(this,function(t){switch(t.label){case 0:return this.triggerLocaleChange(),[4,this.setDirFromDict()];case 1:return t.sent(),[2]}})})},t.prototype.dirChanged=function(t,e){console.log({newValue:t,oldValue:e}),this.dir.match(/ltr|rtl|auto/g)||(this.dir="auto"),this.triggerLocaleChange()},t.prototype.triggerLocaleChange=function(){this.onIntlChange.emit({dir:this.dir,locale:this.lang})},t.prototype.componentWillLoad=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){return tslib_1.__generator(this,function(t){switch(t.label){case 0:if(this.dicts=new Map,this.addMO(),this.lang||(this.lang=locale.get()),this.dir||(this.dir=direction.get()),!this.src)throw new Error("<intl-dictionary> requires a `src` attribute. Did you forget to include an <intl-dictionary> element in your app root?");return[4,this.fetchDictionary()];case 1:return t.sent(),[2]}})})},t.prototype.componentDidUnload=function(){this.removeMO()},t.prototype.exists=function(t){return tslib_1.__awaiter(this,void 0,void 0,function(){var e;return tslib_1.__generator(this,function(r){try{return e=new Headers,[2,fetch(t,{method:"GET",headers:e}).then(function(t){var e=t.url;if(200!==t.status)return!1;var r=t.headers.get("content-type");return!(!r||!r.includes("application/json"))&&e})]}catch(t){return[2,Promise.resolve(!1)]}return[2]})})},t.prototype.isFile=function(t){var e=this.src.replace(/\/$/,"")+"/"+t+".json";return this.exists(e)},t.prototype.isDirWithIndex=function(t){var e=this.src.replace(/\/$/,"")+"/"+t+"/index.json";return this.exists(e)},t.prototype.getResourceUrl=function(t){return tslib_1.__awaiter(this,void 0,void 0,function(){var e;return tslib_1.__generator(this,function(r){switch(r.label){case 0:e=!1,r.label=1;case 1:return r.trys.push([1,5,,6]),[4,this.isFile(t)];case 2:return(e=r.sent())||this.hasWarned||(console.log.apply(console,["%cINTL","background: #ffc107; color: white; padding: 2px 4px; border-radius: 2px; font-size: 0.9em;"].concat(['Getting a "404 (Not Found)" error?\n      You can safely ignore it! 👉 https://intljs.com/faq#404'])),this.hasWarned=!0),e?[3,4]:[4,this.isDirWithIndex(t)];case 3:e=r.sent(),r.label=4;case 4:return[3,6];case 5:return r.sent(),[3,6];case 6:return[2,Promise.resolve(e)]}})})},t.prototype.fetchGlobal=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){var t,e,r=this;return tslib_1.__generator(this,function(n){try{return t=this.src.replace(/\/$/,"")+"/index.json",e=fetch(t).then(function(t){return t.json()}).then(function(t){return r.global=t}).then(function(){r.requests.delete("global")}),this.requests.set("global",e),[2,this.requests.get("global")]}catch(t){return[2,Promise.resolve()]}return[2]})})},t.prototype.addDictionary=function(t,e){return tslib_1.__awaiter(this,void 0,void 0,function(){return tslib_1.__generator(this,function(r){return this.dicts.set(t,e),[2]})})},t.prototype.appendToDictionary=function(t,e,r){return tslib_1.__awaiter(this,void 0,void 0,function(){var n;return tslib_1.__generator(this,function(i){return n=new Map(this.dicts.get(t)).set(e,r),this.dicts.set(t,n),[2]})})},t.prototype.fetchDictionary=function(t){return void 0===t&&(t=this.lang),tslib_1.__awaiter(this,void 0,void 0,function(){var e,r=this;return tslib_1.__generator(this,function(n){try{return this.requests.has(t)?[2,this.requests.get(t)]:(e=this.getResourceUrl(t).then(function(t){if(!t)throw new Error;return fetch(t)}).then(function(t){return t.json()}).then(function(t){return r.jsonToDict(t)}).then(function(e){return r.addDictionary(t,e)}).then(function(){r.requests.delete(t)}).catch(function(){r.requests.delete(t)}),this.requests.set(t,e),[2,this.requests.get(t)])}catch(t){}return[2]})})},t.prototype.lazyloadRef=function(t,e,r){return void 0===r&&(r=this.lang),tslib_1.__awaiter(this,void 0,void 0,function(){var n,i,o,s=this;return tslib_1.__generator(this,function(a){try{return(n=t.url.trim().replace(/^\//,"").replace(/\:lang/g,r)).endsWith(".json")?(i=this.src.replace(/\/$/,"")+"/"+n,this.requests.has(i)?[2,this.requests.get(i)]:(o=fetch(i).then(function(t){return t.json()}).then(function(t){return s.appendToDictionary(r,e,t)}).then(function(){s.requests.delete(i)}).catch(function(){s.requests.delete(i)}),this.requests.set(i,o),[2,this.requests.get(r)])):(console.error('Unable to lazyload "'+e+'" because it is not a .json file'),[2])}catch(t){}return[2]})})},t.prototype.resolvePhrase=function(t,e){return void 0===e&&(e=this.lang),tslib_1.__awaiter(this,void 0,void 0,function(){var r,n,i,o,s,a;return tslib_1.__generator(this,function(c){switch(c.label){case 0:return this.dicts.has(e)?[3,2]:[4,this.fetchDictionary(e)];case 1:c.sent(),c.label=2;case 2:return r=this.dicts.get(e),n=t.split(".").map(function(t){return t.trim()}).filter(function(t){return t}),i=n[0],o=n.slice(1),r&&r.has(i)?"object"==typeof(s=r.get(i))&&s.lazy?[4,this.lazyloadRef(s,i,e)]:[3,4]:[3,5];case 3:return c.sent(),[2,this.resolvePhrase(t,e)];case 4:return o.length?(a=o.reduce(function(t,e){return t[e]},r.get(i)),[2,"object"==typeof s&&"string"==typeof a&&a]):[2,"string"==typeof s&&s];case 5:return console.error('Unable to resolve phrase "'+t+'" for "'+e+'"'),[2,!1];case 6:return[2]}})})},t.prototype.jsonToDict=function(t){return tslib_1.__awaiter(this,void 0,void 0,function(){var e,r;return tslib_1.__generator(this,function(n){switch(n.label){case 0:return this.global?[3,2]:[4,this.fetchGlobal()];case 1:n.sent(),n.label=2;case 2:return e=this.global?Object.entries(this.global):[],r=Object.entries(t),[2,new Map(e.concat(r))]}})})},t.prototype.addMO=function(){var t=this;"MutationObserver"in window&&(this.removeMO(),this.mo=new MutationObserver(function(e){"lang"===e[0].attributeName&&(t.lang=locale.get()),"dir"===e[0].attributeName&&(t.dir=direction.get())}),this.mo.observe(document.documentElement,{attributes:!0,attributeFilter:["lang","dir"]}))},t.prototype.removeMO=function(){this.mo&&(this.mo.disconnect(),this.mo=void 0)},t.prototype.setDirFromDict=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){var t;return tslib_1.__generator(this,function(e){switch(e.label){case 0:return this.requests.has(this.lang)?[4,this.requests.get(this.lang)]:[3,2];case 1:e.sent(),e.label=2;case 2:return this.dicts.has(this.lang)&&(t=this.dicts.get(this.lang).get("dir"))&&"string"==typeof t&&/ltr|rtl|auto/g.test(t)&&this.dir!==t&&direction.set(t),[2]}})})},Object.defineProperty(t,"is",{get:function(){return"intl-dictionary"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{dir:{type:String,attr:"dir",mutable:!0,watchCallbacks:["dirChanged"]},element:{elementRef:!0},global:{state:!0},lang:{type:String,attr:"lang",mutable:!0,watchCallbacks:["langChanged"]},resolvePhrase:{method:!0},src:{type:String,attr:"src"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"intlChange",method:"onIntlChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{display:none}"},enumerable:!0,configurable:!0}),t}(),Phrase=function(){function t(){this.inGroup=!1,this.value="",this.error="",this.resolvedName="",this.lazy=!0}return t.prototype.nameChanged=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){return tslib_1.__generator(this,function(t){switch(t.label){case 0:return[4,this.resolveName()];case 1:return t.sent(),this.addIO(),[2]}})})},t.prototype.replaceChanged=function(){switch(typeof this.replace){case"string":try{var t=JSON.parse(this.replace);this.replacements=new Map(Object.entries(t))}catch(t){throw new Error('Invalid value for "replace" in <intl-phrase>. "replace" must either be an object or a valid JSON string.')}break;case"object":this.replacements=new Map(Object.entries(this.replace));break;default:throw new Error('Invalid value for "replace" in <intl-phrase>. "replace" must either be an object or a valid JSON string.')}},t.prototype.langChangeHandler=function(){this.addIO()},t.prototype.componentWillLoad=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){return tslib_1.__generator(this,function(t){switch(t.label){case 0:return this.addIO(),this.replace&&this.replaceChanged(),[4,this.resolveName()];case 1:return t.sent(),[2]}})})},t.prototype.componentWillUnload=function(){this.removeIO()},t.prototype.resolveName=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){var t=this;return tslib_1.__generator(this,function(e){return[2,new Promise(function(e){var r=t.element.parentElement.closest("intl-phrase-group");r?(t.inGroup=!0,t.resolvedName=r.name+"."+t.name,e()):(t.resolvedName=t.name,e())})]})})},t.prototype.resolveValue=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){var t,e,r,n,i,o;return tslib_1.__generator(this,function(s){switch(s.label){case 0:return e=(t=this).resolvedName,r=t.lang,[4,this.dict.componentOnReady()];case 1:return n=s.sent(),o=this.replaceValue,[4,n.resolvePhrase(e,r)];case 2:return!1!==(i=o.apply(this,[s.sent()]))&&void 0!==i?this.value=i:this.error=this.name,[2]}})})},t.prototype.replaceValue=function(t){var e=this;return!1===t?t:t.replace(/{{\s*([^}}\s]*)\s*}}/g,function(t,r){return e.replacements.has(r)?e.replacements.get(r).toString():t})},t.prototype.addIO=function(){var t=this;void 0!==this.name&&("IntersectionObserver"in window?(this.io=new IntersectionObserver(function(e){e[0].isIntersecting&&t.resolveValue().then(function(){t.removeIO()})}),this.io.observe(this.element)):setTimeout(function(){return t.resolveValue()},200))},t.prototype.removeIO=function(){this.io&&(this.io.disconnect(),this.io=void 0)},t.prototype.hostData=function(){return{style:{color:""!==this.error?"red":null}}},t.prototype.render=function(){return this.value?h("ins",{innerHTML:this.value}):this.error},Object.defineProperty(t,"is",{get:function(){return"intl-phrase"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{dict:{connect:"intl-dictionary"},element:{elementRef:!0},error:{state:!0},inGroup:{state:!0},lang:{type:String,attr:"lang",mutable:!0},lazy:{type:Boolean,attr:"lazy"},name:{type:String,attr:"name",watchCallbacks:["nameChanged"]},replace:{type:String,attr:"replace",watchCallbacks:["replaceChanged"]},replacements:{state:!0},resolvedName:{state:!0},value:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"document:intlChange",method:"langChangeHandler"}]},enumerable:!0,configurable:!0}),t}();export{Dictionary as IntlDictionary,Phrase as IntlPhrase};