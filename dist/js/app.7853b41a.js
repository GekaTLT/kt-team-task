(function(e){function t(t){for(var a,s,i=t[0],c=t[1],u=t[2],f=0,p=[];f<i.length;f++)s=i[f],r[s]&&p.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"05f6":function(e,t,n){"use strict";var a=n("5ad8"),r=n.n(a);r.a},1749:function(e,t,n){},"2ef4":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app-reddit"}},[n("SortItems",{on:{onThePage:function(t){e.changeOnThePage(t)},sortItems:function(t){e.changeSortItems(t)}}}),e.errorMess?e._e():n("Pagination",{attrs:{numberOfPages:e.numberOfPages},on:{pageTo:function(t){e.loadReddit(t)}}}),n("v-touch",{on:{swipeleft:e.onSwipeLeft,swiperight:e.onSwipeRight}},[n("transition",{attrs:{name:"swype"}},[e.preloader||e.errorMess?e._e():n("div",e._l(e.newsList,function(e){return n("NewsBlock",{key:e.data.title,attrs:{obj:e.data}})}))])],1),e.errorMess?e._e():n("Pagination",{attrs:{numberOfPages:e.numberOfPages},on:{pageTo:function(t){e.loadReddit(t)}}}),e.errorMess?n("Error"):e._e()],1)},o=[],s=(n("55dd"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sort-items"},[n("h1",{staticClass:"sort-items__title"},[e._v("world news")]),n("div",{staticClass:"sort-items__item"},[n("p",[e._v("on the page:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.itemsValue,expression:"itemsValue"}],staticClass:"sort-items__select",on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.itemsValue=t.target.multiple?n:n[0]},function(t){e.onThePage(e.itemsValue)}]}},[n("option",{attrs:{value:"5"}},[e._v("5")]),n("option",{attrs:{value:"10"}},[e._v("10")]),n("option",{attrs:{value:"20"}},[e._v("20")]),n("option",{attrs:{value:"30"}},[e._v("30")])])]),n("div",{staticClass:"sort-items__item"},[n("p",[e._v("sort:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.sort,expression:"sort"}],staticClass:"sort-items__select",on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.sort=t.target.multiple?n:n[0]},function(t){e.sortItems(e.sort)}]}},[n("option",{attrs:{value:"hot"}},[e._v("hot")]),n("option",{attrs:{value:"new"}},[e._v("new")]),n("option",{attrs:{value:"controversial"}},[e._v("controversial")]),n("option",{attrs:{value:"top"}},[e._v("top")]),n("option",{attrs:{value:"rising"}},[e._v("rising")])])])])}),i=[],c={name:"SortItems",data:function(){return{itemsValue:5,sort:"hot"}},methods:{onThePage:function(e){this.$emit("onThePage",e)},sortItems:function(e){this.$emit("sortItems",e)}},created:function(){this.onThePage(this.itemsValue)}},u=c,l=(n("fdac"),n("2877")),f=Object(l["a"])(u,s,i,!1,null,"04607c84",null);f.options.__file="SortItems.vue";var p=f.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"news-block"},[n("a",{staticClass:"news-block__title",attrs:{target:"_blank",href:e.obj.url}},[e._v(e._s(e.obj.title))]),n("div",{staticClass:"news-block__score"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50","enable-background":"new 0 0 50 50"}},[n("path",{attrs:{d:"M15.2 40.6c-.2 0-.4-.1-.6-.2-.4-.3-.5-.7-.4-1.1l3.9-12-10.2-7.5c-.4-.3-.5-.7-.4-1.1s.5-.7 1-.7h12.7L25 5.9c.1-.4.5-.7 1-.7s.8.3 1 .7L30.9 18h12.7c.4 0 .8.2 1 .6s0 .9-.4 1.1L34 27.1l3.9 12c.1.4 0 .9-.4 1.1s-.8.3-1.2 0L26 33l-10.2 7.4c-.2.1-.4.2-.6.2zM26 30.7c.2 0 .4.1.6.2l8.3 6.1-3.2-9.8c-.1-.4 0-.9.4-1.1l8.3-6.1H30.1c-.4 0-.8-.3-1-.7L26 9.5l-3.2 9.8c-.1.4-.5.7-1 .7H11.5l8.3 6.1c.4.3.5.7.4 1.1L17.1 37l8.3-6.1c.2-.1.4-.2.6-.2z"}})]),n("p",[e._v(e._s(e.obj.score))])])])},v=[],m={name:"NewsBlock",props:{obj:Object}},g=m,h=(n("6dcf"),Object(l["a"])(g,d,v,!1,null,"3ac8233c",null));h.options.__file="NewsBlock.vue";var _=h.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"pagination"},[n("li",{class:1===e.numberOfPages?"pagination--disabled":"",on:{click:function(t){e.pageTo("pre")}}},[e._v("«")]),n("li",{class:1===e.numberOfPages?"pagination--active":"",on:{click:e.pageToStart}},[e._v("1")]),n("li",{directives:[{name:"show",rawName:"v-show",value:e.numberOfPages>4,expression:"numberOfPages > 4"}]},[e._v("...")]),n("li",{directives:[{name:"show",rawName:"v-show",value:e.numberOfPages>3,expression:"numberOfPages > 3"}],on:{click:function(t){e.pageTo({page:e.numberOfPages-2})}}},[e._v(e._s(e.numberOfPages-2))]),n("li",{directives:[{name:"show",rawName:"v-show",value:e.numberOfPages>2,expression:"numberOfPages > 2"}],on:{click:function(t){e.pageTo({page:e.numberOfPages-1})}}},[e._v(e._s(e.numberOfPages-1))]),n("li",{directives:[{name:"show",rawName:"v-show",value:e.numberOfPages>1,expression:"numberOfPages > 1"}],staticClass:"pagination--active"},[e._v(e._s(e.numberOfPages))]),n("li",{on:{click:function(t){e.pageTo("next")}}},[e._v("»")])])},w=[],P=(n("c5f6"),{name:"Pagination",data:function(){return{}},props:{numberOfPages:Number},methods:{pageTo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.$emit("pageTo",e)},pageToStart:function(){1!==this.numberOfPages&&this.$emit("pageTo","")}}}),O=P,y=(n("05f6"),Object(l["a"])(O,b,w,!1,null,"62f7ea55",null));y.options.__file="Pagination.vue";var x=y.exports,T=n("bc3a"),j=n.n(T),k=[],S=[],E=function(e,t,n){var a={params:{limit:e}};return C(a,t),j.a.get("https://www.reddit.com/r/worldnews/".concat(M(n),".json"),a).then(function(e){return e.data.data.after&&k.push(e.data.data.after),e.data.data.before&&S.push(e.data.data.before),{newsArray:e.data.data.children,numberOfPages:k.length}})};function C(e,t){t||(k=[],S=[]),"next"===t&&(e.params.after=k[k.length-1],e.params.count=1),"pre"===t&&(e.params.before=S[S.length-1],k.splice(-1,1),S.splice(-1,1)),t.page&&(e.params.before=S[--t.page],k=k.slice(0,++t.page),S=S.slice(0,--t.page))}function M(e){return"new"===e||"controversial"===e||"top"===e||"rising"===e?e:"hot"}var L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"error"},[e._v("Server error")])},N=[],I={name:"Error"},$=I,R=(n("9299"),Object(l["a"])($,L,N,!1,null,"50a9fddd",null));R.options.__file="Error.vue";var V=R.exports,A={name:"app-reddit",data:function(){return{preloader:!0,amountElem:null,newsList:{},numberOfPages:0,sort:"",errorMess:!1}},components:{SortItems:p,NewsBlock:_,Pagination:x,Error:V},methods:{loadReddit:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.preloader=!0,E(this.amountElem,t,this.sort).then(function(t){e.newsList=t.newsArray,e.numberOfPages=t.numberOfPages,e.preloader=!1}).catch(function(){e.preloader=!1,e.errorMess=!0})},changeOnThePage:function(e){this.amountElem=e},changeSortItems:function(e){this.sort=e},onSwipeLeft:function(){this.numberOfPages>1&&this.loadReddit(this.numberOfPages-1)},onSwipeRight:function(){this.loadReddit(this.numberOfPages+1)}},watch:{amountElem:function(){this.loadReddit()},sort:function(){this.loadReddit()}}},B=A,z=(n("624f"),Object(l["a"])(B,r,o,!1,null,null,null));z.options.__file="App-reddit.vue";var H=z.exports,J=n("ca95"),q=n.n(J);n("ce52");a["a"].use(q.a,{name:"v-touch"}),a["a"].config.productionTip=!0,new a["a"]({render:function(e){return e(H)}}).$mount("#app")},"5ad8":function(e,t,n){},"624f":function(e,t,n){"use strict";var a=n("2ef4"),r=n.n(a);r.a},"6dcf":function(e,t,n){"use strict";var a=n("db82"),r=n.n(a);r.a},9299:function(e,t,n){"use strict";var a=n("1749"),r=n.n(a);r.a},ce52:function(e,t,n){},db82:function(e,t,n){},fc8a:function(e,t,n){},fdac:function(e,t,n){"use strict";var a=n("fc8a"),r=n.n(a);r.a}});
//# sourceMappingURL=app.7853b41a.js.map