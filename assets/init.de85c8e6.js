import{b as e}from"./index.46cd18b6.js";class c{constructor(){this.__stack={}}on(s,t,o){return(this.__stack[s]||(this.__stack[s]=[])).push({fn:t,ctx:o}),this}once(s,t,o){const i=(...r)=>{this.off(s,i),t.apply(o,r)};return i.__callback=t,this.on(s,i,o)}emit(s){const t=this.__stack[s];if(t!==void 0){const o=[].slice.call(arguments,1);t.forEach(i=>{i.fn.apply(i.ctx,o)})}return this}off(s,t){const o=this.__stack[s];if(o===void 0)return this;if(t===void 0)return delete this.__stack[s],this;const i=o.filter(r=>r.fn!==t&&r.fn.__callback!==t);return i.length!==0?this.__stack[s]=i:delete this.__stack[s],this}}var l=e(async n=>{const s=new c;var t=window;n.app.provide("SHADE",t.SHADE),n.app.provide("MQTT",t.MQTT),n.app.config.globalProperties.$bus=s,n.app.provide("bus",s);const i="mqtt://localhost:"+8883;var r=await t.SHADE.hunt(t.SHADE.ActShd.INIT_SHADE,{val:0,src:i}),r=await window.electronAPI.openGame();console.log(JSON.stringify(r))});export{l as default};
