/*! Built with http://stenciljs.com */
const{h:t}=window.intl;import{a as e,b as s}from"./chunk-b900dc0c.js";class r{constructor(){this.hasWarned=!1,this.dicts=new Map,this.requests=new Map}async langChanged(){this.triggerLocaleChange(),await this.setDirFromDict()}dirChanged(t,e){console.log({newValue:t,oldValue:e}),this.dir.match(/ltr|rtl|auto/g)||(this.dir="auto"),this.triggerLocaleChange()}triggerLocaleChange(){const{lang:t,dir:e}=this;this.onIntlChange.emit({dir:e,locale:t})}async componentWillLoad(){if(this.dicts=new Map,this.addMO(),this.lang||(this.lang=e.get()),this.dir||(this.dir=s.get()),!this.src)throw new Error("<intl-dictionary> requires a `src` attribute. Did you forget to include an <intl-dictionary> element in your app root?");await this.fetchDictionary()}componentDidUnload(){this.removeMO()}async exists(t){try{const e=new Headers;return fetch(t,{method:"GET",headers:e}).then(t=>{const{status:e,url:s,headers:r}=t;if(200!==e)return!1;const i=r.get("content-type");return!(!i||!i.includes("application/json"))&&s})}catch(t){return Promise.resolve(!1)}}isFile(t){const e=`${this.src.replace(/\/$/,"")}/${t}.json`;return this.exists(e)}isDirWithIndex(t){const e=`${this.src.replace(/\/$/,"")}/${t}/index.json`;return this.exists(e)}async getResourceUrl(t){let e=!1;try{(e=await this.isFile(t))||this.hasWarned||(console.log(...["%cINTL","background: #ffc107; color: white; padding: 2px 4px; border-radius: 2px; font-size: 0.9em;"],'Getting a "404 (Not Found)" error?\n      You can safely ignore it! 👉 https://intljs.com/faq#404'),this.hasWarned=!0),e||(e=await this.isDirWithIndex(t))}catch(t){}return Promise.resolve(e)}async fetchGlobal(){try{const t=`${this.src.replace(/\/$/,"")}/index.json`,e=fetch(t).then(t=>t.json()).then(t=>this.global=t).then(()=>{this.requests.delete("global")});return this.requests.set("global",e),this.requests.get("global")}catch(t){return Promise.resolve()}}async addDictionary(t,e){this.dicts.set(t,e)}async appendToDictionary(t,e,s){const r=new Map(this.dicts.get(t)).set(e,s);this.dicts.set(t,r)}async fetchDictionary(t=this.lang){try{if(this.requests.has(t))return this.requests.get(t);{const e=this.getResourceUrl(t).then(t=>{if(!t)throw new Error;return fetch(t)}).then(t=>t.json()).then(t=>this.jsonToDict(t)).then(e=>this.addDictionary(t,e)).then(()=>{this.requests.delete(t)}).catch(()=>{this.requests.delete(t)});return this.requests.set(t,e),this.requests.get(t)}}catch(t){}}async lazyloadRef(t,e,s=this.lang){try{const r=t.url.trim().replace(/^\//,"").replace(/\:lang/g,s);if(!r.endsWith(".json"))return void console.error(`Unable to lazyload "${e}" because it is not a .json file`);const i=`${this.src.replace(/\/$/,"")}/${r}`;if(this.requests.has(i))return this.requests.get(i);{const t=fetch(i).then(t=>t.json()).then(t=>this.appendToDictionary(s,e,t)).then(()=>{this.requests.delete(i)}).catch(()=>{this.requests.delete(i)});return this.requests.set(i,t),this.requests.get(s)}}catch(t){}}async resolvePhrase(t,e=this.lang){this.dicts.has(e)||await this.fetchDictionary(e);const s=this.dicts.get(e),[r,...i]=t.split(".").map(t=>t.trim()).filter(t=>t);if(s&&s.has(r)){const a=s.get(r);if("object"==typeof a&&a.lazy)return await this.lazyloadRef(a,r,e),this.resolvePhrase(t,e);if(i.length){let t=i.reduce((t,e)=>t[e],s.get(r));return"object"==typeof a&&"string"==typeof t&&t}return"string"==typeof a&&a}return console.error(`Unable to resolve phrase "${t}" for "${e}"`),!1}async jsonToDict(t){this.global||await this.fetchGlobal();const e=this.global?Object.entries(this.global):[],s=Object.entries(t);return new Map([...e,...s])}addMO(){"MutationObserver"in window&&(this.removeMO(),this.mo=new MutationObserver(t=>{"lang"===t[0].attributeName&&(this.lang=e.get()),"dir"===t[0].attributeName&&(this.dir=s.get())}),this.mo.observe(document.documentElement,{attributes:!0,attributeFilter:["lang","dir"]}))}removeMO(){this.mo&&(this.mo.disconnect(),this.mo=void 0)}async setDirFromDict(){if(this.requests.has(this.lang)&&await this.requests.get(this.lang),this.dicts.has(this.lang)){const t=this.dicts.get(this.lang).get("dir");t&&"string"==typeof t&&/ltr|rtl|auto/g.test(t)&&this.dir!==t&&s.set(t)}}static get is(){return"intl-dictionary"}static get encapsulation(){return"shadow"}static get properties(){return{dir:{type:String,attr:"dir",mutable:!0,watchCallbacks:["dirChanged"]},element:{elementRef:!0},global:{state:!0},lang:{type:String,attr:"lang",mutable:!0,watchCallbacks:["langChanged"]},resolvePhrase:{method:!0},src:{type:String,attr:"src"}}}static get events(){return[{name:"intlChange",method:"onIntlChange",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".sc-intl-dictionary-h{display:none}"}}class i{constructor(){this.inGroup=!1,this.value="",this.error="",this.resolvedName="",this.lazy=!0}async nameChanged(){await this.resolveName(),this.addIO()}replaceChanged(){switch(typeof this.replace){case"string":try{const t=JSON.parse(this.replace);this.replacements=new Map(Object.entries(t))}catch(t){throw new Error('Invalid value for "replace" in <intl-phrase>. "replace" must either be an object or a valid JSON string.')}break;case"object":this.replacements=new Map(Object.entries(this.replace));break;default:throw new Error('Invalid value for "replace" in <intl-phrase>. "replace" must either be an object or a valid JSON string.')}}langChangeHandler(){this.addIO()}async componentWillLoad(){this.addIO(),this.replace&&this.replaceChanged(),await this.resolveName()}componentWillUnload(){this.removeIO()}async resolveName(){return new Promise(t=>{const e=this.element.parentElement.closest("intl-phrase-group");e?(this.inGroup=!0,this.resolvedName=`${e.name}.${this.name}`,t()):(this.resolvedName=this.name,t())})}async resolveValue(){const{resolvedName:t,lang:e}=this,s=await this.dict.componentOnReady(),r=this.replaceValue(await s.resolvePhrase(t,e));!1!==r&&void 0!==r?this.value=r:this.error=this.name}replaceValue(t){return!1===t?t:t.replace(/{{\s*([^}}\s]*)\s*}}/g,(t,e)=>this.replacements.has(e)?this.replacements.get(e).toString():t)}addIO(){void 0!==this.name&&("IntersectionObserver"in window?(this.io=new IntersectionObserver(t=>{t[0].isIntersecting&&this.resolveValue().then(()=>{this.removeIO()})}),this.io.observe(this.element)):setTimeout(()=>this.resolveValue(),200))}removeIO(){this.io&&(this.io.disconnect(),this.io=void 0)}hostData(){return{style:{color:""!==this.error?"red":null}}}render(){return this.value?t("ins",{innerHTML:this.value}):this.error}static get is(){return"intl-phrase"}static get encapsulation(){return"shadow"}static get properties(){return{dict:{connect:"intl-dictionary"},element:{elementRef:!0},error:{state:!0},inGroup:{state:!0},lang:{type:String,attr:"lang",mutable:!0},lazy:{type:Boolean,attr:"lazy"},name:{type:String,attr:"name",watchCallbacks:["nameChanged"]},replace:{type:String,attr:"replace",watchCallbacks:["replaceChanged"]},replacements:{state:!0},resolvedName:{state:!0},value:{state:!0}}}static get listeners(){return[{name:"document:intlChange",method:"langChangeHandler"}]}}export{r as IntlDictionary,i as IntlPhrase};