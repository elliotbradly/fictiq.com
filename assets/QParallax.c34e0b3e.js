import{c as A,h as F}from"./render.0f74db1f.js";import{o as q,h as L}from"./use-size.7aba2b5f.js";import{g as I}from"./scroll.340d2add.js";import{r as g,s as R,v as O,x as Q,m as w,z as B}from"./index.01d7074a.js";function H(e){let a=!1,u,l;function o(){l=arguments,a!==!0&&(a=!0,u=requestAnimationFrame(()=>{e.apply(this,l),l=void 0,a=!1}))}return o.cancel=()=>{window.cancelAnimationFrame(u),a=!1},o}const{passive:p}=B;var C=A({name:"QParallax",props:{src:String,height:{type:Number,default:500},speed:{type:Number,default:1,validator:e=>e>=0&&e<=1},scrollTarget:{default:void 0},onScroll:Function},setup(e,{slots:a,emit:u}){const l=g(0),o=g(null),T=g(null),z=g(null);let i,t,E,f,s,r;R(()=>e.height,()=>{i===!0&&c()}),R(()=>e.scrollTarget,()=>{i===!0&&(S(),x())});let m=n=>{l.value=n,e.onScroll!==void 0&&u("scroll",n)};function c(){let n,d,h;r===window?(n=0,h=d=window.innerHeight):(n=q(r).top,d=L(r),h=n+d);const y=q(o.value).top,_=y+e.height;if(s!==void 0||_>n&&y<h){const P=(h-y)/(e.height+d);v((E-e.height)*P*e.speed),m(P)}}let v=n=>{t.style.transform=`translate3d(-50%,${Math.round(n)}px,0)`};function b(){E=t.naturalHeight||t.videoHeight||L(t),i===!0&&c()}function x(){i=!0,r=I(o.value,e.scrollTarget),r.addEventListener("scroll",c,p),window.addEventListener("resize",f,p),c()}function S(){i===!0&&(i=!1,r.removeEventListener("scroll",c,p),window.removeEventListener("resize",f,p),r=void 0,v.cancel(),m.cancel(),f.cancel())}return O(()=>{v=H(v),m=H(m),f=H(b),t=a.media!==void 0?T.value.children[0]:z.value,t.onload=t.onloadstart=t.loadedmetadata=b,b(),t.style.display="initial",window.IntersectionObserver!==void 0?(s=new IntersectionObserver(n=>{(n[0].isIntersecting===!0?x:S)()}),s.observe(o.value)):x()}),Q(()=>{S(),s!==void 0&&s.disconnect(),t.onload=t.onloadstart=t.loadedmetadata=null}),()=>w("div",{ref:o,class:"q-parallax",style:{height:`${e.height}px`}},[w("div",{ref:T,class:"q-parallax__media absolute-full"},a.media!==void 0?a.media():[w("img",{ref:z,src:e.src})]),w("div",{class:"q-parallax__content absolute-full column flex-center"},a.content!==void 0?a.content({percentScrolled:l.value}):F(a.default))])}});export{C as Q};