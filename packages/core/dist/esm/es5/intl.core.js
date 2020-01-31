/*!
 * intl: Core, es5
 * Built with http://stenciljs.com
 */
function n(n,t){return"sc-"+n.n+(t&&t!==C?"-"+t:"")}function t(n,t){return n+(t?"-h":"-s")}function e(t,e,r,i){var o=r.n+i.mode,u=r[o];if((2===r.t||1===r.t&&!t.r.e)&&(i["s-sc"]=u?n(r,i.mode):n(r)),u||(u=r[o=r.n+C]),u){var f=e.i.head;if(e.e)if(1===r.t)f=i.shadowRoot;else for(var c=i;c=e.o(c);)if(c.host&&c.host.shadowRoot){f=c.host.shadowRoot;break}var a=t.u.get(f);if(a||t.u.set(f,a={}),!a[o]){var s=void 0;if(t.f?s=t.f.c(i,o,u):((s=e.a("style")).innerHTML=u,a[o]=!0),s){var l=f.querySelectorAll("[data-styles]");e.s(f,s,l.length&&l[l.length-1].nextSibling||f.firstChild)}}}}function r(n,t,e,r,u,f,c){if("class"!==e||f)if("style"===e){for(var a in r)u&&null!=u[a]||(/-/.test(a)?t.style.removeProperty(a):t.style[a]="");for(var a in u)r&&u[a]===r[a]||(/-/.test(a)?t.style.setProperty(a,u[a]):t.style[a]=u[a])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in t)if("list"!==e&&"type"!==e&&!f&&(e in t||-1!==["object","function"].indexOf(typeof u)&&null!==u)){var s=n.l(t);s&&s.v&&s.v[e]?o(t,e,u):"ref"!==e&&(o(t,e,null==u?"":u),null!=u&&!1!==u||n.r.p(t,e))}else null!=u&&"key"!==e?function l(n,t,e,r){void 0===r&&(r="boolean"==typeof e);var i=t!==(t=t.replace(/^xlink\:?/,""));null==e||r&&(!e||"false"===e)?i?n.removeAttributeNS(W,P(t)):n.removeAttribute(t):"function"!=typeof e&&(e=r?"":e.toString(),i?n.setAttributeNS(W,P(t),e):n.setAttribute(t,e))}(t,e,u):(f||n.r.d(t,e)&&(null==u||!1===u))&&n.r.p(t,e);else e=P(e)in t?P(e.substring(2)):P(e[2])+e.substring(3),u?u!==r&&n.r.y(t,e,u):n.r.m(t,e);else if(r!==u){var v=i(r),p=i(u),d=v.filter(function(n){return!p.includes(n)}),h=i(t.className).filter(function(n){return!d.includes(n)}),y=p.filter(function(n){return!v.includes(n)&&!h.includes(n)});h.push.apply(h,y),t.className=h.join(" ")}}function i(n){return null==n||""===n?[]:n.trim().split(/\s+/)}function o(n,t,e){try{n[t]=e}catch(n){}}function u(n,t,e,i,o){var u=11===e.b.nodeType&&e.b.host?e.b.host:e.b,f=t&&t.vattrs||O,c=e.vattrs||O;for(o in f)c&&null!=c[o]||null==f[o]||r(n,u,o,f[o],void 0,i,e.w);for(o in c)o in f&&c[o]===("value"===o||"checked"===o?u[o]:f[o])||r(n,u,o,f[o],c[o],i,e.w)}function f(n,t){function e(i,o,f,c,a,v,m,b,w){if(b=o.vchildren[f],s||(p=!0,"slot"===b.vtag&&(l&&t.g(c,l+"-s"),b.vchildren?b.M=!0:b.k=!0)),x(b.vtext))b.b=t.j(b.vtext);else if(b.k)b.b=t.j("");else{if(v=b.b=N||"svg"===b.vtag?t.A("http://www.w3.org/2000/svg",b.vtag):t.a(b.M?"slot-fb":b.vtag),n.C(v)&&n.O.delete(y),N="svg"===b.vtag||"foreignObject"!==b.vtag&&N,u(n,null,b,N),x(l)&&v["s-si"]!==l&&t.g(v,v["s-si"]=l),b.vchildren)for(a=0;a<b.vchildren.length;++a)(m=e(i,b,a,v))&&t.S(v,m);"svg"===b.vtag&&(N=!1)}return b.b["s-hn"]=h,(b.M||b.k)&&(b.b["s-sr"]=!0,b.b["s-cr"]=d,b.b["s-sn"]=b.vname||"",(w=i&&i.vchildren&&i.vchildren[f])&&w.vtag===b.vtag&&i.b&&r(i.b)),b.b}function r(e,i,o,u){n.x=!0;var f=t.P(e);for(o=f.length-1;o>=0;o--)(u=f[o])["s-hn"]!==h&&u["s-ol"]&&(t._(u),t.s(a(u),u,c(u)),t._(u["s-ol"]),u["s-ol"]=null,p=!0),i&&r(u,i);n.x=!1}function i(n,r,i,o,u,f,a,s){var l=n["s-cr"];for((a=l&&t.o(l)||n).shadowRoot&&t.T(a)===h&&(a=a.shadowRoot);u<=f;++u)o[u]&&(s=x(o[u].vtext)?t.j(o[u].vtext):e(null,i,u,n))&&(o[u].b=s,t.s(a,s,c(r)))}function o(n,e,i,o){for(;e<=i;++e)x(n[e])&&(o=n[e].b,v=!0,o["s-ol"]?t._(o["s-ol"]):r(o,!0),t._(o))}function f(n,t){return n.vtag===t.vtag&&n.vkey===t.vkey&&("slot"!==n.vtag||n.vname===t.vname)}function c(n){return n&&n["s-ol"]?n["s-ol"]:n}function a(n){return t.o(n["s-ol"]?n["s-ol"]:n)}var s,l,v,p,d,h,y,m=[];return function b(w,g,M,k,j,$,A,E,C,O,S,P){if(y=w,h=t.T(y),d=y["s-cr"],s=k,l=y["s-sc"],p=v=!1,function s(l,v,p){var d=v.b=l.b,h=l.vchildren,y=v.vchildren;N=v.b&&x(t.W(v.b))&&void 0!==v.b.ownerSVGElement,N="svg"===v.vtag||"foreignObject"!==v.vtag&&N,x(v.vtext)?(p=d["s-cr"])?t.N(t.o(p),v.vtext):l.vtext!==v.vtext&&t.N(d,v.vtext):("slot"!==v.vtag&&u(n,l,v,N),x(h)&&x(y)?function m(n,u,l,v,p,d,h,y){for(var m=0,b=0,w=u.length-1,g=u[0],M=u[w],k=v.length-1,j=v[0],$=v[k];m<=w&&b<=k;)if(null==g)g=u[++m];else if(null==M)M=u[--w];else if(null==j)j=v[++b];else if(null==$)$=v[--k];else if(f(g,j))s(g,j),g=u[++m],j=v[++b];else if(f(M,$))s(M,$),M=u[--w],$=v[--k];else if(f(g,$))"slot"!==g.vtag&&"slot"!==$.vtag||r(t.o(g.b)),s(g,$),t.s(n,g.b,t.R(M.b)),g=u[++m],$=v[--k];else if(f(M,j))"slot"!==g.vtag&&"slot"!==$.vtag||r(t.o(M.b)),s(M,j),t.s(n,M.b,g.b),M=u[--w],j=v[++b];else{for(p=null,d=m;d<=w;++d)if(u[d]&&x(u[d].vkey)&&u[d].vkey===j.vkey){p=d;break}x(p)?((y=u[p]).vtag!==j.vtag?h=e(u&&u[b],l,p,n):(s(y,j),u[p]=void 0,h=y.b),j=v[++b]):(h=e(u&&u[b],l,b,n),j=v[++b]),h&&t.s(a(g.b),h,c(g.b))}m>w?i(n,null==v[k+1]?null:v[k+1].b,l,v,b,k):b>k&&o(u,m,w)}(d,h,v,y):x(y)?(x(l.vtext)&&t.N(d,""),i(d,null,v,y,0,y.length-1)):x(h)&&o(h,0,h.length-1)),N&&"svg"===v.vtag&&(N=!1)}(g,M),p){for(function n(e,r,i,o,u,f,c,a,s,l){for(u=0,f=(r=t.P(e)).length;u<f;u++){if((i=r[u])["s-sr"]&&(o=i["s-cr"]))for(a=t.P(t.o(o)),s=i["s-sn"],c=a.length-1;c>=0;c--)(o=a[c])["s-cn"]||o["s-nr"]||o["s-hn"]===i["s-hn"]||((3===(l=t.L(o))||8===l)&&""===s||1===l&&null===t.D(o,"slot")&&""===s||1===l&&t.D(o,"slot")===s)&&(m.some(function(n){return n.F===o})||(v=!0,o["s-sn"]=s,m.push({H:i,F:o})));1===t.L(i)&&n(i)}}(M.b),A=0;A<m.length;A++)(E=m[A]).F["s-ol"]||((C=t.j(""))["s-nr"]=E.F,t.s(t.o(E.F),E.F["s-ol"]=C,E.F));for(n.x=!0,A=0;A<m.length;A++){for(E=m[A],S=t.o(E.H),P=t.R(E.H),C=E.F["s-ol"];C=t.q(C);)if((O=C["s-nr"])&&O&&O["s-sn"]===E.F["s-sn"]&&S===t.o(O)&&(O=t.R(O))&&O&&!O["s-nr"]){P=O;break}(!P&&S!==t.o(E.F)||t.R(E.F)!==P)&&E.F!==P&&(t._(E.F),t.s(S,E.F,P))}n.x=!1}return v&&function n(e,r,i,o,u,f,c,a){for(o=0,u=(i=t.P(e)).length;o<u;o++)if(r=i[o],1===t.L(r)){if(r["s-sr"])for(c=r["s-sn"],r.hidden=!1,f=0;f<u;f++)if(i[f]["s-hn"]!==r["s-hn"])if(a=t.L(i[f]),""!==c){if(1===a&&c===t.D(i[f],"slot")){r.hidden=!0;break}}else if(1===a||3===a&&""!==t.U(i[f]).trim()){r.hidden=!0;break}n(r)}}(M.b),m.length=0,M}}function c(n,t){n&&(n.vattrs&&n.vattrs.ref&&n.vattrs.ref(t?null:n.b),n.vchildren&&n.vchildren.forEach(function(n){c(n,t)}))}function a(n,t){for(var e,r,i=null,o=!1,u=!1,f=arguments.length;f-- >2;)R.push(arguments[f]);for(;R.length>0;){var c=R.pop();if(c&&void 0!==c.pop)for(f=c.length;f--;)R.push(c[f]);else"boolean"==typeof c&&(c=null),(u="function"!=typeof n)&&(null==c?c="":"number"==typeof c?c=String(c):"string"!=typeof c&&(u=!1)),u&&o?i[i.length-1].vtext+=c:null===i?i=[u?{vtext:c}:c]:i.push(u?{vtext:c}:c),o=u}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(f in t.class)t.class[f]&&R.push(f);t.class=R.join(" "),R.length=0}null!=t.key&&(e=t.key),null!=t.name&&(r=t.name)}return"function"==typeof n?n(t,i||[],L):{vtag:n,vchildren:i,vtext:void 0,vattrs:t,vkey:e,vname:r,b:void 0,w:!1}}function s(n){return{vtag:n.vtag,vchildren:n.vchildren,vtext:n.vtext,vattrs:n.vattrs,vkey:n.vkey,vname:n.vname}}function l(n){return{B:n[0],I:n[1],G:!!n[2],Q:!!n[3],Y:!!n[4]}}function v(n,t){if(x(t)&&"object"!=typeof t&&"function"!=typeof t){if(n===Boolean||4===n)return"false"!==t&&(""===t||!!t);if(n===Number||8===n)return parseFloat(t);if(n===String||2===n)return t.toString()}return t}function p(n,t){n.Z.add(t),n.z.has(t)||(n.z.set(t,!0),n.J?n.queue.write(function(){return d(n,t)}):n.queue.tick(function(){return d(n,t)}))}function d(n,e,r,i,o){return j(this,void 0,void 0,function(){var r,u;return $(this,function(f){switch(f.K){case 0:if(n.z.delete(e),n.V.has(e))return[3,12];if(i=n.X.get(e))return[3,6];if((o=n.nn.get(e))&&!o["s-rn"])return(o["s-rc"]=o["s-rc"]||[]).push(function(){d(n,e)}),[2];if(!(i=function c(n,t,e,r,i,o,u){try{r=new(i=n.l(t).tn),function f(n,t,e,r,i){n.en.set(r,e),n.rn.has(e)||n.rn.set(e,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(function(t){var o=t[0],u=t[1];(function f(n,t,e,r,i,o,u,c){if(t.type||t.state){var a=n.rn.get(e);t.state||(!t.attr||void 0!==a[i]&&""!==a[i]||(u=o&&o.in)&&x(c=u[t.attr])&&(a[i]=v(t.type,c)),e.hasOwnProperty(i)&&(void 0===a[i]&&(a[i]=v(t.type,e[i])),"mode"!==i&&delete e[i])),r.hasOwnProperty(i)&&void 0===a[i]&&(a[i]=r[i]),t.watchCallbacks&&(a[D+i]=t.watchCallbacks.slice()),m(r,i,function s(t){return(t=n.rn.get(n.en.get(this)))&&t[i]},function l(e,r){(r=n.en.get(this))&&(t.state||t.mutable)&&h(n,r,i,e)})}else t.elementRef?y(r,i,e):t.method?y(e,i,r[i].bind(r)):t.connect&&y(r,i,n.on(t.connect))})(n,u,e,r,o,i)})}(n,i,t,r,e),function c(n,t,e){if(t){var r=n.en.get(e);t.forEach(function(t){e[t.method]={emit:function(e){return n.un(r,t.name,{bubbles:t.bubbles,composed:t.composed,cancelable:t.cancelable,detail:e})}}})}}(n,i.events,r);try{if(o=n.fn.get(t)){for(u=0;u<o.length;u+=2)r[o[u]](o[u+1]);n.fn.delete(t)}}catch(e){n.cn(e,2,t)}}catch(e){r={},n.cn(e,7,t,!0)}return n.X.set(t,r),r}(n,e,n.an.get(e))))return[3,5];f.K=1;case 1:return f.sn.push([1,4,,5]),i.componentWillLoad?[4,i.componentWillLoad()]:[3,3];case 2:f.ln(),f.K=3;case 3:return[3,5];case 4:return r=f.ln(),n.cn(r,3,e),[3,5];case 5:return[3,11];case 6:if(!i)return[3,11];f.K=7;case 7:return f.sn.push([7,10,,11]),i.componentWillUpdate?[4,i.componentWillUpdate()]:[3,9];case 8:f.ln(),f.K=9;case 9:return[3,11];case 10:return u=f.ln(),n.cn(u,5,e),[3,11];case 11:(function s(n,e,r,i){try{var o=e.tn.host,u=e.tn.encapsulation,f="shadow"===u&&n.r.e,c=r;if(f&&(c=r.shadowRoot),!r["s-rn"]){n.vn(n,n.r,e,r);var s=r["s-sc"];s&&(n.r.g(r,t(s,!0)),"scoped"===u&&n.r.g(r,t(s)))}if(i.render||i.hostData||o){n.pn=!0;var l,v=i.render&&i.render();l=i.hostData&&i.hostData(),n.pn=!1;var p=n.dn.get(r)||{};p.b=c;var d=a(null,l,v);n.dn.set(r,n.render(r,p,d,f,u))}n.f&&n.f.hn(r),r["s-rn"]=!0,r["s-rc"]&&(r["s-rc"].forEach(function(n){return n()}),r["s-rc"]=null)}catch(t){n.pn=!1,n.cn(t,8,r,!0)}})(n,n.l(e),e,i),e["s-init"](),f.K=12;case 12:return[2]}})})}function h(n,t,e,r,i){var o=n.rn.get(t);o||n.rn.set(t,o={});var u=o[e];if(r!==u&&(o[e]=r,i=n.X.get(t))){var f=o[D+e];if(f)for(var c=0;c<f.length;c++)try{i[f[c]].call(i,r,u,e)}catch(n){}!n.pn&&t["s-rn"]&&p(n,t)}}function y(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})}function m(n,t,e,r){Object.defineProperty(n,t,{configurable:!0,get:e,set:r})}function b(n,t,e,r,i,o){if(n.Z.delete(t),(i=n.nn.get(t))&&((r=i["s-ld"])&&((e=r.indexOf(t))>-1&&r.splice(e,1),r.length||i["s-init"]&&i["s-init"]()),n.nn.delete(t)),n.yn.length&&!n.Z.size)for(;o=n.yn.shift();)o()}function w(n,t,e,r){if(e.connectedCallback=function(){(function e(n,t,r){n.mn.has(r)||(n.mn.set(r,!0),function i(n,t){var e=n.l(t);e.bn&&e.bn.forEach(function(e){e.G||n.r.y(t,e.B,function r(n,t,e,i){return function(r){(i=n.X.get(t))?i[e](r):((i=n.fn.get(t)||[]).push(e,r),n.fn.set(t,i))}}(n,t,e.I),e.Y,e.Q)})}(n,r)),n.V.delete(r),n.wn.has(r)||(n.gn=!0,n.Z.add(r),n.wn.set(r,!0),r["s-id"]||(r["s-id"]=n.Mn()),function o(n,t,e){for(e=t;e=n.r.W(e);)if(n.C(e)){n.O.has(t)||(n.nn.set(t,e),(e["s-ld"]=e["s-ld"]||[]).push(t));break}}(n,r),n.queue.tick(function(){n.an.set(r,function e(n,t,r,i,o){return r.mode||(r.mode=n.kn(r)),r["s-cr"]||n.D(r,E)||n.e&&1===t.t||(r["s-cr"]=n.j(""),r["s-cr"]["s-cn"]=!0,n.s(r,r["s-cr"],n.P(r)[0])),n.e||1!==t.t||(r.shadowRoot=r),1===t.t&&n.e&&!r.shadowRoot&&n.jn(r,{mode:"open"}),i={$n:r["s-id"],in:{}},t.v&&Object.keys(t.v).forEach(function(e){(o=t.v[e].An)&&(i.in[o]=n.D(r,o))}),i}(n.r,t,r)),n.En(t,r)}))})(n,t,this)},e.disconnectedCallback=function(){(function t(n,e){if(!n.x&&function r(n,t){for(;t;){if(!n.o(t))return 9!==n.L(t);t=n.o(t)}}(n.r,e)){n.V.set(e,!0),b(n,e),c(n.dn.get(e),!0),n.r.m(e),n.mn.delete(e);var i=n.X.get(e);i&&i.componentDidUnload&&i.componentDidUnload(),n.f&&n.f.Cn(e),[n.nn,n.On,n.an].forEach(function(n){return n.delete(e)})}})(n,this)},e["s-init"]=function(){(function t(n,e,r,i,o,u){if(n.X.get(e)&&!n.V.has(e)&&(!e["s-ld"]||!e["s-ld"].length)){n.O.set(e,!0),n.Sn.has(e)||(n.Sn.set(e,!0),e["s-ld"]=void 0,n.r.g(e,r));try{c(n.dn.get(e)),(o=n.On.get(e))&&(o.forEach(function(n){return n(e)}),n.On.delete(e))}catch(t){n.cn(t,4,e)}b(n,e)}})(n,this,r)},e.forceUpdate=function(){p(n,this)},t.v){var i=Object.entries(t.v),o={};i.forEach(function(n){var t=n[0],e=n[1].An;e&&(o[e]=t)}),o=Object.assign({},o),e.attributeChangedCallback=function(n,t,e){(function r(n,t,e,i){var o=n[P(e)];o&&(t[o]=i)})(o,this,n,e)},function u(n,t,e){t.forEach(function(t){var r=t[0],i=t[1],o=i.xn;3&o?m(e,r,function t(){return(n.rn.get(this)||{})[r]},function t(e){h(n,this,r,v(i.Pn,e))}):32===o&&y(e,r,T)})}(n,i,e)}}function g(n,t,e,r){return function(){var i=arguments;return function o(n,t,e){var r=t[e],i=n.i.body;return i?(r||(r=i.querySelector(e)),r||(r=t[e]=n.a(e),n.S(i,r)),r.componentOnReady()):Promise.resolve()}(n,t,e).then(function(n){return n[r].apply(n,i)})}}function M(n,t,r,i,o,u,c){var s={html:{}},l={},v=r[n]=r[n]||{},d=function h(n,t,e){n.ael||(n.ael=function(n,t,e,r){return n.addEventListener(t,e,r)},n.rel=function(n,t,e,r){return n.removeEventListener(t,e,r)});var r=new WeakMap;"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(n,t,r){return(r=e.createEvent("CustomEvent")).initCustomEvent(n,t.bubbles,t.cancelable,t.detail),r},t.CustomEvent.prototype=t.Event.prototype);var i={i:e,e:!!e.documentElement.attachShadow,_n:!1,L:function(n){return n.nodeType},a:function(n){return e.createElement(n)},A:function(n,t){return e.createElementNS(n,t)},j:function(n){return e.createTextNode(n)},Tn:function(n){return e.createComment(n)},s:function(n,t,e){return n.insertBefore(t,e)},_:function(n){return n.remove()},S:function(n,t){return n.appendChild(t)},g:function(n,t){if(n.classList)n.classList.add(t);else if("svg"===n.nodeName.toLowerCase()){var e=n.getAttribute("class")||"";e.split(" ").includes(t)||(e+=" "+t),n.setAttribute("class",e.trim())}},P:function(n){return n.childNodes},o:function(n){return n.parentNode},R:function(n){return n.nextSibling},q:function(n){return n.previousSibling},T:function(n){return P(n.nodeName)},U:function(n){return n.textContent},N:function(n,t){return n.textContent=t},D:function(n,t){return n.getAttribute(t)},Wn:function(n,t,e){return n.setAttribute(t,e)},Nn:function(n,t,e,r){return n.setAttributeNS(t,e,r)},p:function(n,t){return n.removeAttribute(t)},d:function(n,t){return n.hasAttribute(t)},kn:function(t){return t.getAttribute("mode")||(n.Context||{}).mode},Rn:function(n,r){return"child"===r?n.firstElementChild:"parent"===r?i.W(n):"body"===r?e.body:"document"===r?e:"window"===r?t:n},y:function(t,e,o,u,f,c,a,s){var l=e,v=t,p=r.get(t);if(p&&p[l]&&p[l](),"string"==typeof c?v=i.Rn(t,c):"object"==typeof c?v=c:(s=e.split(":")).length>1&&(v=i.Rn(t,s[0]),e=s[1]),v){var d=o;(s=e.split(".")).length>1&&(e=s[0],d=function(n){n.keyCode===S[s[1]]&&o(n)}),a=i._n?{capture:!!u,passive:!!f}:!!u,n.ael(v,e,d,a),p||r.set(t,p={}),p[l]=function(){v&&n.rel(v,e,d,a),p[l]=null}}},m:function(n,t){var e=r.get(n);e&&(t?e[t]&&e[t]():Object.keys(e).forEach(function(n){e[n]&&e[n]()}))},Ln:function(n,e,r){var i=new t.CustomEvent(e,r);return n&&n.dispatchEvent(i),i},W:function(n,t){return(t=i.o(n))&&11===i.L(t)?t.host:t},jn:function(n,t){return n.attachShadow(t)}};try{t.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){return i._n=!0}}))}catch(n){}return i}(v,r,i);t.isServer=t.isPrerender=!(t.isClient=!0),t.window=r,t.location=r.location,t.document=i,t.resourcesUrl=t.publicPath=o,t.enableListener=function(n,t,e,r,i){return function o(n,t,e,r,i,u){if(t){var f=n.en.get(t),c=n.l(f);if(c&&c.bn)if(r){var a=c.bn.find(function(n){return n.B===e});a&&n.r.y(f,e,function(n){return t[a.I](n)},a.Y,void 0===u?a.Q:!!u,i)}else n.r.m(f,e)}}(b,n,t,e,r,i)},t.emit=function(n,e,r){return d.Ln(n,t.eventNameFn?t.eventNameFn(e):e,r)},v.h=a,v.Context=t;var y=r["s-defined"]=r["s-defined"]||{},m=0,b={r:d,Dn:function M(n,t){var e=n.n;r.customElements.get(e)||(w(b,s[e]=n,t.prototype,u),t.observedAttributes=Object.values(n.v).map(function(n){return n.An}).filter(function(n){return!!n}),r.customElements.define(n.n,t))},un:t.emit,l:function(n){return s[d.T(n)]},Fn:function(n){return t[n]},isClient:!0,C:function(n){return!(!y[d.T(n)]&&!b.l(n))},Mn:function(){return n+m++},cn:function(n,t,e){},on:function(n){return function t(n,e,r){return{create:g(n,e,r,"create"),componentOnReady:g(n,e,r,"componentOnReady")}}(d,l,n)},queue:t.queue=function k(n,t){function e(t){return function(e){t.push(e),p||(p=!0,n.raf(o))}}function r(n){for(var t=0;t<n.length;t++)try{n[t](u())}catch(n){}n.length=0}function i(n,t){for(var e,r=0;r<n.length&&(e=u())<t;)try{n[r++](e)}catch(n){}r===n.length?n.length=0:0!==r&&n.splice(0,r)}function o(){v++,r(a);var t=u()+7*Math.ceil(v*(1/22));i(s,t),i(l,t),s.length>0&&(l.push.apply(l,s),s.length=0),(p=a.length+s.length+l.length>0)?n.raf(o):v=0}var u=function(){return t.performance.now()},f=Promise.resolve(),c=[],a=[],s=[],l=[],v=0,p=!1;return n.raf||(n.raf=t.requestAnimationFrame.bind(t)),{tick:function(n){c.push(n),1===c.length&&f.then(function(){return r(c)})},read:e(a),write:e(s)}}(v,r),En:function j(n,t,e){if(n.tn)p(b,t);else{var r=!d.e,i={mode:t.mode,scoped:r};n.Hn(i).then(function(e){try{n.tn=e,function r(n,t,e,i,o){if(i){var u=t.n+(o||C);t[u]||(t[u]=i)}}(0,n,n.t,e.style,e.styleMode)}catch(t){n.tn=function i(){}}p(b,t)})}},pn:!1,J:!1,x:!1,vn:e,nn:new WeakMap,u:new WeakMap,wn:new WeakMap,mn:new WeakMap,Sn:new WeakMap,O:new WeakMap,en:new WeakMap,an:new WeakMap,X:new WeakMap,V:new WeakMap,z:new WeakMap,On:new WeakMap,fn:new WeakMap,dn:new WeakMap,rn:new WeakMap,Z:new Set,yn:[]};v.onReady=function(){return new Promise(function(n){return b.queue.write(function(){return b.Z.size?b.yn.push(n):n()})})},b.render=f(b,d);var $=d.i.documentElement;return $["s-ld"]=[],$["s-rn"]=!0,$["s-init"]=function(){b.O.set($,v.loaded=b.J=!0),d.Ln(r,"appload",{detail:{namespace:n}})},function A(n,t,e,r,i,o){if(t.componentOnReady=function(t,e){if(!t.nodeName.includes("-"))return e(null),!1;var r=n.l(t);if(r)if(n.O.has(t))e(t);else{var i=n.On.get(t)||[];i.push(e),n.On.set(t,i)}return!!r},i){for(o=i.length-1;o>=0;o--)t.componentOnReady(i[o][0],i[o][1])&&i.splice(o,1);for(o=0;o<r.length;o++)if(!e[r[o]].componentOnReady)return;for(o=0;o<i.length;o++)i[o][1](null);i.length=0}}(b,v,r,r["s-apps"],r["s-cr"]),v.initialized=!0,b}function k(n,t,e){void 0===e&&(e={});var r=Array.isArray(t)?t:[t],i=n.document,o=e.hydratedCssClass||"hydrated",u=r.map(function(n){return n[0]});if(u.length>0){var f=i.createElement("style");f.innerHTML=u.join()+"{visibility:hidden}."+o+"{visibility:inherit}",f.setAttribute("data-styles",""),i.head.insertBefore(f,i.head.firstChild)}var c=e.namespace||"intl";return H||(H=!0,function a(n,t,e){(n["s-apps"]=n["s-apps"]||[]).push(t),e.componentOnReady||(e.componentOnReady=function t(){function e(t){if(r.nodeName.indexOf("-")>0){for(var e=n["s-apps"],i=0,o=0;o<e.length;o++)if(n[e[o]].componentOnReady){if(n[e[o]].componentOnReady(r,t))return;i++}if(i<e.length)return void(n["s-cr"]=n["s-cr"]||[]).push([r,t])}t(null)}var r=this;return n.Promise?new n.Promise(e):{then:e}})}(n,c,n.HTMLElement.prototype)),new Promise(function(r){applyPolyfills(n,function(){if(!F[c]){var u={},f=e.resourcesUrl||"./";A(c,u,n,i,f,o),F[c]=M(c,u,n,i,f,o)}t.forEach(function(t){var e;!function r(n){return/\{\s*\[native code\]\s*\}/.test(""+n)}(n.customElements.define)?(e=function(t){return n.HTMLElement.call(this,t)}).prototype=Object.create(n.HTMLElement.prototype,{constructor:{value:e,configurable:!0}}):e=new Function("w","return class extends w.HTMLElement{}")(n),F[c].Dn(function i(n){var t=function e(n){var t=n[0],e=n[1],r=n[3],i=n[4],o=n[5],u={color:{An:"color"}};if(r)for(var f=0;f<r.length;f++){var c=r[f];u[c[0]]={xn:c[1],qn:!!c[2],An:"string"==typeof c[3]?c[3]:c[3]?c[0]:0,Pn:c[4]}}return{n:t,Hn:e,v:Object.assign({},u),t:i,bn:o?o.map(l):void 0}}(n),r=t.Hn,i=_(n[0]);return t.Hn=function(n){var t=n.mode,e=n.scoped;return function o(n,t,e){return import(
/* webpackInclude: /\.entry\.js$/ */
/* webpackMode: "lazy" */
"./build/"+n+(t?".sc":"")+".entry.js").then(function(n){return n[e]})}("string"==typeof r?r:r[t],e,i)},t}(t),e)}),r()})})}this&&this.Un||(Object.setPrototypeOf||Array);var j=this&&this.Bn||function(n,t,e,r){return new(e||(e=Promise))(function(i,o){function u(n){try{c(r.In(n))}catch(n){o(n)}}function f(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){n.Gn?i(n.value):new e(function(t){t(n.value)}).then(u,f)}c((r=r.apply(n,t||[])).In())})},$=this&&this.Qn||function(n,t){function e(e){return function(u){return function c(e){if(r)throw new TypeError("Generator is already executing.");for(;f;)try{if(r=1,i&&(o=2&e[0]?i.return:e[0]?i.throw||((o=i.return)&&o.call(i),0):i.In)&&!(o=o.call(i,e[1])).Gn)return o;switch(i=0,o&&(e=[2&e[0],o.value]),e[0]){case 0:case 1:o=e;break;case 4:return f.K++,{value:e[1],Gn:!1};case 5:f.K++,i=e[1],e=[0];continue;case 7:e=f.Yn.pop(),f.sn.pop();continue;default:if(!(o=(o=f.sn).length>0&&o[o.length-1])&&(6===e[0]||2===e[0])){f=0;continue}if(3===e[0]&&(!o||e[1]>o[0]&&e[1]<o[3])){f.K=e[1];break}if(6===e[0]&&f.K<o[1]){f.K=o[1],o=e;break}if(o&&f.K<o[2]){f.K=o[2],f.Yn.push(e);break}o[2]&&f.Yn.pop(),f.sn.pop();continue}e=t.call(n,f)}catch(n){e=[6,n],i=0}finally{r=o=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,Gn:!0}}([e,u])}}var r,i,o,u,f={K:0,ln:function(){if(1&o[0])throw o[1];return o[1]},sn:[],Yn:[]};return u={In:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u},A=function(){};function applyPolyfills(n,t){n.Zn=function(){function t(){var n=setTimeout;return function(){return n(e,1)}}function e(){for(var n=0;n<b;n+=2)(0,O[n])(O[n+1]),O[n]=void 0,O[n+1]=void 0;b=0}function r(n,t){var e=this,r=new this.constructor(o);void 0===r[x]&&h(r);var i=e.zn;if(i){var u=arguments[i-1];M(function(){return d(i,r,u,e.Jn)})}else v(e,r,n,t);return r}function i(n){if(n&&"object"==typeof n&&n.constructor===this)return n;var t=new this(o);return c(t,n),t}function o(){}function u(n){try{return n.then}catch(n){return W.error=n,W}}function f(n,t,e){t.constructor===n.constructor&&e===r&&t.constructor.resolve===i?function(n,t){t.zn===_?s(n,t.Jn):t.zn===T?l(n,t.Jn):v(t,void 0,function(t){return c(n,t)},function(t){return l(n,t)})}(n,t):e===W?(l(n,W.error),W.error=null):void 0===e?s(n,t):"function"==typeof e?function(n,t,e){M(function(n){var r=!1,i=function(n,t,e,r){try{n.call(t,e,r)}catch(n){return n}}(e,t,function(e){r||(r=!0,t!==e?c(n,e):s(n,e))},function(t){r||(r=!0,l(n,t))},n.Kn);!r&&i&&(r=!0,l(n,i))},n)}(n,t,e):s(n,t)}function c(n,t){if(n===t)l(n,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof t;null===t||"object"!==e&&"function"!==e?s(n,t):f(n,t,u(t))}}function a(n){n.Vn&&n.Vn(n.Jn),p(n)}function s(n,t){n.zn===P&&(n.Jn=t,n.zn=_,0!==n.Xn.length&&M(p,n))}function l(n,t){n.zn===P&&(n.zn=T,n.Jn=t,M(a,n))}function v(n,t,e,r){var i=n.Xn,o=i.length;n.Vn=null,i[o]=t,i[o+_]=e,i[o+T]=r,0===o&&n.zn&&M(p,n)}function p(n){var t=n.Xn,e=n.zn;if(0!==t.length){for(var r,i,o=n.Jn,u=0;u<t.length;u+=3)r=t[u],i=t[u+e],r?d(e,r,i,o):i(o);n.Xn.length=0}}function d(n,t,e,r){var i="function"==typeof e,o=void 0,u=void 0,f=void 0,a=void 0;if(i){try{o=e(r)}catch(n){W.error=n,o=W}if(o===W?(a=!0,u=o.error,o.error=null):f=!0,t===o)return void l(t,new TypeError("Cannot return same promise"))}else o=r,f=!0;t.zn===P&&(i&&f?c(t,o):a?l(t,u):n===_?s(t,o):n===T&&l(t,o))}function h(n){n[x]=N++,n.zn=void 0,n.Jn=void 0,n.Xn=[]}var y,m=Array.isArray?Array.isArray:function(n){return"[object Array]"===Object.prototype.toString.call(n)},b=0,w=void 0,g=void 0,M=function(n,t){O[b]=n,O[b+1]=t,2===(b+=2)&&(g?g(e):S())},k=(y=void 0!==n?n:void 0)||{},j=k.nt||k.tt;k="undefined"==typeof self;var $,A,E,C="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,O=Array(1e3),S=void 0;S=j?($=0,A=new j(e),E=document.createTextNode(""),A.observe(E,{characterData:!0}),function(){E.data=$=++$%2}):C?function(){var n=new MessageChannel;return n.et.onmessage=e,function(){return n.rt.postMessage(0)}}():void 0===y&&"function"==typeof require?function(){try{var n=Function("return this")().it("vertx");return void 0!==(w=n.ot||n.ut)?function(){w(e)}:t()}catch(n){return t()}}():t();var x=Math.random().toString(36).substring(2),P=void 0,_=1,T=2,W={error:null},N=0,R=function(){function n(n,t){this.ft=n,this.ct=new n(o),this.ct[x]||h(this.ct),m(t)?(this.at=this.length=t.length,this.Jn=Array(this.length),0===this.length?s(this.ct,this.Jn):(this.length=this.length||0,this.st(t),0===this.at&&s(this.ct,this.Jn))):l(this.ct,Error("Array Methods must be provided an Array"))}return n.prototype.st=function(n){for(var t=0;this.zn===P&&t<n.length;t++)this.lt(n[t],t)},n.prototype.lt=function(n,t){var e=this.ft,c=e.resolve;c===i?(c=u(n))===r&&n.zn!==P?this.vt(n.zn,t,n.Jn):"function"!=typeof c?(this.at--,this.Jn[t]=n):e===L?(f(e=new e(o),n,c),this.pt(e,t)):this.pt(new e(function(t){return t(n)}),t):this.pt(c(n),t)},n.prototype.vt=function(n,t,e){var r=this.ct;r.zn===P&&(this.at--,n===T?l(r,e):this.Jn[t]=e),0===this.at&&s(r,this.Jn)},n.prototype.pt=function(n,t){var e=this;v(n,void 0,function(n){return e.vt(_,t,n)},function(n){return e.vt(T,t,n)})},n}(),L=function(){function n(t){if(this[x]=N++,this.Jn=this.zn=void 0,this.Xn=[],o!==t){if("function"!=typeof t)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof n))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(n,t){try{t(function(t){c(n,t)},function(t){l(n,t)})}catch(t){l(n,t)}}(this,t)}}return n.prototype.catch=function(n){return this.then(null,n)},n.prototype.finally=function(n){var t=this.constructor;return this.then(function(e){return t.resolve(n()).then(function(){return e})},function(e){return t.resolve(n()).then(function(){throw e})})},n}();return L.prototype.then=r,L.all=function(n){return new R(this,n).ct},L.race=function(n){var t=this;return m(n)?new t(function(e,r){for(var i=n.length,o=0;o<i;o++)t.resolve(n[o]).then(e,r)}):new t(function(n,t){return t(new TypeError("Must pass array to race"))})},L.resolve=i,L.reject=function(n){var t=new this(o);return l(t,n),t},L.dt=function(n){g=n},L.ht=function(n){M=n},L.yt=M,L.mt=function(){var n=void 0;if("undefined"!=typeof global)n=global;else if("undefined"!=typeof self)n=self;else try{n=Function("return this")()}catch(n){throw Error("polyfill failed")}var t=n.Promise;if(t){var e=null;try{e=Object.prototype.toString.call(t.resolve())}catch(n){}if("[object Promise]"===e&&!t.bt)return}n.Promise=L},L.Promise=L,L.mt(),L}();var e=[];n.customElements&&(!n.Element||n.Element.prototype.closest&&n.Element.prototype.matches&&n.Element.prototype.remove)||e.push(import("./polyfills/dom.js")),"function"==typeof Object.assign&&Object.entries||e.push(import("./polyfills/object.js")),Array.prototype.find&&Array.prototype.includes||e.push(import("./polyfills/array.js")),String.prototype.startsWith&&String.prototype.endsWith||e.push(import("./polyfills/string.js")),n.fetch||e.push(import("./polyfills/fetch.js")),function r(){try{var n=new URL("b","http://a");return n.pathname="c%20d","http://a/c%20d"===n.href&&n.wt}catch(n){return!1}}||e.push(import("./polyfills/url.js")),Promise.all(e).then(function(e){e.forEach(function(t){t.applyPolyfill(n,n.document)}),t()})}var E="ssrv",C="$",O={},S={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},x=function(n){return null!=n},P=function(n){return n.toLowerCase()},_=function(n){return P(n).split("-").map(function(n){return n.charAt(0).toUpperCase()+n.slice(1)}).join("")},T=function(){},W="http://www.w3.org/1999/xlink",N=!1,R=[],L={forEach:function(n,t){n.forEach(function(n,e,r){return t(s(n),e,r)})},map:function(n,t){return n.map(function(n,e,r){return function i(n){return{vtag:n.vtag,vchildren:n.vchildren,vtext:n.vtext,vattrs:n.vattrs,vkey:n.vkey,vname:n.vname}}(t(s(n),e,r))})}},D="wc-",F={},H=!1;export{k as defineCustomElement,a as h};