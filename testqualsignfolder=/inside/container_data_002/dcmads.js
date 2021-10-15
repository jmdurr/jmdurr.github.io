(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a},ca=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");
},da=ca(this),ea=function(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var f=a[d];if(!(f in c))break a;c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}},fa="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},e;
if("function"==typeof Object.setPrototypeOf)e=Object.setPrototypeOf;else{var l;a:{var ha={a:!0},m={};try{m.__proto__=ha;l=m.a;break a}catch(a){}l=!1}e=l?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var n=e;
ea("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(k){return k};var f=[],g="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof g){b=g.call(b);for(var h=0;!(g=b.next()).done;)f.push(c.call(d,g.value,h++))}else for(g=b.length,h=0;h<g;h++)f.push(c.call(d,b[h],h));return f}});var p=this||self,q=function(a){return a};var ia=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,f=0;f<c;f++)if(f in d&&b.call(void 0,d[f],f,a))return!0;return!1};var r;a:{var t=p.navigator;if(t){var u=t.userAgent;if(u){r=u;break a}}r=""};var v={},w=null,z=function(a,b){void 0===b&&(b=0);if(!w){w={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=c.concat(d[f].split(""));v[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===w[k]&&(w[k]=h)}}}b=v[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(f=g=0;g<a.length-2;g+=3){var x=a[g],y=a[g+1];k=a[g+2];h=b[x>>2];x=b[(x&3)<<4|y>>4];y=b[(y&15)<<2|k>>6];k=b[k&63];c[f++]=h+x+y+k}h=0;k=d;switch(a.length-
g){case 2:h=a[g+1],k=b[(h&15)<<2]||d;case 1:a=a[g],c[f]=b[a>>2]+b[(a&3)<<4|h>>4]+k+d}return c.join("")};var A="function"===typeof Uint8Array;function B(a,b,c){if(null!=a)return"object"===typeof a?A&&a instanceof Uint8Array?c(a):ja(a,b,c):b(a)}function ja(a,b,c){if(Array.isArray(a)){for(var d=Array(a.length),f=0;f<a.length;f++)d[f]=B(a[f],b,c);Array.isArray(a)&&a.o&&C(d);return d}d={};for(f in a)d[f]=B(a[f],b,c);return d}
var ka=function(a){return"number"===typeof a?isFinite(a)?a:String(a):a},la={o:{value:!0,configurable:!0}},C=function(a){Array.isArray(a)&&!Object.isFrozen(a)&&Object.defineProperties(a,la);return a},D;var ma;var E=function(a,b,c){var d=ma;ma=null;a||(a=d);d=this.constructor.F;a||(a=d?[d]:[]);this.h=d?0:-1;this.g=a;a:{d=this.g.length;a=d-1;if(d&&(d=this.g[a],!(null===d||"object"!=typeof d||Array.isArray(d)||A&&d instanceof Uint8Array))){this.j=a-this.h;this.i=d;break a}void 0!==b&&-1<b?(this.j=Math.max(b,a+1-this.h),this.i=null):this.j=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)a=c[b],a<this.j?(a+=this.h,(d=this.g[a])?C(d):this.g[a]=na):(oa(this),(d=this.i[a])?C(d):this.i[a]=na)},na=Object.freeze(C([])),
oa=function(a){var b=a.j+a.h;a.g[b]||(a.i=a.g[b]={})},F=function(a,b,c){var d;(void 0===d?0:d)||b>=a.j?(oa(a),a.i[b]=c):a.g[b+a.h]=c;return a};E.prototype.toJSON=function(){var a=this.g;return D?a:ja(a,ka,z)};var pa=function(a,b){switch(typeof b){case "number":return isFinite(b)?b:String(b);case "object":if(A&&null!=b&&b instanceof Uint8Array)return z(b)}return b};E.prototype.toString=function(){return this.g.toString()};var G=function(a){E.call(this,a,-1,qa)};G.prototype=fa(E.prototype);G.prototype.constructor=G;if(n)n(G,E);else for(var H in E)if("prototype"!=H)if(Object.defineProperties){var ra=Object.getOwnPropertyDescriptor(E,H);ra&&Object.defineProperty(G,H,ra)}else G[H]=E[H];var qa=[6];/*

 SPDX-License-Identifier: Apache-2.0
*/
var I,sa=function(){if(void 0===I){var a=null,b=p.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:q,createScript:q,createScriptURL:q})}catch(c){p.console&&p.console.error(c.message)}I=a}else I=a}return I};var J=function(a,b){this.g=b===ta?a:""};J.prototype.toString=function(){return this.g+""};var ta={};var ua={},K=function(a,b,c){this.g=c===ua?a:""};K.prototype.toString=function(){return this.g.toString()};function va(a){return a instanceof K&&a.constructor===K?a.g:"type_error:SafeHtml"};function wa(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=a.write;var f=d.apply;c=c.map(va);if(!(c instanceof Array)){var g="undefined"!=typeof Symbol&&Symbol.iterator&&c[Symbol.iterator];c=g?g.call(c):{next:aa(c)};for(var h=[];!(g=c.next()).done;)h.push(g.value);c=h}f.call(d,a,c)};var za=function(a,b){if(!xa()){var c=Math.random();if(c<b)return c=ya(),a[Math.floor(c*a.length)]}return null},ya=function(){if(!p.crypto)return Math.random();try{var a=new Uint32Array(1);p.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}},xa=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){return ia(["Google Web Preview","Mediapartners-Google","Google-Read-Aloud","Google-Adwords"],Aa)||1E-4>Math.random()}),Aa=function(a){return-1!=r.indexOf(a)};var Ba="platform platformVersion architecture model uaFullVersion bitness".split(" "),Ca=function(){return p.navigator&&p.navigator.userAgentData&&"function"===typeof p.navigator.userAgentData.getHighEntropyValues?p.navigator.userAgentData.getHighEntropyValues(Ba).then(function(a){var b=new G;b=F(b,1,a.platform);b=F(b,2,a.platformVersion);b=F(b,3,a.architecture);b=F(b,4,a.model);b=F(b,5,a.uaFullVersion);return F(b,9,a.bitness)}):null};var Da=function(a,b){b=void 0===b?!0:b;try{for(var c=null;c!=a;c=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;case "file:":return b;case "http:":return!1}}catch(d){}return!0}(p,!1)?"https:":"http:",Ea={},Fa=(Ea[1]="Ax15QOERqai2A5XWrDY38Eg07xh2T0pkhpDPJuDlxr7D2Ka8wHvklgK7tTPZOnT+8H31lwHto5JpvYV8jRn1WgIAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjM0MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9",
Ea);var Ga={D:1,u:4,v:5,s:7,A:9,B:10,C:11},L={m:"40004006",l:"40004007"};function Ha(){return{1:.5,4:.02,5:.001,7:.5,9:.05,10:.2,11:0}}function Ia(){var a=Ja,b=typeof a;if(("object"!=b||null==a)&&"function"!=b)return!1;for(var c in Ga)if(b=a[Ga[c]],"number"!==typeof b||0>b||1<b)return!1;return!0};function Ka(){var a=p.dcmads;if(null!=a.eids)return a.eids;var b=p.navigator;return b.connection&&b.connection.saveData?(a=za([L.m,L.l],a.expts[4]))?"4|"+a:"":""}function La(){if(!p.dcmads.uach){var a=Ca();a&&a.then(function(b){var c=p.dcmads;a:{D=!0;try{var d=JSON.stringify(b.toJSON(),pa);break a}finally{D=!1}d=void 0}c.uach=d})}};try{p.dcmads=p.dcmads||{};p.dcmads.startTime=(new Date).getTime();var Ma=p.dcmads,M=p.dcmads.version,N={loader:232};if(M)if(N.experiment=M.experiment,80==M.number||"p"==M.number)N.number=80;else if(80==M.number||"c"==M.number)N.number=80;if(!N.number){var Na=za([80,80],0);N.experiment=!!Na;N.number=Na||80}Ma.version=N;var Oa=p.dcmads,Pa,Ja=p.dcmads.expts,O;O=void 0===O?Ha:O;Pa=Ia()?Ja:O();Oa.expts=Pa;p.dcmads.eids=Ka();p.dcmads.ots=Fa;La();var Qa="4|"+L.l,P,Ra=p.dcmads.version,Sa=Ra.number,Ta="";
Ra.experiment&&80==Sa&&(Ta="?rxp=80x80");var Ua="impl_v"+Sa+".js"+Ta,Va=p.document,Wa=Va.currentScript||Array.from(Va.getElementsByTagName("script")).pop();P=(0==(Wa&&Wa.src||"").indexOf("http:")?"http:":"https:")+"//www.googletagservices.com/dcm/"+Ua;if(p.dcmads.eids===Qa){var Xa=p.document,Ya=sa(),Za=Ya?Ya.createScriptURL(P):P,Q=Xa.createElement("script"),R=new J(Za,ta);Q.src=R instanceof J&&R.constructor===J?R.g:"type_error:TrustedResourceUrl";var $a,S,ab=(Q.ownerDocument&&Q.ownerDocument.defaultView||
window).document,T=null===(S=ab.querySelector)||void 0===S?void 0:S.call(ab,"script[nonce]");($a=T?T.nonce||T.getAttribute("nonce")||"":"")&&Q.setAttribute("nonce",$a);var U=Xa.getElementsByTagName("script")[0];U&&U.parentNode&&U.parentNode.insertBefore(Q,U)}else{var bb=p.document,cb='<script src="'+P+'">\x3c/script>',db=sa(),eb=db?db.createHTML(cb):cb;wa(bb,new K(eb,null,ua))}}catch(a){if(.01>Math.random()){var V="";try{var W,X=a.toString();a.name&&-1==X.indexOf(a.name)&&(X+=": "+a.name);a.message&&
-1==X.indexOf(a.message)&&(X+=": "+a.message);if(a.stack){var Y=a.stack,Z=X;try{-1==Y.indexOf(Z)&&(Y=Z+"\n"+Y);for(var fb;Y!=fb;)fb=Y,Y=Y.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");X=Y.replace(/\n */g,"\n")}catch(b){X=Z}}W=X;W=W.substring(0,1024);V=encodeURIComponent(W)}catch(b){V="extr"}var gb=p.dcmads.eids,hb=document.createElement("img");hb.src=Da+"//pagead2.googlesyndication.com/pagead/gen_204?id=dcmads-err&ver=232&context=554"+((gb?"&eids="+gb:"")+"&msg="+V);(p.google_image_requests=
p.google_image_requests||[]).push(hb)}};}).call(this);