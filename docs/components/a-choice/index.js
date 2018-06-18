var StyleGuideWebComponent=function(){"use strict";var e,t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},a=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},c=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},l=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},s=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var c=i.set;void 0!==c&&c.call(o,r)}return r},u=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},p=(function(e){!function(){var n={}.hasOwnProperty;function r(){for(var e=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var a=void 0===i?"undefined":t(i);if("string"===a||"number"===a)e.push(i);else if(Array.isArray(i))e.push(r.apply(null,i));else if("object"===a)for(var c in i)n.call(i,c)&&i[c]&&e.push(c)}}return e.join(" ")}e.exports?e.exports=r:window.classNames=r}()}(e={exports:{}},e.exports),e.exports),f={},h=function(e){return e in f||(f[e]=0),++f[e]},v=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,c=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,r,i,c);var s=l.preventDefault;return l.preventDefault=function(){s.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function b(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new v(t,o({},r,{detail:n}));return e.dispatchEvent(i)}var y=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function _(e){for(var t=e.className,n=!1,r=!0,o=arguments.length,i=Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];var c=i.map(function(e){var o=(i=e,new RegExp("^"+i+"$|^"+i+"\\s|\\s"+i+"\\s|\\s"+i+"$",a)).test(t);var i,a;o?n=!0:r=!1;return{className:e,hasClass:o}});return!(!r&&!n)&&c}var m=/\s+/,g={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function x(e,n,r,o){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=i.capture,c=void 0!==a&&a,l=i.passive,s=void 0===l||l;if(g[n]&&(n=g[n]),!e||!n)return null;var u=void 0===r?"undefined":t(r),d=r&&"string"===u;if("function"===u){if(o){var p=o;c=p.capture,s=p.passive}o=r}for(var f=y?{capture:c,passive:s}:c,h=d?function(t){var n=t.target;for(;!_(n,r)&&n!==e;)n=n.parentNode;if(n!==e)return o(t,n)}:o,v=n.split(m),b=v.length,x=0;x<b;++x)e.addEventListener(v[x],h,f);return function t(){for(var n=0;n<b;++n)e.removeEventListener(v[n],h,f);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,t)}}function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,i=n.trailing,a=void 0===i||i,c=n.maxWait,l=void 0!==c&&c,s=void 0,u=void 0,p=void 0,f=void 0,h=!1,v=t!==l,b=!1!==l;function y(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return s=r,v&&(u&&clearTimeout(u),u=setTimeout(_,t)),b&&!p&&(p=setTimeout(m,l)),o&&!h&&(h=!0,f=e.apply(void 0,d(s))),f}return y.flush=function(){(u||p)&&(f=e.apply(void 0,d(s)));return x(),f},y.cancel=x,y;function _(){p&&clearTimeout(p),g()}function m(){u&&clearTimeout(u),g()}function g(){a&&(f=e.apply(void 0,d(s))),u=null,p=null,h=!1}function x(){u&&(clearTimeout(u),u=null),p&&(clearTimeout(p),p=null),s=void 0,h=!1}}var C={};function k(e,t){var n=x(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);C[e]||(C[e]={count:0});var r,o=C[e];return o.count++,o.onsubscribe||(o.onsubscribe=O((r=e,function(){b(document,"pubsub/onsubscribe",r),b(document,"pubsub/onsubscribe/"+r,r),C[r]&&delete C[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete C[e]}}x(document,"pubsub/onsubscribe",function(e){var t=e.detail;C[t]||(C[t]={count:0});var n=C[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=u(e,3),n=t[0],r=t[1],o=t[2];b(o,n,r)}),delete n.queue)});var w,A=function(e,t){return e===t},N=((w=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A;return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return function(){return e.apply(void 0,[].concat(n,r))?w.apply(void 0,arguments):void 0}}}})()(!0),function(e){function t(e,r){var o;n(this,t);for(var i="\n    Native Property >>>"+e+"<<< exists already at "+r.nodeName+"#"+r._id+" and evaluates to -> "+r[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",a=arguments.length,c=Array(a>2?a-2:0),s=2;s<a;s++)c[s-2]=arguments[s];var u=l(this,(o=t.__proto__||Object.getPrototypeOf(t)).call.apply(o,[this,i].concat(c)));return Error.captureStackTrace&&Error.captureStackTrace(u,t),u.name="PropertyExistsException",u}return a(t,e),t}(Error)),E=/[A-Z]/g;function P(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var j=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function T(e,t){var n=e;if(e&&t!==e){if(j.test(e))try{n=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else n=!0;return n}var S=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,R=/[-_]+/g;function L(e){return e.replace(S,M)}function M(e,t){return 0==+e||R.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var D=["title","checked","disabled"],V=[];var U=1,I=3,z=8;function W(e,t){var n=e.nodeType,r=e.nodeName;n===U&&function(e,t){for(var n=t.attributes,r=e.attributes,o=null,i=null,a=null,c=null,l=r.length-1;l>=0;--l)if(c=r[l],a=c.name,o=c.namespaceURI,i=c.value,o){var s=c.localName;t.getAttributeNS(o,s||a)!==i&&t.setAttributeNS(o,a,i)}else t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var u=n.length-1;u>=0;--u)!1!==(c=n[u]).specified&&(a=c.name,(o=c.namespaceURI)?(a=c.localName||a,e.hasAttributeNS(o,a)||t.removeAttributeNS(o,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==I&&n!==z||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;H(e,t,"checked"),H(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?H(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function H(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var F=3;function q(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(W(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,c=0;n=t.childNodes[c],r=e.childNodes[c-a],n||r;c++)if(r)if(n)if($(r,n))(o=q(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var l=c;l<t.childNodes.length;l++)if($(t.childNodes[l],r)){i=t.childNodes[l];break}i?((o=q(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=q(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),c--}(e,t),t):null:e}function $(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===F&&e.nodeValue===t.nodeValue)}var K=function(e){function t(e){var r;n(this,t);for(var o="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",i=arguments.length,a=Array(i>1?i-1:0),c=1;c<i;c++)a[c-1]=arguments[c];var s=l(this,(r=t.__proto__||Object.getPrototypeOf(t)).call.apply(r,[this,o].concat(a)));return Error.captureStackTrace&&Error.captureStackTrace(s,t),s.name="TemplateNoStringReturnException",s}return a(t,e),t}(Error);function B(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(B.prototype,HTMLElement.prototype),Object.setPrototypeOf(B,HTMLElement);var G=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(e){return function(t){function o(){var e,t,r;n(this,o);for(var i=arguments.length,a=Array(i),c=0;c<i;c++)a[c]=arguments[c];return t=r=l(this,(e=o.__proto__||Object.getPrototypeOf(o)).call.apply(e,[this].concat(a))),r._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;r.contextNode&&(clearTimeout(r.timeoutId),r.timeoutId=setTimeout(function(){r.contextCallback(r.contextNode,e)},10)),r.unContextEnabled&&r.unContextEnabled(),r.unContextEnabled=k("context/available",r._makeContextReady)},l(r,t)}return a(o,e),r(o,[{key:"connectedCallback",value:function(){i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this)&&i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"disconnectedCallback",this)&&i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;C[e]||(C[e]={count:0,queue:[]});var r=C[e].queue;Array.isArray(r)?r.push([e,t,n]):b(n,e,t)}("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),o}()},function(e){return function(t){function o(){return n(this,o),l(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return a(o,e),r(o,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else s(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else s(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else s(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"innerHTML",e,this)}}]),o}()},function(e){return function(t){function o(e){n(this,o);var t=l(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e));t._reduceProps=function(e,n){var r=e.props,i=e.shouldUpdate,a=t._hasKeys[n];if(-1===D.indexOf(n)&&a)throw new N(n,t);var c="_"+n,l=r[n],u=t[c];return i||t.shouldUpdateCallback(l,u)?(t[c]=l,t._props[n]=l,a&&s(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),n,l,t),{props:r,shouldUpdate:!0}):{props:r,shouldUpdate:!1}},t._isConnected=!1,t._props={},t._hasKeys={},t.updatedDebounced=O(function(){return t.updated&&t.updated()},50);var r=t.constructor.observedAttributes;return Array.isArray(r)&&r.forEach(function(e){var n,r=L(e),o=r in t;if(-1===D.indexOf(r)&&o)throw new N(r,t);t._hasKeys[r]=o,Object.defineProperty(t,r,n={get:function(){return this._props[r]},set:function(e){this.shouldUpdateCallback(this._props[r],e)&&(this._props[r]=e,o&&s(n.__proto__||Object.getPrototypeOf(n),r,e,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),t}return a(o,e),r(o,[{key:"connectedCallback",value:function(){var e=this;if(i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this)&&i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&t.forEach(function(t){var n=L(t);if(e.hasAttribute(t)){var r=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=T(n,t)}(e,t),i=e._hasKeys[n];e._props[n]=r,i&&s(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),n,r,e)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){this.shouldUpdateCallback(n,t)&&(this[L(e)]=T(n))}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return n.indexOf(e.replace(E,P))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),o}()},function(e){return function(o){function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,r=c(e,["template"]);n(this,s);var o=l(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,r));return o._template=t,o._hasTemplate=!!t,o._hasRendered=!1,o.updated=o.render,o}return a(s,e),r(s,[{key:"render",value:function(){var e=this,n=!this._hasRendered;if(this.willRenderCallback(n),this._hasTemplate){var r=this._template;try{if(n){for(var o=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});var c=r(this._props,this.childrenFragment),l=document.createDocumentFragment();if(Array.isArray(c))c.forEach(function(e){l.appendChild(e)});else if(c){if("string"==typeof c)throw new K(this);l.appendChild(c)}if(n)i(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"appendChild",this).call(this,l);else{var u=this.cloneNode(!1);u._isMorphing=!0,u.appendChild(l),this._isMorphing=!0,function(e,n){if("object"!==(void 0===e?"undefined":t(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===n?"undefined":t(n)))throw new Error("componentMorph: newTree should be an object");q(n,e)}(this,u),function(){for(var e=void 0;e=V.pop();)delete e.isSameNode;V=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(n)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),s}()},function(e){return function(t){function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,r=void 0===t?"":t,i=c(e,["styles"]);n(this,o);var a=l(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,i));return a._styles=r,a}return a(o,e),r(o,[{key:"connectedCallback",value:function(){i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this)&&i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),o}()})(function(e){function t(e){n(this,t);var r=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r._id=h(r.nodeName),r}return a(t,B),r(t,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}()),Z={},J=function(e){function t(){var e,r,o;n(this,t);for(var i=arguments.length,a=Array(i),c=0;c<i;c++)a[c]=arguments[c];return r=o=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),o._appendStyles=function(){t.appendGlobalStyles(o._styles,o.nodeName)},l(o,r)}return a(t,G),r(t,null,[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:G.uuidv4();if(e&&!Z[t]){var n=document.createElement("style"),r=document.createTextNode(e);Z[t]=!0,n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),t}(),X="@-webkit-keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n.a-choice {\n  position: relative;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n  .a-choice + .a-choice {\n    margin-left: 14px; }\n  .a-choice:hover:not(.a-choice--disabled):not(.a-choice--error) .a-choice__label, .a-choice:active:not(.a-choice--disabled):not(.a-choice--error) .a-choice__label {\n    border-color: #00008f;\n    color: #00008f;\n    background-color: #fff; }\n\n.a-choice__label {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  position: relative;\n  padding: 10px 30px;\n  border-width: 2px;\n  border-style: solid;\n  text-decoration: none;\n  text-transform: uppercase;\n  vertical-align: middle;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  margin: 0;\n  color: #333;\n  border: 1px solid #ccc;\n  background-color: #f5f5f5; }\n  @media (min-width: 576px) {\n    .a-choice__label {\n      font-size: 14px;\n      line-height: 1.21; } }\n  .a-choice__label:hover, .a-choice__label:active, .a-choice__label:focus {\n    cursor: pointer;\n    text-decoration: none;\n    outline: none; }\n  .a-choice__label:disabled {\n    cursor: default !important; }\n  @media (min-width: 576px) {\n    .a-choice__label {\n      font-size: 14px;\n      line-height: 1.21; } }\n\n.a-choice--error .a-choice__label {\n  border-color: #c91432; }\n\n.a-choice__input {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  clip: rect(0, 0, 0, 0);\n  margin: -1px;\n  overflow: hidden; }\n  .a-choice__input:checked + .a-choice__label {\n    font-size: 12px;\n    font-weight: 700;\n    line-height: 1.5;\n    letter-spacing: 0.02em;\n    border-color: #00008f;\n    color: #00008f;\n    background-color: #fff; }\n    @media (min-width: 576px) {\n      .a-choice__input:checked + .a-choice__label {\n        font-size: 14px;\n        line-height: 1.21; } }\n  .a-choice__input:disabled + .a-choice__label {\n    cursor: default;\n    color: #999;\n    border-color: #ccc; }\n",Q=/\n[\s]+$/,Y=/^\n[\s]+/,ee=/[\s]+$/,te=/^[\s]+/,ne=/[\n\s]+/g,re=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],oe=["code","pre","textarea"],ie=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,c=0,l=n.length;c<l;c++){var s=n[c];if(Array.isArray(s))e(t,s);else{("number"==typeof s||"boolean"==typeof s||"function"==typeof s||s instanceof Date||s instanceof RegExp)&&(s=s.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof s)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=s:(s=document.createTextNode(s),t.appendChild(s),u=s),c===l-1&&(a=!1,-1===re.indexOf(i)&&-1===oe.indexOf(i)?""===(r=u.nodeValue.replace(Y,"").replace(ee,"").replace(Q,"").replace(ne," "))?t.removeChild(u):u.nodeValue=r:-1===oe.indexOf(i)&&(o=0===c?"":" ",r=u.nodeValue.replace(Y,o).replace(te," ").replace(ee,"").replace(Q,"").replace(ne," "),u.nodeValue=r));else if(s&&s.nodeType){a&&(a=!1,-1===re.indexOf(i)&&-1===oe.indexOf(i)?""===(r=u.nodeValue.replace(Y,"").replace(Q,"").replace(ne," "))?t.removeChild(u):u.nodeValue=r:-1===oe.indexOf(i)&&(r=u.nodeValue.replace(te," ").replace(Y,"").replace(Q,"").replace(ne," "),u.nodeValue=r));var d=s.nodeName;d&&(i=d.toLowerCase()),t.appendChild(s)}}}};function ae(e,t){var n,r,o,i=e.inputId,a=void 0===i?G.uuidv4():i,c=e.value,l=e.name,s=e.checked,u=void 0!==s&&s,d=e.disabled,p=void 0!==d&&d;return(o=document.createElement("label")).setAttribute("class","a-choice__wrapper"),ie(o,["\n    ",(n=document.createElement("input"),n.setAttribute("id",""+String(a)),n.setAttribute("type","radio"),n.setAttribute("name",""+String(l)),u&&n.setAttribute("checked","checked"),n.setAttribute("value",""+String(c)),p&&n.setAttribute("disabled","disabled"),n.setAttribute("class","a-choice__input"),n),"\n      ",(r=document.createElement("span"),r.setAttribute("class","a-choice__label"),ie(r,[t]),r),"\n  "]),o}var ce,le,se,ue=function(e){function t(){return n(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:X,template:ae}))}return a(t,J),r(t,null,[{key:"observedAttributes",get:function(){return["input-id","error","value","name","checked","disabled"]}}]),r(t,[{key:"willRenderCallback",value:function(){var e=this.error,t=this.checked,n=this.disabled;this.className=p(this.initialClassName,"a-choice",{"a-choice--error":e,"a-choice--checked":t,"a-choice--disabled":n})}}]),t}();return ue.tagName="axa-choice",ce=function(){window.customElements.define(ue.tagName,ue)},le=0,se=function(){if(0===le)try{ce.apply(void 0,arguments),le+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",se,!1),document.addEventListener("WebComponentsReady",se,!1),ue}();
