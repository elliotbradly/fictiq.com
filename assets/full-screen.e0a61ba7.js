import{M as d,R as o,a as e,W as h,S as u,A as s}from"./container.action.a7a7dd56.js";import{A as r,g as x}from"./index.fcab934f.js";const c="[Write action] Write Graphic",g=async i=>{var n;console.log("sampleFunc:: ",i);const t=x();return await r("SHADE").hunt(d,{idx:"vsg00",src:"indexCanvas",dat:{}}),(n=t==null?void 0:t.proxy)==null||n.$forceUpdate(),i},p=async i=>{console.log("sampleFunc:: ",i);const t=r("SHADE");var a=await t.hunt(o,{idx:"vsg00"});a=await t.hunt(d,{idx:"vsg00",src:"indexCanvas",dat:{}}),a=await t.hunt(e,{idx:"vsg00"}),a=await t.hunt(h,{idx:"can00",src:"vsg00"});var n=a.canBit.dat.bit;return a=await t.hunt(u,{idx:"fce-can-00",src:"vsg00"}),a=await t.hunt(s,{idx:"fce-can-00",dat:{bit:n}}),a=await t.hunt(c,{idx:"gph00",dat:{h:100,w:40,x:40,y:40}}),a=await t.hunt(s,{idx:"can00",dat:{bit:a.gphBit.dat.bit}}),a=await t.hunt(c,{idx:"gph01",dat:{h:100,w:40,x:40,y:40}}),a=await t.hunt(s,{idx:"can00",dat:{bit:a.gphBit.dat.bit}}),i};export{g as m,p as u};
