/*! Built with http://stenciljs.com */
var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(i,o){function a(e){try{c(n.next(e))}catch(e){o(e)}}function s(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(a,s)}c((n=n.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};intl.loadBundle("bbnewgmp",["exports","./chunk-181f951f.js"],function(e,t){var r=window.intl.h,n=function(){function e(){this.hasWarned=!1,this.dicts=new Map,this.requests=new Map}return e.prototype.langChanged=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return this.triggerLocaleChange(),[4,this.setDirFromDict()];case 1:return e.sent(),[2]}})})},e.prototype.dirChanged=function(e,t){console.log({newValue:e,oldValue:t}),this.dir.match(/ltr|rtl|auto/g)||(this.dir="auto"),this.triggerLocaleChange()},e.prototype.triggerLocaleChange=function(){this.onIntlChange.emit({dir:this.dir,locale:this.lang})},e.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:if(this.dicts=new Map,this.addMO(),this.lang||(this.lang=t.locale.get()),this.dir||(this.dir=t.direction.get()),!this.src)throw new Error("<intl-dictionary> requires a `src` attribute. Did you forget to include an <intl-dictionary> element in your app root?");return[4,this.fetchDictionary()];case 1:return e.sent(),[2]}})})},e.prototype.componentDidUnload=function(){this.removeMO()},e.prototype.exists=function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(r){try{return t=new Headers,[2,fetch(e,{method:"GET",headers:t}).then(function(e){var t=e.url;if(200!==e.status)return!1;var r=e.headers.get("content-type");return!(!r||!r.includes("application/json"))&&t})]}catch(e){return[2,Promise.resolve(!1)]}return[2]})})},e.prototype.isFile=function(e){var t=this.src.replace(/\/$/,"")+"/"+e+".json";return this.exists(t)},e.prototype.isDirWithIndex=function(e){var t=this.src.replace(/\/$/,"")+"/"+e+"/index.json";return this.exists(t)},e.prototype.getResourceUrl=function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(r){switch(r.label){case 0:t=!1,r.label=1;case 1:return r.trys.push([1,5,,6]),[4,this.isFile(e)];case 2:return(t=r.sent())||this.hasWarned||(console.log.apply(console,["%cINTL","background: #ffc107; color: white; padding: 2px 4px; border-radius: 2px; font-size: 0.9em;"].concat(['Getting a "404 (Not Found)" error?\n      You can safely ignore it! 👉 https://intljs.com/faq#404'])),this.hasWarned=!0),t?[3,4]:[4,this.isDirWithIndex(e)];case 3:t=r.sent(),r.label=4;case 4:return[3,6];case 5:return r.sent(),[3,6];case 6:return[2,Promise.resolve(t)]}})})},e.prototype.fetchGlobal=function(){return __awaiter(this,void 0,void 0,function(){var e,t,r=this;return __generator(this,function(n){try{return e=this.src.replace(/\/$/,"")+"/index.json",t=fetch(e).then(function(e){return e.json()}).then(function(e){return r.global=e}).then(function(){r.requests.delete("global")}),this.requests.set("global",t),[2,this.requests.get("global")]}catch(e){return[2,Promise.resolve()]}return[2]})})},e.prototype.addDictionary=function(e,t){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(r){return this.dicts.set(e,t),[2]})})},e.prototype.appendToDictionary=function(e,t,r){return __awaiter(this,void 0,void 0,function(){var n;return __generator(this,function(i){return n=new Map(this.dicts.get(e)).set(t,r),this.dicts.set(e,n),[2]})})},e.prototype.fetchDictionary=function(e){return void 0===e&&(e=this.lang),__awaiter(this,void 0,void 0,function(){var t,r=this;return __generator(this,function(n){try{return this.requests.has(e)?[2,this.requests.get(e)]:(t=this.getResourceUrl(e).then(function(e){if(!e)throw new Error;return fetch(e)}).then(function(e){return e.json()}).then(function(e){return r.jsonToDict(e)}).then(function(t){return r.addDictionary(e,t)}).then(function(){r.requests.delete(e)}).catch(function(){r.requests.delete(e)}),this.requests.set(e,t),[2,this.requests.get(e)])}catch(e){}return[2]})})},e.prototype.lazyloadRef=function(e,t,r){return void 0===r&&(r=this.lang),__awaiter(this,void 0,void 0,function(){var n,i,o,a=this;return __generator(this,function(s){try{return(n=e.url.trim().replace(/^\//,"").replace(/\:lang/g,r)).endsWith(".json")?(i=this.src.replace(/\/$/,"")+"/"+n,this.requests.has(i)?[2,this.requests.get(i)]:(o=fetch(i).then(function(e){return e.json()}).then(function(e){return a.appendToDictionary(r,t,e)}).then(function(){a.requests.delete(i)}).catch(function(){a.requests.delete(i)}),this.requests.set(i,o),[2,this.requests.get(r)])):(console.error('Unable to lazyload "'+t+'" because it is not a .json file'),[2])}catch(e){}return[2]})})},e.prototype.resolvePhrase=function(e,t){return void 0===t&&(t=this.lang),__awaiter(this,void 0,void 0,function(){var r,n,i,o,a,s;return __generator(this,function(c){switch(c.label){case 0:return this.dicts.has(t)?[3,2]:[4,this.fetchDictionary(t)];case 1:c.sent(),c.label=2;case 2:return r=this.dicts.get(t),n=e.split(".").map(function(e){return e.trim()}).filter(function(e){return e}),i=n[0],o=n.slice(1),r&&r.has(i)?"object"==typeof(a=r.get(i))&&a.lazy?[4,this.lazyloadRef(a,i,t)]:[3,4]:[3,5];case 3:return c.sent(),[2,this.resolvePhrase(e,t)];case 4:return o.length?(s=o.reduce(function(e,t){return e[t]},r.get(i)),[2,"object"==typeof a&&"string"==typeof s&&s]):[2,"string"==typeof a&&a];case 5:return console.error('Unable to resolve phrase "'+e+'" for "'+t+'"'),[2,!1];case 6:return[2]}})})},e.prototype.jsonToDict=function(e){return __awaiter(this,void 0,void 0,function(){var t,r;return __generator(this,function(n){switch(n.label){case 0:return this.global?[3,2]:[4,this.fetchGlobal()];case 1:n.sent(),n.label=2;case 2:return t=this.global?Object.entries(this.global):[],r=Object.entries(e),[2,new Map(t.concat(r))]}})})},e.prototype.addMO=function(){var e=this;"MutationObserver"in window&&(this.removeMO(),this.mo=new MutationObserver(function(r){"lang"===r[0].attributeName&&(e.lang=t.locale.get()),"dir"===r[0].attributeName&&(e.dir=t.direction.get())}),this.mo.observe(document.documentElement,{attributes:!0,attributeFilter:["lang","dir"]}))},e.prototype.removeMO=function(){this.mo&&(this.mo.disconnect(),this.mo=void 0)},e.prototype.setDirFromDict=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(r){switch(r.label){case 0:return this.requests.has(this.lang)?[4,this.requests.get(this.lang)]:[3,2];case 1:r.sent(),r.label=2;case 2:return this.dicts.has(this.lang)&&(e=this.dicts.get(this.lang).get("dir"))&&"string"==typeof e&&/ltr|rtl|auto/g.test(e)&&this.dir!==e&&t.direction.set(e),[2]}})})},Object.defineProperty(e,"is",{get:function(){return"intl-dictionary"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{dir:{type:String,attr:"dir",mutable:!0,watchCallbacks:["dirChanged"]},element:{elementRef:!0},global:{state:!0},lang:{type:String,attr:"lang",mutable:!0,watchCallbacks:["langChanged"]},resolvePhrase:{method:!0},src:{type:String,attr:"src"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"intlChange",method:"onIntlChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{display:none}"},enumerable:!0,configurable:!0}),e}(),i=function(){function e(){this.inGroup=!1,this.value="",this.error="",this.resolvedName="",this.lazy=!0}return e.prototype.nameChanged=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,this.resolveName()];case 1:return e.sent(),this.addIO(),[2]}})})},e.prototype.replaceChanged=function(){switch(typeof this.replace){case"string":try{var e=JSON.parse(this.replace);this.replacements=new Map(Object.entries(e))}catch(e){throw new Error('Invalid value for "replace" in <intl-phrase>. "replace" must either be an object or a valid JSON string.')}break;case"object":this.replacements=new Map(Object.entries(this.replace));break;default:throw new Error('Invalid value for "replace" in <intl-phrase>. "replace" must either be an object or a valid JSON string.')}},e.prototype.langChangeHandler=function(){this.addIO()},e.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return this.addIO(),this.replace&&this.replaceChanged(),[4,this.resolveName()];case 1:return e.sent(),[2]}})})},e.prototype.componentWillUnload=function(){this.removeIO()},e.prototype.resolveName=function(){return __awaiter(this,void 0,void 0,function(){var e=this;return __generator(this,function(t){return[2,new Promise(function(t){var r=e.element.parentElement.closest("intl-phrase-group");r?(e.inGroup=!0,e.resolvedName=r.name+"."+e.name,t()):(e.resolvedName=e.name,t())})]})})},e.prototype.resolveValue=function(){return __awaiter(this,void 0,void 0,function(){var e,t,r,n,i,o;return __generator(this,function(a){switch(a.label){case 0:return t=(e=this).resolvedName,r=e.lang,[4,this.dict.componentOnReady()];case 1:return n=a.sent(),o=this.replaceValue,[4,n.resolvePhrase(t,r)];case 2:return!1!==(i=o.apply(this,[a.sent()]))&&void 0!==i?this.value=i:this.error=this.name,[2]}})})},e.prototype.replaceValue=function(e){var t=this;return!1===e?e:e.replace(/{{\s*([^}}\s]*)\s*}}/g,function(e,r){return t.replacements.has(r)?t.replacements.get(r).toString():e})},e.prototype.addIO=function(){var e=this;void 0!==this.name&&("IntersectionObserver"in window?(this.io=new IntersectionObserver(function(t){t[0].isIntersecting&&e.resolveValue().then(function(){e.removeIO()})}),this.io.observe(this.element)):setTimeout(function(){return e.resolveValue()},200))},e.prototype.removeIO=function(){this.io&&(this.io.disconnect(),this.io=void 0)},e.prototype.hostData=function(){return{style:{color:""!==this.error?"red":null}}},e.prototype.render=function(){return this.value?r("ins",{innerHTML:this.value}):this.error},Object.defineProperty(e,"is",{get:function(){return"intl-phrase"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{dict:{connect:"intl-dictionary"},element:{elementRef:!0},error:{state:!0},inGroup:{state:!0},lang:{type:String,attr:"lang",mutable:!0},lazy:{type:Boolean,attr:"lazy"},name:{type:String,attr:"name",watchCallbacks:["nameChanged"]},replace:{type:String,attr:"replace",watchCallbacks:["replaceChanged"]},replacements:{state:!0},resolvedName:{state:!0},value:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"document:intlChange",method:"langChangeHandler"}]},enumerable:!0,configurable:!0}),e}();e.IntlDictionary=n,e.IntlPhrase=i,Object.defineProperty(e,"__esModule",{value:!0})});