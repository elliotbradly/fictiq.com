import{d as u,g as h,i as r,o as A,a as p,b as m,c as E,e as _,f as a,j as g}from"./index-73c762dc.js";const f={class:"container mx-auto overflow-hidden"},b={role:"main",class:""},x=g('<div class="divider"><article class="prose lg:prose-xl font-mono"><h3>pattern</h3></article></div><canvas id="indexCanvas"></canvas><div class="divider"><article class="prose lg:prose-xl font-mono"><p>select the pattern for your protagonist </p></article></div><br><canvas id="title1Canvas"></canvas>',5),C=a("article",{class:"prose lg:prose-xl font-mono"},[a("h4",{class:"uppercase"}," pattern:00301.red "),a("p",{class:"mx-20"}," The story mode difficulty setting requires minimal micromanagement it more easily forgives mistakes in combat Enemies receive a penalty to most stats Companion Combat AI is enabled by default and party members do not receive wounds until they are knocked the faith out ")],-1),w=a("br",null,null,-1),V=a("canvas",{id:"title2Canvas"},null,-1),I=a("article",{class:"prose lg:prose-xl font-mono"},[a("h4",{class:"uppercase"}," pattern:00321.blue "),a("p",{class:"mx-20"}," Normal difficulty requires strategy and efficiency forgives a few mistakes in combat companion combat AI is enabled by default ")],-1),y=a("canvas",{id:"title3Canvas"},null,-1),R=a("article",{class:"prose lg:prose-xl font-mono"},[a("h4",{class:"uppercase"}," pattern:03223.yello "),a("p",{class:"mx-20"}," Hard difficulty is suited for veteran players of role playing games who are looking for a challenge survival requires micromanagement and optimization of stats through artwork, technology, and talents Enemy AI is more efficient and uses abilities more frequently ")],-1),N=a("br",null,null,-1),T=a("canvas",{id:"title4Canvas"},null,-1),S=g('<article class="prose lg:prose-xl font-mono"><h4 class="uppercase"> pattern:04214.purple </h4><p class="mx-20"> the path of the sacrificed is where most of the enemies receive a bonus to most stats have the most efficient ai, and will very frequently use abilities party member take more Wounds during combat and when being knocked the faith out </p></article><br><div class="flex justify-center w-screen"><progress class="progress w-56"></progress></div><div class="divider"><article class="prose lg:prose-xl font-mono"><p>simulation feature production 0% complete</p></article></div><canvas id="title5Canvas"></canvas><button class="btn btn-lg btn-block btn-disabled">???</button><article class="prose lg:prose-xl font-mono"><h4 class="uppercase"> title:005 </h4><p class="mx-20"> ???? ? ???? ??? ?? ? ????? ?????? ???????? </p></article>',7),d=320,O=u({name:"IndexPage"}),M=u({...O,setup(k){const c=h(),t=r("SHADE"),n=r("PLAY");var v,s;const o=async()=>{s=await n.hunt(n.ActShw.UPDATE_SHOW,{})};return A(async()=>{var e;s=await t.hunt(t.ActVsg.MOUNT_VISAGE,{idx:"vsg00",src:"indexCanvas",dat:{height:d}}),(e=c==null?void 0:c.proxy)==null||e.$forceUpdate();var l=async()=>{console.log("mqtt "+MQTT);var i={idx:"remote",src:"wss://gatorsocket.herokuapp.com/"};s=await n.hunt(n.ActPly.INIT_PLAY,{val:1,dat:MQTT,src:[i]}),console.log("shoooo "+JSON.stringify(s))};setTimeout(l,1777)}),p(async()=>{s=await t.hunt(t.ActVsg.REMOVE_VISAGE,{idx:"vsg00"}),s=await t.hunt(t.ActVsg.MOUNT_VISAGE,{idx:"vsg00",src:"indexCanvas",dat:{height:d}}),s=await t.hunt(t.ActVsg.READ_VISAGE,{idx:"vsg00"}),s=await t.hunt(t.ActCan.WRITE_CONTAINER,{idx:"can00",src:"vsg00"}),s=await t.hunt(t.ActCan.SURFACE_CONTAINER,{idx:"fce-can-00",src:"vsg00"}),s=await t.hunt(t.ActVsg.REMOVE_VISAGE,{idx:"vsg01"}),s=await t.hunt(t.ActVsg.MOUNT_VISAGE,{idx:"vsg01",src:"title1Canvas",dat:{height:150}}),s=await t.hunt(t.ActVsg.READ_VISAGE,{idx:"vsg01"}),s=await t.hunt(t.ActCan.WRITE_CONTAINER,{idx:"can00",src:"vsg01"}),s=await t.hunt(t.ActCan.SURFACE_CONTAINER,{idx:"fce-can-00",src:"vsg01"}),s=await t.hunt(t.ActVsg.REMOVE_VISAGE,{idx:"vsg02"}),s=await t.hunt(t.ActVsg.MOUNT_VISAGE,{idx:"vsg02",src:"title2Canvas",dat:{height:150}}),s=await t.hunt(t.ActVsg.READ_VISAGE,{idx:"vsg02"}),s=await t.hunt(t.ActCan.WRITE_CONTAINER,{idx:"can00",src:"vsg02"}),s=await t.hunt(t.ActCan.SURFACE_CONTAINER,{idx:"fce-can-00",src:"vsg02"}),s=await t.hunt(t.ActVsg.REMOVE_VISAGE,{idx:"vsg03"}),s=await t.hunt(t.ActVsg.MOUNT_VISAGE,{idx:"vsg03",src:"title3Canvas",dat:{height:150}}),s=await t.hunt(t.ActVsg.READ_VISAGE,{idx:"vsg03"}),s=await t.hunt(t.ActCan.WRITE_CONTAINER,{idx:"can00",src:"vsg03"}),s=await t.hunt(t.ActCan.SURFACE_CONTAINER,{idx:"fce-can-00",src:"vsg03"}),s=await t.hunt(t.ActVsg.REMOVE_VISAGE,{idx:"vsg04"}),s=await t.hunt(t.ActVsg.MOUNT_VISAGE,{idx:"vsg04",src:"title4Canvas",dat:{height:150}}),s=await t.hunt(t.ActVsg.READ_VISAGE,{idx:"vsg04"}),s=await t.hunt(t.ActCan.WRITE_CONTAINER,{idx:"can00",src:"vsg04"}),s=await t.hunt(t.ActCan.SURFACE_CONTAINER,{idx:"fce-can-00",src:"vsg04"}),s=await n.hunt(n.ActPly.START_PLAY,{})}),m(async()=>{document.body.style.overflow="hidden",s=await t.hunt(t.ActVsg.REMOVE_VISAGE,{idx:"vsg00"}),clearInterval(v)}),(l,e)=>(E(),_("div",f,[a("main",b,[x,a("button",{class:"btn btn-lg btn-block",onClick:e[0]||(e[0]=i=>o())},"Red"),C,w,V,a("button",{class:"btn btn-lg btn-block",onClick:e[1]||(e[1]=i=>o())},"green"),I,y,a("button",{class:"btn btn-lg btn-block",onClick:e[2]||(e[2]=i=>o())}," Yello "),R,N,T,a("button",{class:"btn btn-lg btn-block",onClick:e[3]||(e[3]=i=>o())}," purple "),S])]))}});export{M as default};
