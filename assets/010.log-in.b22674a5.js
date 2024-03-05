import{Q as V}from"./QInput.d1e7c75b.js";import{c as I,h as R}from"./render.c3218040.js";import{r as A,z as k,a4 as j,a5 as U,l as E,h as D,q as N,G as F,p as O,a6 as z,d as L,H as G,I as H,D as J,o as K,a as M,w as m,J as p,e as c,u as b,i as B}from"./index.70775f12.js";import{a as T}from"./focus-manager.05708ea9.js";import{v as W}from"./use-router-link.dd34ded9.js";import{Q as P,a as X,b as Y}from"./QCard.0d369ba9.js";import{Q as Z}from"./QBtn.90b7a294.js";import{Q as $}from"./QPage.381b502a.js";import"./use-dark.73ca06c2.js";var ee=I({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(i,{slots:f,emit:l}){const y=N(),u=A(null);let s=0;const o=[];function n(e){const d=typeof e=="boolean"?e:i.noErrorFocus!==!0,g=++s,q=(t,a)=>{l("validation"+(t===!0?"Success":"Error"),a)},C=t=>{const a=t.validate();return typeof a.then=="function"?a.then(r=>({valid:r,comp:t}),r=>({valid:!1,comp:t,err:r})):Promise.resolve({valid:a,comp:t})};return(i.greedy===!0?Promise.all(o.map(C)).then(t=>t.filter(a=>a.valid!==!0)):o.reduce((t,a)=>t.then(()=>C(a).then(r=>{if(r.valid===!1)return Promise.reject(r)})),Promise.resolve()).catch(t=>[t])).then(t=>{if(t===void 0||t.length===0)return g===s&&q(!0),!0;if(g===s){const{comp:a,err:r}=t[0];if(r!==void 0&&console.error(r),q(!1,a),d===!0){const S=t.find(({comp:Q})=>typeof Q.focus=="function"&&W(Q.$)===!1);S!==void 0&&S.comp.focus()}}return!1})}function _(){s++,o.forEach(e=>{typeof e.resetValidation=="function"&&e.resetValidation()})}function h(e){e!==void 0&&F(e);const d=s+1;n().then(g=>{d===s&&g===!0&&(i.onSubmit!==void 0?l("submit",e):e!==void 0&&e.target!==void 0&&typeof e.target.submit=="function"&&e.target.submit())})}function x(e){e!==void 0&&F(e),l("reset"),O(()=>{_(),i.autofocus===!0&&i.noResetFocus!==!0&&v()})}function v(){T(()=>{if(u.value===null)return;const e=u.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(u.value.querySelectorAll("[tabindex]"),d=>d.tabIndex>-1);e!=null&&e.focus({preventScroll:!0})})}k(z,{bindComponent(e){o.push(e)},unbindComponent(e){const d=o.indexOf(e);d>-1&&o.splice(d,1)}});let w=!1;return j(()=>{w=!0}),U(()=>{w===!0&&i.autofocus===!0&&v()}),E(()=>{i.autofocus===!0&&v()}),Object.assign(y.proxy,{validate:n,resetValidation:_,submit:h,reset:x,focus:v,getValidationComponents:()=>o}),()=>D("form",{class:"q-form",ref:u,onSubmit:h,onReset:x},R(f.default))}});const te={class:"column"},oe=p("div",{class:"row"},[p("h5",{class:"text-h5 text-white q-my-md generis-font text-primary"}," Fictiq ")],-1),ae={class:"row"},se=p("p",{class:"text-grey-6"},"Not reigistered? Created an Account",-1),ne=L({name:"Login Screen"}),ge=Object.assign(ne,{setup(i){var f="email",l="password";A("style");const y=G();var u=s=>{y.push("/"+s)};return E(async s=>{}),H(async()=>{}),J(async()=>{}),(s,o)=>(K(),M($,{class:"bg-grey window-height window-width row justify-center items-center"},{default:m(()=>[p("div",te,[oe,p("div",ae,[c(Y,{square:"",bordered:"",class:"q-pa-lg shadow-1 bg-black"},{default:m(()=>[c(P,null,{default:m(()=>[c(ee,{class:"q-gutter-md"},{default:m(()=>[c(V,{square:"",filled:"",clearable:"",modelValue:b(f),"onUpdate:modelValue":o[0]||(o[0]=n=>B(f)?f.value=n:f=n),type:"email",label:"email"},null,8,["modelValue"]),c(V,{square:"",filled:"",clearable:"",modelValue:b(l),"onUpdate:modelValue":o[1]||(o[1]=n=>B(l)?l.value=n:l=n),type:"password",label:"password"},null,8,["modelValue"])]),_:1})]),_:1}),c(X,{class:"q-px-md"},{default:m(()=>[c(Z,{unelevated:"",color:"light-green-7",size:"lg",class:"full-width",label:"Login",onClick:o[2]||(o[2]=n=>b(u)("player"))})]),_:1}),c(P,{class:"text-center q-pa-none"},{default:m(()=>[se]),_:1})]),_:1})])])]),_:1}))}});export{ge as default};