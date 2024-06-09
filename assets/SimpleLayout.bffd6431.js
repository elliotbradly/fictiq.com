import{Q as h,a as v}from"./QLayout.b0ae790c.js";import{Q as w}from"./use-router-link.0eb069a4.js";import{Q as n,a as g}from"./QItem.54edf87b.js";import{Q as i}from"./QItemLabel.18138957.js";import{d as l,_ as u,o,c as r,w as e,a,e as q,f as s,t as c,r as Q,g as y}from"./index.01d7074a.js";import"./render.0f74db1f.js";import"./scroll.340d2add.js";import"./use-size.7aba2b5f.js";import"./use-dark.50ef5288.js";const L=l({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function $(t,p,m,f,d,k){return o(),r(g,{clickable:"",tag:"a",target:"_blank",href:t.link},{default:e(()=>[t.icon?(o(),r(n,{key:0,avatar:""},{default:e(()=>[a(w,{name:t.icon},null,8,["name"])]),_:1})):q("",!0),a(n,null,{default:e(()=>[a(i,null,{default:e(()=>[s(c(t.title),1)]),_:1}),a(i,{caption:""},{default:e(()=>[s(c(t.caption),1)]),_:1})]),_:1})]),_:1},8,["href"])}var b=u(L,[["render",$]]);const C=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],S=l({name:"MainLayout",components:{EssentialLink:b},setup(){const t=Q(!1);return{essentialLinks:C,leftDrawerOpen:t,toggleLeftDrawer(){t.value=!t.value}}}});function D(t,p,m,f,d,k){const _=y("router-view");return o(),r(h,{view:"lHh Lpr lFf"},{default:e(()=>[a(v,null,{default:e(()=>[a(_)]),_:1})]),_:1})}var A=u(S,[["render",D]]);export{A as default};
