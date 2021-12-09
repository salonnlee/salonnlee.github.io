var app=function(){"use strict";function e(){}function n(e,n){for(const t in n)e[t]=n[t];return e}function t(e){return e()}function o(){return Object.create(null)}function l(e){e.forEach(t)}function s(e){return"function"==typeof e}function c(e,n){return e!=e?n==n:e!==n||e&&"object"==typeof e||"function"==typeof e}let i,r;function u(e){return null==e?"":e}function a(e,n){e.appendChild(n)}function p(e,n,t){e.insertBefore(n,t||null)}function g(e){e.parentNode.removeChild(e)}function d(e,n){for(let t=0;t<e.length;t+=1)e[t]&&e[t].d(n)}function m(e){return document.createElement(e)}function f(e){return document.createTextNode(e)}function h(){return f(" ")}function b(){return f("")}function w(e,n,t,o){return e.addEventListener(n,t,o),()=>e.removeEventListener(n,t,o)}function j(e,n,t){null==t?e.removeAttribute(n):e.getAttribute(n)!==t&&e.setAttribute(n,t)}function y(e,n){const t=Object.getOwnPropertyDescriptors(e.__proto__);for(const o in n)null==n[o]?e.removeAttribute(o):"style"===o?e.style.cssText=n[o]:"__value"===o?e.value=e[o]=n[o]:t[o]&&t[o].set?e[o]=n[o]:j(e,o,n[o])}function $(e,n){n=""+n,e.wholeText!==n&&(e.data=n)}function v(e,n,t){e.classList[t?"add":"remove"](n)}function C(e){r=e}function x(){if(!r)throw new Error("Function called outside component initialization");return r}function k(e){x().$$.before_update.push(e)}function I(){const e=x();return(n,t)=>{const o=e.$$.callbacks[n];if(o){const l=function(e,n,t=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(e,t,!1,n),o}(n,t);o.slice().forEach((n=>{n.call(e,l)}))}}}const z=[],M=[],_=[],T=[],E=Promise.resolve();let O=!1;function q(e){_.push(e)}let L=!1;const B=new Set;function P(){if(!L){L=!0;do{for(let e=0;e<z.length;e+=1){const n=z[e];C(n),H(n.$$)}for(C(null),z.length=0;M.length;)M.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];B.has(n)||(B.add(n),n())}_.length=0}while(z.length);for(;T.length;)T.pop()();O=!1,L=!1,B.clear()}}function H(e){if(null!==e.fragment){e.update(),l(e.before_update);const n=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,n),e.after_update.forEach(q)}}const R=new Set;let N;function A(){N={r:0,c:[],p:N}}function U(){N.r||l(N.c),N=N.p}function S(e,n){e&&e.i&&(R.delete(e),e.i(n))}function D(e,n,t,o){if(e&&e.o){if(R.has(e))return;R.add(e),N.c.push((()=>{R.delete(e),o&&(t&&e.d(1),o())})),e.o(n)}}function F(e,n){D(e,1,1,(()=>{n.delete(e.key)}))}function G(e,n,t,o,l,s,c,i,r,u,a,p){let g=e.length,d=s.length,m=g;const f={};for(;m--;)f[e[m].key]=m;const h=[],b=new Map,w=new Map;for(m=d;m--;){const e=p(l,s,m),i=t(e);let r=c.get(i);r?o&&r.p(e,n):(r=u(i,e),r.c()),b.set(i,h[m]=r),i in f&&w.set(i,Math.abs(m-f[i]))}const j=new Set,y=new Set;function $(e){S(e,1),e.m(i,a),c.set(e.key,e),a=e.first,d--}for(;g&&d;){const n=h[d-1],t=e[g-1],o=n.key,l=t.key;n===t?(a=n.first,g--,d--):b.has(l)?!c.has(o)||j.has(o)?$(n):y.has(l)?g--:w.get(o)>w.get(l)?(y.add(o),$(n)):(j.add(l),g--):(r(t,c),g--)}for(;g--;){const n=e[g];b.has(n.key)||r(n,c)}for(;d;)$(h[d-1]);return h}function J(e,n){const t={},o={},l={$$scope:1};let s=e.length;for(;s--;){const c=e[s],i=n[s];if(i){for(const e in c)e in i||(o[e]=1);for(const e in i)l[e]||(t[e]=i[e],l[e]=1);e[s]=i}else for(const e in c)l[e]=1}for(const e in o)e in t||(t[e]=void 0);return t}function K(e){return"object"==typeof e&&null!==e?e:{}}function Q(e){e&&e.c()}function V(e,n,o,c){const{fragment:i,on_mount:r,on_destroy:u,after_update:a}=e.$$;i&&i.m(n,o),c||q((()=>{const n=r.map(t).filter(s);u?u.push(...n):l(n),e.$$.on_mount=[]})),a.forEach(q)}function W(e,n){const t=e.$$;null!==t.fragment&&(l(t.on_destroy),t.fragment&&t.fragment.d(n),t.on_destroy=t.fragment=null,t.ctx=[])}function X(e,n){-1===e.$$.dirty[0]&&(z.push(e),O||(O=!0,E.then(P)),e.$$.dirty.fill(0)),e.$$.dirty[n/31|0]|=1<<n%31}function Y(n,t,s,c,i,u,a,p=[-1]){const d=r;C(n);const m=n.$$={fragment:null,ctx:null,props:u,update:e,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:o(),dirty:p,skip_bound:!1,root:t.target||d.$$.root};a&&a(m.root);let f=!1;if(m.ctx=s?s(n,t.props||{},((e,t,...o)=>{const l=o.length?o[0]:t;return m.ctx&&i(m.ctx[e],m.ctx[e]=l)&&(!m.skip_bound&&m.bound[e]&&m.bound[e](l),f&&X(n,e)),t})):[],m.update(),f=!0,l(m.before_update),m.fragment=!!c&&c(m.ctx),t.target){if(t.hydrate){const e=function(e){return Array.from(e.childNodes)}(t.target);m.fragment&&m.fragment.l(e),e.forEach(g)}else m.fragment&&m.fragment.c();t.intro&&S(n.$$.fragment),V(n,t.target,t.anchor,t.customElement),P()}C(d)}class Z{$destroy(){W(this,1),this.$destroy=e}$on(e,n){const t=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return t.push(n),()=>{const e=t.indexOf(n);-1!==e&&t.splice(e,1)}}$set(e){var n;this.$$set&&(n=e,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function ee(e){let n,t,o,l=(e[3]||0==e[4]?"":e[4])+"";return{c(){n=m("div"),t=f(l),j(n,"class",o=u(["cell","opened",e[4]&&0!=e[4]?"":"transparent",e[3]?"mined":"",e[6]?"chartleted":""].join(" "))+" svelte-1k44rg6"),j(n,"id",e[0])},m(e,o){p(e,n,o),a(n,t)},p(e,s){24&s&&l!==(l=(e[3]||0==e[4]?"":e[4])+"")&&$(t,l),88&s&&o!==(o=u(["cell","opened",e[4]&&0!=e[4]?"":"transparent",e[3]?"mined":"",e[6]?"chartleted":""].join(" "))+" svelte-1k44rg6")&&j(n,"class",o),1&s&&j(n,"id",e[0])},d(e){e&&g(n)}}}function ne(e){let n,t,o,l;return{c(){n=m("div"),j(n,"class",t=u(["cell",e[8]?"selected":"",e[2]?"flagged":""].join(" "))+" svelte-1k44rg6"),j(n,"id",e[0])},m(t,s){p(t,n,s),o||(l=w(n,"click",e[9]),o=!0)},p(e,o){260&o&&t!==(t=u(["cell",e[8]?"selected":"",e[2]?"flagged":""].join(" "))+" svelte-1k44rg6")&&j(n,"class",t),1&o&&j(n,"id",e[0])},d(e){e&&g(n),o=!1,l()}}}function te(e){let n;return{c(){n=m("div"),j(n,"class",u(["cell"].join(" "))+" svelte-1k44rg6"),j(n,"id",e[0])},m(e,t){p(e,n,t)},p(e,t){1&t&&j(n,"id",e[0])},d(e){e&&g(n)}}}function oe(n){let t;function o(e,n){return e[5]?te:e[1]||e[7]&&e[3]||e[7]&&e[6]?ee:ne}let l=o(n),s=l(n);return{c(){s.c(),t=b()},m(e,n){s.m(e,n),p(e,t,n)},p(e,[n]){l===(l=o(e))&&s?s.p(e,n):(s.d(1),s=l(e),s&&(s.c(),s.m(t.parentNode,t)))},i:e,o:e,d(e){s.d(e),e&&g(t)}}}function le(e,n,t){let{id:o}=n,{row:l}=n,{column:s}=n,{opened:c}=n,{flagged:i}=n,{mined:r}=n,{neighborMineCount:u}=n,{disabled:a}=n,{chartleted:p}=n,{gameOver:g}=n,{currentCell:d}=n;const m=I();let f=d&&d.id===o;return k((()=>{t(8,f=d&&d.id===o)})),e.$$set=e=>{"id"in e&&t(0,o=e.id),"row"in e&&t(10,l=e.row),"column"in e&&t(11,s=e.column),"opened"in e&&t(1,c=e.opened),"flagged"in e&&t(2,i=e.flagged),"mined"in e&&t(3,r=e.mined),"neighborMineCount"in e&&t(4,u=e.neighborMineCount),"disabled"in e&&t(5,a=e.disabled),"chartleted"in e&&t(6,p=e.chartleted),"gameOver"in e&&t(7,g=e.gameOver),"currentCell"in e&&t(12,d=e.currentCell)},[o,c,i,r,u,a,p,g,f,function(){m("click",{id:o,row:l,column:s,opened:c,flagged:i,mined:r,neighborMineCount:u,disabled:a,chartleted:p})},l,s,d]}class se extends Z{constructor(e){super(),Y(this,e,le,oe,c,{id:0,row:10,column:11,opened:1,flagged:2,mined:3,neighborMineCount:4,disabled:5,chartleted:6,gameOver:7,currentCell:12})}}function ce(n){let t,o,s,c,i,r,u,d,b,y,v,C,x,k,I,z,M,_,T,E,O,q,L,B,P,H,R,N,A,U,S,D,F,G=ie(n[0]-n[1])+"";return{c(){t=m("div"),o=m("div"),s=f(G),c=h(),i=m("div"),r=m("div"),u=m("audio"),u.innerHTML='<source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/gamewin.mp3" preload="auto"/><source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/gamewin.ogg" preload="auto"/>',b=h(),y=m("div"),v=m("audio"),v.innerHTML='<source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/gameover.mp3" preload="auto"/><source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/gameover.ogg" preload="auto"/>',x=h(),k=m("div"),I=m("audio"),I.innerHTML='<source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/open.mp3" preload="auto"/><source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/open.ogg" preload="auto"/>',M=h(),_=m("div"),T=m("div"),E=m("audio"),E.innerHTML='<source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/gamewin.mp3" preload="auto"/><source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/gamewin.ogg" preload="auto"/>',q=h(),L=m("div"),B=m("audio"),B.innerHTML='<source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/flag.mp3" preload="auto"/><source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/flag.ogg" preload="auto"/>',H=h(),R=m("div"),R.innerHTML='<audio preload="auto"><source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/help.mp3" preload="auto"/><source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/help.ogg" preload="auto"/></audio>',N=h(),A=m("div"),A.innerHTML='<audio preload="auto"><source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/click.mp3" preload="auto"/><source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/click.ogg" preload="auto"/></audio>',U=h(),S=m("div"),S.innerHTML='<audio preload="auto"><source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/click.mp3" preload="auto"/><source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/click.ogg" preload="auto"/></audio>',j(o,"class","minecount svelte-4ljiyq"),j(u,"preload","auto"),j(r,"class","audio-wrap svelte-4ljiyq"),j(r,"style",d=`z-index: ${!n[3]&&n[2]?69:-100};`),j(v,"preload","auto"),j(y,"class","audio-wrap svelte-4ljiyq"),j(y,"style",C=`z-index: ${n[3]||!n[4]||n[2]?-100:69};`),j(I,"preload","auto"),j(k,"class","audio-wrap svelte-4ljiyq"),j(k,"style",z=`z-index: ${n[3]||!n[4]&&!n[2]?69:-100};`),j(i,"class","open svelte-4ljiyq"),j(E,"preload","auto"),j(T,"class","audio-wrap svelte-4ljiyq"),j(T,"style",O=`z-index: ${!n[3]&&n[2]?69:-100};`),j(B,"preload","auto"),j(L,"class","audio-wrap svelte-4ljiyq"),j(L,"style",P=`z-index: ${n[3]||!n[2]?69:-100};`),j(_,"class","flag svelte-4ljiyq"),j(R,"class","help svelte-4ljiyq"),j(A,"class","restart svelte-4ljiyq"),j(S,"class","next svelte-4ljiyq"),j(t,"class","button-group svelte-4ljiyq")},m(e,l){p(e,t,l),a(t,o),a(o,s),a(t,c),a(t,i),a(i,r),a(r,u),a(i,b),a(i,y),a(y,v),a(i,x),a(i,k),a(k,I),a(t,M),a(t,_),a(_,T),a(T,E),a(_,q),a(_,L),a(L,B),a(t,H),a(t,R),a(t,N),a(t,A),a(t,U),a(t,S),D||(F=[w(i,"click",n[5]),w(_,"click",n[6]),w(R,"click",n[7]),w(A,"click",n[8]),w(S,"click",n[9])],D=!0)},p(e,[n]){3&n&&G!==(G=ie(e[0]-e[1])+"")&&$(s,G),12&n&&d!==(d=`z-index: ${!e[3]&&e[2]?69:-100};`)&&j(r,"style",d),28&n&&C!==(C=`z-index: ${e[3]||!e[4]||e[2]?-100:69};`)&&j(y,"style",C),28&n&&z!==(z=`z-index: ${e[3]||!e[4]&&!e[2]?69:-100};`)&&j(k,"style",z),12&n&&O!==(O=`z-index: ${!e[3]&&e[2]?69:-100};`)&&j(T,"style",O),12&n&&P!==(P=`z-index: ${e[3]||!e[2]?69:-100};`)&&j(L,"style",P)},i:e,o:e,d(e){e&&g(t),D=!1,l(F)}}}function ie(e){return("000"+e).slice(-3)}function re(e,n,t){let o,{mineCount:l}=n,{flagCount:s}=n,{currentCell:c}=n,{prewined:i}=n,{helped:r}=n;k((()=>{t(4,o=c&&c.mined)}));const u=I();return e.$$set=e=>{"mineCount"in e&&t(0,l=e.mineCount),"flagCount"in e&&t(1,s=e.flagCount),"currentCell"in e&&t(10,c=e.currentCell),"prewined"in e&&t(2,i=e.prewined),"helped"in e&&t(3,r=e.helped)},[l,s,i,r,o,function(){u("open")},function(){u("flag")},function(){u("help")},function(){u("restart")},function(){u("next")},c]}class ue extends Z{constructor(e){super(),Y(this,e,re,ce,c,{mineCount:0,flagCount:1,currentCell:10,prewined:2,helped:3})}}function ae(e,n){return`${e}/${n}`}function pe({row:e,column:n,...t}){return{id:ae(e,n),row:e,column:n,...t}}function ge(e,n){return Math.floor(Math.random()*(n-e))+e}function de(e){const[n,t]=e.split("/");return{row:n,column:t}}function me(e,n){let{row:t,column:o}=de(e);t=parseInt(t),o=parseInt(o);const l=[];l.push(ae(t-1,o-1)),l.push(ae(t-1,o)),l.push(ae(t-1,o+1)),l.push(ae(t,o-1)),l.push(ae(t,o+1)),l.push(ae(t+1,o-1)),l.push(ae(t+1,o)),l.push(ae(t+1,o+1));const{rows:s,columns:c}=n;for(let e=0;e<l.length;e++){let{row:n,column:t}=de(l[e]);(n<0||t<0||n>=s||t>=c)&&(l.splice(e,1),e--)}return l}function fe(e,n,t){const o=me(e.id,t);for(let e=0;e<o.length;e++){const{row:t,column:l}=de(o[e]),s=n[t][l];if(void 0!==s&&s.chartleted)return!0}return!1}function he(e){const{rows:n,columns:t,startRow:o,mineCount:l}=e;let s=[];for(let e=0;e<n;e++)for(let n=0;n<t;n++)s[e]=s[e]||[],s[e][n]=pe({row:o+e,column:n,opened:!1,flagged:!1,mined:!1,neighborMineCount:0,disabled:!1,chartleted:!1});return s}const be=10,we=65,je={startRow:0,rows:28,columns:16,mineCount:32},ye={startRow:0,rows:be,columns:16,mineCount:12},$e={startRow:be,rows:9,columns:16,mineCount:10},ve={startRow:19,rows:9,columns:16,mineCount:10};function Ce(e,n){const{row:t,column:o}=de(n),l=e[t][o];let s=0;return void 0!==l&&(s=l.mined?1:0),s}function xe(e,n,t){const{row:o,column:l}=de(e.id);o<be?(!function(e,n,{regionTopChartletPosition:t}){let{row:o,column:l}=de(e.id);o=parseInt(o),l=parseInt(l);const s={row:o-1,column:l-2},c={row:o-1,column:l+3},i={row:o+1,column:l-2},r={row:0,column:0};s.row<0&&(r.row=-s.row);i.row>9&&(r.row=-(i.row-9));s.column<0&&(r.column=-s.column);c.column>15&&(r.column=-(c.column-15));s.row+=r.row,s.column+=r.column,c.row+=r.row,c.column+=r.column,c.column>13&&c.row<2&&(l<=13&&o>=2?(s.row+=2-c.row,s.column+=13-c.column):l<=13&&o<2?s.column+=13-c.column:l>13&&o>=2&&(s.row+=2-c.row));ke(n,s,t,{chartletRows:3,chartletColumns:6})}(e,n,t),ze(n,t),Me(n,t)):o<19?(!function(e,n,{regionMiddleChartletPosition:t}){let{row:o,column:l}=de(e.id);o=parseInt(o),l=parseInt(l);const s={row:o-1,column:l-2},c={row:o-1,column:l+2},i={row:o+2,column:l-2},r={row:0,column:0};s.row<10&&(r.row=-(s.row-10));i.row>18&&(r.row=-(i.row-18));s.column<0&&(r.column=-s.column);c.column>15&&(r.column=-(c.column-15));s.row+=r.row,s.column+=r.column,ke(n,s,t,{chartletRows:4,chartletColumns:5})}(e,n,t),Ie(n,t),Me(n,t)):o<28&&(!function(e,n,{regionBottomChartletPosition:t}){let{row:o,column:l}=de(e.id);o=parseInt(o),l=parseInt(l);const s={row:o-1,column:l-3},c={row:o-1,column:l+4},i={row:o+1,column:l-3},r={row:o+1,column:l+4},u={row:0,column:0};s.row<19&&(u.row=-(s.row-19));i.row>27&&(u.row=-(i.row-27));s.column<0&&(u.column=-s.column);c.column>15&&(u.column=-(c.column-15));s.row+=u.row,s.column+=u.column,r.row+=u.row,r.column+=u.column,r.column>11&&r.row>24&&(l<=11&&o<=24?(s.row+=24-r.row,s.column+=11-r.column):l<=11&&o>24?s.column+=11-r.column:l>11&&o<=24&&(s.row+=24-r.row));i.column<3&&i.row>21&&(l>=3&&o<=21?(s.row+=21-i.row,s.column+=3-i.column):l>=3&&o>21?s.column+=3-i.column:l<3&&o<=21&&(s.row+=21-i.row));ke(n,s,t,{chartletRows:3,chartletColumns:8})}(e,n,t),Ie(n,t),ze(n,t))}function ke(e,n,t,{chartletRows:o,chartletColumns:l}){const{row:s,column:c}=n;t.top=s*we+"px",t.left=c*we+"px";for(let n=s;n<s+o;n++)for(let t=c;t<c+l;t++)e[n][t]=pe({...e[n][t],chartleted:!0})}function Ie(e,{regionTopChartletPosition:n}){const t=ge(0,8),o=ge(0,9);n.top=t*we+"px",n.left=o*we+"px";for(let n=t;n<t+3;n++)for(let t=o;t<o+6;t++)e[n][t]=pe({...e[n][t],chartleted:!0})}function ze(e,{regionMiddleChartletPosition:n}){const t=ge(10,16),o=ge(0,12);n.top=t*we+"px",n.left=o*we+"px";for(let n=t;n<t+4;n++)for(let t=o;t<o+5;t++)e[n][t]=pe({...e[n][t],chartleted:!0})}function Me(e,{regionBottomChartletPosition:n}){const t=ge(19,26),o=ge(3,5);n.top=t*we+"px",n.left=o*we+"px";for(let n=t;n<t+3;n++)for(let t=o;t<o+8;t++)e[n][t]=pe({...e[n][t],chartleted:!0})}const _e=["0/14","0/15","1/14","1/15"];const Te=["22/0","22/1","22/2","23/0","23/1","23/2","24/0","24/1","24/2","25/0","25/1","25/2","26/0","26/1","26/2","27/0","27/1","27/2"];const Ee=["25/12","25/13","25/14","25/15","26/12","26/13","26/14","26/15","27/12","27/13","27/14","27/15"];function Oe(e,n,{forceUpdateBoard:t,boardConfig:o,lose:l}){if(!(e.opened||e.disabled||e.flagged))if(e.mined)l();else{if(n[e.row][e.column].opened=e.opened=!0,!e.neighborMineCount){const s=me(e.id,o);for(let e=0;e<s.length;e++){const{row:c,column:i}=de(s[e]),r=n[c][i];void 0===r||r.opened||r.disabled||Oe(r,n,{forceUpdateBoard:t,boardConfig:o,lose:l})}}t()}}function qe(e,n,t){const o=e.slice();return o[45]=n[t],o}function Le(e,n,t){const o=e.slice();return o[48]=n[t],o}function Be(e,n,t){const o=e.slice();return o[45]=n[t],o}function Pe(e,n,t){const o=e.slice();return o[48]=n[t],o}function He(e,n,t){const o=e.slice();return o[45]=n[t],o}function Re(e,n,t){const o=e.slice();return o[48]=n[t],o}function Ne(n){let t,o,l;return{c(){t=m("div"),j(t,"class","helped svelte-lazofg")},m(e,s){p(e,t,s),o||(l=w(t,"click",n[25]),o=!0)},p:e,d(e){e&&g(t),o=!1,l()}}}function Ae(e){let n;return{c(){n=m("div"),j(n,"class","wined svelte-lazofg")},m(e,t){p(e,n,t)},d(e){e&&g(n)}}}function Ue(e){let n;return{c(){n=m("div"),j(n,"class","losed svelte-lazofg")},m(e,t){p(e,n,t)},d(e){e&&g(n)}}}function Se(e,t){let o,l,s;const c=[{gameOver:t[8]},{currentCell:t[4]},t[48]];let i={};for(let e=0;e<c.length;e+=1)i=n(i,c[e]);return l=new se({props:i}),l.$on("click",t[19]),{key:e,first:null,c(){o=b(),Q(l.$$.fragment),this.first=o},m(e,n){p(e,o,n),V(l,e,n),s=!0},p(e,n){t=e;const o=304&n[0]?J(c,[256&n[0]&&{gameOver:t[8]},16&n[0]&&{currentCell:t[4]},32&n[0]&&K(t[48])]):{};l.$set(o)},i(e){s||(S(l.$$.fragment,e),s=!0)},o(e){D(l.$$.fragment,e),s=!1},d(e){e&&g(o),W(l,e)}}}function De(e){let n,t,o,l=[],s=new Map,c=e[45];const i=e=>e[48].id;for(let n=0;n<c.length;n+=1){let t=Re(e,c,n),o=i(t);s.set(o,l[n]=Se(o,t))}return{c(){for(let e=0;e<l.length;e+=1)l[e].c();n=h(),t=m("br")},m(e,s){for(let n=0;n<l.length;n+=1)l[n].m(e,s);p(e,n,s),p(e,t,s),o=!0},p(e,t){524592&t[0]&&(c=e[45],A(),l=G(l,t,i,1,e,c,s,n.parentNode,F,Se,n,Re),U())},i(e){if(!o){for(let e=0;e<c.length;e+=1)S(l[e]);o=!0}},o(e){for(let e=0;e<l.length;e+=1)D(l[e]);o=!1},d(e){for(let n=0;n<l.length;n+=1)l[n].d(e);e&&g(n),e&&g(t)}}}function Fe(e,t){let o,l,s;const c=[{gameOver:t[8]},{currentCell:t[4]},t[48]];let i={};for(let e=0;e<c.length;e+=1)i=n(i,c[e]);return l=new se({props:i}),l.$on("click",t[20]),{key:e,first:null,c(){o=b(),Q(l.$$.fragment),this.first=o},m(e,n){p(e,o,n),V(l,e,n),s=!0},p(e,n){t=e;const o=336&n[0]?J(c,[256&n[0]&&{gameOver:t[8]},16&n[0]&&{currentCell:t[4]},64&n[0]&&K(t[48])]):{};l.$set(o)},i(e){s||(S(l.$$.fragment,e),s=!0)},o(e){D(l.$$.fragment,e),s=!1},d(e){e&&g(o),W(l,e)}}}function Ge(e){let n,t,o,l=[],s=new Map,c=e[45];const i=e=>e[48].id;for(let n=0;n<c.length;n+=1){let t=Pe(e,c,n),o=i(t);s.set(o,l[n]=Fe(o,t))}return{c(){for(let e=0;e<l.length;e+=1)l[e].c();n=h(),t=m("br")},m(e,s){for(let n=0;n<l.length;n+=1)l[n].m(e,s);p(e,n,s),p(e,t,s),o=!0},p(e,t){1048912&t[0]&&(c=e[45],A(),l=G(l,t,i,1,e,c,s,n.parentNode,F,Fe,n,Pe),U())},i(e){if(!o){for(let e=0;e<c.length;e+=1)S(l[e]);o=!0}},o(e){for(let e=0;e<l.length;e+=1)D(l[e]);o=!1},d(e){for(let n=0;n<l.length;n+=1)l[n].d(e);e&&g(n),e&&g(t)}}}function Je(e,t){let o,l,s;const c=[{gameOver:t[8]},{currentCell:t[4]},t[48]];let i={};for(let e=0;e<c.length;e+=1)i=n(i,c[e]);return l=new se({props:i}),l.$on("click",t[21]),{key:e,first:null,c(){o=b(),Q(l.$$.fragment),this.first=o},m(e,n){p(e,o,n),V(l,e,n),s=!0},p(e,n){t=e;const o=400&n[0]?J(c,[256&n[0]&&{gameOver:t[8]},16&n[0]&&{currentCell:t[4]},128&n[0]&&K(t[48])]):{};l.$set(o)},i(e){s||(S(l.$$.fragment,e),s=!0)},o(e){D(l.$$.fragment,e),s=!1},d(e){e&&g(o),W(l,e)}}}function Ke(e){let n,t,o,l=[],s=new Map,c=e[45];const i=e=>e[48].id;for(let n=0;n<c.length;n+=1){let t=Le(e,c,n),o=i(t);s.set(o,l[n]=Je(o,t))}return{c(){for(let e=0;e<l.length;e+=1)l[e].c();n=h(),t=m("br")},m(e,s){for(let n=0;n<l.length;n+=1)l[n].m(e,s);p(e,n,s),p(e,t,s),o=!0},p(e,t){2097552&t[0]&&(c=e[45],A(),l=G(l,t,i,1,e,c,s,n.parentNode,F,Je,n,Le),U())},i(e){if(!o){for(let e=0;e<c.length;e+=1)S(l[e]);o=!0}},o(e){for(let e=0;e<l.length;e+=1)D(l[e]);o=!1},d(e){for(let n=0;n<l.length;n+=1)l[n].d(e);e&&g(n),e&&g(t)}}}function Qe(e){let t,o,s,c,r,u,f,b,$,C,x,k,I,z,M,_,T,E,O,q,L,B,P,H,R,N,F,G,K,X,Y,Z,ee,ne,te,oe,le,se,ce,ie,re,ae=[{class:"showup"},{alt:""},e[13]&&{src:"https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/showup.gif"}],pe={};for(let e=0;e<ae.length;e+=1)pe=n(pe,ae[e]);let de=e[14]&&Ne(e);function me(e,n){return e[9]?Ue:e[10]?Ae:void 0}let fe=me(e),he=fe&&fe(e),be=e[5],we=[];for(let n=0;n<be.length;n+=1)we[n]=De(He(e,be,n));const je=e=>D(we[e],1,1,(()=>{we[e]=null}));let ye=e[6],$e=[];for(let n=0;n<ye.length;n+=1)$e[n]=Ge(Be(e,ye,n));const ve=e=>D($e[e],1,1,(()=>{$e[e]=null}));let Ce=e[7],xe=[];for(let n=0;n<Ce.length;n+=1)xe[n]=Ke(qe(e,Ce,n));const ke=e=>D(xe[e],1,1,(()=>{xe[e]=null}));return oe=new ue({props:{mineCount:e[0],flagCount:e[3],currentCell:e[4],prewined:e[11],helped:e[14]}}),oe.$on("open",e[22]),oe.$on("flag",e[23]),oe.$on("help",e[24]),oe.$on("restart",e[28]),oe.$on("next",Ve),{c(){t=m("div"),o=m("div"),s=m("div"),r=h(),u=m("div"),b=h(),$=m("div"),x=h(),k=m("div"),I=h(),z=m("div"),M=h(),_=m("div"),T=h(),E=m("div"),O=m("img"),L=h(),B=m("audio"),B.innerHTML='<source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/bgm.mp3" loop="loop" preload="auto"/><source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/bgm.ogg" loop="loop" preload="auto"/>',H=h(),R=m("div"),N=m("img"),F=h(),G=m("audio"),G.innerHTML='<source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/click.mp3" preload="auto"/><source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/click.ogg" preload="auto"/>',X=h(),de&&de.c(),Y=h(),he&&he.c(),Z=h();for(let e=0;e<we.length;e+=1)we[e].c();ee=h();for(let e=0;e<$e.length;e+=1)$e[e].c();ne=h();for(let e=0;e<xe.length;e+=1)xe[e].c();var n,l;te=h(),Q(oe.$$.fragment),j(s,"class","chartlet top svelte-lazofg"),j(s,"style",c=`background-image: url(https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartlettop${ge(1,6)}.png);top: ${e[15].top};left: ${e[15].left}`),j(u,"class","chartlet middle svelte-lazofg"),j(u,"style",f=`background-image: url(https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartletmiddle${ge(1,6)}.png);top: ${e[16].top};left: ${e[16].left}`),j($,"class","chartlet bottom svelte-lazofg"),j($,"style",C=`background-image: url(https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartletbottom${ge(1,6)}.png);top: ${e[17].top};left: ${e[17].left}`),j(k,"class","layer number22 svelte-lazofg"),j(z,"class","layer infos svelte-lazofg"),j(_,"class","layer logo svelte-lazofg"),j(O,"class","start svelte-lazofg"),j(O,"alt",""),n=O.src,l=q="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/start.png",i||(i=document.createElement("a")),i.href=l,n!==i.href&&j(O,"src","https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/start.png"),j(B,"preload","auto"),B.loop="loop",j(E,"class","start svelte-lazofg"),j(E,"style",P=`opacity: ${e[13]?0:1};z-index: ${e[13]?-100:499}`),y(N,pe),v(N,"svelte-lazofg",!0),j(G,"preload","auto"),j(R,"class","showup svelte-lazofg"),j(R,"style",K=`opacity: ${e[12]?0:1};z-index: ${e[12]?-100:399}`),j(o,"class","board svelte-lazofg"),j(o,"style",le=`background-image: url(https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/bg${ge(1,6)}${e[1]?"s":""}.png);`),j(t,"class","container svelte-lazofg"),j(t,"style",se=""+(e[2]<1?"margin: 0 auto":""))},m(n,l){p(n,t,l),a(t,o),a(o,s),a(o,r),a(o,u),a(o,b),a(o,$),a(o,x),a(o,k),a(o,I),a(o,z),a(o,M),a(o,_),a(o,T),a(o,E),a(E,O),a(E,L),a(E,B),a(o,H),a(o,R),a(R,N),a(R,F),a(R,G),e[29](G),a(o,X),de&&de.m(o,null),a(o,Y),he&&he.m(o,null),a(o,Z);for(let e=0;e<we.length;e+=1)we[e].m(o,null);a(o,ee);for(let e=0;e<$e.length;e+=1)$e[e].m(o,null);a(o,ne);for(let e=0;e<xe.length;e+=1)xe[e].m(o,null);a(o,te),V(oe,o,null),ce=!0,ie||(re=[w(E,"click",e[27]),w(R,"click",e[26])],ie=!0)},p(e,n){if((!ce||32768&n[0]&&c!==(c=`background-image: url(https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartlettop${ge(1,6)}.png);top: ${e[15].top};left: ${e[15].left}`))&&j(s,"style",c),(!ce||65536&n[0]&&f!==(f=`background-image: url(https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartletmiddle${ge(1,6)}.png);top: ${e[16].top};left: ${e[16].left}`))&&j(u,"style",f),(!ce||131072&n[0]&&C!==(C=`background-image: url(https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartletbottom${ge(1,6)}.png);top: ${e[17].top};left: ${e[17].left}`))&&j($,"style",C),(!ce||8192&n[0]&&P!==(P=`opacity: ${e[13]?0:1};z-index: ${e[13]?-100:499}`))&&j(E,"style",P),y(N,pe=J(ae,[{class:"showup"},{alt:""},8192&n[0]&&e[13]&&{src:"https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/showup.gif"}])),v(N,"svelte-lazofg",!0),(!ce||4096&n[0]&&K!==(K=`opacity: ${e[12]?0:1};z-index: ${e[12]?-100:399}`))&&j(R,"style",K),e[14]?de?de.p(e,n):(de=Ne(e),de.c(),de.m(o,Y)):de&&(de.d(1),de=null),fe!==(fe=me(e))&&(he&&he.d(1),he=fe&&fe(e),he&&(he.c(),he.m(o,Z))),524592&n[0]){let t;for(be=e[5],t=0;t<be.length;t+=1){const l=He(e,be,t);we[t]?(we[t].p(l,n),S(we[t],1)):(we[t]=De(l),we[t].c(),S(we[t],1),we[t].m(o,ee))}for(A(),t=be.length;t<we.length;t+=1)je(t);U()}if(1048912&n[0]){let t;for(ye=e[6],t=0;t<ye.length;t+=1){const l=Be(e,ye,t);$e[t]?($e[t].p(l,n),S($e[t],1)):($e[t]=Ge(l),$e[t].c(),S($e[t],1),$e[t].m(o,ne))}for(A(),t=ye.length;t<$e.length;t+=1)ve(t);U()}if(2097552&n[0]){let t;for(Ce=e[7],t=0;t<Ce.length;t+=1){const l=qe(e,Ce,t);xe[t]?(xe[t].p(l,n),S(xe[t],1)):(xe[t]=Ke(l),xe[t].c(),S(xe[t],1),xe[t].m(o,te))}for(A(),t=Ce.length;t<xe.length;t+=1)ke(t);U()}const l={};1&n[0]&&(l.mineCount=e[0]),8&n[0]&&(l.flagCount=e[3]),16&n[0]&&(l.currentCell=e[4]),2048&n[0]&&(l.prewined=e[11]),16384&n[0]&&(l.helped=e[14]),oe.$set(l),(!ce||2&n[0]&&le!==(le=`background-image: url(https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/bg${ge(1,6)}${e[1]?"s":""}.png);`))&&j(o,"style",le),(!ce||4&n[0]&&se!==(se=""+(e[2]<1?"margin: 0 auto":"")))&&j(t,"style",se)},i(e){if(!ce){for(let e=0;e<be.length;e+=1)S(we[e]);for(let e=0;e<ye.length;e+=1)S($e[e]);for(let e=0;e<Ce.length;e+=1)S(xe[e]);S(oe.$$.fragment,e),ce=!0}},o(e){we=we.filter(Boolean);for(let e=0;e<we.length;e+=1)D(we[e]);$e=$e.filter(Boolean);for(let e=0;e<$e.length;e+=1)D($e[e]);xe=xe.filter(Boolean);for(let e=0;e<xe.length;e+=1)D(xe[e]);D(oe.$$.fragment,e),ce=!1},d(n){n&&g(t),e[29](null),de&&de.d(),he&&he.d(),d(we,n),d($e,n),d(xe,n),W(oe),ie=!1,l(re)}}}function Ve(e){console.log("next")}function We(e,n,t){let o=1,{mineCount:l}=n,{bgs:s}=n,c=0,i=null,r=[],u=[],a=[],p=!0,g=!1,d=!1,m=!1,f=!1,h=!1,b=!1,w=!1,j={top:0,left:"-780px"},y={top:0,left:"-780px"},$={top:0,left:"-780px"},v=null;try{o=window.screen.width<1080?window.screen.width/1080:1}catch(e){}function C(){return[...r,...u,...a]}function I(){t(5,r),t(6,u),t(7,a)}function z(){try{v.play()}catch(e){}}function _(e){g||e.disabled||e.opened||(i&&i.id===e.id?t(4,i=null):(t(4,i=e),p||function(){const e=C(),n=[];for(let t=0;t<e.length;t++)for(let o=0;o<e[t].length;o++){const l=e[t][o];l.opened||n.push(l)}if(i){let e=n.findIndex((e=>e.id===i.id));e>-1&&n.splice(e,1)}let o=!0;n.forEach((e=>{e.mined||e.disabled||(o=!1)}));let l=!0;n.forEach((e=>{(e.flagged&&!e.mined||!e.flagged&&e.mined)&&(l=!1)})),console.log("pppp",l,o),(o||l)&&t(11,f=!0)}()))}function T(){t(8,g=!0),setTimeout((()=>{t(9,d=!0)}),3e3)}function E(e){t(3,c+=e?1:-1)}function O(){const e=C(),n=[];for(let t=0;t<e.length;t++)for(let o=0;o<e[t].length;o++){const l=e[t][o];l.opened||n.push(l)}let o=!0;n.forEach((e=>{e.mined||e.disabled||(o=!1)}));let l=!0;return n.forEach((e=>{(e.flagged&&!e.mined||!e.flagged&&e.mined)&&(l=!1)})),(o||l)&&(t(8,g=!0),t(10,m=!0)),o||l}function q(){t(3,c=0),t(5,r=he({...ye,mineCount:0})),t(6,u=he({...$e,mineCount:0})),t(7,a=he({...ve,mineCount:0})),p=!0,t(8,g=!1),t(9,d=!1),t(10,m=!1),t(11,f=!1),t(14,w=!1),t(4,i=null),t(15,j={top:0,left:"-780px"}),t(16,y={top:0,left:"-780px"}),t(17,$={top:0,left:"-780px"}),function(e){for(let n=0;n<_e.length;n++){const{row:t,column:o}=de(_e[n]);e[t][o]=pe({...e[t][o],disabled:!0})}}(C()),function(e){for(let n=0;n<Te.length;n++){const{row:t,column:o}=de(Te[n]);e[t][o]=pe({...e[t][o],disabled:!0})}}(C()),function(e){for(let n=0;n<Ee.length;n++){const{row:t,column:o}=de(Ee[n]);e[t][o]=pe({...e[t][o],disabled:!0})}}(C()),I()}var L;return k((()=>{console.log("app",C())})),L=()=>{try{audiojs.events.ready((function(){audiojs.createAll()}))}catch(e){}q()},x().$$.on_mount.push(L),setTimeout((()=>{let e=new Image;e.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/showup.gif";let n=new Image;n.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/bg1s.png";let t=new Image;t.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/bg2s.png";let o=new Image;o.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/bg3s.png";let l=new Image;l.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/bg4s.png";let s=new Image;s.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/bg5s.png";let c=new Image;c.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartletbottom1.png";let i=new Image;i.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartletbottom2.png";let r=new Image;r.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartletbottom3.png";let u=new Image;u.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartletbottom4.png";let a=new Image;a.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartletbottom5.png";let p=new Image;p.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartlettop1.png";let g=new Image;g.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartlettop2.png";let d=new Image;d.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartlettop3.png";let m=new Image;m.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartlettop4.png";let f=new Image;f.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartlettop5.png";let h=new Image;h.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartletmiddle1.png";let b=new Image;b.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartletmiddle2.png";let w=new Image;w.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartletmiddle3.png";let j=new Image;j.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartletmiddle4.png";let y=new Image;y.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartletmiddle5.png";let $=new Image;$.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/helpped.png";let v=new Image;v.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/wined.png";let C=new Image;C.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/losed.png";let x=new Image;x.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/helped.png";let k=new Image;k.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/flagged.png";let I=new Image;I.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/opened.png";let z=new Image;z.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/nexted.png";let M=new Image;M.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/restarted.png",setTimeout((()=>{e=null,$=null,v=null,C=null,x=null,k=null,I=null,z=null,M=null,n=null,t=null,o=null,l=null,s=null,c=null,i=null,r=null,u=null,a=null,p=null,g=null,d=null,m=null,f=null,h=null,b=null,w=null,j=null,y=null}),3e3)}),0),e.$$set=e=>{"mineCount"in e&&t(0,l=e.mineCount),"bgs"in e&&t(1,s=e.bgs)},[l,s,o,c,i,r,u,a,g,d,m,f,h,b,w,j,y,$,v,function(e){const{detail:n}=e;z(),_(n)},function(e){const{detail:n}=e;z(),_(n)},function(e){const{detail:n}=e;z(),_(n)},function(e){!g&&h&&b&&!w&&i&&(p&&(p=!1,xe(i,C(),{regionTopChartletPosition:j,regionMiddleChartletPosition:y,regionBottomChartletPosition:$}),t(15,j),t(16,y),t(17,$),function(e,n){const{rows:t,columns:o,mineCount:l,startRow:s}=n,c=[];for(let s=0;s<l;s++){let l=ge(0,t),s=ge(0,o),i=ae(l,s),r=e[l][s];for(;c.includes(i)||r.disabled||r.chartleted||fe(r,e,n);)l=ge(0,t),s=ge(0,o),i=ae(l,s),r=e[l][s];c.push(i),e[l][s].mined=!0}}(C(),{...je,mineCount:l}),function(e,n){const{rows:t,columns:o}=n;let l,s=0;for(let c=0;c<t;c++)for(let t=0;t<o;t++){const o=ae(c,t);if(l=e[c][t],l.neighborMineCount=0,!l.mined){const t=me(o,n);s=0;for(let n=0;n<t.length;n++)s+=Ce(e,t[n]);l.neighborMineCount=s}}}(C(),je),I()),Oe(i,C(),{forceUpdateBoard:I,boardConfig:je,lose:T}),O())},function(e){if(!g&&!p&&h&&b&&!w&&i){if(!i.flagged&&c>=l)return;!function(e,n,{forceUpdateBoard:t,boardConfig:o,flagged:l}){e.opened||e.disabled||(n[e.row][e.column].flagged=e.flagged=!e.flagged,console.log("cell",e,n),l(e.flagged),t())}(i,C(),{forceUpdateBoard:I,boardConfig:je,flagged:E}),O()}},function(e){h&&b&&t(14,w=!w)},function(){h&&b&&t(14,w=!1)},function(){t(12,h=!0)},function(){t(13,b=!0)},function(e){h&&b&&!w&&q()},function(e){M[e?"unshift":"push"]((()=>{v=e,t(18,v)}))}]}class Xe extends Z{constructor(e){super(),Y(this,e,We,Qe,c,{mineCount:0,bgs:1},null,[-1,-1])}}function Ye(n){let t,o,l;return o=new Xe({props:{mineCount:35,bgs:!0}}),{c(){t=m("div"),Q(o.$$.fragment)},m(e,n){p(e,t,n),V(o,t,null),l=!0},p:e,i(e){l||(S(o.$$.fragment,e),l=!0)},o(e){D(o.$$.fragment,e),l=!1},d(e){e&&g(t),W(o)}}}return new class extends Z{constructor(e){super(),Y(this,e,null,Ye,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
