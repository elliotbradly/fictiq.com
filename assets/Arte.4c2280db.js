import{a as l}from"./useQuery.6ffe982a.js";import{_,d as h,o as s,W as t,t as p,J as r,X as u,a1 as y,f,a2 as m,Z as v,$ as k}from"./index.f240bff0.js";import"./utils.0aa153c5.js";const g=async()=>await fetch("https://jsonplaceholder.typicode.com/posts").then(e=>e.json()),$=h({name:"PostsList",props:{isVisited:{type:Function,required:!0}},emits:["setPostId"],setup(){const{isPending:e,isError:a,isFetching:n,data:i,error:d,refetch:c}=l({queryKey:["posts"],queryFn:g});return{isPending:e,isError:a,isFetching:n,data:i,error:d,refetch:c}}}),I=e=>(v("data-v-751e4894"),e=e(),k(),e),P=I(()=>r("h1",null,"Posts",-1)),C={key:0},F={key:1},S={key:2},V=["onClick"];function q(e,a,n,i,d,c){return s(),t(u,null,[P,e.isPending?(s(),t("div",C,"Loading...")):e.isError?(s(),t("div",F,"An error has occurred: "+p(e.error),1)):e.data?(s(),t("div",S,[r("ul",null,[(s(!0),t(u,null,y(e.data,o=>(s(),t("li",{key:o.id},[r("a",{onClick:A=>e.$emit("setPostId",o.id),href:"#",class:m({visited:e.isVisited(o.id)})},p(o.title),11,V)]))),128))])])):f("",!0)],64)}var j=_($,[["render",q],["__scopeId","data-v-751e4894"]]);export{j as default};
