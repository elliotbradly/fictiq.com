import{d as u,i as o,o as v,a as g,b as _,c as b,e as n,f as d,t as c,F as h,j as w,g as p,h as x}from"./index-0e1dab58.js";const f={class:"container p-2 h-full overflow-hidden"},A={class:"grow flex flex-row flex-wrap py-4"},m=w('<aside class="h-full w-full sm:w-1/3 md:w-1/4 px-2"><div class="sticky top-0 p-4 bg-white rounded-xl w-full"><div class="flex flex-col h-screen"><div class="flex-grow"> &gt;find the meaning of life &gt;open doors to well being &gt;something about dunken doughnuts </div><div class=""></div><div class=""><div id="sidebar" class="divider"></div><button class="btn btn-warning btn-block">Warning</button><button class="btn btn-warning btn-block">Warning</button><button class="btn btn-warning btn-block">Warning</button><div class="divider"></div></div></div></div></aside>',1),E={role:"main",class:"w-full sm:w-2/3 md:w-3/4 pt-1 px-2"},V=n("canvas",{id:"indexCanvas"},null,-1),S={class:"prose lg:prose-xl font-mono"},I=n("br",null,null,-1),y=["innerHTML"],C=n("div",null,null,-1),l=220,k=u({name:"IndexPage",__name:"gamepad-5000",setup(T){const s=p(),t=o("SHADE"),i=o("PLAY"),a=[0,`

  



`];var r;return v(async()=>{var e;bit=await t.hunt(t.ActVsg.MOUNT_VISAGE,{idx:"vsg00",src:"indexCanvas",dat:{height:l}}),(e=s==null?void 0:s.proxy)==null||e.$forceUpdate()}),g(async()=>{bit=await t.hunt(t.ActVsg.REMOVE_VISAGE,{idx:"vsg00"}),bit=await t.hunt(t.ActVsg.MOUNT_VISAGE,{idx:"vsg00",src:"indexCanvas",dat:{height:l}}),bit=await t.hunt(t.ActVsg.READ_VISAGE,{idx:"vsg00"}),bit=await t.hunt(t.ActCan.WRITE_CONTAINER,{idx:"can00",src:"vsg00"}),bit=await t.hunt(t.ActCan.SURFACE_CONTAINER,{idx:"fce-can-00",src:"vsg00"}),bit=await i.hunt(i.ActPly.START_PLAY,{})}),_(async()=>{document.body.style.overflow="hidden",bit=await t.hunt(t.ActVsg.REMOVE_VISAGE,{idx:"vsg00"}),clearInterval(r)}),(e,N)=>(x(),b(h,null,[n("div",f,[n("div",A,[m,n("main",E,[V,n("article",S,[n("p",null,[d(" First value: "+c(a[0]),1),I]),n("div",{innerHTML:a[1]},null,8,y),d(" Second value: "+c(a[1]),1)])])])]),C],64))}});export{k as default};
