import{u as l}from"./useQuery.fb49b2f3.js";import{_,E as h,H as s,W as t,Z as p,L as r,$ as u,a0 as y,X as m,a1 as f,N as v,O as k}from"./index.c615a197.js";import"./utils.7875f852.js";const g=async()=>await fetch("https://jsonplaceholder.typicode.com/posts").then(e=>e.json()),$=h({name:"PostsList",props:{isVisited:{type:Function,required:!0}},emits:["setPostId"],setup(){const{isPending:e,isError:a,isFetching:n,data:i,error:d,refetch:c}=l({queryKey:["posts"],queryFn:g});return{isPending:e,isError:a,isFetching:n,data:i,error:d,refetch:c}}}),I=e=>(v("data-v-751e4894"),e=e(),k(),e),P=I(()=>r("h1",null,"Posts",-1)),C={key:0},E={key:1},F={key:2},L=["onClick"];function S(e,a,n,i,d,c){return s(),t(u,null,[P,e.isPending?(s(),t("div",C,"Loading...")):e.isError?(s(),t("div",E,"An error has occurred: "+p(e.error),1)):e.data?(s(),t("div",F,[r("ul",null,[(s(!0),t(u,null,y(e.data,o=>(s(),t("li",{key:o.id},[r("a",{onClick:V=>e.$emit("setPostId",o.id),href:"#",class:f({visited:e.isVisited(o.id)})},p(o.title),11,L)]))),128))])])):m("",!0)],64)}var N=_($,[["render",S],["__scopeId","data-v-751e4894"]]);export{N as default};
