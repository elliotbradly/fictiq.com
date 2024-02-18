import{a as l}from"./useQuery.656b1ab9.js";import{_,d as h,o as s,a3 as t,t as p,W as r,a4 as u,a9 as y,j as m,aa as f,a6 as v,a7 as k}from"./index.40d8058b.js";import"./utils.2a1a26af.js";const g=async()=>await fetch("https://jsonplaceholder.typicode.com/posts").then(e=>e.json()),I=h({name:"PostsList",props:{isVisited:{type:Function,required:!0}},emits:["setPostId"],setup(){const{isPending:e,isError:a,isFetching:n,data:i,error:d,refetch:c}=l({queryKey:["posts"],queryFn:g});return{isPending:e,isError:a,isFetching:n,data:i,error:d,refetch:c}}}),P=e=>(v("data-v-751e4894"),e=e(),k(),e),$=P(()=>r("h1",null,"Posts",-1)),C={key:0},F={key:1},S={key:2},V=["onClick"];function j(e,a,n,i,d,c){return s(),t(u,null,[$,e.isPending?(s(),t("div",C,"Loading...")):e.isError?(s(),t("div",F,"An error has occurred: "+p(e.error),1)):e.data?(s(),t("div",S,[r("ul",null,[(s(!0),t(u,null,y(e.data,o=>(s(),t("li",{key:o.id},[r("a",{onClick:q=>e.$emit("setPostId",o.id),href:"#",class:f({visited:e.isVisited(o.id)})},p(o.title),11,V)]))),128))])])):m("",!0)],64)}var L=_(I,[["render",j],["__scopeId","data-v-751e4894"]]);export{L as default};