(function(j,u){typeof exports=="object"&&typeof module!="undefined"?module.exports=u():typeof define=="function"&&define.amd?define(u):(j=typeof globalThis!="undefined"?globalThis:j||self,j.rscVideo=u())})(this,function(){"use strict";var un=Object.defineProperty,mn=Object.defineProperties;var fn=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var An=Object.prototype.hasOwnProperty,gn=Object.prototype.propertyIsEnumerable;var U=(j,u,f)=>u in j?un(j,u,{enumerable:!0,configurable:!0,writable:!0,value:f}):j[u]=f,y=(j,u)=>{for(var f in u||(u={}))An.call(u,f)&&U(j,f,u[f]);if(Y)for(var f of Y(u))gn.call(u,f)&&U(j,f,u[f]);return j},P=(j,u)=>mn(j,fn(u));var I=(j,u,f)=>new Promise((S,C)=>{var z=p=>{try{g(f.next(p))}catch(x){C(x)}},h=p=>{try{g(f.throw(p))}catch(x){C(x)}},g=p=>p.done?S(p.value):Promise.resolve(p.value).then(z,h);g((f=f.apply(j,u)).next())});const j={default:"https://www.roadshowchina.cn/public/statics/home/images/poster-bg.jpg",waiting:"https://www.roadshowchina.cn/public/statics/home/images/poster-bg2.jpg"},u="https://www.roadshowchina.cn/public/test/index.html#/",f={videojs:"https://static.roadshowchina.cn/public/video/min/video.min.js",videoLangPath:"/",videojsHls:"https://static.roadshowchina.cn/public/video/min/videojs-http-streaming.min.js",flvjs:"https://static.roadshowchina.cn/public/video/min/flv.min.js",videojsFlv:"https://static.roadshowchina.cn/public/video/min/videojs-flvjs.min.js"},S={css:"link",js:"script"},C={duration:5,waitingDuration:3,waitingTime:2,errorDuration:8},z=["loadstart","suspend","abort","error","emptied","stalled","loadedmetadata","loadeddata","canplay","canplaythrough","playing","waiting","seeking","seeked","ended","durationchange","play","pause","ratechange","resize","volumechange"];function h(n,e,o){return new Promise((t,l)=>{if(o&&window[o])t(window[o]);else{const i=document.createElement(S[n]);i.onerror=s=>{l(s)},i.onload=()=>{o?(window[o]||(window[o]=!0),t(window[o])):t(!0)},n==="css"?(i.rel="stylesheet",i.href=e,document.head.appendChild(i)):n==="js"?(i.type="text/javascript",i.src=e,document.body.appendChild(i)):l(Error(`\u4E0D\u652F\u6301\u7684\u7C7B\u578B: ${n}`))}})}function g(n=""){const e=n.toLocaleLowerCase();if(e.includes(".m3u8"))return"hls";if(e.startsWith("http")&&e.includes(".flv"))return"flv";if(e.includes(".mp4"))return"video/mp4";if(e.includes(".webm"))return"video/webm"}function p(n){var t;const e=[];if(!Array.isArray(n)){if(!n)return[];if(typeof n=="string"){const l=g(n);return l?[l]:[]}return typeof n=="object"&&(n.flv&&e.push("flv"),n.hls&&e.push("hls")),e}const o=g((t=n[0])==null?void 0:t.src);return o?[o]:[]}function x(n,e,o){let t=y({},e);return new Set([...Object.keys(n||{}),...o?Object.keys(e||{}):[]]).forEach(i=>{typeof t[i]=="object"||typeof n[i]=="object"?t[i]=x(n[i],t[i],o):t[i]||(t[i]=n[i])}),t}function L(n){var o;if(!Array.isArray(n))return n;if(n.length<1)return"";const e=n.find(t=>t.selected);return e?e.src||"":((o=n[0])==null?void 0:o.src)||""}function D(n,e){if(console.log("input sources",n),!Array.isArray(n)){if(!n)throw Error("\u7F3A\u5931\u89C6\u9891\u6E90");if(typeof n=="string")return[{src:n,selected:!0,title:"\u9ED8\u8BA4"}];if(typeof n=="object"){if(!window.flvjs||!window.flvjs.isSupported())return D(n.hls,e);let s=[];try{s=D(n.flv,e)}catch(r){return D(n.hls,e)}if(s.length>0)return s}throw Error("\u7F3A\u5931\u89C6\u9891\u6E90")}let o=[],t=0,l=!1,i=[];if(n.forEach(s=>{if(s.src){let r=s.title||`\u9ED8\u8BA4${t||""}`;i.includes(r)&&(r=r+" "),o.push({src:s.src,title:r,selected:s.selected,definition:s.definition||0}),i.push(r),t+=1,s.selected&&(l=!0)}}),o.length<1)throw Error("\u7F3A\u5931\u89C6\u9891\u6E90");if(o.sort((s,r)=>s.definition-r.definition),e)l||(o[o.length-1].selected=!0);else{const s=Number(localStorage.getItem("rscVideoPlayerDifition")||"");if(s){let r=-1;o.forEach((c,d)=>{(c.definition<=s||r<0)&&(r=d)}),o[r].selected=!0}else l||(o[0].selected=!0)}return o}function N(n,e,o,t=""){const l=videojs.getComponent("Button");return new l(n,{className:t+" vjs-visible-text",controlText:e,clickHandler:()=>{o==null||o()}})}function v(n,e){var t;const o=(t=n.languages())==null?void 0:t[n.language()];return o&&o[e]||""}function M(){if(window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))location.href=u;else{const n=window.open("","_blank");setTimeout(()=>{n.location=u},50)}}function W(n){return["en","zh-CN"].includes(n)?n:"zh-CN"}function O(n){let e=!0;var o=document.body;o.addEventListener?(window.addEventListener("online",function(){e=!0,n(e)},!0),window.addEventListener("offline",function(){e=!1,n(e)},!0)):o.attachEvent?(window.attachEvent("ononline",function(){e=!0,n(e)}),window.attachEvent("onoffline",function(){e=!1,n(e)})):(window.ononline=function(){e=!0,n(e)},window.onoffline=function(){e=!1,n(e)})}function _(n){const e=videojs.getComponent("Component"),o=new e(n);o.addClass("vjs-alert-dialog"),o.addClass("vjs-hidden"),o.empty=()=>{o.el().innerHTML=""},o.timeout=null,o.show=(t,l=2e3)=>{clearTimeout(o.timeout),Array.isArray(t)?(o.empty(),t.forEach(i=>{o.addChild(i)})):t&&(o.el().innerHTML=t),o.removeClass("vjs-hidden"),l>-1&&(o.timeout=setTimeout(()=>{try{o.hide()}catch(i){}},l))},o.hideTime=(t=2e3)=>{clearTimeout(o.timeout),o.timeout=setTimeout(()=>{try{o.hide()}catch(l){}},t)},n.Alert=o,n.alert=o.show,n.addChild(o),n.on("timeupdate",()=>{n.Alert.hasClass("vjs-hidden")||(n.playingTime?Date.now()-n.playingTime>2e3&&(n.Alert.hide(),n.playingTime=0):n.playingTime=Date.now())}),n.on("playing",()=>{n.playingTime&&(n.playingTime=0)})}function R(n,e){const o=Date.now()-e*1e3,t=[];let l=0;return n.forEach(([i,s])=>{s?s>o&&(i>o?(t.push([i,s]),l+=s-i):(t.push([o,s]),l+=s-o)):(t.push([i]),l+=Date.now()-i)}),{waitingTimes:t,time:l}}function G(n,e){const{waitingTimes:o,time:t}=R(n,e.duration);return o.length>=e.waitingTime||t>=e.waitingDuration*1e3}function Q(n){const e=new videojs.getComponent("Component"),o=new e(n,{className:"vjs-inline"}),t=n.Sources.findIndex(s=>{var r;return s.title===((r=n.DifinitionButton)==null?void 0:r.current)}),l=[o];o.el().innerText=v(n,"Poor network connection, recommended to");const i=t<1?N(n,v(n,"check the network"),()=>{M()},"vjs-rsc-btn"):N(n,v(n,"reduce the quality"),()=>{n.waitingTimes=[],n.Alert.hide(),n.DifinitionButton.switch(t-1)},"vjs-rsc-btn");l.push(i),n.alert(l,-1)}function Z(n){n.Alert.clearTimeout(n.Alert.waitingTimeClock),n.Alert.waitingTimeClock=null,n.waitingTimes=[]}function X(n,e){const o=n.waitingTimes[n.waitingTimes.length-1]||[];if(o.length===1&&Date.now()-o[0]>e*1e3){const t=n.networkState();t===3?n.errorDisplay.opened()||n.errorDisplay.updateContent(v(n,"Connecting to network")):t===2&&(n.errorDisplay.opened()||n.errorDisplay.updateContent(v(n,"Connection failed, check your network or try again later")))}}function K(n,e){const o=n.getChild("errorDisplay"),t=x(C,e);n.Alert.clearTimeClock=()=>Z(n),n.waitingTimes||(n.waitingTimes=[]),n.on("waiting",()=>{n.addClass("vjs-waiting"),o.waitingTimeClock=o.setTimeout(()=>{X(n,t.errorDuration)},t.errorDuration*1e3),G(n.waitingTimes,t)?Q(n):n.Alert.waitingTimeClock||(n.Alert.waitingTimeClock=n.Alert.setTimeout(()=>{G(n.waitingTimes,t)&&Q(n)},t.duration*1e3)),(n.waitingTimes[n.waitingTimes.length-1]||[]).length!==1&&n.waitingTimes.push([Date.now()])}),n.showNetIsSlow=Q,n.on("canplay",()=>{(n.waitingTimes[n.waitingTimes.length-1]||[]).length===1&&(n.waitingTimes[n.waitingTimes.length-1][1]=Date.now());const{waitingTimes:i}=R(n.waitingTimes,t.duration);n.waitingTimes=i})}function $(n){z.forEach(e=>{n.on(e,(o,...t)=>{videojs.log(e,t),e==="loadstart"&&n.hasClass("vjs-init")&&g(n.currentSrc())==="flv"&&Object.keys(flvjs.Events).forEach(l=>{n.tech().on(flvjs.Events[l],(i,s)=>{console.log("flvjs:",l,s)})})})})}function J(n,e){return e===1?v(n,"Normal"):`${e}X`}function q(n,e){const o=videojs.getComponent("Component"),t=new o(n,{className:"vjs-rsc-dialog-content"}),l=document.createElement("div");l.className="vjs-rsc-dialog-content-title",l.innerText=v(n,"Speed"),videojs.dom.appendContent(t.el(),l);const i=new o(n,{className:"vjs-rsc-dialog-content-buttons"});return e.forEach(s=>{const r=videojs.getComponent("Button"),c=new r(n,{controlText:J(n,s),className:"vjs-visible-text"+(n.playbackRate()===s?" vjs-selected":""),clickHandler:()=>{if(n.playbackRate()===s){n.PlaybackRateModalDialog.close();return}n.playbackRate(s)}});i.addChild(c)}),t.addChild(i),t}function nn(n){const e=n.controlBar,o=n.options().playbackRates;if(e.removeChild("PlaybackRateMenuButton"),n.PlaybackRateButton&&e.removeChild(n.PlaybackRateButton),n.PlaybackRateModalDialog&&n.removeChild(n.PlaybackRateModalDialog),!Array.isArray(o)||o.length<2)return;const t=videojs.getComponent("ClickableComponent"),l=new t(n,{name:"PlaybackRateButton",controlText:v(n,"Speed"),className:"vjs-visible-text vjs-playback-rate",clickHandler:()=>{n.PlaybackRateModalDialog.open()}});n.PlaybackRateButton=l;const i=videojs.getComponent("ModalDialog"),s=q(n,o),r=new i(n,{name:"PlaybackRateModalDialog",className:"vjs-rsc-dialog",content:s.el(),description:v(n,"changeSpeed")+v(n,"colon")+o.join(),fillAlways:!0,label:v(n,"changeSpeed"),pauseOnOpen:!1,temporary:!1,uncloseable:!0});r.contentEl().addEventListener("click",()=>{r.close()}),n.PlaybackRateModalDialog=r,n.addChild(r),n.on("ratechange",c=>{const d=n.playbackRate(),A=J(n,d);l.controlText(d===1?v(n,"Speed"):A),r.content().querySelector(".vjs-rsc-dialog-content-buttons").childNodes.forEach(m=>{m.title===A?m.classList.add("vjs-selected"):m.classList.remove("vjs-selected")}),n.PlaybackRateModalDialog.close()}),e.addChild(l,{},e.children().length-1)}function en(n){const e=n.controlBar,o=e.el(),t=e.$(".vjs-progress-control");t&&o.removeChild(t);const l=videojs.dom.createEl("div",{className:"vjs-progress-control vjs-control"}),i=videojs.dom.createEl("input",{className:"vjs-progress-input"},{type:"range",title:"\u64AD\u653E\u8FDB\u5EA6\u6761",max:n.duration(),min:0,value:0,moving:!1});n.on("loadedmetadata",()=>{i.max=n.duration()}),n.on("timeupdate",()=>{i.moving||(i.value=n.currentTime())}),i.onmousedown=s=>{s.target.moving=!0},i.onmouseup=s=>{s.target.moving=!1;const r=n.paused();r||n.pause();const c=s.offsetX/s.target.clientWidth*s.target.max;n.currentTime(c),r||n.play(),n.Alert.clearTimeClock(),n.Alert.hide(),n.errorDisplay.clearTimeout(n.errorDisplay.waitingTimeClock),n.errorDisplay.waitingTimeClock=null},i.ontouchstart=i.onmousedown,i.ontouchend=s=>{const{clientX:r,target:c}=s.changedTouches[0],{x:d}=c.getBoundingClientRect();s.offsetX=r-d,i.onmouseup(s)},l.appendChild(i),o.insertBefore(l,o.children[2])}function on(n){n.on("loadstart",()=>{n.poster(j.waiting),n.hasClass("vjs-init")&&g(n.currentSrc())==="flv"&&(n.tech().on(flvjs.Events.ERROR,(e,o)=>{o[2].msg==="Failed to fetch"||o[2].code===-1?(n.error_={code:4},n.trigger("error"),n.addClass("vjs-error")):o[2].msg.indexOf("flushStashedSamples")>-1?(n.error_={code:4},n.trigger("error"),n.addClass("vjs-error")):(n.error_={code:4},n.trigger("error"),n.addClass("vjs-error"))}),n.tech().on(flvjs.Events.LOADING_COMPLETE,()=>{if(n.isLive){const e=setInterval(()=>{const o=n.bufferedEnd();n.currentTime()>o&&(n.source(n.currentSrc()),clearInterval(e))},1e3)}}),n.tech().on(flvjs.Events.STATISTICS_INFO,(e,o)=>{}))}),n.on("durationchange",()=>{var e,o,t;n.hasClass("vjs-init")&&(n.removeClass("vjs-init"),n.isLive=n.duration()===1/0,n.controls()&&!n.RscOptions.isLive&&!((t=(o=(e=n.VideoOptions)==null?void 0:e.flvjs)==null?void 0:o.mediaDataSource)!=null&&t.isLive)&&(en(n),nn(n)))}),n.on("playing",()=>{n.poster(j.default),n.Alert.hideTime();const e=n.currentTime(),o=n.bufferedEnd();n.stalledFlag&&(e<1||e>o)&&(n.stalledFlag=!1,n.pause(),n.showNetIsSlow(n))}),n.on("resize",e=>{n.Alert.clearTimeClock(),clearInterval(n.retryClock),n.retryClock=void 0}),n.on("play",()=>{if(n.duration()===1/0){const e=n.bufferedEnd(),o=n.currentTime();e&&o&&e-o>2&&n.currentTime(e-2)}n.hasClass("vjs-init")&&(n.playClock&&clearInterval(n.playClock),n.playClock=setInterval(()=>{const e=n.bufferedEnd(),o=n.currentTime();if(n.isLive&&o>e&&(n.source(n.currentSrc()),clearInterval(n.playClock)),!o&&!e&&n.hasClass("vjs-error")){if(n.retryClock)return;n.retryClock=setInterval(()=>{n.source(n.currentSrc())},1e4)}console.log(o,e)},1e3))}),n.on("stalled",()=>{n.stalledFlag=!0;const e=n.currentTime(),o=n.bufferedEnd();(e<1||e>o)&&(n.pause(),n.showNetIsSlow(n))}),n.on("ended",()=>{console.log(n.isLive,n.currentSrc()),n.isLive&&n.source(n.currentSrc())}),n.on("error",e=>{let o=v(n,"Connection error, try again later"),t={showBtn:!0,showNetworkBt:!0,showWaitingBg:!1,showCode:!0};if(n.src().indexOf("offline")>-1)n.el("vjsTech"),o=v(n,"No Internet Connection, Check your network");else switch(n.error().code){case 1:o=v(n,"Connecting to network"),t.showWaitingBg=!0,t.showBtn=!1,t.showNetworkBt=!1,t.showCode=!1;break;case 2:o=v(n,"No Internet Connection, Check your network");break;case 3:o=v(n,"Poor network connection, check your network or try again later");break;case 4:o=v(n,"Connecting to network"),t.showWaitingBg=!0,t.showBtn=!1,t.showNetworkBt=!1,t.showCode=!1,g(n.currentSrc())!=="flv"&&setTimeout(()=>{n.source(n.currentSrc())},3e4);break;default:o=v(n,"Connection error, try again later"),t.showNetworkBt=!1;break}n.errorDisplay.updateContent(o,t)}),n.on("waiting",e=>{}),O(function(e){e?n.source(n.currentSrc()):(n.error_={code:2},n.trigger("error"),n.addClass("vjs-error"))})}function tn(){const n=videojs.getComponent("Component");return videojs.extend(n,{constructor:function(o,t){n.apply(this,arguments),t.text&&this.updateTextContent(t.text)},createEl:function(){return videojs.dom.createEl("div",{className:"vjs-custom-div"})},updateTextContent:function(o){typeof o!="string"&&(o="Title Unknown"),videojs.dom.emptyEl(this.el()),videojs.dom.appendContent(this.el(),o)}})}function sn(n){const e=n.getChild("errorDisplay");e.el().style.background=`url(${j.default}) no-repeat center/cover`,e.el().style.backgroundColor="#13072b",e.setTimeout(()=>{},C.errorDuration);const o=new videojs.getComponent("Button"),t=new o(n,{className:"vjs-rsc-btn vjs-visible-text",controlText:v(n,"Try again"),clickHandler:()=>{if(navigator.onLine){n.errorDisplay.close(),n.removeClass("vjs-error");const s=n.currentSrc();n.source(s)}else n.alert(v(n,"No Internet Connection, Check your network"))}}),l=new o(n,{className:"vjs-rsc-btn vjs-visible-text network-btn",controlText:v(n,"Check the network"),clickHandler:()=>{M()}}),i=tn();e.updateContent=(s,r)=>{var A;e.empty();const c=new i(n,{className:"vjs-error-title",text:s});e.addChild(c);const d=(A=n.error())==null?void 0:A.code;if(d&&(r==null?void 0:r.showCode)){const m=new i(n,{className:"vjs-error-code",text:`(${d})`});e.addChild(m)}if(n.paused()||n.pause(),n.poster(j.default),n.Alert.clearTimeClock(),n.Alert.hide(),n.removeClass("vjs-waiting"),r!=null&&r.showBtn){const m=new i(n,{className:"vjs-error-btn-content"});e.addChild(m),r!=null&&r.showNetworkBt&&m.addChild(l),m.addChild(t)}if(r!=null&&r.showWaitingBg){const m=new i(n,{className:"vjs-error-waiting-content"});e.addClass("vjs-error-waiting"),e.addChild(m)}n.errorDisplay.clearTimeout(n.errorDisplay.waitingTimeClock),n.errorDisplay.waitingTimeClock=null}}function V(n,e){n.duration()!==1/0&&localStorage.setItem("rscVideoPlayerDifition",e.definition);const o=n.duration()!==1/0?n.currentTime():0;n.source(e.src,{},t=>{t.alert(`${v(n,"Switching to")}${e.title.trim()}`,-1),setTimeout(()=>{t.addClass("vjs-seeking"),t.addClass("vjs-waiting")},0),t.one("resize",()=>{t.duration()!==1/0&&t.currentTime(o),t.one("playing",()=>{t.alert(`${v(n,"Switched to")}${e.title.trim()}`)}),t.play()}),t.DifinitionButton.controlText(e.title.trim()),t.DifinitionButton.current=e.title,t.DifinitionModalDialog.content().querySelector(".vjs-rsc-dialog-content-buttons").childNodes.forEach(l=>{l.innerText===e.title.trim()?l.classList.add("vjs-selected"):l.classList.remove("vjs-selected")}),t.DifinitionModalDialog.close(),t.Sources.forEach(l=>{l.selected=l.title===e.title})})}function ln(n,e){const o=videojs.getComponent("Component"),t=new o(n,{className:"vjs-rsc-dialog-content"}),l=document.createElement("div");l.className="vjs-rsc-dialog-content-title",l.innerText=v(n,"Quality"),videojs.dom.appendContent(t.el(),l);const i=new o(n,{className:"vjs-rsc-dialog-content-buttons"});return e.forEach(s=>{const r=videojs.getComponent("Button"),c=new r(n,{controlText:s.title.trim(),className:"vjs-visible-text"+(n.DifinitionButton.current===s.title?" vjs-selected":""),clickHandler:()=>{if(n.DifinitionButton.current===s.title){n.DifinitionModalDialog.close();return}V(n,s)}});i.addChild(c)}),t.addChild(i),t}function rn(n){const e=n.controlBar,o=n.Sources;if(n.DifinitionButton&&e.removeChild(n.DifinitionButton),n.DifinitionModalDialog&&n.removeChild(n.DifinitionModalDialog),o.length<2)return;const t=o.find(d=>d.selected),l=videojs.getComponent("ClickableComponent"),i=new l(n,{name:"DifinitionButton",controlText:t.title.trim(),className:"vjs-visible-text vjs-difinition-control",clickHandler:()=>{n.DifinitionModalDialog.open()}});n.DifinitionButton=i,n.DifinitionButton.current=t.title,n.DifinitionButton.switch=d=>{const A=n.VideoOptions.debug;if(d>o.length-1){A&&videojs.log("\u4E0D\u80FD\u5207\u6362\u5230\u7B2C"+d+"\u4E2A\u6E05\u6670\u5EA6\uFF0Csource\u603B\u4E2A\u6570\u4E3A\uFF1A"+o.length,o);return}const m=o[d];if(m.title===n.DifinitionButton.current){A&&videojs.log("\u6B63\u5728\u64AD\u653E\u7B2C"+d+"\u4E2A\u6E05\u6670\u5EA6",o);return}V(n,m)};const s=videojs.getComponent("ModalDialog"),r=ln(n,o),c=new s(n,{name:"DifinitionModalDialog",className:"vjs-rsc-dialog",content:r.el(),description:v(n,"changeDef")+v(n,"colon")+o.map(d=>d.title).join(),fillAlways:!0,label:v(n,"changeDef"),pauseOnOpen:!1,temporary:!1,uncloseable:!0});c.contentEl().addEventListener("click",()=>{try{c.close()}catch(d){}}),n.DifinitionModalDialog=c,n.addChild(c),e.addChild(i,{},e.children().length-1)}function vn(n){if(!n.controls())return;const e=n.controlBar;e.$(".vjs-controlbar-placeholder")&&e.$(".vjs-controlbar-placeholder").remove();const o=videojs.getComponent("Component"),t=new o(n,{className:"vjs-controlbar-placeholder"});e.addChild(t,{},e.children().length-1),rn(n),e.removeChild("progressControl"),e.removeChild("playbackRateMenuButton"),e.removeChild("subsCapsButton"),n.removeChild("extTrackDisplay"),n.removeChild("textTrackSettings"),e.removeChild("descriptionsButton"),e.removeChild("chaptersButton"),e.removeChild("audioTrackButton")}var an=`@charset "UTF-8";
.video-js .vjs-big-play-button .vjs-icon-placeholder:before,
.video-js .vjs-modal-dialog,
.vjs-modal-dialog .vjs-modal-dialog-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.video-js .vjs-big-play-button .vjs-icon-placeholder:before,
.vjs-button > .vjs-icon-placeholder:before {
  text-align: center;
}
@font-face {
  font-family: VideoJS;
  src: url(data:application/font-woff;charset=utf-8;base64,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)
    format('woff');
  font-weight: 400;
  font-style: normal;
}
.video-js .vjs-big-play-button .vjs-icon-placeholder:before,
.video-js .vjs-play-control .vjs-icon-placeholder,
.vjs-icon-play {
  font-family: VideoJS;
  font-weight: 400;
  font-style: normal;
}
.video-js .vjs-big-play-button .vjs-icon-placeholder:before,
.video-js .vjs-play-control .vjs-icon-placeholder:before,
.vjs-icon-play:before {
  content: '\\e900';
}
/* .vjs-icon-play-circle {
  font-family: VideoJS;
  font-weight: 400;
  font-style: normal;
}
.vjs-icon-play-circle:before {
  content: '\\e904';
} */
.video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder,
.vjs-icon-pause {
  font-family: VideoJS;
  font-weight: 400;
  font-style: normal;
}
.video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder:before,
.vjs-icon-pause:before {
  content: '\\e903';
}
/* .video-js .vjs-mute-control.vjs-vol-0 .vjs-icon-placeholder,
.vjs-icon-volume-mute {
  font-family: VideoJS;
  font-weight: 400;
  font-style: normal;
}
.video-js .vjs-mute-control.vjs-vol-0 .vjs-icon-placeholder:before,
.vjs-icon-volume-mute:before {
  content: '\\f104';
}
.video-js .vjs-mute-control.vjs-vol-1 .vjs-icon-placeholder,
.vjs-icon-volume-low {
  font-family: VideoJS;
  font-weight: 400;
  font-style: normal;
}
.video-js .vjs-mute-control.vjs-vol-1 .vjs-icon-placeholder:before,
.vjs-icon-volume-low:before {
  content: '\\f105';
}
.video-js .vjs-mute-control.vjs-vol-2 .vjs-icon-placeholder,
.vjs-icon-volume-mid {
  font-family: VideoJS;
  font-weight: 400;
  font-style: normal;
}
.video-js .vjs-mute-control.vjs-vol-2 .vjs-icon-placeholder:before,
.vjs-icon-volume-mid:before {
  content: '\\f106';
}
.video-js .vjs-mute-control .vjs-icon-placeholder,
.vjs-icon-volume-high {
  font-family: VideoJS;
  font-weight: 400;
  font-style: normal;
}
.video-js .vjs-mute-control .vjs-icon-placeholder:before,
.vjs-icon-volume-high:before {
  content: '\\f107';
} */
.video-js .vjs-fullscreen-control .vjs-icon-placeholder,
.vjs-icon-fullscreen-enter {
  font-family: VideoJS;
  font-weight: 400;
  font-style: normal;
}
.video-js .vjs-fullscreen-control .vjs-icon-placeholder:before,
.vjs-icon-fullscreen-enter:before {
  content: '\\e901';
}
.video-js.vjs-fullscreen .vjs-fullscreen-control .vjs-icon-placeholder,
.vjs-icon-fullscreen-exit {
  font-family: VideoJS;
  font-weight: 400;
  font-style: normal;
}
.video-js.vjs-fullscreen .vjs-fullscreen-control .vjs-icon-placeholder:before,
.vjs-icon-fullscreen-exit:before {
  content: '\\e902';
}
/* .vjs-icon-square {
  font-family: VideoJS;
  font-weight: 400;
  font-style: normal;
}
.vjs-icon-square:before {
  content: '\\f10a';
} */
/* .vjs-icon-spinner {
  font-family: VideoJS;
  font-weight: 400;
  font-style: normal;
}
.vjs-icon-spinner:before {
  content: '\\f10b';
} */
/* .video-js .vjs-subs-caps-button .vjs-icon-placeholder,
.video-js .vjs-subtitles-button .vjs-icon-placeholder,
.video-js.video-js:lang(en-AU) .vjs-subs-caps-button .vjs-icon-placeholder,
.video-js.video-js:lang(en-GB) .vjs-subs-caps-button .vjs-icon-placeholder,
.video-js.video-js:lang(en-IE) .vjs-subs-caps-button .vjs-icon-placeholder,
.video-js.video-js:lang(en-NZ) .vjs-subs-caps-button .vjs-icon-placeholder,
.vjs-icon-subtitles {
  font-family: VideoJS;
  font-weight: 400;
  font-style: normal;
}
.video-js .vjs-subs-caps-button .vjs-icon-placeholder:before,
.video-js .vjs-subtitles-button .vjs-icon-placeholder:before,
.video-js.video-js:lang(en-AU) .vjs-subs-caps-button .vjs-icon-placeholder:before,
.video-js.video-js:lang(en-GB) .vjs-subs-caps-button .vjs-icon-placeholder:before,
.video-js.video-js:lang(en-IE) .vjs-subs-caps-button .vjs-icon-placeholder:before,
.video-js.video-js:lang(en-NZ) .vjs-subs-caps-button .vjs-icon-placeholder:before,
.vjs-icon-subtitles:before {
  content: '\\f10c';
}
.video-js .vjs-captions-button .vjs-icon-placeholder,
.video-js:lang(en) .vjs-subs-caps-button .vjs-icon-placeholder,
.video-js:lang(fr-CA) .vjs-subs-caps-button .vjs-icon-placeholder,
.vjs-icon-captions {
  font-family: VideoJS;
  font-weight: 400;
  font-style: normal;
}
.video-js .vjs-captions-button .vjs-icon-placeholder:before,
.video-js:lang(en) .vjs-subs-caps-button .vjs-icon-placeholder:before,
.video-js:lang(fr-CA) .vjs-subs-caps-button .vjs-icon-placeholder:before,
.vjs-icon-captions:before {
  content: '\\f10d';
}
.video-js .vjs-chapters-button .vjs-icon-placeholder,
.vjs-icon-chapters {
  font-family: VideoJS;
  font-weight: 400;
  font-style: normal;
}
.video-js .vjs-chapters-button .vjs-icon-placeholder:before,
.vjs-icon-chapters:before {
  content: '\\f10e';
}
.vjs-icon-share {
  font-family: VideoJS;
  font-weight: 400;
  font-style: normal;
}
.vjs-icon-share:before {
  content: '\\f10f';
}
.vjs-icon-cog {
  font-family: VideoJS;
  font-weight: 400;
  font-style: normal;
}
.vjs-icon-cog:before {
  content: '\\f110';
}*/
.video-js .vjs-play-progress,
.video-js .vjs-volume-level,
.vjs-icon-circle,
.vjs-seek-to-live-control .vjs-icon-placeholder {
  font-family: VideoJS;
  font-weight: 400;
  font-style: normal;
}
.video-js .vjs-play-progress:before,
.video-js .vjs-volume-level:before,
.vjs-icon-circle:before,
.vjs-seek-to-live-control .vjs-icon-placeholder:before {
  content: '\\e904';
}
.vjs-icon-circle-outline {
  font-family: VideoJS;
  font-weight: 400;
  font-style: normal;
}
.vjs-icon-circle-outline:before {
  content: '\\e904';
}
/*
.vjs-icon-circle-inner-circle {
  font-family: VideoJS;
  font-weight: 400;
  font-style: normal;
}
.vjs-icon-circle-inner-circle:before {
  content: '\\f113';
}
.vjs-icon-hd {
  font-family: VideoJS;
  font-weight: 400;
  font-style: normal;
}
.vjs-icon-hd:before {
  content: '\\f114';
}
.video-js .vjs-control.vjs-close-button .vjs-icon-placeholder,
.vjs-icon-cancel {
  font-family: VideoJS;
  font-weight: 400;
  font-style: normal;
}
.video-js .vjs-control.vjs-close-button .vjs-icon-placeholder:before,
.vjs-icon-cancel:before {
  content: '\\f115';
}
.video-js .vjs-play-control.vjs-ended .vjs-icon-placeholder,
.vjs-icon-replay {
  font-family: VideoJS;
  font-weight: 400;
  font-style: normal;
}
.video-js .vjs-play-control.vjs-ended .vjs-icon-placeholder:before,
.vjs-icon-replay:before {
  content: '\\f116';
}
.vjs-icon-facebook {
  font-family: VideoJS;
  font-weight: 400;
  font-style: normal;
}
.vjs-icon-facebook:before {
  content: '\\f117';
}
.vjs-icon-gplus {
  font-family: VideoJS;
  font-weight: 400;
  font-style: normal;
}
.vjs-icon-gplus:before {
  content: '\\f118';
}
.vjs-icon-linkedin {
  font-family: VideoJS;
  font-weight: 400;
  font-style: normal;
}
.vjs-icon-linkedin:before {
  content: '\\f119';
}
.vjs-icon-twitter {
  font-family: VideoJS;
  font-weight: 400;
  font-style: normal;
}
.vjs-icon-twitter:before {
  content: '\\f11a';
}
.vjs-icon-tumblr {
  font-family: VideoJS;
  font-weight: 400;
  font-style: normal;
}
.vjs-icon-tumblr:before {
  content: '\\f11b';
}
.vjs-icon-pinterest {
  font-family: VideoJS;
  font-weight: 400;
  font-style: normal;
}
.vjs-icon-pinterest:before {
  content: '\\f11c';
}
.video-js .vjs-descriptions-button .vjs-icon-placeholder,
.vjs-icon-audio-description {
  font-family: VideoJS;
  font-weight: 400;
  font-style: normal;
}
.video-js .vjs-descriptions-button .vjs-icon-placeholder:before,
.vjs-icon-audio-description:before {
  content: '\\f11d';
}
.video-js .vjs-audio-button .vjs-icon-placeholder,
.vjs-icon-audio {
  font-family: VideoJS;
  font-weight: 400;
  font-style: normal;
}
.video-js .vjs-audio-button .vjs-icon-placeholder:before,
.vjs-icon-audio:before {
  content: '\\f11e';
}
.vjs-icon-next-item {
  font-family: VideoJS;
  font-weight: 400;
  font-style: normal;
}
.vjs-icon-next-item:before {
  content: '\\f11f';
}
.vjs-icon-previous-item {
  font-family: VideoJS;
  font-weight: 400;
  font-style: normal;
}
.vjs-icon-previous-item:before {
  content: '\\f120';
}
.video-js .vjs-picture-in-picture-control .vjs-icon-placeholder,
.vjs-icon-picture-in-picture-enter {
  font-family: VideoJS;
  font-weight: 400;
  font-style: normal;
}
.video-js .vjs-picture-in-picture-control .vjs-icon-placeholder:before,
.vjs-icon-picture-in-picture-enter:before {
  content: '\\f121';
}
.video-js.vjs-picture-in-picture .vjs-picture-in-picture-control .vjs-icon-placeholder,
.vjs-icon-picture-in-picture-exit {
  font-family: VideoJS;
  font-weight: 400;
  font-style: normal;
}
.video-js.vjs-picture-in-picture .vjs-picture-in-picture-control .vjs-icon-placeholder:before,
.vjs-icon-picture-in-picture-exit:before {
  content: '\\f122';
} */
.video-js {
  display: block;
  box-sizing: border-box;
  color: #fff;
  background-color: #000;
  position: relative;
  padding: 0;
  font-size: 10px;
  line-height: 1;
  font-weight: 400;
  font-style: normal;
  font-family: Arial, Helvetica, sans-serif;
  word-break: initial;
}
.video-js:-moz-full-screen {
  position: absolute;
}
.video-js:-webkit-full-screen {
  width: 100% !important;
  height: 100% !important;
}
.video-js[tabindex='-1'] {
  outline: 0;
}
.video-js *,
.video-js :after,
.video-js :before {
  box-sizing: inherit;
}
.video-js ul {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  list-style-position: outside;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 0;
}
.video-js.vjs-1-1,
.video-js.vjs-16-9,
.video-js.vjs-4-3,
.video-js.vjs-9-16,
.video-js.vjs-fluid {
  width: 100%;
  max-width: 100%;
}
.video-js.vjs-1-1:not(.vjs-audio-only-mode),
.video-js.vjs-16-9:not(.vjs-audio-only-mode),
.video-js.vjs-4-3:not(.vjs-audio-only-mode),
.video-js.vjs-9-16:not(.vjs-audio-only-mode),
.video-js.vjs-fluid:not(.vjs-audio-only-mode) {
  height: 0;
}
.video-js.vjs-16-9:not(.vjs-audio-only-mode) {
  padding-top: 56.25%;
}
.video-js.vjs-4-3:not(.vjs-audio-only-mode) {
  padding-top: 75%;
}
.video-js.vjs-9-16:not(.vjs-audio-only-mode) {
  padding-top: 177.7777777778%;
}
.video-js.vjs-1-1:not(.vjs-audio-only-mode) {
  padding-top: 100%;
}
.video-js.vjs-fill:not(.vjs-audio-only-mode) {
  width: 100%;
  height: 100%;
}
.video-js .vjs-tech {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.video-js.vjs-audio-only-mode .vjs-tech {
  display: none;
}
body.vjs-full-window {
  padding: 0;
  margin: 0;
  height: 100%;
}
.vjs-full-window .video-js.vjs-fullscreen {
  position: fixed;
  overflow: hidden;
  z-index: 1000;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.video-js.vjs-fullscreen:not(.vjs-ios-native-fs) {
  width: 100% !important;
  height: 100% !important;
  padding-top: 0 !important;
}
.video-js.vjs-fullscreen.vjs-user-inactive {
  cursor: none;
}
.vjs-hidden {
  display: none !important;
}
.vjs-disabled {
  opacity: 0.5;
  cursor: default;
}
.video-js .vjs-offscreen {
  height: 1px;
  left: -9999px;
  position: absolute;
  top: 0;
  width: 1px;
}
.vjs-lock-showing {
  display: block !important;
  opacity: 1 !important;
  visibility: visible !important;
}
.vjs-no-js {
  padding: 20px;
  color: #fff;
  background-color: #000;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  width: 300px;
  height: 150px;
  margin: 0 auto;
}
.vjs-no-js a,
.vjs-no-js a:visited {
  color: #66a8cc;
}
.video-js .vjs-big-play-button {
  font-size: 3em;
  line-height: 1.5em;
  height: 1.63332em;
  width: 3em;
  display: block;
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 0;
  cursor: pointer;
  opacity: 1;
  border: 0.06666em solid #fff;
  background-color: #2b333f;
  background-color: rgba(43, 51, 63, 0.7);
  border-radius: 0.3em;
  transition: all 0.4s;
}
.vjs-big-play-centered .vjs-big-play-button {
  top: 50%;
  left: 50%;
  margin-top: -0.81666em;
  margin-left: -1.5em;
}
.video-js .vjs-big-play-button:focus,
.video-js:hover .vjs-big-play-button {
  border-color: #fff;
  background-color: #73859f;
  background-color: rgba(115, 133, 159, 0.5);
  transition: all 0s;
}
.vjs-controls-disabled .vjs-big-play-button,
.vjs-error .vjs-big-play-button,
.vjs-has-started .vjs-big-play-button,
.vjs-using-native-controls .vjs-big-play-button {
  display: none;
}
.vjs-has-started.vjs-paused.vjs-show-big-play-button-on-pause .vjs-big-play-button {
  display: block;
}
.video-js button {
  background: 0 0;
  border: none;
  color: inherit;
  display: inline-block;
  font-size: inherit;
  line-height: inherit;
  text-transform: none;
  text-decoration: none;
  transition: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.vjs-control .vjs-button {
  width: 100%;
  height: 100%;
}
.video-js .vjs-control.vjs-close-button {
  cursor: pointer;
  height: 3em;
  position: absolute;
  right: 0;
  top: 0.5em;
  z-index: 2;
}
.video-js .vjs-modal-dialog {
  background: rgba(0, 0, 0, 0.6);
  overflow: auto;
}
.video-js .vjs-modal-dialog.vjs-error-display {
  background: transparent;
}
.video-js .vjs-modal-dialog > * {
  box-sizing: border-box;
}
.vjs-modal-dialog .vjs-modal-dialog-content {
  font-size: 1.2em;
  line-height: 1.5;
  padding: 20px 24px;
  z-index: 1;
}
.vjs-menu-button {
  cursor: pointer;
}
.vjs-menu-button.vjs-disabled {
  cursor: default;
}
.vjs-workinghover .vjs-menu-button.vjs-disabled:hover .vjs-menu {
  display: none;
}
.vjs-menu .vjs-menu-content {
  display: block;
  padding: 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  overflow: auto;
}
.vjs-menu .vjs-menu-content > * {
  box-sizing: border-box;
}
.vjs-scrubbing .vjs-control.vjs-menu-button:hover .vjs-menu {
  display: none;
}
.vjs-menu li {
  list-style: none;
  margin: 0;
  padding: 0.2em 0;
  line-height: 1.4em;
  font-size: 1.2em;
  text-align: center;
  text-transform: lowercase;
}
.js-focus-visible .vjs-menu li.vjs-menu-item:hover,
.vjs-menu li.vjs-menu-item:focus,
.vjs-menu li.vjs-menu-item:hover {
  background-color: #73859f;
  background-color: rgba(115, 133, 159, 0.5);
}
.js-focus-visible .vjs-menu li.vjs-selected:hover,
.vjs-menu li.vjs-selected,
.vjs-menu li.vjs-selected:focus,
.vjs-menu li.vjs-selected:hover {
  background-color: #fff;
  color: #2b333f;
}
.js-focus-visible .vjs-menu :not(.vjs-selected):focus:not(.focus-visible),
.video-js .vjs-menu :not(.vjs-selected):focus:not(:focus-visible) {
  background: 0 0;
}
.vjs-menu li.vjs-menu-title {
  text-align: center;
  text-transform: uppercase;
  font-size: 1em;
  line-height: 2em;
  padding: 0;
  margin: 0 0 0.3em 0;
  font-weight: 700;
  cursor: default;
}
.vjs-menu-button-popup .vjs-menu {
  display: none;
  position: absolute;
  bottom: 0;
  width: 10em;
  left: -3em;
  height: 0;
  margin-bottom: 1.5em;
  border-top-color: rgba(43, 51, 63, 0.7);
}
.vjs-menu-button-popup .vjs-menu .vjs-menu-content {
  background-color: #2b333f;
  background-color: rgba(43, 51, 63, 0.7);
  position: absolute;
  width: 100%;
  bottom: 1.5em;
  max-height: 15em;
}
.vjs-layout-tiny .vjs-menu-button-popup .vjs-menu .vjs-menu-content,
.vjs-layout-x-small .vjs-menu-button-popup .vjs-menu .vjs-menu-content {
  max-height: 5em;
}
.vjs-layout-small .vjs-menu-button-popup .vjs-menu .vjs-menu-content {
  max-height: 10em;
}
.vjs-layout-medium .vjs-menu-button-popup .vjs-menu .vjs-menu-content {
  max-height: 14em;
}
.vjs-layout-huge .vjs-menu-button-popup .vjs-menu .vjs-menu-content,
.vjs-layout-large .vjs-menu-button-popup .vjs-menu .vjs-menu-content,
.vjs-layout-x-large .vjs-menu-button-popup .vjs-menu .vjs-menu-content {
  max-height: 25em;
}
.vjs-menu-button-popup .vjs-menu.vjs-lock-showing,
.vjs-workinghover .vjs-menu-button-popup.vjs-hover .vjs-menu {
  display: block;
}
.video-js .vjs-menu-button-inline {
  transition: all 0.4s;
  overflow: hidden;
}
.video-js .vjs-menu-button-inline:before {
  width: 2.222222222em;
}
.video-js .vjs-menu-button-inline.vjs-slider-active,
.video-js .vjs-menu-button-inline:focus,
.video-js .vjs-menu-button-inline:hover,
.video-js.vjs-no-flex .vjs-menu-button-inline {
  width: 12em;
}
.vjs-menu-button-inline .vjs-menu {
  opacity: 0;
  height: 100%;
  width: auto;
  position: absolute;
  left: 4em;
  top: 0;
  padding: 0;
  margin: 0;
  transition: all 0.4s;
}
.vjs-menu-button-inline.vjs-slider-active .vjs-menu,
.vjs-menu-button-inline:focus .vjs-menu,
.vjs-menu-button-inline:hover .vjs-menu {
  display: block;
  opacity: 1;
}
.vjs-no-flex .vjs-menu-button-inline .vjs-menu {
  display: block;
  opacity: 1;
  position: relative;
  width: auto;
}
.vjs-no-flex .vjs-menu-button-inline.vjs-slider-active .vjs-menu,
.vjs-no-flex .vjs-menu-button-inline:focus .vjs-menu,
.vjs-no-flex .vjs-menu-button-inline:hover .vjs-menu {
  width: auto;
}
.vjs-menu-button-inline .vjs-menu-content {
  width: auto;
  height: 100%;
  margin: 0;
  overflow: hidden;
}
.video-js .vjs-control-bar {
  display: none;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 12px 16px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%);
}
.vjs-audio-only-mode .vjs-control-bar,
.vjs-has-started .vjs-control-bar {
  display: flex;
  align-items: center;
  visibility: visible;
  opacity: 1;
  transition: visibility 0.1s, opacity 0.1s;
}
.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {
  visibility: visible;
  opacity: 0;
  pointer-events: none;
  transition: visibility 1s, opacity 1s;
}
.vjs-controls-disabled .vjs-control-bar,
.vjs-error .vjs-control-bar,
.vjs-using-native-controls .vjs-control-bar {
  display: none !important;
}
.vjs-audio-only-mode.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar,
.vjs-audio.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {
  opacity: 1;
  visibility: visible;
}
.vjs-has-started.vjs-no-flex .vjs-control-bar {
  display: table;
}
.video-js .vjs-control {
  position: relative;
  text-align: center;
  margin: 0;
  padding: 0;
  flex: none;
}
.video-js .vjs-control.vjs-visible-text {
  width: auto;
  padding-left: 16px;
  padding-right: 16px;
}
.vjs-button > .vjs-icon-placeholder:before {
  font-size: 20px;
}
.vjs-button > .vjs-icon-placeholder {
  display: block;
}
.video-js .vjs-control:focus,
.video-js .vjs-control:focus:before,
.video-js .vjs-control:hover:before {
  text-shadow: 0 0 1em #fff;
}
.video-js :not(.vjs-visible-text) > .vjs-control-text {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
.vjs-no-flex .vjs-control {
  display: table-cell;
  vertical-align: middle;
}
.video-js .vjs-custom-control-spacer {
  display: none;
}
.video-js .vjs-progress-control {
  cursor: pointer;
  flex: auto;
  display: flex;
  align-items: center;
  min-width: 4em;
  touch-action: none;
}
.video-js .vjs-progress-control.disabled {
  cursor: default;
}
.vjs-live .vjs-playback-rate,
.vjs-live .vjs-progress-control {
  display: none !important;
}
.vjs-liveui .vjs-progress-control {
  display: flex;
  align-items: center;
}
.vjs-no-flex .vjs-progress-control {
  width: auto;
}
.video-js .vjs-progress-control .vjs-progress-input {
  width: 100%;
  height: 20px;
  background: transparent;
  -webkit-appearance: none;
  cursor: pointer;
}
.video-js .vjs-progress-control .vjs-progress-input::-webkit-slider-container {
  overflow: hidden;
}
.video-js .vjs-progress-control .vjs-progress-input::-webkit-slider-runnable-track {
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.75);
  height: 2px;
}
.video-js .vjs-progress-control .vjs-progress-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 14px;
  width: 14px;
  background: #fff;
  border-radius: 50%;
  transition: 0.2s;
  margin-top: -6px;
  border: 1px solid transparent;
  border-image: linear-gradient(#d3b467, #d3b467) 0 fill / 6px 14px 6px 0 / 0 0 0 99vw; /*\u7ED8\u5236\u5143\u7D20\u5916\u77E9\u5F62*/
}
.video-js .vjs-progress-control .vjs-progress-input::-moz-range-track {
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.75);
  height: 2px;
}
.video-js .vjs-progress-control .vjs-progress-input::-moz-range-progress {
  background-color: #d3b467;
}
.video-js .vjs-progress-control .vjs-progress-input::-moz-range-thumb {
  height: 14px;
  width: 14px;
  background: #fff;
  border-radius: 50%;
  border: none;
}
/* .video-js .vjs-progress-holder {
  flex: auto;
  transition: all 0.2s;
  height: 0.3em;
}
.video-js .vjs-progress-control .vjs-progress-holder {
  margin: 0 10px;
}
.video-js .vjs-progress-control:hover .vjs-progress-holder {
  font-size: 1.6666666667em;
}
.video-js .vjs-progress-control:hover .vjs-progress-holder.disabled {
  font-size: 1em;
}
.video-js .vjs-progress-holder .vjs-load-progress,
.video-js .vjs-progress-holder .vjs-load-progress div,
.video-js .vjs-progress-holder .vjs-play-progress {
  position: absolute;
  display: block;
  height: 100%;
  margin: 0;
  padding: 0;
  width: 0;
} */
/* .video-js .vjs-play-progress {
  background: #d3b467;
}
.video-js .vjs-play-progress:before {
  font-size: 0.9em;
  position: absolute;
  right: -0.5em;
  top: -0.5em;
  z-index: 1;
}
.video-js .vjs-progress-control:hover .vjs-play-progress:before {
  top: -0.333333em;
}
.video-js .vjs-load-progress {
  background: #d3b467;
}
.video-js .vjs-load-progress div {
  background: rgba(115, 133, 159, 0.75);
  background: rgba(115, 133, 159, 0.5);
}
.video-js .vjs-time-tooltip {
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 0.3em;
  color: #000;
  float: right;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1em;
  padding: 6px 8px 8px 8px;
  pointer-events: none;
  position: absolute;
  top: -3.4em;
  visibility: hidden;
  z-index: 1;
}
.video-js .vjs-progress-holder:focus .vjs-time-tooltip {
  display: none;
}
.video-js .vjs-progress-control:hover .vjs-progress-holder:focus .vjs-time-tooltip,
.video-js .vjs-progress-control:hover .vjs-time-tooltip {
  display: block;
  font-size: 0.6em;
  visibility: visible;
}
.video-js .vjs-progress-control.disabled:hover .vjs-time-tooltip {
  font-size: 1em;
}
.video-js .vjs-progress-control .vjs-mouse-display {
  display: none;
  position: absolute;
  width: 1px;
  height: 100%;
  background-color: #000;
  z-index: 1;
}
.vjs-no-flex .vjs-progress-control .vjs-mouse-display {
  z-index: 0;
}
.video-js .vjs-progress-control:hover .vjs-mouse-display {
  display: block;
}
.video-js.vjs-user-inactive .vjs-progress-control .vjs-mouse-display {
  visibility: hidden;
  opacity: 0;
  transition: visibility 1s, opacity 1s;
}
.video-js.vjs-user-inactive.vjs-no-flex .vjs-progress-control .vjs-mouse-display {
  display: none;
}
.vjs-mouse-display .vjs-time-tooltip {
  color: #fff;
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.8);
}
.video-js .vjs-slider {
  position: relative;
  cursor: pointer;
  padding: 0;
  margin: 0 0.45em 0 0.45em;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: #73859f;
  background: rgba(255, 255, 255, 0.75);
}
.video-js .vjs-slider.disabled {
  cursor: default;
}
.video-js .vjs-slider:focus {
  text-shadow: 0 0 1em #fff;
  box-shadow: 0 0 1em #fff;
} */
/* .video-js .vjs-mute-control {
  cursor: pointer;
  flex: none;
}
.video-js .vjs-volume-control {
  cursor: pointer;
  margin-right: 1em;
  display: flex;
}
.video-js .vjs-volume-control.vjs-volume-horizontal {
  width: 5em;
}
.video-js .vjs-volume-panel .vjs-volume-control {
  visibility: visible;
  opacity: 0;
  width: 1px;
  height: 1px;
  margin-left: -1px;
}
.video-js .vjs-volume-panel {
  transition: width 1s;
}
.video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active,
.video-js .vjs-volume-panel .vjs-volume-control:active,
.video-js .vjs-volume-panel.vjs-hover .vjs-mute-control ~ .vjs-volume-control,
.video-js .vjs-volume-panel.vjs-hover .vjs-volume-control,
.video-js .vjs-volume-panel:active .vjs-volume-control,
.video-js .vjs-volume-panel:focus .vjs-volume-control {
  visibility: visible;
  opacity: 1;
  position: relative;
  transition: visibility 0.1s, opacity 0.1s, height 0.1s, width 0.1s, left 0s, top 0s;
}
.video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-horizontal,
.video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-horizontal,
.video-js .vjs-volume-panel.vjs-hover .vjs-mute-control ~ .vjs-volume-control.vjs-volume-horizontal,
.video-js .vjs-volume-panel.vjs-hover .vjs-volume-control.vjs-volume-horizontal,
.video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-horizontal,
.video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-horizontal {
  width: 5em;
  height: 3em;
  margin-right: 0;
}
.video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-vertical,
.video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-vertical,
.video-js .vjs-volume-panel.vjs-hover .vjs-mute-control ~ .vjs-volume-control.vjs-volume-vertical,
.video-js .vjs-volume-panel.vjs-hover .vjs-volume-control.vjs-volume-vertical,
.video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-vertical,
.video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-vertical {
  left: -3.5em;
  transition: left 0s;
}
.video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover,
.video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active,
.video-js .vjs-volume-panel.vjs-volume-panel-horizontal:active {
  width: 10em;
  transition: width 0.1s;
}
.video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-mute-toggle-only {
  width: 4em;
}
.video-js .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical {
  height: 8em;
  width: 3em;
  left: -3000em;
  transition: visibility 1s, opacity 1s, height 1s 1s, width 1s 1s, left 1s 1s, top 1s 1s;
}
.video-js .vjs-volume-panel .vjs-volume-control.vjs-volume-horizontal {
  transition: visibility 1s, opacity 1s, height 1s 1s, width 1s, left 1s 1s, top 1s 1s;
}
.video-js.vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-horizontal {
  width: 5em;
  height: 3em;
  visibility: visible;
  opacity: 1;
  position: relative;
  transition: none;
}
.video-js.vjs-no-flex .vjs-volume-control.vjs-volume-vertical,
.video-js.vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical {
  position: absolute;
  bottom: 3em;
  left: 0.5em;
}
.video-js .vjs-volume-panel {
  display: flex;
}
.video-js .vjs-volume-bar {
  margin: 1.35em 0.45em;
}
.vjs-volume-bar.vjs-slider-horizontal {
  width: 5em;
  height: 0.3em;
}
.vjs-volume-bar.vjs-slider-vertical {
  width: 0.3em;
  height: 5em;
  margin: 1.35em auto;
}
.video-js .vjs-volume-level {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #fff;
}
.video-js .vjs-volume-level:before {
  position: absolute;
  font-size: 0.9em;
  z-index: 1;
}
.vjs-slider-vertical .vjs-volume-level {
  width: 0.3em;
}
.vjs-slider-vertical .vjs-volume-level:before {
  top: -0.5em;
  left: -0.3em;
  z-index: 1;
}
.vjs-slider-horizontal .vjs-volume-level {
  height: 0.3em;
}
.vjs-slider-horizontal .vjs-volume-level:before {
  top: -0.3em;
  right: -0.5em;
}
.video-js .vjs-volume-panel.vjs-volume-panel-vertical {
  width: 4em;
}
.vjs-volume-bar.vjs-slider-vertical .vjs-volume-level {
  height: 100%;
}
.vjs-volume-bar.vjs-slider-horizontal .vjs-volume-level {
  width: 100%;
}
.video-js .vjs-volume-vertical {
  width: 3em;
  height: 8em;
  bottom: 8em;
  background-color: #2b333f;
  background-color: rgba(43, 51, 63, 0.7);
}
.video-js .vjs-volume-horizontal .vjs-menu {
  left: -2em;
}
.video-js .vjs-volume-tooltip {
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 0.3em;
  color: #000;
  float: right;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1em;
  padding: 6px 8px 8px 8px;
  pointer-events: none;
  position: absolute;
  top: -3.4em;
  visibility: hidden;
  z-index: 1;
}
.video-js .vjs-volume-control:hover .vjs-progress-holder:focus .vjs-volume-tooltip,
.video-js .vjs-volume-control:hover .vjs-volume-tooltip {
  display: block;
  font-size: 1em;
  visibility: visible;
}
.video-js .vjs-volume-vertical:hover .vjs-progress-holder:focus .vjs-volume-tooltip,
.video-js .vjs-volume-vertical:hover .vjs-volume-tooltip {
  left: 1em;
  top: -12px;
}
.video-js .vjs-volume-control.disabled:hover .vjs-volume-tooltip {
  font-size: 1em;
}
.video-js .vjs-volume-control .vjs-mouse-display {
  display: none;
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #000;
  z-index: 1;
}
.video-js .vjs-volume-horizontal .vjs-mouse-display {
  width: 1px;
  height: 100%;
}
.vjs-no-flex .vjs-volume-control .vjs-mouse-display {
  z-index: 0;
}
.video-js .vjs-volume-control:hover .vjs-mouse-display {
  display: block;
}
.video-js.vjs-user-inactive .vjs-volume-control .vjs-mouse-display {
  visibility: hidden;
  opacity: 0;
  transition: visibility 1s, opacity 1s;
}
.video-js.vjs-user-inactive.vjs-no-flex .vjs-volume-control .vjs-mouse-display {
  display: none;
}
.vjs-mouse-display .vjs-volume-tooltip {
  color: #fff;
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.8);
} */
.vjs-poster {
  display: inline-block;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
  background-color: #000;
  cursor: pointer;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
}
.vjs-has-started .vjs-poster,
.vjs-using-native-controls .vjs-poster {
  display: none;
}
.vjs-audio.vjs-has-started .vjs-poster,
.vjs-has-started.vjs-audio-poster-mode .vjs-poster {
  display: block;
}
.video-js .vjs-live-control {
  display: flex;
  align-items: flex-start;
  flex: 1 1 100%;
  font-size: 1em;
  line-height: 3em;
}
.vjs-no-flex .vjs-live-control {
  display: table-cell;
  width: auto;
  text-align: left;
}
.video-js.vjs-liveui .vjs-live-control,
.video-js:not(.vjs-live) .vjs-live-control {
  display: none;
}
.video-js .vjs-seek-to-live-control {
  align-items: center;
  cursor: pointer;
  flex: none;
  display: inline-flex;
  height: 100%;
  padding-left: 0.5em;
  padding-right: 0.5em;
  font-size: 1em;
  line-height: 3em;
  width: auto;
  min-width: 4em;
}
.vjs-no-flex .vjs-seek-to-live-control {
  display: table-cell;
  width: auto;
  text-align: left;
}
.video-js.vjs-live:not(.vjs-liveui) .vjs-control-bar .vjs-seek-to-live-control,
.video-js:not(.vjs-live) .vjs-control-bar .vjs-seek-to-live-control {
  display: none;
}
.vjs-seek-to-live-control.vjs-control.vjs-at-live-edge {
  cursor: auto;
}
.vjs-seek-to-live-control .vjs-icon-placeholder {
  margin-right: 0.5em;
  color: #888;
}
.vjs-seek-to-live-control.vjs-control.vjs-at-live-edge .vjs-icon-placeholder {
  color: red;
}
.video-js .vjs-time-control {
  flex: none;
  font-size: 1em;
  min-width: 4em;
  width: auto;
  padding-left: 16px;
  padding-right: 8px;
  justify-content: flex-end;
}
.vjs-live .vjs-time-control {
  display: none;
}
/* .video-js .vjs-current-time,
.vjs-no-flex .vjs-current-time {
  display: none;
} */
.video-js .vjs-duration,
.vjs-no-flex .vjs-duration {
  display: none;
}
.vjs-time-divider {
  display: none;
  line-height: 3em;
}
.vjs-live .vjs-time-divider {
  display: none;
}
.video-js .vjs-play-control {
  cursor: pointer;
}
.video-js .vjs-play-control .vjs-icon-placeholder {
  flex: none;
}
.vjs-text-track-display {
  position: absolute;
  bottom: 3em;
  left: 0;
  right: 0;
  top: 0;
  pointer-events: none;
}
.video-js.vjs-controls-disabled .vjs-text-track-display,
.video-js.vjs-user-inactive.vjs-playing .vjs-text-track-display {
  bottom: 1em;
}
.video-js .vjs-text-track {
  font-size: 1.4em;
  text-align: center;
  margin-bottom: 0.1em;
}
.vjs-subtitles {
  color: #fff;
}
.vjs-captions {
  color: #fc6;
}
.vjs-tt-cue {
  display: block;
}
video::-webkit-media-text-track-display {
  transform: translateY(-3em);
}
.video-js.vjs-controls-disabled video::-webkit-media-text-track-display,
.video-js.vjs-user-inactive.vjs-playing video::-webkit-media-text-track-display {
  transform: translateY(-1.5em);
}
.video-js .vjs-picture-in-picture-control {
  cursor: pointer;
  flex: none;
}
.video-js.vjs-audio-only-mode .vjs-picture-in-picture-control {
  display: none;
}
.video-js .vjs-fullscreen-control {
  cursor: pointer;
  flex: none;
}
.video-js.vjs-audio-only-mode .vjs-fullscreen-control {
  display: none;
}
/* .vjs-playback-rate .vjs-playback-rate-value,
.vjs-playback-rate > .vjs-menu-button {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.vjs-playback-rate .vjs-playback-rate-value {
  pointer-events: none;
  font-size: 1.5em;
  line-height: 45px;
  text-align: center;
}
.vjs-playback-rate .vjs-menu {
  width: 4em;
  left: 0;
} */
.vjs-error .vjs-error-display .vjs-modal-dialog-content {
  font-size: 1.4em;
  text-align: center;
}
.vjs-error .vjs-error-display:before {
  color: #fff;
  content: 'X';
  font-family: Arial, Helvetica, sans-serif;
  font-size: 4em;
  left: 0;
  line-height: 1;
  margin-top: -0.5em;
  position: absolute;
  text-shadow: 0.05em 0.05em 0.1em #000;
  text-align: center;
  top: 50%;
  vertical-align: middle;
  width: 100%;
}
.vjs-loading-spinner {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -25px 0 0 -25px;
  opacity: 0.85;
  text-align: left;
  border: 6px solid rgba(43, 51, 63, 0.7);
  box-sizing: border-box;
  background-clip: padding-box;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  visibility: hidden;
}
.vjs-seeking .vjs-loading-spinner,
.vjs-waiting .vjs-loading-spinner {
  display: block;
  -webkit-animation: vjs-spinner-show 0s linear 0.3s forwards;
  animation: vjs-spinner-show 0s linear 0.3s forwards;
}
.vjs-loading-spinner:after,
.vjs-loading-spinner:before {
  content: '';
  position: absolute;
  margin: -6px;
  box-sizing: inherit;
  width: inherit;
  height: inherit;
  border-radius: inherit;
  opacity: 1;
  border: inherit;
  border-color: transparent;
  border-top-color: #fff;
}
.vjs-seeking .vjs-loading-spinner:after,
.vjs-seeking .vjs-loading-spinner:before,
.vjs-waiting .vjs-loading-spinner:after,
.vjs-waiting .vjs-loading-spinner:before {
  -webkit-animation: vjs-spinner-spin 1.1s cubic-bezier(0.6, 0.2, 0, 0.8) infinite, vjs-spinner-fade 1.1s linear infinite;
  animation: vjs-spinner-spin 1.1s cubic-bezier(0.6, 0.2, 0, 0.8) infinite, vjs-spinner-fade 1.1s linear infinite;
}
.vjs-seeking .vjs-loading-spinner:before,
.vjs-waiting .vjs-loading-spinner:before {
  border-top-color: #fff;
}
.vjs-seeking .vjs-loading-spinner:after,
.vjs-waiting .vjs-loading-spinner:after {
  border-top-color: #fff;
  -webkit-animation-delay: 0.44s;
  animation-delay: 0.44s;
}
@keyframes vjs-spinner-show {
  to {
    visibility: visible;
  }
}
@-webkit-keyframes vjs-spinner-show {
  to {
    visibility: visible;
  }
}
@keyframes vjs-spinner-spin {
  100% {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes vjs-spinner-spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes vjs-spinner-fade {
  0% {
    border-top-color: #73859f;
  }
  20% {
    border-top-color: #73859f;
  }
  35% {
    border-top-color: #fff;
  }
  60% {
    border-top-color: #73859f;
  }
  100% {
    border-top-color: #73859f;
  }
}
@-webkit-keyframes vjs-spinner-fade {
  0% {
    border-top-color: #73859f;
  }
  20% {
    border-top-color: #73859f;
  }
  35% {
    border-top-color: #fff;
  }
  60% {
    border-top-color: #73859f;
  }
  100% {
    border-top-color: #73859f;
  }
}
.video-js.vjs-audio-only-mode .vjs-captions-button {
  display: none;
}
.vjs-chapters-button .vjs-menu ul {
  width: 24em;
}
.video-js.vjs-audio-only-mode .vjs-descriptions-button {
  display: none;
}
.video-js .vjs-subs-caps-button + .vjs-menu .vjs-captions-menu-item .vjs-menu-item-text .vjs-icon-placeholder {
  vertical-align: middle;
  display: inline-block;
  margin-bottom: -0.1em;
}
.video-js .vjs-subs-caps-button + .vjs-menu .vjs-captions-menu-item .vjs-menu-item-text .vjs-icon-placeholder:before {
  font-family: VideoJS;
  content: '\uF10D';
  font-size: 1.5em;
  line-height: inherit;
}
.video-js.vjs-audio-only-mode .vjs-subs-caps-button {
  display: none;
}
.video-js .vjs-audio-button + .vjs-menu .vjs-main-desc-menu-item .vjs-menu-item-text .vjs-icon-placeholder {
  vertical-align: middle;
  display: inline-block;
  margin-bottom: -0.1em;
}
.video-js .vjs-audio-button + .vjs-menu .vjs-main-desc-menu-item .vjs-menu-item-text .vjs-icon-placeholder:before {
  font-family: VideoJS;
  content: ' \uF11D';
  font-size: 1.5em;
  line-height: inherit;
}
.video-js.vjs-layout-small .vjs-current-time,
.video-js.vjs-layout-small .vjs-duration,
.video-js.vjs-layout-small .vjs-playback-rate,
.video-js.vjs-layout-small .vjs-remaining-time,
.video-js.vjs-layout-small .vjs-time-divider,
.video-js.vjs-layout-small .vjs-volume-control,
.video-js.vjs-layout-tiny .vjs-current-time,
.video-js.vjs-layout-tiny .vjs-duration,
.video-js.vjs-layout-tiny .vjs-playback-rate,
.video-js.vjs-layout-tiny .vjs-remaining-time,
.video-js.vjs-layout-tiny .vjs-time-divider,
.video-js.vjs-layout-tiny .vjs-volume-control,
.video-js.vjs-layout-x-small .vjs-current-time,
.video-js.vjs-layout-x-small .vjs-duration,
.video-js.vjs-layout-x-small .vjs-playback-rate,
.video-js.vjs-layout-x-small .vjs-remaining-time,
.video-js.vjs-layout-x-small .vjs-time-divider,
.video-js.vjs-layout-x-small .vjs-volume-control {
  display: none;
}
.video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover,
.video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active,
.video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal:active,
.video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal:hover,
.video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover,
.video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active,
.video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal:active,
.video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal:hover,
.video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover,
.video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active,
.video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal:active,
.video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal:hover {
  width: auto;
  width: initial;
}
.video-js.vjs-layout-tiny .vjs-progress-control,
.video-js.vjs-layout-x-small .vjs-progress-control {
  display: none;
}
.video-js.vjs-layout-x-small .vjs-custom-control-spacer {
  flex: auto;
  display: block;
}
.video-js.vjs-layout-x-small.vjs-no-flex .vjs-custom-control-spacer {
  width: auto;
}
.vjs-modal-dialog.vjs-text-track-settings {
  background-color: #2b333f;
  background-color: rgba(43, 51, 63, 0.75);
  color: #fff;
  height: 70%;
}
.vjs-text-track-settings .vjs-modal-dialog-content {
  display: table;
}
.vjs-text-track-settings .vjs-track-settings-colors,
.vjs-text-track-settings .vjs-track-settings-controls,
.vjs-text-track-settings .vjs-track-settings-font {
  display: table-cell;
}
.vjs-text-track-settings .vjs-track-settings-controls {
  text-align: right;
  vertical-align: bottom;
}
@supports (display: grid) {
  .vjs-text-track-settings .vjs-modal-dialog-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    padding: 20px 24px 0 24px;
  }
  .vjs-track-settings-controls .vjs-default-button {
    margin-bottom: 20px;
  }
  .vjs-text-track-settings .vjs-track-settings-controls {
    grid-column: 1/-1;
  }
  .vjs-layout-small .vjs-text-track-settings .vjs-modal-dialog-content,
  .vjs-layout-tiny .vjs-text-track-settings .vjs-modal-dialog-content,
  .vjs-layout-x-small .vjs-text-track-settings .vjs-modal-dialog-content {
    grid-template-columns: 1fr;
  }
}
.vjs-track-setting > select {
  margin-right: 1em;
  margin-bottom: 0.5em;
}
.vjs-text-track-settings fieldset {
  margin: 5px;
  padding: 3px;
  border: none;
}
.vjs-text-track-settings fieldset span {
  display: inline-block;
}
.vjs-text-track-settings fieldset span > select {
  max-width: 7.3em;
}
.vjs-text-track-settings legend {
  color: #fff;
  margin: 0 0 5px 0;
}
.vjs-text-track-settings .vjs-label {
  position: absolute;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  display: block;
  margin: 0 0 5px 0;
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;
}
.vjs-track-settings-controls button:active,
.vjs-track-settings-controls button:focus {
  outline-style: solid;
  outline-width: medium;
  background-image: linear-gradient(0deg, #fff 88%, #73859f 100%);
}
.vjs-track-settings-controls button:hover {
  color: rgba(43, 51, 63, 0.75);
}
.vjs-track-settings-controls button {
  background-color: #fff;
  background-image: linear-gradient(-180deg, #fff 88%, #73859f 100%);
  color: #2b333f;
  cursor: pointer;
  border-radius: 2px;
}
.vjs-track-settings-controls .vjs-default-button {
  margin-right: 1em;
}
@media print {
  .video-js > :not(.vjs-tech):not(.vjs-poster) {
    visibility: hidden;
  }
}
.vjs-resize-manager {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  z-index: -1000;
}
.js-focus-visible .video-js :focus:not(.focus-visible) {
  outline: 0;
}
.video-js :focus:not(:focus-visible) {
  outline: 0;
}
/* \u81EA\u5B9A\u4E49\u6837\u5F0F */
/* \u76F4\u64AD */
.vjs-control-bar .vjs-button.vjs-visible-text {
  user-select: none;
  cursor: pointer;
  font-weight: bold;
}
.vjs-rsc-dialog .vjs-modal-dialog-content {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.vjs-rsc-dialog-content-buttons {
  margin-top: 8px;
}
.video-js .vjs-rsc-dialog-content-buttons .vjs-button {
  width: 48px;
  height: 48px;
  background: rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  padding: 0;
  cursor: pointer;
}
.video-js .vjs-rsc-dialog-content-buttons .vjs-button.vjs-selected {
  color: #d3b467;
  font-weight: bold;
  border-bottom: 4px solid #d3b467;
  height: 44px;
}
.vjs-rsc-dialog-content-buttons .vjs-button + .vjs-button {
  margin-left: 12px;
}
.video-js .vjs-control-bar .vjs-control {
  padding: 0 8px;
  height: 100%;
  display: inline-flex;
  align-items: center;
}
.video-js .vjs-control-bar .vjs-control.vjs-progress-control {
  padding: 0;
}
.video-js .vjs-control-bar .vjs-control:first-child {
  padding-left: 0;
}
.video-js .vjs-control-bar .vjs-control:last-child {
  padding-right: 0;
}
.video-js .vjs-alert-dialog {
  position: absolute;
  bottom: 36px;
  left: 16px;
  background: rgba(0, 0, 0, 0.84);
  border-radius: 1px;
  font-size: 12px;
  padding: 4px 10px;
}
.video-js .vjs-rsc-btn {
  padding: 0;
  cursor: pointer;
  width: auto;
  height: auto;
}
.video-js .vjs-button {
  user-select: none;
  outline: none;
}
.video-js .vjs-alert-dialog .vjs-rsc-btn {
  color: #cdb067;
  padding: 0;
}
.video-js .vjs-inline {
  display: inline;
}
.video-js .vjs-custom-div {
  line-height: normal;
}
.video-js.vjs-error .vjs-error-display:before {
  display: none;
}
.video-js.vjs-error .vjs-error-display .vjs-modal-dialog-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.video-js.vjs-error .vjs-error-display .vjs-error-code {
  color: #444;
  margin-top: 0.5em;
}
.video-js.vjs-error .vjs-error-display .vjs-rsc-btn {
  width: 8.5em;
  height: 2.4em;
  background: linear-gradient(270deg, #e5ca93 0%, #cf9756 100%);
  border-radius: 21px;
  margin-top: 1em;
  color: #17032b;
}
.vjs-error-btn-content {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
.video-js.vjs-error .vjs-error-display .vjs-rsc-btn.network-btn {
  background: none;
  border: 1px solid #cdb067;
  color: #d3b467;
}
.vjs-error-display.vjs-error-waiting .vjs-error-title {
  margin-top: 20px;
}
.vjs-error-waiting-content {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}
.vjs-error-waiting-content:before {
  font-family: VideoJS;
  font-weight: 400;
  font-style: normal;
  content: '\\e906';
  font-size: 30px;
  color: #4d435f;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-42px) translateX(-50%);
}
.video-js .vjs-button {
  user-select: none;
  outline: none;
  background: #0000;
  color: #fff;
  border: 0;
}
.video-js.vjs-seeking .vjs-big-play-button,
.video-js.vjs-waiting .vjs-big-play-button {
  display: none;
}

.video-js .vjs-control-bar .vjs-controlbar-placeholder {
  flex: 1;
  display: none;
}
.video-js.vjs-init .vjs-control-bar .vjs-controlbar-placeholder {
  display: block;
}
.video-js .vjs-live-control.vjs-hidden ~ .vjs-controlbar-placeholder {
  display: block;
}
.video-js .vjs-control-bar .vjs-progress-control ~ .vjs-controlbar-placeholder {
  display: none;
}

.video-js .vjs-big-play-button {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
`,cn=()=>{videojs.addLanguage("zh-CN",{"Audio Player":"\u97F3\u9891\u64AD\u653E\u5668","Video Player":"\u89C6\u9891\u64AD\u653E\u5668",Play:"\u64AD\u653E",Pause:"\u6682\u505C",Replay:"\u91CD\u65B0\u64AD\u653E","Current Time":"\u5F53\u524D\u65F6\u95F4",Duration:"\u65F6\u957F","Remaining Time":"\u5269\u4F59\u65F6\u95F4","Stream Type":"\u5A92\u4F53\u6D41\u7C7B\u578B",LIVE:"\u76F4\u64AD",Loaded:"\u52A0\u8F7D\u5B8C\u6210",Progress:"\u8FDB\u5EA6","Progress Bar":"\u8FDB\u5EA6\u6761","progress bar timing: currentTime={1} duration={2}":"{1}/{2}",Fullscreen:"\u5168\u5C4F","Non-Fullscreen":"\u9000\u51FA\u5168\u5C4F","Picture-in-Picture":"\u753B\u4E2D\u753B","Exit Picture-in-Picture":"\u9000\u51FA\u753B\u4E2D\u753B",Mute:"\u9759\u97F3",Unmute:"\u53D6\u6D88\u9759\u97F3","Playback Rate":"\u64AD\u653E\u901F\u5EA6",Subtitles:"\u5B57\u5E55","subtitles off":"\u5173\u95ED\u5B57\u5E55",Captions:"\u5185\u5D4C\u5B57\u5E55","captions off":"\u5173\u95ED\u5185\u5D4C\u5B57\u5E55",Chapters:"\u8282\u76EE\u6BB5\u843D",Descriptions:"\u63CF\u8FF0","descriptions off":"\u5173\u95ED\u63CF\u8FF0","Audio Track":"\u97F3\u8F68","Volume Level":"\u97F3\u91CF","You aborted the media playback":"\u89C6\u9891\u64AD\u653E\u88AB\u7EC8\u6B62","A network error caused the media download to fail part-way.":"\u7F51\u7EDC\u9519\u8BEF\u5BFC\u81F4\u89C6\u9891\u4E0B\u8F7D\u4E2D\u9014\u5931\u8D25\u3002","The media could not be loaded, either because the server or network failed or because the format is not supported.":"\u89C6\u9891\u56E0\u683C\u5F0F\u4E0D\u652F\u6301\u6216\u8005\u670D\u52A1\u5668\u6216\u7F51\u7EDC\u7684\u95EE\u9898\u65E0\u6CD5\u52A0\u8F7D\u3002","The media playback was aborted due to a corruption problem or because the media used features your browser did not support.":"\u7531\u4E8E\u89C6\u9891\u6587\u4EF6\u635F\u574F\u6216\u662F\u8BE5\u89C6\u9891\u4F7F\u7528\u4E86\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u7684\u529F\u80FD\uFF0C\u64AD\u653E\u7EC8\u6B62\u3002","No compatible source was found for this media.":"\u65E0\u6CD5\u627E\u5230\u6B64\u89C6\u9891\u517C\u5BB9\u7684\u6E90\u3002","The media is encrypted and we do not have the keys to decrypt it.":"\u89C6\u9891\u5DF2\u52A0\u5BC6\uFF0C\u65E0\u6CD5\u89E3\u5BC6\u3002","Play Video":"\u64AD\u653E\u89C6\u9891",Close:"\u5173\u95ED","Close Modal Dialog":"\u5173\u95ED\u5F39\u7A97","Modal Window":"\u5F39\u7A97","This is a modal window":"\u8FD9\u662F\u4E00\u4E2A\u5F39\u7A97","This modal can be closed by pressing the Escape key or activating the close button.":"\u53EF\u4EE5\u6309ESC\u6309\u952E\u6216\u542F\u7528\u5173\u95ED\u6309\u94AE\u6765\u5173\u95ED\u6B64\u5F39\u7A97\u3002",", opens captions settings dialog":", \u5F00\u542F\u6807\u9898\u8BBE\u7F6E\u5F39\u7A97",", opens subtitles settings dialog":", \u5F00\u542F\u5B57\u5E55\u8BBE\u7F6E\u5F39\u7A97",", opens descriptions settings dialog":", \u5F00\u542F\u63CF\u8FF0\u8BBE\u7F6E\u5F39\u7A97",", selected":", \u9009\u62E9","captions settings":"\u5B57\u5E55\u8BBE\u5B9A","subtitles settings":"\u5B57\u5E55\u8BBE\u5B9A","descriptions settings":"\u63CF\u8FF0\u8BBE\u5B9A",Text:"\u6587\u5B57",White:"\u767D",Black:"\u9ED1",Red:"\u7EA2",Green:"\u7EFF",Blue:"\u84DD",Yellow:"\u9EC4",Magenta:"\u7D2B\u7EA2",Cyan:"\u9752",Background:"\u80CC\u666F",Window:"\u7A97\u53E3",Transparent:"\u900F\u660E","Semi-Transparent":"\u534A\u900F\u660E",Opaque:"\u4E0D\u900F\u660E","Font Size":"\u5B57\u4F53\u5C3A\u5BF8","Text Edge Style":"\u5B57\u4F53\u8FB9\u7F18\u6837\u5F0F",None:"\u65E0",Raised:"\u6D6E\u96D5",Depressed:"\u538B\u4F4E",Uniform:"\u5747\u5300",Dropshadow:"\u4E0B\u9634\u5F71","Font Family":"\u5B57\u4F53\u5E93","Proportional Sans-Serif":"\u6BD4\u4F8B\u65E0\u7EC6\u4F53","Monospace Sans-Serif":"\u5355\u95F4\u9694\u65E0\u7EC6\u4F53","Proportional Serif":"\u6BD4\u4F8B\u7EC6\u4F53","Monospace Serif":"\u5355\u95F4\u9694\u7EC6\u4F53",Casual:"\u8212\u9002",Script:"\u624B\u5199\u4F53","Small Caps":"\u5C0F\u578B\u5927\u5199\u5B57\u4F53",Reset:"\u91CD\u7F6E","restore all settings to the default values":"\u6062\u590D\u5168\u90E8\u8BBE\u5B9A\u81F3\u9884\u8BBE\u503C",Done:"\u5B8C\u6210","Caption Settings Dialog":"\u5B57\u5E55\u8BBE\u5B9A\u7A97\u53E3","Beginning of dialog window. Escape will cancel and close the window.":"\u6253\u5F00\u5BF9\u8BDD\u7A97\u53E3\u3002Escape\u952E\u5C06\u53D6\u6D88\u5E76\u5173\u95ED\u5BF9\u8BDD\u7A97\u53E3","End of dialog window.":"\u7ED3\u675F\u5BF9\u8BDD\u7A97\u53E3","Seek to live, currently behind live":"\u5C1D\u8BD5\u76F4\u64AD\uFF0C\u5F53\u524D\u4E3A\u5EF6\u65F6\u64AD\u653E","Seek to live, currently playing live":"\u5C1D\u8BD5\u76F4\u64AD\uFF0C\u5F53\u524D\u4E3A\u5B9E\u65F6\u64AD\u653E","{1} is loading.":"\u6B63\u5728\u52A0\u8F7D {1}\u3002","Check the network":"\u7F51\u7EDC\u68C0\u6D4B","Connection failed, Check your network":"\u7F51\u7EDC\u5F02\u5E38\uFF0C\u8BF7\u68C0\u67E5\u60A8\u7684\u7F51\u7EDC","Connection failed, check your network or try again later":"\u7F51\u7EDC\u4E0D\u7A33\u5B9A\uFF0C\u8BF7\u5C1D\u8BD5\u5237\u65B0","Loading slow, recommended to reduce the quality":"\u52A0\u8F7D\u7F13\u6162\uFF0C\u5EFA\u8BAE\u964D\u4F4E\u6E05\u6670\u5EA6",Reduce:"\u7ACB\u5373\u5207\u6362","The speed is slow, please check the Network":"\u5F53\u524D\u7F51\u7EDC\u73AF\u5883\u8F83\u5DEE\uFF0C\u8BE6\u60C5\u8BF7\u67E5\u770B",Normal:"\u6B63\u5E38",changeDef:"\u6E05\u6670\u5EA6\u5207\u6362","Roadshow is over, Thanks for watching":"\u8DEF\u6F14\u5DF2\u7ECF\u7ED3\u675F\uFF0C\u611F\u8C22\u60A8\u7684\u53C2\u4E0E","Roadshow is coming soon":"\u8DEF\u6F14\u8FD8\u672A\u5F00\u59CB\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85",Speed:"\u500D\u901F","Poor network connection, recommended to":"\u60A8\u7684\u7F51\u7EDC\u8F83\u5DEE\uFF0C\u5EFA\u8BAE ","reduce the quality":"\u964D\u4F4E\u6E05\u6670\u5EA6","check the network":"\u68C0\u6D4B\u7F51\u7EDC","Try again":"\u5237\u65B0","Connection failed, Check your network":"\u5F53\u524D\u7F51\u7EDC\u65E0\u6CD5\u64AD\u653E\u89C6\u9891\uFF0C\u8BF7\u68C0\u6D4B\u60A8\u7684\u7F51\u7EDC","No Internet Connection, Check your network":"\u5F53\u524D\u7F51\u7EDC\u4E0D\u53EF\u7528\uFF0C\u8BF7\u68C0\u6D4B\u60A8\u7684\u7F51\u7EDC","Connecting to network":"\u8BF7\u8010\u5FC3\u7B49\u5F85\uFF0C\u7CBE\u5F69\u9A6C\u4E0A\u56DE\u6765","Connection error, try again later":"\u64AD\u653E\u5931\u8D25\uFF0C\u8BF7\u7A0D\u5019\u518D\u8BD5","Poor network connection, check your network or try again later":"\u7F51\u7EDC\u8F83\u6162\uFF0C\u5EFA\u8BAE\u5207\u6362\u7F51\u7EDC\u6216\u7A0D\u540E\u518D\u8BD5",Quality:"\u6E05\u6670\u5EA6",colon:"\uFF1A",changeSpeed:"\u500D\u901F\u5207\u6362","Switching to":"\u6B63\u5728\u5207\u6362\u81F3","Switched to":"\u5DF2\u6210\u529F\u5207\u6362\u81F3"})};const dn={autoplay:!0,loop:!1,controls:!0,language:"zh-CN",poster:j.default,playbackRates:[.75,1,1.25,1.5,2],controlBar:{volumePanel:!1,currentTimeDisplay:!0,durationDisplay:!1,timeDivider:!1,remainingTimeDisplay:!1,liveDisplay:!0,pictureInPictureToggle:!1}};function E(n,e,o,t){return I(this,null,function*(){var l,i;try{if(!e.dom)throw Error("\u8BF7\u4F20\u5165\u6302\u8F7DDom\u914D\u7F6E");const s=typeof e.dom=="string"?document.querySelector("#"+e.dom):e.dom,r=s.cloneNode(),c=W((l=e.videoOptions)==null?void 0:l.language),d=p(n);yield E.initImport({types:d,resources:e.resources,lang:c,isInit:!0});const A=D(n,e.isLive);console.log("out sources",A);const m=L(A),T=g(m);let b=videojs.mergeOptions(dn,e.videoOptions,{language:c});T==="hls"?b.sources=[{src:m,type:"application/x-mpegURL"}]:T==="flv"?(b.techOrder=["html5","flvjs"],b.flvjs={mediaDataSource:{isLive:e.isLive,type:"flv"}},b.sources=[{src:m,type:"video/x-flv"}]):T?b.sources=[{src:m,type:T}]:b.sources=[{src:m}],e.isLive&&(b.playbackRates=!1);let a=videojs(s,b,e.ready);return a.addClass("video-js"),a.addClass("vjs-init"),c!=="zh-CN"&&!((i=a.languages())!=null&&i[c.toLocaleLowerCase()])&&a.language("zh-CN"),a.Sources=A,a.VideoOptions=b,a.RscOptions=e,a.source=(B,jn={},k)=>{if(!B){videojs.log("source\u4E3A\u7A7A");return}if(typeof B=="string"){a.addClass("vjs-init"),a.currentType()!=="video/x-flv"?a.src(B):a.loadTech_("Flvjs",{src:B,type:"video/x-flv"}),k==null||k(a);return}const H=a.el().parentElement,F=a.el().nextSibling;a.unloadTech_("Flvjs"),a.dispose(),F?H.insertBefore(r,F):H.appendChild(r),E(B,y(P(y({},e),{dom:r}),jn),w=>{g(w.currentSrc())==="flv"&&(w.addClass("vjs-seeking"),w.addClass("vjs-waiting")),w.one("canplay",()=>{w.paused()&&w.play()}),k==null||k(w),t?t==null||t(w):o==null||o(w)},t||o)},_(a),sn(a),K(a,e.netCheck),vn(a),e.debug&&$(a),on(a),o&&o(a),a}catch(s){console.error(s)}})}return E.initImport=(...l)=>I(this,[...l],function*({types:n=[],resources:e={},lang:o="zh-CN",isInit:t}={}){try{if(!n)throw Error("\u4E0D\u652F\u6301\u7684\u89C6\u9891\u7C7B\u578B");const i=y(y({},f),e);yield h("js",i.videojs,"videojs");const s=document.createElement("style");if(s.innerHTML=an,document.head.appendChild(s),cn(),o!=="zh-CN"&&(yield h("js",`${i.videoLangPath}rsc-video-player-${o}.js`,`___VIDEOJS_LANG_${o}__`)),n.includes("flv"))if(yield h("js",i.flvjs,"__FLVJS__"),flvjs.isSupported())yield h("js",i.videojsFlv,"__VIDEOJS_FLV__"),!t&&n.includes("hls")&&(yield h("js",i.videojsHls,"__VIDEOJS_HLS__"));else if(n.includes("hls"))yield h("js",i.videojsHls,"__VIDEOJS_HLS__");else throw Error("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301flv\u89C6\u9891\u64AD\u653E");else n.includes("hls")&&(yield h("js",i.videojsHls,"__VIDEOJS_HLS__"));return window.videojs}catch(i){throw Error(i)}}),E});
