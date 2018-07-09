!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e():"function"==typeof define&&define.amd?define(e):e()}(0,function(){"use strict";var b=function(){var t=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=Object.defineProperty({},"passive",{get:function(){t=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,e),window.removeEventListener("testPassiveEventSupport",n,e)}return t}(),x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},i=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}(),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},s=function t(e,n,i){null===e&&(e=Function.prototype);var a=Object.getOwnPropertyDescriptor(e,n);if(void 0===a){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,n,i)}if("value"in a)return a.value;var r=a.get;return void 0!==r?r.call(i):void 0},a=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},r=function(t,e){var n={};for(var i in t)0<=e.indexOf(i)||Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n},u=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},m=function t(e,n,i,a){var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var r=Object.getPrototypeOf(e);null!==r&&t(r,n,i,a)}else if("value"in o&&o.writable)o.value=i;else{var d=o.set;void 0!==d&&d.call(a,i)}return i},d=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],i=!0,a=!1,o=void 0;try{for(var r,d=t[Symbol.iterator]();!(i=(r=d.next()).done)&&(n.push(r.value),!e||n.length!==e);i=!0);}catch(t){a=!0,o=t}finally{try{!i&&d.return&&d.return()}finally{if(a)throw o}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},_=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)};function p(t,e){var n=e.className;return e.hasClass||t.push(n),t}function y(t){for(var a=t.className,o=!1,r=!0,e=arguments.length,n=Array(1<e?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var d=n.map(function(t){var e=(n=t,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",i)).test(a);var n,i;e?o=!0:r=!1;return{className:t,hasClass:e}});return!(!r&&!o)&&d}var w=/\s+/,k={transitionend:function(){for(var t=document.createElement("div").style,e={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(e),i=n.length,a=void 0,o=0;o<i;++o)if(void 0!==t[a=n[o]])return e[a];return""}()};function c(n,t,i,a){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},o=e.capture,r=void 0!==o&&o,d=e.passive,p=void 0===d||d;if(k[t]&&(t=k[t]),!n||!t)return null;var c=void 0===i?"undefined":x(i),l=i&&"string"===c;if("function"===c){if(a){var s=a;r=s.capture,p=s.passive}a=i}for(var u=b?{capture:r,passive:p}:r,m=l?function(t){var e=t.target;for(;!y(e,i)&&e!==n;)e=e.parentNode;if(e!==n)return a(t,e)}:a,f=t.split(w),h=f.length,v=0;v<h;++v)n.addEventListener(f[v],m,u);return function t(){for(var e=0;e<h;++e)n.removeEventListener(f[e],m,u);!function(t,e){if(!t)return;for(var n=Object.keys(t),i=n.length,a=0;a<i;++a){var o=n[a];if(t[o]===e)return delete t[o]}}(this,t)}}function f(t){var e=t.ownerDocument;return e.defaultView||e.parentWindow}function h(i){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},e=t.leading,o=void 0!==e&&e,n=t.trailing,r=void 0===n||n,d=t.maxWait,p=void 0!==d&&d,c=void 0,l=void 0,s=void 0,u=void 0,m=!1,f=a!==p,h=!1!==p;function v(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return c=e,f&&(l&&clearTimeout(l),l=setTimeout(b,a)),h&&!s&&(s=setTimeout(x,p)),o&&!m&&(m=!0,u=i.apply(void 0,_(c))),u}return v.flush=function(){(l||s)&&(u=i.apply(void 0,_(c)));return w(),u},v.cancel=w,v;function b(){s&&clearTimeout(s),y()}function x(){l&&clearTimeout(l),y()}function y(){r&&(u=i.apply(void 0,_(c))),s=l=null,m=!1}function w(){l&&(clearTimeout(l),l=null),s&&(clearTimeout(s),s=null),c=void 0,m=!1}}var v=function(){try{var t=new window.CustomEvent("test",{cancelable:!0});if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(t){}return e;function e(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=e.bubbles,i=void 0!==n&&n,a=e.cancelable,o=void 0!==a&&a,r=e.detail,d=void 0===r?void 0:r,p=document.createEvent("CustomEvent");p.initCustomEvent(t,i,o,d);var c=p.preventDefault;return p.preventDefault=function(){c.call(p);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},p}}();function g(t,e,n){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},a=new v(e,o({},i,{detail:n}));return t.dispatchEvent(a)}var O={};function C(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;O[t]||(O[t]={count:0,queue:[]});var i=O[t].queue;Array.isArray(i)?i.push([t,e,n]):g(n,t,e)}function A(t,e){var n=c(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,t,e);O[t]||(O[t]={count:0});var i,a=O[t];return a.count++,a.onsubscribe||(a.onsubscribe=h((i=t,function(){g(document,"pubsub/onsubscribe",i),g(document,"pubsub/onsubscribe/"+i,i),O[i]&&delete O[i].unsubscribe}),100)),a.onsubscribe(),function(){a.count--,n.call(this),a.count<=0&&delete O[t]}}c(document,"pubsub/onsubscribe",function(t){var e=t.detail;O[e]||(O[e]={count:0});var n=O[e],i=n.queue;Array.isArray(i)&&(i.forEach(function(t){var e=d(t,3),n=e[0],i=e[1],a=e[2];g(a,n,i)}),delete n.queue)});var e=".a-device-state",n=/\s/g,P=/^['"]+|['"]+$/g,N=!1,E=!1,j=!0,T=void 0,S=void 0,R=void 0;function M(){if(T||!(T=document.querySelector(e))&&N&&function(t){for(var e=arguments.length,n=Array(1<e?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var a=y.apply(void 0,[t].concat(n));if(!0!==a){var o=[].concat(n);Array.isArray(a)&&(o=a.reduce(p,[])),o&&(t.className+=" "+o.join(" "))}}(T=document.body,e),!S&&T&&(S=f(T)),!T||!S)return!1;var t=S.getComputedStyle(T,":after").getPropertyValue("content")||S.getComputedStyle(T,"::after").getPropertyValue("content");return!!t&&(j=t!==R,(R=t).replace(n,"").replace(P,"").split(",").reduce(D,{}))}function D(t,e){var n=e.split(":"),i=d(n,2),a=i[0],o=i[1];return t[a]=+o||o,t}var L,U={},V=function(t){return t in U||(U[t]=0),++U[t]},t=function(t,e){return t===e},I=((L=function(){var t;return(t=console).log.apply(t,arguments)},function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:t;return function(){for(var t=arguments.length,i=Array(t),e=0;e<t;e++)i[e]=arguments[e];return function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(){return a.apply(void 0,[].concat(i,e))?L.apply(void 0,arguments):void 0}}}})()(!0),function(t){function p(t,e){var n;l(this,p);for(var i="\n    Native Property >>>"+t+"<<< exists already at "+e.nodeName+"#"+e._id+" and evaluates to -> "+e[t]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",a=arguments.length,o=Array(2<a?a-2:0),r=2;r<a;r++)o[r-2]=arguments[r];var d=u(this,(n=p.__proto__||Object.getPrototypeOf(p)).call.apply(n,[this,i].concat(o)));return Error.captureStackTrace&&Error.captureStackTrace(d,p),d.name="PropertyExistsException",d}return a(p,t),p}(Error)),F=/[A-Z]/g;function H(t,e,n){var i=t.toLowerCase(),a=n.charAt(e+1);return 0===e||a.toUpperCase()===a?i:"-"+i}var W=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function q(e,n){var t=e;if(e&&n!==e){if(W.test(e))try{t=JSON.parse(e)}catch(t){console.error("Attribute "+n+" has an error:\n"+t+"\n",e)}}else t=!0;return t}var z=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,K=/[-_]+/g;function $(t){return t.replace(z,G)}function G(t,e){return 0==+t||K.test(t)?"":0===e?t.toLowerCase():t.toUpperCase()}var B=["title","checked","disabled"],Z=[];var J=1,X=3,Q=8;function Y(t,e){var n=t.nodeType,i=t.nodeName;n===J&&function(t,e){for(var n=e.attributes,i=t.attributes,a=null,o=null,r=null,d=null,p=i.length-1;0<=p;--p)if(d=i[p],r=d.name,a=d.namespaceURI,o=d.value,a){var c=d.localName;e.getAttributeNS(a,c||r)!==o&&e.setAttributeNS(a,r,o)}else e.hasAttribute(r)?e.getAttribute(r)!==o&&("null"===o||"undefined"===o?e.removeAttribute(r):e.setAttribute(r,o)):e.setAttribute(r,o);for(var l=n.length-1;0<=l;--l)!1!==(d=n[l]).specified&&(r=d.name,(a=d.namespaceURI)?(r=d.localName||r,t.hasAttributeNS(a,r)||e.removeAttributeNS(a,r)):t.hasAttributeNS(null,r)||e.removeAttribute(r))}(t,e),n!==X&&n!==Q||e.nodeValue===t.nodeValue||(e.nodeValue=t.nodeValue),"INPUT"===i?function(t,e){var n=t.value,i=e.value;tt(t,e,"checked"),tt(t,e,"disabled"),n!==i&&(e.setAttribute("value",n),e.value=n);"null"===n&&(e.value="",e.removeAttribute("value"));t.hasAttributeNS(null,"value")?"range"===e.type&&(e.value=n):e.removeAttribute("value")}(t,e):"OPTION"===i?tt(t,e,"selected"):"TEXTAREA"===i&&function(t,e){var n=t.value;n!==e.value&&(e.value=n);if(e.firstChild&&e.firstChild.nodeValue!==n){if(""===n&&e.firstChild.nodeValue===e.placeholder)return;e.firstChild.nodeValue=n}}(t,e)}function tt(t,e,n){t[n]!==e[n]&&(e[n]=t[n],t[n]?e.setAttribute(n,""):e.removeAttribute(n))}var et=3;function nt(t,e){return e?t?t.isSameNode&&t.isSameNode(e)?e:t.tagName!==e.tagName?t:(Y(t,e),e.skipChildren&&e.skipChildren()||function(t,e){for(var n=void 0,i=void 0,a=void 0,o=void 0,r=0,d=0;n=e.childNodes[d],i=t.childNodes[d-r],n||i;d++)if(i)if(n)if(it(i,n))(a=nt(i,n))!==n&&(e.replaceChild(a,n),r++);else{o=null;for(var p=d;p<e.childNodes.length;p++)if(it(e.childNodes[p],i)){o=e.childNodes[p];break}o?((a=nt(i,o))!==o&&r++,e.insertBefore(a,n)):i.id||n.id?(e.insertBefore(i,n),r++):(a=nt(i,n))!==n&&(e.replaceChild(a,n),r++)}else e.appendChild(i),r++;else e.removeChild(n),d--}(t,e),e):null:t}function it(t,e){return t.id?t.id===e.id:t.isSameNode?t.isSameNode(e):t.tagName===e.tagName&&(t.type===et&&t.nodeValue===e.nodeValue)}var at=function(t){function d(t){var e;l(this,d);for(var n="\n    Web Component "+t.nodeName+"%c#"+t._id+" does not accept string as a return from a template. Maybe use bel?}",i=arguments.length,a=Array(1<i?i-1:0),o=1;o<i;o++)a[o-1]=arguments[o];var r=u(this,(e=d.__proto__||Object.getPrototypeOf(d)).call.apply(e,[this,n].concat(a)));return Error.captureStackTrace&&Error.captureStackTrace(r,d),r.name="TemplateNoStringReturnException",r}return a(d,t),d}(Error),ot=!!document.createDocumentFragment().children;function rt(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(rt.prototype,HTMLElement.prototype),Object.setPrototypeOf(rt,HTMLElement);var dt=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight(function(t,e){return e(t)},t)}}(function(e){return function(t){function r(){var t,e,n;l(this,r);for(var i=arguments.length,a=Array(i),o=0;o<i;o++)a[o]=arguments[o];return(e=n=u(this,(t=r.__proto__||Object.getPrototypeOf(r)).call.apply(t,[this].concat(a))))._makeContextReady=function(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,t)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=A("context/available",n._makeContextReady)},u(n,e)}return a(r,e),i(r,[{key:"connectedCallback",value:function(){s(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&s(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){s(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"disconnectedCallback",this)&&s(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var t=this.nodeName.toLowerCase();this.__isContext=!0,C("context/available",this.__contextName=t)}},{key:"consumeContext",value:function(t){this.__consumedContext=t&&t.toLowerCase()}},{key:"contextNode",get:function(){for(var t=this.__consumedContext,e=this.parentNode;e&&(!e.__isContext||t&&t!==e.__contextName);)e=e.parentNode;return!(!e||!e.__isContext)&&e}}]),r}()},function(e){return function(t){function n(){return l(this,n),u(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return a(n,e),i(n,[{key:"appendChild",value:function(t){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(t),this.render()):s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,t)}},{key:"innerText",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else m(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",t,this)}},{key:"textContent",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else m(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",t,this)}},{key:"innerHTML",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createElement("div");e.innerHTML=t,this._lightDOMRefs=Array.from(e.children),this.render()}else m(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",t,this)}}]),n}()},function(e){return function(t){function c(t){l(this,c);var p=u(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,t));p._reduceProps=function(t,e){var n=t.props,i=t.shouldUpdate,a=p._hasKeys[e];if(-1===B.indexOf(e)&&a)throw new I(e,p);var o="_"+e,r=n[e],d=p[o];return i||p.shouldUpdateCallback(r,d)?(p[o]=r,p._props[e]=r,a&&m(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),e,r,p),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},p._isConnected=!1,p._props={},p._hasKeys={},p.updatedDebounced=h(function(){return p.updated&&p.updated()},50);var e=p.constructor.observedAttributes;return Array.isArray(e)&&e.forEach(function(t){var e,n=$(t),i=n in p;if(-1===B.indexOf(n)&&i)throw new I(n,p);p._hasKeys[n]=i,Object.defineProperty(p,n,e={get:function(){return this._props[n]},set:function(t){this.shouldUpdateCallback(this._props[n],t)&&(this._props[n]=t,i&&m(e.__proto__||Object.getPrototypeOf(e),n,t,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),p}return a(c,e),i(c,[{key:"connectedCallback",value:function(){var a=this;if(s(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this)&&s(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&t.forEach(function(t){var e=$(t);if(a.hasAttribute(t)){var n=function(t,e){if("function"==typeof t.hasAttribute&&!t.hasAttribute(e))return!1;var n=t.value;return e?n=t.getAttribute(e):e=t.name,n=q(n,e)}(a,t),i=a._hasKeys[e];a._props[e]=n,i&&m(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),e,n,a)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(t,e,n){this.shouldUpdateCallback(n,e)&&(this[$(t)]=q(n))}},{key:"setProps",value:function(t){var e=this.constructor.observedAttributes,n=void 0===e?[]:e;Object.keys(t).filter(function(t){return-1<n.indexOf(t.replace(F,H))}).reduce(this._reduceProps,{props:t,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(t,e){return t!==e}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),c}()},function(e){return function(t){function p(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.template,n=r(t,["template"]);l(this,p);var i=u(this,(p.__proto__||Object.getPrototypeOf(p)).call(this,n));return i._template=e,i._hasTemplate=!!e,i._hasRendered=!1,i.updated=i.render,i}return a(p,e),i(p,[{key:"render",value:function(){var n=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var e=this._template;try{if(t){for(var i=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),i.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=i}else this._lightDOMRefs.forEach(function(t){var e=t.cloneNode(!0);n.childrenFragment.appendChild(e)});ot||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(t){return 1===t.nodeType}));var o=e(this._props,this.childrenFragment),r=document.createDocumentFragment();if(Array.isArray(o))o.forEach(function(t){r.appendChild(t)});else if(o){if("string"==typeof o)throw new at(this);r.appendChild(o)}if(t)s(p.prototype.__proto__||Object.getPrototypeOf(p.prototype),"appendChild",this).call(this,r);else{var d=this.cloneNode(!1);d._isMorphing=!0,d.appendChild(r),this._isMorphing=!0,function(t,e){if("object"!==(void 0===t?"undefined":x(t)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===e?"undefined":x(e)))throw new Error("componentMorph: newTree should be an object");nt(e,t)}(this,d),function(){for(var t=void 0;t=Z.pop();)delete t.isSameNode;Z=[]}(),this._isMorphing=!1}}catch(t){console.error(t)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(t){}},{key:"didRenderCallback",value:function(t){}}]),p}()},function(e){return function(t){function o(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.styles,n=void 0===e?"":e,i=r(t,["styles"]);l(this,o);var a=u(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,i));return a._styles=n,a}return a(o,e),i(o,[{key:"connectedCallback",value:function(){s(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this)&&s(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var e=document.createElement("style"),n=document.createTextNode(this._styles);e.appendChild(n),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",e):t.appendChild(e)}}}]),o}()})(function(t){function n(t){l(this,n);var e=u(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return e._id=V(e.nodeName),e}return a(n,rt),i(n,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}}]),n}()),pt={},ct=function(t){function r(){var t,e,n;l(this,r);for(var i=arguments.length,a=Array(i),o=0;o<i;o++)a[o]=arguments[o];return(e=n=u(this,(t=r.__proto__||Object.getPrototypeOf(r)).call.apply(t,[this].concat(a))))._appendStyles=function(){r.appendGlobalStyles(n._styles,n.nodeName)},u(n,e)}return a(r,dt),i(r,null,[{key:"appendGlobalStyles",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:dt.uuidv4();if(t&&!pt[e]){var n=document.createElement("style"),i=document.createTextNode(t);pt[e]=!0,n.appendChild(i),n.setAttribute("data-c-name",e.toLowerCase()),document.head.appendChild(n)}}}]),r}();!function(){var e=function(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},i=n.leading,a=void 0===i||i,o=n.trailing;return h(t,e,{leading:a,maxWait:e,trailing:void 0===o||o})}(n,100);function t(){N=!0,e()}function n(){var t=M();t&&(E||(E=!0,c(f(T),"resize",e),c(f(T),"orientationchange",e)),j&&C("device-state/change",t))}c(document,"DOMContentLoaded",t),c(document,"load",t),A("pubsub/onsubscribe/device-state/change",function(){var t=M();t&&C("device-state/change",t)}),n()}(),ct.appendGlobalStyles('.a-device-state::after {\n  position: absolute;\n  top: -9999px;\n  left: -9999px;\n  display: block;\n  content: \'breakpoint:xl, orientation:landscape, pixel-ratio: 1\'; }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1), (orientation: portrait) and (min-resolution: 96dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:portrait, pixel-ratio:1"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1), (orientation: landscape) and (min-resolution: 96dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:landscape, pixel-ratio:1"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) and (min-width: 576px), (orientation: portrait) and (min-resolution: 96dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:portrait, pixel-ratio:1"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) and (min-width: 576px), (orientation: landscape) and (min-resolution: 96dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:landscape, pixel-ratio:1"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) and (min-width: 768px), (orientation: portrait) and (min-resolution: 96dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:portrait, pixel-ratio:1"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) and (min-width: 768px), (orientation: landscape) and (min-resolution: 96dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:landscape, pixel-ratio:1"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) and (min-width: 992px), (orientation: portrait) and (min-resolution: 96dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:portrait, pixel-ratio:1"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) and (min-width: 992px), (orientation: landscape) and (min-resolution: 96dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:landscape, pixel-ratio:1"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) and (min-width: 1200px), (orientation: portrait) and (min-resolution: 96dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:portrait, pixel-ratio:1"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) and (min-width: 1200px), (orientation: landscape) and (min-resolution: 96dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:landscape, pixel-ratio:1"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5), (orientation: portrait) and (min-resolution: 144dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:portrait, pixel-ratio:1.5"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5), (orientation: landscape) and (min-resolution: 144dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:landscape, pixel-ratio:1.5"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 576px), (orientation: portrait) and (min-resolution: 144dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:portrait, pixel-ratio:1.5"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 576px), (orientation: landscape) and (min-resolution: 144dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:landscape, pixel-ratio:1.5"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 768px), (orientation: portrait) and (min-resolution: 144dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:portrait, pixel-ratio:1.5"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 768px), (orientation: landscape) and (min-resolution: 144dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:landscape, pixel-ratio:1.5"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 992px), (orientation: portrait) and (min-resolution: 144dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:portrait, pixel-ratio:1.5"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 992px), (orientation: landscape) and (min-resolution: 144dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:landscape, pixel-ratio:1.5"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1200px), (orientation: portrait) and (min-resolution: 144dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:portrait, pixel-ratio:1.5"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1200px), (orientation: landscape) and (min-resolution: 144dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:landscape, pixel-ratio:1.5"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2), (orientation: portrait) and (min-resolution: 192dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:portrait, pixel-ratio:2"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2), (orientation: landscape) and (min-resolution: 192dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:landscape, pixel-ratio:2"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) and (min-width: 576px), (orientation: portrait) and (min-resolution: 192dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:portrait, pixel-ratio:2"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) and (min-width: 576px), (orientation: landscape) and (min-resolution: 192dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:landscape, pixel-ratio:2"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px), (orientation: portrait) and (min-resolution: 192dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:portrait, pixel-ratio:2"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px), (orientation: landscape) and (min-resolution: 192dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:landscape, pixel-ratio:2"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) and (min-width: 992px), (orientation: portrait) and (min-resolution: 192dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:portrait, pixel-ratio:2"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) and (min-width: 992px), (orientation: landscape) and (min-resolution: 192dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:landscape, pixel-ratio:2"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1200px), (orientation: portrait) and (min-resolution: 192dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:portrait, pixel-ratio:2"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1200px), (orientation: landscape) and (min-resolution: 192dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:landscape, pixel-ratio:2"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 3), (orientation: portrait) and (min-resolution: 288dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:portrait, pixel-ratio:3"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 3), (orientation: landscape) and (min-resolution: 288dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:landscape, pixel-ratio:3"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 3) and (min-width: 576px), (orientation: portrait) and (min-resolution: 288dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:portrait, pixel-ratio:3"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 3) and (min-width: 576px), (orientation: landscape) and (min-resolution: 288dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:landscape, pixel-ratio:3"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 3) and (min-width: 768px), (orientation: portrait) and (min-resolution: 288dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:portrait, pixel-ratio:3"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 3) and (min-width: 768px), (orientation: landscape) and (min-resolution: 288dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:landscape, pixel-ratio:3"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 3) and (min-width: 992px), (orientation: portrait) and (min-resolution: 288dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:portrait, pixel-ratio:3"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 3) and (min-width: 992px), (orientation: landscape) and (min-resolution: 288dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:landscape, pixel-ratio:3"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 3) and (min-width: 1200px), (orientation: portrait) and (min-resolution: 288dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:portrait, pixel-ratio:3"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 3) and (min-width: 1200px), (orientation: landscape) and (min-resolution: 288dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:landscape, pixel-ratio:3"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 4), (orientation: portrait) and (min-resolution: 384dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:portrait, pixel-ratio:4"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 4), (orientation: landscape) and (min-resolution: 384dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:landscape, pixel-ratio:4"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 4) and (min-width: 576px), (orientation: portrait) and (min-resolution: 384dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:portrait, pixel-ratio:4"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 4) and (min-width: 576px), (orientation: landscape) and (min-resolution: 384dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:landscape, pixel-ratio:4"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 4) and (min-width: 768px), (orientation: portrait) and (min-resolution: 384dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:portrait, pixel-ratio:4"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 4) and (min-width: 768px), (orientation: landscape) and (min-resolution: 384dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:landscape, pixel-ratio:4"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 4) and (min-width: 992px), (orientation: portrait) and (min-resolution: 384dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:portrait, pixel-ratio:4"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 4) and (min-width: 992px), (orientation: landscape) and (min-resolution: 384dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:landscape, pixel-ratio:4"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 4) and (min-width: 1200px), (orientation: portrait) and (min-resolution: 384dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:portrait, pixel-ratio:4"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 4) and (min-width: 1200px), (orientation: landscape) and (min-resolution: 384dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:landscape, pixel-ratio:4"; } }\n\n.a-device-state--debug::after {\n  position: fixed;\n  top: auto;\n  left: auto;\n  right: 0;\n  bottom: 0;\n  z-index: 1030;\n  display: block;\n  padding: 10px;\n  background: rgba(201, 20, 50, 0.9);\n  color: #fff; }\n')});
