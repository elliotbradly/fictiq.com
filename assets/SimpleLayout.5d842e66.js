import{Q as k,a as b}from"./QLayout.3860b6d8.js";import{Q as w}from"./use-router-link.c464c440.js";import{Q as u,a as q}from"./QItem.cb2d325d.js";import{c as g,h as y}from"./render.89aa6c86.js";import{c as l,h as Q,d as f,_ as v,o as s,a as c,w as t,e as a,f as L,g as p,t as m,r as $,j as C}from"./index.a1b1c6a6.js";import"./scroll.339bb471.js";import"./use-dark.4670edac.js";var d=g({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:n}){const o=l(()=>parseInt(e.lines,10)),r=l(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(o.value===1?" ellipsis":"")),i=l(()=>e.lines!==void 0&&o.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":o.value}:null);return()=>Q("div",{style:i.value,class:r.value},y(n.default))}});const S=f({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function I(e,n,o,r,i,_){return s(),c(q,{clickable:"",tag:"a",target:"_blank",href:e.link},{default:t(()=>[e.icon?(s(),c(u,{key:0,avatar:""},{default:t(()=>[a(w,{name:e.icon},null,8,["name"])]),_:1})):L("",!0),a(u,null,{default:t(()=>[a(d,null,{default:t(()=>[p(m(e.title),1)]),_:1}),a(d,{caption:""},{default:t(()=>[p(m(e.caption),1)]),_:1})]),_:1})]),_:1},8,["href"])}var x=v(S,[["render",I]]);const B=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],D=f({name:"MainLayout",components:{EssentialLink:x},setup(){const e=$(!1);return{essentialLinks:B,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}});function F(e,n,o,r,i,_){const h=C("router-view");return s(),c(k,{view:"lHh Lpr lFf"},{default:t(()=>[a(b,null,{default:t(()=>[a(h)]),_:1})]),_:1})}var H=v(D,[["render",F]]);export{H as default};
