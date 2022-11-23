module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1669197965754, function(require, module, exports) {
var global,factory;global=this,factory=function(){function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function t(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(Object(o),!0).forEach((function(e){s(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f="undefined"!=typeof wx&&"function"==typeof wx.getSystemInfoSync&&Boolean(wx.getSystemInfoSync().fontSizeSetting),u="undefined"!=typeof qq&&"function"==typeof qq.getSystemInfoSync&&Boolean(qq.getSystemInfoSync().fontSizeSetting),l="undefined"!=typeof tt&&"function"==typeof tt.getSystemInfoSync&&Boolean(tt.getSystemInfoSync().fontSizeSetting),c="undefined"!=typeof swan&&"function"==typeof swan.getSystemInfoSync&&Boolean(swan.getSystemInfoSync().fontSizeSetting),y="undefined"!=typeof my&&"function"==typeof my.getSystemInfoSync&&Boolean(my.getSystemInfoSync().fontSizeSetting),d="undefined"!=typeof uni&&"undefined"==typeof window,p=f||u||l||c||y||d,g=u?qq:l?tt:c?swan:y?my:f?wx:d?uni:{},h=function(e){if("object"!==n(e)||null===e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;for(var o=t;null!==Object.getPrototypeOf(o);)o=Object.getPrototypeOf(o);return t===o};function m(e){if(null==e)return!0;if("boolean"==typeof e)return!1;if("number"==typeof e)return 0===e;if("string"==typeof e)return 0===e.length;if("function"==typeof e)return 0===e.length;if(Array.isArray(e))return 0===e.length;if(e instanceof Error)return""===e.message;if(h(e)){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}return!1}var b=function(){function e(){o(this,e)}return a(e,[{key:"request",value:function(e,t){var n=this,o=e.downloadUrl||"",r=(e.method||"PUT").toUpperCase(),a=e.url;if(e.qs){var s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"&",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"=";return m(e)?"":h(e)?Object.keys(e).map((function(o){var r=encodeURIComponent(o)+n;return Array.isArray(e[o])?e[o].map((function(e){return r+encodeURIComponent(e)})).join(t):r+encodeURIComponent(e[o])})).filter(Boolean).join(t):void 0}(e.qs);s&&(a+="".concat(-1===a.indexOf("?")?"?":"&").concat(s))}var i=new XMLHttpRequest;i.open(r,a,!0),i.responseType=e.dataType||"text";var f=e.headers||{};if(!m(f))for(var u in f)f.hasOwnProperty(u)&&"content-length"!==u.toLowerCase()&&"user-agent"!==u.toLowerCase()&&"origin"!==u.toLowerCase()&&"host"!==u.toLowerCase()&&i.setRequestHeader(u,f[u]);return i.onload=function(){if(200===i.status)t(null,n._xhrRes(i,n._xhrBody(i,o)));else{var e={code:i.status,message:JSON.stringify(i.responseText)};t(e,n._xhrRes(i,n._xhrBody(i)))}},i.onerror=function(e){var o=n._xhrBody(i),r={code:i.status,message:JSON.stringify(i.responseText)};o||i.statusText||0!==i.status||(e.message="CORS blocked or network error"),t(r,n._xhrRes(i,o)),r=null},e.onProgress&&i.upload&&(i.upload.onprogress=function(t){var n=t.total,o=t.loaded,r=Math.floor(100*o/n);e.onProgress({total:n,loaded:o,percent:(r>=100?100:r)/100})}),i.send(e.resources),i}},{key:"_xhrRes",value:function(e,t){var n={};return e.getAllResponseHeaders().trim().split("\n").forEach((function(e){if(e){var t=e.indexOf(":"),o=e.substr(0,t).trim().toLowerCase(),r=e.substr(t+1).trim();n[o]=r}})),{statusCode:e.status,statusMessage:e.statusText,headers:n,data:t}}},{key:"_xhrBody",value:function(e,t){return 200===e.status&&t?{location:t}:{response:e.responseText}}}]),e}(),v=["unknown","image","video","audio","log"],O=["name"],S=function(){function e(){o(this,e)}return a(e,[{key:"request",value:function(e,n){var o=this,r=e.resources,a=void 0===r?"":r,s=e.headers,f=void 0===s?{}:s,u=e.url,l=e.downloadUrl,c=void 0===l?"":l,d=null,p="",h=c.match(/^(https?:\/\/[^/]+\/)([^/]*\/?)(.*)$/),m={url:u,header:f,name:"file",filePath:a,formData:{key:p=(p=decodeURIComponent(h[3])).indexOf("?")>-1?p.split("?")[0]:p,success_action_status:200,"Content-Type":""},timeout:e.timeout||3e5};if(y){var b=m;b.name,m=t(t({},i(b,O)),{},{fileName:"file",fileType:v[e.fileType]})}return(d=g.uploadFile(t(t({},m),{},{success:function(e){o._handleResponse({response:e,downloadUrl:c,callback:n})},fail:function(e){o._handleResponse({response:e,downloadUrl:c,callback:n})}}))).onProgressUpdate((function(t){e.onProgress&&e.onProgress({total:t.totalBytesExpectedToSend,loaded:t.totalBytesSent,percent:Math.floor(t.progress)/100})})),d}},{key:"_handleResponse",value:function(e){var n=e.downloadUrl,o=e.response,r=e.callback,a=o.header,s={};if(a)for(var i in a)a.hasOwnProperty(i)&&(s[i.toLowerCase()]=a[i]);var f=+o.statusCode;200===f?r(null,{statusCode:f,headers:s,data:t(t({},o.data),{},{location:n})}):r({code:f,message:JSON.stringify(o.data)},{statusCode:f,headers:s,data:void 0})}}]),e}();return function(){function e(){o(this,e),console.log("TIMUploadPlugin.VERSION: ".concat("1.0.6")),this.retry=1,this.tryCount=0,this.systemClockOffset=0,this.httpRequest=p?new S:new b}return a(e,[{key:"uploadFile",value:function(e,t){var n=this;return this.httpRequest.request(e,(function(o,r){o&&n.tryCount<n.retry&&n.allowRetry(o)?(n.tryCount++,n.uploadFile(e,t)):(n.tryCount=0,t(o,r))}))}},{key:"allowRetry",value:function(e){var t=!1,n=!1;if(e){var o=e.headers&&(e.headers.date||e.headers.Date)||e.error&&e.error.ServerTime;try{var r=e.error&&e.error.Code,a=e.error&&e.error.Message;("RequestTimeTooSkewed"===r||"AccessDenied"===r&&"Request has expired"===a)&&(n=!0)}catch(f){}if(n&&o){var s=Date.now(),i=Date.parse(o);Math.abs(s+this.systemClockOffset-i)>=3e4&&(this.systemClockOffset=i-s,t=!0)}else 5===Math.floor(e.statusCode/100)&&(t=!0)}return t}}]),e}()},"object"==typeof exports&&"undefined"!=typeof module?module.exports=factory():"function"==typeof define&&define.amd?define(factory):(global=global||self).TIMUploadPlugin=factory();

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1669197965754);
})()
//miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map