import{M as o,W as h,S as u,A as i}from"./container.action.6541de47.js";import{W as c}from"./graphic.action.d42df614.js";import{v as s,q as w}from"./index.2fd8faee.js";const d="[Write action] Write Text",b="[Write action] Write Sprite",m=async n=>{var e;console.log("sampleFunc:: ",n);const x=w(),a=s("SHADE");var t=await a.hunt(o,{idx:"vsg00",src:"indexCanvas",dat:{height:320}});(e=x==null?void 0:x.proxy)==null||e.$forceUpdate(),window.addEventListener("resize",function(p){this.setTimeout(()=>{location.reload()},333)},!0),t=await a.hunt(h,{idx:"can00",src:"vsg00"});var r=t.canBit.dat.bit;return t=await a.hunt(u,{idx:"fce-can-00",src:"vsg00"}),t=await a.hunt(i,{idx:"fce-can-00",dat:{bit:r}}),t=await a.hunt(d,{idx:"txt00",dat:{txt:"text 00"}}),t=await a.hunt(i,{idx:"can00",dat:{bit:t.txtBit.dat.bit}}),t=await a.hunt(d,{idx:"txt01",dat:{txt:"text 01",y:15}}),t=await a.hunt(i,{idx:"can00",dat:{bit:t.txtBit.dat.bit}}),t=await a.hunt(d,{idx:"txt02",dat:{txt:"text 02",y:30}}),t=await a.hunt(i,{idx:"can00",dat:{bit:t.txtBit.dat.bit}}),t=await a.hunt(d,{idx:"txt03",dat:{txt:"text 03",y:45}}),t=await a.hunt(i,{idx:"can00",dat:{bit:t.txtBit.dat.bit}}),t=await a.hunt(b,{idx:"spr00",dat:{src:"./img/000.png",x:0,y:0}}),t=await a.hunt(i,{idx:"can00",dat:{bit:t.sprBit.dat.bit}}),t=await a.hunt(c,{idx:"gph00",dat:{h:100,w:40,x:40,y:40}}),t=await a.hunt(i,{idx:"can00",dat:{bit:t.gphBit.dat.bit}}),t=await a.hunt(c,{idx:"gph01",dat:{h:100,w:40,x:40,y:40}}),t=await a.hunt(i,{idx:"can00",dat:{bit:t.gphBit.dat.bit}}),n},A=async n=>(console.log("sampleFunc:: ",n),s("SHADE"),n);export{m,A as u};
