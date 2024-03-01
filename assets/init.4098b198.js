var ee=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var i=(t,e,s)=>(ee(t,e,"read from private field"),s?s.call(t):e.get(t)),o=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},u=(t,e,s,r)=>(ee(t,e,"write to private field"),r?r.call(t,s):e.set(t,s),s),Z=(t,e,s,r)=>({set _(a){u(t,e,a,s)},get _(){return i(t,e,r)}}),g=(t,e,s)=>(ee(t,e,"access private method"),s);import{r as be,b as Pe,P as Fe}from"./index.8810a47b.js";import{r as Ae,n as b,t as Me,c as qe,a as p,i as te,b as Oe,S as ge,h as ve,m as ne,d as ue,e as Se,f as we,g as he,o as ce,j as Ee,k as le,p as oe,l as n,q as Re,s as Ue}from"./utils.8ff65a68.js";import{R as Ke,M as Te}from"./mutation.8e607231.js";var G,_,v,w,Q,f,W,I,$,x,P,A,fe,Ie=(fe=class extends Ke{constructor(e){super();o(this,$);o(this,P);o(this,G,void 0);o(this,_,void 0);o(this,v,void 0);o(this,w,void 0);o(this,Q,void 0);o(this,f,void 0);o(this,W,void 0);o(this,I,void 0);u(this,I,!1),u(this,W,e.defaultOptions),g(this,$,x).call(this,e.options),u(this,f,[]),u(this,v,e.cache),this.queryKey=e.queryKey,this.queryHash=e.queryHash,u(this,G,e.state||He(this.options)),this.state=i(this,G),this.scheduleGc()}get meta(){return this.options.meta}optionalRemove(){!i(this,f).length&&this.state.fetchStatus==="idle"&&i(this,v).remove(this)}setData(e,s){const r=Ae(this.state.data,e,this.options);return g(this,P,A).call(this,{data:r,type:"success",dataUpdatedAt:s==null?void 0:s.updatedAt,manual:s==null?void 0:s.manual}),r}setState(e,s){g(this,P,A).call(this,{type:"setState",state:e,setStateOptions:s})}cancel(e){var r;const s=i(this,w);return(r=i(this,Q))==null||r.cancel(e),s?s.then(b).catch(b):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(i(this,G))}isActive(){return i(this,f).some(e=>e.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||i(this,f).some(e=>e.getCurrentResult().isStale)}isStaleByTime(e=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!Me(this.state.dataUpdatedAt,e)}onFocus(){var s;const e=i(this,f).find(r=>r.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(s=i(this,Q))==null||s.continue()}onOnline(){var s;const e=i(this,f).find(r=>r.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(s=i(this,Q))==null||s.continue()}addObserver(e){i(this,f).includes(e)||(i(this,f).push(e),this.clearGcTimeout(),i(this,v).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){i(this,f).includes(e)&&(u(this,f,i(this,f).filter(s=>s!==e)),i(this,f).length||(i(this,Q)&&(i(this,I)?i(this,Q).cancel({revert:!0}):i(this,Q).cancelRetry()),this.scheduleGc()),i(this,v).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return i(this,f).length}invalidate(){this.state.isInvalidated||g(this,P,A).call(this,{type:"invalidate"})}fetch(e,s){var k,J,X,j;if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&(s==null?void 0:s.cancelRefetch))this.cancel({silent:!0});else if(i(this,w))return(k=i(this,Q))==null||k.continueRetry(),i(this,w)}if(e&&g(this,$,x).call(this,e),!this.options.queryFn){const l=i(this,f).find(m=>m.options.queryFn);l&&g(this,$,x).call(this,l.options)}const r=new AbortController,a={queryKey:this.queryKey,meta:this.meta},h=l=>{Object.defineProperty(l,"signal",{enumerable:!0,get:()=>(u(this,I,!0),r.signal)})};h(a);const c=()=>this.options.queryFn?(u(this,I,!1),this.options.persister?this.options.persister(this.options.queryFn,a,this):this.options.queryFn(a)):Promise.reject(new Error(`Missing queryFn: '${this.options.queryHash}'`)),y={fetchOptions:s,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:c};h(y),(J=this.options.behavior)==null||J.onFetch(y,this),u(this,_,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((X=y.fetchOptions)==null?void 0:X.meta))&&g(this,P,A).call(this,{type:"fetch",meta:(j=y.fetchOptions)==null?void 0:j.meta});const K=l=>{var m,M,q,O;te(l)&&l.silent||g(this,P,A).call(this,{type:"error",error:l}),te(l)||((M=(m=i(this,v).config).onError)==null||M.call(m,l,this),(O=(q=i(this,v).config).onSettled)==null||O.call(q,this.state.data,l,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return u(this,Q,qe({fn:y.fetchFn,abort:r.abort.bind(r),onSuccess:l=>{var m,M,q,O;if(typeof l=="undefined"){K(new Error(`${this.queryHash} data is undefined`));return}this.setData(l),(M=(m=i(this,v).config).onSuccess)==null||M.call(m,l,this),(O=(q=i(this,v).config).onSettled)==null||O.call(q,l,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:K,onFail:(l,m)=>{g(this,P,A).call(this,{type:"failed",failureCount:l,error:m})},onPause:()=>{g(this,P,A).call(this,{type:"pause"})},onContinue:()=>{g(this,P,A).call(this,{type:"continue"})},retry:y.options.retry,retryDelay:y.options.retryDelay,networkMode:y.options.networkMode})),u(this,w,i(this,Q).promise),i(this,w)}},G=new WeakMap,_=new WeakMap,v=new WeakMap,w=new WeakMap,Q=new WeakMap,f=new WeakMap,W=new WeakMap,I=new WeakMap,$=new WeakSet,x=function(e){this.options={...i(this,W),...e},this.updateGcTime(this.options.gcTime)},P=new WeakSet,A=function(e){const s=r=>{var a,h;switch(e.type){case"failed":return{...r,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:(a=e.meta)!=null?a:null,fetchStatus:Oe(this.options.networkMode)?"fetching":"paused",...!r.dataUpdatedAt&&{error:null,status:"pending"}};case"success":return{...r,data:e.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(h=e.dataUpdatedAt)!=null?h:Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const c=e.error;return te(c)&&c.revert&&i(this,_)?{...i(this,_),fetchStatus:"idle"}:{...r,error:c,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:c,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...e.state}}};this.state=s(this.state),p.batch(()=>{i(this,f).forEach(r=>{r.onQueryUpdate()}),i(this,v).notify({query:this,type:"updated",action:e})})},fe);function He(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,s=typeof e!="undefined",r=s?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:s?r!=null?r:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"pending",fetchStatus:"idle"}}var F,ye,Qe=(ye=class extends ge{constructor(e={}){super();o(this,F,void 0);this.config=e,u(this,F,new Map)}build(e,s,r){var y;const a=s.queryKey,h=(y=s.queryHash)!=null?y:ve(a,s);let c=this.get(h);return c||(c=new Ie({cache:this,queryKey:a,queryHash:h,options:e.defaultQueryOptions(s),state:r,defaultOptions:e.getQueryDefaults(a)}),this.add(c)),c}add(e){i(this,F).has(e.queryHash)||(i(this,F).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const s=i(this,F).get(e.queryHash);s&&(e.destroy(),s===e&&i(this,F).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){p.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return i(this,F).get(e)}getAll(){return[...i(this,F).values()]}find(e){const s={exact:!0,...e};return this.getAll().find(r=>ne(s,r))}findAll(e={}){const s=this.getAll();return Object.keys(e).length>0?s.filter(r=>ne(e,r)):s}notify(e){p.batch(()=>{this.listeners.forEach(s=>{s(e)})})}onFocus(){p.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){p.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},F=new WeakMap,ye),D,z,H,pe,De=(pe=class extends ge{constructor(e={}){super();o(this,D,void 0);o(this,z,void 0);o(this,H,void 0);this.config=e,u(this,D,[]),u(this,z,0)}build(e,s,r){const a=new Te({mutationCache:this,mutationId:++Z(this,z)._,options:e.defaultMutationOptions(s),state:r});return this.add(a),a}add(e){i(this,D).push(e),this.notify({type:"added",mutation:e})}remove(e){u(this,D,i(this,D).filter(s=>s!==e)),this.notify({type:"removed",mutation:e})}clear(){p.batch(()=>{i(this,D).forEach(e=>{this.remove(e)})})}getAll(){return i(this,D)}find(e){const s={exact:!0,...e};return i(this,D).find(r=>ue(s,r))}findAll(e={}){return i(this,D).filter(s=>ue(e,s))}notify(e){p.batch(()=>{this.listeners.forEach(s=>{s(e)})})}resumePausedMutations(){var e;return u(this,H,((e=i(this,H))!=null?e:Promise.resolve()).then(()=>{const s=i(this,D).filter(r=>r.state.isPaused);return p.batch(()=>s.reduce((r,a)=>r.then(()=>a.continue().catch(b)),Promise.resolve()))}).then(()=>{u(this,H,void 0)})),i(this,H)}},D=new WeakMap,z=new WeakMap,H=new WeakMap,pe);function ke(t){return{onFetch:(e,s)=>{const r=async()=>{var m,M,q,O,se,re;const a=e.options,h=(q=(M=(m=e.fetchOptions)==null?void 0:m.meta)==null?void 0:M.fetchMore)==null?void 0:q.direction,c=((O=e.state.data)==null?void 0:O.pages)||[],y=((se=e.state.data)==null?void 0:se.pageParams)||[],K={pages:[],pageParams:[]};let k=!1;const J=C=>{Object.defineProperty(C,"signal",{enumerable:!0,get:()=>(e.signal.aborted?k=!0:e.signal.addEventListener("abort",()=>{k=!0}),e.signal)})},X=e.options.queryFn||(()=>Promise.reject(new Error(`Missing queryFn: '${e.options.queryHash}'`))),j=async(C,S,T)=>{if(k)return Promise.reject();if(S==null&&C.pages.length)return Promise.resolve(C);const Y={queryKey:e.queryKey,pageParam:S,direction:T?"backward":"forward",meta:e.options.meta};J(Y);const Ce=await X(Y),{maxPages:ie}=e.options,ae=T?Se:we;return{pages:ae(C.pages,Ce,ie),pageParams:ae(C.pageParams,S,ie)}};let l;if(h&&c.length){const C=h==="backward",S=C?je:de,T={pages:c,pageParams:y},Y=S(a,T);l=await j(T,Y,C)}else{l=await j(K,(re=y[0])!=null?re:a.initialPageParam);const C=t!=null?t:c.length;for(let S=1;S<C;S++){const T=de(a,l);l=await j(l,T)}}return l};e.options.persister?e.fetchFn=()=>{var a,h;return(h=(a=e.options).persister)==null?void 0:h.call(a,r,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},s)}:e.fetchFn=r}}}function de(t,{pages:e,pageParams:s}){const r=e.length-1;return t.getNextPageParam(e[r],e,s[r],s)}function je(t,{pages:e,pageParams:s}){var r;return(r=t.getPreviousPageParam)==null?void 0:r.call(t,e[0],e,s[0],s)}var d,E,R,B,N,U,L,V,me,Ge=(me=class{constructor(t={}){o(this,d,void 0);o(this,E,void 0);o(this,R,void 0);o(this,B,void 0);o(this,N,void 0);o(this,U,void 0);o(this,L,void 0);o(this,V,void 0);u(this,d,t.queryCache||new Qe),u(this,E,t.mutationCache||new De),u(this,R,t.defaultOptions||{}),u(this,B,new Map),u(this,N,new Map),u(this,U,0)}mount(){Z(this,U)._++,i(this,U)===1&&(u(this,L,he.subscribe(()=>{he.isFocused()&&(this.resumePausedMutations(),i(this,d).onFocus())})),u(this,V,ce.subscribe(()=>{ce.isOnline()&&(this.resumePausedMutations(),i(this,d).onOnline())})))}unmount(){var t,e;Z(this,U)._--,i(this,U)===0&&((t=i(this,L))==null||t.call(this),u(this,L,void 0),(e=i(this,V))==null||e.call(this),u(this,V,void 0))}isFetching(t){return i(this,d).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return i(this,E).findAll({...t,status:"pending"}).length}getQueryData(t){var e;return(e=i(this,d).find({queryKey:t}))==null?void 0:e.state.data}ensureQueryData(t){const e=this.getQueryData(t.queryKey);return e!==void 0?Promise.resolve(e):this.fetchQuery(t)}getQueriesData(t){return this.getQueryCache().findAll(t).map(({queryKey:e,state:s})=>{const r=s.data;return[e,r]})}setQueryData(t,e,s){const r=i(this,d).find({queryKey:t}),a=r==null?void 0:r.state.data,h=Ee(e,a);if(typeof h=="undefined")return;const c=this.defaultQueryOptions({queryKey:t});return i(this,d).build(this,c).setData(h,{...s,manual:!0})}setQueriesData(t,e,s){return p.batch(()=>this.getQueryCache().findAll(t).map(({queryKey:r})=>[r,this.setQueryData(r,e,s)]))}getQueryState(t){var e;return(e=i(this,d).find({queryKey:t}))==null?void 0:e.state}removeQueries(t){const e=i(this,d);p.batch(()=>{e.findAll(t).forEach(s=>{e.remove(s)})})}resetQueries(t,e){const s=i(this,d),r={type:"active",...t};return p.batch(()=>(s.findAll(t).forEach(a=>{a.reset()}),this.refetchQueries(r,e)))}cancelQueries(t={},e={}){const s={revert:!0,...e},r=p.batch(()=>i(this,d).findAll(t).map(a=>a.cancel(s)));return Promise.all(r).then(b).catch(b)}invalidateQueries(t={},e={}){return p.batch(()=>{var r,a;if(i(this,d).findAll(t).forEach(h=>{h.invalidate()}),t.refetchType==="none")return Promise.resolve();const s={...t,type:(a=(r=t.refetchType)!=null?r:t.type)!=null?a:"active"};return this.refetchQueries(s,e)})}refetchQueries(t={},e){var a;const s={...e,cancelRefetch:(a=e==null?void 0:e.cancelRefetch)!=null?a:!0},r=p.batch(()=>i(this,d).findAll(t).filter(h=>!h.isDisabled()).map(h=>{let c=h.fetch(void 0,s);return s.throwOnError||(c=c.catch(b)),h.state.fetchStatus==="paused"?Promise.resolve():c}));return Promise.all(r).then(b)}fetchQuery(t){const e=this.defaultQueryOptions(t);typeof e.retry=="undefined"&&(e.retry=!1);const s=i(this,d).build(this,e);return s.isStaleByTime(e.staleTime)?s.fetch(e):Promise.resolve(s.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(b).catch(b)}fetchInfiniteQuery(t){return t.behavior=ke(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(b).catch(b)}resumePausedMutations(){return i(this,E).resumePausedMutations()}getQueryCache(){return i(this,d)}getMutationCache(){return i(this,E)}getDefaultOptions(){return i(this,R)}setDefaultOptions(t){u(this,R,t)}setQueryDefaults(t,e){i(this,B).set(le(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...i(this,B).values()];let s={};return e.forEach(r=>{oe(t,r.queryKey)&&(s={...s,...r.defaultOptions})}),s}setMutationDefaults(t,e){i(this,N).set(le(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...i(this,N).values()];let s={};return e.forEach(r=>{oe(t,r.mutationKey)&&(s={...s,...r.defaultOptions})}),s}defaultQueryOptions(t){if(t!=null&&t._defaulted)return t;const e={...i(this,R).queries,...(t==null?void 0:t.queryKey)&&this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=ve(e.queryKey,e)),typeof e.refetchOnReconnect=="undefined"&&(e.refetchOnReconnect=e.networkMode!=="always"),typeof e.throwOnError=="undefined"&&(e.throwOnError=!!e.suspense),typeof e.networkMode=="undefined"&&e.persister&&(e.networkMode="offlineFirst"),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...i(this,R).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){i(this,d).clear(),i(this,E).clear()}},d=new WeakMap,E=new WeakMap,R=new WeakMap,B=new WeakMap,N=new WeakMap,U=new WeakMap,L=new WeakMap,V=new WeakMap,me),_e=class extends Qe{find(t){return super.find(n(t))}findAll(t={}){return super.findAll(n(t))}},$e=class extends De{find(t){return super.find(n(t))}findAll(t={}){return super.findAll(n(t))}},Be=class extends Ge{constructor(t={}){const e={defaultOptions:t.defaultOptions,queryCache:t.queryCache||new _e,mutationCache:t.mutationCache||new $e};super(e),this.isRestoring=be(!1)}isFetching(t={}){return super.isFetching(n(t))}isMutating(t={}){return super.isMutating(n(t))}getQueryData(t){return super.getQueryData(n(t))}getQueriesData(t){return super.getQueriesData(n(t))}setQueryData(t,e,s={}){return super.setQueryData(n(t),e,n(s))}setQueriesData(t,e,s={}){return super.setQueriesData(n(t),e,n(s))}getQueryState(t){return super.getQueryState(n(t))}removeQueries(t={}){return super.removeQueries(n(t))}resetQueries(t={},e={}){return super.resetQueries(n(t),n(e))}cancelQueries(t={},e={}){return super.cancelQueries(n(t),n(e))}invalidateQueries(t={},e={}){return super.invalidateQueries(n(t),n(e))}refetchQueries(t={},e={}){return super.refetchQueries(n(t),n(e))}fetchQuery(t){return super.fetchQuery(n(t))}prefetchQuery(t){return super.prefetchQuery(n(t))}fetchInfiniteQuery(t){return super.fetchInfiniteQuery(n(t))}prefetchInfiniteQuery(t){return super.prefetchInfiniteQuery(n(t))}setDefaultOptions(t){super.setDefaultOptions(n(t))}setQueryDefaults(t,e){super.setQueryDefaults(n(t),n(e))}getQueryDefaults(t){return super.getQueryDefaults(n(t))}setMutationDefaults(t,e){super.setMutationDefaults(n(t),n(e))}getMutationDefaults(t){return super.getMutationDefaults(n(t))}},Ne={install:(t,e={})=>{const s=Re(e.queryClientKey);let r;if("queryClient"in e&&e.queryClient)r=e.queryClient;else{const c="queryClientConfig"in e?e.queryClientConfig:void 0;r=new Be(c)}Ue||r.mount();let a=()=>{};if(e.clientPersister){r.isRestoring.value=!0;const[c,y]=e.clientPersister(r);a=c,y.then(()=>{var K;r.isRestoring.value=!1,(K=e.clientPersisterOnSuccess)==null||K.call(e,r)})}const h=()=>{r.unmount(),a()};if(t.onUnmount)t.onUnmount(h);else{const c=t.unmount;t.unmount=function(){h(),c()}}t.provide(s,r)}},Je=Pe(async t=>{var e=window;t.app.provide("SHADE",e.SHADE),t.app.provide("DEPTH",e.DEPTH),t.app.provide("MQTT",e.MQTT),t.app.provide("MARKET",e.MARKET),t.app.provide("QUILL",e.Quill),t.app.use(Ne),Fe.set(!0),t.app;const r="mqtt://localhost:"+8883;await e.SHADE.hunt(e.SHADE.ActShd.INIT_SHADE,{val:0,src:r}),await e.MARKET.hunt(e.MARKET.ActMrk.INIT_MARKET,{val:0,src:r})});export{Je as default};
