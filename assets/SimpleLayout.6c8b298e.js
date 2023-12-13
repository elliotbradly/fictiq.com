import{u as K,b as R,c as j,d as A}from"./QLayout.9d826839.js";import{b as P,c as T,Q as M}from"./use-router-link.70bfc00a.js";import{c as p,a as C,d as O}from"./render.2d5838ef.js";import{c as n,h as m,r as b,d as V,s as W,g as G,W as B,_ as $,J as k,K as _,L as l,M as u,a0 as H,N as y,a1 as g,I as J}from"./index.c00ffa1b.js";var w=p({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:i}){const a=n(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>m("div",{class:a.value},C(i.default))}}),L=p({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:i}){const a=n(()=>parseInt(e.lines,10)),o=n(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(a.value===1?" ellipsis":"")),r=n(()=>e.lines!==void 0&&a.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":a.value}:null);return()=>m("div",{style:r.value,class:o.value},C(i.default))}}),U=p({name:"QItem",props:{...K,...P,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:i,emit:a}){const{proxy:{$q:o}}=G(),r=R(e,o),{hasLink:c,linkAttrs:f,linkClass:Q,linkTag:S,navigateOnClick:x}=T(),d=b(null),v=b(null),h=n(()=>e.clickable===!0||c.value===!0||e.tag==="label"),s=n(()=>e.disable!==!0&&h.value===!0),I=n(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(r.value===!0?" q-item--dark":"")+(c.value===!0&&e.active===null?Q.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(s.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),E=n(()=>{if(e.insetLevel===void 0)return null;const t=o.lang.rtl===!0?"Right":"Left";return{["padding"+t]:16+e.insetLevel*56+"px"}});function D(t){s.value===!0&&(v.value!==null&&(t.qKeyEvent!==!0&&document.activeElement===d.value?v.value.focus():document.activeElement===v.value&&d.value.focus()),x(t))}function N(t){if(s.value===!0&&V(t,13)===!0){W(t),t.qKeyEvent=!0;const q=new MouseEvent("click",t);q.qKeyEvent=!0,d.value.dispatchEvent(q)}a("keyup",t)}function F(){const t=O(i.default,[]);return s.value===!0&&t.unshift(m("div",{class:"q-focus-helper",tabindex:-1,ref:v})),t}return()=>{const t={ref:d,class:I.value,style:E.value,role:"listitem",onClick:D,onKeyup:N};return s.value===!0?(t.tabindex=e.tabindex||"0",Object.assign(t,f.value)):h.value===!0&&(t["aria-disabled"]="true"),m(S.value,t,F())}}});const z=B({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function X(e,i,a,o,r,c){return k(),_(U,{clickable:"",tag:"a",target:"_blank",href:e.link},{default:l(()=>[e.icon?(k(),_(w,{key:0,avatar:""},{default:l(()=>[u(M,{name:e.icon},null,8,["name"])]),_:1})):H("",!0),u(w,null,{default:l(()=>[u(L,null,{default:l(()=>[y(g(e.title),1)]),_:1}),u(L,{caption:""},{default:l(()=>[y(g(e.caption),1)]),_:1})]),_:1})]),_:1},8,["href"])}var Y=$(z,[["render",X]]);const Z=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],ee=B({name:"MainLayout",components:{EssentialLink:Y},setup(){const e=b(!1);return{essentialLinks:Z,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}});function te(e,i,a,o,r,c){const f=J("router-view");return k(),_(j,{view:"lHh Lpr lFf"},{default:l(()=>[u(A,null,{default:l(()=>[u(f)]),_:1})]),_:1})}var oe=$(ee,[["render",te]]);export{oe as default};
