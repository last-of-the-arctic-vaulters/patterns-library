!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.StyleGuideWebComponent=e()}(this,function(){"use strict";function t(t,e){return t(e={exports:{}},e.exports),e.exports}var e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(t){i[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(t){return!1}})()&&Object.assign;var y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},a=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}(),o=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},c=function t(e,n,i){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,n,i)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(i):void 0},p=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},d=function(t,e){var n={};for(var i in t)0<=e.indexOf(i)||Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n},f=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},r=function t(e,n,i,r){var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var a=Object.getPrototypeOf(e);null!==a&&t(a,n,i,r)}else if("value"in o&&o.writable)o.value=i;else{var l=o.set;void 0!==l&&l.call(r,i)}return i},s=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var a,l=t[Symbol.iterator]();!(i=(a=l.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){r=!0,o=t}finally{try{!i&&l.return&&l.return()}finally{if(r)throw o}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},x=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)};function h(){}var g,v,_,b,m=t(function(t){t.exports=function(){function t(t,e,n,i,r,o){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}var n={array:t.isRequired=t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return n.checkPropTypes=h,n.PropTypes=n}()}),O=t(function(t){!function(){var a={}.hasOwnProperty;function l(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var i=void 0===n?"undefined":y(n);if("string"===i||"number"===i)t.push(n);else if(Array.isArray(n)&&n.length){var r=l.apply(null,n);r&&t.push(r)}else if("object"===i)for(var o in n)a.call(n,o)&&n[o]&&t.push(o)}}return t.join(" ")}t.exports?(l.default=l,t.exports=l):window.classNames=l}()}),C=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight(function(t,e){return e(t)},t)}},k={},w=(g=Object,v=g.getPrototypeOf||function(t){return t.__proto__},_=g.setPrototypeOf||function(t,e){return t.__proto__=e,t},b="object"===("undefined"==typeof Reflect?"undefined":y(Reflect))?Reflect.construct:function(t,e,n){var i,r=[null];return r.push.apply(r,e),i=t.bind.apply(t,r),_(new i,n.prototype)},function(t){var e=v(t);return _(t,_(function(){return b(e,arguments,v(this).constructor)},e))}),T=function(n){return w(function(t){function e(){return u(this,e),f(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return p(e,n),a(e,[{key:"init",value:function(){var t;this._id=((t=this.nodeName)in k||(k[t]=0),++k[t]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}}]),e}())},j={},P=function(){try{var t=new window.CustomEvent("test",{cancelable:!0});if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(t){}return e;function e(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=e.bubbles,i=void 0!==n&&n,r=e.cancelable,o=void 0!==r&&r,a=e.detail,l=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(t,i,o,l);var u=s.preventDefault;return s.preventDefault=function(){u.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},s}}();function N(t,e,n){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=new P(e,l({},i,{detail:n}));return t.dispatchEvent(r)}var E=function(){var t=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=Object.defineProperty({},"passive",{get:function(){t=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,e),window.removeEventListener("testPassiveEventSupport",n,e)}return t}();function A(t){for(var r=t.className,o=!1,a=!0,e=arguments.length,n=Array(1<e?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var l=n.map(function(t){var e=(n=t,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",i)).test(r);var n,i;e?o=!0:a=!1;return{className:t,hasClass:e}});return!(!a&&!o)&&l}function S(t,e){if(!t)return!1;for(var n=Object.keys(t),i=n.length,r=0;r<i;++r){var o=n[r];if(t[o]===e)return delete t[o]}return!1}var R=/\s+/,D={transitionend:function(){for(var t=document.createElement("div").style,e={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(e),i=n.length,r=void 0,o=0;o<i;++o)if(void 0!==t[r=n[o]])return e[r];return""}()};function L(n,t,i,r){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},o=e.capture,a=void 0!==o&&o,l=e.passive,s=void 0===l||l;if(D[t]&&(t=D[t]),!n||!t)return null;var u=void 0===i?"undefined":y(i),c=i&&"string"===u;if("function"===u){if(r){var p=r;a=p.capture,s=p.passive}r=i}for(var d=E?{capture:a,passive:s}:a,f=c?function(t){var e=t.target;for(;!A(e,i)&&e!==n;)e=e.parentNode;if(e!==n)return r(t,e)}:r,h=t.split(R),g=h.length,v=0;v<g;++v)n.addEventListener(h[v],f,d);return function t(){for(var e=0;e<g;++e)n.removeEventListener(h[e],f,d);S(this,t)}}function I(i){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},e=t.leading,o=void 0!==e&&e,n=t.trailing,a=void 0===n||n,l=t.maxWait,s=void 0!==l&&l,u=void 0,c=void 0,p=void 0,d=void 0,f=!1,h=r!==s,g=!1!==s;function v(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return u=e,h&&(c&&clearTimeout(c),c=setTimeout(y,r)),g&&!p&&(p=setTimeout(_,s)),o&&!f&&(f=!0,d=i.apply(void 0,x(u))),d}return v.flush=function(){(c||p)&&(d=i.apply(void 0,x(u)));return m(),d},v.cancel=m,v;function y(){p&&clearTimeout(p),b()}function _(){c&&clearTimeout(c),b()}function b(){a&&(d=i.apply(void 0,x(u))),p=c=null,f=!1}function m(){c&&(clearTimeout(c),c=null),p&&(clearTimeout(p),p=null),u=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var U=window.__subscriptions;function M(t,e){var n=L(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,t,e);U[t]||(U[t]={count:0});var i,r=U[t];return r.count++,r.onsubscribe||(r.onsubscribe=I((i=t,function(){N(document,"pubsub/onsubscribe",i),N(document,"pubsub/onsubscribe/"+i,i),U[i]&&delete U[i].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete U[t]}}L(document,"pubsub/onsubscribe",function(t){var e=t.detail;U[e]||(U[e]={count:0});var n=U[e],i=n.queue;Array.isArray(i)&&(i.forEach(function(t){var e=s(t,3),n=e[0],i=e[1],r=e[2];N(r,n,i)}),delete n.queue)});var q,F=function(t,e){return t===e},V=(q=function(){var t;return(t=console).log.apply(t,arguments)},function(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:F;return function(){for(var t=arguments.length,i=Array(t),e=0;e<t;e++)i[e]=arguments[e];return function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(){return r.apply(void 0,[].concat(i,e))?q.apply(void 0,arguments):void 0}}}}()(!0),[]);var K=1,H=3,W=8;function z(t,e){var n=t.nodeType;n===K&&function(t,e){for(var n=e.skipChildren&&e.skipChildren(),i=e.constructor.observedAttributes,r=i&&Array.isArray(i)&&i.length,o=function(t){return n&&r&&-1===i.indexOf(t)},a=e.attributes,l=t.attributes,s=null,u=null,c=null,p=null,d=l.length-1;0<=d;--d)if(p=l[d],c=p.name,s=p.namespaceURI,u=p.value,!o(c))if(s){var f=p.localName;e.getAttributeNS(s,f||c)!==u&&e.setAttributeNS(s,c,u)}else e.hasAttribute(c)?e.getAttribute(c)!==u&&("null"===u||"undefined"===u?e.removeAttribute(c):e.setAttribute(c,u)):e.setAttribute(c,u);for(var h=a.length-1;0<=h;--h)if(!1!==(p=a[h]).specified){if(c=p.name,s=p.namespaceURI,o(c))continue;s?(c=p.localName||c,t.hasAttributeNS(s,c)||e.removeAttributeNS(s,c)):t.hasAttributeNS(null,c)||e.removeAttribute(c)}}(t,e),n!==H&&n!==W||e.nodeValue===t.nodeValue||(e.nodeValue=t.nodeValue)}function G(t,e){var n=t.nodeName;"INPUT"===n?function(t,e){var n=t.value,i=e.value;B(t,e,"checked"),B(t,e,"disabled"),n!==i&&(e.setAttribute("value",n),e.value=n);"null"===n&&(e.value="",e.removeAttribute("value"));t.hasAttributeNS(null,"value")?"range"===e.type&&(e.value=n):e.removeAttribute("value")}(t,e):"OPTION"===n?B(t,e,"selected"):"TEXTAREA"===n?function(t,e){var n=t.value;n!==e.value&&(e.value=n);if(e.firstChild&&e.firstChild.nodeValue!==n){if(""===n&&e.firstChild.nodeValue===e.placeholder)return;e.firstChild.nodeValue=n}}(t,e):"SELECT"===n&&function(t,e){var n=-1,i=0,r=e.firstChild,o=void 0,a=void 0;for(;r;)if("OPTGROUP"===(a=r.nodeName&&r.nodeName.toUpperCase()))r=(o=r).firstChild;else{if("OPTION"===a){if(r.hasAttributeNS(null,"selected")){n=i;break}i+=1}!(r=r.nextSibling)&&o&&(r=o.nextSibling,o=null)}e.selectedIndex=n}(0,e)}function B(t,e,n){t[n]!==e[n]&&(e[n]=t[n],t[n]?e.setAttribute(n,""):e.removeAttribute(n))}var $=3;function J(t,e){return e?t?t.isSameNode&&t.isSameNode(e)?e:t.tagName!==e.tagName?t:(z(t,e),e.skipChildren&&e.skipChildren()||function(t,e){for(var n=void 0,i=void 0,r=void 0,o=void 0,a=0,l=0;n=e.childNodes[l],i=t.childNodes[l-a],n||i;l++)if(i)if(n)if(Y(i,n))(r=J(i,n))!==n&&(e.replaceChild(r,n),a++);else{o=null;for(var s=l;s<e.childNodes.length;s++)if(Y(e.childNodes[s],i)){o=e.childNodes[s];break}o?((r=J(i,o))!==o&&a++,e.insertBefore(r,n)):i.id||n.id?(e.insertBefore(i,n),a++):(r=J(i,n))!==n&&(e.replaceChild(r,n),a++)}else e.appendChild(i),a++;else e.removeChild(n),l--}(t,e),G(t,e),e):null:t}function Y(t,e){return t.id?t.id===e.id:t.isSameNode?t.isSameNode(e):t.tagName===e.tagName&&(t.type===$&&t.nodeValue===e.nodeValue)}var Z,X,Q,tt,et=(Z=Object,X=Z.getPrototypeOf||function(t){return t.__proto__},Q=Z.setPrototypeOf||function(t,e){return t.__proto__=e,t},tt="object"===("undefined"==typeof Reflect?"undefined":y(Reflect))?Reflect.construct:function(t,e,n){var i,r=[null];return r.push.apply(r,e),i=t.bind.apply(t,r),Q(new i,n.prototype)},function(t){var e=X(t);return Q(t,Q(function(){return tt(e,arguments,X(this).constructor)},e))})(function(t){function l(t){var e;u(this,l);for(var n="\n    Web Component "+t.nodeName+"%c#"+t._id+" does not accept string as a return from a template. Maybe use bel?}",i=arguments.length,r=Array(1<i?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];var a=f(this,(e=l.__proto__||Object.getPrototypeOf(l)).call.apply(e,[this,n].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(a,l),a.name="TemplateNoStringReturnException",a}return p(l,t),l}(Error)),nt=!!document.createDocumentFragment().children,it=0;function rt(t,e){var n=t[e];return"function"==typeof n&&(t[e]=function(e){function n(){return e.apply(void 0,arguments)}return 0===it&&(it++,Object.keys(e).map(function(t){return n[t]=e[t],t}).reduce(rt,n),it--),n}(n)),t}var ot=m;Object.keys(ot).reduce(rt,ot);var at=ot.oneOf(["left","center","right"]),lt=ot.oneOf(["left","right"]),st=ot.oneOf(["top","bottom"]),ut=ot.oneOf(["up","down"]),ct=ot.oneOf(["ok","pending","error","unknown"]),pt=ot.oneOf(["row","col","rowgroup","colgroup","auto"]),dt=ot.oneOfType([ot.string,ot.number]),ft={text:dt,value:ot.any,rowspan:dt,colspan:dt,scope:pt,align:at,dense:ot.bool},ht={float:lt,strong:ot.bool,bold:ot.bool},gt=ot.oneOfType([ot.string,ot.number]),vt=ot.oneOfType([gt,ot.shape(l({},ft,{sort:ut,sortActive:ot.bool}))]),yt=ot.oneOfType([gt,ot.shape(l({},ft,ht,{action:ot.bool,state:ct}))]),_t=ot.oneOfType([gt,ot.shape(l({},ft,ht))]),bt=ot.oneOfType([ot.arrayOf(vt),ot.shape({cells:ot.arrayOf(vt)})]),mt=ot.oneOfType([ot.arrayOf(yt),ot.shape({cells:ot.arrayOf(yt),action:ot.bool})]),xt=ot.oneOfType([ot.arrayOf(_t),ot.shape({cells:ot.arrayOf(_t)})]),Ot=(ot.oneOfType([bt,ot.arrayOf(bt)]),ot.oneOfType([mt,ot.arrayOf(mt)]),ot.oneOfType([xt,ot.arrayOf(xt)]),/[A-Z]/g);function Ct(t){return t.replace(Ot,kt)}function kt(t,e,n){var i=t.toLowerCase(),r=n.charAt(e+1);return 0===e||r.toUpperCase()===r?i:"-"+i}var wt=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Tt(e,n,t){var i=e;if(t)return function(e,n,t){var i=e;switch(t){case ot.string:case ot.string.isRequired:return e;case ot.bool:case ot.bool.isRequired:if(!e||n===e)return!0;case ot.number:case ot.number.isRequired:case ot.object:case ot.object.isRequired:case ot.array:case ot.array.isRequired:default:if(wt.test(e))try{i=JSON.parse(e)}catch(t){console.error("Attribute "+n+" has an error:\n"+t+"\n",e)}}return i}(e,n,t);if(e&&n!==e){if(wt.test(e))try{i=JSON.parse(e)}catch(t){console.error("Attribute "+n+" has an error:\n"+t+"\n",e)}}else i=!0;return i}var jt=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,Pt=/[-_]+/g;function Nt(t){return t.replace(jt,Et)}function Et(t,e){return 0==+t||Pt.test(t)?"":0===e?t.toLowerCase():t.toUpperCase()}function At(t,e,n){var i=1===t.nodeType,r=t.constructor.propTypes,o=n;!n&&i&&(o=(void 0===r?{}:r)[Nt(e)]);if(i&&!t.hasAttribute(e))return o!==ot.bool&&o!==ot.bool.isRequired&&void 0;var a=t.value;return e?a=t.getAttribute(e):e=t.name,a=Tt(a,e,o)}var St=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Rt(n,t,i){var e,r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=r.capture,a=void 0===o||o,l=r.passive,s=void 0===l||l,u=n.ownerDocument.documentElement,c=L(u,t,function(t){var e=t.target;if(!n.contains(e)&&n!==e)return i(t)},{capture:a,passive:s});return e=u,St&&(e.style.cursor="pointer"),c}var Dt=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];for(var i=e.length,r={},o=0;o<i;++o){var a=e[o];r[a.toUpperCase()]=a}return r}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize","paste"),Lt="axa-change",It="data-prevent-default";(function(){function i(t){var o=this,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};u(this,i),this._handleClick=function(t,e){o.shouldPreventDefault(e||t.currentTarget)&&t.preventDefault();var n=!o._lastToggleNode,i=e!==o._lastToggleNode,r=!n&&!i;n?(o._notify(Dt.ENTER,e),o._onInteractive()):i&&o._notify(Dt.MOVE,e,o._lastToggleNode),o._lastToggleNode=e,r&&o._options.sameClickClose&&o._close()},this._handleClose=function(t,e){o.shouldPreventDefault(e||t.currentTarget)&&t.preventDefault(),o._close()},this._handleKeyUp=function(t){(t.key===Dt.ESCAPE||t.key===Dt.ESC||27===t.keyCode)&&(t.preventDefault(),o._close())},this._init(t,e)}return a(i,[{key:"_init",value:function(t,e){t&&(this._wcNode=t),e&&(this._options=l({},i.DEFAULTS,e));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=L(this._container,Dt.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive();var t=this._container,e=this._options,n=e.closeClass,i=e.outerClose,r=e.escapeClose,o=e.preventDefault;n&&(this._unCloseClick=L(t,Dt.CLICK,n,this._handleClose,{passive:!o})),i&&(this._unOuterClick=Rt(t,Dt.CLICK,this._handleClose,{passive:!o})),r&&(this._unCloseEscape=L(t.ownerDocument,Dt.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(t){return t.hasAttribute(It)?At(t,It):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(Dt.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(t,e,n){t in this&&"function"==typeof this[t]&&this[t](e,n)}},{key:"enter",value:function(t){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(t,e){}},{key:"leave",value:function(t){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),i})().DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Ut=C(function(n){var t,e;return e=t=function(t){function e(){return u(this,e),f(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return p(e,n),e}(),t.version="2.0.1-beta.254",e},function(e){return function(t){function n(){return u(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,e),a(n,[{key:"init",value:function(t){var e=this;c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,t),this._makeContextReady=function(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;e.contextNode&&(clearTimeout(e.timeoutId),e.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),e.unContextEnabled&&e.unContextEnabled(),e.unContextEnabled=M("context/available",e._makeContextReady)}}},{key:"connectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var t=this.nodeName.toLowerCase();this.__isContext=!0,function(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;U[t]||(U[t]={count:0,queue:[]});var i=U[t].queue;Array.isArray(i)?i.push([t,e,n]):N(n,t,e)}("context/available",this.__contextName=t)}},{key:"consumeContext",value:function(t){this.__consumedContext=t&&t.toLowerCase()}},{key:"contextNode",get:function(){for(var t=this.__consumedContext,e=this.parentNode;e&&(!e.__isContext||t&&t!==e.__contextName);)e=e.parentNode;return!(!e||!e.__isContext)&&e}}]),n}()},function(e){return function(t){function n(){return u(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,e),a(n,[{key:"appendChild",value:function(t){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(t),this.render()):c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,t)}},{key:"innerText",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",t,this)}},{key:"textContent",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",t,this)}},{key:"innerHTML",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createElement("div");e.innerHTML=t,this._lightDOMRefs=Array.from(e.children),this.render()}else r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",t,this)}}]),n}()},function(e){return function(t){function o(){return u(this,o),f(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return p(o,e),a(o,[{key:"init",value:function(t){var e=this;c(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"init",this).call(this,t),this._isConnected=!1,this.props={},this.updatedDebounced=I(function(){return e.updated&&e.updated()},50);var n=this.constructor.observedAttributes;Array.isArray(n)&&n.forEach(function(t){Nt(t)})}},{key:"connectedCallback",value:function(){var i=this;if(c(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this)&&c(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(t)){var r=this.constructor.propTypes;t.forEach(function(t){var e=Nt(t);if(i.hasAttribute(t)){var n=At(i,t,r[e]);i.props[e]=n}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(t,e,n){if(c(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"attributeChangedCallback",this)&&c(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"attributeChangedCallback",this).call(this,t,e,n),this.shouldUpdateCallback(n,e)){var i=Nt(t);if(this.hasAttribute(t)){var r=this.constructor.propTypes;this.props[i]=Tt(n,t,r[i])}else this.props[i]=null;this.checkPropTypes(),"value"===t&&null!==n&&N(this,Lt,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(t){var a=this;c(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"attributeChangedCallback",this)&&c(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"attributeChangedCallback",this).call(this);var e=this.constructor.observedAttributes,n=void 0===e?[]:e,i=Object.keys(t).filter(function(t){return-1<n.indexOf(Ct(t))}).reduce(function(t,e){var n=t.props,i=t.shouldUpdate,r=n[e],o=a.props&&a.props[e]?a.props[e]:void 0;return i||a.shouldUpdateCallback(r,o)?(a.props[e]=r,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},{props:t,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),i&&this._isConnected?this.updated&&this.updated():i&&!this._isConnected&&console.warn("setProps(): Custom Element not connected and props never update",this)}},{key:"checkPropTypes",value:function(){var t=this.constructor,e=t.propTypes,n=t.tagName,i=this.props;e&&ot.checkPropTypes(e,i,"prop",n)}},{key:"shouldUpdateCallback",value:function(t,e){return t!==e}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var t=this.propTypes;return t&&Object.keys(t).map(Ct)}}]),o}()},function(e){return function(t){function s(){return u(this,s),f(this,(s.__proto__||Object.getPrototypeOf(s)).apply(this,arguments))}return p(s,e),a(s,[{key:"init",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.template,n=d(t,["template"]);c(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"init",this).call(this,n),this._template=e,this._hasTemplate=!!e,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var n=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var e=this._template;try{if(t){for(var i=document.createDocumentFragment(),r=[];this.firstChild;)r.push(this.firstChild),i.appendChild(this.firstChild);this._lightDOMRefs=r,this.childrenFragment=i}else this._lightDOMRefs.forEach(function(t){var e=t.cloneNode(!0);n.childrenFragment.appendChild(e)});nt||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(t){return 1===t.nodeType}));var o=e(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(o))o.forEach(function(t){a.appendChild(t)});else if(o){if("string"==typeof o)throw new et(this);a.appendChild(o)}if(t)c(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"appendChild",this).call(this,a);else{var l=this.cloneNode(!1);l._isMorphing=!0,l.appendChild(a),this._isMorphing=!0,function(t,e){if("object"!==(void 0===t?"undefined":y(t)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===e?"undefined":y(e)))throw new Error("componentMorph: newTree should be an object");J(e,t)}(this,l),function(){for(var t=void 0;t=V.pop();)delete t.isSameNode;V=[]}(),this._isMorphing=!1}}catch(t){console.error(t)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(t){}},{key:"didRenderCallback",value:function(t){}}]),s}()},function(e){return function(t){function r(){return u(this,r),f(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return p(r,e),a(r,[{key:"init",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.styles,n=void 0===e?"":e,i=d(t,["styles"]);c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"init",this).call(this,i),this._styles=n}},{key:"connectedCallback",value:function(){c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var e=document.createElement("style"),n=document.createTextNode(this._styles);e.appendChild(n),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",e):t.appendChild(e)}}}]),r}()}),Mt=(C(Ut,T),C(Ut,function(r){return function(t){function n(){return u(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,r),a(n,[{key:"init",value:function(t){var e=this;c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,t),this._appendStyles=function(){n.appendGlobalStyles(e._styles,e.nodeName)}}}],[{key:"appendGlobalStyles",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:r.uuidv4();if(t&&!j[e]){var n=document.createElement("style"),i=document.createTextNode(t);j[e]=!0,n.appendChild(i),n.setAttribute("data-c-name",e.toLowerCase()),document.head.appendChild(n)}}}]),n}()},T));var qt,Ft,Vt,Kt=Mt(HTMLTableCaptionElement),Ht=function(t){function e(){return u(this,e),f(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return p(e,Kt),a(e,[{key:"init",value:function(){c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"init",this).call(this,{styles:".a-caption {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  padding: 10px 10px;\n  color: #7f7f7f; }\n  @media (min-width: 576px) {\n    .a-caption {\n      font-size: 14px;\n      line-height: 1.21; } }\n  @media (max-width: 767px) {\n    .a-caption {\n      padding-left: 10px;\n      padding-right: 10px; } }\n\n.a-caption--top {\n  caption-side: top; }\n\n.a-caption--bottom {\n  caption-side: bottom; }\n\n.u-align-left {\n  text-align: left; }\n\n.u-align-center {\n  text-align: center; }\n\n.u-align-right {\n  text-align: right; }\n\n@media (max-width: 575px) {\n  .u-align-left-xs-down {\n    text-align: left; }\n  .u-align-center-xs-down {\n    text-align: center; }\n  .u-align-right-xs-down {\n    text-align: right; } }\n\n.u-align-left-xs-up {\n  text-align: left; }\n\n.u-align-center-xs-up {\n  text-align: center; }\n\n.u-align-right-xs-up {\n  text-align: right; }\n\n@media (max-width: 575px) {\n  .u-align-left-xs {\n    text-align: left; }\n  .u-align-center-xs {\n    text-align: center; }\n  .u-align-right-xs {\n    text-align: right; } }\n\n@media (max-width: 767px) {\n  .u-align-left-sm-down {\n    text-align: left; }\n  .u-align-center-sm-down {\n    text-align: center; }\n  .u-align-right-sm-down {\n    text-align: right; } }\n\n@media (min-width: 576px) {\n  .u-align-left-sm-up {\n    text-align: left; }\n  .u-align-center-sm-up {\n    text-align: center; }\n  .u-align-right-sm-up {\n    text-align: right; } }\n\n@media (min-width: 576px) and (max-width: 767px) {\n  .u-align-left-sm {\n    text-align: left; }\n  .u-align-center-sm {\n    text-align: center; }\n  .u-align-right-sm {\n    text-align: right; } }\n\n@media (max-width: 991px) {\n  .u-align-left-md-down {\n    text-align: left; }\n  .u-align-center-md-down {\n    text-align: center; }\n  .u-align-right-md-down {\n    text-align: right; } }\n\n@media (min-width: 768px) {\n  .u-align-left-md-up {\n    text-align: left; }\n  .u-align-center-md-up {\n    text-align: center; }\n  .u-align-right-md-up {\n    text-align: right; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .u-align-left-md {\n    text-align: left; }\n  .u-align-center-md {\n    text-align: center; }\n  .u-align-right-md {\n    text-align: right; } }\n\n@media (max-width: 1199px) {\n  .u-align-left-lg-down {\n    text-align: left; }\n  .u-align-center-lg-down {\n    text-align: center; }\n  .u-align-right-lg-down {\n    text-align: right; } }\n\n@media (min-width: 992px) {\n  .u-align-left-lg-up {\n    text-align: left; }\n  .u-align-center-lg-up {\n    text-align: center; }\n  .u-align-right-lg-up {\n    text-align: right; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .u-align-left-lg {\n    text-align: left; }\n  .u-align-center-lg {\n    text-align: center; }\n  .u-align-right-lg {\n    text-align: right; } }\n\n@media (max-width: 1439px) {\n  .u-align-left-xl-down {\n    text-align: left; }\n  .u-align-center-xl-down {\n    text-align: center; }\n  .u-align-right-xl-down {\n    text-align: right; } }\n\n@media (min-width: 1200px) {\n  .u-align-left-xl-up {\n    text-align: left; }\n  .u-align-center-xl-up {\n    text-align: center; }\n  .u-align-right-xl-up {\n    text-align: right; } }\n\n@media (min-width: 1200px) and (max-width: 1439px) {\n  .u-align-left-xl {\n    text-align: left; }\n  .u-align-center-xl {\n    text-align: center; }\n  .u-align-right-xl {\n    text-align: right; } }\n\n.u-align-left-xxl-down {\n  text-align: left; }\n\n.u-align-center-xxl-down {\n  text-align: center; }\n\n.u-align-right-xxl-down {\n  text-align: right; }\n\n@media (min-width: 1440px) {\n  .u-align-left-xxl-up {\n    text-align: left; }\n  .u-align-center-xxl-up {\n    text-align: center; }\n  .u-align-right-xxl-up {\n    text-align: right; } }\n\n@media (min-width: 1440px) {\n  .u-align-left-xxl {\n    text-align: left; }\n  .u-align-center-xxl {\n    text-align: center; }\n  .u-align-right-xxl {\n    text-align: right; } }\n"})}},{key:"willRenderCallback",value:function(){var t,e=this.props,n=e.classes,i=e.align,r=e.side;this.className=O("a-caption",n,(o(t={},"u-align-"+i,i),o(t,"a-caption--"+r,r),t))}}]),e}();return Ht.tagName="axa-caption",Ht.builtInTagName="caption",Ht.propTypes={classes:m.string,align:at,side:st},qt=Ht.tagName,Vt={extends:(Ft=Ht).builtInTagName},customElements.get(qt)||customElements.define(qt,Ft,Vt),Ht});