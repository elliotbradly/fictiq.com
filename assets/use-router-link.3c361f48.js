import{u as N,c as l,h as v,g as j}from"./index.5c3371ed.js";import{c as D,h as Q,b}from"./render.4946e38e.js";function ie(e,t){const o=e.style;for(const n in t)o[n]=t[n]}function ue(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=N(e);if(t)return t.$el||t}const H={xs:18,sm:24,md:32,lg:38,xl:46},T={size:String};function U(e,t=H){return l(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const P="0 0 24 24",w=e=>e,S=e=>`ionicons ${e}`,M={"mdi-":e=>`mdi ${e}`,"icon-":w,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":S,"ion-ios":S,"ion-logo":S,"iconfont ":w,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},I={o_:"-outlined",r_:"-round",s_:"-sharp"},q={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},G=new RegExp("^("+Object.keys(M).join("|")+")"),J=new RegExp("^("+Object.keys(I).join("|")+")"),z=new RegExp("^("+Object.keys(q).join("|")+")"),W=/^[Mm]\s?[-+]?\.?\d/,X=/^img:/,Y=/^svguse:/,Z=/^ion-/,ee=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var le=D({name:"QIcon",props:{...T,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:o}}=j(),n=U(e),c=l(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),u=l(()=>{let a,r=e.name;if(r==="none"||!r)return{none:!0};if(o.iconMapFn!==null){const s=o.iconMapFn(r);if(s!==void 0)if(s.icon!==void 0){if(r=s.icon,r==="none"||!r)return{none:!0}}else return{cls:s.cls,content:s.content!==void 0?s.content:" "}}if(W.test(r)===!0){const[s,h=P]=r.split("|");return{svg:!0,viewBox:h,nodes:s.split("&&").map(R=>{const[$,x,k]=R.split("@@");return v("path",{style:x,d:$,transform:k})})}}if(X.test(r)===!0)return{img:!0,src:r.substring(4)};if(Y.test(r)===!0){const[s,h=P]=r.split("|");return{svguse:!0,src:s.substring(7),viewBox:h}}let p=" ";const d=r.match(G);if(d!==null)a=M[d[1]](r);else if(ee.test(r)===!0)a=r;else if(Z.test(r)===!0)a=`ionicons ion-${o.platform.is.ios===!0?"ios":"md"}${r.substring(3)}`;else if(z.test(r)===!0){a="notranslate material-symbols";const s=r.match(z);s!==null&&(r=r.substring(6),a+=q[s[1]]),p=r}else{a="notranslate material-icons";const s=r.match(J);s!==null&&(r=r.substring(2),a+=I[s[1]]),p=r}return{cls:a,content:p}});return()=>{const a={class:c.value,style:n.value,"aria-hidden":"true",role:"presentation"};return u.value.none===!0?v(e.tag,a,Q(t.default)):u.value.img===!0?v("span",a,b(t.default,[v("img",{src:u.value.src})])):u.value.svg===!0?v("span",a,b(t.default,[v("svg",{viewBox:u.value.viewBox||"0 0 24 24"},u.value.nodes)])):u.value.svguse===!0?v("span",a,b(t.default,[v("svg",{viewBox:u.value.viewBox},[v("use",{"xlink:href":u.value.src})])])):(u.value.cls!==void 0&&(a.class+=" "+u.value.cls),v(e.tag,a,b(t.default,[u.value.content])))}}});function V(e,t){typeof t.type=="symbol"?Array.isArray(t.children)===!0&&t.children.forEach(o=>{V(e,o)}):e.add(t)}function ce(e){const t=new Set;return e.forEach(o=>{V(t,o)}),Array.from(t)}function te(e){return e.appContext.config.globalProperties.$router!==void 0}function L(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function _(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ne(e,t){for(const o in t){const n=t[o],c=e[o];if(typeof n=="string"){if(n!==c)return!1}else if(Array.isArray(c)===!1||c.length!==n.length||n.some((u,a)=>u!==c[a]))return!1}return!0}function C(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((o,n)=>o===t[n]):e.length===1&&e[0]===t}function re(e,t){return Array.isArray(e)===!0?C(e,t):Array.isArray(t)===!0?C(t,e):e===t}function se(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const o in e)if(re(e[o],t[o])===!1)return!1;return!0}const fe={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function ve({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const o=j(),{props:n,proxy:c,emit:u}=o,a=te(o),r=l(()=>n.disable!==!0&&n.href!==void 0),p=t===!0?l(()=>a===!0&&n.disable!==!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):l(()=>a===!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),d=l(()=>p.value===!0?E(n.to):null),s=l(()=>d.value!==null),h=l(()=>r.value===!0||s.value===!0),R=l(()=>n.type==="a"||h.value===!0?"a":n.tag||e||"div"),$=l(()=>r.value===!0?{href:n.href,target:n.target}:s.value===!0?{href:d.value.href,target:n.target}:{}),x=l(()=>{if(s.value===!1)return-1;const{matched:i}=d.value,{length:f}=i,g=i[f-1];if(g===void 0)return-1;const m=c.$route.matched;if(m.length===0)return-1;const y=m.findIndex(_.bind(null,g));if(y>-1)return y;const O=L(i[f-2]);return f>1&&L(g)===O&&m[m.length-1].path!==O?m.findIndex(_.bind(null,i[f-2])):y}),k=l(()=>s.value===!0&&x.value!==-1&&ne(c.$route.params,d.value.params)),A=l(()=>k.value===!0&&x.value===c.$route.matched.length-1&&se(c.$route.params,d.value.params)),F=l(()=>s.value===!0?A.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":k.value===!0?` ${n.activeClass}`:"":"");function E(i){try{return c.$router.resolve(i)}catch{}return null}function B(i,{returnRouterError:f,to:g=n.to,replace:m=n.replace}={}){if(n.disable===!0)return i.preventDefault(),Promise.resolve(!1);if(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey||i.button!==void 0&&i.button!==0||n.target==="_blank")return Promise.resolve(!1);i.preventDefault();const y=c.$router[m===!0?"replace":"push"](g);return f===!0?y:y.then(()=>{}).catch(()=>{})}function K(i){if(s.value===!0){const f=g=>B(i,g);u("click",i,f),i.defaultPrevented!==!0&&f()}else u("click",i)}return{hasRouterLink:s,hasHrefLink:r,hasLink:h,linkTag:R,resolvedLink:d,linkIsActive:k,linkIsExactActive:A,linkClass:F,linkAttrs:$,getLink:E,navigateToRouterLink:B,navigateOnClick:K}}export{le as Q,ve as a,H as b,ie as c,T as d,U as e,ce as f,ue as g,fe as u,te as v};
