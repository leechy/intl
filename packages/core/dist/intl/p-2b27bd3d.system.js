var __awaiter=this&&this.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function l(e){try{u(r.next(e))}catch(t){a(t)}}function o(e){try{u(r["throw"](e))}catch(t){a(t)}}function u(e){e.done?n(e.value):i(e.value).then(l,o)}u((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,l;return l={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function o(e){return function(t){return u([e,t])}}function u(l){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(a=l[0]&2?i["return"]:l[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,l[1])).done)return a;if(i=0,a)l=[l[0]&2,a.value];switch(l[0]){case 0:case 1:a=l;break;case 4:n.label++;return{value:l[1],done:false};case 5:n.label++;i=l[1];l=[0];continue;case 7:l=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!a||l[1]>a[0]&&l[1]<a[3])){n.label=l[1];break}if(l[0]===6&&n.label<a[1]){n.label=a[1];a=l;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(l);break}if(a[2])n.ops.pop();n.trys.pop();continue}l=t.call(e,n)}catch(o){l=[6,o];i=0}finally{r=a=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),i=0,t=0;t<n;t++)for(var a=arguments[t],l=0,o=a.length;l<o;l++,i++)r[i]=a[l];return r};System.register(["./p-9cff29b1.system.js","./p-94369f05.system.js"],(function(e){"use strict";return{setters:[function(t){e("locale",t.l)},function(t){e("direction",t.d)}],execute:function(){e("phrase",t);function t(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,document.querySelector("intl-dictionary").componentOnReady().then((function(t){return t.resolvePhrase(e)})).then((function(e){return e?e:null}))]}))}))}var n=function(){function e(e){this.callback=e;this.previous=[];this.phraseFilter=null;this.localeFilter=null;this.oldValue=false}e.prototype.observe=function(e){var t=this;if(e===void 0){e={}}if(e.localeFilter)this.localeFilter=e.localeFilter;if(e.phraseFilter)this.phraseFilter=e.phraseFilter;if(e.oldValue)this.oldValue=e.oldValue;var n=function(e){return function(n){if(!t.localeFilter||!t.localeFilter.length||t.localeFilter&&t.localeFilter.findIndex((function(e){return e===n.detail.locale}))>-1){var r={type:"locale",value:n.detail.locale};if(t.oldValue){var i=t.previous.find((function(e){return e.type==="locale"}));r=Object.assign(Object.assign({},r),{oldValue:i?i.value:null})}var a=[r];if(t.phraseFilter){var l=t.phraseFilter.map((function(t){return e.resolvePhrase(t).then((function(e){return e?e:null}))}));Promise.all(l).then((function(e){var n=e.map((function(e,n){var r={type:"phrase",phraseName:t.phraseFilter[n],value:e};if(t.oldValue){var i=t.previous.find((function(e){return e.type==="phrase"&&e.phraseName===t.phraseFilter[n]}));r=Object.assign(Object.assign({},r),{oldValue:i?i.value:null})}return r}));a=__spreadArrays(a,n);t.previous=a;t.callback(a)}))}else{t.previous=a;t.callback(a)}}}};var r;document.querySelector("intl-dictionary").componentOnReady().then((function(e){r=n(e);r({detail:{locale:e.locale,dir:e.dir}});return e})).then((function(e){t.onChange=function(e){return r(e)};e.addEventListener("intlChange",t.onChange)}))};e.prototype.disconnect=function(){var e=this;document.querySelector("intl-dictionary").componentOnReady().then((function(t){return t.removeEventListener("intlChange",e.onChange)}))};return e}();e("LanguageObserver",n)}}}));