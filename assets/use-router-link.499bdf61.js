import{E as z,u as V,F as Q,c as l,h as v,g as M}from"./index.d663dae8.js";const H=e=>z(V(e)),ae=e=>z(e);function T(e,t){return e!==void 0&&e()||t}function ue(e,t){if(e!==void 0){const i=e();if(i!=null)return i.slice()}return t}function R(e,t){return e!==void 0?t.concat(e()):t}function le(e,t){const i=e.style;for(const n in t)i[n]=t[n]}function ce(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=Q(e);if(t)return t.$el||t}const U={xs:18,sm:24,md:32,lg:38,xl:46},G={size:String};function J(e,t=U){return l(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const P="0 0 24 24",C=e=>e,S=e=>`ionicons ${e}`,I={"mdi-":e=>`mdi ${e}`,"icon-":C,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":S,"ion-ios":S,"ion-logo":S,"iconfont ":C,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},q={o_:"-outlined",r_:"-round",s_:"-sharp"},F={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},N=new RegExp("^("+Object.keys(I).join("|")+")"),W=new RegExp("^("+Object.keys(q).join("|")+")"),L=new RegExp("^("+Object.keys(F).join("|")+")"),X=/^[Mm]\s?[-+]?\.?\d/,Y=/^img:/,Z=/^svguse:/,ee=/^ion-/,te=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var fe=H({name:"QIcon",props:{...G,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:i}}=M(),n=J(e),c=l(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),u=l(()=>{let o,r=e.name;if(r==="none"||!r)return{none:!0};if(i.iconMapFn!==null){const s=i.iconMapFn(r);if(s!==void 0)if(s.icon!==void 0){if(r=s.icon,r==="none"||!r)return{none:!0}}else return{cls:s.cls,content:s.content!==void 0?s.content:" "}}if(X.test(r)===!0){const[s,h=P]=r.split("|");return{svg:!0,viewBox:h,nodes:s.split("&&").map(b=>{const[$,x,k]=b.split("@@");return v("path",{style:x,d:$,transform:k})})}}if(Y.test(r)===!0)return{img:!0,src:r.substring(4)};if(Z.test(r)===!0){const[s,h=P]=r.split("|");return{svguse:!0,src:s.substring(7),viewBox:h}}let y=" ";const d=r.match(N);if(d!==null)o=I[d[1]](r);else if(te.test(r)===!0)o=r;else if(ee.test(r)===!0)o=`ionicons ion-${i.platform.is.ios===!0?"ios":"md"}${r.substring(3)}`;else if(L.test(r)===!0){o="notranslate material-symbols";const s=r.match(L);s!==null&&(r=r.substring(6),o+=F[s[1]]),y=r}else{o="notranslate material-icons";const s=r.match(W);s!==null&&(r=r.substring(2),o+=q[s[1]]),y=r}return{cls:o,content:y}});return()=>{const o={class:c.value,style:n.value,"aria-hidden":"true",role:"presentation"};return u.value.none===!0?v(e.tag,o,T(t.default)):u.value.img===!0?v("span",o,R(t.default,[v("img",{src:u.value.src})])):u.value.svg===!0?v("span",o,R(t.default,[v("svg",{viewBox:u.value.viewBox||"0 0 24 24"},u.value.nodes)])):u.value.svguse===!0?v("span",o,R(t.default,[v("svg",{viewBox:u.value.viewBox},[v("use",{"xlink:href":u.value.src})])])):(u.value.cls!==void 0&&(o.class+=" "+u.value.cls),v(e.tag,o,R(t.default,[u.value.content])))}}});function ne(e){return e.appContext.config.globalProperties.$router!==void 0}function _(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function j(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function re(e,t){for(const i in t){const n=t[i],c=e[i];if(typeof n=="string"){if(n!==c)return!1}else if(Array.isArray(c)===!1||c.length!==n.length||n.some((u,o)=>u!==c[o]))return!1}return!0}function w(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((i,n)=>i===t[n]):e.length===1&&e[0]===t}function se(e,t){return Array.isArray(e)===!0?w(e,t):Array.isArray(t)===!0?w(t,e):e===t}function ie(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const i in e)if(se(e[i],t[i])===!1)return!1;return!0}const ve={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function de({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const i=M(),{props:n,proxy:c,emit:u}=i,o=ne(i),r=l(()=>n.disable!==!0&&n.href!==void 0),y=t===!0?l(()=>o===!0&&n.disable!==!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):l(()=>o===!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),d=l(()=>y.value===!0?E(n.to):null),s=l(()=>d.value!==null),h=l(()=>r.value===!0||s.value===!0),b=l(()=>n.type==="a"||h.value===!0?"a":n.tag||e||"div"),$=l(()=>r.value===!0?{href:n.href,target:n.target}:s.value===!0?{href:d.value.href,target:n.target}:{}),x=l(()=>{if(s.value===!1)return-1;const{matched:a}=d.value,{length:f}=a,g=a[f-1];if(g===void 0)return-1;const m=c.$route.matched;if(m.length===0)return-1;const p=m.findIndex(j.bind(null,g));if(p>-1)return p;const O=_(a[f-2]);return f>1&&_(g)===O&&m[m.length-1].path!==O?m.findIndex(j.bind(null,a[f-2])):p}),k=l(()=>s.value===!0&&x.value!==-1&&re(c.$route.params,d.value.params)),A=l(()=>k.value===!0&&x.value===c.$route.matched.length-1&&ie(c.$route.params,d.value.params)),D=l(()=>s.value===!0?A.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":k.value===!0?` ${n.activeClass}`:"":"");function E(a){try{return c.$router.resolve(a)}catch{}return null}function B(a,{returnRouterError:f,to:g=n.to,replace:m=n.replace}={}){if(n.disable===!0)return a.preventDefault(),Promise.resolve(!1);if(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey||a.button!==void 0&&a.button!==0||n.target==="_blank")return Promise.resolve(!1);a.preventDefault();const p=c.$router[m===!0?"replace":"push"](g);return f===!0?p:p.then(()=>{}).catch(()=>{})}function K(a){if(s.value===!0){const f=g=>B(a,g);u("click",a,f),a.defaultPrevented!==!0&&f()}else u("click",a)}return{hasRouterLink:s,hasHrefLink:r,hasLink:h,linkTag:b,resolvedLink:d,linkIsActive:k,linkIsExactActive:A,linkClass:D,linkAttrs:$,getLink:E,navigateToRouterLink:B,navigateOnClick:K}}export{fe as Q,le as a,R as b,H as c,de as d,ue as e,U as f,ce as g,T as h,ae as i,G as j,J as k,ve as u};
