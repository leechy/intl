/*! Built with http://stenciljs.com */
var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{l(r.next(e))}catch(e){i(e)}}function a(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(u,a)}l((r=r.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};intl.loadBundle("qwwsolfr",["exports"],function(e){var t=window.intl.h,n=function(){function e(){}return e.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,function(){var e=this;return __generator(this,function(t){switch(t.label){case 0:return[4,this.resolveName()];case 1:return t.sent(),this.element.addEventListener("mouseenter",function(){return e.onHoverIn()}),this.element.addEventListener("mouseleave",function(){return e.onHoverOut()}),[2]}})})},e.prototype.onHoverIn=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return this.didLoad?[3,3]:[4,document.querySelector("intl-dictionary").componentOnReady()];case 1:return[4,e.sent().resolvePhrase(this.name)];case 2:e.sent(),this.didLoad=!0,e.label=3;case 3:return[2]}})})},e.prototype.onHoverOut=function(){var e=this;this.element.removeEventListener("mouseenter",function(){return e.onHoverIn()}),this.element.removeEventListener("mouseleave",function(){return e.onHoverOut()})},e.prototype.resolveName=function(){return __awaiter(this,void 0,void 0,function(){var e=this;return __generator(this,function(t){return[2,new Promise(function(t){var n=e.element.parentElement.closest("intl-phrase-group");n?(e.inGroup=!0,e.name=n.name+"."+e.name,t()):t()})]})})},e.prototype.render=function(){return t("slot",null)},Object.defineProperty(e,"is",{get:function(){return"intl-preload"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{didLoad:{state:!0},element:{elementRef:!0},inGroup:{state:!0},name:{type:String,attr:"name",mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"intl-preload{display:inline-block}"},enumerable:!0,configurable:!0}),e}();e.IntlPreload=n,Object.defineProperty(e,"__esModule",{value:!0})});