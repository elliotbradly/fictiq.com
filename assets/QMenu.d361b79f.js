import{ab as j,G as re,r as R,k as r,s as A,R as ce,m as H,T as fe,x as de,q as ve,H as ge}from"./index.01d7074a.js";import{u as he,a as me,b as ye,v as L,c as ke,d as xe,e as Pe,f as Te,g as Ce,h as Se,i as be,j as we,k as Oe,r as p,s as Ee,l as qe,p as Q,m as Be}from"./position-engine.83a184a4.js";import{u as Fe,a as De}from"./use-dark.50ef5288.js";import{c as Ke,h as Me}from"./render.0f74db1f.js";import{g as Re}from"./scroll.340d2add.js";import{d as Ae}from"./use-size.7aba2b5f.js";import{a as He}from"./focus-manager.05708ea9.js";const s=[];let c;function Le(e){c=e.keyCode===27}function pe(){c===!0&&(c=!1)}function Qe(e){c===!0&&(c=!1,re(e,27)===!0&&s[s.length-1](e))}function _(e){window[e]("keydown",Le),window[e]("blur",pe),window[e]("keyup",Qe),c=!1}function We(e){j.is.desktop===!0&&(s.push(e),s.length===1&&_("addEventListener"))}function W(e){const o=s.indexOf(e);o>-1&&(s.splice(o,1),s.length===0&&_("removeEventListener"))}const i=[];function $(e){i[i.length-1](e)}function je(e){j.is.desktop===!0&&(i.push(e),i.length===1&&document.body.addEventListener("focusin",$))}function _e(e){const o=i.indexOf(e);o>-1&&(i.splice(o,1),i.length===0&&document.body.removeEventListener("focusin",$))}var Ve=Ke({name:"QMenu",inheritAttrs:!1,props:{...he,...me,...Fe,...ye,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:L},self:{type:String,validator:L},offset:{type:Array,validator:ke},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...xe,"click","escapeKey"],setup(e,{slots:o,emit:g,attrs:m}){let u=null,h,f,y;const S=ve(),{proxy:k}=S,{$q:n}=k,a=R(null),l=R(!1),G=r(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),I=De(e,n),{registerTick:U,removeTick:z}=Pe(),{registerTimeout:b}=Te(),{transitionProps:J,transitionStyle:N}=Ce(e),{localScrollTarget:w,changeScrollEvent:V,unconfigureScrollTarget:X}=Se(e,K),{anchorEl:d,canShow:Y}=be({showing:l}),{hide:O}=we({showing:l,canShow:Y,handleShow:ne,handleHide:ae,hideOnRouteChange:G,processOnMount:!0}),{showPortal:E,hidePortal:q,renderPortal:Z}=Oe(S,a,ie,"menu"),x={anchorEl:d,innerRef:a,onClickOutside(t){if(e.persistent!==!0&&l.value===!0)return O(t),(t.type==="touchstart"||t.target.classList.contains("q-dialog__backdrop"))&&ge(t),!0}},B=r(()=>Q(e.anchor||(e.cover===!0?"center middle":"bottom start"),n.lang.rtl)),ee=r(()=>e.cover===!0?B.value:Q(e.self||"top start",n.lang.rtl)),te=r(()=>(e.square===!0?" q-menu--square":"")+(I.value===!0?" q-menu--dark q-dark":"")),oe=r(()=>e.autoClose===!0?{onClick:se}:{}),F=r(()=>l.value===!0&&e.persistent!==!0);A(F,t=>{t===!0?(We(T),qe(x)):(W(T),p(x))});function P(){He(()=>{let t=a.value;t&&t.contains(document.activeElement)!==!0&&(t=t.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||t.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||t.querySelector("[autofocus], [data-autofocus]")||t,t.focus({preventScroll:!0}))})}function ne(t){if(u=e.noRefocus===!1?document.activeElement:null,je(M),E(),K(),h=void 0,t!==void 0&&(e.touchPosition||e.contextMenu)){const C=ce(t);if(C.left!==void 0){const{top:ue,left:le}=d.value.getBoundingClientRect();h={left:C.left-le,top:C.top-ue}}}f===void 0&&(f=A(()=>n.screen.width+"|"+n.screen.height+"|"+e.self+"|"+e.anchor+"|"+n.lang.rtl,v)),e.noFocus!==!0&&document.activeElement.blur(),U(()=>{v(),e.noFocus!==!0&&P()}),b(()=>{n.platform.is.ios===!0&&(y=e.autoClose,a.value.click()),v(),E(!0),g("show",t)},e.transitionDuration)}function ae(t){z(),q(),D(!0),u!==null&&(t===void 0||t.qClickOutside!==!0)&&(((t&&t.type.indexOf("key")===0?u.closest('[tabindex]:not([tabindex^="-"])'):void 0)||u).focus(),u=null),b(()=>{q(!0),g("hide",t)},e.transitionDuration)}function D(t){h=void 0,f!==void 0&&(f(),f=void 0),(t===!0||l.value===!0)&&(_e(M),X(),p(x),W(T)),t!==!0&&(u=null)}function K(){(d.value!==null||e.scrollTarget!==void 0)&&(w.value=Re(d.value,e.scrollTarget),V(w.value,v))}function se(t){y!==!0?(Be(k,t),g("click",t)):y=!1}function M(t){F.value===!0&&e.noFocus!==!0&&Ae(a.value,t.target)!==!0&&P()}function T(t){g("escapeKey"),O(t)}function v(){Ee({targetEl:a.value,offset:e.offset,anchorEl:d.value,anchorOrigin:B.value,selfOrigin:ee.value,absoluteOffset:h,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ie(){return H(fe,J.value,()=>l.value===!0?H("div",{role:"menu",...m,ref:a,tabindex:-1,class:["q-menu q-position-engine scroll"+te.value,m.class],style:[m.style,N.value],...oe.value},Me(o.default)):null)}return de(D),Object.assign(k,{focus:P,updatePosition:v}),Z}});export{Ve as Q};