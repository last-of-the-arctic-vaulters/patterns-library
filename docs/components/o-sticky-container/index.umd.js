!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.StyleGuideWebComponent={})}(this,function(t){"use strict";function e(t,e){return t(e={exports:{}},e.exports),e.exports}var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(t){o[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(t){return!1}})()&&Object.assign;var i="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},c=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},l=function t(e,n,o){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},p=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},d=function(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},f=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},h=function t(e,n,o,r){var i=Object.getOwnPropertyDescriptor(e,n);if(void 0===i){var a=Object.getPrototypeOf(e);null!==a&&t(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},v=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),y=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)};function _(){}var b=0;function g(t,e){var n=t[e];return"function"==typeof n&&(t[e]=function(t){function e(){return t.apply(void 0,arguments)}return 0===b&&(b++,Object.keys(t).map(function(n){return e[n]=t[n],n}).reduce(g,e),b--),e}(n)),t}var m=e(function(t){t.exports=function(){function t(t,e,n,o,r,a){if(a!==i){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return n.checkPropTypes=_,n.PropTypes=n,n}()});Object.keys(m).reduce(g,m);var C,O,k,w,T=m.oneOf(["left","center","right"]),A=m.oneOf(["left","right"]),N=(m.oneOf(["top","bottom"]),m.oneOf(["up","down"])),j=m.oneOf(["ok","pending","error","unknown"]),E=m.oneOf(["row","col","rowgroup","colgroup","auto"]),x=m.oneOfType([m.string,m.number]),P={text:x,value:m.any,rowspan:x,colspan:x,scope:E,align:T,dense:m.bool},S={float:A,strong:m.bool,bold:m.bool},D=m.oneOfType([m.string,m.number]),R=m.oneOfType([D,m.shape(u({},P,{sort:N,sortActive:m.bool}))]),I=m.oneOfType([D,m.shape(u({},P,S,{action:m.bool,state:j}))]),L=m.oneOfType([D,m.shape(u({},P,S))]),F=m.oneOfType([m.arrayOf(R),m.shape({cells:m.arrayOf(R)})]),U=m.oneOfType([m.arrayOf(I),m.shape({cells:m.arrayOf(I),action:m.bool})]),M=m.oneOfType([m.arrayOf(L),m.shape({cells:m.arrayOf(L)})]),q=(m.oneOfType([F,m.arrayOf(F)]),m.oneOfType([U,m.arrayOf(U)]),m.oneOfType([M,m.arrayOf(M)]),e(function(t){!function(){var e={}.hasOwnProperty;function n(){for(var t=[],o=0;o<arguments.length;o++){var r=arguments[o];if(r){var i=void 0===r?"undefined":a(r);if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r))t.push(n.apply(null,r));else if("object"===i)for(var s in r)e.call(r,s)&&r[s]&&t.push(s)}}return t.join(" ")}t.exports?t.exports=n:window.classNames=n}()})),z=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight(function(t,e){return e(t)},t)}},V={},K=(C=Object,O=C.getPrototypeOf||function(t){return t.__proto__},k=C.setPrototypeOf||function(t,e){return t.__proto__=e,t},w="object"===("undefined"==typeof Reflect?"undefined":a(Reflect))?Reflect.construct:function(t,e,n){var o,r=[null];return r.push.apply(r,e),o=t.bind.apply(t,r),k(new o,n.prototype)},function(t){var e=O(t);return k(t,k(function(){return w(e,arguments,O(this).constructor)},e))}),W=function(t){return K(function(e){function n(){return s(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),c(n,[{key:"init",value:function(){var t;this._id=((t=this.nodeName)in V||(V[t]=0),++V[t]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}}]),n}())},B={},H=function(){try{var t=new window.CustomEvent("test",{cancelable:!0});if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(t){}return e;function e(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.bubbles,o=void 0!==n&&n,r=e.cancelable,i=void 0!==r&&r,a=e.detail,s=void 0===a?void 0:a,c=document.createEvent("CustomEvent");c.initCustomEvent(t,o,i,s);var u=c.preventDefault;return c.preventDefault=function(){u.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},c}}();function Y(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new H(e,u({},o,{detail:n}));return t.dispatchEvent(r)}var $=function(){var t=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=Object.defineProperty({},"passive",{get:function(){t=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,e),window.removeEventListener("testPassiveEventSupport",n,e)}return t}(),G=/^\s+|\s{2,}|\s+$/g;function J(t,e){return new RegExp("^"+t+"$|^"+t+"\\s|\\s"+t+"\\s|\\s"+t+"$",e)}function X(t){for(var e=arguments.length,n=Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];var r=Q.apply(void 0,[t].concat(n));if(!0!==r){var i=[].concat(n);Array.isArray(r)&&(i=r.reduce(Z,[])),i&&(t.className+=" "+i.join(" "))}}function Z(t,e){var n=e.className;return e.hasClass||t.push(n),t}function Q(t){for(var e=t.className,n=!1,o=!0,r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var s=i.map(function(t){var r=J(t).test(e);r?n=!0:o=!1;return{className:t,hasClass:r}});return!(!o&&!n)&&s}function tt(t){for(var e=arguments.length,n=Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];var r=Q.apply(void 0,[t].concat(n));if(!1!==r){var i=[].concat(n);if(Array.isArray(r)&&(i=r.reduce(et,[])),i){var a=t.className;t.className=i.reduce(nt,a)}}}function et(t,e){var n=e.className;return e.hasClass&&t.push(n),t}function nt(t,e){var n=J(e,"g");return t.replace(n," ").replace(G," ")}var ot=/\s+/,rt={transitionend:function(){for(var t=document.createElement("div").style,e={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(e),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==t[r=n[i]])return e[r];return""}()};function it(t,e,n,o){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=r.capture,s=void 0!==i&&i,c=r.passive,u=void 0===c||c;if(rt[e]&&(e=rt[e]),!t||!e)return null;var l=void 0===n?"undefined":a(n),p=n&&"string"===l;if("function"===l){if(o){var d=o;s=d.capture,u=d.passive}o=n}for(var f=$?{capture:s,passive:u}:s,h=p?function(e){var r=e.target;for(;!Q(r,n)&&r!==t;)r=r.parentNode;if(r!==t)return o(e,r)}:o,v=e.split(ot),y=v.length,_=0;_<y;++_)t.addEventListener(v[_],h,f);return function e(){for(var n=0;n<y;++n)t.removeEventListener(v[n],h,f);!function(t,e){if(!t)return!1;for(var n=Object.keys(t),o=n.length,r=0;r<o;++r){var i=n[r];if(t[i]===e)return delete t[i]}}(this,e)}}function at(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.leading,r=void 0!==o&&o,i=n.trailing,a=void 0===i||i,s=n.maxWait,c=void 0!==s&&s,u=void 0,l=void 0,p=void 0,d=void 0,f=!1,h=e!==c,v=!1!==c;function _(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return u=o,h&&(l&&clearTimeout(l),l=setTimeout(b,e)),v&&!p&&(p=setTimeout(g,c)),r&&!f&&(f=!0,d=t.apply(void 0,y(u))),d}return _.flush=function(){(l||p)&&(d=t.apply(void 0,y(u)));return C(),d},_.cancel=C,_;function b(){p&&clearTimeout(p),m()}function g(){l&&clearTimeout(l),m()}function m(){a&&(d=t.apply(void 0,y(u))),l=null,p=null,f=!1}function C(){l&&(clearTimeout(l),l=null),p&&(clearTimeout(p),p=null),u=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var st=window.__subscriptions;function ct(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;st[t]||(st[t]={count:0,queue:[]});var o=st[t].queue;Array.isArray(o)?o.push([t,e,n]):Y(n,t,e)}function ut(t,e){var n=it(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,t,e);st[t]||(st[t]={count:0});var o,r=st[t];return r.count++,r.onsubscribe||(r.onsubscribe=at((o=t,function(){Y(document,"pubsub/onsubscribe",o),Y(document,"pubsub/onsubscribe/"+o,o),st[o]&&delete st[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete st[t]}}it(document,"pubsub/onsubscribe",function(t){var e=t.detail;st[e]||(st[e]={count:0});var n=st[e],o=n.queue;Array.isArray(o)&&(o.forEach(function(t){var e=v(t,3),n=e[0],o=e[1],r=e[2];Y(r,n,o)}),delete n.queue)});var lt,pt=function(t,e){return t===e},dt=((lt=function(){var t;return(t=console).log.apply(t,arguments)},function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt;return function(){for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];return function(){for(var e=arguments.length,o=Array(e),r=0;r<e;r++)o[r]=arguments[r];return function(){return t.apply(void 0,[].concat(n,o))?lt.apply(void 0,arguments):void 0}}}})()(!0),[]);var ft=1,ht=3,vt=8;function yt(t,e){var n=t.nodeType,o=t.nodeName;n===ft&&function(t,e){for(var n=e.skipChildren&&e.skipChildren(),o=e.constructor.observedAttributes,r=o&&Array.isArray(o)&&o.length,i=function(t){return n&&r&&-1===o.indexOf(t)},a=e.attributes,s=t.attributes,c=null,u=null,l=null,p=null,d=s.length-1;d>=0;--d)if(p=s[d],l=p.name,c=p.namespaceURI,u=p.value,!i(l))if(c){var f=p.localName;e.getAttributeNS(c,f||l)!==u&&e.setAttributeNS(c,l,u)}else e.hasAttribute(l)?e.getAttribute(l)!==u&&("null"===u||"undefined"===u?e.removeAttribute(l):e.setAttribute(l,u)):e.setAttribute(l,u);for(var h=a.length-1;h>=0;--h)if(!1!==(p=a[h]).specified){if(l=p.name,c=p.namespaceURI,i(l))continue;c?(l=p.localName||l,t.hasAttributeNS(c,l)||e.removeAttributeNS(c,l)):t.hasAttributeNS(null,l)||e.removeAttribute(l)}}(t,e),n!==ht&&n!==vt||e.nodeValue===t.nodeValue||(e.nodeValue=t.nodeValue),"INPUT"===o?function(t,e){var n=t.value,o=e.value;_t(t,e,"checked"),_t(t,e,"disabled"),n!==o&&(e.setAttribute("value",n),e.value=n);"null"===n&&(e.value="",e.removeAttribute("value"));t.hasAttributeNS(null,"value")?"range"===e.type&&(e.value=n):e.removeAttribute("value")}(t,e):"OPTION"===o?_t(t,e,"selected"):"TEXTAREA"===o&&function(t,e){var n=t.value;n!==e.value&&(e.value=n);if(e.firstChild&&e.firstChild.nodeValue!==n){if(""===n&&e.firstChild.nodeValue===e.placeholder)return;e.firstChild.nodeValue=n}}(t,e)}function _t(t,e,n){t[n]!==e[n]&&(e[n]=t[n],t[n]?e.setAttribute(n,""):e.removeAttribute(n))}var bt=3;function gt(t,e){return e?t?t.isSameNode&&t.isSameNode(e)?e:t.tagName!==e.tagName?t:(yt(t,e),e.skipChildren&&e.skipChildren()||function(t,e){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=e.childNodes[s],o=t.childNodes[s-a],n||o;s++)if(o)if(n)if(mt(o,n))(r=gt(o,n))!==n&&(e.replaceChild(r,n),a++);else{i=null;for(var c=s;c<e.childNodes.length;c++)if(mt(e.childNodes[c],o)){i=e.childNodes[c];break}i?((r=gt(o,i))!==i&&a++,e.insertBefore(r,n)):o.id||n.id?(e.insertBefore(o,n),a++):(r=gt(o,n))!==n&&(e.replaceChild(r,n),a++)}else e.appendChild(o),a++;else e.removeChild(n),s--}(t,e),e):null:t}function mt(t,e){return t.id?t.id===e.id:t.isSameNode?t.isSameNode(e):t.tagName===e.tagName&&(t.type===bt&&t.nodeValue===e.nodeValue)}var Ct,Ot,kt,wt,Tt=(Ct=Object,Ot=Ct.getPrototypeOf||function(t){return t.__proto__},kt=Ct.setPrototypeOf||function(t,e){return t.__proto__=e,t},wt="object"===("undefined"==typeof Reflect?"undefined":a(Reflect))?Reflect.construct:function(t,e,n){var o,r=[null];return r.push.apply(r,e),o=t.bind.apply(t,r),kt(new o,n.prototype)},function(t){var e=Ot(t);return kt(t,kt(function(){return wt(e,arguments,Ot(this).constructor)},e))})(function(t){function e(t){var n;s(this,e);for(var o="\n    Web Component "+t.nodeName+"%c#"+t._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var c=f(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this,o].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(c,e),c.name="TemplateNoStringReturnException",c}return p(e,t),e}(Error)),At=!!document.createDocumentFragment().children,Nt=/[A-Z]/g;function jt(t){return t.replace(Nt,Et)}function Et(t,e,n){var o=t.toLowerCase(),r=n.charAt(e+1);return 0===e||r.toUpperCase()===r?o:"-"+o}var xt=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Pt(t,e,n){var o=t;if(n)return function(t,e,n){var o=t;switch(n){case m.string:case m.string.isRequired:return t;case m.bool:case m.bool.isRequired:if(!t||e===t)return!0;case m.number:case m.number.isRequired:case m.object:case m.object.isRequired:case m.array:case m.array.isRequired:default:if(xt.test(t))try{o=JSON.parse(t)}catch(n){console.error("Attribute "+e+" has an error:\n"+n+"\n",t)}}return o}(t,e,n);if(t&&e!==t){if(xt.test(t))try{o=JSON.parse(t)}catch(n){console.error("Attribute "+e+" has an error:\n"+n+"\n",t)}}else o=!0;return o}var St=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,Dt=/[-_]+/g;function Rt(t){return t.replace(St,It)}function It(t,e){return 0==+t||Dt.test(t)?"":0===e?t.toLowerCase():t.toUpperCase()}function Lt(t,e,n){var o=1===t.nodeType,r=t.constructor.propTypes,i=n;!n&&o&&(i=(void 0===r?{}:r)[Rt(e)]);if(o&&!t.hasAttribute(e))return i!==m.bool&&i!==m.bool.isRequired&&void 0;var a=t.value;return e?a=t.getAttribute(e):e=t.name,a=Pt(a,e,i)}function Ft(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];for(var o=e.length,r={},i=0;i<o;++i){var a=e[i];r[a.toUpperCase()]=a}return r}var Ut=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Mt(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=o.capture,i=void 0===r||r,a=o.passive,s=void 0===a||a,c=t.ownerDocument.documentElement,u=it(c,e,function(e){var o=e.target;if(!t.contains(o)&&t!==o)return n(e)},{capture:i,passive:s});return Ut&&(c.style.cursor="pointer"),u}var qt=Ft("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),zt="axa-change",Vt="data-prevent-default";((function(){function t(e){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};s(this,t),this._handleClick=function(t,e){n.shouldPreventDefault(e||t.currentTarget)&&t.preventDefault();var o=!n._lastToggleNode,r=e!==n._lastToggleNode,i=!o&&!r;o?(n._notify(qt.ENTER,e),n._onInteractive()):r&&n._notify(qt.MOVE,e,n._lastToggleNode),n._lastToggleNode=e,i&&n._options.sameClickClose&&n._close()},this._handleClose=function(t,e){n.shouldPreventDefault(e||t.currentTarget)&&t.preventDefault(),n._close()},this._handleKeyUp=function(t){(t.key===qt.ESCAPE||t.key===qt.ESC||27===t.keyCode)&&(t.preventDefault(),n._close())},this._init(e,o)}return c(t,[{key:"_init",value:function(e,n){e&&(this._wcNode=e),n&&(this._options=u({},t.DEFAULTS,n));var o=this._options.containerClass;this._container=o?this._wcNode.querySelector(o):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=it(this._container,qt.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive();var t=this._container,e=this._options,n=e.closeClass,o=e.outerClose,r=e.escapeClose,i=e.preventDefault;n&&(this._unCloseClick=it(t,qt.CLICK,n,this._handleClose,{passive:!i})),o&&(this._unOuterClick=Mt(t,qt.CLICK,this._handleClose,{passive:!i})),r&&(this._unCloseEscape=it(t.ownerDocument,qt.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(t){return t.hasAttribute(Vt)?Lt(t,Vt):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(qt.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(t,e,n){t in this&&"function"==typeof this[t]&&this[t](e,n)}},{key:"enter",value:function(t){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(t,e){}},{key:"leave",value:function(t){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),t})()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Kt=z(function(t){var e,n;return n=e=function(e){function n(){return s(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),n}(),e.version="2.0.1-beta.241",n},function(t){return function(e){function n(){return s(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),c(n,[{key:"init",value:function(t){var e=this;l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,t),this._makeContextReady=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;e.contextNode&&(clearTimeout(e.timeoutId),e.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),e.unContextEnabled&&e.unContextEnabled(),e.unContextEnabled=ut("context/available",e._makeContextReady)}}},{key:"connectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var t=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=t,ct("context/available",t)}},{key:"consumeContext",value:function(t){this.__consumedContext=t&&t.toLowerCase()}},{key:"contextNode",get:function(){for(var t=this.__consumedContext,e=this.parentNode;e&&(!e.__isContext||t&&t!==e.__contextName);)e=e.parentNode;return!(!e||!e.__isContext)&&e}}]),n}()},function(t){return function(e){function n(){return s(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),c(n,[{key:"appendChild",value:function(t){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(t),this.render()):l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,t)}},{key:"innerText",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",t,this)}},{key:"textContent",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",t,this)}},{key:"innerHTML",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createElement("div");e.innerHTML=t,this._lightDOMRefs=Array.from(e.children),this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",t,this)}}]),n}()},function(t){return function(e){function n(){return s(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),c(n,[{key:"init",value:function(t){var e=this;l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,t),this._isConnected=!1,this.props={},this.updatedDebounced=at(function(){return e.updated&&e.updated()},50);var o=this.constructor.observedAttributes;Array.isArray(o)&&o.forEach(function(t){Rt(t)})}},{key:"connectedCallback",value:function(){var t=this;if(l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var o=this.constructor.propTypes;e.forEach(function(e){var n=Rt(e);if(t.hasAttribute(e)){var r=Lt(t,e,o[n]);t.props[n]=r}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(t,e,o){if(l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this).call(this,t,e,o),this.shouldUpdateCallback(o,e)){var r=Rt(t);if(this.hasAttribute(t)){var i=this.constructor.propTypes;this.props[r]=Pt(o,t,i[r])}else this.props[r]=null;this.checkPropTypes(),"value"===t&&null!==o&&Y(this,zt,o,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(t){var e=this;l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this).call(this);var o=this.constructor.observedAttributes,r=void 0===o?[]:o,i=Object.keys(t).filter(function(t){return r.indexOf(jt(t))>-1}).reduce(function(t,n){var o=t.props,r=t.shouldUpdate,i=o[n],a=e.props&&e.props[n]?e.props[n]:void 0;return r||e.shouldUpdateCallback(i,a)?(e.props[n]=i,{props:o,shouldUpdate:!0}):{props:o,shouldUpdate:!1}},{props:t,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),i&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var t=this.constructor,e=t.propTypes,n=t.tagName,o=this.props;e&&m.checkPropTypes(e,o,"prop",n)}},{key:"shouldUpdateCallback",value:function(t,e){return t!==e}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var t=this.propTypes;return t&&Object.keys(t).map(jt)}}]),n}()},function(t){return function(e){function n(){return s(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),c(n,[{key:"init",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.template,o=d(t,["template"]);l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,o),this._template=e,this._hasTemplate=!!e,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var t=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var o=this._template;try{if(e){for(var r=document.createDocumentFragment(),i=[];this.firstChild;)i.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=i,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(e){var n=e.cloneNode(!0);t.childrenFragment.appendChild(n)});At||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(t){return 1===t.nodeType}));var s=o(this.props,this.childrenFragment,this),c=document.createDocumentFragment();if(Array.isArray(s))s.forEach(function(t){c.appendChild(t)});else if(s){if("string"==typeof s)throw new Tt(this);c.appendChild(s)}if(e)l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,c);else{var u=this.cloneNode(!1);u._isMorphing=!0,u.appendChild(c),this._isMorphing=!0,function(t,e){if("object"!==(void 0===t?"undefined":a(t)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===e?"undefined":a(e)))throw new Error("componentMorph: newTree should be an object");gt(e,t)}(this,u),function(){for(var t=void 0;t=dt.pop();)delete t.isSameNode;dt=[]}(),this._isMorphing=!1}}catch(t){console.error(t)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(t){}},{key:"didRenderCallback",value:function(t){}}]),n}()},function(t){return function(e){function n(){return s(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),c(n,[{key:"init",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.styles,o=void 0===e?"":e,r=d(t,["styles"]);l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,r),this._styles=o}},{key:"connectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var e=document.createElement("style"),n=document.createTextNode(this._styles);e.appendChild(n),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",e):t.appendChild(e)}}}]),n}()}),Wt=(z(Kt,W),z(Kt,function(t){return function(e){function n(){return s(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),c(n,[{key:"init",value:function(t){var e=this;l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,t),this._appendStyles=function(){n.appendGlobalStyles(e._styles,e.nodeName)}}}],[{key:"appendGlobalStyles",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.uuidv4();if(e&&!B[n]){var o=document.createElement("style"),r=document.createTextNode(e);B[n]=!0,o.appendChild(r),o.setAttribute("data-c-name",n.toLowerCase()),document.head.appendChild(o)}}}]),n}()},W)(HTMLElement));var Bt="pageYOffset"in window?function(){return window.pageYOffset}:function(){var t=document,e=t.body;return t.documentElement.scrollTop||e.scrollTop||0};var Ht,Yt=function(){if(!window.getComputedStyle)return null;var t=window.getComputedStyle(document.documentElement,""),e=(Array.prototype.slice.call(t).join("").match(/-(moz|webkit|ms)-/)||""===t.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+e+")","i"))[1],lowercase:e,css:"-"+e+"-",js:e[0].toUpperCase()+e.slice(1)}}().lowercase,$t=function(){var t=window.requestAnimationFrame||window[Yt+"RequestAnimationFrame"];if(t)t=t.bind(window);else{var e=0;t=function(t){var n=Date.now(),o=Math.max(0,16-(n-e)),r=setTimeout(function(){t(n+o)},o);return e=n+o,r}}return t}(),Gt=(Ht=(Ht=window.cancelAnimationFrame||window[Yt+"CancelAnimationFrame"]||window[Yt+"CancelRequestAnimationFrame"])?Ht.bind(window):function(t){clearTimeout(t)},void 0),Jt=0,Xt=["resize","orientationchange"].join(" "),Zt=[Xt,"scroll","touchstart","touchmove","touchend","pageshow","load"].join(" "),Qt=function(){function t(){var e=this;s(this,t),this._change=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).type;Xt.indexOf(t)>=0&&(e.forceRepaint=!0),e.framePending||$t(function(){for(var t=e.containerNodes,n=e.forceRepaint,o=e.lastScrollTop,r=e.isDirectionFrozen,i=e.lastDirection,a=Bt(),s=a-o,c=r?i:s>0?1:s<0?-1:i,u=0,l=t.length;u<l;u++){var p=t[u],d=p.getBoundingClientRect(),f=d.top,h=d.bottom;ct("sticky-container/"+(f<=0&&h>=0?"active":"idle"),{containerTop:f,containerBottom:h,direction:c,forceRepaint:n},p)}e.lastScrollTop=a,e.lastDirection=c,e.framePending=!1,e.forceRepaint=!1})},this._freezeDirection=function(){e.isDirectionFrozen=!0,e.lastDirection=-1},this._thawDirection=function(){e.isDirectionFrozen=!1},this.forceRepaint=!1,this.framePending=!1,this.lastScrollTop=0,this.isDirectionFrozen=!1,this.containerNodes=[],this._on()}return c(t,[{key:"addContainer",value:function(t){this.containerNodes.push(t),this._change()}},{key:"_on",value:function(){this._off(),this._unChange=it(window,Zt,this._change),this._unFreezeDirection=ut("sticky-container/freeze-direction",this._freezeDirection),this._unThawDirection=ut("sticky-container/thaw-direction",this._thawDirection)}},{key:"_off",value:function(){this._unChange&&this._unChange(),this._unFreezeDirection&&this._unFreezeDirection(),this._unThawDirection&&this._unThawDirection()}},{key:"remove",value:function(t){var e,n,o;t&&(e=this.containerNodes,n=t,(o=e.indexOf(n))>-1&&e.splice(o,1)),--Jt<=0&&Gt&&(this._off(),delete this.containerNodes,Gt=null)}}]),t}();var te=Ft("IS_IDLE","IS_ACTIVE"),ee=function(){function t(e){var n=this;s(this,t),this._active=function(){n.state!==te.IS_ACTIVE&&(n.state=te.IS_ACTIVE,X(n.roodNode,t.DEFAULTS.isActiveClass),tt(n.roodNode,t.DEFAULTS.isIdleClass))},this._idle=function(){n.state!==te.IS_IDLE&&(n.state=te.IS_IDLE,X(n.roodNode,t.DEFAULTS.isIdleClass),tt(n.roodNode,t.DEFAULTS.isActiveClass))},this.roodNode=e,this.state=te.IS_IDLE,this.spy=(Gt||(Gt=new Qt),Jt++,Gt),this.spy.addContainer(e),this._on()}return c(t,[{key:"_on",value:function(){this._off(),this._unActive=ut("sticky-container/active",this._active,this.roodNode),this._unIdle=ut("sticky-container/idle",this._idle,this.roodNode)}},{key:"_off",value:function(){this._unActive&&this._unActive(),this._unIdle&&this._unIdle()}},{key:"destroy",value:function(){this._off(),this.spy.remove(this.roodNode),delete this.spy,delete this.roodNode}}]),t}();ee.DEFAULTS={isActiveClass:"is-sticky-container-active",isIdleClass:"is-sticky-container-idle"};var ne,oe,re,ie=function(t){function e(){return s(this,e),f(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return p(e,Wt),c(e,[{key:"init",value:function(){l(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"init",this).call(this,{styles:".o-sticky-container {\n  position: relative;\n  display: block; }\n\n.o-sticky-container--debug {\n  background: rgba(255, 255, 0, 0.5); }\n  .o-sticky-container--debug::before {\n    content: ''; }\n  .o-sticky-container--debug.is-sticky-container-active {\n    background: green; }\n    .o-sticky-container--debug.is-sticky-container-active::before {\n      content: 'is-active'; }\n  .o-sticky-container--debug.is-sticky-container-idle::before {\n    content: 'is-idle'; }\n"}),this.provideContext()}},{key:"connectedCallback",value:function(){l(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"connectedCallback",this).call(this);var t=this.props.debug;this.className=q(this.initialClassName,"o-sticky-container js-sticky-container",{"o-sticky-container--debug":t}),this.stickyContainer=new ee(this)}},{key:"disconnectedCallback",value:function(){this.stickyContainer&&(this.stickyContainer.destroy(),delete this.stickyContainer)}}]),e}();ie.tagName="axa-sticky-container",ie.propTypes={debug:m.bool},ne=ie.tagName,oe=ie,customElements.get(ne)||customElements.define(ne,oe,re),t.AXAStickyContainer=ie,t.default=ie,Object.defineProperty(t,"__esModule",{value:!0})});
