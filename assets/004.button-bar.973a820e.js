import{Q as o}from"./use-router-link.9756396e.js";import{Q as t}from"./QBtn.918df83a.js";import{Q as p}from"./QBtnGroup.136244f2.js";import{Q as $}from"./QPage.3a2cf67b.js";import{a as k}from"./useQuery.74d39ffa.js";import{l as y,D as f,I as w,o as s,W as i,u as r,t as m,J as l,f as S,X as Q,d as N,a as v,w as n,e}from"./index.c6114c80.js";import{m as B,u as E}from"./horizontal-window.f0b0c570.js";import"./render.3bf6145e.js";import"./utils.fe26e031.js";import"./container.action.6541de47.js";import"./graphic.action.d42df614.js";const q=l("h3",null,"Status",-1),I={key:0},P={key:1},C={key:2},W={__name:"Status",setup(x){const d=async h=>{var a=sessionStorage.getItem("key");a==null&&(a="None",sessionStorage.setItem("key",a)),await fetch("readStatus?idx="+a).then(z=>z.json())},{isPending:c,isError:_,data:u,error:g}=k({queryKey:["status"],queryFn:d});return y(async()=>{}),f(()=>{}),w(()=>{}),(h,a)=>(s(),i(Q,null,[q,r(c)?(s(),i("span",I,"Loading...")):r(_)?(s(),i("span",P,"Error: "+m(r(g).message),1)):r(u)?(s(),i("ul",C,[l("pre",null,m(JSON.stringify(r(u),null,2)),1)])):S("",!0)],64))}},j=l("h3",null,"Poll",-1),F={key:0},J={key:1},O={key:2},V={__name:"Poll",setup(x){const d=()=>window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0,c=async()=>await fetch("readNow?w="+d()).then(a=>a.json()),{isPending:_,isError:u,data:g,error:h}=k({queryKey:["poll"],queryFn:c,refetchInterval:1111});return y(async()=>{}),f(()=>{}),w(()=>{}),(a,z)=>(s(),i(Q,null,[j,r(_)?(s(),i("span",F,"Loading...")):r(u)?(s(),i("span",J,"Error: "+m(r(h).message),1)):r(g)?(s(),i("ul",O,[l("pre",null,m(JSON.stringify(r(g),null,2)),1)])):S("",!0)],64))}},b=l("div",{class:""},[l("canvas",{id:"indexCanvas"})],-1),D={class:""},K={class:""},L=N({name:"TitleScreen"}),ne=Object.assign(L,{setup(x){return y(async d=>{B("on")}),w(async()=>{E("on")}),f(async()=>{}),(d,c)=>(s(),v($,{class:"q-gutter-sm"},{default:n(()=>[b,e(p,{spread:""},{default:n(()=>[e(t,{size:"",xl:"",outline:"",style:{color:"goldenrod",height:"150px"}},{default:n(()=>[e(o,{name:"warning",color:"warning",size:"4rem"})]),_:1}),e(t,{size:"",xl:"",outline:"",style:{color:"goldenrod",height:"150px"}},{default:n(()=>[e(o,{name:"warning",color:"warning",size:"4rem"})]),_:1}),e(t,{size:"",xl:"",outline:"",style:{color:"goldenrod",height:"150px"}},{default:n(()=>[e(o,{name:"warning",color:"warning",size:"4rem"})]),_:1}),e(t,{size:"",xl:"",outline:"",style:{color:"goldenrod",height:"150px"}},{default:n(()=>[e(o,{name:"warning",color:"warning",size:"4rem"})]),_:1}),e(t,{size:"",xl:"",outline:"",style:{color:"goldenrod",height:"150px"}},{default:n(()=>[e(o,{name:"warning",color:"warning",size:"4rem"})]),_:1})]),_:1}),e(p,{spread:""},{default:n(()=>[e(t,{size:"",xl:"",outline:"",style:{color:"goldenrod",height:"150px"}},{default:n(()=>[e(o,{name:"warning",color:"warning",size:"4rem"})]),_:1}),e(t,{size:"",xl:"",outline:"",style:{color:"goldenrod",height:"150px"}},{default:n(()=>[e(o,{name:"warning",color:"warning",size:"4rem"})]),_:1}),e(t,{size:"",xl:"",outline:"",style:{color:"goldenrod",height:"150px"}},{default:n(()=>[e(o,{name:"warning",color:"warning",size:"4rem"})]),_:1}),e(t,{size:"",xl:"",outline:"",style:{color:"goldenrod",height:"150px"}},{default:n(()=>[e(o,{name:"warning",color:"warning",size:"4rem"})]),_:1}),e(t,{size:"",xl:"",outline:"",style:{color:"goldenrod",height:"150px"}},{default:n(()=>[e(o,{name:"warning",color:"warning",size:"4rem"})]),_:1})]),_:1}),e(p,{spread:""},{default:n(()=>[e(t,{size:"",xl:"",outline:"",style:{color:"goldenrod",height:"150px"}},{default:n(()=>[e(o,{name:"warning",color:"warning",size:"4rem"})]),_:1}),e(t,{size:"",xl:"",outline:"",style:{color:"goldenrod",height:"150px"}},{default:n(()=>[e(o,{name:"warning",color:"warning",size:"4rem"})]),_:1}),e(t,{size:"",xl:"",outline:"",style:{color:"goldenrod",height:"150px"}},{default:n(()=>[e(o,{name:"warning",color:"warning",size:"4rem"})]),_:1}),e(t,{size:"",xl:"",outline:"",style:{color:"goldenrod",height:"150px"}},{default:n(()=>[e(o,{name:"warning",color:"warning",size:"4rem"})]),_:1}),e(t,{size:"",xl:"",outline:"",style:{color:"goldenrod",height:"150px"}},{default:n(()=>[e(o,{name:"warning",color:"warning",size:"4rem"})]),_:1})]),_:1}),l("div",D,[e(V)]),l("div",K,[e(W)])]),_:1}))}});export{ne as default};
