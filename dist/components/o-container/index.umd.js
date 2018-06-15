!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var t={},r=function(e){return e in t||(t[e]=0),++t[e]},i=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,u=void 0===a?void 0:a,c=document.createEvent("CustomEvent");c.initCustomEvent(e,r,i,u);var l=c.preventDefault;return c.preventDefault=function(){l.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},c}}(),b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},p=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},u=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},f=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},h=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var u=i.set;void 0!==u&&u.call(o,r)}return r},c=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},O=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function l(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=new i(t,a({},r,{detail:n}));return e.dispatchEvent(o)}var _=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function m(e){for(var o=e.className,i=!1,a=!0,t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var u=n.map(function(e){var t=(n=e,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",r)).test(o);var n,r;t?i=!0:a=!1;return{className:e,hasClass:t}});return!(!a&&!i)&&u}var g=/\s+/,x={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function v(n,e,r,o){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,u=t.passive,c=void 0===u||u;if(x[e]&&(e=x[e]),!n||!e)return null;var l=void 0===r?"undefined":b(r),s=r&&"string"===l;if("function"===l){if(o){var d=o;a=d.capture,c=d.passive}o=r}for(var p=_?{capture:a,passive:c}:a,f=s?function(e){var t=e.target;for(;!m(t,r)&&t!==n;)t=t.parentNode;if(t!==n)return o(e,t)}:o,h=e.split(g),v=h.length,y=0;y<v;++y)n.addEventListener(h[y],f,p);return function e(){for(var t=0;t<v;++t)n.removeEventListener(h[t],f,p);!function(e,t){if(!e)return;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,e)}}function y(r){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,u=e.maxWait,c=void 0!==u&&u,l=void 0,s=void 0,d=void 0,p=void 0,f=!1,h=o!==c,v=!1!==c;function y(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return l=t,h&&(s&&clearTimeout(s),s=setTimeout(b,o)),v&&!d&&(d=setTimeout(_,c)),i&&!f&&(f=!0,p=r.apply(void 0,O(l))),p}return y.flush=function(){(s||d)&&(p=r.apply(void 0,O(l)));return g(),p},y.cancel=g,y;function b(){d&&clearTimeout(d),m()}function _(){s&&clearTimeout(s),m()}function m(){a&&(p=r.apply(void 0,O(l))),d=s=null,f=!1}function g(){s&&(clearTimeout(s),s=null),d&&(clearTimeout(d),d=null),l=void 0,f=!1}}var C={};function w(e,t){var n=v(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);C[e]||(C[e]={count:0});var r,o=C[e];return o.count++,o.onsubscribe||(o.onsubscribe=y((r=e,function(){l(document,"pubsub/onsubscribe",r),l(document,"pubsub/onsubscribe/"+r,r),C[r]&&delete C[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete C[e]}}v(document,"pubsub/onsubscribe",function(e){var t=e.detail;C[t]||(C[t]={count:0});var n=C[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=c(e,3),n=t[0],r=t[1],o=t[2];l(o,n,r)}),delete n.queue)});var k,e=function(e,t){return e===t},A=((k=function(){var e;return(e=console).log.apply(e,arguments)},function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:e;return function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return o.apply(void 0,[].concat(r,t))?k.apply(void 0,arguments):void 0}}}})()(!0),function(e){function c(e,t){var n;s(this,c);for(var r="\n    Native Property >>>"+e+"<<< exists already at "+t.nodeName+"#"+t._id+" and evaluates to -> "+t[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",o=arguments.length,i=Array(2<o?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a];var u=f(this,(n=c.__proto__||Object.getPrototypeOf(c)).call.apply(n,[this,r].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(u,c),u.name="PropertyExistsException",u}return p(c,e),c}(Error)),E=/[A-Z]/g;function N(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var P=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function j(t,n){var e=t;if(t&&n!==t){if(P.test(t))try{e=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else e=!0;return e}var n=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,T=/[-_]+/g;function S(e){return e.replace(n,R)}function R(e,t){return 0==+e||T.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var M=["title","checked","disabled"],L=[];var D=1,V=3,U=8;function I(e,t){var n=e.nodeType,r=e.nodeName;n===D&&function(e,t){for(var n=t.attributes,r=e.attributes,o=null,i=null,a=null,u=null,c=r.length-1;0<=c;--c)if(u=r[c],a=u.name,o=u.namespaceURI,i=u.value,o){var l=u.localName;t.getAttributeNS(o,l||a)!==i&&t.setAttributeNS(o,a,i)}else t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var s=n.length-1;0<=s;--s)!1!==(u=n[s]).specified&&(a=u.name,(o=u.namespaceURI)?(a=u.localName||a,e.hasAttributeNS(o,a)||t.removeAttributeNS(o,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==V&&n!==U||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;W(e,t,"checked"),W(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?W(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function W(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var H=3;function F(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(I(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,u=0;n=t.childNodes[u],r=e.childNodes[u-a],n||r;u++)if(r)if(n)if(q(r,n))(o=F(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var c=u;c<t.childNodes.length;c++)if(q(t.childNodes[c],r)){i=t.childNodes[c];break}i?((o=F(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=F(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),u--}(e,t),t):null:e}function q(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===H&&e.nodeValue===t.nodeValue)}var $=function(e){function u(e){var t;s(this,u);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,o=Array(1<r?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=f(this,(t=u.__proto__||Object.getPrototypeOf(u)).call.apply(t,[this,n].concat(o)));return Error.captureStackTrace&&Error.captureStackTrace(a,u),a.name="TemplateNoStringReturnException",a}return p(u,e),u}(Error);function K(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(K.prototype,HTMLElement.prototype),Object.setPrototypeOf(K,HTMLElement);var z,G,B,Z=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(t){return function(e){function a(){var e,t,n;s(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=f(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=w("context/available",n._makeContextReady)},f(n,t)}return p(a,t),o(a,[{key:"connectedCallback",value:function(){d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;C[e]||(C[e]={count:0,queue:[]});var r=C[e].queue;Array.isArray(r)?r.push([e,t,n]):l(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function n(){return s(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),o(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function l(e){s(this,l);var c=f(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e));c._reduceProps=function(e,t){var n=e.props,r=e.shouldUpdate,o=c._hasKeys[t];if(-1===M.indexOf(t)&&o)throw new A(t,c);var i="_"+t,a=n[t],u=c[i];return r||c.shouldUpdateCallback(a,u)?(c[i]=a,c._props[t]=a,o&&h(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),t,a,c),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},c._isConnected=!1,c._props={},c._hasKeys={},c.updatedDebounced=y(function(){return c.updated&&c.updated()},50);var t=c.constructor.observedAttributes;return Array.isArray(t)&&t.forEach(function(e){var t,n=S(e),r=n in c;if(-1===M.indexOf(n)&&r)throw new A(n,c);c._hasKeys[n]=r,Object.defineProperty(c,n,t={get:function(){return this._props[n]},set:function(e){this.shouldUpdateCallback(this._props[n],e)&&(this._props[n]=e,r&&h(t.__proto__||Object.getPrototypeOf(t),n,e,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),c}return p(l,t),o(l,[{key:"connectedCallback",value:function(){var o=this;if(d(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"connectedCallback",this)&&d(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(e)&&e.forEach(function(e){var t=S(e);if(o.hasAttribute(e)){var n=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=j(n,t)}(o,e),r=o._hasKeys[t];o._props[t]=n,r&&h(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),t,n,o)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){this.shouldUpdateCallback(n,t)&&(this[S(e)]=j(n))}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return-1<n.indexOf(e.replace(E,N))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),l}()},function(t){return function(e){function c(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=u(e,["template"]);s(this,c);var r=f(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,n));return r._template=t,r._hasTemplate=!!t,r._hasRendered=!1,r.updated=r.render,r}return p(c,t),o(c,[{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var r=document.createDocumentFragment(),o=[];this.firstChild;)o.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=o,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});var i=t(this._props,this.childrenFragment),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new $(this);a.appendChild(i)}if(e)d(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,a);else{var u=this.cloneNode(!1);u._isMorphing=!0,u.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":b(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":b(t)))throw new Error("componentMorph: newTree should be an object");F(t,e)}(this,u),function(){for(var e=void 0;e=L.pop();)delete e.isSameNode;L=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),c}()},function(t){return function(e){function i(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,r=u(e,["styles"]);s(this,i);var o=f(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,r));return o._styles=n,o}return p(i,t),o(i,[{key:"connectedCallback",value:function(){d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),i}()})(function(e){function n(e){s(this,n);var t=f(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t._id=r(t.nodeName),t}return p(n,K),o(n,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}()),J={},X=function(e){function a(){var e,t,n;s(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=f(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},f(n,t)}return p(a,Z),o(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Z.uuidv4();if(e&&!J[t]){var n=document.createElement("style"),r=document.createTextNode(e);J[t]=!0,n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),a}(),Q=".o-container {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto;\n  display: block; }\n  @media (min-width: 576px) {\n    .o-container {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .o-container {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .o-container {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .o-container {\n      max-width: 1140px; } }\n",Y=/\n[\s]+$/,ee=/^\n[\s]+/,te=/[\s]+$/,ne=/^[\s]+/,re=/[\n\s]+/g,oe=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],ie=["code","pre","textarea"],ae=function(e,t){var n,r=e.classes,o=void 0===r?"":r;return(n=document.createElement("article")).setAttribute("class","o-container "+String(o)),function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,u=0,c=n.length;u<c;u++){var l=n[u];if(Array.isArray(l))e(t,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var s=t.childNodes[t.childNodes.length-1];if("string"==typeof l)a=!0,s&&"#text"===s.nodeName?s.nodeValue+=l:(l=document.createTextNode(l),t.appendChild(l),s=l),u===c-1&&(a=!1,-1===oe.indexOf(i)&&-1===ie.indexOf(i)?""===(r=s.nodeValue.replace(ee,"").replace(te,"").replace(Y,"").replace(re," "))?t.removeChild(s):s.nodeValue=r:-1===ie.indexOf(i)&&(o=0===u?"":" ",r=s.nodeValue.replace(ee,o).replace(ne," ").replace(te,"").replace(Y,"").replace(re," "),s.nodeValue=r));else if(l&&l.nodeType){a&&(a=!1,-1===oe.indexOf(i)&&-1===ie.indexOf(i)?""===(r=s.nodeValue.replace(ee,"").replace(Y,"").replace(re," "))?t.removeChild(s):s.nodeValue=r:-1===ie.indexOf(i)&&(r=s.nodeValue.replace(ne," ").replace(ee,"").replace(Y,"").replace(re," "),s.nodeValue=r));var d=l.nodeName;d&&(i=d.toLowerCase()),t.appendChild(l)}}}}(n,[t]),n},ue=function(e){function t(){return s(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:Q,template:ae}))}return p(t,X),t}();return ue.tagName="axa-container",z=function(){window.customElements.define(ue.tagName,ue)},G=0,B=function(){if(0===G)try{z.apply(void 0,arguments),G+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",B,!1),document.addEventListener("WebComponentsReady",B,!1),ue});
