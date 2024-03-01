var x=(s,t,e)=>{if(!t.has(s))throw TypeError("Cannot "+e)};var i=(s,t,e)=>(x(s,t,"read from private field"),e?e.call(s):t.get(s)),l=(s,t,e)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,e)},h=(s,t,e,a)=>(x(s,t,"write to private field"),a?a.call(s,e):t.set(s,e),e);var c=(s,t,e)=>(x(s,t,"access private method"),e);import{u as z,s as B,a as H,c as J,b as K}from"./utils.8ff65a68.js";var p,U,L=(U=class{constructor(){l(this,p,void 0)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),z(this.gcTime)&&h(this,p,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(s){this.gcTime=Math.max(this.gcTime||0,s!=null?s:B?1/0:5*60*1e3)}clearGcTimeout(){i(this,p)&&(clearTimeout(i(this,p)),h(this,p,void 0))}},p=new WeakMap,U),r,m,n,f,u,d,V,Y=(V=class extends L{constructor(t){super();l(this,u);l(this,r,void 0);l(this,m,void 0);l(this,n,void 0);l(this,f,void 0);this.mutationId=t.mutationId,h(this,m,t.defaultOptions),h(this,n,t.mutationCache),h(this,r,[]),this.state=t.state||Q(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...i(this,m),...t},this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){i(this,r).includes(t)||(i(this,r).push(t),this.clearGcTimeout(),i(this,n).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){h(this,r,i(this,r).filter(e=>e!==t)),this.scheduleGc(),i(this,n).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){i(this,r).length||(this.state.status==="pending"?this.scheduleGc():i(this,n).remove(this))}continue(){var t,e;return(e=(t=i(this,f))==null?void 0:t.continue())!=null?e:this.execute(this.state.variables)}async execute(t){var g,v,w,M,R,T,C,P,S,G,O,F,D,E,b,k,A,I,j,N;const e=()=>{var o;return h(this,f,J({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(y,q)=>{c(this,u,d).call(this,{type:"failed",failureCount:y,error:q})},onPause:()=>{c(this,u,d).call(this,{type:"pause"})},onContinue:()=>{c(this,u,d).call(this,{type:"continue"})},retry:(o=this.options.retry)!=null?o:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode})),i(this,f).promise},a=this.state.status==="pending";try{if(!a){c(this,u,d).call(this,{type:"pending",variables:t}),await((v=(g=i(this,n).config).onMutate)==null?void 0:v.call(g,t,this));const y=await((M=(w=this.options).onMutate)==null?void 0:M.call(w,t));y!==this.state.context&&c(this,u,d).call(this,{type:"pending",context:y,variables:t})}const o=await e();return await((T=(R=i(this,n).config).onSuccess)==null?void 0:T.call(R,o,t,this.state.context,this)),await((P=(C=this.options).onSuccess)==null?void 0:P.call(C,o,t,this.state.context)),await((G=(S=i(this,n).config).onSettled)==null?void 0:G.call(S,o,null,this.state.variables,this.state.context,this)),await((F=(O=this.options).onSettled)==null?void 0:F.call(O,o,null,t,this.state.context)),c(this,u,d).call(this,{type:"success",data:o}),o}catch(o){try{throw await((E=(D=i(this,n).config).onError)==null?void 0:E.call(D,o,t,this.state.context,this)),await((k=(b=this.options).onError)==null?void 0:k.call(b,o,t,this.state.context)),await((I=(A=i(this,n).config).onSettled)==null?void 0:I.call(A,void 0,o,this.state.variables,this.state.context,this)),await((N=(j=this.options).onSettled)==null?void 0:N.call(j,void 0,o,t,this.state.context)),o}finally{c(this,u,d).call(this,{type:"error",error:o})}}}},r=new WeakMap,m=new WeakMap,n=new WeakMap,f=new WeakMap,u=new WeakSet,d=function(t){const e=a=>{switch(t.type){case"failed":return{...a,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...a,isPaused:!0};case"continue":return{...a,isPaused:!1};case"pending":return{...a,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!K(this.options.networkMode),status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...a,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...a,data:void 0,error:t.error,failureCount:a.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=e(this.state),H.batch(()=>{i(this,r).forEach(a=>{a.onMutationUpdate(t)}),i(this,n).notify({mutation:this,type:"updated",action:t})})},V);function Q(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}export{Y as M,L as R,Q as g};
