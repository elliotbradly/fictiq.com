var A=(a,t,s)=>{if(!t.has(a))throw TypeError("Cannot "+s)};var o=(a,t,s)=>(A(a,t,"read from private field"),s?s.call(a):t.get(a)),m=(a,t,s)=>{if(t.has(a))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(a):t.set(a,s)},f=(a,t,s,e)=>(A(a,t,"write to private field"),e?e.call(a,s):t.set(a,s),s);var b=(a,t,s)=>(A(a,t,"access private method"),s);import{Q as F}from"./QBtn.29328150.js";import{u as k,a as D}from"./useQuery.743932ee.js";import{g as K}from"./mutation.2e9067cd.js";import{S as Q,v as T,k as N,a as j,w as B,x as V,l as G}from"./utils.d4b28d11.js";import{c as H,C as J,B as M,R as L,S as P,U as W,v as q,q as $,d as X,V as z,l as Y,I as Z,D as tt,o as S,W as w,J as C,e as st,u as E,t as I,f as et,X as at}from"./index.a1b1c6a6.js";import{M as ot,R as nt,W as it,S as rt,A as ut}from"./container.action.6541de47.js";import"./use-router-link.c464c440.js";import"./render.89aa6c86.js";var p,l,r,d,g,x,O,R,U,ct=(U=class extends Q{constructor(t,s){super();m(this,g);m(this,O);m(this,p,void 0);m(this,l,void 0);m(this,r,void 0);m(this,d,void 0);f(this,l,void 0),f(this,p,t),this.setOptions(s),this.bindMethods(),b(this,g,x).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var e;const s=this.options;this.options=o(this,p).defaultMutationOptions(t),T(s,this.options)||o(this,p).getMutationCache().notify({type:"observerOptionsUpdated",mutation:o(this,r),observer:this}),(e=o(this,r))==null||e.setOptions(this.options),(s==null?void 0:s.mutationKey)&&this.options.mutationKey&&N(s.mutationKey)!==N(this.options.mutationKey)&&this.reset()}onUnsubscribe(){var t;this.hasListeners()||(t=o(this,r))==null||t.removeObserver(this)}onMutationUpdate(t){b(this,g,x).call(this),b(this,O,R).call(this,t)}getCurrentResult(){return o(this,l)}reset(){var t;(t=o(this,r))==null||t.removeObserver(this),f(this,r,void 0),b(this,g,x).call(this),b(this,O,R).call(this)}mutate(t,s){var e;return f(this,d,s),(e=o(this,r))==null||e.removeObserver(this),f(this,r,o(this,p).getMutationCache().build(o(this,p),this.options)),o(this,r).addObserver(this),o(this,r).execute(t)}},p=new WeakMap,l=new WeakMap,r=new WeakMap,d=new WeakMap,g=new WeakSet,x=function(){var s,e;const t=(e=(s=o(this,r))==null?void 0:s.state)!=null?e:K();f(this,l,{...t,isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset})},O=new WeakSet,R=function(t){j.batch(()=>{var s,e,c,n,y,_,v,u;if(o(this,d)&&this.hasListeners()){const i=o(this,l).variables,h=o(this,l).context;(t==null?void 0:t.type)==="success"?((e=(s=o(this,d)).onSuccess)==null||e.call(s,t.data,i,h),(n=(c=o(this,d)).onSettled)==null||n.call(c,t.data,null,i,h)):(t==null?void 0:t.type)==="error"&&((_=(y=o(this,d)).onError)==null||_.call(y,t.error,i,h),(u=(v=o(this,d)).onSettled)==null||u.call(v,void 0,t.error,i,h))}this.listeners.forEach(i=>{i(o(this,l))})})},U);function ht(a,t){const s=t||k(),e=H(()=>s.defaultMutationOptions(G(a))),c=new ct(s,e.value),n=J(c.getCurrentResult()),y=c.subscribe(u=>{B(n,u)}),_=(u,i)=>{c.mutate(u,i).catch(()=>{})};M(e,()=>{c.setOptions(e.value)}),W(()=>{y()});const v=L(P(n));return M(()=>n.error,u=>{if(u&&V(e.value.throwOnError,[u]))throw u}),{...v,mutate:_,mutateAsync:n.mutate,reset:n.reset}}const lt=async a=>{var n;const t=$(),s=q("SHADE");var e=await s.hunt(ot,{idx:"vsg00",src:"indexCanvas",dat:{height:480}});e=await s.hunt(nt,{idx:"vsg00"}),e=await s.hunt(it,{idx:"can00",src:"vsg00"});var c=e.canBit.dat.bit;return e=await s.hunt(rt,{idx:"fce-can-00",src:"vsg00"}),e=await s.hunt(ut,{idx:"fce-can-00",dat:{bit:c}}),(n=t==null?void 0:t.proxy)==null||n.$forceUpdate(),a},dt=async a=>(console.log("sampleFunc:: ",a),q("SHADE"),a),pt={class:"q-pa-md q-gutter-sm"},mt={class:"full-height row wrap justify-start items-start content-start"},ft={key:0},yt={key:1},vt={key:2},bt=C("canvas",{id:"indexCanvas"},null,-1),gt=X({name:"GamePlay"}),Rt=Object.assign(gt,{setup(a){const t=async i=>await fetch("readNow/").then(h=>h.json()),s=async i=>await fetch("cool/").then(h=>h.json()),{isPending:e,isError:c,data:n,error:y}=D({queryKey:["dat"],queryFn:t,refetchInterval:1111});var v=D({queryFn:s,refetchInterval:1111}).data;const u=ht({mutationFn:t,onSuccess:()=>{queryClient.invalidateQueries({queryKey:["dat"]})}});return M(v,(i,h)=>{console.log(`Count changed from ${h} to ${i}`)}),z(()=>{console.log("DATA is: "+JSON.stringify(n))}),Y(async i=>{setInterval(()=>{console.log("mutate"),u.mutate({})},1111),lt("on")}),Z(async()=>{dt("on")}),tt(async()=>{}),(i,h)=>(S(),w(at,null,[C("div",pt,[st(F,{style:{background:"#FF0080",color:"white"},label:"Fuchsia"})]),C("div",mt,[E(e)?(S(),w("span",ft,"Loading...")):E(c)?(S(),w("span",yt,"Error: "+I(E(y).message),1)):E(n)?(S(),w("ul",vt,[C("pre",null,I(JSON.stringify(E(n),null,2)),1)])):et("",!0),bt])],64))}});export{Rt as default};
