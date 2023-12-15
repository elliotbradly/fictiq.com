import{c as q,h as j,a as A,g as ae,b as re,u as se,d as ue,e as ce,Q as de}from"./use-router-link.53499111.js";import{i as fe,e as P,l as Z,p as ee,c,h as g,a as ve,g as C,w as D,o as E,d as F,n as te,f as H,r as p,j as ne,k as K,m as $,q as me,s as he,t as ge,u as ie,_ as oe,v as W,x as N,y as k,z as x,A as be,B as M,C as V,D as pe}from"./index.8e13e943.js";var ye=q({name:"QPageContainer",setup(e,{slots:l}){const{proxy:{$q:n}}=C(),t=fe(Z,P);if(t===P)return console.error("QPageContainer needs to be child of QLayout"),P;ee(ve,!0);const a=c(()=>{const r={};return t.header.space===!0&&(r.paddingTop=`${t.header.size}px`),t.right.space===!0&&(r[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(r.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(r[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),r});return()=>g("div",{class:"q-page-container",style:a.value},j(l.default))}});const we=[null,document,document.body,document.scrollingElement,document.documentElement];function ke(e,l){let n=ae(l);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return we.includes(n)?window:n}function qe(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function _e(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let T;function O(){if(T!==void 0)return T;const e=document.createElement("p"),l=document.createElement("div");A(e,{width:"100%",height:"200px"}),A(l,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),l.appendChild(e),document.body.appendChild(l);const n=e.offsetWidth;l.style.overflow="scroll";let t=e.offsetWidth;return n===t&&(t=l.clientWidth),l.remove(),T=n-t,T}const{passive:U}=H,Se=["both","horizontal","vertical"];var xe=q({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Se.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:l}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,a,r;D(()=>e.scrollTarget,()=>{s(),b()});function d(){t!==null&&t();const h=Math.max(0,qe(a)),y=_e(a),f={top:h-n.position.top,left:y-n.position.left};if(e.axis==="vertical"&&f.top===0||e.axis==="horizontal"&&f.left===0)return;const _=Math.abs(f.top)>=Math.abs(f.left)?f.top<0?"up":"down":f.left<0?"left":"right";n.position={top:h,left:y},n.directionChanged=n.direction!==_,n.delta=f,n.directionChanged===!0&&(n.direction=_,n.inflectionPoint=n.position),l("scroll",{...n})}function b(){a=ke(r,e.scrollTarget),a.addEventListener("scroll",o,U),o(!0)}function s(){a!==void 0&&(a.removeEventListener("scroll",o,U),a=void 0)}function o(h){if(h===!0||e.debounce===0||e.debounce==="0")d();else if(t===null){const[y,f]=e.debounce?[setTimeout(d,e.debounce),clearTimeout]:[requestAnimationFrame(d),cancelAnimationFrame];t=()=>{f(y),t=null}}}const{proxy:v}=C();return D(()=>v.$q.lang.rtl,d),E(()=>{r=v.$el.parentNode,b()}),F(()=>{t!==null&&t(),s()}),Object.assign(v,{trigger:o,getPosition:()=>n}),te}});function Le(){const e=p(!ne.value);return e.value===!1&&E(()=>{e.value=!0}),e}const le=typeof ResizeObserver!="undefined",X=le===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Y=q({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:l}){let n=null,t,a={width:-1,height:-1};function r(s){s===!0||e.debounce===0||e.debounce==="0"?d():n===null&&(n=setTimeout(d,e.debounce))}function d(){if(n!==null&&(clearTimeout(n),n=null),t){const{offsetWidth:s,offsetHeight:o}=t;(s!==a.width||o!==a.height)&&(a={width:s,height:o},l("resize",a))}}const{proxy:b}=C();if(le===!0){let s;const o=v=>{t=b.$el.parentNode,t?(s=new ResizeObserver(r),s.observe(t),d()):v!==!0&&K(()=>{o(!0)})};return E(()=>{o()}),F(()=>{n!==null&&clearTimeout(n),s!==void 0&&(s.disconnect!==void 0?s.disconnect():t&&s.unobserve(t))}),te}else{let v=function(){n!==null&&(clearTimeout(n),n=null),o!==void 0&&(o.removeEventListener!==void 0&&o.removeEventListener("resize",r,H.passive),o=void 0)},h=function(){v(),t&&t.contentDocument&&(o=t.contentDocument.defaultView,o.addEventListener("resize",r,H.passive),d())};const s=Le();let o;return E(()=>{K(()=>{t=b.$el,t&&h()})}),F(v),b.trigger=r,()=>{if(s.value===!0)return g("object",{style:X.style,tabindex:-1,type:"text/html",data:X.url,"aria-hidden":"true",onLoad:h})}}}}),Ce=q({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:l,emit:n}){const{proxy:{$q:t}}=C(),a=p(null),r=p(t.screen.height),d=p(e.container===!0?0:t.screen.width),b=p({position:0,direction:"down",inflectionPoint:0}),s=p(0),o=p(ne.value===!0?0:O()),v=c(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),h=c(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),y=c(()=>o.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${o.value}px`}:null),f=c(()=>o.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${o.value}px`,width:`calc(100% + ${o.value}px)`}:null);function _(i){if(e.container===!0||document.qScrollPrevented!==!0){const m={position:i.position.top,direction:i.direction,directionChanged:i.directionChanged,inflectionPoint:i.inflectionPoint.top,delta:i.delta.top};b.value=m,e.onScroll!==void 0&&n("scroll",m)}}function R(i){const{height:m,width:w}=i;let L=!1;r.value!==m&&(L=!0,r.value=m,e.onScrollHeight!==void 0&&n("scrollHeight",m),z()),d.value!==w&&(L=!0,d.value=w),L===!0&&e.onResize!==void 0&&n("resize",i)}function Q({height:i}){s.value!==i&&(s.value=i,z())}function z(){if(e.container===!0){const i=r.value>s.value?O():0;o.value!==i&&(o.value=i)}}let S=null;const u={instances:{},view:c(()=>e.view),isContainer:c(()=>e.container),rootRef:a,height:r,containerHeight:s,scrollbarWidth:o,totalWidth:c(()=>d.value+o.value),rows:c(()=>{const i=e.view.toLowerCase().split(" ");return{top:i[0].split(""),middle:i[1].split(""),bottom:i[2].split("")}}),header:$({size:0,offset:0,space:!1}),right:$({size:300,offset:0,space:!1}),footer:$({size:0,offset:0,space:!1}),left:$({size:300,offset:0,space:!1}),scroll:b,animate(){S!==null?clearTimeout(S):document.body.classList.add("q-body--layout-animate"),S=setTimeout(()=>{S=null,document.body.classList.remove("q-body--layout-animate")},155)},update(i,m,w){u[i][m]=w}};if(ee(Z,u),O()>0){let w=function(){i=null,m.classList.remove("hide-scrollbar")},L=function(){if(i===null){if(m.scrollHeight>t.screen.height)return;m.classList.add("hide-scrollbar")}else clearTimeout(i);i=setTimeout(w,300)},B=function(I){i!==null&&I==="remove"&&(clearTimeout(i),w()),window[`${I}EventListener`]("resize",L)},i=null;const m=document.body;D(()=>e.container!==!0?"add":"remove",B),e.container!==!0&&B("add"),me(()=>{B("remove")})}return()=>{const i=re(l.default,[g(xe,{onScroll:_}),g(Y,{onResize:R})]),m=g("div",{class:v.value,style:h.value,ref:e.container===!0?void 0:a,tabindex:-1},i);return e.container===!0?g("div",{class:"q-layout-container overflow-hidden",ref:a},[g(Y,{onResize:Q}),g("div",{class:"absolute-full",style:y.value},[g("div",{class:"scroll",style:f.value},[m])])]):m}}}),G=q({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:l}){const n=c(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>g("div",{class:n.value},j(l.default))}}),J=q({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:l}){const n=c(()=>parseInt(e.lines,10)),t=c(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),a=c(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>g("div",{style:a.value,class:t.value},j(l.default))}});const ze={dark:{type:Boolean,default:null}};function $e(e,l){return c(()=>e.dark===null?l.dark.isActive:e.dark)}var Te=q({name:"QItem",props:{...ze,...se,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:l,emit:n}){const{proxy:{$q:t}}=C(),a=$e(e,t),{hasLink:r,linkAttrs:d,linkClass:b,linkTag:s,navigateOnClick:o}=ue(),v=p(null),h=p(null),y=c(()=>e.clickable===!0||r.value===!0||e.tag==="label"),f=c(()=>e.disable!==!0&&y.value===!0),_=c(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(a.value===!0?" q-item--dark":"")+(r.value===!0&&e.active===null?b.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(f.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),R=c(()=>{if(e.insetLevel===void 0)return null;const u=t.lang.rtl===!0?"Right":"Left";return{["padding"+u]:16+e.insetLevel*56+"px"}});function Q(u){f.value===!0&&(h.value!==null&&(u.qKeyEvent!==!0&&document.activeElement===v.value?h.value.focus():document.activeElement===h.value&&v.value.focus()),o(u))}function z(u){if(f.value===!0&&he(u,[13,32])===!0){ge(u),u.qKeyEvent=!0;const i=new MouseEvent("click",u);i.qKeyEvent=!0,v.value.dispatchEvent(i)}n("keyup",u)}function S(){const u=ce(l.default,[]);return f.value===!0&&u.unshift(g("div",{class:"q-focus-helper",tabindex:-1,ref:h})),u}return()=>{const u={ref:v,class:_.value,style:R.value,role:"listitem",onClick:Q,onKeyup:z};return f.value===!0?(u.tabindex=e.tabindex||"0",Object.assign(u,d.value)):y.value===!0&&(u["aria-disabled"]="true"),g(s.value,u,S())}}});const Ee=ie({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function Re(e,l,n,t,a,r){return W(),N(Te,{clickable:"",tag:"a",target:"_blank",href:e.link},{default:k(()=>[e.icon?(W(),N(G,{key:0,avatar:""},{default:k(()=>[x(de,{name:e.icon},null,8,["name"])]),_:1})):be("",!0),x(G,null,{default:k(()=>[x(J,null,{default:k(()=>[M(V(e.title),1)]),_:1}),x(J,{caption:""},{default:k(()=>[M(V(e.caption),1)]),_:1})]),_:1})]),_:1},8,["href"])}var Qe=oe(Ee,[["render",Re]]);const Be=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],Pe=ie({name:"MainLayout",components:{EssentialLink:Qe},setup(){const e=p(!1);return{essentialLinks:Be,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}});function Oe(e,l,n,t,a,r){const d=pe("router-view");return W(),N(Ce,{view:"lHh Lpr lFf"},{default:k(()=>[x(ye,null,{default:k(()=>[x(d)]),_:1})]),_:1})}var He=oe(Pe,[["render",Oe]]);export{He as default};
