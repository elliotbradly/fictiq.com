var X=(i,t,e)=>{if(!t.has(i))throw TypeError("Cannot "+e)};var s=(i,t,e)=>(X(i,t,"read from private field"),e?e.call(i):t.get(i)),h=(i,t,e)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,e)},n=(i,t,e,r)=>(X(i,t,"write to private field"),r?r.call(i,e):t.set(i,e),e);var d=(i,t,e)=>(X(i,t,"access private method"),e);import{S as vt,v as Z,n as Rt,s as ct,u as lt,t as Ot,g as Ct,b as wt,r as dt,a as Ut,q as St,w as ft,x as Qt,l as It}from"./utils.bc8f18fd.js";import{Y as Et,v as Ft,c as Dt,C as Tt,B as _,U as At,R as Mt,S as xt}from"./index.2fd8faee.js";var y,o,T,p,U,A,O,j,M,x,S,Q,w,I,E,P,k,$,K,tt,q,et,B,st,W,it,z,rt,N,nt,V,gt,bt,Lt=(bt=class extends vt{constructor(t,e){super();h(this,E);h(this,k);h(this,K);h(this,q);h(this,B);h(this,W);h(this,z);h(this,N);h(this,V);h(this,y,void 0);h(this,o,void 0);h(this,T,void 0);h(this,p,void 0);h(this,U,void 0);h(this,A,void 0);h(this,O,void 0);h(this,j,void 0);h(this,M,void 0);h(this,x,void 0);h(this,S,void 0);h(this,Q,void 0);h(this,w,void 0);h(this,I,void 0);n(this,o,void 0),n(this,T,void 0),n(this,p,void 0),n(this,I,new Set),n(this,y,t),this.options=e,n(this,O,null),this.bindMethods(),this.setOptions(e)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(s(this,o).addObserver(this),pt(s(this,o),this.options)?d(this,E,P).call(this):this.updateResult(),d(this,B,st).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return at(s(this,o),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return at(s(this,o),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,d(this,W,it).call(this),d(this,z,rt).call(this),s(this,o).removeObserver(this)}setOptions(t,e){const r=this.options,f=s(this,o);if(this.options=s(this,y).defaultQueryOptions(t),Z(r,this.options)||s(this,y).getQueryCache().notify({type:"observerOptionsUpdated",query:s(this,o),observer:this}),typeof this.options.enabled!="undefined"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),d(this,N,nt).call(this);const a=this.hasListeners();a&&yt(s(this,o),f,this.options,r)&&d(this,E,P).call(this),this.updateResult(e),a&&(s(this,o)!==f||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&d(this,k,$).call(this);const c=d(this,K,tt).call(this);a&&(s(this,o)!==f||this.options.enabled!==r.enabled||c!==s(this,w))&&d(this,q,et).call(this,c)}getOptimisticResult(t){const e=s(this,y).getQueryCache().build(s(this,y),t),r=this.createResult(e,t);return jt(this,r)&&(n(this,p,r),n(this,A,this.options),n(this,U,s(this,o).state)),r}getCurrentResult(){return s(this,p)}trackResult(t){const e={};return Object.keys(t).forEach(r=>{Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:()=>(s(this,I).add(r),t[r])})}),e}getCurrentQuery(){return s(this,o)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const e=s(this,y).defaultQueryOptions(t),r=s(this,y).getQueryCache().build(s(this,y),e);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,e))}fetch(t){var e;return d(this,E,P).call(this,{...t,cancelRefetch:(e=t.cancelRefetch)!=null?e:!0}).then(()=>(this.updateResult(),s(this,p)))}createResult(t,e){var ut;const r=s(this,o),f=this.options,a=s(this,p),c=s(this,U),b=s(this,A),D=t!==r?t.state:s(this,T),{state:u}=t;let{error:C,errorUpdatedAt:l,fetchStatus:m,status:v}=u,L=!1,g;if(e._optimisticResults){const R=this.hasListeners(),J=!R&&pt(t,e),mt=R&&yt(t,r,e,f);(J||mt)&&(m=wt(t.options.networkMode)?"fetching":"paused",u.dataUpdatedAt||(v="pending")),e._optimisticResults==="isRestoring"&&(m="idle")}if(e.select&&typeof u.data!="undefined")if(a&&u.data===(c==null?void 0:c.data)&&e.select===s(this,j))g=s(this,M);else try{n(this,j,e.select),g=e.select(u.data),g=dt(a==null?void 0:a.data,g,e),n(this,M,g),n(this,O,null)}catch(R){n(this,O,R)}else g=u.data;if(typeof e.placeholderData!="undefined"&&typeof g=="undefined"&&v==="pending"){let R;if((a==null?void 0:a.isPlaceholderData)&&e.placeholderData===(b==null?void 0:b.placeholderData))R=a.data;else if(R=typeof e.placeholderData=="function"?e.placeholderData((ut=s(this,x))==null?void 0:ut.state.data,s(this,x)):e.placeholderData,e.select&&typeof R!="undefined")try{R=e.select(R),n(this,O,null)}catch(J){n(this,O,J)}typeof R!="undefined"&&(v="success",g=dt(a==null?void 0:a.data,R,e),L=!0)}s(this,O)&&(C=s(this,O),g=s(this,M),l=Date.now(),v="error");const Y=m==="fetching",G=v==="pending",H=v==="error",ht=G&&Y;return{status:v,fetchStatus:m,isPending:G,isSuccess:v==="success",isError:H,isInitialLoading:ht,isLoading:ht,data:g,dataUpdatedAt:u.dataUpdatedAt,error:C,errorUpdatedAt:l,failureCount:u.fetchFailureCount,failureReason:u.fetchFailureReason,errorUpdateCount:u.errorUpdateCount,isFetched:u.dataUpdateCount>0||u.errorUpdateCount>0,isFetchedAfterMount:u.dataUpdateCount>D.dataUpdateCount||u.errorUpdateCount>D.errorUpdateCount,isFetching:Y,isRefetching:Y&&!G,isLoadingError:H&&u.dataUpdatedAt===0,isPaused:m==="paused",isPlaceholderData:L,isRefetchError:H&&u.dataUpdatedAt!==0,isStale:ot(t,e),refetch:this.refetch}}updateResult(t){const e=s(this,p),r=this.createResult(s(this,o),this.options);if(n(this,U,s(this,o).state),n(this,A,this.options),s(this,U).data!==void 0&&n(this,x,s(this,o)),Z(r,e))return;n(this,p,r);const f={},a=()=>{if(!e)return!0;const{notifyOnChangeProps:c}=this.options,b=typeof c=="function"?c():c;if(b==="all"||!b&&!s(this,I).size)return!0;const F=new Set(b!=null?b:s(this,I));return this.options.throwOnError&&F.add("error"),Object.keys(s(this,p)).some(D=>{const u=D;return s(this,p)[u]!==e[u]&&F.has(u)})};(t==null?void 0:t.listeners)!==!1&&a()&&(f.listeners=!0),d(this,V,gt).call(this,{...f,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&d(this,B,st).call(this)}},y=new WeakMap,o=new WeakMap,T=new WeakMap,p=new WeakMap,U=new WeakMap,A=new WeakMap,O=new WeakMap,j=new WeakMap,M=new WeakMap,x=new WeakMap,S=new WeakMap,Q=new WeakMap,w=new WeakMap,I=new WeakMap,E=new WeakSet,P=function(t){d(this,N,nt).call(this);let e=s(this,o).fetch(this.options,t);return t!=null&&t.throwOnError||(e=e.catch(Rt)),e},k=new WeakSet,$=function(){if(d(this,W,it).call(this),ct||s(this,p).isStale||!lt(this.options.staleTime))return;const e=Ot(s(this,p).dataUpdatedAt,this.options.staleTime)+1;n(this,S,setTimeout(()=>{s(this,p).isStale||this.updateResult()},e))},K=new WeakSet,tt=function(){var t;return(t=typeof this.options.refetchInterval=="function"?this.options.refetchInterval(s(this,o)):this.options.refetchInterval)!=null?t:!1},q=new WeakSet,et=function(t){d(this,z,rt).call(this),n(this,w,t),!(ct||this.options.enabled===!1||!lt(s(this,w))||s(this,w)===0)&&n(this,Q,setInterval(()=>{(this.options.refetchIntervalInBackground||Ct.isFocused())&&d(this,E,P).call(this)},s(this,w)))},B=new WeakSet,st=function(){d(this,k,$).call(this),d(this,q,et).call(this,d(this,K,tt).call(this))},W=new WeakSet,it=function(){s(this,S)&&(clearTimeout(s(this,S)),n(this,S,void 0))},z=new WeakSet,rt=function(){s(this,Q)&&(clearInterval(s(this,Q)),n(this,Q,void 0))},N=new WeakSet,nt=function(){const t=s(this,y).getQueryCache().build(s(this,y),this.options);if(t===s(this,o))return;const e=s(this,o);n(this,o,t),n(this,T,t.state),this.hasListeners()&&(e==null||e.removeObserver(this),t.addObserver(this))},V=new WeakSet,gt=function(t){Ut.batch(()=>{t.listeners&&this.listeners.forEach(e=>{e(s(this,p))}),s(this,y).getQueryCache().notify({query:s(this,o),type:"observerResultsUpdated"})})},bt);function Pt(i,t){return t.enabled!==!1&&!i.state.dataUpdatedAt&&!(i.state.status==="error"&&t.retryOnMount===!1)}function pt(i,t){return Pt(i,t)||i.state.dataUpdatedAt>0&&at(i,t,t.refetchOnMount)}function at(i,t,e){if(t.enabled!==!1){const r=typeof e=="function"?e(i):e;return r==="always"||r!==!1&&ot(i,t)}return!1}function yt(i,t,e,r){return e.enabled!==!1&&(i!==t||r.enabled===!1)&&(!e.suspense||i.state.status!=="error")&&ot(i,e)}function ot(i,t){return i.isStaleByTime(t.staleTime)}function jt(i,t){return!Z(i.getCurrentResult(),t)}function kt(i=""){if(!Et())throw new Error("vue-query hooks can only be used inside setup() function or functions that support injection context.");const t=St(i),e=Ft(t);if(!e)throw new Error("No 'queryClient' found in Vue context, use 'VueQueryPlugin' to properly initialize the library.");return e}function Kt(i,t,e){const r=e||kt(),f=Dt(()=>{const l=It(t);typeof l.enabled=="function"&&(l.enabled=l.enabled());const m=r.defaultQueryOptions(l);return m._optimisticResults=r.isRestoring.value?"isRestoring":"optimistic",m}),a=new i(r,f.value),c=Tt(a.getCurrentResult());let b=()=>{};_(r.isRestoring,l=>{l||(b(),b=a.subscribe(m=>{ft(c,m)}))},{immediate:!0});const F=()=>{a.setOptions(f.value),ft(c,a.getCurrentResult())};_(f,F),At(()=>{b()});const D=(...l)=>(F(),c.refetch(...l)),u=()=>new Promise((l,m)=>{let v=()=>{};const L=()=>{if(f.value.enabled!==!1){a.setOptions(f.value);const g=a.getOptimisticResult(f.value);g.isStale?(v(),a.fetchOptimistic(f.value).then(l,m)):(v(),l(g))}};L(),v=_(f,L)});_(()=>c.error,l=>{if(c.isError&&!c.isFetching&&Qt(f.value.throwOnError,[l,a.getCurrentQuery()]))throw l});const C=Mt(xt(c));for(const l in c)typeof c[l]=="function"&&(C[l]=c[l]);return C.suspense=u,C.refetch=D,C}function Nt(i,t){return Kt(Lt,i,t)}export{Nt as a,kt as u};
