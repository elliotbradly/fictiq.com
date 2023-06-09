import{d as v,g as h,i as d,o as p,a as A,b as m,c as f,e as E,f as e,j as o}from"./index-73c762dc.js";const x={class:"container mx-auto overflow-hidden"},b={role:"main",class:""},_=o('<div class="divider"><article class="prose lg:prose-xl font-mono"><h3>black meat machine</h3></article></div><canvas id="indexCanvas"></canvas><div class="divider"><article class="prose lg:prose-xl font-mono"><p>simulation difficulty</p></article></div><br><canvas id="title1Canvas"></canvas>',5),w=o('<article class="prose lg:prose-xl font-mono"><h4 class="uppercase"> edge:01.easy </h4><p class="mx-20"> The story mode difficulty setting requires minimal micromanagement it more easily forgives mistakes in combat Enemies receive a penalty to most stats Companion Combat AI is enabled by default and party members do not receive wounds until they are knocked the faith out </p></article><br><div class="flex justify-center w-screen"><progress class="progress w-56" value="40" max="100"></progress></div><div class="divider"><article class="prose lg:prose-xl font-mono"><p>simulation feature production 40% complete</p></article></div><div class="divider"><article class="prose lg:prose-xl font-mono"><h4> last update three hours ago</h4></article></div><canvas id="title2Canvas"></canvas>',6),C=o('<article class="prose lg:prose-xl font-mono"><h4 class="uppercase"> edge:02.normal </h4><p class="mx-20"> Normal difficulty requires strategy and efficiency forgives a few mistakes in combat companion combat AI is enabled by default </p></article><div class="flex justify-center w-screen"><progress class="progress w-56" value="30" max="100"></progress></div><div class="divider"><article class="prose lg:prose-xl font-mono"><p>simulation feature production 30% complete</p></article></div><canvas id="title3Canvas"></canvas>',4),V=e("article",{class:"prose lg:prose-xl font-mono"},[e("h4",{class:"uppercase"}," edge:03.hard "),e("p",{class:"mx-20"}," Hard difficulty is suited for veteran players of role playing games who are looking for a challenge survival requires micromanagement and optimization of stats through artwork, technology, and talents Enemy AI is more efficient and uses abilities more frequently ")],-1),I=e("br",null,null,-1),y=e("canvas",{id:"title4Canvas"},null,-1),N=o('<article class="prose lg:prose-xl font-mono"><h4 class="uppercase"> edge:04.sacrificial-path </h4><p class="mx-20"> the path of the sacrificed is where most of the enemies receive a bonus to most stats have the most efficient ai, and will very frequently use abilities party member take more Wounds during combat and when being knocked the faith out </p></article><br><canvas id="title5Canvas"></canvas><button class="btn btn-lg btn-block btn-disabled">???</button><article class="prose lg:prose-xl font-mono"><h4 class="uppercase"> title:005 </h4><p class="mx-20"> ???? ? ???? ??? ?? ? ????? ?????? ???????? </p></article>',5),g=320,R=v({name:"IndexPage"}),O=v({...R,setup(S){const r=h(),t=d("SHADE"),i=d("PLAY");var u,a;const c=async()=>{a=await i.hunt(i.ActShw.OPEN_SHOW,{})};return p(async()=>{var s;a=await t.hunt(t.ActVsg.MOUNT_VISAGE,{idx:"vsg00",src:"indexCanvas",dat:{height:g}}),(s=r==null?void 0:r.proxy)==null||s.$forceUpdate();var l=async()=>{console.log("mqtt "+MQTT);var n={idx:"remote",src:"wss://gatorsocket.herokuapp.com/"};a=await i.hunt(i.ActPly.INIT_PLAY,{val:1,dat:MQTT,src:[n]}),console.log("shoooo "+JSON.stringify(a))};setTimeout(l,1777)}),A(async()=>{a=await t.hunt(t.ActVsg.REMOVE_VISAGE,{idx:"vsg00"}),a=await t.hunt(t.ActVsg.MOUNT_VISAGE,{idx:"vsg00",src:"indexCanvas",dat:{height:g}}),a=await t.hunt(t.ActVsg.READ_VISAGE,{idx:"vsg00"}),a=await t.hunt(t.ActCan.WRITE_CONTAINER,{idx:"can00",src:"vsg00"}),a=await t.hunt(t.ActCan.SURFACE_CONTAINER,{idx:"fce-can-00",src:"vsg00"}),a=await t.hunt(t.ActVsg.REMOVE_VISAGE,{idx:"vsg01"}),a=await t.hunt(t.ActVsg.MOUNT_VISAGE,{idx:"vsg01",src:"title1Canvas",dat:{height:150}}),a=await t.hunt(t.ActVsg.READ_VISAGE,{idx:"vsg01"}),a=await t.hunt(t.ActCan.WRITE_CONTAINER,{idx:"can00",src:"vsg01"}),a=await t.hunt(t.ActCan.SURFACE_CONTAINER,{idx:"fce-can-00",src:"vsg01"}),a=await t.hunt(t.ActVsg.REMOVE_VISAGE,{idx:"vsg02"}),a=await t.hunt(t.ActVsg.MOUNT_VISAGE,{idx:"vsg02",src:"title2Canvas",dat:{height:150}}),a=await t.hunt(t.ActVsg.READ_VISAGE,{idx:"vsg02"}),a=await t.hunt(t.ActCan.WRITE_CONTAINER,{idx:"can00",src:"vsg02"}),a=await t.hunt(t.ActCan.SURFACE_CONTAINER,{idx:"fce-can-00",src:"vsg02"}),a=await t.hunt(t.ActVsg.REMOVE_VISAGE,{idx:"vsg03"}),a=await t.hunt(t.ActVsg.MOUNT_VISAGE,{idx:"vsg03",src:"title3Canvas",dat:{height:150}}),a=await t.hunt(t.ActVsg.READ_VISAGE,{idx:"vsg03"}),a=await t.hunt(t.ActCan.WRITE_CONTAINER,{idx:"can00",src:"vsg03"}),a=await t.hunt(t.ActCan.SURFACE_CONTAINER,{idx:"fce-can-00",src:"vsg03"}),a=await t.hunt(t.ActVsg.REMOVE_VISAGE,{idx:"vsg04"}),a=await t.hunt(t.ActVsg.MOUNT_VISAGE,{idx:"vsg04",src:"title4Canvas",dat:{height:150}}),a=await t.hunt(t.ActVsg.READ_VISAGE,{idx:"vsg04"}),a=await t.hunt(t.ActCan.WRITE_CONTAINER,{idx:"can00",src:"vsg04"}),a=await t.hunt(t.ActCan.SURFACE_CONTAINER,{idx:"fce-can-00",src:"vsg04"}),a=await i.hunt(i.ActPly.START_PLAY,{})}),m(async()=>{document.body.style.overflow="hidden",a=await t.hunt(t.ActVsg.REMOVE_VISAGE,{idx:"vsg00"}),clearInterval(u)}),(l,s)=>(f(),E("div",x,[e("main",b,[_,e("button",{class:"btn btn-lg btn-block",onClick:s[0]||(s[0]=n=>c())},"EASY"),w,e("button",{class:"btn btn-lg btn-block",onClick:s[1]||(s[1]=n=>c())},"NORMAL"),C,e("button",{class:"btn btn-lg btn-block",onClick:s[2]||(s[2]=n=>c())}," Hard "),V,I,y,e("button",{class:"btn btn-lg btn-block",onClick:s[3]||(s[3]=n=>c())},"sacrificial path"),N])]))}});export{O as default};
