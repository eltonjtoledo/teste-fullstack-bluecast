(function(){"use strict";var e={6579:function(e,n,t){var r=t(144),o=t(5464),u=t.n(o),i=(t(243),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("v-bottom-navigation",{staticStyle:{"background-color":"#ddd"},attrs:{value:e.nav,color:"#00BCD4"}},[t("router-link",{attrs:{to:"/",custom:""},scopedSlots:e._u([{key:"default",fn:function(n){var r=n.navigate;return[t("v-btn",{attrs:{value:"Home"},on:{click:r}},[t("span",[e._v("Home")])])]}}])}),t("router-link",{attrs:{to:"/clients",custom:""},scopedSlots:e._u([{key:"default",fn:function(n){var r=n.navigate;return[t("v-btn",{attrs:{value:"Clients"},on:{click:r}},[t("span",[e._v("Clientes")])])]}}])})],1),t("router-view")],1)}),a=[],c={data(){return{nav:"Home"}}},l=c,f=t(1001),s=(0,f.Z)(l,i,a,!1,null,null,null),d=s.exports,v=t(8345),p=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-card",[t("v-card-title",[e._v("Sistema de Teste de conhecimentos Elton J Toledo")]),t("v-card-subtitle",[e._v("Acesse a pagina Clientes no menu superior")])],1)},m=[],b={},h=(0,f.Z)(b,p,m,!1,null,null,null),g=h.exports;r["default"].use(v.Z);const y=[{path:"/",name:"home",component:g},{path:"/clients",name:"Client",component:function(){return t.e(640).then(t.bind(t,6640))}}],k=new v.Z({mode:"history",base:"/",routes:y});var w=k,O=t(589);t(1588);r["default"].config.productionTip=!1,r["default"].use(u()),r["default"].use(O.ZP),new r["default"]({Vuetify:u(),router:w,render:function(e){return e(d)}}).$mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var u=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(u.exports,u,u.exports,t),u.loaded=!0,u.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,u){if(!r){var i=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],u=e[f][2];for(var a=!0,c=0;c<r.length;c++)(!1&u||i>=u)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(a=!1,u<i&&(i=u));if(a){e.splice(f--,1);var l=o();void 0!==l&&(n=l)}}return n}u=u||0;for(var f=e.length;f>0&&e[f-1][2]>u;f--)e[f]=e[f-1];e[f]=[r,o,u]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"-legacy.a3de83b9.js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="web:";t.l=function(r,o,u,i){if(e[r])e[r].push(o);else{var a,c;if(void 0!==u)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==n+u){a=s;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+u),a.src=r),e[r]=[o];var d=function(n,t){a.onerror=a.onload=null,clearTimeout(v);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(t)})),n)return n(t)},v=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="/"}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var u=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=u);var i=t.p+t.u(n),a=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var u=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+n+" failed.\n("+u+": "+i+")",a.name="ChunkLoadError",a.type=u,a.request=i,o[1](a)}};t.l(i,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,u,i=r[0],a=r[1],c=r[2],l=0;if(i.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var f=c(t)}for(n&&n(r);l<i.length;l++)u=i[l],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return t.O(f)},r=self["webpackChunkweb"]=self["webpackChunkweb"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(6579)}));r=t.O(r)})();
//# sourceMappingURL=app-legacy.5592317d.js.map