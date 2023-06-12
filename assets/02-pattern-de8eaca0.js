import{d as v,i as l,o as h,a as A,b as p,c as m,e as s,j as u,g as E,h as _}from"./index-0e1dab58.js";const f={class:"container mx-auto overflow-hidden"},b={role:"main",class:""},x=u('<div class="divider"><article class="prose lg:prose-xl font-mono"><h3>pattern</h3></article></div><canvas id="indexCanvas"></canvas><div class="divider"><article class="prose lg:prose-xl font-mono"><p>select the pattern for your protagonist </p></article></div><br><canvas id="title1Canvas"></canvas>',5),C=s("article",{class:"prose lg:prose-xl font-mono"},[s("h4",{class:"uppercase"}," pattern:00301.red "),s("p",{class:"mx-20"}," The story mode difficulty setting requires minimal micromanagement it more easily forgives mistakes in combat Enemies receive a penalty to most stats Companion Combat AI is enabled by default and party members do not receive wounds until they are knocked the faith out ")],-1),w=s("br",null,null,-1),V=s("canvas",{id:"title2Canvas"},null,-1),I=s("article",{class:"prose lg:prose-xl font-mono"},[s("h4",{class:"uppercase"}," pattern:00321.blue "),s("p",{class:"mx-20"}," Normal difficulty requires strategy and efficiency forgives a few mistakes in combat companion combat AI is enabled by default ")],-1),y=s("canvas",{id:"title3Canvas"},null,-1),R=s("article",{class:"prose lg:prose-xl font-mono"},[s("h4",{class:"uppercase"}," pattern:03223.yello "),s("p",{class:"mx-20"}," Hard difficulty is suited for veteran players of role playing games who are looking for a challenge survival requires micromanagement and optimization of stats through artwork, technology, and talents Enemy AI is more efficient and uses abilities more frequently ")],-1),N=s("br",null,null,-1),T=s("canvas",{id:"title4Canvas"},null,-1),S=u('<article class="prose lg:prose-xl font-mono"><h4 class="uppercase"> pattern:04214.purple </h4><p class="mx-20"> the path of the sacrificed is where most of the enemies receive a bonus to most stats have the most efficient ai, and will very frequently use abilities party member take more Wounds during combat and when being knocked the faith out </p></article><br><div class="flex justify-center w-screen"><progress class="progress w-56"></progress></div><div class="divider"><article class="prose lg:prose-xl font-mono"><p>simulation feature production 0% complete</p></article></div><canvas id="title5Canvas"></canvas><button class="btn btn-lg btn-block btn-disabled">???</button><article class="prose lg:prose-xl font-mono"><h4 class="uppercase"> title:005 </h4><p class="mx-20"> ???? ? ???? ??? ?? ? ????? ?????? ???????? </p></article>',7),d=320,G=v({name:"IndexPage",__name:"02-pattern",setup(O){const c=E(),t=l("SHADE"),n=l("PLAY");var g,a;const o=async()=>{a=await n.hunt(n.ActShw.UPDATE_SHOW,{})};return h(async()=>{var e;a=await t.hunt(t.ActVsg.MOUNT_VISAGE,{idx:"vsg00",src:"indexCanvas",dat:{height:d}}),(e=c==null?void 0:c.proxy)==null||e.$forceUpdate();var r=async()=>{console.log("mqtt "+MQTT);var i={idx:"remote",src:"wss://gatorsocket.herokuapp.com/"};a=await n.hunt(n.ActPly.INIT_PLAY,{val:1,dat:MQTT,src:[i]}),console.log("shoooo "+JSON.stringify(a))};setTimeout(r,1777)}),A(async()=>{a=await t.hunt(t.ActVsg.REMOVE_VISAGE,{idx:"vsg00"}),a=await t.hunt(t.ActVsg.MOUNT_VISAGE,{idx:"vsg00",src:"indexCanvas",dat:{height:d}}),a=await t.hunt(t.ActVsg.READ_VISAGE,{idx:"vsg00"}),a=await t.hunt(t.ActCan.WRITE_CONTAINER,{idx:"can00",src:"vsg00"}),a=await t.hunt(t.ActCan.SURFACE_CONTAINER,{idx:"fce-can-00",src:"vsg00"}),a=await t.hunt(t.ActVsg.REMOVE_VISAGE,{idx:"vsg01"}),a=await t.hunt(t.ActVsg.MOUNT_VISAGE,{idx:"vsg01",src:"title1Canvas",dat:{height:150}}),a=await t.hunt(t.ActVsg.READ_VISAGE,{idx:"vsg01"}),a=await t.hunt(t.ActCan.WRITE_CONTAINER,{idx:"can00",src:"vsg01"}),a=await t.hunt(t.ActCan.SURFACE_CONTAINER,{idx:"fce-can-00",src:"vsg01"}),a=await t.hunt(t.ActVsg.REMOVE_VISAGE,{idx:"vsg02"}),a=await t.hunt(t.ActVsg.MOUNT_VISAGE,{idx:"vsg02",src:"title2Canvas",dat:{height:150}}),a=await t.hunt(t.ActVsg.READ_VISAGE,{idx:"vsg02"}),a=await t.hunt(t.ActCan.WRITE_CONTAINER,{idx:"can00",src:"vsg02"}),a=await t.hunt(t.ActCan.SURFACE_CONTAINER,{idx:"fce-can-00",src:"vsg02"}),a=await t.hunt(t.ActVsg.REMOVE_VISAGE,{idx:"vsg03"}),a=await t.hunt(t.ActVsg.MOUNT_VISAGE,{idx:"vsg03",src:"title3Canvas",dat:{height:150}}),a=await t.hunt(t.ActVsg.READ_VISAGE,{idx:"vsg03"}),a=await t.hunt(t.ActCan.WRITE_CONTAINER,{idx:"can00",src:"vsg03"}),a=await t.hunt(t.ActCan.SURFACE_CONTAINER,{idx:"fce-can-00",src:"vsg03"}),a=await t.hunt(t.ActVsg.REMOVE_VISAGE,{idx:"vsg04"}),a=await t.hunt(t.ActVsg.MOUNT_VISAGE,{idx:"vsg04",src:"title4Canvas",dat:{height:150}}),a=await t.hunt(t.ActVsg.READ_VISAGE,{idx:"vsg04"}),a=await t.hunt(t.ActCan.WRITE_CONTAINER,{idx:"can00",src:"vsg04"}),a=await t.hunt(t.ActCan.SURFACE_CONTAINER,{idx:"fce-can-00",src:"vsg04"}),a=await n.hunt(n.ActPly.START_PLAY,{})}),p(async()=>{document.body.style.overflow="hidden",a=await t.hunt(t.ActVsg.REMOVE_VISAGE,{idx:"vsg00"}),clearInterval(g)}),(r,e)=>(_(),m("div",f,[s("main",b,[x,s("button",{class:"btn btn-lg btn-block",onClick:e[0]||(e[0]=i=>o())},"Red"),C,w,V,s("button",{class:"btn btn-lg btn-block",onClick:e[1]||(e[1]=i=>o())},"green"),I,y,s("button",{class:"btn btn-lg btn-block",onClick:e[2]||(e[2]=i=>o())}," Yello "),R,N,T,s("button",{class:"btn btn-lg btn-block",onClick:e[3]||(e[3]=i=>o())}," purple "),S])]))}});export{G as default};
