(self.webpackChunkcanvas_blog=self.webpackChunkcanvas_blog||[]).push([[465],{465:(t,n,e)=>{"use strict";e.r(n),e.d(n,{EventEmitter:()=>i});var o=function(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var o,r,i=e.call(t),f=[];try{for(;(void 0===n||n-- >0)&&!(o=i.next()).done;)f.push(o.value)}catch(t){r={error:t}}finally{try{o&&!o.done&&(e=i.return)&&e.call(i)}finally{if(r)throw r.error}}return f},r=function(t,n){for(var e=0,o=n.length,r=t.length;e<o;e++,r++)t[r]=n[e];return t},i=function(){function t(){this.events={}}return t.prototype.on=function(t,n){var e;this.events[t]=null!==(e=this.events[t])&&void 0!==e?e:[],this.events[t].push(n)},t.prototype.off=function(t){this.events[t]&&delete this.events[t]},t.prototype.once=function(t,n){var e=this;this.on(t,(function(){for(var o=[],r=0;r<arguments.length;r++)o[r]=arguments[r];n(o),e.off(t)}))},t.prototype.trigger=function(t){for(var n,e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];null===(n=this.events[t])||void 0===n||n.forEach((function(t){t.apply(void 0,r([],o(e)))}))},t}()}}]);