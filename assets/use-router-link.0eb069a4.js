import{u as V,a as z}from"./use-size.7aba2b5f.js";import{c as Q,h as H,a as b}from"./render.0f74db1f.js";import{k as l,m as v,q as I}from"./index.01d7074a.js";const j="0 0 24 24",B=e=>e,S=e=>`ionicons ${e}`,M={"mdi-":e=>`mdi ${e}`,"icon-":B,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":S,"ion-ios":S,"ion-logo":S,"iconfont ":B,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},q={o_:"-outlined",r_:"-round",s_:"-sharp"},D={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},T=new RegExp("^("+Object.keys(M).join("|")+")"),U=new RegExp("^("+Object.keys(q).join("|")+")"),w=new RegExp("^("+Object.keys(D).join("|")+")"),G=/^[Mm]\s?[-+]?\.?\d/,J=/^img:/,N=/^svguse:/,W=/^ion-/,X=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var se=Q({name:"QIcon",props:{...V,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:u}}=I(),r=z(e),c=l(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),i=l(()=>{let s,n=e.name;if(n==="none"||!n)return{none:!0};if(u.iconMapFn!==null){const a=u.iconMapFn(n);if(a!==void 0)if(a.icon!==void 0){if(n=a.icon,n==="none"||!n)return{none:!0}}else return{cls:a.cls,content:a.content!==void 0?a.content:" "}}if(G.test(n)===!0){const[a,h=j]=n.split("|");return{svg:!0,viewBox:h,nodes:a.split("&&").map($=>{const[R,x,k]=$.split("@@");return v("path",{style:x,d:R,transform:k})})}}if(J.test(n)===!0)return{img:!0,src:n.substring(4)};if(N.test(n)===!0){const[a,h=j]=n.split("|");return{svguse:!0,src:a.substring(7),viewBox:h}}let y=" ";const g=n.match(T);if(g!==null)s=M[g[1]](n);else if(X.test(n)===!0)s=n;else if(W.test(n)===!0)s=`ionicons ion-${u.platform.is.ios===!0?"ios":"md"}${n.substring(3)}`;else if(w.test(n)===!0){s="notranslate material-symbols";const a=n.match(w);a!==null&&(n=n.substring(6),s+=D[a[1]]),y=n}else{s="notranslate material-icons";const a=n.match(U);a!==null&&(n=n.substring(2),s+=q[a[1]]),y=n}return{cls:s,content:y}});return()=>{const s={class:c.value,style:r.value,"aria-hidden":"true",role:"presentation"};return i.value.none===!0?v(e.tag,s,H(t.default)):i.value.img===!0?v("span",s,b(t.default,[v("img",{src:i.value.src})])):i.value.svg===!0?v("span",s,b(t.default,[v("svg",{viewBox:i.value.viewBox||"0 0 24 24"},i.value.nodes)])):i.value.svguse===!0?v("span",s,b(t.default,[v("svg",{viewBox:i.value.viewBox},[v("use",{"xlink:href":i.value.src})])])):(i.value.cls!==void 0&&(s.class+=" "+i.value.cls),v(e.tag,s,b(t.default,[i.value.content])))}}});function oe(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:t}=e.$;for(;Object(t)===t;){if(Object(t.proxy)===t.proxy)return t.proxy;t=t.parent}}function Y(e){return e.appContext.config.globalProperties.$router!==void 0}function ie(e){return e.isUnmounted===!0||e.isDeactivated===!0}function L(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function _(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Z(e,t){for(const u in t){const r=t[u],c=e[u];if(typeof r=="string"){if(r!==c)return!1}else if(Array.isArray(c)===!1||c.length!==r.length||r.some((i,s)=>i!==c[s]))return!1}return!0}function C(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((u,r)=>u===t[r]):e.length===1&&e[0]===t}function ee(e,t){return Array.isArray(e)===!0?C(e,t):Array.isArray(t)===!0?C(t,e):e===t}function te(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const u in e)if(ee(e[u],t[u])===!1)return!1;return!0}const ue={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function le({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const u=I(),{props:r,proxy:c,emit:i}=u,s=Y(u),n=l(()=>r.disable!==!0&&r.href!==void 0),y=t===!0?l(()=>s===!0&&r.disable!==!0&&n.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""):l(()=>s===!0&&n.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""),g=l(()=>y.value===!0?O(r.to):null),a=l(()=>g.value!==null),h=l(()=>n.value===!0||a.value===!0),$=l(()=>r.type==="a"||h.value===!0?"a":r.tag||e||"div"),R=l(()=>n.value===!0?{href:r.href,target:r.target}:a.value===!0?{href:g.value.href,target:r.target}:{}),x=l(()=>{if(a.value===!1)return-1;const{matched:o}=g.value,{length:f}=o,d=o[f-1];if(d===void 0)return-1;const m=c.$route.matched;if(m.length===0)return-1;const p=m.findIndex(_.bind(null,d));if(p>-1)return p;const E=L(o[f-2]);return f>1&&L(d)===E&&m[m.length-1].path!==E?m.findIndex(_.bind(null,o[f-2])):p}),k=l(()=>a.value===!0&&x.value!==-1&&Z(c.$route.params,g.value.params)),A=l(()=>k.value===!0&&x.value===c.$route.matched.length-1&&te(c.$route.params,g.value.params)),F=l(()=>a.value===!0?A.value===!0?` ${r.exactActiveClass} ${r.activeClass}`:r.exact===!0?"":k.value===!0?` ${r.activeClass}`:"":"");function O(o){try{return c.$router.resolve(o)}catch{}return null}function P(o,{returnRouterError:f,to:d=r.to,replace:m=r.replace}={}){if(r.disable===!0)return o.preventDefault(),Promise.resolve(!1);if(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey||o.button!==void 0&&o.button!==0||r.target==="_blank")return Promise.resolve(!1);o.preventDefault();const p=c.$router[m===!0?"replace":"push"](d);return f===!0?p:p.then(()=>{}).catch(()=>{})}function K(o){if(a.value===!0){const f=d=>P(o,d);i("click",o,f),o.defaultPrevented!==!0&&f()}else i("click",o)}return{hasRouterLink:a,hasHrefLink:n,hasLink:h,linkTag:$,resolvedLink:g,linkIsActive:k,linkIsExactActive:A,linkClass:F,linkAttrs:R,getLink:O,navigateToRouterLink:P,navigateOnClick:K}}export{se as Q,le as a,Y as b,oe as g,ue as u,ie as v};
