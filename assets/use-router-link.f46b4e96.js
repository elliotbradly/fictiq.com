import{c,R as _,S as N,h as f,K as H,g as M,u as Q}from"./index.c8cade40.js";const U={xs:18,sm:24,md:32,lg:38,xl:46},T={size:String};function G(e,t=U){return c(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const J=e=>_(N(e)),le=e=>_(e);function W(e,t){return e!==void 0&&e()||t}function ce(e,t){if(e!==void 0){const i=e();if(i!=null)return i.slice()}return t}function b(e,t){return e!==void 0?t.concat(e()):t}function fe(e,t){return e===void 0?t:t!==void 0?t.concat(e()):e()}function ve(e,t,i,n,l,u){t.key=n+l;const s=f(e,t,i);return l===!0?H(s,u()):s}const j="0 0 24 24",w=e=>e,R=e=>`ionicons ${e}`,I={"mdi-":e=>`mdi ${e}`,"icon-":w,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":R,"ion-ios":R,"ion-logo":R,"iconfont ":w,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},q={o_:"-outlined",r_:"-round",s_:"-sharp"},D={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},X=new RegExp("^("+Object.keys(I).join("|")+")"),Y=new RegExp("^("+Object.keys(q).join("|")+")"),B=new RegExp("^("+Object.keys(D).join("|")+")"),Z=/^[Mm]\s?[-+]?\.?\d/,ee=/^img:/,te=/^svguse:/,ne=/^ion-/,re=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var de=J({name:"QIcon",props:{...T,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:i}}=M(),n=G(e),l=c(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),u=c(()=>{let s,r=e.name;if(r==="none"||!r)return{none:!0};if(i.iconMapFn!==null){const a=i.iconMapFn(r);if(a!==void 0)if(a.icon!==void 0){if(r=a.icon,r==="none"||!r)return{none:!0}}else return{cls:a.cls,content:a.content!==void 0?a.content:" "}}if(Z.test(r)===!0){const[a,h=j]=r.split("|");return{svg:!0,viewBox:h,nodes:a.split("&&").map(S=>{const[$,x,k]=S.split("@@");return f("path",{style:x,d:$,transform:k})})}}if(ee.test(r)===!0)return{img:!0,src:r.substring(4)};if(te.test(r)===!0){const[a,h=j]=r.split("|");return{svguse:!0,src:a.substring(7),viewBox:h}}let p=" ";const d=r.match(X);if(d!==null)s=I[d[1]](r);else if(re.test(r)===!0)s=r;else if(ne.test(r)===!0)s=`ionicons ion-${i.platform.is.ios===!0?"ios":"md"}${r.substring(3)}`;else if(B.test(r)===!0){s="notranslate material-symbols";const a=r.match(B);a!==null&&(r=r.substring(6),s+=D[a[1]]),p=r}else{s="notranslate material-icons";const a=r.match(Y);a!==null&&(r=r.substring(2),s+=q[a[1]]),p=r}return{cls:s,content:p}});return()=>{const s={class:l.value,style:n.value,"aria-hidden":"true",role:"presentation"};return u.value.none===!0?f(e.tag,s,W(t.default)):u.value.img===!0?f("span",s,b(t.default,[f("img",{src:u.value.src})])):u.value.svg===!0?f("span",s,b(t.default,[f("svg",{viewBox:u.value.viewBox||"0 0 24 24"},u.value.nodes)])):u.value.svguse===!0?f("span",s,b(t.default,[f("svg",{viewBox:u.value.viewBox},[f("use",{"xlink:href":u.value.src})])])):(u.value.cls!==void 0&&(s.class+=" "+u.value.cls),f(e.tag,s,b(t.default,[u.value.content])))}}});function ge(e,t){const i=e.style;for(const n in t)i[n]=t[n]}function me(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=Q(e);if(t)return t.$el||t}function he(e,t){if(e==null||e.contains(t)===!0)return!0;for(let i=e.nextElementSibling;i!==null;i=i.nextElementSibling)if(i.contains(t))return!0;return!1}function ye(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:t}=e.$;for(;Object(t)===t;){if(Object(t.proxy)===t.proxy)return t.proxy;t=t.parent}}function V(e,t){typeof t.type=="symbol"?Array.isArray(t.children)===!0&&t.children.forEach(i=>{V(e,i)}):e.add(t)}function pe(e){const t=new Set;return e.forEach(i=>{V(t,i)}),Array.from(t)}function ie(e){return e.appContext.config.globalProperties.$router!==void 0}function ke(e){return e.isUnmounted===!0||e.isDeactivated===!0}function z(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function C(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ae(e,t){for(const i in t){const n=t[i],l=e[i];if(typeof n=="string"){if(n!==l)return!1}else if(Array.isArray(l)===!1||l.length!==n.length||n.some((u,s)=>u!==l[s]))return!1}return!0}function L(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((i,n)=>i===t[n]):e.length===1&&e[0]===t}function se(e,t){return Array.isArray(e)===!0?L(e,t):Array.isArray(t)===!0?L(t,e):e===t}function oe(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const i in e)if(se(e[i],t[i])===!1)return!1;return!0}const xe={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function be({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const i=M(),{props:n,proxy:l,emit:u}=i,s=ie(i),r=c(()=>n.disable!==!0&&n.href!==void 0),p=t===!0?c(()=>s===!0&&n.disable!==!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):c(()=>s===!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),d=c(()=>p.value===!0?E(n.to):null),a=c(()=>d.value!==null),h=c(()=>r.value===!0||a.value===!0),S=c(()=>n.type==="a"||h.value===!0?"a":n.tag||e||"div"),$=c(()=>r.value===!0?{href:n.href,target:n.target}:a.value===!0?{href:d.value.href,target:n.target}:{}),x=c(()=>{if(a.value===!1)return-1;const{matched:o}=d.value,{length:v}=o,g=o[v-1];if(g===void 0)return-1;const m=l.$route.matched;if(m.length===0)return-1;const y=m.findIndex(C.bind(null,g));if(y>-1)return y;const P=z(o[v-2]);return v>1&&z(g)===P&&m[m.length-1].path!==P?m.findIndex(C.bind(null,o[v-2])):y}),k=c(()=>a.value===!0&&x.value!==-1&&ae(l.$route.params,d.value.params)),A=c(()=>k.value===!0&&x.value===l.$route.matched.length-1&&oe(l.$route.params,d.value.params)),F=c(()=>a.value===!0?A.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":k.value===!0?` ${n.activeClass}`:"":"");function E(o){try{return l.$router.resolve(o)}catch{}return null}function O(o,{returnRouterError:v,to:g=n.to,replace:m=n.replace}={}){if(n.disable===!0)return o.preventDefault(),Promise.resolve(!1);if(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey||o.button!==void 0&&o.button!==0||n.target==="_blank")return Promise.resolve(!1);o.preventDefault();const y=l.$router[m===!0?"replace":"push"](g);return v===!0?y:y.then(()=>{}).catch(()=>{})}function K(o){if(a.value===!0){const v=g=>O(o,g);u("click",o,v),o.defaultPrevented!==!0&&v()}else u("click",o)}return{hasRouterLink:a,hasHrefLink:r,hasLink:h,linkTag:S,resolvedLink:d,linkIsActive:k,linkIsExactActive:A,linkClass:F,linkAttrs:$,getLink:E,navigateToRouterLink:O,navigateOnClick:K}}export{de as Q,G as a,W as b,J as c,b as d,ke as e,he as f,ye as g,fe as h,ce as i,le as j,U as k,ge as l,xe as m,be as n,me as o,pe as p,ve as q,T as u,ie as v};
