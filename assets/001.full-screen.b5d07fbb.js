import{d as r,ah as c,ai as i,m as u,y as d,Y as m,F as p,o as _,a2 as l,U as y}from"./index.5591a0bb.js";import{a as f}from"./useQuery.412595f3.js";import{m as h,u as g}from"./full-screen.64a6eed8.js";import"./utils.5df07084.js";import"./container.action.6541de47.js";import"./graphic.action.d42df614.js";const U={class:"full-height row wrap justify-start items-start content-start"},j=y("canvas",{id:"indexCanvas"},null,-1),v=[j],x=r({name:"GamePlay"}),C=Object.assign(x,{setup(B){return c(),i(),u("SHADE"),setUp(async t=>{debugger;const{isPending:e,isError:s,isFetching:a,data:o,error:n}=f({queryKey:["post",t.postId],queryFn:()=>fetcher(t.postId)});return{isPending:e,isError:s,isFetching:a,data:o,error:n}}),d(async()=>{h("on")}),m(async()=>{g("on")}),p(async()=>{}),(t,e)=>(_(),l("div",U,v))}});export{C as default};