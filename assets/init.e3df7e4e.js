var dt=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var r=(e,t,s)=>(dt(e,t,"read from private field"),s?s.call(e):t.get(e)),c=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},n=(e,t,s,i)=>(dt(e,t,"write to private field"),i?i.call(e,s):t.set(e,s),s),ct=(e,t,s,i)=>({set _(a){n(e,t,a,s)},get _(){return r(e,t,i)}}),f=(e,t,s)=>(dt(e,t,"access private method"),s);import{r as Kt,b as It}from"./index.e3ed7549.js";import{i as Ht,a as wt,r as xt,n as A,t as kt,c as At,b as v,d as ft,e as St,S as qt,h as Et,m as yt,f as pt,g as Gt,j as jt,k as mt,o as gt,l as $t,p as vt,q as Qt,s as u,u as _t}from"./utils.0a424814.js";var L,Dt,Rt=(Dt=class{constructor(){c(this,L,void 0)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Ht(this.gcTime)&&n(this,L,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e!=null?e:wt?1/0:5*60*1e3)}clearGcTimeout(){r(this,L)&&(clearTimeout(r(this,L)),n(this,L,void 0))}},L=new WeakMap,Dt),J,X,D,k,M,m,nt,W,Y,lt,S,H,Mt,Nt=(Mt=class extends Rt{constructor(t){super();c(this,Y);c(this,S);c(this,J,void 0);c(this,X,void 0);c(this,D,void 0);c(this,k,void 0);c(this,M,void 0);c(this,m,void 0);c(this,nt,void 0);c(this,W,void 0);n(this,W,!1),n(this,nt,t.defaultOptions),f(this,Y,lt).call(this,t.options),n(this,m,[]),n(this,D,t.cache),this.queryKey=t.queryKey,this.queryHash=t.queryHash,n(this,J,t.state||Bt(this.options)),this.state=r(this,J),this.scheduleGc()}get meta(){return this.options.meta}optionalRemove(){!r(this,m).length&&this.state.fetchStatus==="idle"&&r(this,D).remove(this)}setData(t,s){const i=xt(this.state.data,t,this.options);return f(this,S,H).call(this,{data:i,type:"success",dataUpdatedAt:s==null?void 0:s.updatedAt,manual:s==null?void 0:s.manual}),i}setState(t,s){f(this,S,H).call(this,{type:"setState",state:t,setStateOptions:s})}cancel(t){var i;const s=r(this,k);return(i=r(this,M))==null||i.cancel(t),s?s.then(A).catch(A):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(r(this,J))}isActive(){return r(this,m).some(t=>t.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||r(this,m).some(t=>t.getCurrentResult().isStale)}isStaleByTime(t=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!kt(this.state.dataUpdatedAt,t)}onFocus(){var s;const t=r(this,m).find(i=>i.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(s=r(this,M))==null||s.continue()}onOnline(){var s;const t=r(this,m).find(i=>i.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(s=r(this,M))==null||s.continue()}addObserver(t){r(this,m).includes(t)||(r(this,m).push(t),this.clearGcTimeout(),r(this,D).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){r(this,m).includes(t)&&(n(this,m,r(this,m).filter(s=>s!==t)),r(this,m).length||(r(this,M)&&(r(this,W)?r(this,M).cancel({revert:!0}):r(this,M).cancelRetry()),this.scheduleGc()),r(this,D).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return r(this,m).length}invalidate(){this.state.isInvalidated||f(this,S,H).call(this,{type:"invalidate"})}fetch(t,s){var K,_,N,I;if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&(s==null?void 0:s.cancelRefetch))this.cancel({silent:!0});else if(r(this,k))return(K=r(this,M))==null||K.continueRetry(),r(this,k)}if(t&&f(this,Y,lt).call(this,t),!this.options.queryFn){const l=r(this,m).find(g=>g.options.queryFn);l&&f(this,Y,lt).call(this,l.options)}const i=new AbortController,a={queryKey:this.queryKey,meta:this.meta},h=l=>{Object.defineProperty(l,"signal",{enumerable:!0,get:()=>(n(this,W,!0),i.signal)})};h(a);const o=()=>this.options.queryFn?(n(this,W,!1),this.options.persister?this.options.persister(this.options.queryFn,a,this):this.options.queryFn(a)):Promise.reject(new Error(`Missing queryFn: '${this.options.queryHash}'`)),d={fetchOptions:s,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:o};h(d),(_=this.options.behavior)==null||_.onFetch(d,this),n(this,X,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((N=d.fetchOptions)==null?void 0:N.meta))&&f(this,S,H).call(this,{type:"fetch",meta:(I=d.fetchOptions)==null?void 0:I.meta});const q=l=>{var g,F,O,b;ft(l)&&l.silent||f(this,S,H).call(this,{type:"error",error:l}),ft(l)||((F=(g=r(this,D).config).onError)==null||F.call(g,l,this),(b=(O=r(this,D).config).onSettled)==null||b.call(O,this.state.data,l,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return n(this,M,At({fn:d.fetchFn,abort:i.abort.bind(i),onSuccess:l=>{var g,F,O,b;if(typeof l=="undefined"){q(new Error(`${this.queryHash} data is undefined`));return}this.setData(l),(F=(g=r(this,D).config).onSuccess)==null||F.call(g,l,this),(b=(O=r(this,D).config).onSettled)==null||b.call(O,l,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:q,onFail:(l,g)=>{f(this,S,H).call(this,{type:"failed",failureCount:l,error:g})},onPause:()=>{f(this,S,H).call(this,{type:"pause"})},onContinue:()=>{f(this,S,H).call(this,{type:"continue"})},retry:d.options.retry,retryDelay:d.options.retryDelay,networkMode:d.options.networkMode})),n(this,k,r(this,M).promise),r(this,k)}},J=new WeakMap,X=new WeakMap,D=new WeakMap,k=new WeakMap,M=new WeakMap,m=new WeakMap,nt=new WeakMap,W=new WeakMap,Y=new WeakSet,lt=function(t){this.options={...r(this,nt),...t},this.updateGcTime(this.options.gcTime)},S=new WeakSet,H=function(t){const s=i=>{var a,h;switch(t.type){case"failed":return{...i,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:(a=t.meta)!=null?a:null,fetchStatus:St(this.options.networkMode)?"fetching":"paused",...!i.dataUpdatedAt&&{error:null,status:"pending"}};case"success":return{...i,data:t.data,dataUpdateCount:i.dataUpdateCount+1,dataUpdatedAt:(h=t.dataUpdatedAt)!=null?h:Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const o=t.error;return ft(o)&&o.revert&&r(this,X)?{...r(this,X),fetchStatus:"idle"}:{...i,error:o,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:o,fetchStatus:"idle",status:"error"};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...t.state}}};this.state=s(this.state),v.batch(()=>{r(this,m).forEach(i=>{i.onQueryUpdate()}),r(this,D).notify({query:this,type:"updated",action:t})})},Mt);function Bt(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,s=typeof t!="undefined",i=s?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:s?i!=null?i:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"pending",fetchStatus:"idle"}}var R,Pt,Tt=(Pt=class extends qt{constructor(t={}){super();c(this,R,void 0);this.config=t,n(this,R,new Map)}build(t,s,i){var d;const a=s.queryKey,h=(d=s.queryHash)!=null?d:Et(a,s);let o=this.get(h);return o||(o=new Nt({cache:this,queryKey:a,queryHash:h,options:t.defaultQueryOptions(s),state:i,defaultOptions:t.getQueryDefaults(a)}),this.add(o)),o}add(t){r(this,R).has(t.queryHash)||(r(this,R).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const s=r(this,R).get(t.queryHash);s&&(t.destroy(),s===t&&r(this,R).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){v.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return r(this,R).get(t)}getAll(){return[...r(this,R).values()]}find(t){const s={exact:!0,...t};return this.getAll().find(i=>yt(s,i))}findAll(t={}){const s=this.getAll();return Object.keys(t).length>0?s.filter(i=>yt(t,i)):s}notify(t){v.batch(()=>{this.listeners.forEach(s=>{s(t)})})}onFocus(){v.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){v.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},R=new WeakMap,Pt),T,ut,C,Z,U,x,Ft,Vt=(Ft=class extends Rt{constructor(t){super();c(this,U);c(this,T,void 0);c(this,ut,void 0);c(this,C,void 0);c(this,Z,void 0);this.mutationId=t.mutationId,n(this,ut,t.defaultOptions),n(this,C,t.mutationCache),n(this,T,[]),this.state=t.state||Lt(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...r(this,ut),...t},this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){r(this,T).includes(t)||(r(this,T).push(t),this.clearGcTimeout(),r(this,C).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){n(this,T,r(this,T).filter(s=>s!==t)),this.scheduleGc(),r(this,C).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){r(this,T).length||(this.state.status==="pending"?this.scheduleGc():r(this,C).remove(this))}continue(){var t,s;return(s=(t=r(this,Z))==null?void 0:t.continue())!=null?s:this.execute(this.state.variables)}async execute(t){var a,h,o,d,q,K,_,N,I,l,g,F,O,b,rt,at,Q,w,E,B;const s=()=>{var p;return n(this,Z,At({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(V,ot)=>{f(this,U,x).call(this,{type:"failed",failureCount:V,error:ot})},onPause:()=>{f(this,U,x).call(this,{type:"pause"})},onContinue:()=>{f(this,U,x).call(this,{type:"continue"})},retry:(p=this.options.retry)!=null?p:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode})),r(this,Z).promise},i=this.state.status==="pending";try{if(!i){f(this,U,x).call(this,{type:"pending",variables:t}),await((h=(a=r(this,C).config).onMutate)==null?void 0:h.call(a,t,this));const V=await((d=(o=this.options).onMutate)==null?void 0:d.call(o,t));V!==this.state.context&&f(this,U,x).call(this,{type:"pending",context:V,variables:t})}const p=await s();return await((K=(q=r(this,C).config).onSuccess)==null?void 0:K.call(q,p,t,this.state.context,this)),await((N=(_=this.options).onSuccess)==null?void 0:N.call(_,p,t,this.state.context)),await((l=(I=r(this,C).config).onSettled)==null?void 0:l.call(I,p,null,this.state.variables,this.state.context,this)),await((F=(g=this.options).onSettled)==null?void 0:F.call(g,p,null,t,this.state.context)),f(this,U,x).call(this,{type:"success",data:p}),p}catch(p){try{throw await((b=(O=r(this,C).config).onError)==null?void 0:b.call(O,p,t,this.state.context,this)),await((at=(rt=this.options).onError)==null?void 0:at.call(rt,p,t,this.state.context)),await((w=(Q=r(this,C).config).onSettled)==null?void 0:w.call(Q,void 0,p,this.state.variables,this.state.context,this)),await((B=(E=this.options).onSettled)==null?void 0:B.call(E,void 0,p,t,this.state.context)),p}finally{f(this,U,x).call(this,{type:"error",error:p})}}}},T=new WeakMap,ut=new WeakMap,C=new WeakMap,Z=new WeakMap,U=new WeakSet,x=function(t){const s=i=>{switch(t.type){case"failed":return{...i,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!St(this.options.networkMode),status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...i,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:t.error,failureCount:i.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=s(this.state),v.batch(()=>{r(this,T).forEach(i=>{i.onMutationUpdate(t)}),r(this,C).notify({mutation:this,type:"updated",action:t})})},Ft);function Lt(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var P,ht,z,Ot,Ut=(Ot=class extends qt{constructor(t={}){super();c(this,P,void 0);c(this,ht,void 0);c(this,z,void 0);this.config=t,n(this,P,[]),n(this,ht,0)}build(t,s,i){const a=new Vt({mutationCache:this,mutationId:++ct(this,ht)._,options:t.defaultMutationOptions(s),state:i});return this.add(a),a}add(t){r(this,P).push(t),this.notify({type:"added",mutation:t})}remove(t){n(this,P,r(this,P).filter(s=>s!==t)),this.notify({type:"removed",mutation:t})}clear(){v.batch(()=>{r(this,P).forEach(t=>{this.remove(t)})})}getAll(){return r(this,P)}find(t){const s={exact:!0,...t};return r(this,P).find(i=>pt(s,i))}findAll(t={}){return r(this,P).filter(s=>pt(t,s))}notify(t){v.batch(()=>{this.listeners.forEach(s=>{s(t)})})}resumePausedMutations(){var t;return n(this,z,((t=r(this,z))!=null?t:Promise.resolve()).then(()=>{const s=r(this,P).filter(i=>i.state.isPaused);return v.batch(()=>s.reduce((i,a)=>i.then(()=>a.continue().catch(A)),Promise.resolve()))}).then(()=>{n(this,z,void 0)})),r(this,z)}},P=new WeakMap,ht=new WeakMap,z=new WeakMap,Ot);function Wt(e){return{onFetch:(t,s)=>{const i=async()=>{var g,F,O,b,rt,at;const a=t.options,h=(O=(F=(g=t.fetchOptions)==null?void 0:g.meta)==null?void 0:F.fetchMore)==null?void 0:O.direction,o=((b=t.state.data)==null?void 0:b.pages)||[],d=((rt=t.state.data)==null?void 0:rt.pageParams)||[],q={pages:[],pageParams:[]};let K=!1;const _=Q=>{Object.defineProperty(Q,"signal",{enumerable:!0,get:()=>(t.signal.aborted?K=!0:t.signal.addEventListener("abort",()=>{K=!0}),t.signal)})},N=t.options.queryFn||(()=>Promise.reject(new Error(`Missing queryFn: '${t.options.queryHash}'`))),I=async(Q,w,E)=>{if(K)return Promise.reject();if(w==null&&Q.pages.length)return Promise.resolve(Q);const B={queryKey:t.queryKey,pageParam:w,direction:E?"backward":"forward",meta:t.options.meta};_(B);const p=await N(B),{maxPages:V}=t.options,ot=E?Gt:jt;return{pages:ot(Q.pages,p,V),pageParams:ot(Q.pageParams,w,V)}};let l;if(h&&o.length){const Q=h==="backward",w=Q?zt:Ct,E={pages:o,pageParams:d},B=w(a,E);l=await I(E,B,Q)}else{l=await I(q,(at=d[0])!=null?at:a.initialPageParam);const Q=e!=null?e:o.length;for(let w=1;w<Q;w++){const E=Ct(a,l);l=await I(l,E)}}return l};t.options.persister?t.fetchFn=()=>{var a,h;return(h=(a=t.options).persister)==null?void 0:h.call(a,i,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},s)}:t.fetchFn=i}}}function Ct(e,{pages:t,pageParams:s}){const i=t.length-1;return e.getNextPageParam(t[i],t,s[i],s)}function zt(e,{pages:t,pageParams:s}){var i;return(i=e.getPreviousPageParam)==null?void 0:i.call(e,t[0],t,s[0],s)}var y,G,j,tt,et,$,st,it,bt,Jt=(bt=class{constructor(e={}){c(this,y,void 0);c(this,G,void 0);c(this,j,void 0);c(this,tt,void 0);c(this,et,void 0);c(this,$,void 0);c(this,st,void 0);c(this,it,void 0);n(this,y,e.queryCache||new Tt),n(this,G,e.mutationCache||new Ut),n(this,j,e.defaultOptions||{}),n(this,tt,new Map),n(this,et,new Map),n(this,$,0)}mount(){ct(this,$)._++,r(this,$)===1&&(n(this,st,mt.subscribe(()=>{mt.isFocused()&&(this.resumePausedMutations(),r(this,y).onFocus())})),n(this,it,gt.subscribe(()=>{gt.isOnline()&&(this.resumePausedMutations(),r(this,y).onOnline())})))}unmount(){var e,t;ct(this,$)._--,r(this,$)===0&&((e=r(this,st))==null||e.call(this),n(this,st,void 0),(t=r(this,it))==null||t.call(this),n(this,it,void 0))}isFetching(e){return r(this,y).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return r(this,G).findAll({...e,status:"pending"}).length}getQueryData(e){var t;return(t=r(this,y).find({queryKey:e}))==null?void 0:t.state.data}ensureQueryData(e){const t=this.getQueryData(e.queryKey);return t!==void 0?Promise.resolve(t):this.fetchQuery(e)}getQueriesData(e){return this.getQueryCache().findAll(e).map(({queryKey:t,state:s})=>{const i=s.data;return[t,i]})}setQueryData(e,t,s){const i=r(this,y).find({queryKey:e}),a=i==null?void 0:i.state.data,h=$t(t,a);if(typeof h=="undefined")return;const o=this.defaultQueryOptions({queryKey:e});return r(this,y).build(this,o).setData(h,{...s,manual:!0})}setQueriesData(e,t,s){return v.batch(()=>this.getQueryCache().findAll(e).map(({queryKey:i})=>[i,this.setQueryData(i,t,s)]))}getQueryState(e){var t;return(t=r(this,y).find({queryKey:e}))==null?void 0:t.state}removeQueries(e){const t=r(this,y);v.batch(()=>{t.findAll(e).forEach(s=>{t.remove(s)})})}resetQueries(e,t){const s=r(this,y),i={type:"active",...e};return v.batch(()=>(s.findAll(e).forEach(a=>{a.reset()}),this.refetchQueries(i,t)))}cancelQueries(e={},t={}){const s={revert:!0,...t},i=v.batch(()=>r(this,y).findAll(e).map(a=>a.cancel(s)));return Promise.all(i).then(A).catch(A)}invalidateQueries(e={},t={}){return v.batch(()=>{var i,a;if(r(this,y).findAll(e).forEach(h=>{h.invalidate()}),e.refetchType==="none")return Promise.resolve();const s={...e,type:(a=(i=e.refetchType)!=null?i:e.type)!=null?a:"active"};return this.refetchQueries(s,t)})}refetchQueries(e={},t){var a;const s={...t,cancelRefetch:(a=t==null?void 0:t.cancelRefetch)!=null?a:!0},i=v.batch(()=>r(this,y).findAll(e).filter(h=>!h.isDisabled()).map(h=>{let o=h.fetch(void 0,s);return s.throwOnError||(o=o.catch(A)),h.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(i).then(A)}fetchQuery(e){const t=this.defaultQueryOptions(e);typeof t.retry=="undefined"&&(t.retry=!1);const s=r(this,y).build(this,t);return s.isStaleByTime(t.staleTime)?s.fetch(t):Promise.resolve(s.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(A).catch(A)}fetchInfiniteQuery(e){return e.behavior=Wt(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(A).catch(A)}resumePausedMutations(){return r(this,G).resumePausedMutations()}getQueryCache(){return r(this,y)}getMutationCache(){return r(this,G)}getDefaultOptions(){return r(this,j)}setDefaultOptions(e){n(this,j,e)}setQueryDefaults(e,t){r(this,tt).set(vt(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...r(this,tt).values()];let s={};return t.forEach(i=>{Qt(e,i.queryKey)&&(s={...s,...i.defaultOptions})}),s}setMutationDefaults(e,t){r(this,et).set(vt(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...r(this,et).values()];let s={};return t.forEach(i=>{Qt(e,i.mutationKey)&&(s={...s,...i.defaultOptions})}),s}defaultQueryOptions(e){if(e!=null&&e._defaulted)return e;const t={...r(this,j).queries,...(e==null?void 0:e.queryKey)&&this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=Et(t.queryKey,t)),typeof t.refetchOnReconnect=="undefined"&&(t.refetchOnReconnect=t.networkMode!=="always"),typeof t.throwOnError=="undefined"&&(t.throwOnError=!!t.suspense),typeof t.networkMode=="undefined"&&t.persister&&(t.networkMode="offlineFirst"),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...r(this,j).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){r(this,y).clear(),r(this,G).clear()}},y=new WeakMap,G=new WeakMap,j=new WeakMap,tt=new WeakMap,et=new WeakMap,$=new WeakMap,st=new WeakMap,it=new WeakMap,bt),Xt=class extends Tt{find(e){return super.find(u(e))}findAll(e={}){return super.findAll(u(e))}},Yt=class extends Ut{find(e){return super.find(u(e))}findAll(e={}){return super.findAll(u(e))}},Zt=class extends Jt{constructor(e={}){const t={defaultOptions:e.defaultOptions,queryCache:e.queryCache||new Xt,mutationCache:e.mutationCache||new Yt};super(t),this.isRestoring=Kt(!1)}isFetching(e={}){return super.isFetching(u(e))}isMutating(e={}){return super.isMutating(u(e))}getQueryData(e){return super.getQueryData(u(e))}getQueriesData(e){return super.getQueriesData(u(e))}setQueryData(e,t,s={}){return super.setQueryData(u(e),t,u(s))}setQueriesData(e,t,s={}){return super.setQueriesData(u(e),t,u(s))}getQueryState(e){return super.getQueryState(u(e))}removeQueries(e={}){return super.removeQueries(u(e))}resetQueries(e={},t={}){return super.resetQueries(u(e),u(t))}cancelQueries(e={},t={}){return super.cancelQueries(u(e),u(t))}invalidateQueries(e={},t={}){return super.invalidateQueries(u(e),u(t))}refetchQueries(e={},t={}){return super.refetchQueries(u(e),u(t))}fetchQuery(e){return super.fetchQuery(u(e))}prefetchQuery(e){return super.prefetchQuery(u(e))}fetchInfiniteQuery(e){return super.fetchInfiniteQuery(u(e))}prefetchInfiniteQuery(e){return super.prefetchInfiniteQuery(u(e))}setDefaultOptions(e){super.setDefaultOptions(u(e))}setQueryDefaults(e,t){super.setQueryDefaults(u(e),u(t))}getQueryDefaults(e){return super.getQueryDefaults(u(e))}setMutationDefaults(e,t){super.setMutationDefaults(u(e),u(t))}getMutationDefaults(e){return super.getMutationDefaults(u(e))}},te={install:(e,t={})=>{const s=_t(t.queryClientKey);let i;if("queryClient"in t&&t.queryClient)i=t.queryClient;else{const o="queryClientConfig"in t?t.queryClientConfig:void 0;i=new Zt(o)}wt||i.mount();let a=()=>{};if(t.clientPersister){i.isRestoring.value=!0;const[o,d]=t.clientPersister(i);a=o,d.then(()=>{var q;i.isRestoring.value=!1,(q=t.clientPersisterOnSuccess)==null||q.call(t,i)})}const h=()=>{i.unmount(),a()};if(e.onUnmount)e.onUnmount(h);else{const o=e.unmount;e.unmount=function(){h(),o()}}e.provide(s,i)}},re=It(async e=>{var t=window;e.app.provide("SHADE",t.SHADE),e.app.provide("MQTT",t.MQTT),e.app.provide("MARKET",t.MARKET),e.app.use(te),e.app;const i="mqtt://localhost:"+8883;await t.SHADE.hunt(t.SHADE.ActShd.INIT_SHADE,{val:0,src:i}),await t.MARKET.hunt(t.MARKET.ActMrk.INIT_MARKET,{val:0,src:i})});export{re as default};
