import{d as o,g as l,i as e,o as r,a as w,b,c as g,e as u,F as v,f as s}from"./index-886ba496.js";const h=s("div",{class:"container p-2 mx-auto overflow-hidden"},[s("div",{class:"flex flex-row flex-wrap py-4"},[s("aside",{class:"w-full sm:w-1/3 md:w-1/4 px-2"},[s("div",{class:"sticky top-0 p-4 bg-white rounded-xl w-full"},[s("div",{class:"card card-compact w-96 bg-base-100 shadow-xl"},[s("div",{class:"card-body"},[s("h2",{class:"card-title"},"Shoes!"),s("p",null,"If a dog chews shoes whose shoes does he choose?"),s("div",{class:"card-actions justify-end"},[s("button",{class:"btn btn-primary"},"Buy Now")])])]),s("div",{class:"grid-rows-1"},[s("div",{class:"grid grid-rows-3 grid-flow-col gap-4"},[s("div",{class:"col-span-2 ..."},[s("div",{class:"divider"}),s("button",{class:"btn btn-warning btn-block"},"Warning"),s("button",{class:"btn btn-warning btn-block"},"Warning"),s("button",{class:"btn btn-warning btn-block"},"Warning"),s("div",{class:"divider"})]),s("div",{class:"col-span-2 ..."},"02")]),s("div",{class:"row-span-3 ..."},"01")]),s("div")])]),s("main",{role:"main",class:"w-full sm:w-2/3 md:w-3/4 pt-1 px-2"},[s("canvas",{id:"indexCanvas"})])])],-1),p=s("div",null,null,-1),d=720,A=o({name:"IndexPage"}),m=o({...A,setup(_){const n=l(),a=e("SHADE"),t=e("PLAY");var i;return r(async()=>{var c;bit=await a.hunt(a.ActVsg.MOUNT_VISAGE,{idx:"vsg00",src:"indexCanvas",dat:{height:d}}),(c=n==null?void 0:n.proxy)==null||c.$forceUpdate(),bit=await t.hunt(t.ActShw.INIT_SHOW,{}),i=setInterval(()=>{console.log("checking...")},1333)}),w(async()=>{bit=await a.hunt(a.ActVsg.REMOVE_VISAGE,{idx:"vsg00"}),bit=await a.hunt(a.ActVsg.MOUNT_VISAGE,{idx:"vsg00",src:"indexCanvas",dat:{height:d}}),bit=await a.hunt(a.ActVsg.READ_VISAGE,{idx:"vsg00"}),bit=await a.hunt(a.ActCan.WRITE_CONTAINER,{idx:"can00",src:"vsg00"}),bit=await a.hunt(a.ActCan.SURFACE_CONTAINER,{idx:"fce-can-00",src:"vsg00"}),bit=await t.hunt(t.ActPly.START_PLAY,{})}),b(async()=>{document.body.style.overflow="hidden",bit=await a.hunt(a.ActVsg.REMOVE_VISAGE,{idx:"vsg00"}),clearInterval(i)}),(c,x)=>(g(),u(v,null,[h,p],64))}});export{m as default};
