import{c as y,h as w,b as I}from"./render.df00e421.js";import{c as r,h as m,v as Q,x as h,y as L,r as x,B as f,m as S,q as T,_ as k,d as O,l as R,I as $,D as N,j as U,o as j,a as M,w as v,e as i,J as B,Z as K,$ as P}from"./index.e5e3ca7a.js";import{Q as A}from"./QBtn.db416f1b.js";import{b as D,Q as E,a as J}from"./QLayout.d2468841.js";import"./use-router-link.d0e89084.js";import"./scroll.f766a111.js";var Z=y({name:"QToolbarTitle",props:{shrink:Boolean},setup(t,{slots:u}){const l=r(()=>"q-toolbar__title ellipsis"+(t.shrink===!0?" col-shrink":""));return()=>m("div",{class:l.value},w(u.default))}}),G=y({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:u}){const l=r(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>m("div",{class:l.value,role:"toolbar"},w(u.default))}}),W=y({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:u,emit:l}){const{proxy:{$q:c}}=T(),a=Q(L,h);if(a===h)return console.error("QHeader needs to be child of QLayout"),h;const p=x(parseInt(t.heightHint,10)),n=x(!0),_=r(()=>t.reveal===!0||a.view.value.indexOf("H")>-1||c.platform.is.ios&&a.isContainer.value===!0),b=r(()=>{if(t.modelValue!==!0)return 0;if(_.value===!0)return n.value===!0?p.value:0;const e=p.value-a.scroll.value.position;return e>0?e:0}),g=r(()=>t.modelValue!==!0||_.value===!0&&n.value!==!0),V=r(()=>t.modelValue===!0&&g.value===!0&&t.reveal===!0),z=r(()=>"q-header q-layout__section--marginal "+(_.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(g.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),C=r(()=>{const e=a.rows.value.top,s={};return e[0]==="l"&&a.left.space===!0&&(s[c.lang.rtl===!0?"right":"left"]=`${a.left.size}px`),e[2]==="r"&&a.right.space===!0&&(s[c.lang.rtl===!0?"left":"right"]=`${a.right.size}px`),s});function o(e,s){a.update("header",e,s)}function d(e,s){e.value!==s&&(e.value=s)}function F({height:e}){d(p,e),o("size",e)}function H(e){V.value===!0&&d(n,!0),l("focusin",e)}f(()=>t.modelValue,e=>{o("space",e),d(n,!0),a.animate()}),f(b,e=>{o("offset",e)}),f(()=>t.reveal,e=>{e===!1&&d(n,t.modelValue)}),f(n,e=>{a.animate(),l("reveal",e)}),f(a.scroll,e=>{t.reveal===!0&&d(n,e.direction==="up"||e.position<=t.revealOffset||e.position-e.inflectionPoint<100)});const q={};return a.instances.header=q,t.modelValue===!0&&o("size",p.value),o("space",t.modelValue),o("offset",b.value),S(()=>{a.instances.header===q&&(a.instances.header=void 0,o("size",0),o("offset",0),o("space",!1))}),()=>{const e=I(u.default,[]);return t.elevated===!0&&e.push(m("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),e.push(m(D,{debounce:0,onResize:F})),m("header",{class:z.value,style:C.value,onFocusin:H},e)}}});const X=t=>(K("data-v-76947af7"),t=t(),P(),t),Y=X(()=>B("span",{class:"generis-font text-primary",style:{position:"relative",top:"0px",left:"0px"}}," Fictiq ",-1)),ee={class:"q-pa-md q-pr-m angle-font"},te=O({name:"MainLayout"}),ae=Object.assign(te,{setup(t){return Q("MARKET"),R(async()=>{}),$(async()=>{}),N(async()=>{}),(u,l)=>{const c=U("router-view");return j(),M(E,{view:"hHh lpR fFf"},{default:v(()=>[i(W,{class:"bg-primary text-accent bg-black headerCustomStyle"},{default:v(()=>[i(G,{class:"q-gutter-sm"},{default:v(()=>[i(Z,null,{default:v(()=>[Y]),_:1}),B("div",ee,[i(A,{class:"flat text-primary",label:"Connect",outline:"",size:"l"})])]),_:1})]),_:1}),i(J,null,{default:v(()=>[i(c)]),_:1})]),_:1})}}});var ie=k(ae,[["__scopeId","data-v-76947af7"]]);export{ie as default};
