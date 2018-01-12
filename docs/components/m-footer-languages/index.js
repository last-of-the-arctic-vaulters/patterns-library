var StyleGuideWebComponent=function(){"use strict";function e(e,t){return t={exports:{}},e(t,t.exports),t.exports}function t(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;if(t?n=e.getAttribute(t):t=e.name,n&&t!==n){if(g.test(n))try{n=JSON.parse(n)}catch(t){console.error("Attribute "+e+" has an error:\n"+t+"\n",n)}}else n=!0;return n}function n(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new m(t,s({},o,{detail:n}));e.dispatchEvent(r)}function o(e,t,n,o){function r(){for(var t=0;t<f;++t)e.removeEventListener(u[t],s,a);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}}(this,r)}var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(y[t]&&(t=y[t]),!e||!t)return null;var l=void 0===n?"undefined":i(n);"function"===l&&(a=!!o,o=n);for(var s=n&&"string"===l?function(t){for(var r=t.target;!function(e,t){return function(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}(t).test(e.className)}(r,n)&&r!==e;)r=r.parentNode;if(r!==e)return o(t,r)}:o,u=t.split(v),f=u.length,c=0;c<f;++c)e.addEventListener(u[c],s,a);return r}function r(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=(function(){function e(e){this.value=e}function t(t){function n(r,i){try{var a=t[r](i),l=a.value;l instanceof e?Promise.resolve(l.value).then(function(e){n("next",e)},function(e){n("throw",e)}):o(a.done?"return":"normal",a.value)}catch(e){o("throw",e)}}function o(e,t){switch(e){case"return":r.resolve({value:t,done:!0});break;case"throw":r.reject(t);break;default:r.resolve({value:t,done:!1})}(r=r.next)?n(r.key,r.arg):i=null}var r,i;this._invoke=function(e,t){return new Promise(function(o,a){var l={key:e,arg:t,resolve:o,reject:a,next:null};i?i=i.next=l:(r=i=l,n(e,t))})},"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},f=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},c=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(o=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&l.return&&l.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),p=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},h=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},d=e(function(e){!function(){function t(){for(var e=[],o=0;o<arguments.length;o++){var r=arguments[o];if(r){var a=void 0===r?"undefined":i(r);if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r))e.push(t.apply(null,r));else if("object"===a)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}var n={}.hasOwnProperty;e.exports?e.exports=t:window.classNames=t}()}),g=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/,m=function(){function e(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,l=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(e,o,i,l);var u=s.preventDefault;return s.preventDefault=function(){u.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},s}try{var t=new window.CustomEvent("test");if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return e}(),v=/\s+/,y={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(r=n[i],void 0!==e[r])return t[r];return null}()},x={};o(document,"pubsub/onsubscribe",function(e){var t=e.detail;x[t]||(x[t]={count:0});var o=x[t],r=o.queue;Array.isArray(r)&&(r.forEach(function(e){var t=c(e,3),o=t[0],r=t[1];n(t[2],o,r)}),delete o.queue)}),Object.setPrototypeOf(r.prototype,HTMLElement.prototype),Object.setPrototypeOf(r,HTMLElement);var b={},_=function(e){function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];a(this,i);var n=f(this,(i.__proto__||Object.getPrototypeOf(i)).call(this));return n._makeContextReady=n._makeContextReady.bind(n),n._initialise(e,t),n}return u(i,r),l(i,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var n=this._template;if(n)try{for(var o=document.createDocumentFragment();this.firstChild;)o.appendChild(this.firstChild);var r=n(function(e){if(!e.hasAttributes)return null;for(var n={},o=e.attributes,r=o.length,i=0;i<r;++i){var a=o[i];n[a.name]=t(a)}return n}(this),o);if(Array.isArray(r))r.forEach(function(t){e.appendChild(t)});else if(r){if("string"==typeof r){var i=new Error("throwed");throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),i}this.appendChild(r)}this._hasRendered=!0}catch(i){"throwed"!==i.message&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+i+"\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;x[e]||(x[e]={count:0,queue:[]});var r=x[e].queue;Array.isArray(r)?r.push([e,t,o]):n(o,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=function(e,t){var r=o(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);x[e]||(x[e]={count:0});var i=x[e];return i.count++,i.onsubscribe||(i.onsubscribe=function(e){function t(){for(var t=arguments.length,o=Array(t),i=0;i<t;i++)o[i]=arguments[i];return p=o,y&&(d&&clearTimeout(d),d=setTimeout(function(){g&&clearTimeout(g),n()},r)),x&&!g&&(g=setTimeout(function(){d&&clearTimeout(d),n()},c)),l&&!v&&(v=!0,m=e.apply(void 0,h(p))),m}function n(){u&&(m=e.apply(void 0,h(p))),d=null,g=null,v=!1}function o(){d&&(clearTimeout(d),d=null),g&&(clearTimeout(g),g=null),p=void 0,v=!1}var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=i.leading,l=void 0!==a&&a,s=i.trailing,u=void 0===s||s,f=i.maxWait,c=void 0!==f&&f,p=void 0,d=void 0,g=void 0,m=void 0,v=!1,y=r!==c,x=!1!==c;return t.flush=function(){return(d||g)&&(m=e.apply(void 0,h(p))),o(),m},t.cancel=o,t}(function(e){return function(){n(document,"pubsub/onsubscribe",e),n(document,"pubsub/onsubscribe/"+e,e),x[e]&&delete x[e].unsubscribe}}(e),100)),i.onsubscribe(),function(){i.count--,r.call(this),i.count<=0&&delete x[e]}}("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),i}(),w=(function(e){function t(){return a(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}u(t,_),l(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return a(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,_),l(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_.uuidv4();if(e&&!b[e]){var n=document.createElement("style"),o=document.createTextNode(e);n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),b[e]=!0}}}]),t}()),k=".m-footer-languages {\n  padding-right: 15px;\n  padding-left: 15px;\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  max-width: 33.33333%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 33.33333%;\n          flex: 0 0 33.33333%;\n  display: block; }\n  @media (max-width: 991px) {\n    .m-footer-languages {\n      position: static;\n      width: auto;\n      max-width: none;\n      -webkit-box-flex: 1;\n          -ms-flex: auto;\n              flex: auto; } }\n\n.m-footer-languages__title {\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  color: #fff;\n  text-transform: uppercase; }\n  @media (min-width: 576px) {\n    .m-footer-languages__title {\n      font-size: 16px;\n      font-weight: 700;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .m-footer-languages__title {\n      font-size: 16px;\n      font-weight: 700;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .m-footer-languages__title {\n      font-size: 16px;\n      font-weight: 700;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n  @media (max-width: 991px) {\n    .m-footer-languages__title {\n      display: none !important; } }\n\n.m-footer-languages__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  *zoom: 1;\n  margin-right: -10px;\n  margin-left: -10px; }\n  .m-footer-languages__list::before, .m-footer-languages__list::after {\n    display: table;\n    content: \" \"; }\n  .m-footer-languages__list::after {\n    clear: both; }\n\n.m-footer-languages__list-item {\n  position: relative;\n  display: block;\n  float: left; }\n  .m-footer-languages__list-item::after {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    display: block;\n    width: 1px;\n    height: 14px;\n    margin-top: -7px;\n    content: '';\n    background: rgba(255, 255, 255, 0.65); }\n  .m-footer-languages__list-item:first-child::after {\n    display: none; }\n\n.m-footer-languages__link {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  display: block;\n  padding: 16px 10px 17px;\n  color: rgba(255, 255, 255, 0.65);\n  text-transform: uppercase; }\n  @media (min-width: 576px) {\n    .m-footer-languages__link {\n      font-size: 14px;\n      font-weight: 600;\n      line-height: 1.21;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .m-footer-languages__link {\n      font-size: 14px;\n      font-weight: 600;\n      line-height: 1.21;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .m-footer-languages__link {\n      font-size: 14px;\n      font-weight: 600;\n      line-height: 1.21;\n      letter-spacing: 0.02em; } }\n  .m-footer-languages__link:hover, .m-footer-languages__link:active, .m-footer-languages__link.is-active {\n    color: #fff;\n    text-decoration: none; }\n\n.m-footer-languages--inline {\n  position: static;\n  width: auto;\n  max-width: none;\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto; }\n  .m-footer-languages--inline .m-footer-languages__box {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .m-footer-languages--inline .m-footer-languages__title {\n    font-size: 12px;\n    font-weight: 700;\n    line-height: 1.5;\n    letter-spacing: 0.02em;\n    display: block;\n    margin-right: 20px; }\n    @media (min-width: 576px) {\n      .m-footer-languages--inline .m-footer-languages__title {\n        font-size: 14px;\n        font-weight: 700;\n        line-height: 1.21;\n        letter-spacing: 0.02em; } }\n    @media (min-width: 768px) {\n      .m-footer-languages--inline .m-footer-languages__title {\n        font-size: 14px;\n        font-weight: 700;\n        line-height: 1.21;\n        letter-spacing: 0.02em; } }\n    @media (min-width: 992px) {\n      .m-footer-languages--inline .m-footer-languages__title {\n        font-size: 14px;\n        font-weight: 700;\n        line-height: 1.21;\n        letter-spacing: 0.02em; } }\n    .m-footer-languages--inline .m-footer-languages__title::after {\n      content: ':'; }\n",C=function(e){return function(t,n,o){for(var r in n)r in O&&(n[O[r]]=n[r],delete n[r]);return e(t,n,o)}},O={class:"className",for:"htmlFor","http-equiv":"httpEquiv"},E=1,A=2,S=3,T=4,j=5,N=6,L=7,P=8,z=9,F=10,M=11,R=12,D=13,G=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$"),$=/\n[\s]+$/,q=/^\n[\s]+/,V=/[\s]+$/,I=/^[\s]+/,W=/[\n\s]+/g,B=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],H=["code","pre"],J=function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,l=0,s=n.length;l<s;l++){var u=n[l];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var f=t.childNodes[t.childNodes.length-1];if("string"==typeof u)a=!0,f&&"#text"===f.nodeName?f.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),f=u),l===s-1&&(a=!1,-1===B.indexOf(i)&&-1===H.indexOf(i)?""===(o=f.nodeValue.replace(q,"").replace(V,"").replace($,"").replace(W," "))?t.removeChild(f):f.nodeValue=o:-1===H.indexOf(i)&&(r=0===l?"":" ",o=f.nodeValue.replace(q,r).replace(I," ").replace(V,"").replace($,"").replace(W," "),f.nodeValue=o));else if(u&&u.nodeType){a&&(a=!1,-1===B.indexOf(i)&&-1===H.indexOf(i)?""===(o=f.nodeValue.replace(q,"").replace($,"").replace(W," "))?t.removeChild(f):f.nodeValue=o:-1===H.indexOf(i)&&(o=f.nodeValue.replace(I," ").replace(q,"").replace($,"").replace(W," "),f.nodeValue=o));var c=u.nodeName;c&&(i=c.toLowerCase()),t.appendChild(u)}}}},Z=e(function(e){function t(e,t,i){var s;-1!==l.indexOf(e)&&(t.namespace=n);var u=!1;if(t.namespace&&(u=t.namespace,delete t.namespace),u)s=document.createElementNS(u,e);else{if(e===a)return document.createComment(t.comment);s=document.createElement(e)}for(var f in t)if(t.hasOwnProperty(f)){var c=f.toLowerCase(),p=t[f];if("classname"===c&&(c="class",f="class"),"htmlFor"===f&&(f="for"),-1!==r.indexOf(c))if("true"===p)p=c;else if("false"===p)continue;"on"===c.slice(0,2)?s[f]=p:u?"xlink:href"===f?s.setAttributeNS(o,f,p):/^xmlns($|:)/i.test(f)||s.setAttributeNS(null,f,p):s.setAttribute(f,p)}return J(s,i),s}var n="http://www.w3.org/2000/svg",o="http://www.w3.org/1999/xlink",r=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],a="!--",l=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];e.exports=function(e,t){function n(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":i(e))?e:o("",e)}t||(t={});var o=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=C(e)),function(r){function a(e){var n=[];l===L&&(l=T);for(var o=0;o<e.length;o++){var r=e.charAt(o);l===E&&"<"===r?(s.length&&n.push([E,s]),s="",l=A):">"!==r||function(e){return e===z||e===F}(l)||l===D?l===D&&/-$/.test(s)&&"-"===r?(t.comments&&n.push([P,s.substr(0,s.length-1)],[S]),s="",l=E):l===A&&/^!--$/.test(s)?(t.comments&&n.push([A,s],[j,"comment"],[M]),s=r,l=D):l===E||l===D?s+=r:l===A&&/\s/.test(r)?(n.push([A,s]),s="",l=T):l===A?s+=r:l===T&&/[^\s"'=/]/.test(r)?(l=j,s=r):l===T&&/\s/.test(r)?(s.length&&n.push([j,s]),n.push([R])):l===j&&/\s/.test(r)?(n.push([j,s]),s="",l=N):l===j&&"="===r?(n.push([j,s],[M]),s="",l=L):l===j?s+=r:l!==N&&l!==T||"="!==r?l!==N&&l!==T||/\s/.test(r)?l===L&&'"'===r?l=F:l===L&&"'"===r?l=z:l===F&&'"'===r?(n.push([P,s],[R]),s="",l=T):l===z&&"'"===r?(n.push([P,s],[R]),s="",l=T):l!==L||/\s/.test(r)?l===P&&/\s/.test(r)?(n.push([P,s],[R]),s="",l=T):l!==P&&l!==z&&l!==F||(s+=r):(l=P,o--):(n.push([R]),/[\w-]/.test(r)?(s+=r,l=j):l=T):(n.push([M]),l=L):(l===A?n.push([A,s]):l===j?n.push([j,s]):l===P&&s.length&&n.push([P,s]),n.push([S]),s="",l=E)}return l===E&&s.length?(n.push([E,s]),s=""):l===P&&s.length?(n.push([P,s]),s=""):l===F&&s.length?(n.push([P,s]),s=""):l===z&&s.length?(n.push([P,s]),s=""):l===j&&(n.push([j,s]),s=""),n}for(var l=E,s="",u=arguments.length,f=[],c=0;c<r.length;c++)if(c<u-1){var p=arguments[c+1],h=a(r[c]),d=l;d===F&&(d=P),d===z&&(d=P),d===L&&(d=P),d===T&&(d=j),h.push([0,d,p]),f.push.apply(f,h)}else f.push.apply(f,a(r[c]));for(var g=[null,{},[]],m=[[g,-1]],c=0;c<f.length;c++){var v=m[m.length-1][0],y=(h=f[c])[0];if(y===A&&/^\//.test(h[1]))k=m[m.length-1][1],m.length>1&&(m.pop(),m[m.length-1][0][2][k]=e(v[0],v[1],v[2].length?v[2]:void 0));else if(y===A){var x=[h[1],{},[]];v[2].push(x),m.push([x,v[2].length-1])}else if(y===j||0===y&&h[1]===j){for(var b,_="";c<f.length;c++)if(f[c][0]===j)_=o(_,f[c][1]);else{if(0!==f[c][0]||f[c][1]!==j)break;if("object"!==i(f[c][2])||_)_=o(_,f[c][2]);else for(b in f[c][2])f[c][2].hasOwnProperty(b)&&!v[1][b]&&(v[1][b]=f[c][2][b])}f[c][0]===M&&c++;for(var w=c;c<f.length;c++)if(f[c][0]===P||f[c][0]===j)v[1][_]?""===f[c][1]||(v[1][_]=o(v[1][_],f[c][1])):v[1][_]=n(f[c][1]);else{if(0!==f[c][0]||f[c][1]!==P&&f[c][1]!==j){!_.length||v[1][_]||c!==w||f[c][0]!==S&&f[c][0]!==R||(v[1][_]=_.toLowerCase()),f[c][0]===S&&c--;break}v[1][_]?""===f[c][2]||(v[1][_]=o(v[1][_],f[c][2])):v[1][_]=n(f[c][2])}}else if(y===j)v[1][h[1]]=!0;else if(0===y&&h[1]===j)v[1][h[2]]=!0;else if(y===S){if(function(e){return G.test(e)}(v[0])&&m.length){var k=m[m.length-1][1];m.pop(),m[m.length-1][0][2][k]=e(v[0],v[1],v[2].length?v[2]:void 0)}}else if(0===y&&h[1]===E)void 0===h[2]||null===h[2]?h[2]="":h[2]||(h[2]=o("",h[2])),Array.isArray(h[2][0])?v[2].push.apply(v[2],h[2]):v[2].push(h[2]);else if(y===E)v[2].push(h[1]);else if(y!==M&&y!==R)throw new Error("unhandled: "+y)}if(g[2].length>1&&/^\s*$/.test(g[2][0])&&g[2].shift(),g[2].length>2||2===g[2].length&&/\S/.test(g[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(g[2][0])&&"string"==typeof g[2][0][0]&&Array.isArray(g[2][0][2])&&(g[2][0]=e(g[2][0][0],g[2][0][1],g[2][0][2])),g[2][0]}}(t,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=t}),K=p(['<aside class="m-footer-languages__box">\n    ','\n    \n    <ul class="m-footer-languages__list">\n      ',"\n    </ul>\n  </aside>\n"],['<aside class="m-footer-languages__box">\n    ','\n    \n    <ul class="m-footer-languages__list">\n      ',"\n    </ul>\n  </aside>\n"]),Q=p(['<strong class="m-footer-languages__title">',"</strong>"],['<strong class="m-footer-languages__title">',"</strong>"]),U=p(['\n        <li class="m-footer-languages__list-item">\n          <a class="m-footer-languages__link ','" href="','" lang="','">',"</a>\n        </li>\n      "],['\n        <li class="m-footer-languages__list-item">\n          <a class="m-footer-languages__link ','" href="','" lang="','">',"</a>\n        </li>\n      "]),X=function(e){var t=e.title,n=e.items,o=e.short;return Z(K,t&&Z(Q,t),n.map(function(e){var t=e.name,n=e.code,r=e.url,i=e.isActive;return Z(U,i?"is-active":"",r,n,o?n:t)}))},Y=function(e){function n(){return a(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,k,X))}return u(n,w),l(n,[{key:"connectedCallback",value:function(){(function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;if(void 0!==a)return a.call(o)})(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this);var e=t(this,"inline");this.className=d(this.initialClassName,"m-footer-languages",{"m-footer-languages--inline":e})}}]),n}();return function(e){var t=0,n=function(){if(0===t)try{e.apply(void 0,arguments),t+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}};document.addEventListener("DOMContentLoaded",n,!1),document.addEventListener("WebComponentsReady",n,!1)}(function(){window.customElements.define("axa-footer-languages",Y)}),Y}();
