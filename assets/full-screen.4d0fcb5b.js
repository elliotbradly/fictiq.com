import{M as d,a as r,R as h,W as u,S as x,A as s}from"./container.action.6541de47.js";import{W as c}from"./graphic.action.d42df614.js";import{v as o,q as E}from"./index.742df33c.js";const p=async n=>{var i;console.log("sampleFunc:: ",n);const a=E();return await o("SHADE").hunt(d,{idx:"vsg00",src:"indexCanvas",dat:{}}),(i=a==null?void 0:a.proxy)==null||i.$forceUpdate(),n},w=async n=>{console.log("sampleFunc:: ",n);const a=o("SHADE");var t=await a.hunt(r,{idx:"vsg00"});t=await a.hunt(d,{idx:"vsg00",src:"indexCanvas",dat:{}}),t=await a.hunt(h,{idx:"vsg00"}),t=await a.hunt(u,{idx:"can00",src:"vsg00"});var i=t.canBit.dat.bit;return t=await a.hunt(x,{idx:"fce-can-00",src:"vsg00"}),t=await a.hunt(s,{idx:"fce-can-00",dat:{bit:i}}),t=await a.hunt(c,{idx:"gph00",dat:{h:100,w:40,x:40,y:40}}),t=await a.hunt(s,{idx:"can00",dat:{bit:t.gphBit.dat.bit}}),t=await a.hunt(c,{idx:"gph01",dat:{h:100,w:40,x:40,y:40}}),t=await a.hunt(s,{idx:"can00",dat:{bit:t.gphBit.dat.bit}}),n};export{p as m,w as u};
