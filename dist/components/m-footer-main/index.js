var StyleGuideWebComponent=function(){"use strict";function e(e,t){return t={exports:{}},e(t,t.exports),t.exports}function t(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;if(t?n=e.getAttribute(t):t=e.name,n&&t!==n){if(h.test(n))try{n=JSON.parse(n)}catch(t){console.error("Attribute "+e+" has an error:\n"+t+"\n",n)}}else n=!0;return n}function n(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new m(t,s({},r,{detail:n}));e.dispatchEvent(o)}function r(e,t,n,r){function o(){for(var t=0;t<c;++t)e.removeEventListener(u[t],s,a);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,o)}var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(y[t]&&(t=y[t]),!e||!t)return null;var l=void 0===n?"undefined":i(n);"function"===l&&(a=!!r,r=n);for(var s=n&&"string"===l?function(t){for(var o=t.target;!function(e,t){return function(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}(t).test(e.className)}(o,n)&&o!==e;)o=o.parentNode;if(o!==e)return r(t,o)}:r,u=t.split(v),c=u.length,f=0;f<c;++f)e.addEventListener(u[f],s,a);return o}function o(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=(function(){function e(e){this.value=e}function t(t){function n(o,i){try{var a=t[o](i),l=a.value;l instanceof e?Promise.resolve(l.value).then(function(e){n("next",e)},function(e){n("throw",e)}):r(a.done?"return":"normal",a.value)}catch(e){r("throw",e)}}function r(e,t){switch(e){case"return":o.resolve({value:t,done:!0});break;case"throw":o.reject(t);break;default:o.resolve({value:t,done:!1})}(o=o.next)?n(o.key,o.arg):i=null}var o,i;this._invoke=function(e,t){return new Promise(function(r,a){var l={key:e,arg:t,resolve:r,reject:a,next:null};i?i=i.next=l:(o=i=l,n(e,t))})},"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},c=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},f=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&l.return&&l.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},p=e(function(e){!function(){function t(){for(var e=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var a=void 0===o?"undefined":i(o);if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o))e.push(t.apply(null,o));else if("object"===a)for(var l in o)n.call(o,l)&&o[l]&&e.push(l)}}return e.join(" ")}var n={}.hasOwnProperty;e.exports?e.exports=t:window.classNames=t}()}),h=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/,m=function(){function e(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,l=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(e,r,i,l);var u=s.preventDefault;return s.preventDefault=function(){u.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},s}try{var t=new window.CustomEvent("test");if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return e}(),v=/\s+/,y={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(o=n[i],void 0!==e[o])return t[o];return null}()},g={};r(document,"pubsub/onsubscribe",function(e){var t=e.detail;g[t]||(g[t]={count:0});var r=g[t],o=r.queue;Array.isArray(o)&&(o.forEach(function(e){var t=f(e,3),r=t[0],o=t[1];n(t[2],r,o)}),delete r.queue)}),Object.setPrototypeOf(o.prototype,HTMLElement.prototype),Object.setPrototypeOf(o,HTMLElement);var b={},x=function(e){function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];a(this,i);var n=c(this,(i.__proto__||Object.getPrototypeOf(i)).call(this));return n._makeContextReady=n._makeContextReady.bind(n),n._initialise(e,t),n}return u(i,o),l(i,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var n=this._template;if(n)try{for(var r=document.createDocumentFragment();this.firstChild;)r.appendChild(this.firstChild);var o=n(function(e){if(!e.hasAttributes)return null;for(var n={},r=e.attributes,o=r.length,i=0;i<o;++i){var a=r[i];n[a.name]=t(a)}return n}(this),r);if(Array.isArray(o))o.forEach(function(t){e.appendChild(t)});else if(o){if("string"==typeof o){var i=new Error("throwed");throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),i}this.appendChild(o)}this._hasRendered=!0}catch(i){"throwed"!==i.message&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+i+"\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;g[e]||(g[e]={count:0,queue:[]});var o=g[e].queue;Array.isArray(o)?o.push([e,t,r]):n(r,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=function(e,t){var o=r(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);g[e]||(g[e]={count:0});var i=g[e];return i.count++,i.onsubscribe||(i.onsubscribe=function(e){function t(){for(var t=arguments.length,r=Array(t),i=0;i<t;i++)r[i]=arguments[i];return p=r,g&&(h&&clearTimeout(h),h=setTimeout(function(){m&&clearTimeout(m),n()},o)),b&&!m&&(m=setTimeout(function(){h&&clearTimeout(h),n()},f)),l&&!y&&(y=!0,v=e.apply(void 0,d(p))),v}function n(){u&&(v=e.apply(void 0,d(p))),h=null,m=null,y=!1}function r(){h&&(clearTimeout(h),h=null),m&&(clearTimeout(m),m=null),p=void 0,y=!1}var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=i.leading,l=void 0!==a&&a,s=i.trailing,u=void 0===s||s,c=i.maxWait,f=void 0!==c&&c,p=void 0,h=void 0,m=void 0,v=void 0,y=!1,g=o!==f,b=!1!==f;return t.flush=function(){return(h||m)&&(v=e.apply(void 0,d(p))),r(),v},t.cancel=r,t}(function(e){return function(){n(document,"pubsub/onsubscribe",e),n(document,"pubsub/onsubscribe/"+e,e),g[e]&&delete g[e].unsubscribe}}(e),100)),i.onsubscribe(),function(){i.count--,o.call(this),i.count<=0&&delete g[e]}}("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),i}(),w=(function(e){function t(){return a(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}u(t,x),l(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return a(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,x),l(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:x.uuidv4();if(e&&!b[e]){var n=document.createElement("style"),r=document.createTextNode(e);n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),b[e]=!0}}}]),t}()),_=".m-footer-main {\n  display: block;\n  padding: 50px 0;\n  background: #3b3fd8;\n  border-top: 1px solid rgba(255, 255, 255, 0.25); }\n  @media (max-width: 991px) {\n    .m-footer-main {\n      padding-top: 40px;\n      padding-bottom: 40px; } }\n  @media (max-width: 575px) {\n    .m-footer-main {\n      padding: 0; } }\n\n.m-footer-main__box {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto; }\n  @media (min-width: 576px) {\n    .m-footer-main__box {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .m-footer-main__box {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .m-footer-main__box {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .m-footer-main__box {\n      max-width: 1140px; } }\n\n.m-footer-main__row {\n  margin-right: -15px;\n  margin-left: -15px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  .m-footer-main__row > :last-child {\n    margin-left: auto; }\n  @media (max-width: 575px) {\n    .m-footer-main__row {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n      .m-footer-main__row > :last-child {\n        margin-left: 0; } }\n\n.m-footer-main--light {\n  min-height: 49px;\n  padding: 0; }\n",C=function(e){return function(t,n,r){for(var o in n)o in k&&(n[k[o]]=n[o],delete n[o]);return e(t,n,r)}},k={class:"className",for:"htmlFor","http-equiv":"httpEquiv"},O=1,E=2,A=3,S=4,T=5,j=6,N=7,L=8,P=9,F=10,M=11,R=12,D=13,G=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$"),z=/\n[\s]+$/,$=/^\n[\s]+/,q=/[\s]+$/,V=/^[\s]+/,I=/[\n\s]+/g,W=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],B=["code","pre"],H=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,l=0,s=n.length;l<s;l++){var u=n[l];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof u)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),c=u),l===s-1&&(a=!1,-1===W.indexOf(i)&&-1===B.indexOf(i)?""===(r=c.nodeValue.replace($,"").replace(q,"").replace(z,"").replace(I," "))?t.removeChild(c):c.nodeValue=r:-1===B.indexOf(i)&&(o=0===l?"":" ",r=c.nodeValue.replace($,o).replace(V," ").replace(q,"").replace(z,"").replace(I," "),c.nodeValue=r));else if(u&&u.nodeType){a&&(a=!1,-1===W.indexOf(i)&&-1===B.indexOf(i)?""===(r=c.nodeValue.replace($,"").replace(z,"").replace(I," "))?t.removeChild(c):c.nodeValue=r:-1===B.indexOf(i)&&(r=c.nodeValue.replace(V," ").replace($,"").replace(z,"").replace(I," "),c.nodeValue=r));var f=u.nodeName;f&&(i=f.toLowerCase()),t.appendChild(u)}}}},J=e(function(e){function t(e,t,i){var s;-1!==l.indexOf(e)&&(t.namespace=n);var u=!1;if(t.namespace&&(u=t.namespace,delete t.namespace),u)s=document.createElementNS(u,e);else{if(e===a)return document.createComment(t.comment);s=document.createElement(e)}for(var c in t)if(t.hasOwnProperty(c)){var f=c.toLowerCase(),d=t[c];if("classname"===f&&(f="class",c="class"),"htmlFor"===c&&(c="for"),-1!==o.indexOf(f))if("true"===d)d=f;else if("false"===d)continue;"on"===f.slice(0,2)?s[c]=d:u?"xlink:href"===c?s.setAttributeNS(r,c,d):/^xmlns($|:)/i.test(c)||s.setAttributeNS(null,c,d):s.setAttribute(c,d)}return H(s,i),s}var n="http://www.w3.org/2000/svg",r="http://www.w3.org/1999/xlink",o=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],a="!--",l=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];e.exports=function(e,t){function n(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":i(e))?e:r("",e)}t||(t={});var r=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=C(e)),function(o){function a(e){var n=[];l===N&&(l=S);for(var r=0;r<e.length;r++){var o=e.charAt(r);l===O&&"<"===o?(s.length&&n.push([O,s]),s="",l=E):">"!==o||function(e){return e===P||e===F}(l)||l===D?l===D&&/-$/.test(s)&&"-"===o?(t.comments&&n.push([L,s.substr(0,s.length-1)],[A]),s="",l=O):l===E&&/^!--$/.test(s)?(t.comments&&n.push([E,s],[T,"comment"],[M]),s=o,l=D):l===O||l===D?s+=o:l===E&&/\s/.test(o)?(n.push([E,s]),s="",l=S):l===E?s+=o:l===S&&/[^\s"'=/]/.test(o)?(l=T,s=o):l===S&&/\s/.test(o)?(s.length&&n.push([T,s]),n.push([R])):l===T&&/\s/.test(o)?(n.push([T,s]),s="",l=j):l===T&&"="===o?(n.push([T,s],[M]),s="",l=N):l===T?s+=o:l!==j&&l!==S||"="!==o?l!==j&&l!==S||/\s/.test(o)?l===N&&'"'===o?l=F:l===N&&"'"===o?l=P:l===F&&'"'===o?(n.push([L,s],[R]),s="",l=S):l===P&&"'"===o?(n.push([L,s],[R]),s="",l=S):l!==N||/\s/.test(o)?l===L&&/\s/.test(o)?(n.push([L,s],[R]),s="",l=S):l!==L&&l!==P&&l!==F||(s+=o):(l=L,r--):(n.push([R]),/[\w-]/.test(o)?(s+=o,l=T):l=S):(n.push([M]),l=N):(l===E?n.push([E,s]):l===T?n.push([T,s]):l===L&&s.length&&n.push([L,s]),n.push([A]),s="",l=O)}return l===O&&s.length?(n.push([O,s]),s=""):l===L&&s.length?(n.push([L,s]),s=""):l===F&&s.length?(n.push([L,s]),s=""):l===P&&s.length?(n.push([L,s]),s=""):l===T&&(n.push([T,s]),s=""),n}for(var l=O,s="",u=arguments.length,c=[],f=0;f<o.length;f++)if(f<u-1){var d=arguments[f+1],p=a(o[f]),h=l;h===F&&(h=L),h===P&&(h=L),h===N&&(h=L),h===S&&(h=T),p.push([0,h,d]),c.push.apply(c,p)}else c.push.apply(c,a(o[f]));for(var m=[null,{},[]],v=[[m,-1]],f=0;f<c.length;f++){var y=v[v.length-1][0],g=(p=c[f])[0];if(g===E&&/^\//.test(p[1]))C=v[v.length-1][1],v.length>1&&(v.pop(),v[v.length-1][0][2][C]=e(y[0],y[1],y[2].length?y[2]:void 0));else if(g===E){var b=[p[1],{},[]];y[2].push(b),v.push([b,y[2].length-1])}else if(g===T||0===g&&p[1]===T){for(var x,w="";f<c.length;f++)if(c[f][0]===T)w=r(w,c[f][1]);else{if(0!==c[f][0]||c[f][1]!==T)break;if("object"!==i(c[f][2])||w)w=r(w,c[f][2]);else for(x in c[f][2])c[f][2].hasOwnProperty(x)&&!y[1][x]&&(y[1][x]=c[f][2][x])}c[f][0]===M&&f++;for(var _=f;f<c.length;f++)if(c[f][0]===L||c[f][0]===T)y[1][w]?""===c[f][1]||(y[1][w]=r(y[1][w],c[f][1])):y[1][w]=n(c[f][1]);else{if(0!==c[f][0]||c[f][1]!==L&&c[f][1]!==T){!w.length||y[1][w]||f!==_||c[f][0]!==A&&c[f][0]!==R||(y[1][w]=w.toLowerCase()),c[f][0]===A&&f--;break}y[1][w]?""===c[f][2]||(y[1][w]=r(y[1][w],c[f][2])):y[1][w]=n(c[f][2])}}else if(g===T)y[1][p[1]]=!0;else if(0===g&&p[1]===T)y[1][p[2]]=!0;else if(g===A){if(function(e){return G.test(e)}(y[0])&&v.length){var C=v[v.length-1][1];v.pop(),v[v.length-1][0][2][C]=e(y[0],y[1],y[2].length?y[2]:void 0)}}else if(0===g&&p[1]===O)void 0===p[2]||null===p[2]?p[2]="":p[2]||(p[2]=r("",p[2])),Array.isArray(p[2][0])?y[2].push.apply(y[2],p[2]):y[2].push(p[2]);else if(g===O)y[2].push(p[1]);else if(g!==M&&g!==R)throw new Error("unhandled: "+g)}if(m[2].length>1&&/^\s*$/.test(m[2][0])&&m[2].shift(),m[2].length>2||2===m[2].length&&/\S/.test(m[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(m[2][0])&&"string"==typeof m[2][0][0]&&Array.isArray(m[2][0][2])&&(m[2][0]=e(m[2][0][0],m[2][0][1],m[2][0][2])),m[2][0]}}(t,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=t}),Z=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['<div class="m-footer-main__box">\n    <div class="m-footer-main__row">',"</div>\n  </div>"],['<div class="m-footer-main__box">\n    <div class="m-footer-main__row">',"</div>\n  </div>"]),K=function(e,t){return J(Z,t)},Q=function(e){function n(){return a(this,n),c(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,_,K))}return u(n,w),l(n,[{key:"connectedCallback",value:function(){(function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(r)})(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this);var e=t(this,"light");this.className=p(this.initialClassName,"m-footer-main",{"m-footer-main--light":e})}}]),n}();return function(e){var t=0,n=function(){if(0===t)try{e.apply(void 0,arguments),t+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}};document.addEventListener("DOMContentLoaded",n,!1),document.addEventListener("WebComponentsReady",n,!1)}(function(){window.customElements.define("axa-footer-main",Q)}),Q}();
