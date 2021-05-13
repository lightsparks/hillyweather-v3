(function(t){function e(e){for(var n,o,c=e[0],l=e[1],s=e[2],u=0,p=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,s||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,c=1;c<a.length;c++){var l=a[c];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/hillyweather-v3/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"HillyWeather Logo",contain:"",src:a("d7bb"),transition:"scale-transition",width:"40"}})],1),n("v-spacer"),n("h1",[t._v("HillyWeather v3.0")])],1),n("v-main",[n("router-view")],1)],1)},i=[],o=n["a"].extend({name:"App",data:function(){return{}}}),c=o,l=a("2877"),s=a("6544"),d=a.n(s),u=a("7496"),p=a("40dc"),f=a("adda"),v=a("f6c4"),m=a("2fa4"),y=Object(l["a"])(c,r,i,!1,null,null,null),b=y.exports;d()(y,{VApp:u["a"],VAppBar:p["a"],VImg:f["a"],VMain:v["a"],VSpacer:m["a"]});var h=a("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"d-flex justify-center"},[a("v-col",{attrs:{cols:"12",sm:"12",md:"8"}},[a("v-window",{model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[a("v-window-item",{attrs:{value:1}},[a("v-card",{attrs:{elevation:"4"}},[a("v-card-title",{staticClass:"d-flex justify-center pb-6"},[t._v(t._s(t.currentDate))]),a("div",{staticClass:"pa-16 pt-0 pb-6"},[a("v-img",{staticClass:"mx-auto",attrs:{src:t.today.icon,alt:"icon",transition:"scale-transition",height:"20%"}})],1),a("v-card-text",{staticClass:"pt-0"},[a("v-card-subtitle",{staticClass:"text-center display-1 font-italic"},[t._v(t._s(t.today.condition))]),a("v-card-text",{staticClass:"text-center display-3 font-weight-bold px-auto mt-4 mb-4"},[t._v(t._s(t.today.nowTemp+"°C"))]),a("v-card-text",{staticClass:"d-flex justify-center font-weight-black pt-0 pb-0"},[a("h3",[t._v(t._s("Min: "+t.today.minTemp+"°C")+" || "+t._s("Max: "+t.today.maxTemp+"°C"))])])],1),a("v-container",{staticClass:"d-flex justify-center"},[a("v-btn",{staticClass:"d-flex justify-end",attrs:{color:"primary",rounded:""},on:{click:function(e){t.step++}}},[t._v("7 dagen vooruit ❭❭")])],1)],1)],1),a("v-window-item",{attrs:{value:2}},[a("v-container",{staticClass:"d-flex justify-center"},[a("v-btn",{attrs:{color:"primary",rounded:""},on:{click:function(e){t.step--}}},[t._v("❬❬ Het weer vandaag")])],1),a("v-list",t._l(t.week,(function(e){return a("v-list-item",{key:e.dt},[a("v-card",{staticClass:"mx-auto mb-6",attrs:{width:"500"}},[a("v-card-title",{staticClass:"d-flex justify-center display-0 pb-0 display-1"},[a("h6",[t._v(t._s(t.formatDate(e.dt)))])]),a("v-container",{staticClass:"d-flex flex-row mb-0 pt-0 pb-0 align-content-center"},[a("v-img",{staticClass:"mx-auto align-self-center ml-3",attrs:{width:"60px",alt:"Weekday Icon",src:e.icon,transition:"scale-transition",contain:""}}),a("v-card-text",{staticClass:"font-italic text-center ml-1 align-self-center text--secondary"},[a("h4",[t._v(t._s(e.weather[0].description))])]),a("v-card-text",{staticClass:"mx-auto d-flex justify-end display-1 pl-0 pr-0 ml-0 font-weight-bold text--secondary"},[t._v(t._s(Math.round(e.temp.day)+"°C")+" ")])],1),a("v-card-subtitle",{staticClass:"d-flex justify-end align-self-center pt-0",attrs:{color:"primary"}},[t._v(" "+t._s("Min: "+Math.round(e.temp.min)+"°C")+" || "+t._s("Max: "+Math.round(e.temp.max)+"°C")+" ")])],1)],1)})),1)],1)],1)],1)],1)],1)],1)},w=[],x=a("5530"),C=a("d4ec"),_=a("bee2"),j=a("262e"),O=a("2caf"),k=(a("a4d3"),a("e01a"),a("d81d"),a("a434"),a("9ab4")),V=a("2fe1"),M=a("bc3a"),T=a.n(M),S=function(t){Object(j["a"])(a,t);var e=Object(O["a"])(a);function a(){var t;return Object(C["a"])(this,a),t=e.apply(this,arguments),t.step=1,t.apiUrl="https://api.openweathermap.org/data/2.5/onecall?lat=52.231589&lon=5.189039&exclude=minutely,hourly&units=metric&lang=nl&appid=d1e902b667baccdb37cfbc96ad629f00",t.apiCallError={},t.currentDate=(new Date).toLocaleDateString("nl-NL",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),t.today={date:null,condition:"",nowTemp:null,dayTemp:null,minTemp:null,maxTemp:null,icon:null},t.apiResponse={},t.week=[],t}return Object(_["a"])(a,[{key:"mounted",value:function(){this.getWeather()}},{key:"getWeather",value:function(){var t=this;T.a.get(this.apiUrl).then((function(e){console.log(t.apiResponse),Object.assign(t.today,{condition:e.data.current.weather[0].description,nowTemp:Math.round(e.data.current.temp),minTemp:Math.round(e.data.daily[0].temp.min),maxTemp:Math.round(e.data.daily[0].temp.max),icon:"./img/"+e.data.current.weather[0].icon+".png"}),t.week=e.data.daily.splice(1,7).map((function(t){return Object(x["a"])(Object(x["a"])({},t),{},{icon:"./img/".concat(t.weather[0].icon,".png")})})),console.log(t.week)})).catch((function(e){t.apiCallError=e.response.data,console.log(t.apiCallError)}))}},{key:"formatDate",value:function(t){var e=new Date(1e3*t);return e.toLocaleDateString("nl-NL",{weekday:"long",month:"long",day:"numeric"})}}]),a}(n["a"]);S=Object(k["a"])([V["a"]],S);var D=S,L=D,P=a("8336"),W=a("b0af"),E=a("99d9"),I=a("62ad"),A=a("a523"),H=a("8860"),R=a("da13"),$=a("0fd9"),B=a("f665"),J=a("1e6c"),N=Object(l["a"])(L,g,w,!1,null,null,null),U=N.exports;d()(N,{VApp:u["a"],VBtn:P["a"],VCard:W["a"],VCardSubtitle:E["a"],VCardText:E["b"],VCardTitle:E["c"],VCol:I["a"],VContainer:A["a"],VImg:f["a"],VList:H["a"],VListItem:R["a"],VRow:$["a"],VWindow:B["a"],VWindowItem:J["a"]}),n["a"].use(h["a"]);var q=[{path:"/",name:"Home",component:U}],z=new h["a"]({routes:q}),F=z,G=a("f309");n["a"].use(G["a"]);var K=new G["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:F,vuetify:K,render:function(t){return t(b)}}).$mount("#app")},d7bb:function(t,e,a){t.exports=a.p+"img/01d.fa805af9.png"}});
//# sourceMappingURL=app.686b0aa4.js.map