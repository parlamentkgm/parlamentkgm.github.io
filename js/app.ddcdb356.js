(function(e){function t(t){for(var r,l,i=t[0],s=t[1],c=t[2],d=0,f=[];d<i.length;d++)l=i[d],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&f.push(o[l][0]),o[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},a=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},4230:function(e,t,n){},"886f":function(e,t,n){},cccb:function(e,t,n){"use strict";var r=n("4230"),o=n.n(r);o.a},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{dense:"",app:""}},[n("v-btn",{attrs:{icon:"",disabled:e.backDisabled},on:{click:function(t){return e.back()}}},[n("v-icon",[e._v("mdi-arrow-left")])],1),n("v-toolbar-title",[e._v("Soubor dokumentů")])],1),n("v-content",[n("v-container",{attrs:{fluid:""}},[n("keep-alive",{attrs:{include:"Home"}},[n("router-view")],1)],1)],1),n("v-footer",{attrs:{app:"","max-height":"70"}},[n("v-container",{attrs:{fluid:""}},[n("p",{staticClass:"caption text-center"},[e._v(" Studentský parlament KGM 2020, GPL-3.0 "),n("br"),e._v(" Podpora: "),n("a",{attrs:{href:"mailto:marek@mblazek.dev"}},[e._v("marek@mblazek.dev")])])])],1)],1)},a=[],l=(n("b0c0"),r["a"].extend({name:"app",methods:{back:function(){this.$router.go(-1)}},computed:{backDisabled:function(){return"Home"===this.$route.name}}})),i=l,s=n("2877"),c=n("6544"),u=n.n(c),d=n("7496"),f=n("40dc"),v=n("8336"),p=n("a523"),b=n("a75b"),m=n("553a"),h=n("132d"),y=n("2a7f"),w=Object(s["a"])(i,o,a,!1,null,null,null),g=w.exports;u()(w,{VApp:d["a"],VAppBar:f["a"],VBtn:v["a"],VContainer:p["a"],VContent:b["a"],VFooter:m["a"],VIcon:h["a"],VToolbarTitle:y["a"]});var _=n("9483");Object(_["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),window.location.reload(!0),console.log("The application has been reloaded.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var k=n("8c4f"),V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"headline text-center"},[e._v("Vyhledávání v Souboru dokumentů")]),e.loading?n("v-progress-linear",{attrs:{indeterminate:!0}}):e._e(),n("v-alert",{attrs:{type:"error",value:e.errorLoading}},[e._v(" Nepodařilo se načíst seznam dokumentů. ")]),e.documents?n("div",{attrs:{id:"content"}},[n("v-radio-group",{attrs:{mandatory:!0},model:{value:e.findBy,callback:function(t){e.findBy=t},expression:"findBy"}},[n("v-radio",{attrs:{label:"Vyhledávání podle čísla rezoluce",value:"resolutionNumber"}}),n("v-radio",{attrs:{label:"Vyhledávání podle čísla jednacího (návrhy rezolucí, záznamy schůzí, dokumenty neuvedené v §9 odst. 1 Jednacího řádu)",value:"referenceNumber"}}),n("v-radio",{attrs:{label:"Vyhledávání podle názvu",value:"title"}})],1),"resolutionNumber"===e.findBy?n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{label:"Číslo",type:"number",outlined:""},model:{value:e.resNumber,callback:function(t){e.resNumber=t},expression:"resNumber"}})],1),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{label:"Ročník",type:"number",outlined:""},model:{value:e.resYear,callback:function(t){e.resYear=t},expression:"resYear"}})],1)],1)],1):e._e(),"referenceNumber"===e.findBy?n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{label:"Ročník",type:"number",outlined:""},model:{value:e.otherYear,callback:function(t){e.otherYear=t},expression:"otherYear"}})],1),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{label:"Číslo",type:"number",outlined:""},model:{value:e.otherNumber,callback:function(t){e.otherNumber=t},expression:"otherNumber"}})],1)],1)],1):e._e(),"title"===e.findBy?n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",xs:"12"}},[n("v-text-field",{attrs:{label:"Název",outlined:""},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1)],1)],1):e._e(),n("v-container",[n("v-row",{attrs:{justify:"center"}},[n("v-btn",{attrs:{outlined:"",color:"primary",disabled:!e.findBy},on:{click:e.find}},[e._v("Hledat")])],1)],1),n("v-container",[n("v-row",[n("v-col",{attrs:{xs:"12"}},[e.filteredDocuments?n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.filteredDocuments},scopedSlots:e._u([{key:"item.fullRef",fn:function(t){var r=t.item;return["resolution"==r.type?n("span",[e._v(e._s(r.number)+"/"+e._s(r.year))]):e._e(),"other"==r.type?n("span",[e._v("SP-"+e._s(r.year)+"-"+e._s(r.number))]):e._e()]}},{key:"item.options",fn:function(t){var r=t.item;return[n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.showPdf(r.file)}}},[n("v-icon",[e._v("mdi-file-document")])],1)]}}],null,!1,3555206205)}):e._e()],1)],1)],1),n("div",{attrs:{id:"embed"}})],1):e._e()],1)},x=[],N=(n("99af"),n("4de4"),n("caad"),n("2532"),n("96cf"),n("1da1")),j=n("d9a4"),O=n.n(j),P=r["a"].extend({name:"Home",data:function(){return{findBy:null,resNumber:null,resYear:null,otherNumber:null,otherYear:null,title:"",documents:null,loading:!1,errorLoading:!1,filteredDocuments:null,headers:[{text:"Číslo / č. j.",value:"fullRef"},{text:"Název",value:"title"},{text:"Možnosti",value:"options"}]}},mounted:function(){var e=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.loading=!0,n="".concat(location.protocol,"//").concat(location.host,"/list.json"),r=new XMLHttpRequest,r.open("GET",n),r.send(),r.onload=function(){200===r.status?e.documents=JSON.parse(r.response):e.errorLoading=!1,e.loading=!1};case 6:case"end":return t.stop()}}),t)})))()},methods:{find:function(){var e=this;if(this.documents)switch(this.findBy){case"resolutionNumber":this.filteredDocuments=this.documents.filter((function(t){return"resolution"==t.type&&t.number==e.resNumber&&t.year==e.resYear}));break;case"referenceNumber":this.filteredDocuments=this.documents.filter((function(t){return"other"==t.type&&t.number==e.otherNumber&&t.year==e.otherYear}));break;case"title":this.filteredDocuments=this.documents.filter((function(t){return O()(t.title.toLowerCase()).includes(O()(e.title.toLowerCase()))}))}},showPdf:function(e){this.$router.push("/pdfViewer/"+encodeURIComponent(e))}}}),B=P,L=(n("cccb"),n("0798")),R=n("62ad"),T=n("8fea"),S=n("8e36"),C=n("67b6"),U=n("43a6"),z=n("0fd9"),D=n("8654"),Y=Object(s["a"])(B,V,x,!1,null,null,null),M=Y.exports;u()(Y,{VAlert:L["a"],VBtn:v["a"],VCol:R["a"],VContainer:p["a"],VDataTable:T["a"],VIcon:h["a"],VProgressLinear:S["a"],VRadio:C["a"],VRadioGroup:U["a"],VRow:z["a"],VTextField:D["a"]});var $=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.loading?n("v-progress-linear",{attrs:{indeterminate:!0}}):e._e(),n("v-alert",{attrs:{type:"error",value:e.errorLoading}},[e._v("Nepodařilo se načíst dokument.")]),e.blobUrl?n("v-container",{attrs:{fluid:""}},[n("v-toolbar",{attrs:{flat:"",dense:"",dark:""}},[n("v-toolbar-title",[e._v("Prohlížení souboru PDF")]),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.openNewWindow()}}},[n("v-icon",[e._v("mdi-open-in-new")])],1),n("v-btn",{attrs:{icon:"",href:e.blobUrl,download:""}},[n("v-icon",[e._v("mdi-file-download")])],1)],1),e.blobUrl?n("embed",{attrs:{src:e.blobUrl,type:"application/pdf"}}):e._e()],1):e._e()],1)},A=[],H=(n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),r["a"].extend({name:"PdfViewer",data:function(){return{loading:!1,errorLoading:!1,blobUrl:null}},mounted:function(){var e=this;this.loading=!0;var t=new XMLHttpRequest,n=decodeURI(this.$route.params.doc);t.open("GET",n,!0),t.responseType="arraybuffer",t.send(),t.onload=function(){var n=new Blob([t.response],{type:"application/pdf"});e.blobUrl=URL.createObjectURL(n),e.loading=!1},t.onerror=function(){console.error(t.response),e.loading=!1,e.errorLoading=!0}},methods:{openNewWindow:function(){this.blobUrl&&window.open(this.blobUrl,"_blank")}}})),E=H,F=(n("ff70"),n("2fa4")),G=n("71d9"),I=Object(s["a"])(E,$,A,!1,null,null,null),J=I.exports;u()(I,{VAlert:L["a"],VBtn:v["a"],VContainer:p["a"],VIcon:h["a"],VProgressLinear:S["a"],VSpacer:F["a"],VToolbar:G["a"],VToolbarTitle:y["a"]}),r["a"].use(k["a"]);var q=[{path:"/",name:"Home",component:M},{path:"/pdfViewer/:doc",name:"PdfViewer",component:J}],W=new k["a"]({routes:q}),X=W,K=n("f309"),Q=n("83af");r["a"].use(K["a"]);var Z=new K["a"]({lang:{locales:{cs:Q["a"]},current:"cs"}});r["a"].config.productionTip=!1,new r["a"]({router:X,vuetify:Z,render:function(e){return e(g)}}).$mount("#app")},ff70:function(e,t,n){"use strict";var r=n("886f"),o=n.n(r);o.a}});
//# sourceMappingURL=app.ddcdb356.js.map