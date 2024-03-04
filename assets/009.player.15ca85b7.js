import{a as M,Q as o}from"./QBtn.21f0ab63.js";import{Q as U}from"./QBtnGroup.538dce71.js";import{Q as c,a as u,b as m}from"./QCard.650f9061.js";import{Q as O}from"./QSeparator.680f9d64.js";import{c as S,r as h,B as V,m as F,h as g,T as L,v as G,q as J,d as W,H as K,l as X,I as Y,D as Z,o as aa,a as ea,w as t,J as j,e as a,g as w,t as z,u as x}from"./index.3e684c78.js";import{c as ta,h as oa}from"./render.c63c0259.js";import{Q as la}from"./QPage.062a8375.js";import{M as ra}from"./visage.action.a9fa12e7.js";import"./use-router-link.8b567203.js";import"./use-dark.3d4ee41d.js";const na={ratio:[String,Number]};function ia(e,r){return S(()=>{const s=Number(e.ratio||(r!==void 0?r.value:void 0));return isNaN(s)!==!0&&s>0?{paddingBottom:`${100/s}%`}:null})}const sa=16/9;var v=ta({name:"QImg",props:{...na,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:sa},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:r,emit:s}){const n=h(e.initialRatio),y=ia(e,n);let i=null,b=!1;const d=[h(null),h(C())],f=h(0),_=h(!1),p=h(!1),$=S(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),I=S(()=>({width:e.width,height:e.height})),P=S(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),R=S(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));V(()=>Q(),T);function Q(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function C(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function T(l){i!==null&&(clearTimeout(i),i=null),p.value=!1,l===null?(_.value=!1,d[f.value^1].value=C()):_.value=!0,d[f.value].value=l}function D({target:l}){b!==!0&&(i!==null&&(clearTimeout(i),i=null),n.value=l.naturalHeight===0?.5:l.naturalWidth/l.naturalHeight,B(l,1))}function B(l,q){b===!0||q===1e3||(l.complete===!0?E(l):i=setTimeout(()=>{i=null,B(l,q+1)},50))}function E(l){b!==!0&&(f.value=f.value^1,d[f.value].value=null,_.value=!1,p.value=!1,s("load",l.currentSrc||l.src))}function H(l){i!==null&&(clearTimeout(i),i=null),_.value=!1,p.value=!0,d[f.value].value=null,d[f.value^1].value=C(),s("error",l)}function N(l){const q=d[l].value,k={key:"img_"+l,class:P.value,style:R.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...q};return f.value===l?(k.class+=" q-img__image--waiting",Object.assign(k,{onLoad:D,onError:H})):k.class+=" q-img__image--loaded",g("div",{class:"q-img__container absolute-full",key:"img"+l},g("img",k))}function A(){return _.value!==!0?g("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},oa(r[p.value===!0?"error":"default"])):g("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},r.loading!==void 0?r.loading():e.noSpinner===!0?void 0:[g(M,{color:e.spinnerColor,size:e.spinnerSize})])}return T(Q()),F(()=>{b=!0,i!==null&&(clearTimeout(i),i=null)}),()=>{const l=[];return y.value!==null&&l.push(g("div",{key:"filler",style:y.value})),p.value!==!0&&(d[0].value!==null&&l.push(N(0)),d[1].value!==null&&l.push(N(1))),l.push(g(L,{name:"q-transition--fade"},A)),g("div",{class:$.value,style:I.value,role:"img","aria-label":e.alt},l)}}});const ca=async e=>{var n;console.log("sampleFunc:: ",e);const r=J();return await G("SHADE").hunt(ra,{idx:"vsg00",src:"indexCanvas",dat:{w:96,h:96}}),(n=r==null?void 0:r.proxy)==null||n.$forceUpdate(),e},ua={class:"q-pa-md"},da=j("iframe",{src:"https://player.twitch.tv/?channel=glopratchet&parent=fictiq.com&muted=true",height:"384",width:"640",allowfullscreen:""},`\r
      `,-1),fa={class:"",style:{width:"320px",position:"absolute",top:"30px",left:"50%","margin-left":"-180px"}},ma=j("canvas",{class:"col-5",id:"indexCanvas"},null,-1),ga=W({name:"TitleScreen"}),Ca=Object.assign(ga,{setup(e){h("style");var r="Lorem ipsum dolor, sit";return K(),X(async s=>{ca("on")}),Y(async()=>{}),Z(async()=>{}),(s,n)=>(aa(),ea(la,{class:"row justify-center text-center"},{default:t(()=>[j("div",ua,[da,a(U,{push:""},{default:t(()=>[a(o,{outline:"",label:"left",onClick:n[0]||(n[0]=y=>s.visitPage("map"))}),a(o,{outline:"",label:"forward",onClick:n[1]||(n[1]=y=>s.visitPage("map"))}),a(o,{outline:"",label:"backward",onClick:n[2]||(n[2]=y=>s.visitPage("map"))}),a(o,{outline:"",label:"right",onClick:n[3]||(n[3]=y=>s.visitPage("map"))})]),_:1}),j("div",fa,[a(u,{class:"my-card",flat:"",bordered:""},{default:t(()=>[a(c,{horizontal:""},{default:t(()=>[a(c,null,{default:t(()=>[w(z(x(r)),1)]),_:1}),ma]),_:1})]),_:1}),a(u,{class:"my-card",flat:"",bordered:""},{default:t(()=>[a(c,{horizontal:""},{default:t(()=>[a(c,null,{default:t(()=>[w(z(x(r)),1)]),_:1}),a(O,{vertical:""}),a(c,null,{default:t(()=>[w(z(x(r)),1)]),_:1})]),_:1})]),_:1}),a(u,{class:"my-card",flat:"",bordered:""},{default:t(()=>[a(c,{horizontal:""},{default:t(()=>[a(v,{class:"col",src:"https://cdn.quasar.dev/img/mountains.jpg"}),a(m,{vertical:"",class:"justify-around q-px-md"},{default:t(()=>[a(o,{flat:"",round:"",color:"red",icon:"favorite"}),a(o,{flat:"",round:"",color:"accent",icon:"bookmark"}),a(o,{flat:"",round:"",color:"primary",icon:"share"})]),_:1})]),_:1})]),_:1}),a(u,{class:"my-card",flat:"",bordered:""},{default:t(()=>[a(c,{horizontal:""},{default:t(()=>[a(v,{class:"col",src:"https://cdn.quasar.dev/img/mountains.jpg"}),a(m,{vertical:"",class:"justify-around q-px-md"},{default:t(()=>[a(o,{flat:"",round:"",color:"red",icon:"favorite"}),a(o,{flat:"",round:"",color:"accent",icon:"bookmark"}),a(o,{flat:"",round:"",color:"primary",icon:"share"})]),_:1})]),_:1})]),_:1}),a(u,{class:"my-card",flat:"",bordered:""},{default:t(()=>[a(c,{horizontal:""},{default:t(()=>[a(v,{class:"col",src:"https://cdn.quasar.dev/img/mountains.jpg"}),a(m,{vertical:"",class:"justify-around q-px-md"},{default:t(()=>[a(o,{flat:"",round:"",color:"red",icon:"favorite"}),a(o,{flat:"",round:"",color:"accent",icon:"bookmark"}),a(o,{flat:"",round:"",color:"primary",icon:"share"})]),_:1})]),_:1})]),_:1}),a(u,{class:"my-card",flat:"",bordered:""},{default:t(()=>[a(c,{horizontal:""},{default:t(()=>[a(v,{class:"col",src:"https://cdn.quasar.dev/img/mountains.jpg"}),a(m,{vertical:"",class:"justify-around q-px-md"},{default:t(()=>[a(o,{flat:"",round:"",color:"red",icon:"favorite"}),a(o,{flat:"",round:"",color:"accent",icon:"bookmark"}),a(o,{flat:"",round:"",color:"primary",icon:"share"})]),_:1})]),_:1})]),_:1}),a(u,{class:"my-card",flat:"",bordered:""},{default:t(()=>[a(c,{horizontal:""},{default:t(()=>[a(v,{class:"col",src:"https://cdn.quasar.dev/img/mountains.jpg"}),a(m,{vertical:"",class:"justify-around q-px-md"},{default:t(()=>[a(o,{flat:"",round:"",color:"red",icon:"favorite"}),a(o,{flat:"",round:"",color:"accent",icon:"bookmark"}),a(o,{flat:"",round:"",color:"primary",icon:"share"})]),_:1})]),_:1})]),_:1}),a(u,{class:"my-card",flat:"",bordered:""},{default:t(()=>[a(c,{horizontal:""},{default:t(()=>[a(v,{class:"col",src:"https://cdn.quasar.dev/img/mountains.jpg"}),a(m,{vertical:"",class:"justify-around q-px-md"},{default:t(()=>[a(o,{flat:"",round:"",color:"red",icon:"favorite"}),a(o,{flat:"",round:"",color:"accent",icon:"bookmark"}),a(o,{flat:"",round:"",color:"primary",icon:"share"})]),_:1})]),_:1})]),_:1}),a(u,{class:"my-card",flat:"",bordered:""},{default:t(()=>[a(c,{horizontal:""},{default:t(()=>[a(v,{class:"col",src:"https://cdn.quasar.dev/img/mountains.jpg"}),a(m,{vertical:"",class:"justify-around q-px-md"},{default:t(()=>[a(o,{flat:"",round:"",color:"red",icon:"favorite"}),a(o,{flat:"",round:"",color:"accent",icon:"bookmark"}),a(o,{flat:"",round:"",color:"primary",icon:"share"})]),_:1})]),_:1})]),_:1}),a(u,{class:"my-card",flat:"",bordered:""},{default:t(()=>[a(c,{horizontal:""},{default:t(()=>[a(v,{class:"col",src:"https://cdn.quasar.dev/img/mountains.jpg"}),a(m,{vertical:"",class:"justify-around q-px-md"},{default:t(()=>[a(o,{flat:"",round:"",color:"red",icon:"favorite"}),a(o,{flat:"",round:"",color:"accent",icon:"bookmark"}),a(o,{flat:"",round:"",color:"primary",icon:"share"})]),_:1})]),_:1})]),_:1})])])]),_:1}))}});export{Ca as default};
