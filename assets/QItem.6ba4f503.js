import{c as f,h as E,b as L}from"./render.1cc9814a.js";import{c as u,h as o,r as d,F as S,G as I,q as K}from"./index.742df33c.js";import{u as Q,a as R}from"./use-dark.48a1b027.js";import{u as w,a as $}from"./use-router-link.ed23b227.js";var P=f({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:i}){const s=u(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>o("div",{class:s.value},E(i.default))}}),N=f({name:"QItem",props:{...Q,...w,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:i,emit:s}){const{proxy:{$q:r}}=K(),b=R(e,r),{hasLink:c,linkAttrs:q,linkClass:k,linkTag:h,navigateOnClick:y}=$(),n=d(null),l=d(null),v=u(()=>e.clickable===!0||c.value===!0||e.tag==="label"),a=u(()=>e.disable!==!0&&v.value===!0),g=u(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(b.value===!0?" q-item--dark":"")+(c.value===!0&&e.active===null?k.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(a.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),_=u(()=>{if(e.insetLevel===void 0)return null;const t=r.lang.rtl===!0?"Right":"Left";return{["padding"+t]:16+e.insetLevel*56+"px"}});function B(t){a.value===!0&&(l.value!==null&&(t.qKeyEvent!==!0&&document.activeElement===n.value?l.value.focus():document.activeElement===l.value&&n.value.focus()),y(t))}function C(t){if(a.value===!0&&S(t,13)===!0){I(t),t.qKeyEvent=!0;const m=new MouseEvent("click",t);m.qKeyEvent=!0,n.value.dispatchEvent(m)}s("keyup",t)}function x(){const t=L(i.default,[]);return a.value===!0&&t.unshift(o("div",{class:"q-focus-helper",tabindex:-1,ref:l})),t}return()=>{const t={ref:n,class:g.value,style:_.value,role:"listitem",onClick:B,onKeyup:C};return a.value===!0?(t.tabindex=e.tabindex||"0",Object.assign(t,q.value)):v.value===!0&&(t["aria-disabled"]="true"),o(h.value,t,x())}}});export{P as Q,N as a};
