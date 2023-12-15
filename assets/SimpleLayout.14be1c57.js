import{b as K,c as R}from"./QLayout.dc2fe2be.js";import{c as p,b as C,m as j,n as A,i as P,Q as T}from"./use-router-link.f46b4e96.js";import{c as n,h as m,r as b,a as O,s as V,g as G,S as B,_ as S,F as k,G as _,H as l,I as u,X as H,Y as y,Z as g,E as M}from"./index.c8cade40.js";import{a as W,u as U}from"./use-dark.b6b3d09c.js";var w=p({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:i}){const a=n(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>m("div",{class:a.value},C(i.default))}}),L=p({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:i}){const a=n(()=>parseInt(e.lines,10)),o=n(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(a.value===1?" ellipsis":"")),r=n(()=>e.lines!==void 0&&a.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":a.value}:null);return()=>m("div",{style:r.value,class:o.value},C(i.default))}}),X=p({name:"QItem",props:{...W,...j,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:i,emit:a}){const{proxy:{$q:o}}=G(),r=U(e,o),{hasLink:c,linkAttrs:f,linkClass:$,linkTag:Q,navigateOnClick:x}=A(),v=b(null),d=b(null),h=n(()=>e.clickable===!0||c.value===!0||e.tag==="label"),s=n(()=>e.disable!==!0&&h.value===!0),E=n(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(r.value===!0?" q-item--dark":"")+(c.value===!0&&e.active===null?$.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(s.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),I=n(()=>{if(e.insetLevel===void 0)return null;const t=o.lang.rtl===!0?"Right":"Left";return{["padding"+t]:16+e.insetLevel*56+"px"}});function D(t){s.value===!0&&(d.value!==null&&(t.qKeyEvent!==!0&&document.activeElement===v.value?d.value.focus():document.activeElement===d.value&&v.value.focus()),x(t))}function F(t){if(s.value===!0&&O(t,13)===!0){V(t),t.qKeyEvent=!0;const q=new MouseEvent("click",t);q.qKeyEvent=!0,v.value.dispatchEvent(q)}a("keyup",t)}function N(){const t=P(i.default,[]);return s.value===!0&&t.unshift(m("div",{class:"q-focus-helper",tabindex:-1,ref:d})),t}return()=>{const t={ref:v,class:E.value,style:I.value,role:"listitem",onClick:D,onKeyup:F};return s.value===!0?(t.tabindex=e.tabindex||"0",Object.assign(t,f.value)):h.value===!0&&(t["aria-disabled"]="true"),m(Q.value,t,N())}}});const Y=B({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function Z(e,i,a,o,r,c){return k(),_(X,{clickable:"",tag:"a",target:"_blank",href:e.link},{default:l(()=>[e.icon?(k(),_(w,{key:0,avatar:""},{default:l(()=>[u(T,{name:e.icon},null,8,["name"])]),_:1})):H("",!0),u(w,null,{default:l(()=>[u(L,null,{default:l(()=>[y(g(e.title),1)]),_:1}),u(L,{caption:""},{default:l(()=>[y(g(e.caption),1)]),_:1})]),_:1})]),_:1},8,["href"])}var z=S(Y,[["render",Z]]);const J=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],ee=B({name:"MainLayout",components:{EssentialLink:z},setup(){const e=b(!1);return{essentialLinks:J,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}});function te(e,i,a,o,r,c){const f=M("router-view");return k(),_(K,{view:"lHh Lpr lFf"},{default:l(()=>[u(R,null,{default:l(()=>[u(f)]),_:1})]),_:1})}var oe=S(ee,[["render",te]]);export{oe as default};
