import{c as C,h as _,d as D,g as I,e as G}from"./use-router-link.ca14a947.js";import{l as J,m as R,p as j,c as v,h as m,n as A,q as Z,g as E,u as O,v as T,x as q,y as V,z as H,r as w,A as K,B as N,C as x,D as ee}from"./index.d077c9b8.js";var ue=C({name:"QPageContainer",setup(e,{slots:r}){const{proxy:{$q:n}}=E(),t=J(A,R);if(t===R)return console.error("QPageContainer needs to be child of QLayout"),R;j(Z,!0);const s=v(()=>{const a={};return t.header.space===!0&&(a.paddingTop=`${t.header.size}px`),t.right.space===!0&&(a[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(a.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(a[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),a});return()=>m("div",{class:"q-page-container",style:s.value},_(r.default))}});const te=[null,document,document.body,document.scrollingElement,document.documentElement];function ne(e,r){let n=I(r);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return te.includes(n)?window:n}function oe(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function ie(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let L;function P(){if(L!==void 0)return L;const e=document.createElement("p"),r=document.createElement("div");D(e,{width:"100%",height:"200px"}),D(r,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),r.appendChild(e),document.body.appendChild(r);const n=e.offsetWidth;r.style.overflow="scroll";let t=e.offsetWidth;return n===t&&(t=r.clientWidth),r.remove(),L=n-t,L}function de(e,r=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:r?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}const{passive:F}=H,le=["both","horizontal","vertical"];var re=C({name:"QScrollObserver",props:{axis:{type:String,validator:e=>le.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:r}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,s,a;O(()=>e.scrollTarget,()=>{l(),h()});function u(){t!==null&&t();const g=Math.max(0,oe(s)),b=ie(s),d={top:g-n.position.top,left:b-n.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const z=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";n.position={top:g,left:b},n.directionChanged=n.direction!==z,n.delta=d,n.directionChanged===!0&&(n.direction=z,n.inflectionPoint=n.position),r("scroll",{...n})}function h(){s=ne(a,e.scrollTarget),s.addEventListener("scroll",i,F),i(!0)}function l(){s!==void 0&&(s.removeEventListener("scroll",i,F),s=void 0)}function i(g){if(g===!0||e.debounce===0||e.debounce==="0")u();else if(t===null){const[b,d]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];t=()=>{d(b),t=null}}}const{proxy:f}=E();return O(()=>f.$q.lang.rtl,u),T(()=>{a=f.$el.parentNode,h()}),q(()=>{t!==null&&t(),l()}),Object.assign(f,{trigger:i,getPosition:()=>n}),V}});function se(){const e=w(!K.value);return e.value===!1&&T(()=>{e.value=!0}),e}const U=typeof ResizeObserver!="undefined",M=U===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var B=C({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:r}){let n=null,t,s={width:-1,height:-1};function a(l){l===!0||e.debounce===0||e.debounce==="0"?u():n===null&&(n=setTimeout(u,e.debounce))}function u(){if(n!==null&&(clearTimeout(n),n=null),t){const{offsetWidth:l,offsetHeight:i}=t;(l!==s.width||i!==s.height)&&(s={width:l,height:i},r("resize",s))}}const{proxy:h}=E();if(U===!0){let l;const i=f=>{t=h.$el.parentNode,t?(l=new ResizeObserver(a),l.observe(t),u()):f!==!0&&N(()=>{i(!0)})};return T(()=>{i()}),q(()=>{n!==null&&clearTimeout(n),l!==void 0&&(l.disconnect!==void 0?l.disconnect():t&&l.unobserve(t))}),V}else{let f=function(){n!==null&&(clearTimeout(n),n=null),i!==void 0&&(i.removeEventListener!==void 0&&i.removeEventListener("resize",a,H.passive),i=void 0)},g=function(){f(),t&&t.contentDocument&&(i=t.contentDocument.defaultView,i.addEventListener("resize",a,H.passive),u())};const l=se();let i;return T(()=>{N(()=>{t=h.$el,t&&g()})}),q(f),h.trigger=a,()=>{if(l.value===!0)return m("object",{style:M.style,tabindex:-1,type:"text/html",data:M.url,"aria-hidden":"true",onLoad:g})}}}}),fe=C({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:r,emit:n}){const{proxy:{$q:t}}=E(),s=w(null),a=w(t.screen.height),u=w(e.container===!0?0:t.screen.width),h=w({position:0,direction:"down",inflectionPoint:0}),l=w(0),i=w(K.value===!0?0:P()),f=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),g=v(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),b=v(()=>i.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${i.value}px`}:null),d=v(()=>i.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${i.value}px`,width:`calc(100% + ${i.value}px)`}:null);function z(o){if(e.container===!0||document.qScrollPrevented!==!0){const c={position:o.position.top,direction:o.direction,directionChanged:o.directionChanged,inflectionPoint:o.inflectionPoint.top,delta:o.delta.top};h.value=c,e.onScroll!==void 0&&n("scroll",c)}}function X(o){const{height:c,width:p}=o;let y=!1;a.value!==c&&(y=!0,a.value=c,e.onScrollHeight!==void 0&&n("scrollHeight",c),Q()),u.value!==p&&(y=!0,u.value=p),y===!0&&e.onResize!==void 0&&n("resize",o)}function Y({height:o}){l.value!==o&&(l.value=o,Q())}function Q(){if(e.container===!0){const o=a.value>l.value?P():0;i.value!==o&&(i.value=o)}}let S=null;const W={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:s,height:a,containerHeight:l,scrollbarWidth:i,totalWidth:v(()=>u.value+i.value),rows:v(()=>{const o=e.view.toLowerCase().split(" ");return{top:o[0].split(""),middle:o[1].split(""),bottom:o[2].split("")}}),header:x({size:0,offset:0,space:!1}),right:x({size:300,offset:0,space:!1}),footer:x({size:0,offset:0,space:!1}),left:x({size:300,offset:0,space:!1}),scroll:h,animate(){S!==null?clearTimeout(S):document.body.classList.add("q-body--layout-animate"),S=setTimeout(()=>{S=null,document.body.classList.remove("q-body--layout-animate")},155)},update(o,c,p){W[o][c]=p}};if(j(A,W),P()>0){let p=function(){o=null,c.classList.remove("hide-scrollbar")},y=function(){if(o===null){if(c.scrollHeight>t.screen.height)return;c.classList.add("hide-scrollbar")}else clearTimeout(o);o=setTimeout(p,300)},$=function(k){o!==null&&k==="remove"&&(clearTimeout(o),p()),window[`${k}EventListener`]("resize",y)},o=null;const c=document.body;O(()=>e.container!==!0?"add":"remove",$),e.container!==!0&&$("add"),ee(()=>{$("remove")})}return()=>{const o=G(r.default,[m(re,{onScroll:z}),m(B,{onResize:X})]),c=m("div",{class:f.value,style:g.value,ref:e.container===!0?void 0:s,tabindex:-1},o);return e.container===!0?m("div",{class:"q-layout-container overflow-hidden",ref:s},[m(B,{onResize:Y}),m("div",{class:"absolute-full",style:b.value},[m("div",{class:"scroll",style:d.value},[c])])]):c}}});const ve={dark:{type:Boolean,default:null}};function he(e,r){return v(()=>e.dark===null?r.dark.isActive:e.dark)}export{fe as Q,he as a,ue as b,B as c,oe as d,ie as g,de as h,ve as u};
