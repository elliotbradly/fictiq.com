var I=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var a=(e,t,n)=>(I(e,t,"read from private field"),n?n.call(e):t.get(e)),v=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},l=(e,t,n,r)=>(I(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n);import{i as k,u as X}from"./index.96dd897d.js";var q=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},U=typeof window=="undefined"||"Deno"in window;function fe(){}function le(e,t){return typeof e=="function"?e(t):e}function he(e){return typeof e=="number"&&e>=0&&e!==1/0}function ye(e,t){return Math.max(e+(t||0)-Date.now(),0)}function de(e,t){const{type:n="all",exact:r,fetchStatus:s,predicate:c,queryKey:f,stale:h}=e;if(f){if(r){if(t.queryHash!==Z(f,t.options))return!1}else if(!M(t.queryKey,f))return!1}if(n!=="all"){const y=t.isActive();if(n==="active"&&!y||n==="inactive"&&y)return!1}return!(typeof h=="boolean"&&t.isStale()!==h||typeof s!="undefined"&&s!==t.state.fetchStatus||c&&!c(t))}function be(e,t){const{exact:n,status:r,predicate:s,mutationKey:c}=e;if(c){if(!t.options.mutationKey)return!1;if(n){if(C(t.options.mutationKey)!==C(c))return!1}else if(!M(t.options.mutationKey,c))return!1}return!(r&&t.state.status!==r||s&&!s(t))}function Z(e,t){return((t==null?void 0:t.queryKeyHashFn)||C)(e)}function C(e){return JSON.stringify(e,(t,n)=>R(n)?Object.keys(n).sort().reduce((r,s)=>(r[s]=n[s],r),{}):n)}function M(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(n=>!M(e[n],t[n])):!1}function B(e,t){if(e===t)return e;const n=x(e)&&x(t);if(n||R(e)&&R(t)){const r=n?e.length:Object.keys(e).length,s=n?t:Object.keys(t),c=s.length,f=n?[]:{};let h=0;for(let y=0;y<c;y++){const b=n?y:s[y];f[b]=B(e[b],t[b]),f[b]===e[b]&&h++}return r===c&&h===r?e:f}return t}function pe(e,t){if(e&&!t||t&&!e)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function x(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function R(e){if(!Q(e))return!1;const t=e.constructor;if(typeof t=="undefined")return!0;const n=t.prototype;return!(!Q(n)||!n.hasOwnProperty("isPrototypeOf"))}function Q(e){return Object.prototype.toString.call(e)==="[object Object]"}function H(e){return new Promise(t=>{setTimeout(t,e)})}function _(e){H(0).then(e)}function we(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?B(e,t):t}function me(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}function ve(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var E,p,O,V,g=(V=class extends q{constructor(){super();v(this,E,void 0);v(this,p,void 0);v(this,O,void 0);l(this,O,t=>{if(!U&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){a(this,p)||this.setEventListener(a(this,O))}onUnsubscribe(){var t;this.hasListeners()||((t=a(this,p))==null||t.call(this),l(this,p,void 0))}setEventListener(t){var n;l(this,O,t),(n=a(this,p))==null||n.call(this),l(this,p,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){a(this,E)!==t&&(l(this,E,t),this.onFocus())}onFocus(){this.listeners.forEach(t=>{t()})}isFocused(){var t;return typeof a(this,E)=="boolean"?a(this,E):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},E=new WeakMap,p=new WeakMap,O=new WeakMap,V),ee=new g,S,w,L,$,te=($=class extends q{constructor(){super();v(this,S,!0);v(this,w,void 0);v(this,L,void 0);l(this,L,t=>{if(!U&&window.addEventListener){const n=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){a(this,w)||this.setEventListener(a(this,L))}onUnsubscribe(){var t;this.hasListeners()||((t=a(this,w))==null||t.call(this),l(this,w,void 0))}setEventListener(t){var n;l(this,L,t),(n=a(this,w))==null||n.call(this),l(this,w,t(this.setOnline.bind(this)))}setOnline(t){a(this,S)!==t&&(l(this,S,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return a(this,S)}},S=new WeakMap,w=new WeakMap,L=new WeakMap,$),Y=new te;function ne(e){return Math.min(1e3*2**e,3e4)}function re(e){return(e!=null?e:"online")==="online"?Y.isOnline():!0}var J=class{constructor(e){this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function Ee(e){return e instanceof J}function je(e){let t=!1,n=0,r=!1,s,c,f;const h=new Promise((o,i)=>{c=o,f=i}),y=o=>{var i;r||(P(new J(o)),(i=e.abort)==null||i.call(e))},b=()=>{t=!0},u=()=>{t=!1},d=()=>!ee.isFocused()||e.networkMode!=="always"&&!Y.isOnline(),z=o=>{var i;r||(r=!0,(i=e.onSuccess)==null||i.call(e,o),s==null||s(),c(o))},P=o=>{var i;r||(r=!0,(i=e.onError)==null||i.call(e,o),s==null||s(),f(o))},N=()=>new Promise(o=>{var i;s=m=>{const j=r||!d();return j&&o(m),j},(i=e.onPause)==null||i.call(e)}).then(()=>{var o;s=void 0,r||(o=e.onContinue)==null||o.call(e)}),F=()=>{if(r)return;let o;try{o=e.fn()}catch(i){o=Promise.reject(i)}Promise.resolve(o).then(z).catch(i=>{var D,T,A;if(r)return;const m=(D=e.retry)!=null?D:U?0:3,j=(T=e.retryDelay)!=null?T:ne,G=typeof j=="function"?j(n,i):j,W=m===!0||typeof m=="number"&&n<m||typeof m=="function"&&m(n,i);if(t||!W){P(i);return}n++,(A=e.onFail)==null||A.call(e,n,i),H(G).then(()=>{if(d())return N()}).then(()=>{t?P(i):F()})})};return re(e.networkMode)?F():N().then(F),{promise:h,cancel:y,continue:()=>(s==null?void 0:s())?h:Promise.resolve(),cancelRetry:b,continueRetry:u}}function se(){let e=[],t=0,n=u=>{u()},r=u=>{u()};const s=u=>{let d;t++;try{d=u()}finally{t--,t||h()}return d},c=u=>{t?e.push(u):_(()=>{n(u)})},f=u=>(...d)=>{c(()=>{u(...d)})},h=()=>{const u=e;e=[],u.length&&_(()=>{r(()=>{u.forEach(d=>{n(d)})})})};return{batch:s,batchCalls:f,schedule:c,setNotifyFunction:u=>{n=u},setBatchNotifyFunction:u=>{r=u}}}var Oe=se(),ie="VUE_QUERY_CLIENT";function Se(e){const t=e?`:${e}`:"";return`${ie}${t}`}function Le(e,t){Object.keys(e).forEach(n=>{e[n]=t[n]})}function K(e,t){if(t){const n=t(e);if(n===void 0&&k(e)||n!==void 0)return n}if(Array.isArray(e))return e.map(n=>K(n,t));if(typeof e=="object"&&oe(e)){const n=Object.entries(e).map(([r,s])=>[r,K(s,t)]);return Object.fromEntries(n)}return e}function ue(e){return K(e,t=>{if(k(t))return ue(X(t))})}function oe(e){if(Object.prototype.toString.call(e)!=="[object Object]")return!1;const t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}function Pe(e,t){return typeof e=="function"?e(...t):!!e}export{q as S,U as a,Oe as b,je as c,Ee as d,re as e,be as f,ve as g,Z as h,he as i,me as j,ee as k,le as l,de as m,fe as n,Y as o,C as p,M as q,we as r,ue as s,ye as t,Se as u,pe as v,Le as w,Pe as x};
