import{c as l,h as v,q as z,u as K}from"./index.a1b1c6a6.js";import{c as V,h as H,a as b}from"./render.89aa6c86.js";const Q={xs:18,sm:24,md:32,lg:38,xl:46},T={size:String};function U(e,t=Q){return l(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const j="0 0 24 24",B=e=>e,S=e=>`ionicons ${e}`,I={"mdi-":e=>`mdi ${e}`,"icon-":B,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":S,"ion-ios":S,"ion-logo":S,"iconfont ":B,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},M={o_:"-outlined",r_:"-round",s_:"-sharp"},q={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},G=new RegExp("^("+Object.keys(I).join("|")+")"),J=new RegExp("^("+Object.keys(M).join("|")+")"),w=new RegExp("^("+Object.keys(q).join("|")+")"),N=/^[Mm]\s?[-+]?\.?\d/,W=/^img:/,X=/^svguse:/,Y=/^ion-/,Z=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var ae=V({name:"QIcon",props:{...T,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:i}}=z(),n=U(e),c=l(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),u=l(()=>{let a,r=e.name;if(r==="none"||!r)return{none:!0};if(i.iconMapFn!==null){const s=i.iconMapFn(r);if(s!==void 0)if(s.icon!==void 0){if(r=s.icon,r==="none"||!r)return{none:!0}}else return{cls:s.cls,content:s.content!==void 0?s.content:" "}}if(N.test(r)===!0){const[s,h=j]=r.split("|");return{svg:!0,viewBox:h,nodes:s.split("&&").map($=>{const[R,k,x]=$.split("@@");return v("path",{style:k,d:R,transform:x})})}}if(W.test(r)===!0)return{img:!0,src:r.substring(4)};if(X.test(r)===!0){const[s,h=j]=r.split("|");return{svguse:!0,src:s.substring(7),viewBox:h}}let y=" ";const g=r.match(G);if(g!==null)a=I[g[1]](r);else if(Z.test(r)===!0)a=r;else if(Y.test(r)===!0)a=`ionicons ion-${i.platform.is.ios===!0?"ios":"md"}${r.substring(3)}`;else if(w.test(r)===!0){a="notranslate material-symbols";const s=r.match(w);s!==null&&(r=r.substring(6),a+=q[s[1]]),y=r}else{a="notranslate material-icons";const s=r.match(J);s!==null&&(r=r.substring(2),a+=M[s[1]]),y=r}return{cls:a,content:y}});return()=>{const a={class:c.value,style:n.value,"aria-hidden":"true",role:"presentation"};return u.value.none===!0?v(e.tag,a,H(t.default)):u.value.img===!0?v("span",a,b(t.default,[v("img",{src:u.value.src})])):u.value.svg===!0?v("span",a,b(t.default,[v("svg",{viewBox:u.value.viewBox||"0 0 24 24"},u.value.nodes)])):u.value.svguse===!0?v("span",a,b(t.default,[v("svg",{viewBox:u.value.viewBox},[v("use",{"xlink:href":u.value.src})])])):(u.value.cls!==void 0&&(a.class+=" "+u.value.cls),v(e.tag,a,b(t.default,[u.value.content])))}}});function oe(e,t){const i=e.style;for(const n in t)i[n]=t[n]}function ue(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=K(e);if(t)return t.$el||t}function le(e,t){if(e==null||e.contains(t)===!0)return!0;for(let i=e.nextElementSibling;i!==null;i=i.nextElementSibling)if(i.contains(t))return!0;return!1}function ce(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:t}=e.$;for(;Object(t)===t;){if(Object(t.proxy)===t.proxy)return t.proxy;t=t.parent}}function ee(e){return e.appContext.config.globalProperties.$router!==void 0}function fe(e){return e.isUnmounted===!0||e.isDeactivated===!0}function L(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function _(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function te(e,t){for(const i in t){const n=t[i],c=e[i];if(typeof n=="string"){if(n!==c)return!1}else if(Array.isArray(c)===!1||c.length!==n.length||n.some((u,a)=>u!==c[a]))return!1}return!0}function C(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((i,n)=>i===t[n]):e.length===1&&e[0]===t}function ne(e,t){return Array.isArray(e)===!0?C(e,t):Array.isArray(t)===!0?C(t,e):e===t}function re(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const i in e)if(ne(e[i],t[i])===!1)return!1;return!0}const ve={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function ge({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const i=z(),{props:n,proxy:c,emit:u}=i,a=ee(i),r=l(()=>n.disable!==!0&&n.href!==void 0),y=t===!0?l(()=>a===!0&&n.disable!==!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):l(()=>a===!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),g=l(()=>y.value===!0?E(n.to):null),s=l(()=>g.value!==null),h=l(()=>r.value===!0||s.value===!0),$=l(()=>n.type==="a"||h.value===!0?"a":n.tag||e||"div"),R=l(()=>r.value===!0?{href:n.href,target:n.target}:s.value===!0?{href:g.value.href,target:n.target}:{}),k=l(()=>{if(s.value===!1)return-1;const{matched:o}=g.value,{length:f}=o,d=o[f-1];if(d===void 0)return-1;const m=c.$route.matched;if(m.length===0)return-1;const p=m.findIndex(_.bind(null,d));if(p>-1)return p;const P=L(o[f-2]);return f>1&&L(d)===P&&m[m.length-1].path!==P?m.findIndex(_.bind(null,o[f-2])):p}),x=l(()=>s.value===!0&&k.value!==-1&&te(c.$route.params,g.value.params)),A=l(()=>x.value===!0&&k.value===c.$route.matched.length-1&&re(c.$route.params,g.value.params)),D=l(()=>s.value===!0?A.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":x.value===!0?` ${n.activeClass}`:"":"");function E(o){try{return c.$router.resolve(o)}catch{}return null}function O(o,{returnRouterError:f,to:d=n.to,replace:m=n.replace}={}){if(n.disable===!0)return o.preventDefault(),Promise.resolve(!1);if(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey||o.button!==void 0&&o.button!==0||n.target==="_blank")return Promise.resolve(!1);o.preventDefault();const p=c.$router[m===!0?"replace":"push"](d);return f===!0?p:p.then(()=>{}).catch(()=>{})}function F(o){if(s.value===!0){const f=d=>O(o,d);u("click",o,f),o.defaultPrevented!==!0&&f()}else u("click",o)}return{hasRouterLink:s,hasHrefLink:r,hasLink:h,linkTag:$,resolvedLink:g,linkIsActive:x,linkIsExactActive:A,linkClass:D,linkAttrs:R,getLink:E,navigateToRouterLink:O,navigateOnClick:F}}export{ae as Q,ge as a,Q as b,oe as c,T as d,U as e,ee as f,ue as g,ce as h,le as i,ve as u,fe as v};
