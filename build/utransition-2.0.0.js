!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var t=n();for(var o in t)("object"==typeof exports?exports:e)[o]=t[o]}}(this,function(){return function(e){function n(o){if(t[o])return t[o].exports;var r=t[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)}([function(e,n){"use strict";function t(e,n,t){if("number"!=typeof e)throw new TypeError(r.invalidDuration);if(e<=0)throw new RangeError(r.invalidDuration);if("function"!=typeof n)throw new TypeError(r.invalidTimer);if("function"!=typeof t)throw new TypeError(r.invalidEasing)}function o(e,n){function o(t){if(c)return f=i.stopped,void("function"==typeof v.onAbort&&v.onAbort());if(d)return f=i.paused,l=null,void("function"==typeof v.onPause&&v.onPause());if("number"!=typeof t)throw new TypeError(r.invalidTickTimestampType);l||(l=t,p||"function"!=typeof v.onStart?p&&"function"==typeof v.onResume&&v.onResume():(p=!0,v.onStart())),m+=(t-l)/e,b=a(m),t-l&&"function"==typeof v.onProgress&&v.onProgress(),l=t,m<1?n(o):(f=i.stopped,m=1,b=a(m),"function"==typeof v.onEnd&&v.onEnd())}var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u;t(e,n,a);var f=i.stopped,p=!1,c=!1,d=!1,l=void 0,m=0,b=0,v={onStart:s,onPause:s,onResume:s,onAbort:s,onProgress:s,onEnd:s,get state(){return f},get linearProgress(){return m},get easedProgress(){return b}};return Object.defineProperties(v,{play:{enumerable:!0,value:function(){d=!1,c=!1,f=i.inProgress,n(o)}},pause:{enumerable:!0,value:function(){d=!0}},abort:{enumerable:!0,value:function(){p=!1,c=!0,m=0,b=0}}}),v}Object.defineProperty(n,"__esModule",{value:!0}),n.default=o;var r={invalidDuration:"duration must be a positive non-zero number",invalidTimer:"timer must be a function",invalidTickTimestampType:"Expected to get tick timestamp, but got something else. Make sure your custom timer passes correct timestamp to tick handler",invalidEasing:"easing must be a function"},i={stopped:"stopped",paused:"paused",inProgress:"in progress"},u=function(e){return e},s=function(){}}])});