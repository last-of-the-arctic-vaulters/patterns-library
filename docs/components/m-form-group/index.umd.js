!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";function e(e,t){return e(t={exports:{}},t.exports),t.exports}var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}})()&&Object.assign;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},u=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},p=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},f=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},d=function e(t,n,o,r){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},h=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),v=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function y(){}var _=0;function m(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(e){function t(){return e.apply(void 0,arguments)}return 0===_&&(_++,Object.keys(e).map(function(n){return t[n]=e[n],n}).reduce(m,t),_--),t}(n)),e}var g=e(function(e){e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=y,n.PropTypes=n,n}()});Object.keys(g).reduce(m,g);var b,O,C,k,w=g.oneOf(["left","center","right"]),x=g.oneOf(["left","right"]),T=(g.oneOf(["top","bottom"]),g.oneOf(["up","down"])),A=g.oneOf(["ok","pending","error","unknown"]),E=g.oneOf(["row","col","rowgroup","colgroup","auto"]),N=g.oneOfType([g.string,g.number]),j={text:N,value:g.any,rowspan:N,colspan:N,scope:E,align:w,dense:g.bool},P={float:x,strong:g.bool,bold:g.bool},S=g.oneOfType([g.string,g.number]),R=g.oneOfType([S,g.shape(c({},j,{sort:T,sortActive:g.bool}))]),D=g.oneOfType([S,g.shape(c({},j,P,{action:g.bool,state:A}))]),L=g.oneOfType([S,g.shape(c({},j,P))]),I=g.oneOfType([g.arrayOf(R),g.shape({cells:g.arrayOf(R)})]),M=g.oneOfType([g.arrayOf(D),g.shape({cells:g.arrayOf(D),action:g.bool})]),U=g.oneOfType([g.arrayOf(L),g.shape({cells:g.arrayOf(L)})]),V=(g.oneOfType([I,g.arrayOf(I)]),g.oneOfType([M,g.arrayOf(M)]),g.oneOfType([U,g.arrayOf(U)]),e(function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],o=0;o<arguments.length;o++){var r=arguments[o];if(r){var a=void 0===r?"undefined":i(r);if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===a)for(var s in r)t.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?e.exports=n:window.classNames=n}()})),q=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},F={},z=(b=Object,O=b.getPrototypeOf||function(e){return e.__proto__},C=b.setPrototypeOf||function(e,t){return e.__proto__=t,e},k="object"===("undefined"==typeof Reflect?"undefined":i(Reflect))?Reflect.construct:function(e,t,n){var o,r=[null];return r.push.apply(r,t),o=e.bind.apply(e,r),C(new o,n.prototype)},function(e){var t=O(e);return C(e,C(function(){return k(t,arguments,O(this).constructor)},t))}),H=function(e){return z(function(t){function n(e){var t;return a(this,n),(e=t=f(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e))).init(),f(t,e)}return u(n,e),s(n,[{key:"init",value:function(){var e;this._id=((e=this.nodeName)in F||(F[e]=0),++F[e]),this._initialised=!0}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}())},K={},W=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,s=void 0===a?void 0:a,c=document.createEvent("CustomEvent");c.initCustomEvent(e,o,i,s);var l=c.preventDefault;return c.preventDefault=function(){l.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},c}}();function $(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new W(t,c({},o,{detail:n}));return e.dispatchEvent(r)}var B=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),G=/^\s+|\s{2,}|\s+$/g;function J(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function Y(e,t){var n=t.className;return t.hasClass||e.push(n),e}function Z(e){for(var t=e.className,n=!1,o=!0,r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var s=i.map(function(e){var r=J(e).test(t);r?n=!0:o=!1;return{className:e,hasClass:r}});return!(!o&&!n)&&s}function X(e,t){var n=t.className;return t.hasClass&&e.push(n),e}function Q(e,t){var n=J(t,"g");return e.replace(n," ").replace(G," ")}var ee=/\s+/,te={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function ne(e,t,n,o){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=r.capture,s=void 0!==a&&a,c=r.passive,l=void 0===c||c;if(te[t]&&(t=te[t]),!e||!t)return null;var u=void 0===n?"undefined":i(n),p=n&&"string"===u;if("function"===u){if(o){var f=o;s=f.capture,l=f.passive}o=n}for(var d=B?{capture:s,passive:l}:s,h=p?function(t){var r=t.target;for(;!Z(r,n)&&r!==e;)r=r.parentNode;if(r!==e)return o(t,r)}:o,v=t.split(ee),y=v.length,_=0;_<y;++_)e.addEventListener(v[_],h,d);return function t(){for(var n=0;n<y;++n)e.removeEventListener(v[n],h,d);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}}(this,t)}}function oe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.leading,r=void 0!==o&&o,i=n.trailing,a=void 0===i||i,s=n.maxWait,c=void 0!==s&&s,l=void 0,u=void 0,p=void 0,f=void 0,d=!1,h=t!==c,y=!1!==c;function _(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return l=o,h&&(u&&clearTimeout(u),u=setTimeout(m,t)),y&&!p&&(p=setTimeout(g,c)),r&&!d&&(d=!0,f=e.apply(void 0,v(l))),f}return _.flush=function(){(u||p)&&(f=e.apply(void 0,v(l)));return O(),f},_.cancel=O,_;function m(){p&&clearTimeout(p),b()}function g(){u&&clearTimeout(u),b()}function b(){a&&(f=e.apply(void 0,v(l))),u=null,p=null,d=!1}function O(){u&&(clearTimeout(u),u=null),p&&(clearTimeout(p),p=null),l=void 0,d=!1}}window.__subscriptions=window.__subscriptions||{};var re=window.__subscriptions;function ie(e,t){var n=ne(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);re[e]||(re[e]={count:0});var o,r=re[e];return r.count++,r.onsubscribe||(r.onsubscribe=oe((o=e,function(){$(document,"pubsub/onsubscribe",o),$(document,"pubsub/onsubscribe/"+o,o),re[o]&&delete re[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete re[e]}}ne(document,"pubsub/onsubscribe",function(e){var t=e.detail;re[t]||(re[t]={count:0});var n=re[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=h(e,3),n=t[0],o=t[1],r=t[2];$(r,n,o)}),delete n.queue)});var ae,se=function(e,t){return e===t},ce=((ae=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se;return function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return function(){for(var t=arguments.length,o=Array(t),r=0;r<t;r++)o[r]=arguments[r];return function(){return e.apply(void 0,[].concat(n,o))?ae.apply(void 0,arguments):void 0}}}})()(!0),[]);var le=1,ue=3,pe=8;function fe(e,t){var n=e.nodeType,o=e.nodeName;n===le&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),o=t.constructor.observedAttributes,r=o&&Array.isArray(o)&&o.length,i=function(e){return n&&r&&-1===o.indexOf(e)},a=t.attributes,s=e.attributes,c=null,l=null,u=null,p=null,f=s.length-1;f>=0;--f)if(p=s[f],u=p.name,c=p.namespaceURI,l=p.value,!i(u))if(c){var d=p.localName;t.getAttributeNS(c,d||u)!==l&&t.setAttributeNS(c,u,l)}else t.hasAttribute(u)?t.getAttribute(u)!==l&&("null"===l||"undefined"===l?t.removeAttribute(u):t.setAttribute(u,l)):t.setAttribute(u,l);for(var h=a.length-1;h>=0;--h)if(!1!==(p=a[h]).specified){if(u=p.name,c=p.namespaceURI,i(u))continue;c?(u=p.localName||u,e.hasAttributeNS(c,u)||t.removeAttributeNS(c,u)):e.hasAttributeNS(null,u)||t.removeAttribute(u)}}(e,t),n!==ue&&n!==pe||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;de(e,t,"checked"),de(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?de(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function de(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var he=3;function ve(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(fe(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(ye(o,n))(r=ve(o,n))!==n&&(t.replaceChild(r,n),a++);else{i=null;for(var c=s;c<t.childNodes.length;c++)if(ye(t.childNodes[c],o)){i=t.childNodes[c];break}i?((r=ve(o,i))!==i&&a++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),a++):(r=ve(o,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function ye(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===he&&e.nodeValue===t.nodeValue)}var _e,me,ge,be,Oe=(_e=Object,me=_e.getPrototypeOf||function(e){return e.__proto__},ge=_e.setPrototypeOf||function(e,t){return e.__proto__=t,e},be="object"===("undefined"==typeof Reflect?"undefined":i(Reflect))?Reflect.construct:function(e,t,n){var o,r=[null];return r.push.apply(r,t),o=e.bind.apply(e,r),ge(new o,n.prototype)},function(e){var t=me(e);return ge(e,ge(function(){return be(t,arguments,me(this).constructor)},t))})(function(e){function t(e){var n;a(this,t);for(var o="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,i=Array(r>1?r-1:0),s=1;s<r;s++)i[s-1]=arguments[s];var c=f(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this,o].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(c,t),c.name="TemplateNoStringReturnException",c}return u(t,e),t}(Error)),Ce=!!document.createDocumentFragment().children,ke=/[A-Z]/g;function we(e){return e.replace(ke,xe)}function xe(e,t,n){var o=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?o:"-"+o}var Te=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Ae(e,t,n){var o=e;if(n)return function(e,t,n){var o=e;switch(n){case g.string:case g.string.isRequired:return e;case g.bool:case g.bool.isRequired:if(!e||t===e)return!0;case g.number:case g.number.isRequired:case g.object:case g.object.isRequired:case g.array:case g.array.isRequired:default:if(Te.test(e))try{o=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}return o}(e,t,n);if(e&&t!==e){if(Te.test(e))try{o=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else o=!0;return o}var Ee=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,Ne=/[-_]+/g;function je(e){return e.replace(Ee,Pe)}function Pe(e,t){return 0==+e||Ne.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function Se(e,t,n){var o=1===e.nodeType,r=e.constructor.propTypes,i=n;!n&&o&&(i=(void 0===r?{}:r)[je(t)]);if(o&&!e.hasAttribute(t))return i!==g.bool&&i!==g.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=Ae(a,t,i)}var Re=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function De(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=o.capture,i=void 0===r||r,a=o.passive,s=void 0===a||a,c=e.ownerDocument.documentElement,l=ne(c,t,function(t){var o=t.target;if(!e.contains(o)&&e!==o)return n(t)},{capture:i,passive:s});return Re&&(c.style.cursor="pointer"),l}var Le=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,r={},i=0;i<o;++i){var a=t[i];r[a.toUpperCase()]=a}return r}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),Ie="axa-change",Me="data-prevent-default",Ue=function(){function e(t){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(this,e),this._handleClick=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var o=!n._lastToggleNode,r=t!==n._lastToggleNode,i=!o&&!r;o?(n._notify(Le.ENTER,t),n._onInteractive()):r&&n._notify(Le.MOVE,t,n._lastToggleNode),n._lastToggleNode=t,i&&n._options.sameClickClose&&n._close()},this._handleClose=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),n._close()},this._handleKeyUp=function(e){(e.key===Le.ESCAPE||e.key===Le.ESC||27===e.keyCode)&&(e.preventDefault(),n._close())},this._init(t,o)}return s(e,[{key:"_init",value:function(t,n){t&&(this._wcNode=t),n&&(this._options=c({},e.DEFAULTS,n));var o=this._options.containerClass;this._container=o?this._wcNode.querySelector(o):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=ne(this._container,Le.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=ne(this._container,Le.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=De(this._container,Le.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=ne(this._container.ownerDocument,Le.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(Me)?Se(e,Me):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(Le.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),e}();Ue.DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Ve=q(function(e){return function(t){function n(){var e,t,o;a(this,n);for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];return t=o=f(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),o._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;o.contextNode&&(clearTimeout(o.timeoutId),o.timeoutId=setTimeout(function(){o.contextCallback(o.contextNode,e)},10)),o.unContextEnabled&&o.unContextEnabled(),o.unContextEnabled=ie("context/available",o._makeContextReady)},f(o,t)}return u(n,e),s(n,[{key:"connectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;re[e]||(re[e]={count:0,queue:[]});var o=re[e].queue;Array.isArray(o)?o.push([e,t,n]):$(n,e,t)}("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(e){return function(t){function n(){return a(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return u(n,e),s(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(e){return function(t){function n(){var e,t,o;a(this,n);for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];return t=o=f(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),o._reduceProps=function(e,t){var n=e.props,r=e.shouldUpdate,i="_"+t,a=n[t],s=o[i];return r||o.shouldUpdateCallback(a,s)?(o.props[t]=a,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},f(o,t)}return u(n,e),s(n,[{key:"init",value:function(e){var t=this;l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._isConnected=!1,this.props={},this.updatedDebounced=oe(function(){return t.updated&&t.updated()},50);var o=this.constructor.observedAttributes;Array.isArray(o)&&o.forEach(function(e){je(e)})}},{key:"connectedCallback",value:function(){var e=this;if(l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(t)){var o=this.constructor.propTypes;t.forEach(function(t){var n=je(t);if(e.hasAttribute(t)){var r=Se(e,t,o[n]);e.props[n]=r}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var o=je(e);if(this.hasAttribute(e)){var r=this.constructor.propTypes;this.props[o]=Ae(n,e,r[o])}else this.props[o]=null;this.checkPropTypes(),"value"===e&&null!==n&&$(this,Ie,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,o=Object.keys(e).filter(function(e){return n.indexOf(we(e))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&g.checkPropTypes(t,this.props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(we)}}]),n}()},function(e){return function(t){function n(){return a(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return u(n,e),s(n,[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,o=p(e,["template"]);l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,o),this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var e=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var o=this._template;try{if(t){for(var r=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});Ce||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var s=o(this.props,this.childrenFragment,this),c=document.createDocumentFragment();if(Array.isArray(s))s.forEach(function(e){c.appendChild(e)});else if(s){if("string"==typeof s)throw new Oe(this);c.appendChild(s)}if(t)l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,c);else{var u=this.cloneNode(!1);u._isMorphing=!0,u.appendChild(c),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":i(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":i(t)))throw new Error("componentMorph: newTree should be an object");ve(t,e)}(this,u),function(){for(var e=void 0;e=ce.pop();)delete e.isSameNode;ce=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),n}()},function(e){return function(t){function n(){return a(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return u(n,e),s(n,[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,o=void 0===t?"":t,r=p(e,["styles"]);l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,r),this._styles=o}},{key:"connectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),n}()}),qe=(q(Ve,H),q(Ve,function(e){return function(t){function n(){var e,t,o;a(this,n);for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];return t=o=f(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),o._appendStyles=function(){n.appendGlobalStyles(o._styles,o.nodeName)},f(o,t)}return u(n,e),s(n,null,[{key:"appendGlobalStyles",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.uuidv4();if(t&&!K[n]){var o=document.createElement("style"),r=document.createTextNode(t);K[n]=!0,o.appendChild(r),o.setAttribute("data-c-name",n.toLowerCase()),document.head.appendChild(o)}}}]),n}()},H)(HTMLElement));var Fe,ze=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,He=function(){var e=window.requestAnimationFrame||window[ze+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var t=0;e=function(e){var n=Date.now(),o=Math.max(0,16-(n-t)),r=setTimeout(function(){e(n+o)},o);return t=n+o,r}}return e}(),Ke=(Fe=(Fe=window.cancelAnimationFrame||window[ze+"CancelAnimationFrame"]||window[ze+"CancelRequestAnimationFrame"])?Fe.bind(window):function(e){clearTimeout(e)},function(e){function t(e,n){a(this,t),n=c({},t.DEFAULTS,n);var o=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return o.toggleState=function(){o.isOpen?o.close():o.open()},o.handleTransitionEnd=function(e){"height"===e.propertyName&&(e.target.style.height="",o.offInteractive())},o.handleToggleClick=function(){o.toggleState()},o.isOpen=!1,o.options=n,o.wcNode=e,o.init(),o}return u(t,Ue),s(t,[{key:"init",value:function(){this.toggle=this.wcNode.querySelector(this.options.toggle),this.info=this.wcNode.querySelector(this.options.info),this.on()}},{key:"on",value:function(){this.off(),this.offToggleClicked=ne(this.toggle,"click",this.handleToggleClick)}},{key:"off",value:function(){this.offToggleClicked&&this.offToggleClicked()}},{key:"onInteractive",value:function(){this.offInteractive(),this.unTransitionEnd=ne(this.info,"transitionend",this.handleTransitionEnd)}},{key:"offInteractive",value:function(){this.unTransitionEnd&&this.unTransitionEnd()}},{key:"open",value:function(){var e=this.wcNode,t=e.lastElementChild;if(!this.isOpen){this.isOpen=!0,t.style.overflow="scroll";var n=t.scrollHeight;t.style.overflow="",this.onInteractive(),t.style.height=n+"px",function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=Z.apply(void 0,[e].concat(n));if(!0!==r){var i=[].concat(n);Array.isArray(r)&&(i=r.reduce(Y,[])),i&&(e.className+=" "+i.join(" "))}}(e,this.options.isOpen)}}},{key:"close",value:function(){var e=this,t=this.wcNode,n=t.lastElementChild,o=n.scrollHeight;this.isOpen&&(this.isOpen=!1,this.offInteractive(),He(function(){n.style.height=o+"px",He(function(){!function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=Z.apply(void 0,[e].concat(n));if(!1!==r){var i=[].concat(n);if(Array.isArray(r)&&(i=r.reduce(X,[])),i){var a=e.className;e.className=i.reduce(Q,a)}}}(t,e.options.isOpen),n.style.height=0})}))}},{key:"destroy",value:function(){l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this),this.off(),this.offInteractive(),delete this.wcNode,delete this.options}}]),t}());Ke.DEFAULTS={containerClass:!1,toggle:".js-form-group-info__toggle",info:".js-form-group__info",legendIconWrapper:".js-form-group__legend-icon-wrapper",isOpen:"is-form-group-info-open"};var We=/\n[\s]+$/,$e=/^\n[\s]+/,Be=/[\s]+$/,Ge=/^[\s]+/,Je=/[\n\s]+/g,Ye=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Ze=["code","pre","textarea"],Xe=function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,s=0,c=n.length;s<c;s++){var l=n[s];if(Array.isArray(l))e(t,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof l)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=l:(l=document.createTextNode(l),t.appendChild(l),u=l),s===c-1&&(a=!1,-1===Ye.indexOf(i)&&-1===Ze.indexOf(i)?""===(o=u.nodeValue.replace($e,"").replace(Be,"").replace(We,"").replace(Je," "))?t.removeChild(u):u.nodeValue=o:-1===Ze.indexOf(i)&&(r=0===s?"":" ",o=u.nodeValue.replace($e,r).replace(Ge," ").replace(Be,"").replace(We,"").replace(Je," "),u.nodeValue=o));else if(l&&l.nodeType){a&&(a=!1,-1===Ye.indexOf(i)&&-1===Ze.indexOf(i)?""===(o=u.nodeValue.replace($e,"").replace(We,"").replace(Je," "))?t.removeChild(u):u.nodeValue=o:-1===Ze.indexOf(i)&&(o=u.nodeValue.replace(Ge," ").replace($e,"").replace(We,"").replace(Je," "),u.nodeValue=o));var p=l.nodeName;p&&(i=p.toLowerCase()),t.appendChild(l)}}}};var Qe=function(e){var t,n=document.createElement("div");return n.innerHTML=e,t=n.childNodes,Array.isArray(t)?t:[].slice.call(t)};function et(e,t){var n,o,r,i,a,s,c,l=e.legend,u=void 0===l?"":l,p=e.info,f=void 0===p?"":p,d=e.error,h=void 0===d?"":d,v=Qe('<axa-icon icon="info-open" classes="m-form-group__icon m-form-group__icon--open"></axa-icon>'),y=Qe('<axa-icon icon="info-close" classes="m-form-group__icon m-form-group__icon--close"></axa-icon>');return[(a=document.createElement("fieldset"),a.setAttribute("class","m-form-group__fieldset m-form-group__fieldset"),Xe(a,["\n        ",(r=document.createElement("div"),r.setAttribute("class","m-form-group__legend-icon-wrapper js-form-group__legend-icon-wrapper"),Xe(r,["\n          ",(n=document.createElement("legend"),n.setAttribute("class","m-form-group__legend"),Xe(n,["\n            ",u,"\n          "]),n),"\n          ",(o=document.createElement("a"),o.setAttribute("tabindex","0"),o.setAttribute("role","button"),o.setAttribute("class","m-form-group__info-button js-form-group-info__toggle"),Xe(o,["\n          ",y,"\n          ",v,"\n          "]),o),"\n        "]),r),"\n\n        ",t,"\n        ",(i=document.createElement("span"),i.setAttribute("class","m-form-group__error"),Xe(i,[h]),i),"\n      "]),a),(c=document.createElement("div"),c.setAttribute("class","m-form-group__info js-form-group__info"),Xe(c,["\n          ",(s=document.createElement("div"),s.setAttribute("class","m-form-group__info-content"),Xe(s,[f]),s),"\n      "]),c)]}var tt,nt,ot,rt=function(e){function t(){return a(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,qe),s(t,[{key:"init",value:function(){l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"init",this).call(this,{styles:".m-form-group {\n  display: block; }\n  .m-form-group:not(:first-child) {\n    margin-top: 15px; }\n    @media (min-width: 768px) {\n      .m-form-group:not(:first-child) {\n        margin-top: 20px; } }\n\n.m-form-group__fieldset {\n  display: block; }\n\n.m-form-group--info .m-form-group__legend {\n  margin-right: 8px; }\n\n.m-form-group--info .m-form-group__info-button {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.m-form-group--error .m-form-group__error {\n  display: block; }\n\n.m-form-group__legend-icon-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%; }\n\n.m-form-group__error {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  margin: 4px 0;\n  display: none;\n  color: #c91432; }\n  @media (min-width: 576px) {\n    .m-form-group__error {\n      font-size: 14px;\n      line-height: 1.21; } }\n\n.m-form-group__legend {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n  @media (min-width: 576px) {\n    .m-form-group__legend {\n      font-size: 16px; } }\n\n.m-form-group__info-button {\n  background: transparent;\n  border: none;\n  display: none;\n  margin: 0;\n  margin-right: -1px;\n  padding: 0;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  cursor: pointer; }\n  .m-form-group__info-button:hover, .m-form-group__info-button:active, .m-form-group__info-button:focus {\n    outline: none;\n    cursor: pointer; }\n\n.m-form-group__icon {\n  display: block;\n  height: 16px;\n  width: 16px;\n  fill: #00008f; }\n\n.m-form-group__icon--open {\n  display: block; }\n\n.m-form-group__icon--close {\n  display: none; }\n\n.m-form-group__info {\n  height: 0;\n  min-width: 100%;\n  overflow: hidden;\n  -webkit-transition: height 0.3s ease;\n  transition: height 0.3s ease; }\n\n.m-form-group__info-content {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  padding: 20px;\n  color: #fff;\n  background-color: #2425aa;\n  -webkit-box-shadow: inset 0 0 15px #00008f;\n          box-shadow: inset 0 0 15px #00008f; }\n  @media (min-width: 576px) {\n    .m-form-group__info-content {\n      font-size: 14px;\n      line-height: 1.21; } }\n\n.is-form-group-info-open .m-form-group__info {\n  height: auto; }\n\n.is-form-group-info-open .m-form-group__icon--close {\n  display: block; }\n\n.is-form-group-info-open .m-form-group__icon--open {\n  display: none; }\n",template:et})}},{key:"willRenderCallback",value:function(){var e=this.props,t=e.info,n=e.error;this.className=V(this.initialClassName,"m-form-group",{"m-form-group--info":t,"m-form-group--error":n})}},{key:"didRenderCallback",value:function(){this.interaction&&this.interaction.destroy(),this.interaction=new Ke(this)}},{key:"disconnectedCallback",value:function(){l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.interaction.destroy(),delete this.interaction}}]),t}();return rt.tagName="axa-form-group",rt.propTypes={legend:g.string,info:g.string,error:g.string},tt=rt.tagName,nt=rt,customElements.get(tt)||customElements.define(tt,nt,ot),rt});
