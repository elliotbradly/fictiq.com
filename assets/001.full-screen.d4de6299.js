import{E as r,ac as c,ad as u,A as i,o as d,F as m,k as p,H as _,W as l,L as f}from"./index.869e599b.js";import{u as y}from"./useQuery.f76f1619.js";import{m as h,u as g}from"./full-screen.7f930624.js";import"./utils.3969a117.js";import"./container.action.a7a7dd56.js";const E={class:"full-height row wrap justify-start items-start content-start"},j=f("canvas",{id:"indexCanvas"},null,-1),k=[j],v=r({name:"GamePlay"}),w=Object.assign(v,{setup(x){return c(),u(),i("SHADE"),setUp(async t=>{debugger;const{isPending:e,isError:s,isFetching:a,data:o,error:n}=y({queryKey:["post",t.postId],queryFn:()=>fetcher(t.postId)});return{isPending:e,isError:s,isFetching:a,data:o,error:n}}),d(async()=>{h("on")}),m(async()=>{g("on")}),p(async()=>{}),(t,e)=>(_(),l("div",E,k))}});export{w as default};