var __awaiter=this&&this.__awaiter||function(t,e,r,n){function i(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,o){function s(t){try{u(n.next(t))}catch(e){o(e)}}function a(t){try{u(n["throw"](t))}catch(e){o(e)}}function u(t){t.done?r(t.value):i(t.value).then(s,a)}u((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(t){return function(e){return u([t,e])}}function u(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(o=s[0]&2?i["return"]:s[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o;if(i=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;i=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(o=r.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){r.label=s[1];break}if(s[0]===6&&r.label<o[1]){r.label=o[1];o=s;break}if(o&&r.label<o[2]){r.label=o[2];r.ops.push(s);break}if(o[2])r.ops.pop();r.trys.pop();continue}s=e.call(t,r)}catch(a){s=[6,a];i=0}finally{n=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;for(var n=Array(t),i=0,e=0;e<r;e++)for(var o=arguments[e],s=0,a=o.length;s<a;s++,i++)n[i]=o[s];return n};System.register(["./p-1b1995da.system.js","./p-9cff29b1.system.js","./p-94369f05.system.js"],(function(t){"use strict";var e,r,n,i,o;return{setters:[function(t){e=t.r;r=t.d;n=t.c},function(t){i=t.l},function(t){o=t.d}],execute:function(){var s=t("intl_dictionary",function(){function t(t){e(this,t);this.hasWarned=false;this.dicts=new Map;this.requests=new Map;this.default="en";this.onIntlChange=r(this,"intlChange",7)}t.prototype.parseLocales=function(t){this.locales=t.replace(" ","").split(",");console.log(this.locales)};t.prototype.langChanged=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:this.triggerLocaleChange();return[4,this.setDirFromDict()];case 1:t.sent();return[2]}}))}))};t.prototype.dirChanged=function(){if(!this.dir.match(/ltr|rtl|auto/g))this.dir="auto";this.triggerLocaleChange()};t.prototype.triggerLocaleChange=function(){var t=this,e=t.locale,r=t.dir;this.onIntlChange.emit({dir:r,locale:e})};t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,r,n,i,s,a,u;return __generator(this,(function(c){switch(c.label){case 0:this.dicts=new Map;this.addMO();if(!this.locale){n=((t=window)===null||t===void 0?void 0:t.navigator.languages)||[((e=window)===null||e===void 0?void 0:e.navigator).userLanguage||((r=window)===null||r===void 0?void 0:r.navigator.language)||this.default];i=function(t){if(s.locales.includes(n[t])){s.locale=n[t];return"break"}var e=s.locales.find((function(e){return n[t].startsWith(e)}));if(e){s.locale=e;return"break"}};s=this;for(a=0;a<n.length;a=a+1){u=i(a);if(u==="break")break}if(!this.locale){this.locale=this.default}}if(!this.dir){this.dir=o.get()}if(!this.src)throw new Error("<intl-dictionary> requires a `src` attribute. Did you forget to include an <intl-dictionary> element in your app root?");return[4,this.fetchDictionary()];case 1:c.sent();return[2]}}))}))};t.prototype.componentDidUnload=function(){this.removeMO()};t.prototype.exists=function(t){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(r){try{e=new Headers;return[2,fetch(t,{method:"GET",headers:e}).then((function(t){var e=t.status,r=t.url,n=t.headers;if(e!==200)return false;var i=n.get("content-type");var o=i&&i.includes("application/json");if(!o)return false;return r}))]}catch(n){return[2,Promise.resolve(false)]}return[2]}))}))};t.prototype.isFile=function(t){var e=this.src.replace(/\/$/,"")+"/"+t+".json";return this.exists(e)};t.prototype.isDirWithIndex=function(t){var e=this.src.replace(/\/$/,"")+"/"+t+"/index.json";return this.exists(e)};t.prototype.getResourceUrl=function(t){return __awaiter(this,void 0,void 0,(function(){var e,r,n;return __generator(this,(function(i){switch(i.label){case 0:e=false;i.label=1;case 1:i.trys.push([1,5,,6]);return[4,this.isFile(t)];case 2:e=i.sent();if(!e&&!this.hasWarned){r=["%c"+"INTL","background: #ffc107; color: white; padding: 2px 4px; border-radius: 2px; font-size: 0.9em;"];console.log.apply(console,__spreadArrays(r,['Getting a "404 (Not Found)" error?\n      You can safely ignore it! 👉 https://intljs.com/faq#404']));this.hasWarned=true}if(!!e)return[3,4];return[4,this.isDirWithIndex(t)];case 3:e=i.sent();i.label=4;case 4:return[3,6];case 5:n=i.sent();return[3,6];case 6:return[2,Promise.resolve(e)]}}))}))};t.prototype.fetchGlobal=function(){return __awaiter(this,void 0,void 0,(function(){var t,e;var r=this;return __generator(this,(function(n){try{t=this.src.replace(/\/$/,"")+"/index.json";e=fetch(t).then((function(t){return t.json()})).then((function(t){return r.global=t})).then((function(){r.requests.delete("global")}));this.requests.set("global",e);return[2,this.requests.get("global")]}catch(i){return[2,Promise.resolve()]}return[2]}))}))};t.prototype.addDictionary=function(t,e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(r){this.dicts.set(t,e);return[2]}))}))};t.prototype.appendToDictionary=function(t,e,r){return __awaiter(this,void 0,void 0,(function(){var n;return __generator(this,(function(i){n=new Map(this.dicts.get(t)).set(e,r);this.dicts.set(t,n);return[2]}))}))};t.prototype.fetchDictionary=function(t){if(t===void 0){t=this.locale}return __awaiter(this,void 0,void 0,(function(){var e;var r=this;return __generator(this,(function(n){try{if(this.requests.has(t)){return[2,this.requests.get(t)]}else{e=this.getResourceUrl(t).then((function(t){if(!t)throw new Error;return fetch(t)})).then((function(t){return t.json()})).then((function(t){return r.jsonToDict(t)})).then((function(e){return r.addDictionary(t,e)})).then((function(){r.requests.delete(t)})).catch((function(){r.requests.delete(t)}));this.requests.set(t,e);return[2,this.requests.get(t)]}}catch(i){}return[2]}))}))};t.prototype.lazyloadRef=function(t,e,r){if(r===void 0){r=this.locale}return __awaiter(this,void 0,void 0,(function(){var n,i,o;var s=this;return __generator(this,(function(a){try{n=t.url.trim().replace(/^\//,"").replace(/\:locale/g,r);if(!n.endsWith(".json")){console.error('Unable to lazyload "'+e+'" because it is not a .json file');return[2]}i=this.src.replace(/\/$/,"")+"/"+n;if(this.requests.has(i)){return[2,this.requests.get(i)]}else{o=fetch(i).then((function(t){return t.json()})).then((function(t){return s.appendToDictionary(r,e,t)})).then((function(){s.requests.delete(i)})).catch((function(){s.requests.delete(i)}));this.requests.set(i,o);return[2,this.requests.get(r)]}}catch(u){}return[2]}))}))};t.prototype.resolvePhrase=function(t,e){if(e===void 0){e=this.locale}return __awaiter(this,void 0,void 0,(function(){var r,n,i,o,s,a;return __generator(this,(function(u){switch(u.label){case 0:if(!!this.dicts.has(e))return[3,2];return[4,this.fetchDictionary(e)];case 1:u.sent();u.label=2;case 2:r=this.dicts.get(e);n=t.split(".").map((function(t){return t.trim()})).filter((function(t){return t})),i=n[0],o=n.slice(1);if(!(r&&r.has(i)))return[3,5];s=r.get(i);if(!(typeof s==="object"&&s.lazy))return[3,4];return[4,this.lazyloadRef(s,i,e)];case 3:u.sent();return[2,this.resolvePhrase(t,e)];case 4:if(o.length){a=o.reduce((function(t,e){return t[e]}),r.get(i));return[2,typeof s==="object"&&typeof a==="string"?a:false]}else{return[2,typeof s==="string"?s:false]}return[3,6];case 5:console.error('Unable to resolve phrase "'+t+'" for "'+e+'"');return[2,false];case 6:return[2]}}))}))};t.prototype.jsonToDict=function(t){return __awaiter(this,void 0,void 0,(function(){var e,r;return __generator(this,(function(n){switch(n.label){case 0:if(!!this.global)return[3,2];return[4,this.fetchGlobal()];case 1:n.sent();n.label=2;case 2:e=this.global?Object.entries(this.global):[];r=Object.entries(t);return[2,new Map(__spreadArrays(e,r))]}}))}))};t.prototype.addMO=function(){var t=this;if("MutationObserver"in window){this.removeMO();this.mo=new MutationObserver((function(e){if(e[0].attributeName==="lang"){t.locale=i.get()}if(e[0].attributeName==="dir"){t.dir=o.get()}}));this.mo.observe(document.documentElement,{attributes:true,attributeFilter:["lang","dir"]})}};t.prototype.removeMO=function(){if(this.mo){this.mo.disconnect();this.mo=undefined}};t.prototype.setDirFromDict=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){switch(e.label){case 0:if(!this.requests.has(this.locale))return[3,2];return[4,this.requests.get(this.locale)];case 1:e.sent();e.label=2;case 2:if(this.dicts.has(this.locale)){t=this.dicts.get(this.locale).get("dir");if(t&&typeof t==="string"&&/ltr|rtl|auto/g.test(t)&&this.dir!==t){o.set(t)}}return[2]}}))}))};Object.defineProperty(t.prototype,"element",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{locale:["langChanged"],dir:["dirChanged"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host{display:none}"},enumerable:true,configurable:true});return t}())}}}));