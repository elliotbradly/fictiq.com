import{Q as et}from"./QPage.5e718bb9.js";import{a as pe,Q as be}from"./QItem.4b737e73.js";import{c as R,h as N}from"./render.527c0c38.js";import{u as ae,a as ie}from"./use-dark.2ee7e34f.js";import{c as w,h as M,q as W,ac as tt,r as Q,F as $e,Q as ye,p as j,K as xe,B as S,l as re,m as O,L as nt,s as te,ad as we,D as Be,a6 as ot,ae as lt,a8 as Me,ab as ue,N as at,T as it,G as rt,_ as ut,o as se,W as We,e as h,w as x,J as z,g as F,t as st,a2 as Ae,X as Qe,H as Le,u as ct,d as dt,I as ft,a as mt}from"./index.8810a47b.js";import{v as vt,f as Z,h as De,i as ht}from"./use-router-link.3c80b8c6.js";import{b as _e,c as gt,a as pt,Q as ne}from"./QSeparator.8cc3a99a.js";import{c as bt,g as yt}from"./scroll.4883864a.js";import{u as xt,b as wt,Q as oe}from"./QBtn.2b40e40f.js";var _t=R({name:"QList",props:{...ae,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const n=W(),o=ie(e,n.proxy.$q),l=w(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(o.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>M(e.tag,{class:l.value},N(t.default))}});function qt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),tt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const Ct={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function kt({showing:e,avoidEmit:t,configureAnchorEl:n}){const{props:o,proxy:l,emit:c}=W(),a=Q(null);let r=null;function m(i){return a.value===null?!1:i===void 0||i.touches===void 0||i.touches.length<=1}const d={};n===void 0&&(Object.assign(d,{hide(i){l.hide(i)},toggle(i){l.toggle(i),i.qAnchorHandled=!0},toggleKey(i){$e(i,13)===!0&&d.toggle(i)},contextClick(i){l.hide(i),ye(i),j(()=>{l.show(i),i.qAnchorHandled=!0})},prevent:ye,mobileTouch(i){if(d.mobileCleanup(i),m(i)!==!0)return;l.hide(i),a.value.classList.add("non-selectable");const f=i.target;xe(d,"anchor",[[f,"touchmove","mobileCleanup","passive"],[f,"touchend","mobileCleanup","passive"],[f,"touchcancel","mobileCleanup","passive"],[a.value,"contextmenu","prevent","notPassive"]]),r=setTimeout(()=>{r=null,l.show(i),i.qAnchorHandled=!0},300)},mobileCleanup(i){a.value.classList.remove("non-selectable"),r!==null&&(clearTimeout(r),r=null),e.value===!0&&i!==void 0&&qt()}}),n=function(i=o.contextMenu){if(o.noParentEvent===!0||a.value===null)return;let f;i===!0?l.$q.platform.is.mobile===!0?f=[[a.value,"touchstart","mobileTouch","passive"]]:f=[[a.value,"mousedown","hide","passive"],[a.value,"contextmenu","contextClick","notPassive"]]:f=[[a.value,"click","toggle","passive"],[a.value,"keyup","toggleKey","passive"]],xe(d,"anchor",f)});function u(){nt(d,"anchor")}function p(i){for(a.value=i;a.value.classList.contains("q-anchor--skip");)a.value=a.value.parentNode;n()}function b(){if(o.target===!1||o.target===""||l.$el.parentNode===null)a.value=null;else if(o.target===!0)p(l.$el.parentNode);else{let i=o.target;if(typeof o.target=="string")try{i=document.querySelector(o.target)}catch{i=void 0}i!=null?(a.value=i.$el||i,n()):(a.value=null,console.error(`Anchor: target "${o.target}" not found`))}}return S(()=>o.contextMenu,i=>{a.value!==null&&(u(),n(i))}),S(()=>o.target,()=>{a.value!==null&&u(),b()}),S(()=>o.noParentEvent,i=>{a.value!==null&&(i===!0?u():n())}),re(()=>{b(),t!==!0&&o.modelValue===!0&&a.value===null&&c("update:modelValue",!1)}),O(()=>{r!==null&&clearTimeout(r),u()}),{anchorEl:a,canShow:m,anchorEvents:d}}function Tt(e,t){const n=Q(null);let o;function l(r,m){const d=`${m!==void 0?"add":"remove"}EventListener`,u=m!==void 0?m:o;r!==window&&r[d]("scroll",u,te.passive),window[d]("scroll",u,te.passive),o=m}function c(){n.value!==null&&(l(n.value),n.value=null)}const a=S(()=>e.noParentEvent,()=>{n.value!==null&&(c(),t())});return O(a),{localScrollTarget:n,unconfigureScrollTarget:c,changeScrollEvent:l}}const St={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Et=["beforeShow","show","beforeHide","hide"];function Ht({showing:e,canShow:t,hideOnRouteChange:n,handleShow:o,handleHide:l,processOnMount:c}){const a=W(),{props:r,emit:m,proxy:d}=a;let u;function p(v){e.value===!0?f(v):b(v)}function b(v){if(r.disable===!0||v!==void 0&&v.qAnchorHandled===!0||t!==void 0&&t(v)!==!0)return;const g=r["onUpdate:modelValue"]!==void 0;g===!0&&(m("update:modelValue",!0),u=v,j(()=>{u===v&&(u=void 0)})),(r.modelValue===null||g===!1)&&i(v)}function i(v){e.value!==!0&&(e.value=!0,m("beforeShow",v),o!==void 0?o(v):m("show",v))}function f(v){if(r.disable===!0)return;const g=r["onUpdate:modelValue"]!==void 0;g===!0&&(m("update:modelValue",!1),u=v,j(()=>{u===v&&(u=void 0)})),(r.modelValue===null||g===!1)&&E(v)}function E(v){e.value!==!1&&(e.value=!1,m("beforeHide",v),l!==void 0?l(v):m("hide",v))}function C(v){r.disable===!0&&v===!0?r["onUpdate:modelValue"]!==void 0&&m("update:modelValue",!1):v===!0!==e.value&&(v===!0?i:E)(u)}S(()=>r.modelValue,C),n!==void 0&&vt(a)===!0&&S(()=>d.$route.fullPath,()=>{n.value===!0&&e.value===!0&&f()}),c===!0&&re(()=>{C(r.modelValue)});const H={show:b,hide:f,toggle:p};return Object.assign(d,H),H}let Pt=1,$t=document.body;function Bt(e,t){const n=document.createElement("div");if(n.id=t!==void 0?`q-portal--${t}--${Pt++}`:e,we.globalNodes!==void 0){const o=we.globalNodes.class;o!==void 0&&(n.className=o)}return $t.appendChild(n),n}function Mt(e){e.remove()}const V=[];function Wt(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return Z(e)}else if(e.__qPortal===!0){const n=Z(e);return n!==void 0&&n.$options.name==="QPopupProxy"?(e.hide(t),n):e}e=Z(e)}while(e!=null)}function At(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Qt(e,t,n,o){const l=Q(!1),c=Q(!1);let a=null;const r={},m=o==="dialog"&&At(e);function d(p){if(p===!0){_e(r),c.value=!0;return}c.value=!1,l.value===!1&&(m===!1&&a===null&&(a=Bt(!1,o)),l.value=!0,V.push(e.proxy),gt(r))}function u(p){if(c.value=!1,p!==!0)return;_e(r),l.value=!1;const b=V.indexOf(e.proxy);b!==-1&&V.splice(b,1),a!==null&&(Mt(a),a=null)}return Be(()=>{u(!0)}),e.proxy.__qPortal=!0,ot(e.proxy,"contentEl",()=>t.value),{showPortal:d,hidePortal:u,portalIsActive:l,portalIsAccessible:c,renderPortal:()=>m===!0?n():l.value===!0?[M(lt,{to:a},n())]:void 0}}const Lt={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Dt(e,t=()=>{},n=()=>{}){return{transitionProps:w(()=>{const o=`q-transition--${e.transitionShow||t()}`,l=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${o}-enter-from`,enterActiveClass:`${o}-enter-active`,enterToClass:`${o}-enter-to`,leaveFromClass:`${l}-leave-from`,leaveActiveClass:`${l}-leave-active`,leaveToClass:`${l}-leave-to`}}),transitionStyle:w(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function Ft(){let e;const t=W();function n(){e=void 0}return Me(n),O(n),{removeTick:n,registerTick(o){e=o,j(()=>{e===o&&(De(t)===!1&&e(),e=void 0)})}}}function zt(){let e=null;const t=W();function n(){e!==null&&(clearTimeout(e),e=null)}return Me(n),O(n),{removeTimeout:n,registerTimeout(o,l){n(),De(t)===!1&&(e=setTimeout(o,l))}}}const P=[];let L;function Vt(e){L=e.keyCode===27}function Rt(){L===!0&&(L=!1)}function Nt(e){L===!0&&(L=!1,$e(e,27)===!0&&P[P.length-1](e))}function Fe(e){window[e]("keydown",Vt),window[e]("blur",Rt),window[e]("keyup",Nt),L=!1}function Ot(e){ue.is.desktop===!0&&(P.push(e),P.length===1&&Fe("addEventListener"))}function qe(e){const t=P.indexOf(e);t>-1&&(P.splice(t,1),P.length===0&&Fe("removeEventListener"))}const $=[];function ze(e){$[$.length-1](e)}function Kt(e){ue.is.desktop===!0&&($.push(e),$.length===1&&document.body.addEventListener("focusin",ze))}function jt(e){const t=$.indexOf(e);t>-1&&($.splice(t,1),$.length===0&&document.body.removeEventListener("focusin",ze))}const{notPassiveCapture:I}=te,B=[];function U(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let n=V.length-1;for(;n>=0;){const o=V[n].$;if(o.type.name==="QTooltip"){n--;continue}if(o.type.name!=="QDialog")break;if(o.props.seamless!==!0)return;n--}for(let o=B.length-1;o>=0;o--){const l=B[o];if((l.anchorEl.value===null||l.anchorEl.value.contains(t)===!1)&&(t===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(t)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function It(e){B.push(e),B.length===1&&(document.addEventListener("mousedown",U,I),document.addEventListener("touchstart",U,I))}function Ce(e){const t=B.findIndex(n=>n===e);t>-1&&(B.splice(t,1),B.length===0&&(document.removeEventListener("mousedown",U,I),document.removeEventListener("touchstart",U,I)))}let ke,Te;function Se(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Ut(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const le={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{le[`${e}#ltr`]=e,le[`${e}#rtl`]=e});function Ee(e,t){const n=e.split(" ");return{vertical:n[0],horizontal:le[`${n[1]}#${t===!0?"rtl":"ltr"}`]}}function Gt(e,t){let{top:n,left:o,right:l,bottom:c,width:a,height:r}=e.getBoundingClientRect();return t!==void 0&&(n-=t[1],o-=t[0],c+=t[1],l+=t[0],a+=t[0],r+=t[1]),{top:n,bottom:c,height:r,left:o,right:l,width:a,middle:o+(l-o)/2,center:n+(c-n)/2}}function Xt(e,t,n){let{top:o,left:l}=e.getBoundingClientRect();return o+=t.top,l+=t.left,n!==void 0&&(o+=n[1],l+=n[0]),{top:o,bottom:o+1,height:1,left:l,right:l+1,width:1,middle:l,center:o}}function Jt(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function He(e,t,n,o){return{top:e[n.vertical]-t[o.vertical],left:e[n.horizontal]-t[o.horizontal]}}function Ve(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{Ve(e,t+1)},10);return}const{targetEl:n,offset:o,anchorEl:l,anchorOrigin:c,selfOrigin:a,absoluteOffset:r,fit:m,cover:d,maxHeight:u,maxWidth:p}=e;if(ue.is.ios===!0&&window.visualViewport!==void 0){const A=document.body.style,{offsetLeft:_,offsetTop:q}=window.visualViewport;_!==ke&&(A.setProperty("--q-pe-left",_+"px"),ke=_),q!==Te&&(A.setProperty("--q-pe-top",q+"px"),Te=q)}const{scrollLeft:b,scrollTop:i}=n,f=r===void 0?Gt(l,d===!0?[0,0]:o):Xt(l,r,o);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:p||"100vw",maxHeight:u||"100vh",visibility:"visible"});const{offsetWidth:E,offsetHeight:C}=n,{elWidth:H,elHeight:v}=m===!0||d===!0?{elWidth:Math.max(f.width,E),elHeight:d===!0?Math.max(f.height,C):C}:{elWidth:E,elHeight:C};let g={maxWidth:p,maxHeight:u};(m===!0||d===!0)&&(g.minWidth=f.width+"px",d===!0&&(g.minHeight=f.height+"px")),Object.assign(n.style,g);const k=Jt(H,v);let y=He(f,k,c,a);if(r===void 0||o===void 0)ee(y,f,k,c,a);else{const{top:A,left:_}=y;ee(y,f,k,c,a);let q=!1;if(y.top!==A){q=!0;const T=2*o[1];f.center=f.top-=T,f.bottom-=T+2}if(y.left!==_){q=!0;const T=2*o[0];f.middle=f.left-=T,f.right-=T+2}q===!0&&(y=He(f,k,c,a),ee(y,f,k,c,a))}g={top:y.top+"px",left:y.left+"px"},y.maxHeight!==void 0&&(g.maxHeight=y.maxHeight+"px",f.height>y.maxHeight&&(g.minHeight=g.maxHeight)),y.maxWidth!==void 0&&(g.maxWidth=y.maxWidth+"px",f.width>y.maxWidth&&(g.minWidth=g.maxWidth)),Object.assign(n.style,g),n.scrollTop!==i&&(n.scrollTop=i),n.scrollLeft!==b&&(n.scrollLeft=b)}function ee(e,t,n,o,l){const c=n.bottom,a=n.right,r=bt(),m=window.innerHeight-r,d=document.body.clientWidth;if(e.top<0||e.top+c>m)if(l.vertical==="center")e.top=t[o.vertical]>m/2?Math.max(0,m-c):0,e.maxHeight=Math.min(c,m);else if(t[o.vertical]>m/2){const u=Math.min(m,o.vertical==="center"?t.center:o.vertical===l.vertical?t.bottom:t.top);e.maxHeight=Math.min(c,u),e.top=Math.max(0,u-c)}else e.top=Math.max(0,o.vertical==="center"?t.center:o.vertical===l.vertical?t.top:t.bottom),e.maxHeight=Math.min(c,m-e.top);if(e.left<0||e.left+a>d)if(e.maxWidth=Math.min(a,d),l.horizontal==="middle")e.left=t[o.horizontal]>d/2?Math.max(0,d-a):0;else if(t[o.horizontal]>d/2){const u=Math.min(d,o.horizontal==="middle"?t.middle:o.horizontal===l.horizontal?t.right:t.left);e.maxWidth=Math.min(a,u),e.left=Math.max(0,u-e.maxWidth)}else e.left=Math.max(0,o.horizontal==="middle"?t.middle:o.horizontal===l.horizontal?t.left:t.right),e.maxWidth=Math.min(a,d-e.left)}var Yt=R({name:"QMenu",inheritAttrs:!1,props:{...Ct,...St,...ae,...Lt,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Se},self:{type:String,validator:Se},offset:{type:Array,validator:Ut},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Et,"click","escapeKey"],setup(e,{slots:t,emit:n,attrs:o}){let l=null,c,a,r;const m=W(),{proxy:d}=m,{$q:u}=d,p=Q(null),b=Q(!1),i=w(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),f=ie(e,u),{registerTick:E,removeTick:C}=Ft(),{registerTimeout:H}=zt(),{transitionProps:v,transitionStyle:g}=Dt(e),{localScrollTarget:k,changeScrollEvent:y,unconfigureScrollTarget:A}=Tt(e,he),{anchorEl:_,canShow:q}=kt({showing:b}),{hide:T}=Ht({showing:b,canShow:q,handleShow:Ue,handleHide:Ge,hideOnRouteChange:i,processOnMount:!0}),{showPortal:ce,hidePortal:de,renderPortal:Oe}=Qt(m,p,Je,"menu"),G={anchorEl:_,innerRef:p,onClickOutside(s){if(e.persistent!==!0&&b.value===!0)return T(s),(s.type==="touchstart"||s.target.classList.contains("q-dialog__backdrop"))&&rt(s),!0}},fe=w(()=>Ee(e.anchor||(e.cover===!0?"center middle":"bottom start"),u.lang.rtl)),Ke=w(()=>e.cover===!0?fe.value:Ee(e.self||"top start",u.lang.rtl)),je=w(()=>(e.square===!0?" q-menu--square":"")+(f.value===!0?" q-menu--dark q-dark":"")),Ie=w(()=>e.autoClose===!0?{onClick:Xe}:{}),me=w(()=>b.value===!0&&e.persistent!==!0);S(me,s=>{s===!0?(Ot(J),It(G)):(qe(J),Ce(G))});function X(){pt(()=>{let s=p.value;s&&s.contains(document.activeElement)!==!0&&(s=s.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||s.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||s.querySelector("[autofocus], [data-autofocus]")||s,s.focus({preventScroll:!0}))})}function Ue(s){if(l=e.noRefocus===!1?document.activeElement:null,Kt(ge),ce(),he(),c=void 0,s!==void 0&&(e.touchPosition||e.contextMenu)){const Y=at(s);if(Y.left!==void 0){const{top:Ye,left:Ze}=_.value.getBoundingClientRect();c={left:Y.left-Ze,top:Y.top-Ye}}}a===void 0&&(a=S(()=>u.screen.width+"|"+u.screen.height+"|"+e.self+"|"+e.anchor+"|"+u.lang.rtl,D)),e.noFocus!==!0&&document.activeElement.blur(),E(()=>{D(),e.noFocus!==!0&&X()}),H(()=>{u.platform.is.ios===!0&&(r=e.autoClose,p.value.click()),D(),ce(!0),n("show",s)},e.transitionDuration)}function Ge(s){C(),de(),ve(!0),l!==null&&(s===void 0||s.qClickOutside!==!0)&&(((s&&s.type.indexOf("key")===0?l.closest('[tabindex]:not([tabindex^="-"])'):void 0)||l).focus(),l=null),H(()=>{de(!0),n("hide",s)},e.transitionDuration)}function ve(s){c=void 0,a!==void 0&&(a(),a=void 0),(s===!0||b.value===!0)&&(jt(ge),A(),Ce(G),qe(J)),s!==!0&&(l=null)}function he(){(_.value!==null||e.scrollTarget!==void 0)&&(k.value=yt(_.value,e.scrollTarget),y(k.value,D))}function Xe(s){r!==!0?(Wt(d,s),n("click",s)):r=!1}function ge(s){me.value===!0&&e.noFocus!==!0&&ht(p.value,s.target)!==!0&&X()}function J(s){n("escapeKey"),T(s)}function D(){Ve({targetEl:p.value,offset:e.offset,anchorEl:_.value,anchorOrigin:fe.value,selfOrigin:Ke.value,absoluteOffset:c,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Je(){return M(it,v.value,()=>b.value===!0?M("div",{role:"menu",...o,ref:p,tabindex:-1,class:["q-menu q-position-engine scroll"+je.value,o.class],style:[o.style,g.value],...Ie.value},N(t.default)):null)}return O(ve),Object.assign(d,{focus:X,updatePosition:D}),Oe}}),Pe=R({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const n=w(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>M(e.tag,{class:n.value},N(t.default))}}),Re=R({name:"QCardActions",props:{...xt,vertical:Boolean},setup(e,{slots:t}){const n=wt(e),o=w(()=>`q-card__actions ${n.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>M("div",{class:o.value},N(t.default))}}),Ne=R({name:"QCard",props:{...ae,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=W(),o=ie(e,n),l=w(()=>"q-card"+(o.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>M(e.tag,{class:l.value},N(t.default))}});const Zt={},en={class:"row items-center no-wrap"},tn=z("div",{class:"col"},[z("div",{class:"text-h6"},"Our Planet"),z("div",{class:"text-subtitle2"},"by John Doe")],-1),nn={class:"col-auto"};function on(e,t){return se(),We(Qe,null,[h(Ne,{flat:"",bordered:"",class:Ae(["my-card full-width",e.$q.dark.isActive?"bg-grey-9":"bg-grey-2"])},{default:x(()=>[h(Pe,null,{default:x(()=>[z("div",en,[tn,z("div",nn,[h(oe,{color:"grey-7",round:"",flat:"",icon:"more_vert"},{default:x(()=>[h(Yt,{cover:"","auto-close":""},{default:x(()=>[h(_t,null,{default:x(()=>[h(pe,{clickable:""},{default:x(()=>[h(be,null,{default:x(()=>[F("Settings")]),_:1})]),_:1}),h(pe,{clickable:""},{default:x(()=>[h(be,null,{default:x(()=>[F("Publish")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])])]),_:1}),h(Pe,null,{default:x(()=>[F(st(e.lorem),1)]),_:1}),h(ne),h(Re,null,{default:x(()=>[h(oe,{flat:""},{default:x(()=>[F(" Edit ")]),_:1})]),_:1})]),_:1},8,["class"]),h(ne,{dark:"",spaced:"true",inset:"true",size:"10px"})],64)}var K=ut(Zt,[["render",on]]);const ln={__name:"NewTitleCard",setup(e){const t=Le();var n=()=>t.push("/title-new");return(o,l)=>(se(),We(Qe,null,[h(Ne,{flat:"",bordered:"",class:Ae(["my-card full-width",o.$q.dark.isActive?"bg-grey-9":"bg-grey-2"])},{default:x(()=>[h(Re,null,{default:x(()=>[h(oe,{outline:"",color:"text-primary",class:"full-width",onClick:l[0]||(l[0]=c=>ct(n)())},{default:x(()=>[F("Create New Title")]),_:1})]),_:1})]),_:1},8,["class"]),h(ne,{dark:"",spaced:"true",inset:"true",size:"100px"})],64))}};const an=dt({name:"Title Screen"}),gn=Object.assign(an,{setup(e){return Le(),re(async t=>{}),ft(async()=>{}),Be(async()=>{}),(t,n)=>(se(),mt(et,{class:"window-height window-width row justify-center items-center q-pa-xl"},{default:x(()=>[h(K),h(K),h(K),h(K),h(ln)]),_:1}))}});export{gn as default};
