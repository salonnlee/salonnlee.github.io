var app=function(){"use strict";function e(){}function n(e,n){for(const t in n)e[t]=n[t];return e}function t(e){return e()}function o(){return Object.create(null)}function l(e){e.forEach(t)}function r(e){return"function"==typeof e}function c(e,n){return e!=e?n==n:e!==n||e&&"object"==typeof e||"function"==typeof e}function i(e){const n={};for(const t in e)"$"!==t[0]&&(n[t]=e[t]);return n}function s(e){return null==e?"":e}function u(e,n){e.appendChild(n)}function a(e,n,t){e.insertBefore(n,t||null)}function f(e){e.parentNode.removeChild(e)}function g(e,n){for(let t=0;t<e.length;t+=1)e[t]&&e[t].d(n)}function m(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function p(){return d(" ")}function h(){return d("")}function w(e,n,t,o){return e.addEventListener(n,t,o),()=>e.removeEventListener(n,t,o)}function $(e,n,t){null==t?e.removeAttribute(n):e.getAttribute(n)!==t&&e.setAttribute(n,t)}function b(e,n){n=""+n,e.wholeText!==n&&(e.data=n)}let v;function C(e){v=e}function y(){if(!v)throw new Error("Function called outside component initialization");return v}function k(e){y().$$.before_update.push(e)}function I(){const e=y();return(n,t)=>{const o=e.$$.callbacks[n];if(o){const l=function(e,n,t=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(e,t,!1,n),o}(n,t);o.slice().forEach((n=>{n.call(e,l)}))}}}const x=[],z=[],M=[],_=[],E=Promise.resolve();let O=!1;function B(e){M.push(e)}let P=!1;const R=new Set;function j(){if(!P){P=!0;do{for(let e=0;e<x.length;e+=1){const n=x[e];C(n),N(n.$$)}for(C(null),x.length=0;z.length;)z.pop()();for(let e=0;e<M.length;e+=1){const n=M[e];R.has(n)||(R.add(n),n())}M.length=0}while(x.length);for(;_.length;)_.pop()();O=!1,P=!1,R.clear()}}function N(e){if(null!==e.fragment){e.update(),l(e.before_update);const n=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,n),e.after_update.forEach(B)}}const T=new Set;let U;function A(){U={r:0,c:[],p:U}}function S(){U.r||l(U.c),U=U.p}function L(e,n){e&&e.i&&(T.delete(e),e.i(n))}function q(e,n,t,o){if(e&&e.o){if(T.has(e))return;T.add(e),U.c.push((()=>{T.delete(e),o&&(t&&e.d(1),o())})),e.o(n)}}function F(e,n){q(e,1,1,(()=>{n.delete(e.key)}))}function D(e,n,t,o,l,r,c,i,s,u,a,f){let g=e.length,m=r.length,d=g;const p={};for(;d--;)p[e[d].key]=d;const h=[],w=new Map,$=new Map;for(d=m;d--;){const e=f(l,r,d),i=t(e);let s=c.get(i);s?o&&s.p(e,n):(s=u(i,e),s.c()),w.set(i,h[d]=s),i in p&&$.set(i,Math.abs(d-p[i]))}const b=new Set,v=new Set;function C(e){L(e,1),e.m(i,a),c.set(e.key,e),a=e.first,m--}for(;g&&m;){const n=h[m-1],t=e[g-1],o=n.key,l=t.key;n===t?(a=n.first,g--,m--):w.has(l)?!c.has(o)||b.has(o)?C(n):v.has(l)?g--:$.get(o)>$.get(l)?(v.add(o),C(n)):(b.add(l),g--):(s(t,c),g--)}for(;g--;){const n=e[g];w.has(n.key)||s(n,c)}for(;m;)C(h[m-1]);return h}function G(e,n){const t={},o={},l={$$scope:1};let r=e.length;for(;r--;){const c=e[r],i=n[r];if(i){for(const e in c)e in i||(o[e]=1);for(const e in i)l[e]||(t[e]=i[e],l[e]=1);e[r]=i}else for(const e in c)l[e]=1}for(const e in o)e in t||(t[e]=void 0);return t}function H(e){return"object"==typeof e&&null!==e?e:{}}function J(e){e&&e.c()}function K(e,n,o,c){const{fragment:i,on_mount:s,on_destroy:u,after_update:a}=e.$$;i&&i.m(n,o),c||B((()=>{const n=s.map(t).filter(r);u?u.push(...n):l(n),e.$$.on_mount=[]})),a.forEach(B)}function Q(e,n){const t=e.$$;null!==t.fragment&&(l(t.on_destroy),t.fragment&&t.fragment.d(n),t.on_destroy=t.fragment=null,t.ctx=[])}function V(e,n){-1===e.$$.dirty[0]&&(x.push(e),O||(O=!0,E.then(j)),e.$$.dirty.fill(0)),e.$$.dirty[n/31|0]|=1<<n%31}function W(n,t,r,c,i,s,u,a=[-1]){const g=v;C(n);const m=n.$$={fragment:null,ctx:null,props:s,update:e,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(g?g.$$.context:[])),callbacks:o(),dirty:a,skip_bound:!1,root:t.target||g.$$.root};u&&u(m.root);let d=!1;if(m.ctx=r?r(n,t.props||{},((e,t,...o)=>{const l=o.length?o[0]:t;return m.ctx&&i(m.ctx[e],m.ctx[e]=l)&&(!m.skip_bound&&m.bound[e]&&m.bound[e](l),d&&V(n,e)),t})):[],m.update(),d=!0,l(m.before_update),m.fragment=!!c&&c(m.ctx),t.target){if(t.hydrate){const e=function(e){return Array.from(e.childNodes)}(t.target);m.fragment&&m.fragment.l(e),e.forEach(f)}else m.fragment&&m.fragment.c();t.intro&&L(n.$$.fragment),K(n,t.target,t.anchor,t.customElement),j()}C(g)}class X{$destroy(){Q(this,1),this.$destroy=e}$on(e,n){const t=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return t.push(n),()=>{const e=t.indexOf(n);-1!==e&&t.splice(e,1)}}$set(e){var n;this.$$set&&(n=e,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Y(e){let n,t,o,l=(e[3]||0==e[4]?"":e[4])+"";return{c(){n=m("div"),t=d(l),$(n,"class",o=s(["cell","opened",e[4]&&0!=e[4]?"":"transparent",e[3]?"mined":"",e[6]?"chartleted":""].join(" "))+" svelte-6k2wz2"),$(n,"id",e[0])},m(e,o){a(e,n,o),u(n,t)},p(e,r){24&r&&l!==(l=(e[3]||0==e[4]?"":e[4])+"")&&b(t,l),88&r&&o!==(o=s(["cell","opened",e[4]&&0!=e[4]?"":"transparent",e[3]?"mined":"",e[6]?"chartleted":""].join(" "))+" svelte-6k2wz2")&&$(n,"class",o),1&r&&$(n,"id",e[0])},d(e){e&&f(n)}}}function Z(e){let n,t,o,l;return{c(){n=m("div"),$(n,"class",t=s(["cell",e[8]?"selected":"",e[2]?"flagged":""].join(" "))+" svelte-6k2wz2"),$(n,"id",e[0])},m(t,r){a(t,n,r),o||(l=w(n,"click",e[9]),o=!0)},p(e,o){260&o&&t!==(t=s(["cell",e[8]?"selected":"",e[2]?"flagged":""].join(" "))+" svelte-6k2wz2")&&$(n,"class",t),1&o&&$(n,"id",e[0])},d(e){e&&f(n),o=!1,l()}}}function ee(e){let n;return{c(){n=m("div"),$(n,"class",s(["cell"].join(" "))+" svelte-6k2wz2"),$(n,"id",e[0])},m(e,t){a(e,n,t)},p(e,t){1&t&&$(n,"id",e[0])},d(e){e&&f(n)}}}function ne(n){let t;function o(e,n){return e[5]?ee:e[1]||e[7]&&e[3]||e[7]&&e[6]?Y:Z}let l=o(n),r=l(n);return{c(){r.c(),t=h()},m(e,n){r.m(e,n),a(e,t,n)},p(e,[n]){l===(l=o(e))&&r?r.p(e,n):(r.d(1),r=l(e),r&&(r.c(),r.m(t.parentNode,t)))},i:e,o:e,d(e){r.d(e),e&&f(t)}}}function te(e,n,t){let{id:o}=n,{row:l}=n,{column:r}=n,{opened:c}=n,{flagged:i}=n,{mined:s}=n,{neighborMineCount:u}=n,{disabled:a}=n,{chartleted:f}=n,{gameOver:g}=n,{currentCell:m}=n;const d=I();let p=m&&m.id===o;return k((()=>{t(8,p=m&&m.id===o)})),e.$$set=e=>{"id"in e&&t(0,o=e.id),"row"in e&&t(10,l=e.row),"column"in e&&t(11,r=e.column),"opened"in e&&t(1,c=e.opened),"flagged"in e&&t(2,i=e.flagged),"mined"in e&&t(3,s=e.mined),"neighborMineCount"in e&&t(4,u=e.neighborMineCount),"disabled"in e&&t(5,a=e.disabled),"chartleted"in e&&t(6,f=e.chartleted),"gameOver"in e&&t(7,g=e.gameOver),"currentCell"in e&&t(12,m=e.currentCell)},[o,c,i,s,u,a,f,g,p,function(){d("click",{id:o,row:l,column:r,opened:c,flagged:i,mined:s,neighborMineCount:u,disabled:a,chartleted:f})},l,r,m]}class oe extends X{constructor(e){super(),W(this,e,te,ne,c,{id:0,row:10,column:11,opened:1,flagged:2,mined:3,neighborMineCount:4,disabled:5,chartleted:6,gameOver:7,currentCell:12})}}function le(n){let t,o,r,c,i,s,g,h,v,C,y,k,I,x,z,M=re(n[0]-n[1])+"";return{c(){t=m("div"),o=m("div"),r=d(M),c=p(),i=m("div"),s=p(),g=m("div"),h=p(),v=m("div"),C=p(),y=m("div"),k=p(),I=m("div"),$(o,"class","minecount svelte-mr9zwz"),$(i,"class","open svelte-mr9zwz"),$(g,"class","flag svelte-mr9zwz"),$(v,"class","help svelte-mr9zwz"),$(y,"class","restart svelte-mr9zwz"),$(I,"class","next svelte-mr9zwz"),$(t,"class","button-group svelte-mr9zwz")},m(e,l){a(e,t,l),u(t,o),u(o,r),u(t,c),u(t,i),u(t,s),u(t,g),u(t,h),u(t,v),u(t,C),u(t,y),u(t,k),u(t,I),x||(z=[w(i,"click",n[2]),w(g,"click",n[3]),w(v,"click",n[4]),w(y,"click",n[5]),w(I,"click",n[6])],x=!0)},p(e,[n]){3&n&&M!==(M=re(e[0]-e[1])+"")&&b(r,M)},i:e,o:e,d(e){e&&f(t),x=!1,l(z)}}}function re(e){return("000"+e).slice(-3)}function ce(e,n,t){let{mineCount:o}=n,{flagCount:l}=n;const r=I();return e.$$set=e=>{"mineCount"in e&&t(0,o=e.mineCount),"flagCount"in e&&t(1,l=e.flagCount)},[o,l,function(){r("open")},function(){r("flag")},function(){r("help")},function(){r("restart")},function(){r("next")}]}class ie extends X{constructor(e){super(),W(this,e,ce,le,c,{mineCount:0,flagCount:1})}}function se(e,n){return`${e}/${n}`}function ue({row:e,column:n,...t}){return{id:se(e,n),row:e,column:n,...t}}function ae(e,n){return Math.floor(Math.random()*(n-e))+e}function fe(e){const[n,t]=e.split("/");return{row:n,column:t}}function ge(e,n){let{row:t,column:o}=fe(e);t=parseInt(t),o=parseInt(o);const l=[];l.push(se(t-1,o-1)),l.push(se(t-1,o)),l.push(se(t-1,o+1)),l.push(se(t,o-1)),l.push(se(t,o+1)),l.push(se(t+1,o-1)),l.push(se(t+1,o)),l.push(se(t+1,o+1));const{rows:r,columns:c}=n;for(let e=0;e<l.length;e++){let{row:n,column:t}=fe(l[e]);(n<0||t<0||n>=r||t>=c)&&(l.splice(e,1),e--)}return l}function me(e,n,t){const o=ge(e.id,t);for(let e=0;e<o.length;e++){const{row:t,column:l}=fe(o[e]),r=n[t][l];if(void 0!==r&&r.chartleted)return!0}return!1}function de(e){const{rows:n,columns:t,startRow:o,mineCount:l}=e;let r=[];for(let e=0;e<n;e++)for(let n=0;n<t;n++)r[e]=r[e]||[],r[e][n]=ue({row:o+e,column:n,opened:!1,flagged:!1,mined:!1,neighborMineCount:0,disabled:!1,chartleted:!1});return r}const pe=10,he=65,we={startRow:0,rows:28,columns:16,mineCount:32},$e={startRow:0,rows:pe,columns:16,mineCount:12},be={startRow:pe,rows:9,columns:16,mineCount:10},ve={startRow:19,rows:9,columns:16,mineCount:10};function Ce(e,n){const{row:t,column:o}=fe(n),l=e[t][o];let r=0;return void 0!==l&&(r=l.mined?1:0),r}function ye(e,n,t){const{row:o,column:l}=fe(e.id);o<pe?(!function(e,n,{regionTopChartletPosition:t}){let{row:o,column:l}=fe(e.id);o=parseInt(o),l=parseInt(l);const r={row:o-1,column:l-2},c={row:o-1,column:l+3},i={row:o+1,column:l-2},s={row:0,column:0};r.row<0&&(s.row=-r.row);i.row>9&&(s.row=-(i.row-9));r.column<0&&(s.column=-r.column);c.column>15&&(s.column=-(c.column-15));r.row+=s.row,r.column+=s.column,c.row+=s.row,c.column+=s.column,c.column>13&&c.row<2&&(l<=13&&o>=2?(r.row+=2-c.row,r.column+=13-c.column):l<=13&&o<2?r.column+=13-c.column:l>13&&o>=2&&(r.row+=2-c.row));ke(n,r,t,{chartletRows:3,chartletColumns:6})}(e,n,t),xe(n,t),ze(n,t)):o<19?(!function(e,n,{regionMiddleChartletPosition:t}){let{row:o,column:l}=fe(e.id);o=parseInt(o),l=parseInt(l);const r={row:o-1,column:l-2},c={row:o-1,column:l+2},i={row:o+2,column:l-2},s={row:0,column:0};r.row<10&&(s.row=-(r.row-10));i.row>18&&(s.row=-(i.row-18));r.column<0&&(s.column=-r.column);c.column>15&&(s.column=-(c.column-15));r.row+=s.row,r.column+=s.column,ke(n,r,t,{chartletRows:4,chartletColumns:5})}(e,n,t),Ie(n,t),ze(n,t)):o<28&&(!function(e,n,{regionBottomChartletPosition:t}){let{row:o,column:l}=fe(e.id);o=parseInt(o),l=parseInt(l);const r={row:o-1,column:l-3},c={row:o-1,column:l+4},i={row:o+1,column:l-3},s={row:o+1,column:l+4},u={row:0,column:0};r.row<19&&(u.row=-(r.row-19));i.row>27&&(u.row=-(i.row-27));r.column<0&&(u.column=-r.column);c.column>15&&(u.column=-(c.column-15));r.row+=u.row,r.column+=u.column,s.row+=u.row,s.column+=u.column,s.column>11&&s.row>24&&(l<=11&&o<=24?(r.row+=24-s.row,r.column+=11-s.column):l<=11&&o>24?r.column+=11-s.column:l>11&&o<=24&&(r.row+=24-s.row));i.column<3&&i.row>21&&(l>=3&&o<=21?(r.row+=21-i.row,r.column+=3-i.column):l>=3&&o>21?r.column+=3-i.column:l<3&&o<=21&&(r.row+=21-i.row));ke(n,r,t,{chartletRows:3,chartletColumns:8})}(e,n,t),Ie(n,t),xe(n,t))}function ke(e,n,t,{chartletRows:o,chartletColumns:l}){const{row:r,column:c}=n;t.top=r*he+"px",t.left=c*he+"px";for(let n=r;n<r+o;n++)for(let t=c;t<c+l;t++)e[n][t]=ue({...e[n][t],chartleted:!0})}function Ie(e,{regionTopChartletPosition:n}){const t=ae(0,8),o=ae(0,9);n.top=t*he+"px",n.left=o*he+"px";for(let n=t;n<t+3;n++)for(let t=o;t<o+6;t++)e[n][t]=ue({...e[n][t],chartleted:!0})}function xe(e,{regionMiddleChartletPosition:n}){const t=ae(10,16),o=ae(0,12);n.top=t*he+"px",n.left=o*he+"px";for(let n=t;n<t+4;n++)for(let t=o;t<o+5;t++)e[n][t]=ue({...e[n][t],chartleted:!0})}function ze(e,{regionBottomChartletPosition:n}){const t=ae(19,26),o=ae(3,5);n.top=t*he+"px",n.left=o*he+"px";for(let n=t;n<t+3;n++)for(let t=o;t<o+8;t++)e[n][t]=ue({...e[n][t],chartleted:!0})}const Me=["0/14","0/15","1/14","1/15"];const _e=["22/0","22/1","22/2","23/0","23/1","23/2","24/0","24/1","24/2","25/0","25/1","25/2","26/0","26/1","26/2","27/0","27/1","27/2"];const Ee=["25/12","25/13","25/14","25/15","26/12","26/13","26/14","26/15","27/12","27/13","27/14","27/15"];function Oe(e,n,{forceUpdateBoard:t,boardConfig:o,lose:l}){if(!(e.opened||e.disabled||e.flagged))if(e.mined)l();else{if(n[e.row][e.column].opened=e.opened=!0,!e.neighborMineCount){const r=ge(e.id,o);for(let e=0;e<r.length;e++){const{row:c,column:i}=fe(r[e]),s=n[c][i];void 0===s||s.opened||s.disabled||Oe(s,n,{forceUpdateBoard:t,boardConfig:o,lose:l})}}t()}}function Be(e,n,t){const o=e.slice();return o[34]=n[t],o}function Pe(e,n,t){const o=e.slice();return o[37]=n[t],o}function Re(e,n,t){const o=e.slice();return o[34]=n[t],o}function je(e,n,t){const o=e.slice();return o[37]=n[t],o}function Ne(e,n,t){const o=e.slice();return o[34]=n[t],o}function Te(e,n,t){const o=e.slice();return o[37]=n[t],o}function Ue(n){let t,o,l;return{c(){t=m("div"),$(t,"class","helped svelte-hr2iiz")},m(e,r){a(e,t,r),o||(l=w(t,"click",n[21]),o=!0)},p:e,d(e){e&&f(t),o=!1,l()}}}function Ae(e){let n;return{c(){n=m("div"),$(n,"class","wined svelte-hr2iiz")},m(e,t){a(e,n,t)},d(e){e&&f(n)}}}function Se(e){let n;return{c(){n=m("div"),$(n,"class","losed svelte-hr2iiz")},m(e,t){a(e,n,t)},d(e){e&&f(n)}}}function Le(e,t){let o,l,r;const c=[{gameOver:t[8]},{currentCell:t[4]},t[37]];let i={};for(let e=0;e<c.length;e+=1)i=n(i,c[e]);return l=new oe({props:i}),l.$on("click",t[15]),{key:e,first:null,c(){o=h(),J(l.$$.fragment),this.first=o},m(e,n){a(e,o,n),K(l,e,n),r=!0},p(e,n){t=e;const o=304&n[0]?G(c,[256&n[0]&&{gameOver:t[8]},16&n[0]&&{currentCell:t[4]},32&n[0]&&H(t[37])]):{};l.$set(o)},i(e){r||(L(l.$$.fragment,e),r=!0)},o(e){q(l.$$.fragment,e),r=!1},d(e){e&&f(o),Q(l,e)}}}function qe(e){let n,t,o,l=[],r=new Map,c=e[34];const i=e=>e[37].id;for(let n=0;n<c.length;n+=1){let t=Te(e,c,n),o=i(t);r.set(o,l[n]=Le(o,t))}return{c(){for(let e=0;e<l.length;e+=1)l[e].c();n=p(),t=m("br")},m(e,r){for(let n=0;n<l.length;n+=1)l[n].m(e,r);a(e,n,r),a(e,t,r),o=!0},p(e,t){33072&t[0]&&(c=e[34],A(),l=D(l,t,i,1,e,c,r,n.parentNode,F,Le,n,Te),S())},i(e){if(!o){for(let e=0;e<c.length;e+=1)L(l[e]);o=!0}},o(e){for(let e=0;e<l.length;e+=1)q(l[e]);o=!1},d(e){for(let n=0;n<l.length;n+=1)l[n].d(e);e&&f(n),e&&f(t)}}}function Fe(e,t){let o,l,r;const c=[{gameOver:t[8]},{currentCell:t[4]},t[37]];let i={};for(let e=0;e<c.length;e+=1)i=n(i,c[e]);return l=new oe({props:i}),l.$on("click",t[16]),{key:e,first:null,c(){o=h(),J(l.$$.fragment),this.first=o},m(e,n){a(e,o,n),K(l,e,n),r=!0},p(e,n){t=e;const o=336&n[0]?G(c,[256&n[0]&&{gameOver:t[8]},16&n[0]&&{currentCell:t[4]},64&n[0]&&H(t[37])]):{};l.$set(o)},i(e){r||(L(l.$$.fragment,e),r=!0)},o(e){q(l.$$.fragment,e),r=!1},d(e){e&&f(o),Q(l,e)}}}function De(e){let n,t,o,l=[],r=new Map,c=e[34];const i=e=>e[37].id;for(let n=0;n<c.length;n+=1){let t=je(e,c,n),o=i(t);r.set(o,l[n]=Fe(o,t))}return{c(){for(let e=0;e<l.length;e+=1)l[e].c();n=p(),t=m("br")},m(e,r){for(let n=0;n<l.length;n+=1)l[n].m(e,r);a(e,n,r),a(e,t,r),o=!0},p(e,t){65872&t[0]&&(c=e[34],A(),l=D(l,t,i,1,e,c,r,n.parentNode,F,Fe,n,je),S())},i(e){if(!o){for(let e=0;e<c.length;e+=1)L(l[e]);o=!0}},o(e){for(let e=0;e<l.length;e+=1)q(l[e]);o=!1},d(e){for(let n=0;n<l.length;n+=1)l[n].d(e);e&&f(n),e&&f(t)}}}function Ge(e,t){let o,l,r;const c=[{gameOver:t[8]},{currentCell:t[4]},t[37]];let i={};for(let e=0;e<c.length;e+=1)i=n(i,c[e]);return l=new oe({props:i}),l.$on("click",t[17]),{key:e,first:null,c(){o=h(),J(l.$$.fragment),this.first=o},m(e,n){a(e,o,n),K(l,e,n),r=!0},p(e,n){t=e;const o=400&n[0]?G(c,[256&n[0]&&{gameOver:t[8]},16&n[0]&&{currentCell:t[4]},128&n[0]&&H(t[37])]):{};l.$set(o)},i(e){r||(L(l.$$.fragment,e),r=!0)},o(e){q(l.$$.fragment,e),r=!1},d(e){e&&f(o),Q(l,e)}}}function He(e){let n,t,o,l=[],r=new Map,c=e[34];const i=e=>e[37].id;for(let n=0;n<c.length;n+=1){let t=Pe(e,c,n),o=i(t);r.set(o,l[n]=Ge(o,t))}return{c(){for(let e=0;e<l.length;e+=1)l[e].c();n=p(),t=m("br")},m(e,r){for(let n=0;n<l.length;n+=1)l[n].m(e,r);a(e,n,r),a(e,t,r),o=!0},p(e,t){131472&t[0]&&(c=e[34],A(),l=D(l,t,i,1,e,c,r,n.parentNode,F,Ge,n,Pe),S())},i(e){if(!o){for(let e=0;e<c.length;e+=1)L(l[e]);o=!0}},o(e){for(let e=0;e<l.length;e+=1)q(l[e]);o=!1},d(e){for(let n=0;n<l.length;n+=1)l[n].d(e);e&&f(n),e&&f(t)}}}function Je(e){let n,t,o,l,r,c,i,s,d,h,w,b,v,C,y,k,I,x,z,M,_,E,O,B,P,R,j=e[11]&&Ue(e);function N(e,n){return e[9]?Se:e[10]?Ae:void 0}let T=N(e),U=T&&T(e),F=e[5],D=[];for(let n=0;n<F.length;n+=1)D[n]=qe(Ne(e,F,n));const G=e=>q(D[e],1,1,(()=>{D[e]=null}));let H=e[6],V=[];for(let n=0;n<H.length;n+=1)V[n]=De(Re(e,H,n));const W=e=>q(V[e],1,1,(()=>{V[e]=null}));let X=e[7],Y=[];for(let n=0;n<X.length;n+=1)Y[n]=He(Be(e,X,n));const Z=e=>q(Y[e],1,1,(()=>{Y[e]=null}));return O=new ie({props:{mineCount:e[0],flagCount:e[3]}}),O.$on("open",e[18]),O.$on("flag",e[19]),O.$on("help",e[20]),O.$on("restart",e[22]),O.$on("next",Ke),{c(){n=m("div"),t=m("div"),o=m("div"),r=p(),c=m("div"),s=p(),d=m("div"),w=p(),b=m("div"),v=p(),C=m("div"),y=p(),k=m("div"),I=p(),j&&j.c(),x=p(),U&&U.c(),z=p();for(let e=0;e<D.length;e+=1)D[e].c();M=p();for(let e=0;e<V.length;e+=1)V[e].c();_=p();for(let e=0;e<Y.length;e+=1)Y[e].c();E=p(),J(O.$$.fragment),$(o,"class","chartlet top svelte-hr2iiz"),$(o,"style",l=`background-image: url(./images/chartlettop${ae(1,6)}.png);top: ${e[12].top};left: ${e[12].left}`),$(c,"class","chartlet middle svelte-hr2iiz"),$(c,"style",i=`background-image: url(./images/chartletmiddle${ae(1,6)}.png);top: ${e[13].top};left: ${e[13].left}`),$(d,"class","chartlet bottom svelte-hr2iiz"),$(d,"style",h=`background-image: url(./images/chartletbottom${ae(1,6)}.png);top: ${e[14].top};left: ${e[14].left}`),$(b,"class","layer number22 svelte-hr2iiz"),$(C,"class","layer infos svelte-hr2iiz"),$(k,"class","layer logo svelte-hr2iiz"),$(t,"class","board svelte-hr2iiz"),$(t,"style",B=`background-image: url(./images/bg${ae(1,6)}${e[1]?"s":""}.png);`),$(n,"class","container svelte-hr2iiz"),$(n,"style",P=""+(e[2]<1?"margin: 0 auto":""))},m(e,l){a(e,n,l),u(n,t),u(t,o),u(t,r),u(t,c),u(t,s),u(t,d),u(t,w),u(t,b),u(t,v),u(t,C),u(t,y),u(t,k),u(t,I),j&&j.m(t,null),u(t,x),U&&U.m(t,null),u(t,z);for(let e=0;e<D.length;e+=1)D[e].m(t,null);u(t,M);for(let e=0;e<V.length;e+=1)V[e].m(t,null);u(t,_);for(let e=0;e<Y.length;e+=1)Y[e].m(t,null);u(t,E),K(O,t,null),R=!0},p(e,r){if((!R||4096&r[0]&&l!==(l=`background-image: url(./images/chartlettop${ae(1,6)}.png);top: ${e[12].top};left: ${e[12].left}`))&&$(o,"style",l),(!R||8192&r[0]&&i!==(i=`background-image: url(./images/chartletmiddle${ae(1,6)}.png);top: ${e[13].top};left: ${e[13].left}`))&&$(c,"style",i),(!R||16384&r[0]&&h!==(h=`background-image: url(./images/chartletbottom${ae(1,6)}.png);top: ${e[14].top};left: ${e[14].left}`))&&$(d,"style",h),e[11]?j?j.p(e,r):(j=Ue(e),j.c(),j.m(t,x)):j&&(j.d(1),j=null),T!==(T=N(e))&&(U&&U.d(1),U=T&&T(e),U&&(U.c(),U.m(t,z))),33072&r[0]){let n;for(F=e[5],n=0;n<F.length;n+=1){const o=Ne(e,F,n);D[n]?(D[n].p(o,r),L(D[n],1)):(D[n]=qe(o),D[n].c(),L(D[n],1),D[n].m(t,M))}for(A(),n=F.length;n<D.length;n+=1)G(n);S()}if(65872&r[0]){let n;for(H=e[6],n=0;n<H.length;n+=1){const o=Re(e,H,n);V[n]?(V[n].p(o,r),L(V[n],1)):(V[n]=De(o),V[n].c(),L(V[n],1),V[n].m(t,_))}for(A(),n=H.length;n<V.length;n+=1)W(n);S()}if(131472&r[0]){let n;for(X=e[7],n=0;n<X.length;n+=1){const o=Be(e,X,n);Y[n]?(Y[n].p(o,r),L(Y[n],1)):(Y[n]=He(o),Y[n].c(),L(Y[n],1),Y[n].m(t,E))}for(A(),n=X.length;n<Y.length;n+=1)Z(n);S()}const s={};1&r[0]&&(s.mineCount=e[0]),8&r[0]&&(s.flagCount=e[3]),O.$set(s),(!R||2&r[0]&&B!==(B=`background-image: url(./images/bg${ae(1,6)}${e[1]?"s":""}.png);`))&&$(t,"style",B),(!R||4&r[0]&&P!==(P=""+(e[2]<1?"margin: 0 auto":"")))&&$(n,"style",P)},i(e){if(!R){for(let e=0;e<F.length;e+=1)L(D[e]);for(let e=0;e<H.length;e+=1)L(V[e]);for(let e=0;e<X.length;e+=1)L(Y[e]);L(O.$$.fragment,e),R=!0}},o(e){D=D.filter(Boolean);for(let e=0;e<D.length;e+=1)q(D[e]);V=V.filter(Boolean);for(let e=0;e<V.length;e+=1)q(V[e]);Y=Y.filter(Boolean);for(let e=0;e<Y.length;e+=1)q(Y[e]);q(O.$$.fragment,e),R=!1},d(e){e&&f(n),j&&j.d(),U&&U.d(),g(D,e),g(V,e),g(Y,e),Q(O)}}}function Ke(e){console.log("next")}function Qe(e,t,o){let l=1,{mineCount:r}=t,{bgs:c}=t,s=0,u=null,a=[],f=[],g=[],m=!0,d=!1,p=!1,h=!1,w=!1,$={top:0,left:"-780px"},b={top:0,left:"-780px"},v={top:0,left:"-780px"};try{l=window.screen.width<1080?window.screen.width/1080:1}catch(e){}function C(){return[...a,...f,...g]}function I(){o(5,a),o(6,f),o(7,g)}function x(e){d||e.disabled||e.opened||(u&&u.id===e.id?o(4,u=null):o(4,u=e))}function z(){o(8,d=!0),o(9,p=!0)}function M(e){o(3,s+=e?1:-1)}function _(){const e=C(),n=[];for(let t=0;t<e.length;t++)for(let o=0;o<e[t].length;o++){const l=e[t][o];l.opened||n.push(l)}let t=!0;n.forEach((e=>{e.mined||e.disabled||(t=!1)}));let l=!0;return n.forEach((e=>{(e.flagged&&!e.mined||!e.flagged&&e.mined)&&(l=!1)})),(t||l)&&(o(8,d=!0),o(10,h=!0)),t||l}function E(){o(3,s=0),o(5,a=de({...$e,mineCount:0})),o(6,f=de({...be,mineCount:0})),o(7,g=de({...ve,mineCount:0})),m=!0,o(8,d=!1),o(9,p=!1),o(10,h=!1),o(11,w=!1),o(4,u=null),o(12,$={top:0,left:"-780px"}),o(13,b={top:0,left:"-780px"}),o(14,v={top:0,left:"-780px"}),function(e){for(let n=0;n<Me.length;n++){const{row:t,column:o}=fe(Me[n]);e[t][o]=ue({...e[t][o],disabled:!0})}}(C()),function(e){for(let n=0;n<_e.length;n++){const{row:t,column:o}=fe(_e[n]);e[t][o]=ue({...e[t][o],disabled:!0})}}(C()),function(e){for(let n=0;n<Ee.length;n++){const{row:t,column:o}=fe(Ee[n]);e[t][o]=ue({...e[t][o],disabled:!0})}}(C()),I()}var O;return k((()=>{console.log("app",C())})),O=()=>{console.log("onmount!!",t),E()},y().$$.on_mount.push(O),setTimeout((()=>{let e=new Image;e.src="./images/bg1.png";let n=new Image;n.src="./images/bg2.png";let t=new Image;t.src="./images/bg3.png";let o=new Image;o.src="./images/bg4.png";let l=new Image;l.src="./images/bg5.png";let r=new Image;r.src="./images/bg1s.png";let c=new Image;c.src="./images/bg2s.png";let i=new Image;i.src="./images/bg3s.png";let s=new Image;s.src="./images/bg4s.png";let u=new Image;u.src="./images/bg5s.png";let a=new Image;a.src="./images/chartletbottom1.png";let f=new Image;f.src="./images/chartletbottom2.png";let g=new Image;g.src="./images/chartletbottom3.png";let m=new Image;m.src="./images/chartletbottom4.png";let d=new Image;d.src="./images/chartletbottom5.png";let p=new Image;p.src="./images/chartlettop1.png";let h=new Image;h.src="./images/chartlettop2.png";let w=new Image;w.src="./images/chartlettop3.png";let $=new Image;$.src="./images/chartlettop4.png";let b=new Image;b.src="./images/chartlettop5.png";let v=new Image;v.src="./images/chartletmiddle1.png";let C=new Image;C.src="./images/chartletmiddle2.png";let y=new Image;y.src="./images/chartletmiddle3.png";let k=new Image;k.src="./images/chartletmiddle4.png";let I=new Image;I.src="./images/chartletmiddle5.png";let x=new Image;x.src="./images/helpped.png";let z=new Image;z.src="./images/wined.png";let M=new Image;M.src="./images/losed.png";let _=new Image;_.src="./images/helped.png";let E=new Image;E.src="./images/flagged.png";let O=new Image;O.src="./images/opened.png";let B=new Image;B.src="./images/nexted.png";let P=new Image;P.src="./images/restarted.png",setTimeout((()=>{x=null,z=null,M=null,_=null,E=null,O=null,B=null,P=null,e=null,n=null,t=null,o=null,l=null,r=null,c=null,i=null,s=null,u=null,a=null,f=null,g=null,m=null,d=null,p=null,h=null,w=null,$=null,b=null,v=null,C=null,y=null,k=null,I=null}),3e3)}),0),e.$$set=e=>{o(33,t=n(n({},t),i(e))),"mineCount"in e&&o(0,r=e.mineCount),"bgs"in e&&o(1,c=e.bgs)},t=i(t),[r,c,l,s,u,a,f,g,d,p,h,w,$,b,v,function(e){const{detail:n}=e;x(n)},function(e){const{detail:n}=e;x(n)},function(e){const{detail:n}=e;x(n)},function(e){d||u&&(m&&(m=!1,ye(u,C(),{regionTopChartletPosition:$,regionMiddleChartletPosition:b,regionBottomChartletPosition:v}),o(12,$),o(13,b),o(14,v),function(e,n){const{rows:t,columns:o,mineCount:l,startRow:r}=n,c=[];for(let r=0;r<l;r++){let l=ae(0,t),r=ae(0,o),i=se(l,r),s=e[l][r];for(;c.includes(i)||s.disabled||s.chartleted||me(s,e,n);)l=ae(0,t),r=ae(0,o),i=se(l,r),s=e[l][r];c.push(i),e[l][r].mined=!0}}(C(),{...we,mineCount:r}),function(e,n){const{rows:t,columns:o}=n;let l,r=0;for(let c=0;c<t;c++)for(let t=0;t<o;t++){const o=se(c,t);if(l=e[c][t],l.neighborMineCount=0,!l.mined){const t=ge(o,n);r=0;for(let n=0;n<t.length;n++)r+=Ce(e,t[n]);l.neighborMineCount=r}}}(C(),we),I()),Oe(u,C(),{forceUpdateBoard:I,boardConfig:we,lose:z}),_())},function(e){if(!d&&!m&&u){if(!u.flagged&&s>=r)return;!function(e,n,{forceUpdateBoard:t,boardConfig:o,flagged:l}){e.opened||e.disabled||(n[e.row][e.column].flagged=e.flagged=!e.flagged,console.log("cell",e,n),l(e.flagged),t())}(u,C(),{forceUpdateBoard:I,boardConfig:we,flagged:M}),_()}},function(e){o(11,w=!w)},function(){o(11,w=!1)},function(e){E()}]}class Ve extends X{constructor(e){super(),W(this,e,Qe,Je,c,{mineCount:0,bgs:1},null,[-1,-1])}}function We(n){let t,o,l,r,c,i,s,g,d;return o=new Ve({props:{mineCount:35,bgs:!0}}),r=new Ve({props:{mineCount:40,bgs:!0}}),i=new Ve({props:{mineCount:45}}),g=new Ve({props:{mineCount:50}}),{c(){t=m("div"),J(o.$$.fragment),l=p(),J(r.$$.fragment),c=p(),J(i.$$.fragment),s=p(),J(g.$$.fragment)},m(e,n){a(e,t,n),K(o,t,null),u(t,l),K(r,t,null),u(t,c),K(i,t,null),u(t,s),K(g,t,null),d=!0},p:e,i(e){d||(L(o.$$.fragment,e),L(r.$$.fragment,e),L(i.$$.fragment,e),L(g.$$.fragment,e),d=!0)},o(e){q(o.$$.fragment,e),q(r.$$.fragment,e),q(i.$$.fragment,e),q(g.$$.fragment,e),d=!1},d(e){e&&f(t),Q(o),Q(r),Q(i),Q(g)}}}return new class extends X{constructor(e){super(),W(this,e,null,We,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
