var app=function(){"use strict";function e(){}function n(e,n){for(const t in n)e[t]=n[t];return e}function t(e){return e()}function o(){return Object.create(null)}function l(e){e.forEach(t)}function s(e){return"function"==typeof e}function c(e,n){return e!=e?n==n:e!==n||e&&"object"==typeof e||"function"==typeof e}let i,r;function u(e,n){return i||(i=document.createElement("a")),i.href=n,e===i.href}function a(e){return null==e?"":e}function p(e,n){e.appendChild(n)}function g(e,n,t){e.insertBefore(n,t||null)}function d(e){e.parentNode.removeChild(e)}function m(e,n){for(let t=0;t<e.length;t+=1)e[t]&&e[t].d(n)}function f(e){return document.createElement(e)}function h(e){return document.createTextNode(e)}function b(){return h(" ")}function w(){return h("")}function j(e,n,t,o){return e.addEventListener(n,t,o),()=>e.removeEventListener(n,t,o)}function $(e,n,t){null==t?e.removeAttribute(n):e.getAttribute(n)!==t&&e.setAttribute(n,t)}function y(e,n){n=""+n,e.wholeText!==n&&(e.data=n)}function v(e){r=e}function C(){if(!r)throw new Error("Function called outside component initialization");return r}function x(e){C().$$.before_update.push(e)}function k(){const e=C();return(n,t)=>{const o=e.$$.callbacks[n];if(o){const l=function(e,n,t=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(e,t,!1,n),o}(n,t);o.slice().forEach((n=>{n.call(e,l)}))}}}const I=[],M=[],z=[],_=[],E=Promise.resolve();let T=!1;function q(e){z.push(e)}let O=!1;const B=new Set;function L(){if(!O){O=!0;do{for(let e=0;e<I.length;e+=1){const n=I[e];v(n),H(n.$$)}for(v(null),I.length=0;M.length;)M.pop()();for(let e=0;e<z.length;e+=1){const n=z[e];B.has(n)||(B.add(n),n())}z.length=0}while(I.length);for(;_.length;)_.pop()();T=!1,O=!1,B.clear()}}function H(e){if(null!==e.fragment){e.update(),l(e.before_update);const n=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,n),e.after_update.forEach(q)}}const P=new Set;let R;function N(){R={r:0,c:[],p:R}}function A(){R.r||l(R.c),R=R.p}function U(e,n){e&&e.i&&(P.delete(e),e.i(n))}function S(e,n,t,o){if(e&&e.o){if(P.has(e))return;P.add(e),R.c.push((()=>{P.delete(e),o&&(t&&e.d(1),o())})),e.o(n)}}function F(e,n){S(e,1,1,(()=>{n.delete(e.key)}))}function D(e,n,t,o,l,s,c,i,r,u,a,p){let g=e.length,d=s.length,m=g;const f={};for(;m--;)f[e[m].key]=m;const h=[],b=new Map,w=new Map;for(m=d;m--;){const e=p(l,s,m),i=t(e);let r=c.get(i);r?o&&r.p(e,n):(r=u(i,e),r.c()),b.set(i,h[m]=r),i in f&&w.set(i,Math.abs(m-f[i]))}const j=new Set,$=new Set;function y(e){U(e,1),e.m(i,a),c.set(e.key,e),a=e.first,d--}for(;g&&d;){const n=h[d-1],t=e[g-1],o=n.key,l=t.key;n===t?(a=n.first,g--,d--):b.has(l)?!c.has(o)||j.has(o)?y(n):$.has(l)?g--:w.get(o)>w.get(l)?($.add(o),y(n)):(j.add(l),g--):(r(t,c),g--)}for(;g--;){const n=e[g];b.has(n.key)||r(n,c)}for(;d;)y(h[d-1]);return h}function G(e,n){const t={},o={},l={$$scope:1};let s=e.length;for(;s--;){const c=e[s],i=n[s];if(i){for(const e in c)e in i||(o[e]=1);for(const e in i)l[e]||(t[e]=i[e],l[e]=1);e[s]=i}else for(const e in c)l[e]=1}for(const e in o)e in t||(t[e]=void 0);return t}function J(e){return"object"==typeof e&&null!==e?e:{}}function K(e){e&&e.c()}function Q(e,n,o,c){const{fragment:i,on_mount:r,on_destroy:u,after_update:a}=e.$$;i&&i.m(n,o),c||q((()=>{const n=r.map(t).filter(s);u?u.push(...n):l(n),e.$$.on_mount=[]})),a.forEach(q)}function V(e,n){const t=e.$$;null!==t.fragment&&(l(t.on_destroy),t.fragment&&t.fragment.d(n),t.on_destroy=t.fragment=null,t.ctx=[])}function W(e,n){-1===e.$$.dirty[0]&&(I.push(e),T||(T=!0,E.then(L)),e.$$.dirty.fill(0)),e.$$.dirty[n/31|0]|=1<<n%31}function X(n,t,s,c,i,u,a,p=[-1]){const g=r;v(n);const m=n.$$={fragment:null,ctx:null,props:u,update:e,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(g?g.$$.context:[])),callbacks:o(),dirty:p,skip_bound:!1,root:t.target||g.$$.root};a&&a(m.root);let f=!1;if(m.ctx=s?s(n,t.props||{},((e,t,...o)=>{const l=o.length?o[0]:t;return m.ctx&&i(m.ctx[e],m.ctx[e]=l)&&(!m.skip_bound&&m.bound[e]&&m.bound[e](l),f&&W(n,e)),t})):[],m.update(),f=!0,l(m.before_update),m.fragment=!!c&&c(m.ctx),t.target){if(t.hydrate){const e=function(e){return Array.from(e.childNodes)}(t.target);m.fragment&&m.fragment.l(e),e.forEach(d)}else m.fragment&&m.fragment.c();t.intro&&U(n.$$.fragment),Q(n,t.target,t.anchor,t.customElement),L()}v(g)}class Y{$destroy(){V(this,1),this.$destroy=e}$on(e,n){const t=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return t.push(n),()=>{const e=t.indexOf(n);-1!==e&&t.splice(e,1)}}$set(e){var n;this.$$set&&(n=e,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Z(e){let n,t,o,l=(e[3]||0==e[4]?"":e[4])+"";return{c(){n=f("div"),t=h(l),$(n,"class",o=a(["cell","opened",e[4]&&0!=e[4]?"":"transparent",e[3]?"mined":"",e[6]?"chartleted":""].join(" "))+" svelte-1k44rg6"),$(n,"id",e[0])},m(e,o){g(e,n,o),p(n,t)},p(e,s){24&s&&l!==(l=(e[3]||0==e[4]?"":e[4])+"")&&y(t,l),88&s&&o!==(o=a(["cell","opened",e[4]&&0!=e[4]?"":"transparent",e[3]?"mined":"",e[6]?"chartleted":""].join(" "))+" svelte-1k44rg6")&&$(n,"class",o),1&s&&$(n,"id",e[0])},d(e){e&&d(n)}}}function ee(e){let n,t,o,l;return{c(){n=f("div"),$(n,"class",t=a(["cell",e[8]?"selected":"",e[2]?"flagged":""].join(" "))+" svelte-1k44rg6"),$(n,"id",e[0])},m(t,s){g(t,n,s),o||(l=j(n,"click",e[9]),o=!0)},p(e,o){260&o&&t!==(t=a(["cell",e[8]?"selected":"",e[2]?"flagged":""].join(" "))+" svelte-1k44rg6")&&$(n,"class",t),1&o&&$(n,"id",e[0])},d(e){e&&d(n),o=!1,l()}}}function ne(e){let n;return{c(){n=f("div"),$(n,"class",a(["cell"].join(" "))+" svelte-1k44rg6"),$(n,"id",e[0])},m(e,t){g(e,n,t)},p(e,t){1&t&&$(n,"id",e[0])},d(e){e&&d(n)}}}function te(n){let t;function o(e,n){return e[5]?ne:e[1]||e[7]&&e[3]||e[7]&&e[6]?Z:ee}let l=o(n),s=l(n);return{c(){s.c(),t=w()},m(e,n){s.m(e,n),g(e,t,n)},p(e,[n]){l===(l=o(e))&&s?s.p(e,n):(s.d(1),s=l(e),s&&(s.c(),s.m(t.parentNode,t)))},i:e,o:e,d(e){s.d(e),e&&d(t)}}}function oe(e,n,t){let{id:o}=n,{row:l}=n,{column:s}=n,{opened:c}=n,{flagged:i}=n,{mined:r}=n,{neighborMineCount:u}=n,{disabled:a}=n,{chartleted:p}=n,{gameOver:g}=n,{currentCell:d}=n;const m=k();let f=d&&d.id===o;return x((()=>{t(8,f=d&&d.id===o)})),e.$$set=e=>{"id"in e&&t(0,o=e.id),"row"in e&&t(10,l=e.row),"column"in e&&t(11,s=e.column),"opened"in e&&t(1,c=e.opened),"flagged"in e&&t(2,i=e.flagged),"mined"in e&&t(3,r=e.mined),"neighborMineCount"in e&&t(4,u=e.neighborMineCount),"disabled"in e&&t(5,a=e.disabled),"chartleted"in e&&t(6,p=e.chartleted),"gameOver"in e&&t(7,g=e.gameOver),"currentCell"in e&&t(12,d=e.currentCell)},[o,c,i,r,u,a,p,g,f,function(){m("click",{id:o,row:l,column:s,opened:c,flagged:i,mined:r,neighborMineCount:u,disabled:a,chartleted:p})},l,s,d]}class le extends Y{constructor(e){super(),X(this,e,oe,te,c,{id:0,row:10,column:11,opened:1,flagged:2,mined:3,neighborMineCount:4,disabled:5,chartleted:6,gameOver:7,currentCell:12})}}function se(n){let t,o,s,c,i,r,u,a,m,w,v,C,x,k,I,M,z,_,E,T,q,O,B,L,H,P,R,N,A,U,S,F,D,G=ce(n[0]-n[1])+"";return{c(){t=f("div"),o=f("div"),s=h(G),c=b(),i=f("div"),r=f("div"),u=f("audio"),u.innerHTML='<source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/gamewin.mp3" preload="auto"/><source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/gamewin.ogg" preload="auto"/>',m=b(),w=f("div"),v=f("audio"),v.innerHTML='<source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/gameover.mp3" preload="auto"/><source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/gameover.ogg" preload="auto"/>',x=b(),k=f("div"),I=f("audio"),I.innerHTML='<source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/open.mp3" preload="auto"/><source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/open.ogg" preload="auto"/>',z=b(),_=f("div"),E=f("div"),T=f("audio"),T.innerHTML='<source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/gamewin.mp3" preload="auto"/><source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/gamewin.ogg" preload="auto"/>',O=b(),B=f("div"),L=f("audio"),L.innerHTML='<source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/flag.mp3" preload="auto"/><source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/flag.ogg" preload="auto"/>',P=b(),R=f("div"),R.innerHTML='<audio preload="auto"><source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/help.mp3" preload="auto"/><source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/help.ogg" preload="auto"/></audio>',N=b(),A=f("div"),A.innerHTML='<audio preload="auto"><source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/click.mp3" preload="auto"/><source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/click.ogg" preload="auto"/></audio>',U=b(),S=f("div"),S.innerHTML='<audio preload="auto"><source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/click.mp3" preload="auto"/><source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/click.ogg" preload="auto"/></audio>',$(o,"class","minecount svelte-4ljiyq"),$(u,"preload","auto"),$(r,"class","audio-wrap svelte-4ljiyq"),$(r,"style",a=`z-index: ${!n[3]&&n[2]?69:-100};`),$(v,"preload","auto"),$(w,"class","audio-wrap svelte-4ljiyq"),$(w,"style",C=`z-index: ${n[3]||!n[4]||n[2]?-100:69};`),$(I,"preload","auto"),$(k,"class","audio-wrap svelte-4ljiyq"),$(k,"style",M=`z-index: ${n[3]||!n[4]&&!n[2]?69:-100};`),$(i,"class","open svelte-4ljiyq"),$(T,"preload","auto"),$(E,"class","audio-wrap svelte-4ljiyq"),$(E,"style",q=`z-index: ${!n[3]&&n[2]?69:-100};`),$(L,"preload","auto"),$(B,"class","audio-wrap svelte-4ljiyq"),$(B,"style",H=`z-index: ${n[3]||!n[2]?69:-100};`),$(_,"class","flag svelte-4ljiyq"),$(R,"class","help svelte-4ljiyq"),$(A,"class","restart svelte-4ljiyq"),$(S,"class","next svelte-4ljiyq"),$(t,"class","button-group svelte-4ljiyq")},m(e,l){g(e,t,l),p(t,o),p(o,s),p(t,c),p(t,i),p(i,r),p(r,u),p(i,m),p(i,w),p(w,v),p(i,x),p(i,k),p(k,I),p(t,z),p(t,_),p(_,E),p(E,T),p(_,O),p(_,B),p(B,L),p(t,P),p(t,R),p(t,N),p(t,A),p(t,U),p(t,S),F||(D=[j(i,"click",n[5]),j(_,"click",n[6]),j(R,"click",n[7]),j(A,"click",n[8]),j(S,"click",n[9])],F=!0)},p(e,[n]){3&n&&G!==(G=ce(e[0]-e[1])+"")&&y(s,G),12&n&&a!==(a=`z-index: ${!e[3]&&e[2]?69:-100};`)&&$(r,"style",a),28&n&&C!==(C=`z-index: ${e[3]||!e[4]||e[2]?-100:69};`)&&$(w,"style",C),28&n&&M!==(M=`z-index: ${e[3]||!e[4]&&!e[2]?69:-100};`)&&$(k,"style",M),12&n&&q!==(q=`z-index: ${!e[3]&&e[2]?69:-100};`)&&$(E,"style",q),12&n&&H!==(H=`z-index: ${e[3]||!e[2]?69:-100};`)&&$(B,"style",H)},i:e,o:e,d(e){e&&d(t),F=!1,l(D)}}}function ce(e){return("000"+e).slice(-3)}function ie(e,n,t){let o,{mineCount:l}=n,{flagCount:s}=n,{currentCell:c}=n,{prewined:i}=n,{helped:r}=n;x((()=>{t(4,o=c&&c.mined)}));const u=k();return e.$$set=e=>{"mineCount"in e&&t(0,l=e.mineCount),"flagCount"in e&&t(1,s=e.flagCount),"currentCell"in e&&t(10,c=e.currentCell),"prewined"in e&&t(2,i=e.prewined),"helped"in e&&t(3,r=e.helped)},[l,s,i,r,o,function(){u("open")},function(){u("flag")},function(){u("help")},function(){u("restart")},function(){u("next")},c]}class re extends Y{constructor(e){super(),X(this,e,ie,se,c,{mineCount:0,flagCount:1,currentCell:10,prewined:2,helped:3})}}function ue(e,n){return`${e}/${n}`}function ae({row:e,column:n,...t}){return{id:ue(e,n),row:e,column:n,...t}}function pe(e,n){return Math.floor(Math.random()*(n-e))+e}function ge(e){const[n,t]=e.split("/");return{row:n,column:t}}function de(e,n){let{row:t,column:o}=ge(e);t=parseInt(t),o=parseInt(o);const l=[];l.push(ue(t-1,o-1)),l.push(ue(t-1,o)),l.push(ue(t-1,o+1)),l.push(ue(t,o-1)),l.push(ue(t,o+1)),l.push(ue(t+1,o-1)),l.push(ue(t+1,o)),l.push(ue(t+1,o+1));const{rows:s,columns:c}=n;for(let e=0;e<l.length;e++){let{row:n,column:t}=ge(l[e]);(n<0||t<0||n>=s||t>=c)&&(l.splice(e,1),e--)}return l}function me(e,n,t){const o=de(e.id,t);for(let e=0;e<o.length;e++){const{row:t,column:l}=ge(o[e]),s=n[t][l];if(void 0!==s&&s.chartleted)return!0}return!1}function fe(e){const{rows:n,columns:t,startRow:o,mineCount:l}=e;let s=[];for(let e=0;e<n;e++)for(let n=0;n<t;n++)s[e]=s[e]||[],s[e][n]=ae({row:o+e,column:n,opened:!1,flagged:!1,mined:!1,neighborMineCount:0,disabled:!1,chartleted:!1});return s}const he=10,be=65,we={startRow:0,rows:28,columns:16,mineCount:32},je={startRow:0,rows:he,columns:16,mineCount:12},$e={startRow:he,rows:9,columns:16,mineCount:10},ye={startRow:19,rows:9,columns:16,mineCount:10};function ve(e,n){const{row:t,column:o}=ge(n),l=e[t][o];let s=0;return void 0!==l&&(s=l.mined?1:0),s}function Ce(e,n,t){const{row:o,column:l}=ge(e.id);o<he?(!function(e,n,{regionTopChartletPosition:t}){let{row:o,column:l}=ge(e.id);o=parseInt(o),l=parseInt(l);const s={row:o-1,column:l-2},c={row:o-1,column:l+3},i={row:o+1,column:l-2},r={row:0,column:0};s.row<0&&(r.row=-s.row);i.row>9&&(r.row=-(i.row-9));s.column<0&&(r.column=-s.column);c.column>15&&(r.column=-(c.column-15));s.row+=r.row,s.column+=r.column,c.row+=r.row,c.column+=r.column,c.column>13&&c.row<2&&(l<=13&&o>=2?(s.row+=2-c.row,s.column+=13-c.column):l<=13&&o<2?s.column+=13-c.column:l>13&&o>=2&&(s.row+=2-c.row));xe(n,s,t,{chartletRows:3,chartletColumns:6})}(e,n,t),Ie(n,t),Me(n,t)):o<19?(!function(e,n,{regionMiddleChartletPosition:t}){let{row:o,column:l}=ge(e.id);o=parseInt(o),l=parseInt(l);const s={row:o-1,column:l-2},c={row:o-1,column:l+2},i={row:o+2,column:l-2},r={row:0,column:0};s.row<10&&(r.row=-(s.row-10));i.row>18&&(r.row=-(i.row-18));s.column<0&&(r.column=-s.column);c.column>15&&(r.column=-(c.column-15));s.row+=r.row,s.column+=r.column,xe(n,s,t,{chartletRows:4,chartletColumns:5})}(e,n,t),ke(n,t),Me(n,t)):o<28&&(!function(e,n,{regionBottomChartletPosition:t}){let{row:o,column:l}=ge(e.id);o=parseInt(o),l=parseInt(l);const s={row:o-1,column:l-3},c={row:o-1,column:l+4},i={row:o+1,column:l-3},r={row:o+1,column:l+4},u={row:0,column:0};s.row<19&&(u.row=-(s.row-19));i.row>27&&(u.row=-(i.row-27));s.column<0&&(u.column=-s.column);c.column>15&&(u.column=-(c.column-15));s.row+=u.row,s.column+=u.column,r.row+=u.row,r.column+=u.column,r.column>11&&r.row>24&&(l<=11&&o<=24?(s.row+=24-r.row,s.column+=11-r.column):l<=11&&o>24?s.column+=11-r.column:l>11&&o<=24&&(s.row+=24-r.row));i.column<3&&i.row>21&&(l>=3&&o<=21?(s.row+=21-i.row,s.column+=3-i.column):l>=3&&o>21?s.column+=3-i.column:l<3&&o<=21&&(s.row+=21-i.row));xe(n,s,t,{chartletRows:3,chartletColumns:8})}(e,n,t),ke(n,t),Ie(n,t))}function xe(e,n,t,{chartletRows:o,chartletColumns:l}){const{row:s,column:c}=n;t.top=s*be+"px",t.left=c*be+"px";for(let n=s;n<s+o;n++)for(let t=c;t<c+l;t++)e[n][t]=ae({...e[n][t],chartleted:!0})}function ke(e,{regionTopChartletPosition:n}){const t=pe(0,8),o=pe(0,9);n.top=t*be+"px",n.left=o*be+"px";for(let n=t;n<t+3;n++)for(let t=o;t<o+6;t++)e[n][t]=ae({...e[n][t],chartleted:!0})}function Ie(e,{regionMiddleChartletPosition:n}){const t=pe(10,16),o=pe(0,12);n.top=t*be+"px",n.left=o*be+"px";for(let n=t;n<t+4;n++)for(let t=o;t<o+5;t++)e[n][t]=ae({...e[n][t],chartleted:!0})}function Me(e,{regionBottomChartletPosition:n}){const t=pe(19,26),o=pe(3,5);n.top=t*be+"px",n.left=o*be+"px";for(let n=t;n<t+3;n++)for(let t=o;t<o+8;t++)e[n][t]=ae({...e[n][t],chartleted:!0})}const ze=["0/14","0/15","1/14","1/15"];const _e=["22/0","22/1","22/2","23/0","23/1","23/2","24/0","24/1","24/2","25/0","25/1","25/2","26/0","26/1","26/2","27/0","27/1","27/2"];const Ee=["25/12","25/13","25/14","25/15","26/12","26/13","26/14","26/15","27/12","27/13","27/14","27/15"];function Te(e,n,{forceUpdateBoard:t,boardConfig:o,lose:l}){if(!(e.opened||e.disabled||e.flagged))if(e.mined)l();else{if(n[e.row][e.column].opened=e.opened=!0,!e.neighborMineCount){const s=de(e.id,o);for(let e=0;e<s.length;e++){const{row:c,column:i}=ge(s[e]),r=n[c][i];void 0===r||r.opened||r.disabled||Te(r,n,{forceUpdateBoard:t,boardConfig:o,lose:l})}}t()}}function qe(e,n,t){const o=e.slice();return o[45]=n[t],o}function Oe(e,n,t){const o=e.slice();return o[48]=n[t],o}function Be(e,n,t){const o=e.slice();return o[45]=n[t],o}function Le(e,n,t){const o=e.slice();return o[48]=n[t],o}function He(e,n,t){const o=e.slice();return o[45]=n[t],o}function Pe(e,n,t){const o=e.slice();return o[48]=n[t],o}function Re(n){let t,o,l;return{c(){t=f("div"),$(t,"class","helped svelte-lazofg")},m(e,s){g(e,t,s),o||(l=j(t,"click",n[25]),o=!0)},p:e,d(e){e&&d(t),o=!1,l()}}}function Ne(e){let n;return{c(){n=f("div"),$(n,"class","wined svelte-lazofg")},m(e,t){g(e,n,t)},d(e){e&&d(n)}}}function Ae(e){let n;return{c(){n=f("div"),$(n,"class","losed svelte-lazofg")},m(e,t){g(e,n,t)},d(e){e&&d(n)}}}function Ue(e,t){let o,l,s;const c=[{gameOver:t[8]},{currentCell:t[4]},t[48]];let i={};for(let e=0;e<c.length;e+=1)i=n(i,c[e]);return l=new le({props:i}),l.$on("click",t[19]),{key:e,first:null,c(){o=w(),K(l.$$.fragment),this.first=o},m(e,n){g(e,o,n),Q(l,e,n),s=!0},p(e,n){t=e;const o=304&n[0]?G(c,[256&n[0]&&{gameOver:t[8]},16&n[0]&&{currentCell:t[4]},32&n[0]&&J(t[48])]):{};l.$set(o)},i(e){s||(U(l.$$.fragment,e),s=!0)},o(e){S(l.$$.fragment,e),s=!1},d(e){e&&d(o),V(l,e)}}}function Se(e){let n,t,o,l=[],s=new Map,c=e[45];const i=e=>e[48].id;for(let n=0;n<c.length;n+=1){let t=Pe(e,c,n),o=i(t);s.set(o,l[n]=Ue(o,t))}return{c(){for(let e=0;e<l.length;e+=1)l[e].c();n=b(),t=f("br")},m(e,s){for(let n=0;n<l.length;n+=1)l[n].m(e,s);g(e,n,s),g(e,t,s),o=!0},p(e,t){524592&t[0]&&(c=e[45],N(),l=D(l,t,i,1,e,c,s,n.parentNode,F,Ue,n,Pe),A())},i(e){if(!o){for(let e=0;e<c.length;e+=1)U(l[e]);o=!0}},o(e){for(let e=0;e<l.length;e+=1)S(l[e]);o=!1},d(e){for(let n=0;n<l.length;n+=1)l[n].d(e);e&&d(n),e&&d(t)}}}function Fe(e,t){let o,l,s;const c=[{gameOver:t[8]},{currentCell:t[4]},t[48]];let i={};for(let e=0;e<c.length;e+=1)i=n(i,c[e]);return l=new le({props:i}),l.$on("click",t[20]),{key:e,first:null,c(){o=w(),K(l.$$.fragment),this.first=o},m(e,n){g(e,o,n),Q(l,e,n),s=!0},p(e,n){t=e;const o=336&n[0]?G(c,[256&n[0]&&{gameOver:t[8]},16&n[0]&&{currentCell:t[4]},64&n[0]&&J(t[48])]):{};l.$set(o)},i(e){s||(U(l.$$.fragment,e),s=!0)},o(e){S(l.$$.fragment,e),s=!1},d(e){e&&d(o),V(l,e)}}}function De(e){let n,t,o,l=[],s=new Map,c=e[45];const i=e=>e[48].id;for(let n=0;n<c.length;n+=1){let t=Le(e,c,n),o=i(t);s.set(o,l[n]=Fe(o,t))}return{c(){for(let e=0;e<l.length;e+=1)l[e].c();n=b(),t=f("br")},m(e,s){for(let n=0;n<l.length;n+=1)l[n].m(e,s);g(e,n,s),g(e,t,s),o=!0},p(e,t){1048912&t[0]&&(c=e[45],N(),l=D(l,t,i,1,e,c,s,n.parentNode,F,Fe,n,Le),A())},i(e){if(!o){for(let e=0;e<c.length;e+=1)U(l[e]);o=!0}},o(e){for(let e=0;e<l.length;e+=1)S(l[e]);o=!1},d(e){for(let n=0;n<l.length;n+=1)l[n].d(e);e&&d(n),e&&d(t)}}}function Ge(e,t){let o,l,s;const c=[{gameOver:t[8]},{currentCell:t[4]},t[48]];let i={};for(let e=0;e<c.length;e+=1)i=n(i,c[e]);return l=new le({props:i}),l.$on("click",t[21]),{key:e,first:null,c(){o=w(),K(l.$$.fragment),this.first=o},m(e,n){g(e,o,n),Q(l,e,n),s=!0},p(e,n){t=e;const o=400&n[0]?G(c,[256&n[0]&&{gameOver:t[8]},16&n[0]&&{currentCell:t[4]},128&n[0]&&J(t[48])]):{};l.$set(o)},i(e){s||(U(l.$$.fragment,e),s=!0)},o(e){S(l.$$.fragment,e),s=!1},d(e){e&&d(o),V(l,e)}}}function Je(e){let n,t,o,l=[],s=new Map,c=e[45];const i=e=>e[48].id;for(let n=0;n<c.length;n+=1){let t=Oe(e,c,n),o=i(t);s.set(o,l[n]=Ge(o,t))}return{c(){for(let e=0;e<l.length;e+=1)l[e].c();n=b(),t=f("br")},m(e,s){for(let n=0;n<l.length;n+=1)l[n].m(e,s);g(e,n,s),g(e,t,s),o=!0},p(e,t){2097552&t[0]&&(c=e[45],N(),l=D(l,t,i,1,e,c,s,n.parentNode,F,Ge,n,Oe),A())},i(e){if(!o){for(let e=0;e<c.length;e+=1)U(l[e]);o=!0}},o(e){for(let e=0;e<l.length;e+=1)S(l[e]);o=!1},d(e){for(let n=0;n<l.length;n+=1)l[n].d(e);e&&d(n),e&&d(t)}}}function Ke(e){let n,t,o,s,c,i,r,a,h,w,y,v,C,x,k,I,M,z,_,E,T,q,O,B,L,H,P,R,F,D,G,J,W,X,Y,Z,ee,ne,te,oe,le,se,ce=e[14]&&Re(e);function ie(e,n){return e[9]?Ae:e[10]?Ne:void 0}let ue=ie(e),ae=ue&&ue(e),ge=e[5],de=[];for(let n=0;n<ge.length;n+=1)de[n]=Se(He(e,ge,n));const me=e=>S(de[e],1,1,(()=>{de[e]=null}));let fe=e[6],he=[];for(let n=0;n<fe.length;n+=1)he[n]=De(Be(e,fe,n));const be=e=>S(he[e],1,1,(()=>{he[e]=null}));let we=e[7],je=[];for(let n=0;n<we.length;n+=1)je[n]=Je(qe(e,we,n));const $e=e=>S(je[e],1,1,(()=>{je[e]=null}));return ee=new re({props:{mineCount:e[0],flagCount:e[3],currentCell:e[4],prewined:e[11],helped:e[14]}}),ee.$on("open",e[22]),ee.$on("flag",e[23]),ee.$on("help",e[24]),ee.$on("restart",e[28]),ee.$on("next",Qe),{c(){n=f("div"),t=f("div"),o=f("div"),c=b(),i=f("div"),a=b(),h=f("div"),y=b(),v=f("div"),C=b(),x=f("div"),k=b(),I=f("div"),M=b(),z=f("div"),_=f("img"),T=b(),q=f("audio"),q.innerHTML='<source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/bgm.mp3" loop="loop" preload="auto"/><source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/bgm.ogg" loop="loop" preload="auto"/>',B=b(),L=f("div"),H=f("img"),R=b(),F=f("audio"),F.innerHTML='<source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/click.mp3" preload="auto"/><source src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/audios/click.ogg" preload="auto"/>',G=b(),ce&&ce.c(),J=b(),ae&&ae.c(),W=b();for(let e=0;e<de.length;e+=1)de[e].c();X=b();for(let e=0;e<he.length;e+=1)he[e].c();Y=b();for(let e=0;e<je.length;e+=1)je[e].c();Z=b(),K(ee.$$.fragment),$(o,"class","chartlet top svelte-lazofg"),$(o,"style",s=`background-image: url(https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartlettop${pe(1,6)}.png);top: ${e[15].top};left: ${e[15].left}`),$(i,"class","chartlet middle svelte-lazofg"),$(i,"style",r=`background-image: url(https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartletmiddle${pe(1,6)}.png);top: ${e[16].top};left: ${e[16].left}`),$(h,"class","chartlet bottom svelte-lazofg"),$(h,"style",w=`background-image: url(https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartletbottom${pe(1,6)}.png);top: ${e[17].top};left: ${e[17].left}`),$(v,"class","layer number22 svelte-lazofg"),$(x,"class","layer infos svelte-lazofg"),$(I,"class","layer logo svelte-lazofg"),$(_,"class","start svelte-lazofg"),$(_,"alt",""),u(_.src,E="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/start.png")||$(_,"src","https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/start.png"),$(q,"preload","auto"),q.loop="loop",$(z,"class","start svelte-lazofg"),$(z,"style",O=`opacity: ${e[13]?0:1};z-index: ${e[13]?-100:499}`),$(H,"class","showup svelte-lazofg"),$(H,"alt",""),u(H.src,P="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/showup.gif")||$(H,"src","https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/showup.gif"),$(F,"preload","auto"),$(L,"class","showup svelte-lazofg"),$(L,"style",D=`opacity: ${e[12]?0:1};z-index: ${e[12]?-100:399}`),$(t,"class","board svelte-lazofg"),$(t,"style",ne=`background-image: url(./images/bg${pe(1,6)}${e[1]?"s":""}.png);`),$(n,"class","container svelte-lazofg"),$(n,"style",te=""+(e[2]<1?"margin: 0 auto":""))},m(l,s){g(l,n,s),p(n,t),p(t,o),p(t,c),p(t,i),p(t,a),p(t,h),p(t,y),p(t,v),p(t,C),p(t,x),p(t,k),p(t,I),p(t,M),p(t,z),p(z,_),p(z,T),p(z,q),p(t,B),p(t,L),p(L,H),p(L,R),p(L,F),e[29](F),p(t,G),ce&&ce.m(t,null),p(t,J),ae&&ae.m(t,null),p(t,W);for(let e=0;e<de.length;e+=1)de[e].m(t,null);p(t,X);for(let e=0;e<he.length;e+=1)he[e].m(t,null);p(t,Y);for(let e=0;e<je.length;e+=1)je[e].m(t,null);p(t,Z),Q(ee,t,null),oe=!0,le||(se=[j(z,"click",e[27]),j(L,"click",e[26])],le=!0)},p(e,l){if((!oe||32768&l[0]&&s!==(s=`background-image: url(https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartlettop${pe(1,6)}.png);top: ${e[15].top};left: ${e[15].left}`))&&$(o,"style",s),(!oe||65536&l[0]&&r!==(r=`background-image: url(https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartletmiddle${pe(1,6)}.png);top: ${e[16].top};left: ${e[16].left}`))&&$(i,"style",r),(!oe||131072&l[0]&&w!==(w=`background-image: url(https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartletbottom${pe(1,6)}.png);top: ${e[17].top};left: ${e[17].left}`))&&$(h,"style",w),(!oe||8192&l[0]&&O!==(O=`opacity: ${e[13]?0:1};z-index: ${e[13]?-100:499}`))&&$(z,"style",O),(!oe||4096&l[0]&&D!==(D=`opacity: ${e[12]?0:1};z-index: ${e[12]?-100:399}`))&&$(L,"style",D),e[14]?ce?ce.p(e,l):(ce=Re(e),ce.c(),ce.m(t,J)):ce&&(ce.d(1),ce=null),ue!==(ue=ie(e))&&(ae&&ae.d(1),ae=ue&&ue(e),ae&&(ae.c(),ae.m(t,W))),524592&l[0]){let n;for(ge=e[5],n=0;n<ge.length;n+=1){const o=He(e,ge,n);de[n]?(de[n].p(o,l),U(de[n],1)):(de[n]=Se(o),de[n].c(),U(de[n],1),de[n].m(t,X))}for(N(),n=ge.length;n<de.length;n+=1)me(n);A()}if(1048912&l[0]){let n;for(fe=e[6],n=0;n<fe.length;n+=1){const o=Be(e,fe,n);he[n]?(he[n].p(o,l),U(he[n],1)):(he[n]=De(o),he[n].c(),U(he[n],1),he[n].m(t,Y))}for(N(),n=fe.length;n<he.length;n+=1)be(n);A()}if(2097552&l[0]){let n;for(we=e[7],n=0;n<we.length;n+=1){const o=qe(e,we,n);je[n]?(je[n].p(o,l),U(je[n],1)):(je[n]=Je(o),je[n].c(),U(je[n],1),je[n].m(t,Z))}for(N(),n=we.length;n<je.length;n+=1)$e(n);A()}const c={};1&l[0]&&(c.mineCount=e[0]),8&l[0]&&(c.flagCount=e[3]),16&l[0]&&(c.currentCell=e[4]),2048&l[0]&&(c.prewined=e[11]),16384&l[0]&&(c.helped=e[14]),ee.$set(c),(!oe||2&l[0]&&ne!==(ne=`background-image: url(./images/bg${pe(1,6)}${e[1]?"s":""}.png);`))&&$(t,"style",ne),(!oe||4&l[0]&&te!==(te=""+(e[2]<1?"margin: 0 auto":"")))&&$(n,"style",te)},i(e){if(!oe){for(let e=0;e<ge.length;e+=1)U(de[e]);for(let e=0;e<fe.length;e+=1)U(he[e]);for(let e=0;e<we.length;e+=1)U(je[e]);U(ee.$$.fragment,e),oe=!0}},o(e){de=de.filter(Boolean);for(let e=0;e<de.length;e+=1)S(de[e]);he=he.filter(Boolean);for(let e=0;e<he.length;e+=1)S(he[e]);je=je.filter(Boolean);for(let e=0;e<je.length;e+=1)S(je[e]);S(ee.$$.fragment,e),oe=!1},d(t){t&&d(n),e[29](null),ce&&ce.d(),ae&&ae.d(),m(de,t),m(he,t),m(je,t),V(ee),le=!1,l(se)}}}function Qe(e){console.log("next")}function Ve(e,n,t){let o=1,{mineCount:l}=n,{bgs:s}=n,c=0,i=null,r=[],u=[],a=[],p=!0,g=!1,d=!1,m=!1,f=!1,h=!1,b=!1,w=!1,j={top:0,left:"-780px"},$={top:0,left:"-780px"},y={top:0,left:"-780px"},v=null;try{o=window.screen.width<1080?window.screen.width/1080:1}catch(e){}function k(){return[...r,...u,...a]}function I(){t(5,r),t(6,u),t(7,a)}function z(){try{v.play()}catch(e){}}function _(e){g||e.disabled||e.opened||(i&&i.id===e.id?t(4,i=null):(t(4,i=e),p||function(){const e=k(),n=[];for(let t=0;t<e.length;t++)for(let o=0;o<e[t].length;o++){const l=e[t][o];l.opened||n.push(l)}if(i){let e=n.findIndex((e=>e.id===i.id));e>-1&&n.splice(e,1)}let o=!0;n.forEach((e=>{e.mined||e.disabled||(o=!1)}));let l=!0;n.forEach((e=>{(e.flagged&&!e.mined||!e.flagged&&e.mined)&&(l=!1)})),console.log("pppp",l,o),(o||l)&&t(11,f=!0)}()))}function E(){t(8,g=!0),setTimeout((()=>{t(9,d=!0)}),3e3)}function T(e){t(3,c+=e?1:-1)}function q(){const e=k(),n=[];for(let t=0;t<e.length;t++)for(let o=0;o<e[t].length;o++){const l=e[t][o];l.opened||n.push(l)}let o=!0;n.forEach((e=>{e.mined||e.disabled||(o=!1)}));let l=!0;return n.forEach((e=>{(e.flagged&&!e.mined||!e.flagged&&e.mined)&&(l=!1)})),(o||l)&&(t(8,g=!0),t(10,m=!0)),o||l}function O(){t(3,c=0),t(5,r=fe({...je,mineCount:0})),t(6,u=fe({...$e,mineCount:0})),t(7,a=fe({...ye,mineCount:0})),p=!0,t(8,g=!1),t(9,d=!1),t(10,m=!1),t(11,f=!1),t(14,w=!1),t(4,i=null),t(15,j={top:0,left:"-780px"}),t(16,$={top:0,left:"-780px"}),t(17,y={top:0,left:"-780px"}),function(e){for(let n=0;n<ze.length;n++){const{row:t,column:o}=ge(ze[n]);e[t][o]=ae({...e[t][o],disabled:!0})}}(k()),function(e){for(let n=0;n<_e.length;n++){const{row:t,column:o}=ge(_e[n]);e[t][o]=ae({...e[t][o],disabled:!0})}}(k()),function(e){for(let n=0;n<Ee.length;n++){const{row:t,column:o}=ge(Ee[n]);e[t][o]=ae({...e[t][o],disabled:!0})}}(k()),I()}var B;return x((()=>{console.log("app",k())})),B=()=>{try{audiojs.events.ready((function(){audiojs.createAll()}))}catch(e){}O()},C().$$.on_mount.push(B),setTimeout((()=>{let e=new Image;e.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/bg1s.png";let n=new Image;n.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/bg2s.png";let t=new Image;t.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/bg3s.png";let o=new Image;o.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/bg4s.png";let l=new Image;l.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/bg5s.png";let s=new Image;s.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartletbottom1.png";let c=new Image;c.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartletbottom2.png";let i=new Image;i.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartletbottom3.png";let r=new Image;r.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartletbottom4.png";let u=new Image;u.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartletbottom5.png";let a=new Image;a.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartlettop1.png";let p=new Image;p.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartlettop2.png";let g=new Image;g.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartlettop3.png";let d=new Image;d.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartlettop4.png";let m=new Image;m.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartlettop5.png";let f=new Image;f.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartletmiddle1.png";let h=new Image;h.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartletmiddle2.png";let b=new Image;b.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartletmiddle3.png";let w=new Image;w.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartletmiddle4.png";let j=new Image;j.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/chartletmiddle5.png";let $=new Image;$.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/helpped.png";let y=new Image;y.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/wined.png";let v=new Image;v.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/losed.png";let C=new Image;C.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/helped.png";let x=new Image;x.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/flagged.png";let k=new Image;k.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/opened.png";let I=new Image;I.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/nexted.png";let M=new Image;M.src="https://superjobs.oss-cn-beijing.aliyuncs.com/public/images/restarted.png",setTimeout((()=>{$=null,y=null,v=null,C=null,x=null,k=null,I=null,M=null,e=null,n=null,t=null,o=null,l=null,s=null,c=null,i=null,r=null,u=null,a=null,p=null,g=null,d=null,m=null,f=null,h=null,b=null,w=null,j=null}),3e3)}),0),e.$$set=e=>{"mineCount"in e&&t(0,l=e.mineCount),"bgs"in e&&t(1,s=e.bgs)},[l,s,o,c,i,r,u,a,g,d,m,f,h,b,w,j,$,y,v,function(e){const{detail:n}=e;z(),_(n)},function(e){const{detail:n}=e;z(),_(n)},function(e){const{detail:n}=e;z(),_(n)},function(e){!g&&h&&b&&!w&&i&&(p&&(p=!1,Ce(i,k(),{regionTopChartletPosition:j,regionMiddleChartletPosition:$,regionBottomChartletPosition:y}),t(15,j),t(16,$),t(17,y),function(e,n){const{rows:t,columns:o,mineCount:l,startRow:s}=n,c=[];for(let s=0;s<l;s++){let l=pe(0,t),s=pe(0,o),i=ue(l,s),r=e[l][s];for(;c.includes(i)||r.disabled||r.chartleted||me(r,e,n);)l=pe(0,t),s=pe(0,o),i=ue(l,s),r=e[l][s];c.push(i),e[l][s].mined=!0}}(k(),{...we,mineCount:l}),function(e,n){const{rows:t,columns:o}=n;let l,s=0;for(let c=0;c<t;c++)for(let t=0;t<o;t++){const o=ue(c,t);if(l=e[c][t],l.neighborMineCount=0,!l.mined){const t=de(o,n);s=0;for(let n=0;n<t.length;n++)s+=ve(e,t[n]);l.neighborMineCount=s}}}(k(),we),I()),Te(i,k(),{forceUpdateBoard:I,boardConfig:we,lose:E}),q())},function(e){if(!g&&!p&&h&&b&&!w&&i){if(!i.flagged&&c>=l)return;!function(e,n,{forceUpdateBoard:t,boardConfig:o,flagged:l}){e.opened||e.disabled||(n[e.row][e.column].flagged=e.flagged=!e.flagged,console.log("cell",e,n),l(e.flagged),t())}(i,k(),{forceUpdateBoard:I,boardConfig:we,flagged:T}),q()}},function(e){h&&b&&t(14,w=!w)},function(){h&&b&&t(14,w=!1)},function(){t(12,h=!0)},function(){t(13,b=!0)},function(e){h&&b&&!w&&O()},function(e){M[e?"unshift":"push"]((()=>{v=e,t(18,v)}))}]}class We extends Y{constructor(e){super(),X(this,e,Ve,Ke,c,{mineCount:0,bgs:1},null,[-1,-1])}}function Xe(n){let t,o,l;return o=new We({props:{mineCount:35,bgs:!0}}),{c(){t=f("div"),K(o.$$.fragment)},m(e,n){g(e,t,n),Q(o,t,null),l=!0},p:e,i(e){l||(U(o.$$.fragment,e),l=!0)},o(e){S(o.$$.fragment,e),l=!1},d(e){e&&d(t),V(o)}}}return new class extends Y{constructor(e){super(),X(this,e,null,Xe,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
