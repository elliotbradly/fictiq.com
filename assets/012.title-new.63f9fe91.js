import{v as Me,a4 as Se,B as j,l as de,m as ae,q as G,r as I,c as y,a5 as Re,a6 as xe,a7 as Ve,G as qe,p as Y,a8 as _e,a9 as Ae,k as Fe,h as M,Q as W,T as Be,aa as Ee,ab as Te,M as fe,d as $e,H as Oe,o as Ie,a as Pe,w as ce,e as oe,g as Ne,u as je,J as De}from"./index.8810a47b.js";import{Q as ve}from"./use-router-link.3c80b8c6.js";import{a as ze,Q as Ue}from"./QBtn.2b40e40f.js";import{u as Le,a as Ze}from"./use-dark.2ee7e34f.js";import{h as X,c as Ke}from"./render.527c0c38.js";import{a as we,r as He,Q as Qe}from"./QSeparator.8cc3a99a.js";import{Q as Ye}from"./QPage.5e718bb9.js";function Je({validate:e,resetValidation:t,requiresQForm:u}){const i=Me(Se,!1);if(i!==!1){const{props:d,proxy:f}=G();Object.assign(f,{validate:e,resetValidation:t}),j(()=>d.disable,c=>{c===!0?(typeof t=="function"&&t(),i.unbindComponent(f)):i.bindComponent(f)}),de(()=>{d.disable!==!0&&i.bindComponent(f)}),ae(()=>{d.disable!==!0&&i.unbindComponent(f)})}else u===!0&&console.error("Parent QForm not found on useFormChild()!")}const me=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ge=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,he=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,ee=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,te=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,re={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>me.test(e),hexaColor:e=>ge.test(e),hexOrHexaColor:e=>he.test(e),rgbColor:e=>ee.test(e),rgbaColor:e=>te.test(e),rgbOrRgbaColor:e=>ee.test(e)||te.test(e),hexOrRgbColor:e=>me.test(e)||ee.test(e),hexaOrRgbaColor:e=>ge.test(e)||te.test(e),anyColor:e=>he.test(e)||ee.test(e)||te.test(e)},We=[!0,!1,"ondemand"],Ge={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>We.includes(e)}};function Xe(e,t){const{props:u,proxy:i}=G(),d=I(!1),f=I(null),c=I(null);Je({validate:$,resetValidation:F});let k=0,E;const R=y(()=>u.rules!==void 0&&u.rules!==null&&u.rules.length!==0),x=y(()=>u.disable!==!0&&R.value===!0),p=y(()=>u.error===!0||d.value===!0),H=y(()=>typeof u.errorMessage=="string"&&u.errorMessage.length!==0?u.errorMessage:f.value);j(()=>u.modelValue,()=>{U()}),j(()=>u.reactiveRules,N=>{N===!0?E===void 0&&(E=j(()=>u.rules,()=>{U(!0)})):E!==void 0&&(E(),E=void 0)},{immediate:!0}),j(e,N=>{N===!0?c.value===null&&(c.value=!1):c.value===!1&&(c.value=!0,x.value===!0&&u.lazyRules!=="ondemand"&&t.value===!1&&P())});function F(){k++,t.value=!1,c.value=null,d.value=!1,f.value=null,P.cancel()}function $(N=u.modelValue){if(x.value!==!0)return!0;const q=++k,Q=t.value!==!0?()=>{c.value=!0}:()=>{},z=(S,w)=>{S===!0&&Q(),d.value=S,f.value=w||null,t.value=!1},D=[];for(let S=0;S<u.rules.length;S++){const w=u.rules[S];let B;if(typeof w=="function"?B=w(N,re):typeof w=="string"&&re[w]!==void 0&&(B=re[w](N)),B===!1||typeof B=="string")return z(!0,B),!1;B!==!0&&B!==void 0&&D.push(B)}return D.length===0?(z(!1),!0):(t.value=!0,Promise.all(D).then(S=>{if(S===void 0||Array.isArray(S)===!1||S.length===0)return q===k&&z(!1),!0;const w=S.find(B=>B===!1||typeof B=="string");return q===k&&z(w!==void 0,w),w===void 0},S=>(q===k&&(console.error(S),z(!0)),!1)))}function U(N){x.value===!0&&u.lazyRules!=="ondemand"&&(c.value===!0||u.lazyRules!==!0&&N!==!0)&&P()}const P=Re($,0);return ae(()=>{E!==void 0&&E(),P.cancel()}),Object.assign(i,{resetValidation:F,validate:$}),xe(i,"hasError",()=>p.value),{isDirtyModel:c,hasRules:R,hasError:p,errorMessage:H,validate:$,resetValidation:F}}const pe=/^on[A-Z]/;function et(e,t){const u={listeners:I({}),attributes:I({})};function i(){const d={},f={};for(const c in e)c!=="class"&&c!=="style"&&pe.test(c)===!1&&(d[c]=e[c]);for(const c in t.props)pe.test(c)===!0&&(f[c]=t.props[c]);u.attributes.value=d,u.listeners.value=f}return Ve(i),i(),u}let ue,le=0;const T=new Array(256);for(let e=0;e<256;e++)T[e]=(e+256).toString(16).substring(1);const tt=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const u=new Uint8Array(t);return e.getRandomValues(u),u}}return t=>{const u=[];for(let i=t;i>0;i--)u.push(Math.floor(Math.random()*256));return u}})(),be=4096;function lt(){(ue===void 0||le+16>be)&&(le=0,ue=tt(be));const e=Array.prototype.slice.call(ue,le,le+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,T[e[0]]+T[e[1]]+T[e[2]]+T[e[3]]+"-"+T[e[4]]+T[e[5]]+"-"+T[e[6]]+T[e[7]]+"-"+T[e[8]]+T[e[9]]+"-"+T[e[10]]+T[e[11]]+T[e[12]]+T[e[13]]+T[e[14]]+T[e[15]]}function ie(e){return e===void 0?`f_${lt()}`:e}function se(e){return e!=null&&(""+e).length!==0}const nt={...Le,...Ge,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},at=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function ot(){const{props:e,attrs:t,proxy:u,vnode:i}=G();return{isDark:Ze(e,u.$q),editable:y(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:I(!1),focused:I(!1),hasPopupOpen:!1,splitAttrs:et(t,i),targetUid:I(ie(e.for)),rootRef:I(null),targetRef:I(null),controlRef:I(null)}}function rt(e){const{props:t,emit:u,slots:i,attrs:d,proxy:f}=G(),{$q:c}=f;let k=null;e.hasValue===void 0&&(e.hasValue=y(()=>se(t.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{u("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:o,onFocusout:a}),Object.assign(e,{clearValue:s,onControlFocusin:o,onControlFocusout:a,focus:w}),e.computedCounter===void 0&&(e.computedCounter=y(()=>{if(t.counter!==!1){const l=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,h=t.maxlength!==void 0?t.maxlength:t.maxValues;return l+(h!==void 0?" / "+h:"")}}));const{isDirtyModel:E,hasRules:R,hasError:x,errorMessage:p,resetValidation:H}=Xe(e.focused,e.innerLoading),F=e.floatingLabel!==void 0?y(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):y(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),$=y(()=>t.bottomSlots===!0||t.hint!==void 0||R.value===!0||t.counter===!0||t.error!==null),U=y(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),P=y(()=>`q-field row no-wrap items-start q-field--${U.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(F.value===!0?" q-field--float":"")+(q.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(x.value===!0?" q-field--error":"")+(x.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&$.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),N=y(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(x.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),q=y(()=>t.labelSlot===!0||t.label!==void 0),Q=y(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&x.value!==!0?` text-${t.labelColor}`:"")),z=y(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:F.value,modelValue:t.modelValue,emitValue:e.emitValue})),D=y(()=>{const l={for:e.targetUid.value};return t.disable===!0?l["aria-disabled"]="true":t.readonly===!0&&(l["aria-readonly"]="true"),l});j(()=>t.for,l=>{e.targetUid.value=ie(l)});function S(){const l=document.activeElement;let h=e.targetRef!==void 0&&e.targetRef.value;h&&(l===null||l.id!==e.targetUid.value)&&(h.hasAttribute("tabindex")===!0||(h=h.querySelector("[tabindex]")),h&&h!==l&&h.focus({preventScroll:!0}))}function w(){we(S)}function B(){He(S);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function o(l){k!==null&&(clearTimeout(k),k=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,u("focus",l))}function a(l,h){k!==null&&clearTimeout(k),k=setTimeout(()=>{k=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,u("blur",l)),h!==void 0&&h())})}function s(l){qe(l),c.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),u("update:modelValue",null),u("clear",t.modelValue),Y(()=>{H(),c.platform.is.mobile!==!0&&(E.value=!1)})}function r(){const l=[];return i.prepend!==void 0&&l.push(M("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:W},i.prepend())),l.push(M("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},m())),x.value===!0&&t.noErrorIcon===!1&&l.push(C("error",[M(ve,{name:c.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?l.push(C("inner-loading-append",i.loading!==void 0?i.loading():[M(ze,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push(C("inner-clearable-append",[M(ve,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||c.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:s})])),i.append!==void 0&&l.push(M("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:W},i.append())),e.getInnerAppend!==void 0&&l.push(C("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function m(){const l=[];return t.prefix!==void 0&&t.prefix!==null&&l.push(M("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):i.rawControl!==void 0?l.push(i.rawControl()):i.control!==void 0&&l.push(M("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},i.control(z.value))),q.value===!0&&l.push(M("div",{class:Q.value},X(i.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&l.push(M("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),l.concat(X(i.default))}function v(){let l,h;x.value===!0?p.value!==null?(l=[M("div",{role:"alert"},p.value)],h=`q--slot-error-${p.value}`):(l=X(i.error),h="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(l=[M("div",t.hint)],h=`q--slot-hint-${t.hint}`):(l=X(i.hint),h="q--slot-hint"));const L=t.counter===!0||i.counter!==void 0;if(t.hideBottomSpace===!0&&L===!1&&l===void 0)return;const b=M("div",{key:h,class:"q-field__messages col"},l);return M("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:W},[t.hideBottomSpace===!0?b:M(Be,{name:"q-transition--field-message"},()=>b),L===!0?M("div",{class:"q-field__counter"},i.counter!==void 0?i.counter():e.computedCounter.value):null])}function C(l,h){return h===null?null:M("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},h)}let g=!1;return _e(()=>{g=!0}),Ae(()=>{g===!0&&t.autofocus===!0&&f.focus()}),de(()=>{Fe.value===!0&&t.for===void 0&&(e.targetUid.value=ie()),t.autofocus===!0&&f.focus()}),ae(()=>{k!==null&&clearTimeout(k)}),Object.assign(f,{focus:w,blur:B}),function(){const h=e.getControl===void 0&&i.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...D.value}:D.value;return M("label",{ref:e.rootRef,class:[P.value,d.class],style:d.style,...h},[i.before!==void 0?M("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:W},i.before()):null,M("div",{class:"q-field__inner relative-position col self-stretch"},[M("div",{ref:e.controlRef,class:N.value,tabindex:-1,...e.controlEvents},r()),$.value===!0?v():null]),i.after!==void 0?M("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:W},i.after()):null])}}const ye={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},ne={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Ce=Object.keys(ne);Ce.forEach(e=>{ne[e].regex=new RegExp(ne[e].pattern)});const ut=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Ce.join("")+"])|(.)","g"),ke=/[.*+?^${}()|[\]\\]/g,_=String.fromCharCode(1),it={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function st(e,t,u,i){let d,f,c,k,E,R;const x=I(null),p=I(F());function H(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}j(()=>e.type+e.autogrow,U),j(()=>e.mask,o=>{if(o!==void 0)P(p.value,!0);else{const a=w(p.value);U(),e.modelValue!==a&&t("update:modelValue",a)}}),j(()=>e.fillMask+e.reverseFillMask,()=>{x.value===!0&&P(p.value,!0)}),j(()=>e.unmaskedValue,()=>{x.value===!0&&P(p.value)});function F(){if(U(),x.value===!0){const o=D(w(e.modelValue));return e.fillMask!==!1?B(o):o}return e.modelValue}function $(o){if(o<d.length)return d.slice(-o);let a="",s=d;const r=s.indexOf(_);if(r>-1){for(let m=o-s.length;m>0;m--)a+=_;s=s.slice(0,r)+a+s.slice(r)}return s}function U(){if(x.value=e.mask!==void 0&&e.mask.length!==0&&H(),x.value===!1){k=void 0,d="",f="";return}const o=ye[e.mask]===void 0?e.mask:ye[e.mask],a=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",s=a.replace(ke,"\\$&"),r=[],m=[],v=[];let C=e.reverseFillMask===!0,g="",l="";o.replace(ut,(A,n,V,K,Z)=>{if(K!==void 0){const O=ne[K];v.push(O),l=O.negate,C===!0&&(m.push("(?:"+l+"+)?("+O.pattern+"+)?(?:"+l+"+)?("+O.pattern+"+)?"),C=!1),m.push("(?:"+l+"+)?("+O.pattern+")?")}else if(V!==void 0)g="\\"+(V==="\\"?"":V),v.push(V),r.push("([^"+g+"]+)?"+g+"?");else{const O=n!==void 0?n:Z;g=O==="\\"?"\\\\\\\\":O.replace(ke,"\\\\$&"),v.push(O),r.push("([^"+g+"]+)?"+g+"?")}});const h=new RegExp("^"+r.join("")+"("+(g===""?".":"[^"+g+"]")+"+)?"+(g===""?"":"["+g+"]*")+"$"),L=m.length-1,b=m.map((A,n)=>n===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+A):n===L?new RegExp("^"+A+"("+(l===""?".":l)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+A));c=v,k=A=>{const n=h.exec(e.reverseFillMask===!0?A:A.slice(0,v.length+1));n!==null&&(A=n.slice(1).join(""));const V=[],K=b.length;for(let Z=0,O=A;Z<K;Z++){const J=b[Z].exec(O);if(J===null)break;O=O.slice(J.shift().length),V.push(...J)}return V.length!==0?V.join(""):A},d=v.map(A=>typeof A=="string"?A:_).join(""),f=d.split(_).join(a)}function P(o,a,s){const r=i.value,m=r.selectionEnd,v=r.value.length-m,C=w(o);a===!0&&U();const g=D(C),l=e.fillMask!==!1?B(g):g,h=p.value!==l;r.value!==l&&(r.value=l),h===!0&&(p.value=l),document.activeElement===r&&Y(()=>{if(l===f){const b=e.reverseFillMask===!0?f.length:0;r.setSelectionRange(b,b,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const b=r.selectionEnd;let A=m-1;for(let n=E;n<=A&&n<b;n++)d[n]!==_&&A++;q.right(r,A);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)>-1){const b=e.reverseFillMask===!0?m===0?l.length>g.length?1:0:Math.max(0,l.length-(l===f?0:Math.min(g.length,v)+1))+1:m;r.setSelectionRange(b,b,"forward");return}if(e.reverseFillMask===!0)if(h===!0){const b=Math.max(0,l.length-(l===f?0:Math.min(g.length,v+1)));b===1&&m===1?r.setSelectionRange(b,b,"forward"):q.rightReverse(r,b)}else{const b=l.length-v;r.setSelectionRange(b,b,"backward")}else if(h===!0){const b=Math.max(0,d.indexOf(_),Math.min(g.length,m)-1);q.right(r,b)}else{const b=m-1;q.right(r,b)}});const L=e.unmaskedValue===!0?w(l):l;String(e.modelValue)!==L&&(e.modelValue!==null||L!=="")&&u(L,!0)}function N(o,a,s){const r=D(w(o.value));a=Math.max(0,d.indexOf(_),Math.min(r.length,a)),E=a,o.setSelectionRange(a,s,"forward")}const q={left(o,a){const s=d.slice(a-1).indexOf(_)===-1;let r=Math.max(0,a-1);for(;r>=0;r--)if(d[r]===_){a=r,s===!0&&a++;break}if(r<0&&d[a]!==void 0&&d[a]!==_)return q.right(o,0);a>=0&&o.setSelectionRange(a,a,"backward")},right(o,a){const s=o.value.length;let r=Math.min(s,a+1);for(;r<=s;r++)if(d[r]===_){a=r;break}else d[r-1]===_&&(a=r);if(r>s&&d[a-1]!==void 0&&d[a-1]!==_)return q.left(o,s);o.setSelectionRange(a,a,"forward")},leftReverse(o,a){const s=$(o.value.length);let r=Math.max(0,a-1);for(;r>=0;r--)if(s[r-1]===_){a=r;break}else if(s[r]===_&&(a=r,r===0))break;if(r<0&&s[a]!==void 0&&s[a]!==_)return q.rightReverse(o,0);a>=0&&o.setSelectionRange(a,a,"backward")},rightReverse(o,a){const s=o.value.length,r=$(s),m=r.slice(0,a+1).indexOf(_)===-1;let v=Math.min(s,a+1);for(;v<=s;v++)if(r[v-1]===_){a=v,a>0&&m===!0&&a--;break}if(v>s&&r[a-1]!==void 0&&r[a-1]!==_)return q.leftReverse(o,s);o.setSelectionRange(a,a,"forward")}};function Q(o){t("click",o),R=void 0}function z(o){if(t("keydown",o),Ee(o)===!0||o.altKey===!0)return;const a=i.value,s=a.selectionStart,r=a.selectionEnd;if(o.shiftKey||(R=void 0),o.keyCode===37||o.keyCode===39){o.shiftKey&&R===void 0&&(R=a.selectionDirection==="forward"?s:r);const m=q[(o.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(o.preventDefault(),m(a,R===s?r:s),o.shiftKey){const v=a.selectionStart;a.setSelectionRange(Math.min(R,v),Math.max(R,v),"forward")}}else o.keyCode===8&&e.reverseFillMask!==!0&&s===r?(q.left(a,s),a.setSelectionRange(a.selectionStart,r,"backward")):o.keyCode===46&&e.reverseFillMask===!0&&s===r&&(q.rightReverse(a,r),a.setSelectionRange(s,a.selectionEnd,"forward"))}function D(o){if(o==null||o==="")return"";if(e.reverseFillMask===!0)return S(o);const a=c;let s=0,r="";for(let m=0;m<a.length;m++){const v=o[s],C=a[m];if(typeof C=="string")r+=C,v===C&&s++;else if(v!==void 0&&C.regex.test(v))r+=C.transform!==void 0?C.transform(v):v,s++;else return r}return r}function S(o){const a=c,s=d.indexOf(_);let r=o.length-1,m="";for(let v=a.length-1;v>=0&&r>-1;v--){const C=a[v];let g=o[r];if(typeof C=="string")m=C+m,g===C&&r--;else if(g!==void 0&&C.regex.test(g))do m=(C.transform!==void 0?C.transform(g):g)+m,r--,g=o[r];while(s===v&&g!==void 0&&C.regex.test(g));else return m}return m}function w(o){return typeof o!="string"||k===void 0?typeof o=="number"?k(""+o):o:k(o)}function B(o){return f.length-o.length<=0?o:e.reverseFillMask===!0&&o.length!==0?f.slice(0,-o.length)+o:o+f.slice(o.length)}return{innerValue:p,hasMask:x,moveCursorForPaste:N,updateMaskValue:P,onMaskedKeydown:z,onMaskedClick:Q}}const dt={name:String};function ft(e){return y(()=>e.name||e.for)}function ct(e,t){function u(){const i=e.modelValue;try{const d="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(f=>{d.items.add(f)}),{files:d.files}}catch{return{files:void 0}}}return t===!0?y(()=>{if(e.type==="file")return u()}):y(u)}const vt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,mt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,gt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,ht=/[a-z0-9_ -]$/i;function pt(e){return function(u){if(u.type==="compositionend"||u.type==="change"){if(u.target.qComposing!==!0)return;u.target.qComposing=!1,e(u)}else u.type==="compositionupdate"&&u.target.qComposing!==!0&&typeof u.data=="string"&&(Te.is.firefox===!0?ht.test(u.data)===!1:vt.test(u.data)===!0||mt.test(u.data)===!0||gt.test(u.data)===!0)===!0&&(u.target.qComposing=!0)}}var bt=Ke({name:"QInput",inheritAttrs:!1,props:{...nt,...it,...dt,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...at,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:u}){const{proxy:i}=G(),{$q:d}=i,f={};let c=NaN,k,E,R=null,x;const p=I(null),H=ft(e),{innerValue:F,hasMask:$,moveCursorForPaste:U,updateMaskValue:P,onMaskedKeydown:N,onMaskedClick:q}=st(e,t,g,p),Q=ct(e,!0),z=y(()=>se(F.value)),D=pt(v),S=ot(),w=y(()=>e.type==="textarea"||e.autogrow===!0),B=y(()=>w.value===!0||["text","search","url","tel","password"].includes(e.type)),o=y(()=>{const n={...S.splitAttrs.listeners.value,onInput:v,onPaste:m,onChange:h,onBlur:L,onFocus:fe};return n.onCompositionstart=n.onCompositionupdate=n.onCompositionend=D,$.value===!0&&(n.onKeydown=N,n.onClick=q),e.autogrow===!0&&(n.onAnimationend=C),n}),a=y(()=>{const n={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:H.value,...S.splitAttrs.attributes.value,id:S.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return w.value===!1&&(n.type=e.type),e.autogrow===!0&&(n.rows=1),n});j(()=>e.type,()=>{p.value&&(p.value.value=e.modelValue)}),j(()=>e.modelValue,n=>{if($.value===!0){if(E===!0&&(E=!1,String(n)===c))return;P(n)}else F.value!==n&&(F.value=n,e.type==="number"&&f.hasOwnProperty("value")===!0&&(k===!0?k=!1:delete f.value));e.autogrow===!0&&Y(l)}),j(()=>e.autogrow,n=>{n===!0?Y(l):p.value!==null&&u.rows>0&&(p.value.style.height="auto")}),j(()=>e.dense,()=>{e.autogrow===!0&&Y(l)});function s(){we(()=>{const n=document.activeElement;p.value!==null&&p.value!==n&&(n===null||n.id!==S.targetUid.value)&&p.value.focus({preventScroll:!0})})}function r(){p.value!==null&&p.value.select()}function m(n){if($.value===!0&&e.reverseFillMask!==!0){const V=n.target;U(V,V.selectionStart,V.selectionEnd)}t("paste",n)}function v(n){if(!n||!n.target)return;if(e.type==="file"){t("update:modelValue",n.target.files);return}const V=n.target.value;if(n.target.qComposing===!0){f.value=V;return}if($.value===!0)P(V,!1,n.inputType);else if(g(V),B.value===!0&&n.target===document.activeElement){const{selectionStart:K,selectionEnd:Z}=n.target;K!==void 0&&Z!==void 0&&Y(()=>{n.target===document.activeElement&&V.indexOf(n.target.value)===0&&n.target.setSelectionRange(K,Z)})}e.autogrow===!0&&l()}function C(n){t("animationend",n),l()}function g(n,V){x=()=>{R=null,e.type!=="number"&&f.hasOwnProperty("value")===!0&&delete f.value,e.modelValue!==n&&c!==n&&(c=n,V===!0&&(E=!0),t("update:modelValue",n),Y(()=>{c===n&&(c=NaN)})),x=void 0},e.type==="number"&&(k=!0,f.value=n),e.debounce!==void 0?(R!==null&&clearTimeout(R),f.value=n,R=setTimeout(x,e.debounce)):x()}function l(){requestAnimationFrame(()=>{const n=p.value;if(n!==null){const V=n.parentNode.style,{scrollTop:K}=n,{overflowY:Z,maxHeight:O}=d.platform.is.firefox===!0?{}:window.getComputedStyle(n),J=Z!==void 0&&Z!=="scroll";J===!0&&(n.style.overflowY="hidden"),V.marginBottom=n.scrollHeight-1+"px",n.style.height="1px",n.style.height=n.scrollHeight+"px",J===!0&&(n.style.overflowY=parseInt(O,10)<n.scrollHeight?"auto":"hidden"),V.marginBottom="",n.scrollTop=K}})}function h(n){D(n),R!==null&&(clearTimeout(R),R=null),x!==void 0&&x(),t("change",n.target.value)}function L(n){n!==void 0&&fe(n),R!==null&&(clearTimeout(R),R=null),x!==void 0&&x(),k=!1,E=!1,delete f.value,e.type!=="file"&&setTimeout(()=>{p.value!==null&&(p.value.value=F.value!==void 0?F.value:"")})}function b(){return f.hasOwnProperty("value")===!0?f.value:F.value!==void 0?F.value:""}ae(()=>{L()}),de(()=>{e.autogrow===!0&&l()}),Object.assign(S,{innerValue:F,fieldClass:y(()=>`q-${w.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:y(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:p,emitValue:g,hasValue:z,floatingLabel:y(()=>z.value===!0&&(e.type!=="number"||isNaN(F.value)===!1)||se(e.displayValue)),getControl:()=>M(w.value===!0?"textarea":"input",{ref:p,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...a.value,...o.value,...e.type!=="file"?{value:b()}:Q.value}),getShadowControl:()=>M("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(w.value===!0?"":" text-no-wrap")},[M("span",{class:"invisible"},b()),M("span",e.shadowText)])});const A=rt(S);return Object.assign(i,{focus:s,select:r,getNativeElement:()=>p.value}),xe(i,"nativeEl",()=>p.value),A}});const yt=De("h6",null,"Create New Title",-1),kt=$e({name:"Title New Screen"}),qt=Object.assign(kt,{setup(e){const t=I("");Oe();var u=()=>{};return(i,d)=>(Ie(),Pe(Ye,{class:"window-height"},{default:ce(()=>[yt,oe(bt,{outlined:"",modelValue:t.value,"onUpdate:modelValue":d[0]||(d[0]=f=>t.value=f),label:"Title Name"},null,8,["modelValue"]),oe(Qe,{color:"black",spaced:"true",inset:"false",size:"30px"}),oe(Ue,{outline:"",color:"text-primary",class:"full-width",onClick:d[1]||(d[1]=f=>je(u)())},{default:ce(()=>[Ne("Create Now")]),_:1})]),_:1}))}});export{qt as default};
