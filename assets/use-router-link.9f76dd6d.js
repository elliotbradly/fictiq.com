import{c as l,h as v,q as z,u as H}from"./index.2fd8faee.js";import{c as K,h as V,a as b}from"./render.1f73c227.js";const Q={xs:18,sm:24,md:32,lg:38,xl:46},T={size:String};function U(t,e=Q){return l(()=>t.size!==void 0?{fontSize:t.size in e?`${e[t.size]}px`:t.size}:null)}const B="0 0 24 24",P=t=>t,S=t=>`ionicons ${t}`,I={"mdi-":t=>`mdi ${t}`,"icon-":P,"bt-":t=>`bt ${t}`,"eva-":t=>`eva ${t}`,"ion-md":S,"ion-ios":S,"ion-logo":S,"iconfont ":P,"ti-":t=>`themify-icon ${t}`,"bi-":t=>`bootstrap-icons ${t}`},M={o_:"-outlined",r_:"-round",s_:"-sharp"},q={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},G=new RegExp("^("+Object.keys(I).join("|")+")"),J=new RegExp("^("+Object.keys(M).join("|")+")"),j=new RegExp("^("+Object.keys(q).join("|")+")"),N=/^[Mm]\s?[-+]?\.?\d/,W=/^img:/,X=/^svguse:/,Y=/^ion-/,Z=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var ot=K({name:"QIcon",props:{...T,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(t,{slots:e}){const{proxy:{$q:i}}=z(),n=U(t),c=l(()=>"q-icon"+(t.left===!0?" on-left":"")+(t.right===!0?" on-right":"")+(t.color!==void 0?` text-${t.color}`:"")),u=l(()=>{let o,r=t.name;if(r==="none"||!r)return{none:!0};if(i.iconMapFn!==null){const s=i.iconMapFn(r);if(s!==void 0)if(s.icon!==void 0){if(r=s.icon,r==="none"||!r)return{none:!0}}else return{cls:s.cls,content:s.content!==void 0?s.content:" "}}if(N.test(r)===!0){const[s,h=B]=r.split("|");return{svg:!0,viewBox:h,nodes:s.split("&&").map($=>{const[R,k,x]=$.split("@@");return v("path",{style:k,d:R,transform:x})})}}if(W.test(r)===!0)return{img:!0,src:r.substring(4)};if(X.test(r)===!0){const[s,h=B]=r.split("|");return{svguse:!0,src:s.substring(7),viewBox:h}}let y=" ";const g=r.match(G);if(g!==null)o=I[g[1]](r);else if(Z.test(r)===!0)o=r;else if(Y.test(r)===!0)o=`ionicons ion-${i.platform.is.ios===!0?"ios":"md"}${r.substring(3)}`;else if(j.test(r)===!0){o="notranslate material-symbols";const s=r.match(j);s!==null&&(r=r.substring(6),o+=q[s[1]]),y=r}else{o="notranslate material-icons";const s=r.match(J);s!==null&&(r=r.substring(2),o+=M[s[1]]),y=r}return{cls:o,content:y}});return()=>{const o={class:c.value,style:n.value,"aria-hidden":"true",role:"presentation"};return u.value.none===!0?v(t.tag,o,V(e.default)):u.value.img===!0?v("span",o,b(e.default,[v("img",{src:u.value.src})])):u.value.svg===!0?v("span",o,b(e.default,[v("svg",{viewBox:u.value.viewBox||"0 0 24 24"},u.value.nodes)])):u.value.svguse===!0?v("span",o,b(e.default,[v("svg",{viewBox:u.value.viewBox},[v("use",{"xlink:href":u.value.src})])])):(u.value.cls!==void 0&&(o.class+=" "+u.value.cls),v(t.tag,o,b(e.default,[u.value.content])))}}});function at(t){if(t===window)return{top:0,left:0};const{top:e,left:i}=t.getBoundingClientRect();return{top:e,left:i}}function ut(t){return t===window?window.innerHeight:t.getBoundingClientRect().height}function lt(t,e){const i=t.style;for(const n in e)i[n]=e[n]}function ct(t){if(t==null)return;if(typeof t=="string")try{return document.querySelector(t)||void 0}catch{return}const e=H(t);if(e)return e.$el||e}function ft(t,e){if(t==null||t.contains(e)===!0)return!0;for(let i=t.nextElementSibling;i!==null;i=i.nextElementSibling)if(i.contains(e))return!0;return!1}function vt(t){if(Object(t.$parent)===t.$parent)return t.$parent;let{parent:e}=t.$;for(;Object(e)===e;){if(Object(e.proxy)===e.proxy)return e.proxy;e=e.parent}}function tt(t){return t.appContext.config.globalProperties.$router!==void 0}function gt(t){return t.isUnmounted===!0||t.isDeactivated===!0}function C(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}function L(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function et(t,e){for(const i in e){const n=e[i],c=t[i];if(typeof n=="string"){if(n!==c)return!1}else if(Array.isArray(c)===!1||c.length!==n.length||n.some((u,o)=>u!==c[o]))return!1}return!0}function _(t,e){return Array.isArray(e)===!0?t.length===e.length&&t.every((i,n)=>i===e[n]):t.length===1&&t[0]===e}function nt(t,e){return Array.isArray(t)===!0?_(t,e):Array.isArray(e)===!0?_(e,t):t===e}function rt(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const i in t)if(nt(t[i],e[i])===!1)return!1;return!0}const dt={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function mt({fallbackTag:t,useDisableForRouterLinkProps:e=!0}={}){const i=z(),{props:n,proxy:c,emit:u}=i,o=tt(i),r=l(()=>n.disable!==!0&&n.href!==void 0),y=e===!0?l(()=>o===!0&&n.disable!==!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):l(()=>o===!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),g=l(()=>y.value===!0?A(n.to):null),s=l(()=>g.value!==null),h=l(()=>r.value===!0||s.value===!0),$=l(()=>n.type==="a"||h.value===!0?"a":n.tag||t||"div"),R=l(()=>r.value===!0?{href:n.href,target:n.target}:s.value===!0?{href:g.value.href,target:n.target}:{}),k=l(()=>{if(s.value===!1)return-1;const{matched:a}=g.value,{length:f}=a,d=a[f-1];if(d===void 0)return-1;const m=c.$route.matched;if(m.length===0)return-1;const p=m.findIndex(L.bind(null,d));if(p>-1)return p;const O=C(a[f-2]);return f>1&&C(d)===O&&m[m.length-1].path!==O?m.findIndex(L.bind(null,a[f-2])):p}),x=l(()=>s.value===!0&&k.value!==-1&&et(c.$route.params,g.value.params)),w=l(()=>x.value===!0&&k.value===c.$route.matched.length-1&&rt(c.$route.params,g.value.params)),D=l(()=>s.value===!0?w.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":x.value===!0?` ${n.activeClass}`:"":"");function A(a){try{return c.$router.resolve(a)}catch{}return null}function E(a,{returnRouterError:f,to:d=n.to,replace:m=n.replace}={}){if(n.disable===!0)return a.preventDefault(),Promise.resolve(!1);if(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey||a.button!==void 0&&a.button!==0||n.target==="_blank")return Promise.resolve(!1);a.preventDefault();const p=c.$router[m===!0?"replace":"push"](d);return f===!0?p:p.then(()=>{}).catch(()=>{})}function F(a){if(s.value===!0){const f=d=>E(a,d);u("click",a,f),a.defaultPrevented!==!0&&f()}else u("click",a)}return{hasRouterLink:s,hasHrefLink:r,hasLink:h,linkTag:$,resolvedLink:g,linkIsActive:x,linkIsExactActive:w,linkClass:D,linkAttrs:R,getLink:A,navigateToRouterLink:E,navigateOnClick:F}}export{ot as Q,mt as a,Q as b,lt as c,T as d,U as e,tt as f,ct as g,ut as h,vt as i,ft as j,at as o,dt as u,gt as v};