import{Q as et}from"./QPage.03786065.js";import{a as me,Q as he}from"./QItem.6ba4f503.js";import{c as Se,h as qe}from"./render.1cc9814a.js";import{u as He,a as Pe}from"./use-dark.48a1b027.js";import{c as T,h as N,q as A,ac as tt,r as B,F as $e,Q as ve,p as O,K as ge,B as S,l as oe,m as z,L as nt,s as Z,ad as pe,D as Me,a8 as ot,ae as lt,a4 as We,ab as le,N as it,T as at,G as rt,_ as ut,o as ie,W as Be,e as v,w as y,J as D,g as F,t as st,a2 as Le,X as Ae,H as Qe,u as ct,d as dt,I as ft,a as mt}from"./index.742df33c.js";import{f as ht,h as J,v as Fe,i as vt}from"./use-router-link.ed23b227.js";import{b as be,c as gt,a as pt}from"./focus-manager.05708ea9.js";import{c as bt,g as xt}from"./scroll.ab313a51.js";import{Q as ee}from"./QBtn.2b70a223.js";import{Q as xe,a as De,b as Ve}from"./QCard.cb96f80f.js";import{Q as te}from"./QSeparator.8d254293.js";var yt=Se({name:"QList",props:{...He,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const n=A(),o=Pe(e,n.proxy.$q),l=T(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(o.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>N(e.tag,{class:l.value},qe(t.default))}});function wt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),tt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const _t={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Tt({showing:e,avoidEmit:t,configureAnchorEl:n}){const{props:o,proxy:l,emit:c}=A(),i=B(null);let r=null;function m(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const d={};n===void 0&&(Object.assign(d,{hide(a){l.hide(a)},toggle(a){l.toggle(a),a.qAnchorHandled=!0},toggleKey(a){$e(a,13)===!0&&d.toggle(a)},contextClick(a){l.hide(a),ve(a),O(()=>{l.show(a),a.qAnchorHandled=!0})},prevent:ve,mobileTouch(a){if(d.mobileCleanup(a),m(a)!==!0)return;l.hide(a),i.value.classList.add("non-selectable");const f=a.target;ge(d,"anchor",[[f,"touchmove","mobileCleanup","passive"],[f,"touchend","mobileCleanup","passive"],[f,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),r=setTimeout(()=>{r=null,l.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),r!==null&&(clearTimeout(r),r=null),e.value===!0&&a!==void 0&&wt()}}),n=function(a=o.contextMenu){if(o.noParentEvent===!0||i.value===null)return;let f;a===!0?l.$q.platform.is.mobile===!0?f=[[i.value,"touchstart","mobileTouch","passive"]]:f=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:f=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],ge(d,"anchor",f)});function u(){nt(d,"anchor")}function p(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;n()}function b(){if(o.target===!1||o.target===""||l.$el.parentNode===null)i.value=null;else if(o.target===!0)p(l.$el.parentNode);else{let a=o.target;if(typeof o.target=="string")try{a=document.querySelector(o.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,n()):(i.value=null,console.error(`Anchor: target "${o.target}" not found`))}}return S(()=>o.contextMenu,a=>{i.value!==null&&(u(),n(a))}),S(()=>o.target,()=>{i.value!==null&&u(),b()}),S(()=>o.noParentEvent,a=>{i.value!==null&&(a===!0?u():n())}),oe(()=>{b(),t!==!0&&o.modelValue===!0&&i.value===null&&c("update:modelValue",!1)}),z(()=>{r!==null&&clearTimeout(r),u()}),{anchorEl:i,canShow:m,anchorEvents:d}}function Ct(e,t){const n=B(null);let o;function l(r,m){const d=`${m!==void 0?"add":"remove"}EventListener`,u=m!==void 0?m:o;r!==window&&r[d]("scroll",u,Z.passive),window[d]("scroll",u,Z.passive),o=m}function c(){n.value!==null&&(l(n.value),n.value=null)}const i=S(()=>e.noParentEvent,()=>{n.value!==null&&(c(),t())});return z(i),{localScrollTarget:n,unconfigureScrollTarget:c,changeScrollEvent:l}}const kt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Et=["beforeShow","show","beforeHide","hide"];function St({showing:e,canShow:t,hideOnRouteChange:n,handleShow:o,handleHide:l,processOnMount:c}){const i=A(),{props:r,emit:m,proxy:d}=i;let u;function p(h){e.value===!0?f(h):b(h)}function b(h){if(r.disable===!0||h!==void 0&&h.qAnchorHandled===!0||t!==void 0&&t(h)!==!0)return;const g=r["onUpdate:modelValue"]!==void 0;g===!0&&(m("update:modelValue",!0),u=h,O(()=>{u===h&&(u=void 0)})),(r.modelValue===null||g===!1)&&a(h)}function a(h){e.value!==!0&&(e.value=!0,m("beforeShow",h),o!==void 0?o(h):m("show",h))}function f(h){if(r.disable===!0)return;const g=r["onUpdate:modelValue"]!==void 0;g===!0&&(m("update:modelValue",!1),u=h,O(()=>{u===h&&(u=void 0)})),(r.modelValue===null||g===!1)&&q(h)}function q(h){e.value!==!1&&(e.value=!1,m("beforeHide",h),l!==void 0?l(h):m("hide",h))}function C(h){r.disable===!0&&h===!0?r["onUpdate:modelValue"]!==void 0&&m("update:modelValue",!1):h===!0!==e.value&&(h===!0?a:q)(u)}S(()=>r.modelValue,C),n!==void 0&&ht(i)===!0&&S(()=>d.$route.fullPath,()=>{n.value===!0&&e.value===!0&&f()}),c===!0&&oe(()=>{C(r.modelValue)});const H={show:b,hide:f,toggle:p};return Object.assign(d,H),H}let qt=1,Ht=document.body;function Pt(e,t){const n=document.createElement("div");if(n.id=t!==void 0?`q-portal--${t}--${qt++}`:e,pe.globalNodes!==void 0){const o=pe.globalNodes.class;o!==void 0&&(n.className=o)}return Ht.appendChild(n),n}function $t(e){e.remove()}const V=[];function Mt(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return J(e)}else if(e.__qPortal===!0){const n=J(e);return n!==void 0&&n.$options.name==="QPopupProxy"?(e.hide(t),n):e}e=J(e)}while(e!=null)}function Wt(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Bt(e,t,n,o){const l=B(!1),c=B(!1);let i=null;const r={},m=o==="dialog"&&Wt(e);function d(p){if(p===!0){be(r),c.value=!0;return}c.value=!1,l.value===!1&&(m===!1&&i===null&&(i=Pt(!1,o)),l.value=!0,V.push(e.proxy),gt(r))}function u(p){if(c.value=!1,p!==!0)return;be(r),l.value=!1;const b=V.indexOf(e.proxy);b!==-1&&V.splice(b,1),i!==null&&($t(i),i=null)}return Me(()=>{u(!0)}),e.proxy.__qPortal=!0,ot(e.proxy,"contentEl",()=>t.value),{showPortal:d,hidePortal:u,portalIsActive:l,portalIsAccessible:c,renderPortal:()=>m===!0?n():l.value===!0?[N(lt,{to:i},n())]:void 0}}const Lt={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function At(e,t=()=>{},n=()=>{}){return{transitionProps:T(()=>{const o=`q-transition--${e.transitionShow||t()}`,l=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${o}-enter-from`,enterActiveClass:`${o}-enter-active`,enterToClass:`${o}-enter-to`,leaveFromClass:`${l}-leave-from`,leaveActiveClass:`${l}-leave-active`,leaveToClass:`${l}-leave-to`}}),transitionStyle:T(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function Qt(){let e;const t=A();function n(){e=void 0}return We(n),z(n),{removeTick:n,registerTick(o){e=o,O(()=>{e===o&&(Fe(t)===!1&&e(),e=void 0)})}}}function Ft(){let e=null;const t=A();function n(){e!==null&&(clearTimeout(e),e=null)}return We(n),z(n),{removeTimeout:n,registerTimeout(o,l){n(),Fe(t)===!1&&(e=setTimeout(o,l))}}}const P=[];let L;function Dt(e){L=e.keyCode===27}function Vt(){L===!0&&(L=!1)}function zt(e){L===!0&&(L=!1,$e(e,27)===!0&&P[P.length-1](e))}function ze(e){window[e]("keydown",Dt),window[e]("blur",Vt),window[e]("keyup",zt),L=!1}function Rt(e){le.is.desktop===!0&&(P.push(e),P.length===1&&ze("addEventListener"))}function ye(e){const t=P.indexOf(e);t>-1&&(P.splice(t,1),P.length===0&&ze("removeEventListener"))}const $=[];function Re(e){$[$.length-1](e)}function Nt(e){le.is.desktop===!0&&($.push(e),$.length===1&&document.body.addEventListener("focusin",Re))}function Ot(e){const t=$.indexOf(e);t>-1&&($.splice(t,1),$.length===0&&document.body.removeEventListener("focusin",Re))}const{notPassiveCapture:K}=Z,M=[];function j(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let n=V.length-1;for(;n>=0;){const o=V[n].$;if(o.type.name==="QTooltip"){n--;continue}if(o.type.name!=="QDialog")break;if(o.props.seamless!==!0)return;n--}for(let o=M.length-1;o>=0;o--){const l=M[o];if((l.anchorEl.value===null||l.anchorEl.value.contains(t)===!1)&&(t===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(t)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function Kt(e){M.push(e),M.length===1&&(document.addEventListener("mousedown",j,K),document.addEventListener("touchstart",j,K))}function we(e){const t=M.findIndex(n=>n===e);t>-1&&(M.splice(t,1),M.length===0&&(document.removeEventListener("mousedown",j,K),document.removeEventListener("touchstart",j,K)))}let _e,Te;function Ce(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function jt(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const ne={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{ne[`${e}#ltr`]=e,ne[`${e}#rtl`]=e});function ke(e,t){const n=e.split(" ");return{vertical:n[0],horizontal:ne[`${n[1]}#${t===!0?"rtl":"ltr"}`]}}function It(e,t){let{top:n,left:o,right:l,bottom:c,width:i,height:r}=e.getBoundingClientRect();return t!==void 0&&(n-=t[1],o-=t[0],c+=t[1],l+=t[0],i+=t[0],r+=t[1]),{top:n,bottom:c,height:r,left:o,right:l,width:i,middle:o+(l-o)/2,center:n+(c-n)/2}}function Ut(e,t,n){let{top:o,left:l}=e.getBoundingClientRect();return o+=t.top,l+=t.left,n!==void 0&&(o+=n[1],l+=n[0]),{top:o,bottom:o+1,height:1,left:l,right:l+1,width:1,middle:l,center:o}}function Gt(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function Ee(e,t,n,o){return{top:e[n.vertical]-t[o.vertical],left:e[n.horizontal]-t[o.horizontal]}}function Ne(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{Ne(e,t+1)},10);return}const{targetEl:n,offset:o,anchorEl:l,anchorOrigin:c,selfOrigin:i,absoluteOffset:r,fit:m,cover:d,maxHeight:u,maxWidth:p}=e;if(le.is.ios===!0&&window.visualViewport!==void 0){const W=document.body.style,{offsetLeft:w,offsetTop:_}=window.visualViewport;w!==_e&&(W.setProperty("--q-pe-left",w+"px"),_e=w),_!==Te&&(W.setProperty("--q-pe-top",_+"px"),Te=_)}const{scrollLeft:b,scrollTop:a}=n,f=r===void 0?It(l,d===!0?[0,0]:o):Ut(l,r,o);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:p||"100vw",maxHeight:u||"100vh",visibility:"visible"});const{offsetWidth:q,offsetHeight:C}=n,{elWidth:H,elHeight:h}=m===!0||d===!0?{elWidth:Math.max(f.width,q),elHeight:d===!0?Math.max(f.height,C):C}:{elWidth:q,elHeight:C};let g={maxWidth:p,maxHeight:u};(m===!0||d===!0)&&(g.minWidth=f.width+"px",d===!0&&(g.minHeight=f.height+"px")),Object.assign(n.style,g);const k=Gt(H,h);let x=Ee(f,k,c,i);if(r===void 0||o===void 0)Y(x,f,k,c,i);else{const{top:W,left:w}=x;Y(x,f,k,c,i);let _=!1;if(x.top!==W){_=!0;const E=2*o[1];f.center=f.top-=E,f.bottom-=E+2}if(x.left!==w){_=!0;const E=2*o[0];f.middle=f.left-=E,f.right-=E+2}_===!0&&(x=Ee(f,k,c,i),Y(x,f,k,c,i))}g={top:x.top+"px",left:x.left+"px"},x.maxHeight!==void 0&&(g.maxHeight=x.maxHeight+"px",f.height>x.maxHeight&&(g.minHeight=g.maxHeight)),x.maxWidth!==void 0&&(g.maxWidth=x.maxWidth+"px",f.width>x.maxWidth&&(g.minWidth=g.maxWidth)),Object.assign(n.style,g),n.scrollTop!==a&&(n.scrollTop=a),n.scrollLeft!==b&&(n.scrollLeft=b)}function Y(e,t,n,o,l){const c=n.bottom,i=n.right,r=bt(),m=window.innerHeight-r,d=document.body.clientWidth;if(e.top<0||e.top+c>m)if(l.vertical==="center")e.top=t[o.vertical]>m/2?Math.max(0,m-c):0,e.maxHeight=Math.min(c,m);else if(t[o.vertical]>m/2){const u=Math.min(m,o.vertical==="center"?t.center:o.vertical===l.vertical?t.bottom:t.top);e.maxHeight=Math.min(c,u),e.top=Math.max(0,u-c)}else e.top=Math.max(0,o.vertical==="center"?t.center:o.vertical===l.vertical?t.top:t.bottom),e.maxHeight=Math.min(c,m-e.top);if(e.left<0||e.left+i>d)if(e.maxWidth=Math.min(i,d),l.horizontal==="middle")e.left=t[o.horizontal]>d/2?Math.max(0,d-i):0;else if(t[o.horizontal]>d/2){const u=Math.min(d,o.horizontal==="middle"?t.middle:o.horizontal===l.horizontal?t.right:t.left);e.maxWidth=Math.min(i,u),e.left=Math.max(0,u-e.maxWidth)}else e.left=Math.max(0,o.horizontal==="middle"?t.middle:o.horizontal===l.horizontal?t.left:t.right),e.maxWidth=Math.min(i,d-e.left)}var Xt=Se({name:"QMenu",inheritAttrs:!1,props:{..._t,...kt,...He,...Lt,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Ce},self:{type:String,validator:Ce},offset:{type:Array,validator:jt},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Et,"click","escapeKey"],setup(e,{slots:t,emit:n,attrs:o}){let l=null,c,i,r;const m=A(),{proxy:d}=m,{$q:u}=d,p=B(null),b=B(!1),a=T(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),f=Pe(e,u),{registerTick:q,removeTick:C}=Qt(),{registerTimeout:H}=Ft(),{transitionProps:h,transitionStyle:g}=At(e),{localScrollTarget:k,changeScrollEvent:x,unconfigureScrollTarget:W}=Ct(e,de),{anchorEl:w,canShow:_}=Tt({showing:b}),{hide:E}=St({showing:b,canShow:_,handleShow:Ue,handleHide:Ge,hideOnRouteChange:a,processOnMount:!0}),{showPortal:ae,hidePortal:re,renderPortal:Oe}=Bt(m,p,Je,"menu"),I={anchorEl:w,innerRef:p,onClickOutside(s){if(e.persistent!==!0&&b.value===!0)return E(s),(s.type==="touchstart"||s.target.classList.contains("q-dialog__backdrop"))&&rt(s),!0}},ue=T(()=>ke(e.anchor||(e.cover===!0?"center middle":"bottom start"),u.lang.rtl)),Ke=T(()=>e.cover===!0?ue.value:ke(e.self||"top start",u.lang.rtl)),je=T(()=>(e.square===!0?" q-menu--square":"")+(f.value===!0?" q-menu--dark q-dark":"")),Ie=T(()=>e.autoClose===!0?{onClick:Xe}:{}),se=T(()=>b.value===!0&&e.persistent!==!0);S(se,s=>{s===!0?(Rt(G),Kt(I)):(ye(G),we(I))});function U(){pt(()=>{let s=p.value;s&&s.contains(document.activeElement)!==!0&&(s=s.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||s.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||s.querySelector("[autofocus], [data-autofocus]")||s,s.focus({preventScroll:!0}))})}function Ue(s){if(l=e.noRefocus===!1?document.activeElement:null,Nt(fe),ae(),de(),c=void 0,s!==void 0&&(e.touchPosition||e.contextMenu)){const X=it(s);if(X.left!==void 0){const{top:Ye,left:Ze}=w.value.getBoundingClientRect();c={left:X.left-Ze,top:X.top-Ye}}}i===void 0&&(i=S(()=>u.screen.width+"|"+u.screen.height+"|"+e.self+"|"+e.anchor+"|"+u.lang.rtl,Q)),e.noFocus!==!0&&document.activeElement.blur(),q(()=>{Q(),e.noFocus!==!0&&U()}),H(()=>{u.platform.is.ios===!0&&(r=e.autoClose,p.value.click()),Q(),ae(!0),n("show",s)},e.transitionDuration)}function Ge(s){C(),re(),ce(!0),l!==null&&(s===void 0||s.qClickOutside!==!0)&&(((s&&s.type.indexOf("key")===0?l.closest('[tabindex]:not([tabindex^="-"])'):void 0)||l).focus(),l=null),H(()=>{re(!0),n("hide",s)},e.transitionDuration)}function ce(s){c=void 0,i!==void 0&&(i(),i=void 0),(s===!0||b.value===!0)&&(Ot(fe),W(),we(I),ye(G)),s!==!0&&(l=null)}function de(){(w.value!==null||e.scrollTarget!==void 0)&&(k.value=xt(w.value,e.scrollTarget),x(k.value,Q))}function Xe(s){r!==!0?(Mt(d,s),n("click",s)):r=!1}function fe(s){se.value===!0&&e.noFocus!==!0&&vt(p.value,s.target)!==!0&&U()}function G(s){n("escapeKey"),E(s)}function Q(){Ne({targetEl:p.value,offset:e.offset,anchorEl:w.value,anchorOrigin:ue.value,selfOrigin:Ke.value,absoluteOffset:c,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Je(){return N(at,h.value,()=>b.value===!0?N("div",{role:"menu",...o,ref:p,tabindex:-1,class:["q-menu q-position-engine scroll"+je.value,o.class],style:[o.style,g.value],...Ie.value},qe(t.default)):null)}return z(ce),Object.assign(d,{focus:U,updatePosition:Q}),Oe}});const Jt={},Yt={class:"row items-center no-wrap"},Zt=D("div",{class:"col"},[D("div",{class:"text-h6"},"Our Planet"),D("div",{class:"text-subtitle2"},"by John Doe")],-1),en={class:"col-auto"};function tn(e,t){return ie(),Be(Ae,null,[v(Ve,{flat:"",bordered:"",class:Le(["my-card full-width",e.$q.dark.isActive?"bg-grey-9":"bg-grey-2"])},{default:y(()=>[v(xe,null,{default:y(()=>[D("div",Yt,[Zt,D("div",en,[v(ee,{color:"grey-7",round:"",flat:"",icon:"more_vert"},{default:y(()=>[v(Xt,{cover:"","auto-close":""},{default:y(()=>[v(yt,null,{default:y(()=>[v(me,{clickable:""},{default:y(()=>[v(he,null,{default:y(()=>[F("Settings")]),_:1})]),_:1}),v(me,{clickable:""},{default:y(()=>[v(he,null,{default:y(()=>[F("Publish")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])])]),_:1}),v(xe,null,{default:y(()=>[F(st(e.lorem),1)]),_:1}),v(te),v(De,null,{default:y(()=>[v(ee,{flat:""},{default:y(()=>[F(" Edit ")]),_:1})]),_:1})]),_:1},8,["class"]),v(te,{dark:"",spaced:"true",inset:"true",size:"10px"})],64)}var R=ut(Jt,[["render",tn]]);const nn={__name:"NewTitleCard",setup(e){const t=Qe();var n=()=>t.push("/title-new");return(o,l)=>(ie(),Be(Ae,null,[v(Ve,{flat:"",bordered:"",class:Le(["my-card full-width",o.$q.dark.isActive?"bg-grey-9":"bg-grey-2"])},{default:y(()=>[v(De,null,{default:y(()=>[v(ee,{outline:"",color:"text-primary",class:"full-width",onClick:l[0]||(l[0]=c=>ct(n)())},{default:y(()=>[F("Create New Title")]),_:1})]),_:1})]),_:1},8,["class"]),v(te,{dark:"",spaced:"true",inset:"true",size:"100px"})],64))}};const on=dt({name:"Title Screen"}),gn=Object.assign(on,{setup(e){return Qe(),oe(async t=>{}),ft(async()=>{}),Me(async()=>{}),(t,n)=>(ie(),mt(et,{class:"window-height window-width row justify-center items-center q-pa-xl"},{default:y(()=>[v(R),v(R),v(R),v(R),v(nn)]),_:1}))}});export{gn as default};
