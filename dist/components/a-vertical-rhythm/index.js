var StyleGuideWebComponent=function(){"use strict";var t,n,i,o,e=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight(function(t,e){return e(t)},t)}},r={},b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},a=function(){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}}(),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},u=function t(e,n,o){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},p=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},h=function(t,e){var n={};for(var o in t)0<=e.indexOf(o)||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},d=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},c=function t(e,n,o,r){var i=Object.getOwnPropertyDescriptor(e,n);if(void 0===i){var a=Object.getPrototypeOf(e);null!==a&&t(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},f=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},O=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)},v=(t=Object,n=t.getPrototypeOf||function(t){return t.__proto__},i=t.setPrototypeOf||function(t,e){return t.__proto__=e,t},o="object"===("undefined"==typeof Reflect?"undefined":b(Reflect))?Reflect.construct:function(t,e,n){var o,r=[null];return r.push.apply(r,e),o=t.bind.apply(t,r),i(new o,n.prototype)},function(t){var e=n(t);return i(t,i(function(){return o(e,arguments,n(this).constructor)},e))}),y=function(n){return v(function(t){function e(){return l(this,e),d(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return p(e,n),a(e,[{key:"init",value:function(){var t;this._id=((t=this.nodeName)in r||(r[t]=0),++r[t]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}}]),e}())},_={},g=function(){try{var t=new window.CustomEvent("test",{cancelable:!0});if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(t){}return e;function e(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=e.bubbles,o=void 0!==n&&n,r=e.cancelable,i=void 0!==r&&r,a=e.detail,s=void 0===a?void 0:a,c=document.createEvent("CustomEvent");c.initCustomEvent(t,o,i,s);var l=c.preventDefault;return c.preventDefault=function(){l.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},c}}();function m(t,e,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=new g(e,s({},o,{detail:n}));return t.dispatchEvent(r)}var x=function(){var t=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=Object.defineProperty({},"passive",{get:function(){t=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,e),window.removeEventListener("testPassiveEventSupport",n,e)}return t}();function C(t){for(var r=t.className,i=!1,a=!0,e=arguments.length,n=Array(1<e?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];var s=n.map(function(t){var e=(n=t,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",o)).test(r);var n,o;e?i=!0:a=!1;return{className:t,hasClass:e}});return!(!a&&!i)&&s}var k=/\s+/,w={transitionend:function(){for(var t=document.createElement("div").style,e={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(e),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==t[r=n[i]])return e[r];return""}()};function T(n,t,o,r){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=e.capture,a=void 0!==i&&i,s=e.passive,c=void 0===s||s;if(w[t]&&(t=w[t]),!n||!t)return null;var l=void 0===o?"undefined":b(o),u=o&&"string"===l;if("function"===l){if(r){var p=r;a=p.capture,c=p.passive}r=o}for(var h=x?{capture:a,passive:c}:a,d=u?function(t){var e=t.target;for(;!C(e,o)&&e!==n;)e=e.parentNode;if(e!==n)return r(t,e)}:r,f=t.split(k),v=f.length,y=0;y<v;++y)n.addEventListener(f[y],d,h);return function t(){for(var e=0;e<v;++e)n.removeEventListener(f[e],d,h);!function(t,e){if(!t)return;for(var n=Object.keys(t),o=n.length,r=0;r<o;++r){var i=n[r];if(t[i]===e)return delete t[i]}}(this,t)}}function j(o){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},e=t.leading,i=void 0!==e&&e,n=t.trailing,a=void 0===n||n,s=t.maxWait,c=void 0!==s&&s,l=void 0,u=void 0,p=void 0,h=void 0,d=!1,f=r!==c,v=!1!==c;function y(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return l=e,f&&(u&&clearTimeout(u),u=setTimeout(b,r)),v&&!p&&(p=setTimeout(_,c)),i&&!d&&(d=!0,h=o.apply(void 0,O(l))),h}return y.flush=function(){(u||p)&&(h=o.apply(void 0,O(l)));return m(),h},y.cancel=m,y;function b(){p&&clearTimeout(p),g()}function _(){u&&clearTimeout(u),g()}function g(){a&&(h=o.apply(void 0,O(l))),p=u=null,d=!1}function m(){u&&(clearTimeout(u),u=null),p&&(clearTimeout(p),p=null),l=void 0,d=!1}}window.__subscriptions=window.__subscriptions||{};var P=window.__subscriptions;function N(t,e){var n=T(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,t,e);P[t]||(P[t]={count:0});var o,r=P[t];return r.count++,r.onsubscribe||(r.onsubscribe=j((o=t,function(){m(document,"pubsub/onsubscribe",o),m(document,"pubsub/onsubscribe/"+o,o),P[o]&&delete P[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete P[t]}}T(document,"pubsub/onsubscribe",function(t){var e=t.detail;P[e]||(P[e]={count:0});var n=P[e],o=n.queue;Array.isArray(o)&&(o.forEach(function(t){var e=f(t,3),n=e[0],o=e[1],r=e[2];m(r,n,o)}),delete n.queue)});var E,A=function(t,e){return t===e},S=((E=function(){var t;return(t=console).log.apply(t,arguments)},function(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:A;return function(){for(var t=arguments.length,o=Array(t),e=0;e<t;e++)o[e]=arguments[e];return function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(){return r.apply(void 0,[].concat(o,e))?E.apply(void 0,arguments):void 0}}}})()(!0),[]);var R=1,D=3,L=8;function U(t,e){var n=t.nodeType;n===R&&function(t,e){for(var n=e.skipChildren&&e.skipChildren(),o=e.constructor.observedAttributes,r=o&&Array.isArray(o)&&o.length,i=function(t){return n&&r&&-1===o.indexOf(t)},a=e.attributes,s=t.attributes,c=null,l=null,u=null,p=null,h=s.length-1;0<=h;--h)if(p=s[h],u=p.name,c=p.namespaceURI,l=p.value,!i(u))if(c){var d=p.localName;e.getAttributeNS(c,d||u)!==l&&e.setAttributeNS(c,u,l)}else e.hasAttribute(u)?e.getAttribute(u)!==l&&("null"===l||"undefined"===l?e.removeAttribute(u):e.setAttribute(u,l)):e.setAttribute(u,l);for(var f=a.length-1;0<=f;--f)if(!1!==(p=a[f]).specified){if(u=p.name,c=p.namespaceURI,i(u))continue;c?(u=p.localName||u,t.hasAttributeNS(c,u)||e.removeAttributeNS(c,u)):t.hasAttributeNS(null,u)||e.removeAttribute(u)}}(t,e),n!==D&&n!==L||e.nodeValue===t.nodeValue||(e.nodeValue=t.nodeValue)}function I(t,e){var n=t.nodeName;"INPUT"===n?function(t,e){var n=t.value,o=e.value;M(t,e,"checked"),M(t,e,"disabled"),n!==o&&(e.setAttribute("value",n),e.value=n);"null"===n&&(e.value="",e.removeAttribute("value"));t.hasAttributeNS(null,"value")?"range"===e.type&&(e.value=n):e.removeAttribute("value")}(t,e):"OPTION"===n?M(t,e,"selected"):"TEXTAREA"===n?function(t,e){var n=t.value;n!==e.value&&(e.value=n);if(e.firstChild&&e.firstChild.nodeValue!==n){if(""===n&&e.firstChild.nodeValue===e.placeholder)return;e.firstChild.nodeValue=n}}(t,e):"SELECT"===n&&function(t,e){var n=-1,o=0,r=e.firstChild,i=void 0,a=void 0;for(;r;)if("OPTGROUP"===(a=r.nodeName&&r.nodeName.toUpperCase()))r=(i=r).firstChild;else{if("OPTION"===a){if(r.hasAttributeNS(null,"selected")){n=o;break}o+=1}!(r=r.nextSibling)&&i&&(r=i.nextSibling,i=null)}e.selectedIndex=n}(0,e)}function M(t,e,n){t[n]!==e[n]&&(e[n]=t[n],t[n]?e.setAttribute(n,""):e.removeAttribute(n))}var z=3;function q(t,e){return e?t?t.isSameNode&&t.isSameNode(e)?e:t.tagName!==e.tagName?t:(U(t,e),e.skipChildren&&e.skipChildren()||function(t,e){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=e.childNodes[s],o=t.childNodes[s-a],n||o;s++)if(o)if(n)if(F(o,n))(r=q(o,n))!==n&&(e.replaceChild(r,n),a++);else{i=null;for(var c=s;c<e.childNodes.length;c++)if(F(e.childNodes[c],o)){i=e.childNodes[c];break}i?((r=q(o,i))!==i&&a++,e.insertBefore(r,n)):o.id||n.id?(e.insertBefore(o,n),a++):(r=q(o,n))!==n&&(e.replaceChild(r,n),a++)}else e.appendChild(o),a++;else e.removeChild(n),s--}(t,e),I(t,e),e):null:t}function F(t,e){return t.id?t.id===e.id:t.isSameNode?t.isSameNode(e):t.tagName===e.tagName&&(t.type===z&&t.nodeValue===e.nodeValue)}var V,K,H,W,G=(V=Object,K=V.getPrototypeOf||function(t){return t.__proto__},H=V.setPrototypeOf||function(t,e){return t.__proto__=e,t},W="object"===("undefined"==typeof Reflect?"undefined":b(Reflect))?Reflect.construct:function(t,e,n){var o,r=[null];return r.push.apply(r,e),o=t.bind.apply(t,r),H(new o,n.prototype)},function(t){var e=K(t);return H(t,H(function(){return W(e,arguments,K(this).constructor)},e))})(function(t){function s(t){var e;l(this,s);for(var n="\n    Web Component "+t.nodeName+"%c#"+t._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,r=Array(1<o?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];var a=d(this,(e=s.__proto__||Object.getPrototypeOf(s)).call.apply(e,[this,n].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return p(s,t),s}(Error)),B=!!document.createDocumentFragment().children;var $=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(t){o[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(t){return!1}})()&&Object.assign;var Z="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function X(){}var Q,tt=(function(t){t.exports=function(){function t(t,e,n,o,r,i){if(i!==Z){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}var n={array:t.isRequired=t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return n.checkPropTypes=X,n.PropTypes=n}()}(Q={exports:{}},Q.exports),Q.exports),et=0;function nt(t,e){var n=t[e];return"function"==typeof n&&(t[e]=function(e){function n(){return e.apply(void 0,arguments)}return 0===et&&(et++,Object.keys(e).map(function(t){return n[t]=e[t],t}).reduce(nt,n),et--),n}(n)),t}var ot=tt;Object.keys(ot).reduce(nt,ot);var rt=ot.oneOf(["left","center","right"]),it=ot.oneOf(["left","right"]),at=(ot.oneOf(["top","bottom"]),ot.oneOf(["up","down"])),st=ot.oneOf(["ok","pending","error","unknown"]),ct=ot.oneOf(["row","col","rowgroup","colgroup","auto"]),lt=ot.oneOfType([ot.string,ot.number]),ut={text:lt,value:ot.any,rowspan:lt,colspan:lt,scope:ct,align:rt,dense:ot.bool},pt={float:it,strong:ot.bool,bold:ot.bool},ht=ot.oneOfType([ot.string,ot.number]),dt=ot.oneOfType([ht,ot.shape(s({},ut,{sort:at,sortActive:ot.bool}))]),ft=ot.oneOfType([ht,ot.shape(s({},ut,pt,{action:ot.bool,state:st}))]),vt=ot.oneOfType([ht,ot.shape(s({},ut,pt))]),yt=ot.oneOfType([ot.arrayOf(dt),ot.shape({cells:ot.arrayOf(dt)})]),bt=ot.oneOfType([ot.arrayOf(ft),ot.shape({cells:ot.arrayOf(ft),action:ot.bool})]),_t=ot.oneOfType([ot.arrayOf(vt),ot.shape({cells:ot.arrayOf(vt)})]),gt=(ot.oneOfType([yt,ot.arrayOf(yt)]),ot.oneOfType([bt,ot.arrayOf(bt)]),ot.oneOfType([_t,ot.arrayOf(_t)]),/[A-Z]/g);function mt(t){return t.replace(gt,Ot)}function Ot(t,e,n){var o=t.toLowerCase(),r=n.charAt(e+1);return 0===e||r.toUpperCase()===r?o:"-"+o}var xt=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Ct(e,n,t){var o=e;if(t)return function(e,n,t){var o=e;switch(t){case ot.string:case ot.string.isRequired:return e;case ot.bool:case ot.bool.isRequired:if(!e||n===e)return!0;case ot.number:case ot.number.isRequired:case ot.object:case ot.object.isRequired:case ot.array:case ot.array.isRequired:default:if(xt.test(e))try{o=JSON.parse(e)}catch(t){console.error("Attribute "+n+" has an error:\n"+t+"\n",e)}}return o}(e,n,t);if(e&&n!==e){if(xt.test(e))try{o=JSON.parse(e)}catch(t){console.error("Attribute "+n+" has an error:\n"+t+"\n",e)}}else o=!0;return o}var kt=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,wt=/[-_]+/g;function Tt(t){return t.replace(kt,jt)}function jt(t,e){return 0==+t||wt.test(t)?"":0===e?t.toLowerCase():t.toUpperCase()}function Pt(t,e,n){var o=1===t.nodeType,r=t.constructor.propTypes,i=n;!n&&o&&(i=(void 0===r?{}:r)[Tt(e)]);if(o&&!t.hasAttribute(e))return i!==ot.bool&&i!==ot.bool.isRequired&&void 0;var a=t.value;return e?a=t.getAttribute(e):e=t.name,a=Ct(a,e,i)}var Nt=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Et(n,t,o){var e,r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=r.capture,a=void 0===i||i,s=r.passive,c=void 0===s||s,l=n.ownerDocument.documentElement,u=T(l,t,function(t){var e=t.target;if(!n.contains(e)&&n!==e)return o(t)},{capture:a,passive:c});return e=l,Nt&&(e.style.cursor="pointer"),u}var At=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];for(var o=e.length,r={},i=0;i<o;++i){var a=e[i];r[a.toUpperCase()]=a}return r}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize","paste"),St="axa-change",Rt="data-prevent-default";(function(){function o(t){var i=this,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};l(this,o),this._handleClick=function(t,e){i.shouldPreventDefault(e||t.currentTarget)&&t.preventDefault();var n=!i._lastToggleNode,o=e!==i._lastToggleNode,r=!n&&!o;n?(i._notify(At.ENTER,e),i._onInteractive()):o&&i._notify(At.MOVE,e,i._lastToggleNode),i._lastToggleNode=e,r&&i._options.sameClickClose&&i._close()},this._handleClose=function(t,e){i.shouldPreventDefault(e||t.currentTarget)&&t.preventDefault(),i._close()},this._handleKeyUp=function(t){(t.key===At.ESCAPE||t.key===At.ESC||27===t.keyCode)&&(t.preventDefault(),i._close())},this._init(t,e)}return a(o,[{key:"_init",value:function(t,e){t&&(this._wcNode=t),e&&(this._options=s({},o.DEFAULTS,e));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=T(this._container,At.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive();var t=this._container,e=this._options,n=e.closeClass,o=e.outerClose,r=e.escapeClose,i=e.preventDefault;n&&(this._unCloseClick=T(t,At.CLICK,n,this._handleClose,{passive:!i})),o&&(this._unOuterClick=Et(t,At.CLICK,this._handleClose,{passive:!i})),r&&(this._unCloseEscape=T(t.ownerDocument,At.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(t){return t.hasAttribute(Rt)?Pt(t,Rt):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(At.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(t,e,n){t in this&&"function"==typeof this[t]&&this[t](e,n)}},{key:"enter",value:function(t){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(t,e){}},{key:"leave",value:function(t){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),o}()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Dt=e(function(n){var t,e;return e=t=function(t){function e(){return l(this,e),d(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return p(e,n),e}(),t.version="2.0.1-beta.242",e},function(e){return function(t){function n(){return l(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,e),a(n,[{key:"init",value:function(t){var e=this;u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,t),this._makeContextReady=function(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;e.contextNode&&(clearTimeout(e.timeoutId),e.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),e.unContextEnabled&&e.unContextEnabled(),e.unContextEnabled=N("context/available",e._makeContextReady)}}},{key:"connectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var t=this.nodeName.toLowerCase();this.__isContext=!0,function(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;P[t]||(P[t]={count:0,queue:[]});var o=P[t].queue;Array.isArray(o)?o.push([t,e,n]):m(n,t,e)}("context/available",this.__contextName=t)}},{key:"consumeContext",value:function(t){this.__consumedContext=t&&t.toLowerCase()}},{key:"contextNode",get:function(){for(var t=this.__consumedContext,e=this.parentNode;e&&(!e.__isContext||t&&t!==e.__contextName);)e=e.parentNode;return!(!e||!e.__isContext)&&e}}]),n}()},function(e){return function(t){function n(){return l(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,e),a(n,[{key:"appendChild",value:function(t){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(t),this.render()):u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,t)}},{key:"innerText",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",t,this)}},{key:"textContent",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",t,this)}},{key:"innerHTML",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createElement("div");e.innerHTML=t,this._lightDOMRefs=Array.from(e.children),this.render()}else c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",t,this)}}]),n}()},function(e){return function(t){function i(){return l(this,i),d(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return p(i,e),a(i,[{key:"init",value:function(t){var e=this;u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,t),this._isConnected=!1,this.props={},this.updatedDebounced=j(function(){return e.updated&&e.updated()},50);var n=this.constructor.observedAttributes;Array.isArray(n)&&n.forEach(function(t){Tt(t)})}},{key:"connectedCallback",value:function(){var o=this;if(u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(t)){var r=this.constructor.propTypes;t.forEach(function(t){var e=Tt(t);if(o.hasAttribute(t)){var n=Pt(o,t,r[e]);o.props[e]=n}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(t,e,n){if(u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this,t,e,n),this.shouldUpdateCallback(n,e)){var o=Tt(t);if(this.hasAttribute(t)){var r=this.constructor.propTypes;this.props[o]=Ct(n,t,r[o])}else this.props[o]=null;this.checkPropTypes(),"value"===t&&null!==n&&m(this,St,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(t){var a=this;u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this);var e=this.constructor.observedAttributes,n=void 0===e?[]:e,o=Object.keys(t).filter(function(t){return-1<n.indexOf(mt(t))}).reduce(function(t,e){var n=t.props,o=t.shouldUpdate,r=n[e],i=a.props&&a.props[e]?a.props[e]:void 0;return o||a.shouldUpdateCallback(r,i)?(a.props[e]=r,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},{props:t,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var t=this.constructor,e=t.propTypes,n=t.tagName,o=this.props;e&&ot.checkPropTypes(e,o,"prop",n)}},{key:"shouldUpdateCallback",value:function(t,e){return t!==e}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var t=this.propTypes;return t&&Object.keys(t).map(mt)}}]),i}()},function(e){return function(t){function c(){return l(this,c),d(this,(c.__proto__||Object.getPrototypeOf(c)).apply(this,arguments))}return p(c,e),a(c,[{key:"init",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.template,n=h(t,["template"]);u(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"init",this).call(this,n),this._template=e,this._hasTemplate=!!e,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var n=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var e=this._template;try{if(t){for(var o=document.createDocumentFragment(),r=[];this.firstChild;)r.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=r,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(t){var e=t.cloneNode(!0);n.childrenFragment.appendChild(e)});B||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(t){return 1===t.nodeType}));var i=e(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(t){a.appendChild(t)});else if(i){if("string"==typeof i)throw new G(this);a.appendChild(i)}if(t)u(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(t,e){if("object"!==(void 0===t?"undefined":b(t)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===e?"undefined":b(e)))throw new Error("componentMorph: newTree should be an object");q(e,t)}(this,s),function(){for(var t=void 0;t=S.pop();)delete t.isSameNode;S=[]}(),this._isMorphing=!1}}catch(t){console.error(t)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(t){}},{key:"didRenderCallback",value:function(t){}}]),c}()},function(e){return function(t){function r(){return l(this,r),d(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return p(r,e),a(r,[{key:"init",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.styles,n=void 0===e?"":e,o=h(t,["styles"]);u(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"init",this).call(this,o),this._styles=n}},{key:"connectedCallback",value:function(){u(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&u(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var e=document.createElement("style"),n=document.createTextNode(this._styles);e.appendChild(n),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",e):t.appendChild(e)}}}]),r}()}),Lt=(e(Dt,y),e(Dt,function(r){return function(t){function n(){return l(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,r),a(n,[{key:"init",value:function(t){var e=this;u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,t),this._appendStyles=function(){n.appendGlobalStyles(e._styles,e.nodeName)}}}],[{key:"appendGlobalStyles",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:r.uuidv4();if(t&&!_[e]){var n=document.createElement("style"),o=document.createTextNode(t);_[e]=!0,n.appendChild(o),n.setAttribute("data-c-name",e.toLowerCase()),document.head.appendChild(n)}}}]),n}()},y)(HTMLElement));var Ut,It,Mt,zt=function(t,e){return e},qt=function(t){function e(){return l(this,e),d(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return p(e,Lt),a(e,[{key:"init",value:function(){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"init",this).call(this,{styles:'.a-vertical-rhythm {\n  display: block; }\n  .a-vertical-rhythm > :first-child {\n    padding-top: 40px; }\n    .a-vertical-rhythm > :first-child::before {\n      font-size: 16px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.01em;\n      position: relative;\n      display: block;\n      color: #fff;\n      text-align: center;\n      height: 40px;\n      margin-top: -40px;\n      background: #b5d0ee;\n      content: "padding-top: 40px"; }\n      @media (min-width: 576px) {\n        .a-vertical-rhythm > :first-child::before {\n          font-size: 18px; } }\n  @media (min-width: 768px) {\n    .a-vertical-rhythm > :first-child {\n      padding-top: 60px; }\n      .a-vertical-rhythm > :first-child::before {\n        font-size: 16px;\n        font-weight: 400;\n        line-height: 1.5;\n        letter-spacing: 0.01em;\n        position: relative;\n        display: block;\n        color: #fff;\n        text-align: center;\n        height: 60px;\n        margin-top: -60px;\n        background: #b5d0ee;\n        content: "padding-top: 60px"; } }\n    @media (min-width: 768px) and (min-width: 576px) {\n      .a-vertical-rhythm > :first-child::before {\n        font-size: 18px; } }\n  @media (min-width: 992px) {\n    .a-vertical-rhythm > :first-child {\n      padding-top: 70px; }\n      .a-vertical-rhythm > :first-child::before {\n        font-size: 16px;\n        font-weight: 400;\n        line-height: 1.5;\n        letter-spacing: 0.01em;\n        position: relative;\n        display: block;\n        color: #fff;\n        text-align: center;\n        height: 70px;\n        margin-top: -70px;\n        background: #b5d0ee;\n        content: "padding-top: 70px"; } }\n    @media (min-width: 992px) and (min-width: 576px) {\n      .a-vertical-rhythm > :first-child::before {\n        font-size: 18px; } }\n  .a-vertical-rhythm > :last-child {\n    padding-bottom: 40px; }\n    .a-vertical-rhythm > :last-child::after {\n      font-size: 16px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.01em;\n      position: relative;\n      display: block;\n      color: #fff;\n      text-align: center;\n      height: 40px;\n      margin-bottom: -40px;\n      background: #b5d0ee;\n      content: "padding-bottom: 40px"; }\n      @media (min-width: 576px) {\n        .a-vertical-rhythm > :last-child::after {\n          font-size: 18px; } }\n  @media (min-width: 768px) {\n    .a-vertical-rhythm > :last-child {\n      padding-bottom: 60px; }\n      .a-vertical-rhythm > :last-child::after {\n        font-size: 16px;\n        font-weight: 400;\n        line-height: 1.5;\n        letter-spacing: 0.01em;\n        position: relative;\n        display: block;\n        color: #fff;\n        text-align: center;\n        height: 60px;\n        margin-bottom: -60px;\n        background: #b5d0ee;\n        content: "padding-bottom: 60px"; } }\n    @media (min-width: 768px) and (min-width: 576px) {\n      .a-vertical-rhythm > :last-child::after {\n        font-size: 18px; } }\n  .a-vertical-rhythm > * {\n    margin-top: 20px;\n    background: #fff;\n    display: block; }\n    .a-vertical-rhythm > *:first-child {\n      margin-top: 0; }\n    .a-vertical-rhythm > *::before {\n      font-size: 16px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.01em;\n      position: relative;\n      display: block;\n      color: #fff;\n      text-align: center;\n      height: 20px;\n      margin-top: -20px;\n      background: #fad6de;\n      content: "margin-top: 20px"; }\n      @media (min-width: 576px) {\n        .a-vertical-rhythm > *::before {\n          font-size: 18px; } }\n    @media (min-width: 768px) {\n      .a-vertical-rhythm > * {\n        margin-top: 40px; }\n        .a-vertical-rhythm > *:first-child {\n          margin-top: 0; }\n        .a-vertical-rhythm > *::before {\n          font-size: 16px;\n          font-weight: 400;\n          line-height: 1.5;\n          letter-spacing: 0.01em;\n          position: relative;\n          display: block;\n          color: #fff;\n          text-align: center;\n          height: 40px;\n          margin-top: -40px;\n          background: #fad6de;\n          content: "margin-top: 40px"; } }\n    @media (min-width: 768px) and (min-width: 576px) {\n      .a-vertical-rhythm > *::before {\n        font-size: 18px; } }\n    @media (min-width: 992px) {\n      .a-vertical-rhythm > * {\n        margin-top: 60px; }\n        .a-vertical-rhythm > *:first-child {\n          margin-top: 0; }\n        .a-vertical-rhythm > *::before {\n          font-size: 16px;\n          font-weight: 400;\n          line-height: 1.5;\n          letter-spacing: 0.01em;\n          position: relative;\n          display: block;\n          color: #fff;\n          text-align: center;\n          height: 60px;\n          margin-top: -60px;\n          background: #fad6de;\n          content: "margin-top: 60px"; } }\n    @media (min-width: 992px) and (min-width: 576px) {\n      .a-vertical-rhythm > *::before {\n        font-size: 18px; } }\n',template:zt})}},{key:"connectedCallback",value:function(){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" a-vertical-rhythm"}}]),e}();return qt.tagName="axa-vertical-rhythm",Ut=qt.tagName,It=qt,customElements.get(Ut)||customElements.define(Ut,It,Mt),qt}();
