!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t){"use strict";function n(e,t){function n(o){if(c)return void("function"==typeof s.onAbort&&s.onAbort());p||(p=o,"function"==typeof s.onStart&&s.onStart());var r=(o-p)/e,i=u(r);"function"==typeof s.onProgress&&s.onProgress(i,r),r<1?t(n):"function"==typeof s.onEnd&&s.onEnd()}var u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r;if("number"!=typeof e)throw new TypeError(o.invalidDuration);if(e<=0)throw new RangeError(o.invalidDuration);if("function"!=typeof t)throw new TypeError(o.invalidTimer);var a=void 0,f=void 0;if(t(function(e){a=e}),t(function(e){f=e}),"number"!=typeof a||"number"!=typeof f)throw new TypeError(o.invalidTickTimestampType);if(a>f)throw new Error(o.invalidTickTimestampValue);var s={onStart:i,onProgress:i,onEnd:i,onAbort:i};Object.defineProperties(s,{start:{enumerable:!0,value:function(){t(n)}},abort:{enumerable:!0,value:function(){c=!0}}});var c=!1,p=void 0;return s}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var o={invalidDuration:"duration must be a positive non-zero number",invalidTimer:"timer must be a function",invalidTickTimestampType:"Expected to get tick timestamp, but got something else. Make sure your custom timer passes correct timestamp to tick handler",invalidTickTimestampValue:"Timer works incorrectly, it should return increasing values but not decreasing"},r=function(e){return e},i=function(){}}])});