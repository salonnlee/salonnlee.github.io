(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{259:function(e,a,t){e.exports={countdown:"index_countdown__2Zydp"}},268:function(e,a,t){e.exports=t(333)},273:function(e,a,t){},31:function(e,a,t){e.exports={home:"index_home__1b_s9",curtain:"index_curtain__TaRxI",avatar:"index_avatar__3ZfxP",intro:"index_intro__1vxUD",name:"index_name__-gTv9",socials:"index_socials__1Bvyv",wechat:"index_wechat__1Qwvi",github:"index_github__1LEz9",juejin:"index_juejin__1K997",jianshu:"index_jianshu__bx1TN","wechat-qrcode":"index_wechat-qrcode__3fpLf"}},329:function(e,a,t){},330:function(e,a,t){e.exports=t.p+"static/media/nobodysland.52f62ba7.mp3"},333:function(e,a,t){"use strict";t.r(a);var n=t(2),i=t.n(n),c=t(22),r=t.n(c),l=(t(273),t(61)),u=t(62),s=t(65),o=t(63),m=t(66),d=t(264),h=t(74),_=(t(274),t(267)),b=t(31),f=t.n(b),p=t(1),v=t(331),j=t(332),E=t(278),y=(p.type,p.compose,p.forEach,p.cond,p.T,p.F,p.identity,v.isNull,v.isUndefined,v.isBoolean,v.isNumber,v.isString,v.isArray,v.isFunction,v.isDate,v.isRegExp,j.isError,j.isPlainObject,p.compose(p.equals("Symbol"),p.type),t(259)),x=t.n(y),w=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(s.a)(this,Object(o.a)(a).call(this,e))).handleCountDownDays=function(e,a){var t=Math.ceil(E.duration(e-a).asDays())+1;return t>0?t:"\u2764"},t.state={targetDate:E("2019-09-15").valueOf(),currentDate:E().valueOf()},t}return Object(m.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.countdown=setInterval(function(){e.setState({currentDate:E().valueOf()})},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.countdown),this.countdown=null}},{key:"render",value:function(){var e=this.state,a=e.targetDate,t=e.currentDate;return i.a.createElement("div",{className:x.a.countdown},this.handleCountDownDays(a,t))}}]),a}(n.Component),O=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:f.a.home},i.a.createElement("div",{className:f.a.curtain},i.a.createElement("div",{className:f.a.avatar})),i.a.createElement("div",{className:f.a.intro},i.a.createElement("h6",{className:f.a.name},"Salon Lee"),i.a.createElement("div",{className:f.a.socials},i.a.createElement("i",{className:f.a.github},i.a.createElement("a",{href:"https://github.com/salonnlee",target:"_blank"})),i.a.createElement("i",{className:f.a.juejin},i.a.createElement("a",{href:"https://juejin.im/user/5a90166851882518c0797f50",target:"_blank"})),i.a.createElement("i",{className:f.a.jianshu},i.a.createElement("a",{href:"https://www.jianshu.com/u/8bef2f6f3988",target:"_blank"})),i.a.createElement("i",{className:f.a.wechat},i.a.createElement(_.a,{placement:"right",content:i.a.createElement("i",{className:f.a["wechat-qrcode"]})},i.a.createElement("a",null)))),i.a.createElement(w,null)))}}]),a}(n.Component),N=(t(329),t(98)),g=t.n(N),D=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(s.a)(this,Object(o.a)(a).call(this,e))).handleAlbumPlay=function(){t.setState({isAlbumPlay:!t.state.isAlbumPlay},function(){t.audio&&t.state.isAlbumPlay?t.audio.play():t.audio.pause()})},t.state={isAlbumPlay:!0},t}return Object(m.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this,a=this.state.isAlbumPlay;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:g.a.album},i.a.createElement("i",{className:[g.a.music,a?null:g.a.paused].join(" "),onClick:this.handleAlbumPlay})),i.a.createElement("audio",{className:g.a.audio,autoPlay:!0,loop:!0,preload:"auto",ref:function(a){return e.audio=a}},i.a.createElement("source",{src:t(330)})))}}]),a}(n.Component),k=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(D,null),i.a.createElement(d.a,null,i.a.createElement(h.a,{path:"/",exact:!0,component:O})))}}]),a}(n.Component);r.a.render(i.a.createElement(k,null),document.getElementById("root"))},98:function(e,a,t){e.exports={album:"index_album__GQxSH",music:"index_music__2nbdf",paused:"index_paused__1q7zv",audio:"index_audio__2v556"}}},[[268,1,2]]]);
//# sourceMappingURL=main.4a9b4ce3.chunk.js.map