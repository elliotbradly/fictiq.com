import{d as r,aa as c,ab as i,m as u,y as d,I as m,F as p,o as _,V as l,J as y}from"./index.5c3371ed.js";import{a as f}from"./useQuery.b2350538.js";import{m as h,u as g}from"./full-screen.9b804f9c.js";import"./utils.c1d49599.js";import"./container.action.6541de47.js";import"./graphic.action.d42df614.js";const b={class:"full-height row wrap justify-start items-start content-start"},j=y("canvas",{id:"indexCanvas"},null,-1),v=[j],x=r({name:"GamePlay"}),w=Object.assign(x,{setup(B){return c(),i(),u("SHADE"),setUp(async t=>{debugger;const{isPending:e,isError:s,isFetching:a,data:o,error:n}=f({queryKey:["post",t.postId],queryFn:()=>fetcher(t.postId)});return{isPending:e,isError:s,isFetching:a,data:o,error:n}}),d(async()=>{h("on")}),m(async()=>{g("on")}),p(async()=>{}),(t,e)=>(_(),l("div",b,v))}});export{w as default};