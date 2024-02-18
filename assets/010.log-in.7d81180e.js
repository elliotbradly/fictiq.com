import{m as Pe,I as Re,x as Q,y as ie,z as se,g as X,r as L,c as y,J as Ie,K as Ve,L as Oe,s as ce,D as J,M as Ae,N as Fe,C as Te,h as x,O as te,T as ze,Q as De,R as je,S as pe,q as Ne,_ as Le,o as Qe,e as Ue,w as ee,U as ne,f as Y}from"./index.5591a0bb.js";import{Q as be,v as Ke}from"./use-router-link.022db7c8.js";import{Q as Ze,u as He,a as Ye,b as Je}from"./QBtn.05184a95.js";import{u as Be,a as Ee}from"./use-dark.9a4dc903.js";import{h as W,c as oe}from"./render.84f2d0df.js";import{Q as We}from"./QPage.83f0b142.js";function Xe({validate:e,resetValidation:t,requiresQForm:u}){const i=Pe(Re,!1);if(i!==!1){const{props:s,proxy:f}=X();Object.assign(f,{validate:e,resetValidation:t}),Q(()=>s.disable,c=>{c===!0?(typeof t=="function"&&t(),i.unbindComponent(f)):i.bindComponent(f)}),ie(()=>{s.disable!==!0&&i.bindComponent(f)}),se(()=>{s.disable!==!0&&i.unbindComponent(f)})}else u===!0&&console.error("Parent QForm not found on useFormChild()!")}const ye=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,xe=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,ke=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,le=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ae=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,de={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>ye.test(e),hexaColor:e=>xe.test(e),hexOrHexaColor:e=>ke.test(e),rgbColor:e=>le.test(e),rgbaColor:e=>ae.test(e),rgbOrRgbaColor:e=>le.test(e)||ae.test(e),hexOrRgbColor:e=>ye.test(e)||le.test(e),hexaOrRgbaColor:e=>xe.test(e)||ae.test(e),anyColor:e=>ke.test(e)||le.test(e)||ae.test(e)},Ge=[!0,!1,"ondemand"],et={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>Ge.includes(e)}};function tt(e,t){const{props:u,proxy:i}=X(),s=L(!1),f=L(null),c=L(null);Xe({validate:V,resetValidation:v});let k=0,$;const _=y(()=>u.rules!==void 0&&u.rules!==null&&u.rules.length!==0),w=y(()=>u.disable!==!0&&_.value===!0),m=y(()=>u.error===!0||s.value===!0),Z=y(()=>typeof u.errorMessage=="string"&&u.errorMessage.length!==0?u.errorMessage:f.value);Q(()=>u.modelValue,()=>{j()}),Q(()=>u.reactiveRules,z=>{z===!0?$===void 0&&($=Q(()=>u.rules,()=>{j(!0)})):$!==void 0&&($(),$=void 0)},{immediate:!0}),Q(e,z=>{z===!0?c.value===null&&(c.value=!1):c.value===!1&&(c.value=!0,w.value===!0&&u.lazyRules!=="ondemand"&&t.value===!1&&T())});function v(){k++,t.value=!1,c.value=null,s.value=!1,f.value=null,T.cancel()}function V(z=u.modelValue){if(w.value!==!0)return!0;const E=++k,R=t.value!==!0?()=>{c.value=!0}:()=>{},A=(q,C)=>{q===!0&&R(),s.value=q,f.value=C||null,t.value=!1},F=[];for(let q=0;q<u.rules.length;q++){const C=u.rules[q];let O;if(typeof C=="function"?O=C(z,de):typeof C=="string"&&de[C]!==void 0&&(O=de[C](z)),O===!1||typeof O=="string")return A(!0,O),!1;O!==!0&&O!==void 0&&F.push(O)}return F.length===0?(A(!1),!0):(t.value=!0,Promise.all(F).then(q=>{if(q===void 0||Array.isArray(q)===!1||q.length===0)return E===k&&A(!1),!0;const C=q.find(O=>O===!1||typeof O=="string");return E===k&&A(C!==void 0,C),C===void 0},q=>(E===k&&(console.error(q),A(!0)),!1)))}function j(z){w.value===!0&&u.lazyRules!=="ondemand"&&(c.value===!0||u.lazyRules!==!0&&z!==!0)&&T()}const T=Ie(V,0);return se(()=>{$!==void 0&&$(),T.cancel()}),Object.assign(i,{resetValidation:v,validate:V}),Ve(i,"hasError",()=>m.value),{isDirtyModel:c,hasRules:_,hasError:m,errorMessage:Z,validate:V,resetValidation:v}}const we=/^on[A-Z]/;function nt(e,t){const u={listeners:L({}),attributes:L({})};function i(){const s={},f={};for(const c in e)c!=="class"&&c!=="style"&&we.test(c)===!1&&(s[c]=e[c]);for(const c in t.props)we.test(c)===!0&&(f[c]=t.props[c]);u.attributes.value=s,u.listeners.value=f}return Oe(i),i(),u}let fe,re=0;const D=new Array(256);for(let e=0;e<256;e++)D[e]=(e+256).toString(16).substring(1);const ot=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const u=new Uint8Array(t);return e.getRandomValues(u),u}}return t=>{const u=[];for(let i=t;i>0;i--)u.push(Math.floor(Math.random()*256));return u}})(),Ce=4096;function lt(){(fe===void 0||re+16>Ce)&&(re=0,fe=ot(Ce));const e=Array.prototype.slice.call(fe,re,re+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,D[e[0]]+D[e[1]]+D[e[2]]+D[e[3]]+"-"+D[e[4]]+D[e[5]]+"-"+D[e[6]]+D[e[7]]+"-"+D[e[8]]+D[e[9]]+"-"+D[e[10]]+D[e[11]]+D[e[12]]+D[e[13]]+D[e[14]]+D[e[15]]}let ve=[],at=[];function he(e){at.length===0?e():ve.push(e)}function rt(e){ve=ve.filter(t=>t!==e)}function me(e){return e===void 0?`f_${lt()}`:e}function ge(e){return e!=null&&(""+e).length!==0}const ut={...Be,...et,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},it=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function st(){const{props:e,attrs:t,proxy:u,vnode:i}=X();return{isDark:Ee(e,u.$q),editable:y(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:L(!1),focused:L(!1),hasPopupOpen:!1,splitAttrs:nt(t,i),targetUid:L(me(e.for)),rootRef:L(null),targetRef:L(null),controlRef:L(null)}}function dt(e){const{props:t,emit:u,slots:i,attrs:s,proxy:f}=X(),{$q:c}=f;let k=null;e.hasValue===void 0&&(e.hasValue=y(()=>ge(t.modelValue))),e.emitValue===void 0&&(e.emitValue=n=>{u("update:modelValue",n)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:a,onFocusout:l}),Object.assign(e,{clearValue:d,onControlFocusin:a,onControlFocusout:l,focus:C}),e.computedCounter===void 0&&(e.computedCounter=y(()=>{if(t.counter!==!1){const n=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,b=t.maxlength!==void 0?t.maxlength:t.maxValues;return n+(b!==void 0?" / "+b:"")}}));const{isDirtyModel:$,hasRules:_,hasError:w,errorMessage:m,resetValidation:Z}=tt(e.focused,e.innerLoading),v=e.floatingLabel!==void 0?y(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):y(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),V=y(()=>t.bottomSlots===!0||t.hint!==void 0||_.value===!0||t.counter===!0||t.error!==null),j=y(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),T=y(()=>`q-field row no-wrap items-start q-field--${j.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(v.value===!0?" q-field--float":"")+(E.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(w.value===!0?" q-field--error":"")+(w.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&V.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),z=y(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(w.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),E=y(()=>t.labelSlot===!0||t.label!==void 0),R=y(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&w.value!==!0?` text-${t.labelColor}`:"")),A=y(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:v.value,modelValue:t.modelValue,emitValue:e.emitValue})),F=y(()=>{const n={for:e.targetUid.value};return t.disable===!0?n["aria-disabled"]="true":t.readonly===!0&&(n["aria-readonly"]="true"),n});Q(()=>t.for,n=>{e.targetUid.value=me(n)});function q(){const n=document.activeElement;let b=e.targetRef!==void 0&&e.targetRef.value;b&&(n===null||n.id!==e.targetUid.value)&&(b.hasAttribute("tabindex")===!0||(b=b.querySelector("[tabindex]")),b&&b!==n&&b.focus({preventScroll:!0}))}function C(){he(q)}function O(){rt(q);const n=document.activeElement;n!==null&&e.rootRef.value.contains(n)&&n.blur()}function a(n){k!==null&&(clearTimeout(k),k=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,u("focus",n))}function l(n,b){k!==null&&clearTimeout(k),k=setTimeout(()=>{k=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,u("blur",n)),b!==void 0&&b())})}function d(n){ce(n),c.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),u("update:modelValue",null),u("clear",t.modelValue),J(()=>{Z(),c.platform.is.mobile!==!0&&($.value=!1)})}function r(){const n=[];return i.prepend!==void 0&&n.push(x("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:te},i.prepend())),n.push(x("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},h())),w.value===!0&&t.noErrorIcon===!1&&n.push(M("error",[x(be,{name:c.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?n.push(M("inner-loading-append",i.loading!==void 0?i.loading():[x(Ze,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&n.push(M("inner-clearable-append",[x(be,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||c.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:d})])),i.append!==void 0&&n.push(x("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:te},i.append())),e.getInnerAppend!==void 0&&n.push(M("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&n.push(e.getControlChild()),n}function h(){const n=[];return t.prefix!==void 0&&t.prefix!==null&&n.push(x("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&n.push(e.getShadowControl()),e.getControl!==void 0?n.push(e.getControl()):i.rawControl!==void 0?n.push(i.rawControl()):i.control!==void 0&&n.push(x("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},i.control(A.value))),E.value===!0&&n.push(x("div",{class:R.value},W(i.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&n.push(x("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),n.concat(W(i.default))}function g(){let n,b;w.value===!0?m.value!==null?(n=[x("div",{role:"alert"},m.value)],b=`q--slot-error-${m.value}`):(n=W(i.error),b="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(n=[x("div",t.hint)],b=`q--slot-hint-${t.hint}`):(n=W(i.hint),b="q--slot-hint"));const U=t.counter===!0||i.counter!==void 0;if(t.hideBottomSpace===!0&&U===!1&&n===void 0)return;const S=x("div",{key:b,class:"q-field__messages col"},n);return x("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:te},[t.hideBottomSpace===!0?S:x(ze,{name:"q-transition--field-message"},()=>S),U===!0?x("div",{class:"q-field__counter"},i.counter!==void 0?i.counter():e.computedCounter.value):null])}function M(n,b){return b===null?null:x("div",{key:n,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},b)}let p=!1;return Ae(()=>{p=!0}),Fe(()=>{p===!0&&t.autofocus===!0&&f.focus()}),ie(()=>{Te.value===!0&&t.for===void 0&&(e.targetUid.value=me()),t.autofocus===!0&&f.focus()}),se(()=>{k!==null&&clearTimeout(k)}),Object.assign(f,{focus:C,blur:O}),function(){const b=e.getControl===void 0&&i.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...F.value}:F.value;return x("label",{ref:e.rootRef,class:[T.value,s.class],style:s.style,...b},[i.before!==void 0?x("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:te},i.before()):null,x("div",{class:"q-field__inner relative-position col self-stretch"},[x("div",{ref:e.controlRef,class:z.value,tabindex:-1,...e.controlEvents},r()),V.value===!0?g():null]),i.after!==void 0?x("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:te},i.after()):null])}}const qe={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},ue={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},$e=Object.keys(ue);$e.forEach(e=>{ue[e].regex=new RegExp(ue[e].pattern)});const ft=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+$e.join("")+"])|(.)","g"),Se=/[.*+?^${}()|[\]\\]/g,P=String.fromCharCode(1),ct={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function vt(e,t,u,i){let s,f,c,k,$,_;const w=L(null),m=L(v());function Z(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}Q(()=>e.type+e.autogrow,j),Q(()=>e.mask,a=>{if(a!==void 0)T(m.value,!0);else{const l=C(m.value);j(),e.modelValue!==l&&t("update:modelValue",l)}}),Q(()=>e.fillMask+e.reverseFillMask,()=>{w.value===!0&&T(m.value,!0)}),Q(()=>e.unmaskedValue,()=>{w.value===!0&&T(m.value)});function v(){if(j(),w.value===!0){const a=F(C(e.modelValue));return e.fillMask!==!1?O(a):a}return e.modelValue}function V(a){if(a<s.length)return s.slice(-a);let l="",d=s;const r=d.indexOf(P);if(r>-1){for(let h=a-d.length;h>0;h--)l+=P;d=d.slice(0,r)+l+d.slice(r)}return d}function j(){if(w.value=e.mask!==void 0&&e.mask.length!==0&&Z(),w.value===!1){k=void 0,s="",f="";return}const a=qe[e.mask]===void 0?e.mask:qe[e.mask],l=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",d=l.replace(Se,"\\$&"),r=[],h=[],g=[];let M=e.reverseFillMask===!0,p="",n="";a.replace(ft,(I,o,B,H,K)=>{if(H!==void 0){const N=ue[H];g.push(N),n=N.negate,M===!0&&(h.push("(?:"+n+"+)?("+N.pattern+"+)?(?:"+n+"+)?("+N.pattern+"+)?"),M=!1),h.push("(?:"+n+"+)?("+N.pattern+")?")}else if(B!==void 0)p="\\"+(B==="\\"?"":B),g.push(B),r.push("([^"+p+"]+)?"+p+"?");else{const N=o!==void 0?o:K;p=N==="\\"?"\\\\\\\\":N.replace(Se,"\\\\$&"),g.push(N),r.push("([^"+p+"]+)?"+p+"?")}});const b=new RegExp("^"+r.join("")+"("+(p===""?".":"[^"+p+"]")+"+)?"+(p===""?"":"["+p+"]*")+"$"),U=h.length-1,S=h.map((I,o)=>o===0&&e.reverseFillMask===!0?new RegExp("^"+d+"*"+I):o===U?new RegExp("^"+I+"("+(n===""?".":n)+"+)?"+(e.reverseFillMask===!0?"$":d+"*")):new RegExp("^"+I));c=g,k=I=>{const o=b.exec(e.reverseFillMask===!0?I:I.slice(0,g.length+1));o!==null&&(I=o.slice(1).join(""));const B=[],H=S.length;for(let K=0,N=I;K<H;K++){const G=S[K].exec(N);if(G===null)break;N=N.slice(G.shift().length),B.push(...G)}return B.length!==0?B.join(""):I},s=g.map(I=>typeof I=="string"?I:P).join(""),f=s.split(P).join(l)}function T(a,l,d){const r=i.value,h=r.selectionEnd,g=r.value.length-h,M=C(a);l===!0&&j();const p=F(M),n=e.fillMask!==!1?O(p):p,b=m.value!==n;r.value!==n&&(r.value=n),b===!0&&(m.value=n),document.activeElement===r&&J(()=>{if(n===f){const S=e.reverseFillMask===!0?f.length:0;r.setSelectionRange(S,S,"forward");return}if(d==="insertFromPaste"&&e.reverseFillMask!==!0){const S=r.selectionEnd;let I=h-1;for(let o=$;o<=I&&o<S;o++)s[o]!==P&&I++;E.right(r,I);return}if(["deleteContentBackward","deleteContentForward"].indexOf(d)>-1){const S=e.reverseFillMask===!0?h===0?n.length>p.length?1:0:Math.max(0,n.length-(n===f?0:Math.min(p.length,g)+1))+1:h;r.setSelectionRange(S,S,"forward");return}if(e.reverseFillMask===!0)if(b===!0){const S=Math.max(0,n.length-(n===f?0:Math.min(p.length,g+1)));S===1&&h===1?r.setSelectionRange(S,S,"forward"):E.rightReverse(r,S)}else{const S=n.length-g;r.setSelectionRange(S,S,"backward")}else if(b===!0){const S=Math.max(0,s.indexOf(P),Math.min(p.length,h)-1);E.right(r,S)}else{const S=h-1;E.right(r,S)}});const U=e.unmaskedValue===!0?C(n):n;String(e.modelValue)!==U&&(e.modelValue!==null||U!=="")&&u(U,!0)}function z(a,l,d){const r=F(C(a.value));l=Math.max(0,s.indexOf(P),Math.min(r.length,l)),$=l,a.setSelectionRange(l,d,"forward")}const E={left(a,l){const d=s.slice(l-1).indexOf(P)===-1;let r=Math.max(0,l-1);for(;r>=0;r--)if(s[r]===P){l=r,d===!0&&l++;break}if(r<0&&s[l]!==void 0&&s[l]!==P)return E.right(a,0);l>=0&&a.setSelectionRange(l,l,"backward")},right(a,l){const d=a.value.length;let r=Math.min(d,l+1);for(;r<=d;r++)if(s[r]===P){l=r;break}else s[r-1]===P&&(l=r);if(r>d&&s[l-1]!==void 0&&s[l-1]!==P)return E.left(a,d);a.setSelectionRange(l,l,"forward")},leftReverse(a,l){const d=V(a.value.length);let r=Math.max(0,l-1);for(;r>=0;r--)if(d[r-1]===P){l=r;break}else if(d[r]===P&&(l=r,r===0))break;if(r<0&&d[l]!==void 0&&d[l]!==P)return E.rightReverse(a,0);l>=0&&a.setSelectionRange(l,l,"backward")},rightReverse(a,l){const d=a.value.length,r=V(d),h=r.slice(0,l+1).indexOf(P)===-1;let g=Math.min(d,l+1);for(;g<=d;g++)if(r[g-1]===P){l=g,l>0&&h===!0&&l--;break}if(g>d&&r[l-1]!==void 0&&r[l-1]!==P)return E.leftReverse(a,d);a.setSelectionRange(l,l,"forward")}};function R(a){t("click",a),_=void 0}function A(a){if(t("keydown",a),De(a)===!0||a.altKey===!0)return;const l=i.value,d=l.selectionStart,r=l.selectionEnd;if(a.shiftKey||(_=void 0),a.keyCode===37||a.keyCode===39){a.shiftKey&&_===void 0&&(_=l.selectionDirection==="forward"?d:r);const h=E[(a.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(a.preventDefault(),h(l,_===d?r:d),a.shiftKey){const g=l.selectionStart;l.setSelectionRange(Math.min(_,g),Math.max(_,g),"forward")}}else a.keyCode===8&&e.reverseFillMask!==!0&&d===r?(E.left(l,d),l.setSelectionRange(l.selectionStart,r,"backward")):a.keyCode===46&&e.reverseFillMask===!0&&d===r&&(E.rightReverse(l,r),l.setSelectionRange(d,l.selectionEnd,"forward"))}function F(a){if(a==null||a==="")return"";if(e.reverseFillMask===!0)return q(a);const l=c;let d=0,r="";for(let h=0;h<l.length;h++){const g=a[d],M=l[h];if(typeof M=="string")r+=M,g===M&&d++;else if(g!==void 0&&M.regex.test(g))r+=M.transform!==void 0?M.transform(g):g,d++;else return r}return r}function q(a){const l=c,d=s.indexOf(P);let r=a.length-1,h="";for(let g=l.length-1;g>=0&&r>-1;g--){const M=l[g];let p=a[r];if(typeof M=="string")h=M+h,p===M&&r--;else if(p!==void 0&&M.regex.test(p))do h=(M.transform!==void 0?M.transform(p):p)+h,r--,p=a[r];while(d===g&&p!==void 0&&M.regex.test(p));else return h}return h}function C(a){return typeof a!="string"||k===void 0?typeof a=="number"?k(""+a):a:k(a)}function O(a){return f.length-a.length<=0?a:e.reverseFillMask===!0&&a.length!==0?f.slice(0,-a.length)+a:a+f.slice(a.length)}return{innerValue:m,hasMask:w,moveCursorForPaste:z,updateMaskValue:T,onMaskedKeydown:A,onMaskedClick:R}}const mt={name:String};function gt(e){return y(()=>e.name||e.for)}function ht(e,t){function u(){const i=e.modelValue;try{const s="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(f=>{s.items.add(f)}),{files:s.files}}catch{return{files:void 0}}}return t===!0?y(()=>{if(e.type==="file")return u()}):y(u)}const pt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,bt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,yt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,xt=/[a-z0-9_ -]$/i;function kt(e){return function(u){if(u.type==="compositionend"||u.type==="change"){if(u.target.qComposing!==!0)return;u.target.qComposing=!1,e(u)}else u.type==="compositionupdate"&&u.target.qComposing!==!0&&typeof u.data=="string"&&(je.is.firefox===!0?xt.test(u.data)===!1:pt.test(u.data)===!0||bt.test(u.data)===!0||yt.test(u.data)===!0)===!0&&(u.target.qComposing=!0)}}var _e=oe({name:"QInput",inheritAttrs:!1,props:{...ut,...ct,...mt,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...it,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:u}){const{proxy:i}=X(),{$q:s}=i,f={};let c=NaN,k,$,_=null,w;const m=L(null),Z=gt(e),{innerValue:v,hasMask:V,moveCursorForPaste:j,updateMaskValue:T,onMaskedKeydown:z,onMaskedClick:E}=vt(e,t,p,m),R=ht(e,!0),A=y(()=>ge(v.value)),F=kt(g),q=st(),C=y(()=>e.type==="textarea"||e.autogrow===!0),O=y(()=>C.value===!0||["text","search","url","tel","password"].includes(e.type)),a=y(()=>{const o={...q.splitAttrs.listeners.value,onInput:g,onPaste:h,onChange:b,onBlur:U,onFocus:pe};return o.onCompositionstart=o.onCompositionupdate=o.onCompositionend=F,V.value===!0&&(o.onKeydown=z,o.onClick=E),e.autogrow===!0&&(o.onAnimationend=M),o}),l=y(()=>{const o={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:Z.value,...q.splitAttrs.attributes.value,id:q.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return C.value===!1&&(o.type=e.type),e.autogrow===!0&&(o.rows=1),o});Q(()=>e.type,()=>{m.value&&(m.value.value=e.modelValue)}),Q(()=>e.modelValue,o=>{if(V.value===!0){if($===!0&&($=!1,String(o)===c))return;T(o)}else v.value!==o&&(v.value=o,e.type==="number"&&f.hasOwnProperty("value")===!0&&(k===!0?k=!1:delete f.value));e.autogrow===!0&&J(n)}),Q(()=>e.autogrow,o=>{o===!0?J(n):m.value!==null&&u.rows>0&&(m.value.style.height="auto")}),Q(()=>e.dense,()=>{e.autogrow===!0&&J(n)});function d(){he(()=>{const o=document.activeElement;m.value!==null&&m.value!==o&&(o===null||o.id!==q.targetUid.value)&&m.value.focus({preventScroll:!0})})}function r(){m.value!==null&&m.value.select()}function h(o){if(V.value===!0&&e.reverseFillMask!==!0){const B=o.target;j(B,B.selectionStart,B.selectionEnd)}t("paste",o)}function g(o){if(!o||!o.target)return;if(e.type==="file"){t("update:modelValue",o.target.files);return}const B=o.target.value;if(o.target.qComposing===!0){f.value=B;return}if(V.value===!0)T(B,!1,o.inputType);else if(p(B),O.value===!0&&o.target===document.activeElement){const{selectionStart:H,selectionEnd:K}=o.target;H!==void 0&&K!==void 0&&J(()=>{o.target===document.activeElement&&B.indexOf(o.target.value)===0&&o.target.setSelectionRange(H,K)})}e.autogrow===!0&&n()}function M(o){t("animationend",o),n()}function p(o,B){w=()=>{_=null,e.type!=="number"&&f.hasOwnProperty("value")===!0&&delete f.value,e.modelValue!==o&&c!==o&&(c=o,B===!0&&($=!0),t("update:modelValue",o),J(()=>{c===o&&(c=NaN)})),w=void 0},e.type==="number"&&(k=!0,f.value=o),e.debounce!==void 0?(_!==null&&clearTimeout(_),f.value=o,_=setTimeout(w,e.debounce)):w()}function n(){requestAnimationFrame(()=>{const o=m.value;if(o!==null){const B=o.parentNode.style,{scrollTop:H}=o,{overflowY:K,maxHeight:N}=s.platform.is.firefox===!0?{}:window.getComputedStyle(o),G=K!==void 0&&K!=="scroll";G===!0&&(o.style.overflowY="hidden"),B.marginBottom=o.scrollHeight-1+"px",o.style.height="1px",o.style.height=o.scrollHeight+"px",G===!0&&(o.style.overflowY=parseInt(N,10)<o.scrollHeight?"auto":"hidden"),B.marginBottom="",o.scrollTop=H}})}function b(o){F(o),_!==null&&(clearTimeout(_),_=null),w!==void 0&&w(),t("change",o.target.value)}function U(o){o!==void 0&&pe(o),_!==null&&(clearTimeout(_),_=null),w!==void 0&&w(),k=!1,$=!1,delete f.value,e.type!=="file"&&setTimeout(()=>{m.value!==null&&(m.value.value=v.value!==void 0?v.value:"")})}function S(){return f.hasOwnProperty("value")===!0?f.value:v.value!==void 0?v.value:""}se(()=>{U()}),ie(()=>{e.autogrow===!0&&n()}),Object.assign(q,{innerValue:v,fieldClass:y(()=>`q-${C.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:y(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:m,emitValue:p,hasValue:A,floatingLabel:y(()=>A.value===!0&&(e.type!=="number"||isNaN(v.value)===!1)||ge(e.displayValue)),getControl:()=>x(C.value===!0?"textarea":"input",{ref:m,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...l.value,...a.value,...e.type!=="file"?{value:S()}:R.value}),getShadowControl:()=>x("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(C.value===!0?"":" text-no-wrap")},[x("span",{class:"invisible"},S()),x("span",e.shadowText)])});const I=dt(q);return Object.assign(i,{focus:d,select:r,getNativeElement:()=>m.value}),Ve(i,"nativeEl",()=>m.value),I}}),wt=oe({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(e,{slots:t,emit:u}){const i=X(),s=L(null);let f=0;const c=[];function k(v){const V=typeof v=="boolean"?v:e.noErrorFocus!==!0,j=++f,T=(R,A)=>{u("validation"+(R===!0?"Success":"Error"),A)},z=R=>{const A=R.validate();return typeof A.then=="function"?A.then(F=>({valid:F,comp:R}),F=>({valid:!1,comp:R,err:F})):Promise.resolve({valid:A,comp:R})};return(e.greedy===!0?Promise.all(c.map(z)).then(R=>R.filter(A=>A.valid!==!0)):c.reduce((R,A)=>R.then(()=>z(A).then(F=>{if(F.valid===!1)return Promise.reject(F)})),Promise.resolve()).catch(R=>[R])).then(R=>{if(R===void 0||R.length===0)return j===f&&T(!0),!0;if(j===f){const{comp:A,err:F}=R[0];if(F!==void 0&&console.error(F),T(!1,A),V===!0){const q=R.find(({comp:C})=>typeof C.focus=="function"&&Ke(C.$)===!1);q!==void 0&&q.comp.focus()}}return!1})}function $(){f++,c.forEach(v=>{typeof v.resetValidation=="function"&&v.resetValidation()})}function _(v){v!==void 0&&ce(v);const V=f+1;k().then(j=>{V===f&&j===!0&&(e.onSubmit!==void 0?u("submit",v):v!==void 0&&v.target!==void 0&&typeof v.target.submit=="function"&&v.target.submit())})}function w(v){v!==void 0&&ce(v),u("reset"),J(()=>{$(),e.autofocus===!0&&e.noResetFocus!==!0&&m()})}function m(){he(()=>{if(s.value===null)return;const v=s.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||s.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||s.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(s.value.querySelectorAll("[tabindex]"),V=>V.tabIndex>-1);v!=null&&v.focus({preventScroll:!0})})}Ne(Re,{bindComponent(v){c.push(v)},unbindComponent(v){const V=c.indexOf(v);V>-1&&c.splice(V,1)}});let Z=!1;return Ae(()=>{Z=!0}),Fe(()=>{Z===!0&&e.autofocus===!0&&m()}),ie(()=>{e.autofocus===!0&&m()}),Object.assign(i.proxy,{validate:k,resetValidation:$,submit:_,reset:w,focus:m,getValidationComponents:()=>c}),()=>x("form",{class:"q-form",ref:s,onSubmit:_,onReset:w},W(t.default))}}),Me=oe({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const u=y(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>x(e.tag,{class:u.value},W(t.default))}}),Ct=oe({name:"QCardActions",props:{...He,vertical:Boolean},setup(e,{slots:t}){const u=Ye(e),i=y(()=>`q-card__actions ${u.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>x("div",{class:i.value},W(t.default))}}),qt=oe({name:"QCard",props:{...Be,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:u}}=X(),i=Ee(e,u),s=y(()=>"q-card"+(i.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>x(e.tag,{class:s.value},W(t.default))}});const St={name:"Login",data(){return{email:"",password:""}}},_t={class:"column"},Mt=ne("div",{class:"row"},[ne("h5",{class:"text-h5 text-white q-my-md generis-font text-primary"}," Fictiq ")],-1),Rt={class:"row"},Vt=ne("p",{class:"text-grey-6"},"Not reigistered? Created an Account",-1);function At(e,t,u,i,s,f){return Qe(),Ue(We,{class:"bg-grey window-height window-width row justify-center items-center"},{default:ee(()=>[ne("div",_t,[Mt,ne("div",Rt,[Y(qt,{square:"",bordered:"",class:"q-pa-lg shadow-1 bg-black"},{default:ee(()=>[Y(Me,null,{default:ee(()=>[Y(wt,{class:"q-gutter-md"},{default:ee(()=>[Y(_e,{square:"",filled:"",clearable:"",modelValue:s.email,"onUpdate:modelValue":t[0]||(t[0]=c=>s.email=c),type:"email",label:"email"},null,8,["modelValue"]),Y(_e,{square:"",filled:"",clearable:"",modelValue:s.password,"onUpdate:modelValue":t[1]||(t[1]=c=>s.password=c),type:"password",label:"password"},null,8,["modelValue"])]),_:1})]),_:1}),Y(Ct,{class:"q-px-md"},{default:ee(()=>[Y(Je,{unelevated:"",color:"light-green-7",size:"lg",class:"full-width",label:"Login",onClick:t[2]||(t[2]=c=>e.login("now"))})]),_:1}),Y(Me,{class:"text-center q-pa-none"},{default:ee(()=>[Vt]),_:1})]),_:1})])])]),_:1})}var Ot=Le(St,[["render",At]]);export{Ot as default};