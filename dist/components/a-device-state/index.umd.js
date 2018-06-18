!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e():"function"==typeof define&&define.amd?define(e):e()}(0,function(){"use strict";var t=function(){var t=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=Object.defineProperty({},"passive",{get:function(){t=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,e),window.removeEventListener("testPassiveEventSupport",n,e)}return t}(),e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},o=function t(e,n,i){null===e&&(e=Function.prototype);var a=Object.getOwnPropertyDescriptor(e,n);if(void 0===a){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,n,i)}if("value"in a)return a.value;var r=a.get;return void 0!==r?r.call(i):void 0},r=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},d=function(t,e){var n={};for(var i in t)e.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n},p=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},c=function t(e,n,i,a){var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var r=Object.getPrototypeOf(e);null!==r&&t(r,n,i,a)}else if("value"in o&&o.writable)o.value=i;else{var d=o.set;void 0!==d&&d.call(a,i)}return i},l=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],i=!0,a=!1,o=void 0;try{for(var r,d=t[Symbol.iterator]();!(i=(r=d.next()).done)&&(n.push(r.value),!e||n.length!==e);i=!0);}catch(t){a=!0,o=t}finally{try{!i&&d.return&&d.return()}finally{if(a)throw o}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)};function u(t,e){var n=e.className;return e.hasClass||t.push(n),t}function f(t){for(var e=t.className,n=!1,i=!0,a=arguments.length,o=Array(a>1?a-1:0),r=1;r<a;r++)o[r-1]=arguments[r];var d=o.map(function(t){var a=(o=t,new RegExp("^"+o+"$|^"+o+"\\s|\\s"+o+"\\s|\\s"+o+"$",r)).test(e);var o,r;a?n=!0:i=!1;return{className:t,hasClass:a}});return!(!i&&!n)&&d}var m=/\s+/,h={transitionend:function(){for(var t=document.createElement("div").style,e={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(e),i=n.length,a=void 0,o=0;o<i;++o)if(void 0!==t[a=n[o]])return e[a];return""}()};function v(n,i,a,o){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},d=r.capture,p=void 0!==d&&d,c=r.passive,l=void 0===c||c;if(h[i]&&(i=h[i]),!n||!i)return null;var s=void 0===a?"undefined":e(a),u=a&&"string"===s;if("function"===s){if(o){var v=o;p=v.capture,l=v.passive}o=a}for(var b=t?{capture:p,passive:l}:p,x=u?function(t){var e=t.target;for(;!f(e,a)&&e!==n;)e=e.parentNode;if(e!==n)return o(t,e)}:o,y=i.split(m),w=y.length,_=0;_<w;++_)n.addEventListener(y[_],x,b);return function t(){for(var e=0;e<w;++e)n.removeEventListener(y[e],x,b);!function(t,e){if(!t)return!1;for(var n=Object.keys(t),i=n.length,a=0;a<i;++a){var o=n[a];if(t[o]===e)return delete t[o]}}(this,t)}}function b(t){var e=t.ownerDocument;return e.defaultView||e.parentWindow}function x(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.leading,a=void 0!==i&&i,o=n.trailing,r=void 0===o||o,d=n.maxWait,p=void 0!==d&&d,c=void 0,l=void 0,u=void 0,f=void 0,m=!1,h=e!==p,v=!1!==p;function b(){for(var n=arguments.length,i=Array(n),o=0;o<n;o++)i[o]=arguments[o];return c=i,h&&(l&&clearTimeout(l),l=setTimeout(x,e)),v&&!u&&(u=setTimeout(y,p)),a&&!m&&(m=!0,f=t.apply(void 0,s(c))),f}return b.flush=function(){(l||u)&&(f=t.apply(void 0,s(c)));return _(),f},b.cancel=_,b;function x(){u&&clearTimeout(u),w()}function y(){l&&clearTimeout(l),w()}function w(){r&&(f=t.apply(void 0,s(c))),l=null,u=null,m=!1}function _(){l&&(clearTimeout(l),l=null),u&&(clearTimeout(u),u=null),c=void 0,m=!1}}var y=function(){try{var t=new window.CustomEvent("test",{cancelable:!0});if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(t){}return e;function e(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.bubbles,i=void 0!==n&&n,a=e.cancelable,o=void 0!==a&&a,r=e.detail,d=void 0===r?void 0:r,p=document.createEvent("CustomEvent");p.initCustomEvent(t,i,o,d);var c=p.preventDefault;return p.preventDefault=function(){c.call(p);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},p}}();function w(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new y(e,a({},i,{detail:n}));return t.dispatchEvent(o)}var _={};function k(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;_[t]||(_[t]={count:0,queue:[]});var i=_[t].queue;Array.isArray(i)?i.push([t,e,n]):w(n,t,e)}function g(t,e){var n=v(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,t,e);_[t]||(_[t]={count:0});var i,a=_[t];return a.count++,a.onsubscribe||(a.onsubscribe=x((i=t,function(){w(document,"pubsub/onsubscribe",i),w(document,"pubsub/onsubscribe/"+i,i),_[i]&&delete _[i].unsubscribe}),100)),a.onsubscribe(),function(){a.count--,n.call(this),a.count<=0&&delete _[t]}}v(document,"pubsub/onsubscribe",function(t){var e=t.detail;_[e]||(_[e]={count:0});var n=_[e],i=n.queue;Array.isArray(i)&&(i.forEach(function(t){var e=l(t,3),n=e[0],i=e[1],a=e[2];w(a,n,i)}),delete n.queue)});var O=".a-device-state",C=/\s/g,A=/^['"]+|['"]+$/g,P=!1,E=!1,N=!0,j=void 0,T=void 0,S=void 0;function R(){if(j||!(j=document.querySelector(O))&&P&&function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var a=f.apply(void 0,[t].concat(n));if(!0!==a){var o=[].concat(n);Array.isArray(a)&&(o=a.reduce(u,[])),o&&(t.className+=" "+o.join(" "))}}(j=document.body,O),!T&&j&&(T=b(j)),!j||!T)return!1;var t=T.getComputedStyle(j,":after").getPropertyValue("content")||T.getComputedStyle(j,"::after").getPropertyValue("content");return!!t&&(N=t!==S,S=t,t.replace(C,"").replace(A,"").split(",").reduce(M,{}))}function M(t,e){var n=e.split(":"),i=l(n,2),a=i[0],o=i[1];return t[a]=+o||o,t}var D,L={},U=function(t){return t in L||(L[t]=0),++L[t]},V=function(t,e){return t===e},I=((D=function(){var t;return(t=console).log.apply(t,arguments)},function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V;return function(){for(var e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];return function(){for(var e=arguments.length,i=Array(e),a=0;a<e;a++)i[a]=arguments[a];return function(){return t.apply(void 0,[].concat(n,i))?D.apply(void 0,arguments):void 0}}}})()(!0),function(t){function e(t,i){var a;n(this,e);for(var o="\n    Native Property >>>"+t+"<<< exists already at "+i.nodeName+"#"+i._id+" and evaluates to -> "+i[t]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",r=arguments.length,d=Array(r>2?r-2:0),c=2;c<r;c++)d[c-2]=arguments[c];var l=p(this,(a=e.__proto__||Object.getPrototypeOf(e)).call.apply(a,[this,o].concat(d)));return Error.captureStackTrace&&Error.captureStackTrace(l,e),l.name="PropertyExistsException",l}return r(e,t),e}(Error)),H=/[A-Z]/g;function W(t,e,n){var i=t.toLowerCase(),a=n.charAt(e+1);return 0===e||a.toUpperCase()===a?i:"-"+i}var F=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function q(t,e){var n=t;if(t&&e!==t){if(F.test(t))try{n=JSON.parse(t)}catch(n){console.error("Attribute "+e+" has an error:\n"+n+"\n",t)}}else n=!0;return n}var z=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,K=/[-_]+/g;function $(t){return t.replace(z,G)}function G(t,e){return 0==+t||K.test(t)?"":0===e?t.toLowerCase():t.toUpperCase()}var B=["title","checked","disabled"],Z=[];var J=1,X=3,Q=8;function Y(t,e){var n=t.nodeType,i=t.nodeName;n===J&&function(t,e){for(var n=e.attributes,i=t.attributes,a=null,o=null,r=null,d=null,p=i.length-1;p>=0;--p)if(d=i[p],r=d.name,a=d.namespaceURI,o=d.value,a){var c=d.localName;e.getAttributeNS(a,c||r)!==o&&e.setAttributeNS(a,r,o)}else e.hasAttribute(r)?e.getAttribute(r)!==o&&("null"===o||"undefined"===o?e.removeAttribute(r):e.setAttribute(r,o)):e.setAttribute(r,o);for(var l=n.length-1;l>=0;--l)!1!==(d=n[l]).specified&&(r=d.name,(a=d.namespaceURI)?(r=d.localName||r,t.hasAttributeNS(a,r)||e.removeAttributeNS(a,r)):t.hasAttributeNS(null,r)||e.removeAttribute(r))}(t,e),n!==X&&n!==Q||e.nodeValue===t.nodeValue||(e.nodeValue=t.nodeValue),"INPUT"===i?function(t,e){var n=t.value,i=e.value;tt(t,e,"checked"),tt(t,e,"disabled"),n!==i&&(e.setAttribute("value",n),e.value=n);"null"===n&&(e.value="",e.removeAttribute("value"));t.hasAttributeNS(null,"value")?"range"===e.type&&(e.value=n):e.removeAttribute("value")}(t,e):"OPTION"===i?tt(t,e,"selected"):"TEXTAREA"===i&&function(t,e){var n=t.value;n!==e.value&&(e.value=n);if(e.firstChild&&e.firstChild.nodeValue!==n){if(""===n&&e.firstChild.nodeValue===e.placeholder)return;e.firstChild.nodeValue=n}}(t,e)}function tt(t,e,n){t[n]!==e[n]&&(e[n]=t[n],t[n]?e.setAttribute(n,""):e.removeAttribute(n))}var et=3;function nt(t,e){return e?t?t.isSameNode&&t.isSameNode(e)?e:t.tagName!==e.tagName?t:(Y(t,e),e.skipChildren&&e.skipChildren()||function(t,e){for(var n=void 0,i=void 0,a=void 0,o=void 0,r=0,d=0;n=e.childNodes[d],i=t.childNodes[d-r],n||i;d++)if(i)if(n)if(it(i,n))(a=nt(i,n))!==n&&(e.replaceChild(a,n),r++);else{o=null;for(var p=d;p<e.childNodes.length;p++)if(it(e.childNodes[p],i)){o=e.childNodes[p];break}o?((a=nt(i,o))!==o&&r++,e.insertBefore(a,n)):i.id||n.id?(e.insertBefore(i,n),r++):(a=nt(i,n))!==n&&(e.replaceChild(a,n),r++)}else e.appendChild(i),r++;else e.removeChild(n),d--}(t,e),e):null:t}function it(t,e){return t.id?t.id===e.id:t.isSameNode?t.isSameNode(e):t.tagName===e.tagName&&(t.type===et&&t.nodeValue===e.nodeValue)}var at=function(t){function e(t){var i;n(this,e);for(var a="\n    Web Component "+t.nodeName+"%c#"+t._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,r=Array(o>1?o-1:0),d=1;d<o;d++)r[d-1]=arguments[d];var c=p(this,(i=e.__proto__||Object.getPrototypeOf(e)).call.apply(i,[this,a].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(c,e),c.name="TemplateNoStringReturnException",c}return r(e,t),e}(Error);function ot(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(ot.prototype,HTMLElement.prototype),Object.setPrototypeOf(ot,HTMLElement);var rt=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight(function(t,e){return e(t)},t)}}(function(t){return function(e){function a(){var t,e,i;n(this,a);for(var o=arguments.length,r=Array(o),d=0;d<o;d++)r[d]=arguments[d];return e=i=p(this,(t=a.__proto__||Object.getPrototypeOf(a)).call.apply(t,[this].concat(r))),i._makeContextReady=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;i.contextNode&&(clearTimeout(i.timeoutId),i.timeoutId=setTimeout(function(){i.contextCallback(i.contextNode,t)},10)),i.unContextEnabled&&i.unContextEnabled(),i.unContextEnabled=g("context/available",i._makeContextReady)},p(i,e)}return r(a,t),i(a,[{key:"connectedCallback",value:function(){o(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&o(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){o(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&o(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var t=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=t,k("context/available",t)}},{key:"consumeContext",value:function(t){this.__consumedContext=t&&t.toLowerCase()}},{key:"contextNode",get:function(){for(var t=this.__consumedContext,e=this.parentNode;e&&(!e.__isContext||t&&t!==e.__contextName);)e=e.parentNode;return!(!e||!e.__isContext)&&e}}]),a}()},function(t){return function(e){function a(){return n(this,a),p(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return r(a,t),i(a,[{key:"appendChild",value:function(t){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(t),this.render()):o(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"appendChild",this).call(this,t)}},{key:"innerText",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else c(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"innerText",t,this)}},{key:"textContent",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else c(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"textContent",t,this)}},{key:"innerHTML",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createElement("div");e.innerHTML=t,this._lightDOMRefs=Array.from(e.children),this.render()}else c(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"innerHTML",t,this)}}]),a}()},function(t){return function(e){function a(t){n(this,a);var e=p(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,t));e._reduceProps=function(t,n){var i=t.props,o=t.shouldUpdate,r=e._hasKeys[n];if(-1===B.indexOf(n)&&r)throw new I(n,e);var d="_"+n,p=i[n],l=e[d];return o||e.shouldUpdateCallback(p,l)?(e[d]=p,e._props[n]=p,r&&c(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),n,p,e),{props:i,shouldUpdate:!0}):{props:i,shouldUpdate:!1}},e._isConnected=!1,e._props={},e._hasKeys={},e.updatedDebounced=x(function(){return e.updated&&e.updated()},50);var i=e.constructor.observedAttributes;return Array.isArray(i)&&i.forEach(function(t){var n,i=$(t),a=i in e;if(-1===B.indexOf(i)&&a)throw new I(i,e);e._hasKeys[i]=a,Object.defineProperty(e,i,n={get:function(){return this._props[i]},set:function(t){this.shouldUpdateCallback(this._props[i],t)&&(this._props[i]=t,a&&c(n.__proto__||Object.getPrototypeOf(n),i,t,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),e}return r(a,t),i(a,[{key:"connectedCallback",value:function(){var t=this;if(o(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&o(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(e)&&e.forEach(function(e){var n=$(e);if(t.hasAttribute(e)){var i=function(t,e){if("function"==typeof t.hasAttribute&&!t.hasAttribute(e))return!1;var n=t.value;return e?n=t.getAttribute(e):e=t.name,n=q(n,e)}(t,e),o=t._hasKeys[n];t._props[n]=i,o&&c(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),n,i,t)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(t,e,n){this.shouldUpdateCallback(n,e)&&(this[$(t)]=q(n))}},{key:"setProps",value:function(t){var e=this.constructor.observedAttributes,n=void 0===e?[]:e;Object.keys(t).filter(function(t){return n.indexOf(t.replace(H,W))>-1}).reduce(this._reduceProps,{props:t,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(t,e){return t!==e}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),a}()},function(t){return function(a){function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.template,i=d(t,["template"]);n(this,c);var a=p(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,i));return a._template=e,a._hasTemplate=!!e,a._hasRendered=!1,a.updated=a.render,a}return r(c,t),i(c,[{key:"render",value:function(){var t=this,n=!this._hasRendered;if(this.willRenderCallback(n),this._hasTemplate){var i=this._template;try{if(n){for(var a=document.createDocumentFragment(),r=[];this.firstChild;)r.push(this.firstChild),a.appendChild(this.firstChild);this._lightDOMRefs=r,this.childrenFragment=a}else this._lightDOMRefs.forEach(function(e){var n=e.cloneNode(!0);t.childrenFragment.appendChild(n)});var d=i(this._props,this.childrenFragment),p=document.createDocumentFragment();if(Array.isArray(d))d.forEach(function(t){p.appendChild(t)});else if(d){if("string"==typeof d)throw new at(this);p.appendChild(d)}if(n)o(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,p);else{var l=this.cloneNode(!1);l._isMorphing=!0,l.appendChild(p),this._isMorphing=!0,function(t,n){if("object"!==(void 0===t?"undefined":e(t)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===n?"undefined":e(n)))throw new Error("componentMorph: newTree should be an object");nt(n,t)}(this,l),function(){for(var t=void 0;t=Z.pop();)delete t.isSameNode;Z=[]}(),this._isMorphing=!1}}catch(t){console.error(t)}}this._hasRendered=!0,this.didRenderCallback(n)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(t){}},{key:"didRenderCallback",value:function(t){}}]),c}()},function(t){return function(e){function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.styles,i=void 0===e?"":e,o=d(t,["styles"]);n(this,a);var r=p(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,o));return r._styles=i,r}return r(a,t),i(a,[{key:"connectedCallback",value:function(){o(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&o(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var e=document.createElement("style"),n=document.createTextNode(this._styles);e.appendChild(n),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",e):t.appendChild(e)}}}]),a}()})(function(t){function e(t){n(this,e);var i=p(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i._id=U(i.nodeName),i}return r(e,ot),i(e,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}}]),e}()),dt={},pt=function(t){function e(){var t,i,a;n(this,e);for(var o=arguments.length,r=Array(o),d=0;d<o;d++)r[d]=arguments[d];return i=a=p(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(r))),a._appendStyles=function(){e.appendGlobalStyles(a._styles,a.nodeName)},p(a,i)}return r(e,rt),i(e,null,[{key:"appendGlobalStyles",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rt.uuidv4();if(t&&!dt[e]){var n=document.createElement("style"),i=document.createTextNode(t);dt[e]=!0,n.appendChild(i),n.setAttribute("data-c-name",e.toLowerCase()),document.head.appendChild(n)}}}]),e}();!function(){var t=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.leading,a=void 0===i||i,o=n.trailing;return x(t,e,{leading:a,maxWait:e,trailing:void 0===o||o})}(n,100);function e(){P=!0,t()}function n(){var e=R();e&&(E||(E=!0,v(b(j),"resize",t),v(b(j),"orientationchange",t)),N&&k("device-state/change",e))}v(document,"DOMContentLoaded",e),v(document,"load",e),g("pubsub/onsubscribe/device-state/change",function(){var t=R();t&&k("device-state/change",t)}),n()}(),pt.appendGlobalStyles('.a-device-state::after {\n  position: absolute;\n  top: -9999px;\n  left: -9999px;\n  display: block;\n  content: \'breakpoint:xl, orientation:landscape, pixel-ratio: 1\'; }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1), (orientation: portrait) and (min-resolution: 96dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:portrait, pixel-ratio:1"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1), (orientation: landscape) and (min-resolution: 96dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:landscape, pixel-ratio:1"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) and (min-width: 576px), (orientation: portrait) and (min-resolution: 96dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:portrait, pixel-ratio:1"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) and (min-width: 576px), (orientation: landscape) and (min-resolution: 96dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:landscape, pixel-ratio:1"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) and (min-width: 768px), (orientation: portrait) and (min-resolution: 96dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:portrait, pixel-ratio:1"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) and (min-width: 768px), (orientation: landscape) and (min-resolution: 96dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:landscape, pixel-ratio:1"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) and (min-width: 992px), (orientation: portrait) and (min-resolution: 96dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:portrait, pixel-ratio:1"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) and (min-width: 992px), (orientation: landscape) and (min-resolution: 96dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:landscape, pixel-ratio:1"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) and (min-width: 1200px), (orientation: portrait) and (min-resolution: 96dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:portrait, pixel-ratio:1"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) and (min-width: 1200px), (orientation: landscape) and (min-resolution: 96dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:landscape, pixel-ratio:1"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5), (orientation: portrait) and (min-resolution: 144dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:portrait, pixel-ratio:1.5"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5), (orientation: landscape) and (min-resolution: 144dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:landscape, pixel-ratio:1.5"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 576px), (orientation: portrait) and (min-resolution: 144dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:portrait, pixel-ratio:1.5"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 576px), (orientation: landscape) and (min-resolution: 144dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:landscape, pixel-ratio:1.5"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 768px), (orientation: portrait) and (min-resolution: 144dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:portrait, pixel-ratio:1.5"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 768px), (orientation: landscape) and (min-resolution: 144dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:landscape, pixel-ratio:1.5"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 992px), (orientation: portrait) and (min-resolution: 144dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:portrait, pixel-ratio:1.5"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 992px), (orientation: landscape) and (min-resolution: 144dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:landscape, pixel-ratio:1.5"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1200px), (orientation: portrait) and (min-resolution: 144dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:portrait, pixel-ratio:1.5"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1200px), (orientation: landscape) and (min-resolution: 144dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:landscape, pixel-ratio:1.5"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2), (orientation: portrait) and (min-resolution: 192dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:portrait, pixel-ratio:2"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2), (orientation: landscape) and (min-resolution: 192dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:landscape, pixel-ratio:2"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) and (min-width: 576px), (orientation: portrait) and (min-resolution: 192dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:portrait, pixel-ratio:2"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) and (min-width: 576px), (orientation: landscape) and (min-resolution: 192dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:landscape, pixel-ratio:2"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px), (orientation: portrait) and (min-resolution: 192dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:portrait, pixel-ratio:2"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px), (orientation: landscape) and (min-resolution: 192dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:landscape, pixel-ratio:2"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) and (min-width: 992px), (orientation: portrait) and (min-resolution: 192dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:portrait, pixel-ratio:2"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) and (min-width: 992px), (orientation: landscape) and (min-resolution: 192dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:landscape, pixel-ratio:2"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1200px), (orientation: portrait) and (min-resolution: 192dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:portrait, pixel-ratio:2"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1200px), (orientation: landscape) and (min-resolution: 192dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:landscape, pixel-ratio:2"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 3), (orientation: portrait) and (min-resolution: 288dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:portrait, pixel-ratio:3"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 3), (orientation: landscape) and (min-resolution: 288dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:landscape, pixel-ratio:3"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 3) and (min-width: 576px), (orientation: portrait) and (min-resolution: 288dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:portrait, pixel-ratio:3"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 3) and (min-width: 576px), (orientation: landscape) and (min-resolution: 288dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:landscape, pixel-ratio:3"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 3) and (min-width: 768px), (orientation: portrait) and (min-resolution: 288dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:portrait, pixel-ratio:3"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 3) and (min-width: 768px), (orientation: landscape) and (min-resolution: 288dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:landscape, pixel-ratio:3"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 3) and (min-width: 992px), (orientation: portrait) and (min-resolution: 288dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:portrait, pixel-ratio:3"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 3) and (min-width: 992px), (orientation: landscape) and (min-resolution: 288dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:landscape, pixel-ratio:3"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 3) and (min-width: 1200px), (orientation: portrait) and (min-resolution: 288dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:portrait, pixel-ratio:3"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 3) and (min-width: 1200px), (orientation: landscape) and (min-resolution: 288dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:landscape, pixel-ratio:3"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 4), (orientation: portrait) and (min-resolution: 384dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:portrait, pixel-ratio:4"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 4), (orientation: landscape) and (min-resolution: 384dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:landscape, pixel-ratio:4"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 4) and (min-width: 576px), (orientation: portrait) and (min-resolution: 384dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:portrait, pixel-ratio:4"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 4) and (min-width: 576px), (orientation: landscape) and (min-resolution: 384dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:landscape, pixel-ratio:4"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 4) and (min-width: 768px), (orientation: portrait) and (min-resolution: 384dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:portrait, pixel-ratio:4"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 4) and (min-width: 768px), (orientation: landscape) and (min-resolution: 384dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:landscape, pixel-ratio:4"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 4) and (min-width: 992px), (orientation: portrait) and (min-resolution: 384dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:portrait, pixel-ratio:4"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 4) and (min-width: 992px), (orientation: landscape) and (min-resolution: 384dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:landscape, pixel-ratio:4"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 4) and (min-width: 1200px), (orientation: portrait) and (min-resolution: 384dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:portrait, pixel-ratio:4"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 4) and (min-width: 1200px), (orientation: landscape) and (min-resolution: 384dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:landscape, pixel-ratio:4"; } }\n\n.a-device-state--debug::after {\n  position: fixed;\n  top: auto;\n  left: auto;\n  right: 0;\n  bottom: 0;\n  z-index: 1030;\n  display: block;\n  padding: 10px;\n  background: rgba(201, 20, 50, 0.9);\n  color: #fff; }\n')});
