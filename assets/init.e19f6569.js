import{b as n}from"./index.0d9844b0.js";class e{constructor(){this.__stack={}}on(s,t,o){return(this.__stack[s]||(this.__stack[s]=[])).push({fn:t,ctx:o}),this}once(s,t,o){const i=(...c)=>{this.off(s,i),t.apply(o,c)};return i.__callback=t,this.on(s,i,o)}emit(s){const t=this.__stack[s];if(t!==void 0){const o=[].slice.call(arguments,1);t.forEach(i=>{i.fn.apply(i.ctx,o)})}return this}off(s,t){const o=this.__stack[s];if(o===void 0)return this;if(t===void 0)return delete this.__stack[s],this;const i=o.filter(c=>c.fn!==t&&c.fn.__callback!==t);return i.length!==0?this.__stack[s]=i:delete this.__stack[s],this}}var p=n(async r=>{const s=new e;var t=window;r.app.provide("SHADE",t.SHADE),r.app.provide("MQTT",t.MQTT),r.app.config.globalProperties.$bus=s,r.app.provide("bus",s);const i="mqtt://localhost:"+8883;await t.SHADE.hunt(t.SHADE.ActShd.INIT_SHADE,{val:0,src:i})});export{p as default};
