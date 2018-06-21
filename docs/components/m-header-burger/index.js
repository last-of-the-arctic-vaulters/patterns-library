var StyleGuideWebComponent=function(){"use strict";var e={},t=function(t){return t in e||(e[t]=0),++e[t]},n=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,u=document.createEvent("CustomEvent");u.initCustomEvent(e,r,i,s);var c=u.preventDefault;return u.preventDefault=function(){c.call(u);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},u}}(),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},u=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},c=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},l=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},d=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var s=i.set;void 0!==s&&s.call(o,r)}return r},p=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function h(e,t,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new n(t,a({},o,{detail:r}));return e.dispatchEvent(i)}var v=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),b=/^\s+|\s{2,}|\s+$/g;function y(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function _(e,t){var n=t.className;return t.hasClass||e.push(n),e}function m(e){for(var t=e.className,n=!1,r=!0,o=arguments.length,i=Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];var s=i.map(function(e){var o=y(e).test(t);o?n=!0:r=!1;return{className:e,hasClass:o}});return!(!r&&!n)&&s}function g(e,t){var n=t.className;return t.hasClass&&e.push(n),e}function C(e,t){var n=y(t,"g");return e.replace(n," ").replace(b," ")}var O=/\s+/,x={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function k(e,t,n,o){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=i.capture,s=void 0!==a&&a,u=i.passive,c=void 0===u||u;if(x[t]&&(t=x[t]),!e||!t)return null;var l=void 0===n?"undefined":r(n),d=n&&"string"===l;if("function"===l){if(o){var p=o;s=p.capture,c=p.passive}o=n}for(var f=v?{capture:s,passive:c}:s,h=d?function(t){var r=t.target;for(;!m(r,n)&&r!==e;)r=r.parentNode;if(r!==e)return o(t,r)}:o,b=t.split(O),y=b.length,_=0;_<y;++_)e.addEventListener(b[_],h,f);return function t(){for(var n=0;n<y;++n)e.removeEventListener(b[n],h,f);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,t)}}function w(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,i=n.trailing,a=void 0===i||i,s=n.maxWait,u=void 0!==s&&s,c=void 0,l=void 0,d=void 0,p=void 0,h=!1,v=t!==u,b=!1!==u;function y(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return c=r,v&&(l&&clearTimeout(l),l=setTimeout(_,t)),b&&!d&&(d=setTimeout(m,u)),o&&!h&&(h=!0,p=e.apply(void 0,f(c))),p}return y.flush=function(){(l||d)&&(p=e.apply(void 0,f(c)));return C(),p},y.cancel=C,y;function _(){d&&clearTimeout(d),g()}function m(){l&&clearTimeout(l),g()}function g(){a&&(p=e.apply(void 0,f(c))),l=null,d=null,h=!1}function C(){l&&(clearTimeout(l),l=null),d&&(clearTimeout(d),d=null),c=void 0,h=!1}}var N={};function A(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;N[e]||(N[e]={count:0,queue:[]});var r=N[e].queue;Array.isArray(r)?r.push([e,t,n]):h(n,e,t)}function E(e,t){var n=k(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);N[e]||(N[e]={count:0});var r,o=N[e];return o.count++,o.onsubscribe||(o.onsubscribe=w((r=e,function(){h(document,"pubsub/onsubscribe",r),h(document,"pubsub/onsubscribe/"+r,r),N[r]&&delete N[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete N[e]}}k(document,"pubsub/onsubscribe",function(e){var t=e.detail;N[t]||(N[t]={count:0});var n=N[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=p(e,3),n=t[0],r=t[1],o=t[2];h(o,n,r)}),delete n.queue)});var P,j=function(e,t){return e===t},T=((P=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j;return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return function(){return e.apply(void 0,[].concat(n,r))?P.apply(void 0,arguments):void 0}}}})()(!0),function(e){function t(e,n){var r;o(this,t);for(var i="\n    Native Property >>>"+e+"<<< exists already at "+n.nodeName+"#"+n._id+" and evaluates to -> "+n[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",a=arguments.length,s=Array(a>2?a-2:0),u=2;u<a;u++)s[u-2]=arguments[u];var c=l(this,(r=t.__proto__||Object.getPrototypeOf(t)).call.apply(r,[this,i].concat(s)));return Error.captureStackTrace&&Error.captureStackTrace(c,t),c.name="PropertyExistsException",c}return u(t,e),t}(Error)),S=/[A-Z]/g;function R(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var L=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function M(e,t){var n=e;if(e&&t!==e){if(L.test(e))try{n=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else n=!0;return n}var D=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,U=/[-_]+/g;function V(e){return e.replace(D,F)}function F(e,t){return 0==+e||U.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var I=["title","checked","disabled"],z=[];var W=1,q=3,K=8;function H(e,t){var n=e.nodeType,r=e.nodeName;n===W&&function(e,t){for(var n=t.attributes,r=e.attributes,o=null,i=null,a=null,s=null,u=r.length-1;u>=0;--u)if(s=r[u],a=s.name,o=s.namespaceURI,i=s.value,o){var c=s.localName;t.getAttributeNS(o,c||a)!==i&&t.setAttributeNS(o,a,i)}else t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var l=n.length-1;l>=0;--l)!1!==(s=n[l]).specified&&(a=s.name,(o=s.namespaceURI)?(a=s.localName||a,e.hasAttributeNS(o,a)||t.removeAttributeNS(o,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==q&&n!==K||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;B(e,t,"checked"),B(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?B(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function B(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var $=3;function G(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(H(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],r=e.childNodes[s-a],n||r;s++)if(r)if(n)if(Y(r,n))(o=G(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var u=s;u<t.childNodes.length;u++)if(Y(t.childNodes[u],r)){i=t.childNodes[u];break}i?((o=G(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=G(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),s--}(e,t),t):null:e}function Y(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===$&&e.nodeValue===t.nodeValue)}var Z=function(e){function t(e){var n;o(this,t);for(var r="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",i=arguments.length,a=Array(i>1?i-1:0),s=1;s<i;s++)a[s-1]=arguments[s];var u=l(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this,r].concat(a)));return Error.captureStackTrace&&Error.captureStackTrace(u,t),u.name="TemplateNoStringReturnException",u}return u(t,e),t}(Error);function J(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(J.prototype,HTMLElement.prototype),Object.setPrototypeOf(J,HTMLElement);var X=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(e){return function(t){function n(){var e,t,r;o(this,n);for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return t=r=l(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(a))),r._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;r.contextNode&&(clearTimeout(r.timeoutId),r.timeoutId=setTimeout(function(){r.contextCallback(r.contextNode,e)},10)),r.unContextEnabled&&r.unContextEnabled(),r.unContextEnabled=E("context/available",r._makeContextReady)},l(r,t)}return u(n,e),i(n,[{key:"connectedCallback",value:function(){s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,A("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(e){return function(t){function n(){return o(this,n),l(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return u(n,e),i(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(e){return function(t){function n(e){o(this,n);var t=l(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));t._reduceProps=function(e,r){var o=e.props,i=e.shouldUpdate,a=t._hasKeys[r];if(-1===I.indexOf(r)&&a)throw new T(r,t);var s="_"+r,u=o[r],c=t[s];return i||t.shouldUpdateCallback(u,c)?(t[s]=u,t._props[r]=u,a&&d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),r,u,t),{props:o,shouldUpdate:!0}):{props:o,shouldUpdate:!1}},t._isConnected=!1,t._props={},t._hasKeys={},t.updatedDebounced=w(function(){return t.updated&&t.updated()},50);var r=t.constructor.observedAttributes;return Array.isArray(r)&&r.forEach(function(e){var n,r=V(e),o=r in t;if(-1===I.indexOf(r)&&o)throw new T(r,t);t._hasKeys[r]=o,Object.defineProperty(t,r,n={get:function(){return this._props[r]},set:function(e){this.shouldUpdateCallback(this._props[r],e)&&(this._props[r]=e,o&&d(n.__proto__||Object.getPrototypeOf(n),r,e,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),t}return u(n,e),i(n,[{key:"connectedCallback",value:function(){var e=this;if(s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&t.forEach(function(t){var r=V(t);if(e.hasAttribute(t)){var o=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=M(n,t)}(e,t),i=e._hasKeys[r];e._props[r]=o,i&&d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),r,o,e)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){this.shouldUpdateCallback(n,t)&&(this[V(e)]=M(n))}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return n.indexOf(e.replace(S,R))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,r=c(e,["template"]);o(this,n);var i=l(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,r));return i._template=t,i._hasTemplate=!!t,i._hasRendered=!1,i.updated=i.render,i}return u(n,e),i(n,[{key:"render",value:function(){var e=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var o=this._template;try{if(t){for(var i=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),i.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=i}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});var u=o(this._props,this.childrenFragment),c=document.createDocumentFragment();if(Array.isArray(u))u.forEach(function(e){c.appendChild(e)});else if(u){if("string"==typeof u)throw new Z(this);c.appendChild(u)}if(t)s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,c);else{var l=this.cloneNode(!1);l._isMorphing=!0,l.appendChild(c),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":r(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":r(t)))throw new Error("componentMorph: newTree should be an object");G(t,e)}(this,l),function(){for(var e=void 0;e=z.pop();)delete e.isSameNode;z=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,r=void 0===t?"":t,i=c(e,["styles"]);o(this,n);var a=l(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,i));return a._styles=r,a}return u(n,e),i(n,[{key:"connectedCallback",value:function(){s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),n}()})(function(e){function n(e){o(this,n);var r=l(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return r._id=t(r.nodeName),r}return u(n,J),i(n,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}()),Q={},ee=function(e){function t(){var e,n,r;o(this,t);for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return n=r=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r._appendStyles=function(){t.appendGlobalStyles(r._styles,r.nodeName)},l(r,n)}return u(t,X),i(t,null,[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:X.uuidv4();if(e&&!Q[t]){var n=document.createElement("style"),r=document.createTextNode(e);Q[t]=!0,n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),t}(),te=".m-header-burger {\n  display: block; }\n\n.m-header-burger__button {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  display: none;\n  margin-left: 15px;\n  color: #00008f; }\n  .m-header-burger__button:hover, .m-header-burger__button:active, .m-header-burger__button:focus {\n    outline: none;\n    cursor: pointer; }\n  @media (max-width: 991px) {\n    .m-header-burger__button {\n      display: block; } }\n\n.m-header-burger__icon {\n  width: 25px;\n  height: 25px;\n  display: block;\n  fill: currentColor; }\n  .is-burger-open .m-header-burger__icon {\n    display: none; }\n\n.m-header-burger__close-icon {\n  width: 25px;\n  height: 25px;\n  display: block;\n  fill: currentColor;\n  display: none; }\n  .is-burger-open .m-header-burger__close-icon {\n    display: block; }\n",ne=/\n[\s]+$/,re=/^\n[\s]+/,oe=/[\s]+$/,ie=/^[\s]+/,ae=/[\n\s]+/g,se=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],ue=["code","pre","textarea"];var ce=function(e){var t,n=document.createElement("div");return n.innerHTML=e,t=n.childNodes,Array.isArray(t)?t:[].slice.call(t)},le=function(){var e;return(e=document.createElement("button")).setAttribute("type","button"),e.setAttribute("class","m-header-burger__button js-header-burger__button"),function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,s=0,u=n.length;s<u;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var l=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,l&&"#text"===l.nodeName?l.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),l=c),s===u-1&&(a=!1,-1===se.indexOf(i)&&-1===ue.indexOf(i)?""===(r=l.nodeValue.replace(re,"").replace(oe,"").replace(ne,"").replace(ae," "))?t.removeChild(l):l.nodeValue=r:-1===ue.indexOf(i)&&(o=0===s?"":" ",r=l.nodeValue.replace(re,o).replace(ie," ").replace(oe,"").replace(ne,"").replace(ae," "),l.nodeValue=r));else if(c&&c.nodeType){a&&(a=!1,-1===se.indexOf(i)&&-1===ue.indexOf(i)?""===(r=l.nodeValue.replace(re,"").replace(ne,"").replace(ae," "))?t.removeChild(l):l.nodeValue=r:-1===ue.indexOf(i)&&(r=l.nodeValue.replace(ie," ").replace(re,"").replace(ne,"").replace(ae," "),l.nodeValue=r));var d=c.nodeName;d&&(i=d.toLowerCase()),t.appendChild(c)}}}}(e,["\n    ",ce('<axa-icon icon="menu" classes="m-header-burger__icon"></axa-icon>'),"\n\n    ",ce('<axa-icon icon="cross-gap" classes="m-header-burger__close-icon"></axa-icon>'),"\n  "]),e};function de(e){var t=e.ownerDocument;return t.defaultView||t.parentWindow}function pe(e){for(var t=e,n=0;t;)n+=t.offsetTop,t=t.offsetParent;return n}var fe="pageYOffset"in window?function(){return window.pageYOffset}:function(){var e=document,t=e.body;return e.documentElement.scrollTop||t.scrollTop||0};var he,ve=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,be=function(){var e=window.requestAnimationFrame||window[ve+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var t=0;e=function(e){var n=Date.now(),r=Math.max(0,16-(n-t)),o=setTimeout(function(){e(n+r)},r);return t=n+r,o}}return e}(),ye=(he=(he=window.cancelAnimationFrame||window[ve+"CancelAnimationFrame"]||window[ve+"CancelRequestAnimationFrame"])?he.bind(window):function(e){clearTimeout(e)},function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=t.length,o={},i=0;i<r;++i){var a=t[i];o[a.toUpperCase()]=a}return o}("click","resize","keyup")),_e=function(){function e(t,n){var r=this;o(this,e),this._handleBurgerClick=function(e){e.preventDefault(),r.isOpen?r.close():r.open()},this._handleResize=function(){r.close()},this._handleKeyUp=function(e){var t=e.key,n=e.keyCode;(t===ye.ESCAPE||t===ye.ESC||27===n)&&(e.preventDefault(),r.close())},this.open=function(e){if(!r.isOpen){r.isOpen=!0;var t,n,o,i=pe(r.wcNode);0!==i&&i!==fe()&&(A("sticky-container/freeze-direction"),t=r.wcNode.parentNode.parentNode.parentNode.parentNode,n=de(t),o=pe(t),n.scrollTo(0,o),be(function(){setTimeout(function(){A("sticky-container/thaw-direction")},50)})),function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=m.apply(void 0,[e].concat(n));if(!0!==o){var i=[].concat(n);Array.isArray(o)&&(i=o.reduce(_,[])),i&&(e.className+=" "+i.join(" "))}}(r.burger,r.options.burgerState),!e&&r._contextNode&&A("header-mobile/open",null,r._contextNode)}},this.close=function(e){r.isOpen&&(r.isOpen=!1,function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=m.apply(void 0,[e].concat(n));if(!1!==o){var i=[].concat(n);if(Array.isArray(o)&&(i=o.reduce(g,[])),i){var a=e.className;e.className=i.reduce(C,a)}}}(r.burger,r.options.burgerState),!e&&r._contextNode&&A("header-mobile/close",null,r._contextNode))},this.wcNode=t,this.options=a({},e.DEFAULTS,n),this.isOpen=!1,this.init()}return i(e,[{key:"init",value:function(){this.burger=this.wcNode.querySelector(this.options.burger),this.on()}},{key:"onContextEnabled",value:function(){this._contextNode&&(this.offContextEnabled(),this.unSubscribeOpen=E("header-mobile/open",this.open,this._contextNode),this.unSubscribeClose=E("header-mobile/close",this.close,this._contextNode))}},{key:"offContextEnabled",value:function(){this.unSubscribeOpen&&this.unSubscribeOpen(),this.unSubscribeClose&&this.unSubscribeClose()}},{key:"on",value:function(){this.off(),this._unBurgerClick=k(this.burger,ye.CLICK,this._handleBurgerClick,{passive:!1}),this._unResize=k(de(this.wcNode),ye.RESIZE,this._handleResize),this._unCloseEscape=k(this.wcNode.ownerDocument,ye.KEYUP,this._handleKeyUp,{passive:!1})}},{key:"off",value:function(){this._unBurgerClick&&this._unBurgerClick(),this._unResize&&this._unResize(),this._unCloseEscape&&this._unCloseEscape(),this.offContextEnabled()}},{key:"destroy",value:function(){this.off(),delete this.burger}},{key:"contextNode",set:function(e){this._contextNode=e,this.onContextEnabled()}}]),e}();_e.DEFAULTS={burger:".js-header-burger__button",burgerState:"is-burger-open"};var me,ge,Ce,Oe=function(e){function t(){o(this,t);var e=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:te,template:le}));return e.consumeContext("axa-header"),e}return u(t,ee),i(t,[{key:"connectedCallback",value:function(){s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-header-burger",this.burger=new _e(this)}},{key:"disconnectedCallback",value:function(){s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.burger.destroy(),delete this.burger}},{key:"contextCallback",value:function(e){this.burger.contextNode=e}}]),t}();return Oe.tagName="axa-header-burger",me=function(){window.customElements.define(Oe.tagName,Oe)},ge=0,Ce=function(){if(0===ge)try{me.apply(void 0,arguments),ge+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",Ce,!1),document.addEventListener("WebComponentsReady",Ce,!1),Oe}();
