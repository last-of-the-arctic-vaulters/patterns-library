var StyleGuideWebComponent=function(){"use strict";function e(e,n){return n={exports:{}},e(n,n.exports),n.exports}function n(e,n,t){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new X(n,d({},o,{detail:t}));e.dispatchEvent(i)}function t(e,n){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",n)}function o(e,n){return t(n).test(e.className)}function i(e,n){if(!e)return!1;for(var t=Object.keys(e),o=t.length,i=0;i<o;++i){var r=t[i];if(e[r]===n)return delete e[r]}return!1}function r(e,n,t,r){function a(){for(var n=0;n<p;++n)e.removeEventListener(u[n],d,l);i(this,a)}var l=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(te[n]&&(n=te[n]),!e||!n)return null;var c=void 0===t?"undefined":s(t);"function"===c&&(l=!!r,r=t);for(var d=t&&"string"===c?function(n){for(var i=n.target;!o(i,t)&&i!==e;)i=i.parentNode;if(i!==e)return r(n,i)}:r,u=n.split(ne),p=u.length,f=0;f<p;++f)e.addEventListener(u[f],d,l);return a}function a(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=(function(){function e(e){this.value=e}function n(n){function t(i,r){try{var a=n[i](r),s=a.value;s instanceof e?Promise.resolve(s.value).then(function(e){t("next",e)},function(e){t("throw",e)}):o(a.done?"return":"normal",a.value)}catch(e){o("throw",e)}}function o(e,n){switch(e){case"return":i.resolve({value:n,done:!0});break;case"throw":i.reject(n);break;default:i.resolve({value:n,done:!1})}(i=i.next)?t(i.key,i.arg):r=null}var i,r;this._invoke=function(e,n){return new Promise(function(o,a){var s={key:e,arg:n,resolve:o,reject:a,next:null};r?r=r.next=s:(i=r=s,t(e,n))})},"function"!=typeof n.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(n.prototype[Symbol.asyncIterator]=function(){return this}),n.prototype.next=function(e){return this._invoke("next",e)},n.prototype.throw=function(e){return this._invoke("throw",e)},n.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}),c=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},u=function e(n,t,o){null===n&&(n=Function.prototype);var i=Object.getOwnPropertyDescriptor(n,t);if(void 0===i){var r=Object.getPrototypeOf(n);return null===r?void 0:e(r,t,o)}if("value"in i)return i.value;var a=i.get;if(void 0!==a)return a.call(o)},p=function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)},f=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n},h=function(){return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,n){var t=[],o=!0,i=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(t.push(a.value),!n||t.length!==n);o=!0);}catch(e){i=!0,r=e}finally{try{!o&&s.return&&s.return()}finally{if(i)throw r}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),m=function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))},v=function(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)},g=e(function(e){!function(){function n(){for(var e=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var r=void 0===i?"undefined":s(i);if("string"===r||"number"===r)e.push(i);else if(Array.isArray(i))e.push(n.apply(null,i));else if("object"===r)for(var a in i)t.call(i,a)&&i[a]&&e.push(a)}}return e.join(" ")}var t={}.hasOwnProperty;e.exports?e.exports=n:window.classNames=n}()}),_=".m-dropdown {\n  position: relative;\n  display: inline-block; }\n\n.m-dropdown__select-wrap {\n  padding: 10.5px 55px 10.5px 20px;\n  background: #fff;\n  border: 1px solid #ccc;\n  color: #333;\n  position: relative;\n  display: block;\n  width: 100%;\n  /* undo padding frame padding */\n  padding: 0 !important;\n  overflow: hidden;\n  cursor: pointer; }\n  .m-dropdown__select-wrap:hover, .m-dropdown__select-wrap:active, .m-dropdown__select-wrap:focus {\n    outline: none;\n    border-color: #00008f; }\n    .m-dropdown__select-wrap:hover .m-dropdown__icon, .m-dropdown__select-wrap:active .m-dropdown__icon, .m-dropdown__select-wrap:focus .m-dropdown__icon {\n      color: #00008f; }\n\n.m-dropdown__select {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  /* important: fake it to have 0 width */\n  float: left;\n  /* overflow is indented to fix browser who don't support hiding the native arrow */\n  width: 120%;\n  height: 50px;\n  padding: 0;\n  margin-right: -120%;\n  line-height: 50px;\n  /* not ideal, firefox is buggy here - see fix at the bottom */\n  text-indent: 20px;\n  /* not ideal, firefox is buggy here - see fix at the bottom */\n  vertical-align: middle;\n  cursor: pointer;\n  /* don't use background nor border - the parent deals with that */\n  background: transparent;\n  border: none;\n  color: inherit;\n  /* disable native appearance like arrow */\n  -webkit-appearance: none;\n  -moz-appearance: none;\n       appearance: none;\n  /* disable outline styles */\n  /* fix firefox focus stuff */\n  /* stylelint-disable plugin/selector-bem-pattern */\n  /* stylelint-enable */\n  /* fix ugly blue screen at focused option value in IE */\n  /* fix native select arrows on IE */ }\n  .m-dropdown__select:active, .m-dropdown__select:focus {\n    border: none;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    outline: none !important; }\n  .m-dropdown__select:focus {\n    color: #333; }\n    .m-dropdown__select:focus + .m-dropdown__icon {\n      color: #00008f; }\n  .m-dropdown__select::-moz-focus-inner,\n  .m-dropdown__select option::-moz-focus-inner {\n    border: none;\n    box-shadow: none !important;\n    outline: none !important; }\n  .m-dropdown__select:focus::-ms-value {\n    color: inherit;\n    background: transparent; }\n  .m-dropdown__select::-ms-expand {\n    display: none; }\n  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    .m-dropdown__select {\n      /* IE10+ CSS styles go here */\n      /* fix IE not adhering to `text-indent` rules at <select> tags */\n      padding-left: 20px; } }\n\n@-moz-document url-prefix() {\n  .m-dropdown__select {\n    /* ugly fix of firefox related issues */\n    /* Fix Firefox doubles text-indent value */\n    text-indent: 10px;\n    /* fix firefox dotted border on focused selects */ }\n    .m-dropdown__select:focus {\n      color: transparent;\n      text-shadow: 0 0 0 #00008f; } }\n\n.m-dropdown__select-icon {\n  display: block;\n  float: right;\n  height: 50px;\n  padding: 0 20px;\n  margin-left: -100%;\n  pointer-events: none;\n  background: #fff;\n  /* fix missing height of wrapping root node of <axa-icon> */ }\n  .m-dropdown__select-icon > * {\n    display: block;\n    height: 100%; }\n  .m-dropdown__select-icon .m-dropdown__icon {\n    position: relative;\n    right: auto; }\n\n.m-dropdown__toggle {\n  background: transparent;\n  border: none;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em;\n  position: relative;\n  padding: 10.5px 55px 10.5px 20px;\n  background: #fff;\n  border: 1px solid #ccc;\n  color: #333; }\n  .m-dropdown__toggle:hover, .m-dropdown__toggle:active, .m-dropdown__toggle:focus {\n    outline: none;\n    cursor: pointer; }\n  @media (min-width: 576px) {\n    .m-dropdown__toggle {\n      font-size: 18px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.01em; } }\n  @media (min-width: 768px) {\n    .m-dropdown__toggle {\n      font-size: 18px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.01em; } }\n  @media (min-width: 992px) {\n    .m-dropdown__toggle {\n      font-size: 18px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.01em; } }\n  .m-dropdown__toggle:hover, .m-dropdown__toggle:active, .m-dropdown__toggle:focus {\n    cursor: pointer; }\n  .m-dropdown__toggle:hover, .m-dropdown__toggle:active, .m-dropdown__toggle:focus {\n    outline: none;\n    border-color: #00008f; }\n    .m-dropdown__toggle:hover .m-dropdown__icon, .m-dropdown__toggle:active .m-dropdown__icon, .m-dropdown__toggle:focus .m-dropdown__icon {\n      color: #00008f; }\n  .m-dropdown__toggle:hover::after, .m-dropdown__toggle:active::after, .m-dropdown__toggle:focus::after {\n    display: block; }\n  .m-dropdown__toggle::after {\n    position: absolute;\n    bottom: -1px;\n    left: 0;\n    z-index: 1001;\n    display: none;\n    width: 100%;\n    height: 1px;\n    overflow: hidden;\n    content: '';\n    background: #00008f; }\n\n.m-dropdown__icon {\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  display: block;\n  width: 15px;\n  height: 15px;\n  margin-top: -7.5px;\n  color: #999;\n  -webkit-transition: -webkit-transform 0.3s ease;\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease; }\n  .is-dropdown-open .m-dropdown__icon {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n\n.m-dropdown__content {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  position: absolute;\n  top: 100%;\n  z-index: 1000;\n  height: 0;\n  min-width: 100%;\n  overflow: hidden;\n  -webkit-transition: height 0.3s ease;\n  transition: height 0.3s ease;\n  margin-top: -1px;\n  background: #fff; }\n  .is-dropdown-open > .m-dropdown__content {\n    height: auto; }\n  .m-dropdown--in-flow > .m-dropdown__content {\n    position: static; }\n\n.m-dropdown__item {\n  border-left: 1px solid #ccc;\n  border-right: 1px solid #ccc; }\n  .m-dropdown__item:first-child {\n    border-top: 1px solid #ccc; }\n  .m-dropdown__item:last-child {\n    border-bottom: 3px solid #ccc; }\n\n.m-dropdown__link {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em;\n  display: block;\n  padding: 10.5px 20px;\n  color: #333;\n  white-space: nowrap; }\n  @media (min-width: 576px) {\n    .m-dropdown__link {\n      font-size: 18px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.01em; } }\n  @media (min-width: 768px) {\n    .m-dropdown__link {\n      font-size: 18px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.01em; } }\n  @media (min-width: 992px) {\n    .m-dropdown__link {\n      font-size: 18px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.01em; } }\n  .m-dropdown__link:hover, .m-dropdown__link:active, .m-dropdown__link:focus {\n    color: #00008f;\n    text-decoration: none;\n    background: #f5f5f5; }\n",y=function(e){return function(n,t,o){for(var i in t)i in w&&(t[w[i]]=t[i],delete t[i]);return e(n,t,o)}},w={class:"className",for:"htmlFor","http-equiv":"httpEquiv"},b=1,x=2,k=3,C=4,E=5,O=6,T=7,A=8,N=9,S=10,j=11,L=12,P=13,D=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$"),F=/\n[\s]+$/,z=/^\n[\s]+/,I=/[\s]+$/,M=/^[\s]+/,R=/[\n\s]+/g,q=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],G=["code","pre"],U=function e(n,t){if(Array.isArray(t))for(var o,i,r=n.nodeName.toLowerCase(),a=!1,s=0,l=t.length;s<l;s++){var c=t[s];if(Array.isArray(c))e(n,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var d=n.childNodes[n.childNodes.length-1];if("string"==typeof c)a=!0,d&&"#text"===d.nodeName?d.nodeValue+=c:(c=document.createTextNode(c),n.appendChild(c),d=c),s===l-1&&(a=!1,-1===q.indexOf(r)&&-1===G.indexOf(r)?""===(o=d.nodeValue.replace(z,"").replace(I,"").replace(F,"").replace(R," "))?n.removeChild(d):d.nodeValue=o:-1===G.indexOf(r)&&(i=0===s?"":" ",o=d.nodeValue.replace(z,i).replace(M," ").replace(I,"").replace(F,"").replace(R," "),d.nodeValue=o));else if(c&&c.nodeType){a&&(a=!1,-1===q.indexOf(r)&&-1===G.indexOf(r)?""===(o=d.nodeValue.replace(z,"").replace(F,"").replace(R," "))?n.removeChild(d):d.nodeValue=o:-1===G.indexOf(r)&&(o=d.nodeValue.replace(M," ").replace(z,"").replace(F,"").replace(R," "),d.nodeValue=o));var u=c.nodeName;u&&(r=u.toLowerCase()),n.appendChild(c)}}}},V=e(function(e){function n(e,n,s){var l;-1!==a.indexOf(e)&&(n.namespace=t);var c=!1;if(n.namespace&&(c=n.namespace,delete n.namespace),c)l=document.createElementNS(c,e);else{if(e===r)return document.createComment(n.comment);l=document.createElement(e)}for(var d in n)if(n.hasOwnProperty(d)){var u=d.toLowerCase(),p=n[d];if("classname"===u&&(u="class",d="class"),"htmlFor"===d&&(d="for"),-1!==i.indexOf(u))if("true"===p)p=u;else if("false"===p)continue;"on"===u.slice(0,2)?l[d]=p:c?"xlink:href"===d?l.setAttributeNS(o,d,p):/^xmlns($|:)/i.test(d)||l.setAttributeNS(null,d,p):l.setAttribute(d,p)}return U(l,s),l}var t="http://www.w3.org/2000/svg",o="http://www.w3.org/1999/xlink",i=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],r="!--",a=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];e.exports=function(e,n){function t(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":s(e))?e:o("",e)}n||(n={});var o=n.concat||function(e,n){return String(e)+String(n)};return!1!==n.attrToProp&&(e=y(e)),function(i){function r(e){var t=[];a===T&&(a=C);for(var o=0;o<e.length;o++){var i=e.charAt(o);a===b&&"<"===i?(l.length&&t.push([b,l]),l="",a=x):">"!==i||function(e){return e===N||e===S}(a)||a===P?a===P&&/-$/.test(l)&&"-"===i?(n.comments&&t.push([A,l.substr(0,l.length-1)],[k]),l="",a=b):a===x&&/^!--$/.test(l)?(n.comments&&t.push([x,l],[E,"comment"],[j]),l=i,a=P):a===b||a===P?l+=i:a===x&&/\s/.test(i)?(t.push([x,l]),l="",a=C):a===x?l+=i:a===C&&/[^\s"'=/]/.test(i)?(a=E,l=i):a===C&&/\s/.test(i)?(l.length&&t.push([E,l]),t.push([L])):a===E&&/\s/.test(i)?(t.push([E,l]),l="",a=O):a===E&&"="===i?(t.push([E,l],[j]),l="",a=T):a===E?l+=i:a!==O&&a!==C||"="!==i?a!==O&&a!==C||/\s/.test(i)?a===T&&'"'===i?a=S:a===T&&"'"===i?a=N:a===S&&'"'===i?(t.push([A,l],[L]),l="",a=C):a===N&&"'"===i?(t.push([A,l],[L]),l="",a=C):a!==T||/\s/.test(i)?a===A&&/\s/.test(i)?(t.push([A,l],[L]),l="",a=C):a!==A&&a!==N&&a!==S||(l+=i):(a=A,o--):(t.push([L]),/[\w-]/.test(i)?(l+=i,a=E):a=C):(t.push([j]),a=T):(a===x?t.push([x,l]):a===E?t.push([E,l]):a===A&&l.length&&t.push([A,l]),t.push([k]),l="",a=b)}return a===b&&l.length?(t.push([b,l]),l=""):a===A&&l.length?(t.push([A,l]),l=""):a===S&&l.length?(t.push([A,l]),l=""):a===N&&l.length?(t.push([A,l]),l=""):a===E&&(t.push([E,l]),l=""),t}for(var a=b,l="",c=arguments.length,d=[],u=0;u<i.length;u++)if(u<c-1){var p=arguments[u+1],f=r(i[u]),h=a;h===S&&(h=A),h===N&&(h=A),h===T&&(h=A),h===C&&(h=E),f.push([0,h,p]),d.push.apply(d,f)}else d.push.apply(d,r(i[u]));for(var m=[null,{},[]],v=[[m,-1]],u=0;u<d.length;u++){var g=v[v.length-1][0],_=(f=d[u])[0];if(_===x&&/^\//.test(f[1]))I=v[v.length-1][1],v.length>1&&(v.pop(),v[v.length-1][0][2][I]=e(g[0],g[1],g[2].length?g[2]:void 0));else if(_===x){var y=[f[1],{},[]];g[2].push(y),v.push([y,g[2].length-1])}else if(_===E||0===_&&f[1]===E){for(var w,F="";u<d.length;u++)if(d[u][0]===E)F=o(F,d[u][1]);else{if(0!==d[u][0]||d[u][1]!==E)break;if("object"!==s(d[u][2])||F)F=o(F,d[u][2]);else for(w in d[u][2])d[u][2].hasOwnProperty(w)&&!g[1][w]&&(g[1][w]=d[u][2][w])}d[u][0]===j&&u++;for(var z=u;u<d.length;u++)if(d[u][0]===A||d[u][0]===E)g[1][F]?""===d[u][1]||(g[1][F]=o(g[1][F],d[u][1])):g[1][F]=t(d[u][1]);else{if(0!==d[u][0]||d[u][1]!==A&&d[u][1]!==E){!F.length||g[1][F]||u!==z||d[u][0]!==k&&d[u][0]!==L||(g[1][F]=F.toLowerCase()),d[u][0]===k&&u--;break}g[1][F]?""===d[u][2]||(g[1][F]=o(g[1][F],d[u][2])):g[1][F]=t(d[u][2])}}else if(_===E)g[1][f[1]]=!0;else if(0===_&&f[1]===E)g[1][f[2]]=!0;else if(_===k){if(function(e){return D.test(e)}(g[0])&&v.length){var I=v[v.length-1][1];v.pop(),v[v.length-1][0][2][I]=e(g[0],g[1],g[2].length?g[2]:void 0)}}else if(0===_&&f[1]===b)void 0===f[2]||null===f[2]?f[2]="":f[2]||(f[2]=o("",f[2])),Array.isArray(f[2][0])?g[2].push.apply(g[2],f[2]):g[2].push(f[2]);else if(_===b)g[2].push(f[1]);else if(_!==j&&_!==L)throw new Error("unhandled: "+_)}if(m[2].length>1&&/^\s*$/.test(m[2][0])&&m[2].shift(),m[2].length>2||2===m[2].length&&/\S/.test(m[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(m[2][0])&&"string"==typeof m[2][0][0]&&Array.isArray(m[2][0][2])&&(m[2][0]=e(m[2][0][0],m[2][0][1],m[2][0][2])),m[2][0]}}(n,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=n}),$=function(e){return"undefined"!=typeof window?function(){var n=document.createElement("div");return n.innerHTML=e,function(e){return Array.isArray(e)?e:[].slice.call(e)}(n.childNodes)}():function(){var n=new String(e);return n.__encoded=!0,n}()},K=m(['<div class="m-dropdown__select-wrap" tabindex="0">\n    <select class="m-dropdown__select">\n      ','\n    </select>\n    <div class="m-dropdown__select-icon">',"</div>\n  </div>"],['<div class="m-dropdown__select-wrap" tabindex="0">\n    <select class="m-dropdown__select">\n      ','\n    </select>\n    <div class="m-dropdown__select-icon">',"</div>\n  </div>"]),W=m(['\n        <option data-url="','">',"</option>\n      "],['\n        <option data-url="','">',"</option>\n      "]),B=m(['<button type="button" class="m-dropdown__toggle js-dropdown__toggle">\n    ',"","\n  </button>"],['<button type="button" class="m-dropdown__toggle js-dropdown__toggle">\n    ',"","\n  </button>"]),H=m(['<ul class="m-dropdown__content">\n    ',"\n  </ul>"],['<ul class="m-dropdown__content">\n    ',"\n  </ul>"]),J=m(['\n      <li class="m-dropdown__item">\n        <a class="m-dropdown__link" href="','">',"</a>\n      </li>\n    "],['\n      <li class="m-dropdown__item">\n        <a class="m-dropdown__link" href="','">',"</a>\n      </li>\n    "]),Y='<axa-icon id="angle-bracket-right" classes="m-dropdown__icon"></axa-icon>',Z=function(e){var n=e.native,t=function(e,n){var t={};for(var o in e)n.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}(e,["native"]);return n?function(e){var n=e.items;return V(K,n&&n.map(function(e){var n=e.name,t=e.url;return V(W,t,n)}),$(Y))}(t):function(e){var n=e.title,t=e.items;return[V(B,n,$(Y)),V(H,t&&t.map(function(e){var n=e.name,t=e.url;return V(J,t,n)}))]}(t)},Q=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/,X=function(){function e(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.bubbles,o=void 0!==t&&t,i=n.cancelable,r=void 0!==i&&i,a=n.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,o,r,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}try{var n=new window.CustomEvent("test");if(n.preventDefault(),!0!==n.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return e}(),ee=/^\s+|\s{2,}|\s+$/g,ne=/\s+/,te={transitionend:function(){for(var e=document.createElement("div").style,n={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},t=Object.keys(n),o=t.length,i=void 0,r=0;r<o;++r)if(i=t[r],void 0!==e[i])return n[i];return null}()},oe={};r(document,"pubsub/onsubscribe",function(e){var t=e.detail;oe[t]||(oe[t]={count:0});var o=oe[t],i=o.queue;Array.isArray(i)&&(i.forEach(function(e){var t=h(e,3),o=t[0],i=t[1];n(t[2],o,i)}),delete o.queue)}),Object.setPrototypeOf(a.prototype,HTMLElement.prototype),Object.setPrototypeOf(a,HTMLElement);var ie={},re=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments[1];l(this,t);var o=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return o._makeContextReady=o._makeContextReady.bind(o),o._initialise(e,n),o}return p(t,a),c(t,[{key:"_initialise",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=n}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var n=document.createElement("style"),t=document.createTextNode(this._styles);n.appendChild(t),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",n):e.appendChild(n)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var n=this._template;if(n)try{for(var t=document.createDocumentFragment();this.firstChild;)t.appendChild(this.firstChild);var o=n(function(e){if(!e.hasAttributes)return null;for(var n={},t=e.attributes,o=t.length,i=0;i<o;++i){var r=t[i];n[r.name]=function(e,n){if("function"==typeof e.hasAttribute&&!e.hasAttribute(n))return!1;var t=e.value;if(n?t=e.getAttribute(n):n=e.name,t&&n!==t){if(Q.test(t))try{t=JSON.parse(t)}catch(n){console.error("Attribute "+e+" has an error:\n"+n+"\n",t)}}else t=!0;return t}(r)}return n}(this),t);if(Array.isArray(o))o.forEach(function(n){e.appendChild(n)});else if(o){if("string"==typeof o){var i=new Error("throwed");throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),i}this.appendChild(o)}this._hasRendered=!0}catch(i){"throwed"!==i.message&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+i+"\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;oe[e]||(oe[e]={count:0,queue:[]});var i=oe[e].queue;Array.isArray(i)?i.push([e,t,o]):n(o,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=function(e,t){var o=r(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);oe[e]||(oe[e]={count:0});var i=oe[e];return i.count++,i.onsubscribe||(i.onsubscribe=function(e){function n(){for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];return p=o,_&&(f&&clearTimeout(f),f=setTimeout(function(){h&&clearTimeout(h),t()},i)),y&&!h&&(h=setTimeout(function(){f&&clearTimeout(f),t()},u)),s&&!g&&(g=!0,m=e.apply(void 0,v(p))),m}function t(){c&&(m=e.apply(void 0,v(p))),f=null,h=null,g=!1}function o(){f&&(clearTimeout(f),f=null),h&&(clearTimeout(h),h=null),p=void 0,g=!1}var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=r.leading,s=void 0!==a&&a,l=r.trailing,c=void 0===l||l,d=r.maxWait,u=void 0!==d&&d,p=void 0,f=void 0,h=void 0,m=void 0,g=!1,_=i!==u,y=!1!==u;return n.flush=function(){return(f||h)&&(m=e.apply(void 0,v(p))),o(),m},n.cancel=o,n}(function(e){return function(){n(document,"pubsub/onsubscribe",e),n(document,"pubsub/onsubscribe/"+e,e),oe[e]&&delete oe[e].unsubscribe}}(e),100)),i.onsubscribe(),function(){i.count--,o.call(this),i.count<=0&&delete oe[e]}}("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,n=this.parentNode;n&&(!n.__isContext||e&&e!==n.__contextName);)n=n.parentNode;return!(!n||!n.__isContext)&&n}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var n=16*Math.random()|0;return("x"==e?n:3&n|8).toString(16)})}}]),t}(),ae=(function(e){function n(){return l(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}p(n,re),c(n,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",n=this.attachShadow({mode:e});this._appendStyles(n),this.render()}}])}(),function(e){function n(){return l(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,re),c(n,[{key:"_appendStyles",value:function(){n.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:re.uuidv4();if(e&&!ie[e]){var t=document.createElement("style"),o=document.createTextNode(e);t.appendChild(o),t.setAttribute("data-c-name",n.toLowerCase()),document.querySelector("head").appendChild(t),ie[e]=!0}}}]),n}()),se=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];for(var o=n.length,i={},r=0;r<o;++r){var a=n[r];i[a.toUpperCase()]=a}return i}("click","keyup","enter","move","leave","Escape","Esc"),le=function(){function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};l(this,e),this._rootNode=n,this._options=d({},e.DEFAULTS,t),this._handleClick=this._handleClick.bind(this),this._handleClose=this._handleClose.bind(this),this._handleKeyUp=this._handleKeyUp.bind(this),this._init()}return c(e,[{key:"_init",value:function(){var e=this._options.containerClass;this._container=e?this._rootNode.querySelector(e):this._rootNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=r(this._container,se.CLICK,this._options.toggleClass,this._handleClick)}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=r(this._container,se.CLICK,this._options.closeClass,this._handleClose)),this._options.outerClose&&(this._unOuterClick=function(e,n,t){function o(){s.removeEventListener(n,r,a),i(this,o)}function r(n){var o=n.target;if(!e.contains(o)&&e!==o)return t(n)}var a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],s=e.ownerDocument.documentElement;return s.addEventListener(n,r,a),o}(this._container,se.CLICK,this._handleClose)),this._options.escapeClose&&(this._unCloseEscape=r(this._container.ownerDocument,se.KEYUP,this._handleKeyUp))}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),delete this._lastToggleNode}},{key:"_handleClick",value:function(e,n){this._options.useDefaultEvent||e.preventDefault();var t=!this._lastToggleNode,o=n!==this._lastToggleNode,i=!t&&!o;t?(this._notify(se.ENTER,n),this._onInteractive()):o&&this._notify(se.MOVE,n,this._lastToggleNode),this._lastToggleNode=n,i&&this._options.sameClickClose&&this._close()}},{key:"_handleClose",value:function(e){this._options.useDefaultEvent||e.preventDefault(),this._close()}},{key:"_handleKeyUp",value:function(e){(e.key===se.ESCAPE||e.key===se.ESC||27===e.keyCode)&&(e.preventDefault(),this._close())}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(se.LEAVE,this._lastToggleNode),this._offInteractive(),delete this._lastToggleNode)}},{key:"_notify",value:function(e,n,t){e in this&&"function"==typeof this[e]&&this[e](n,t)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,n){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._rootNode,delete this._options}}]),e}();le.DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,useDefaultEvent:!1};var ce=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),n=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+n+")","i"))[1],lowercase:n,css:"-"+n+"-",js:n[0].toUpperCase()+n.slice(1)}}().lowercase,de=function(){var e=window.requestAnimationFrame||window[ce+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var n=0;e=function(e){var t=Date.now(),o=Math.max(0,16-(t-n)),i=setTimeout(function(){e(t+o)},o);return n=t+o,i}}return e}(),ue=(function(){var e=window.cancelAnimationFrame||window[ce+"CancelAnimationFrame"]||window[ce+"CancelRequestAnimationFrame"];e=e?e.bind(window):function(e){clearTimeout(e)}}(),function(e){function n(e,t){l(this,n),t=d({},n.DEFAULTS,t);var o=f(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e,t));return o.options=t,o.rootNode=e,o.handleTransitionEnd=o.handleTransitionEnd.bind(o),o}return p(n,le),c(n,[{key:"onInteractive",value:function(){this.offInteractive(),this.unTransitionEnd=r(this.rootNode,"transitionend",this.handleTransitionEnd)}},{key:"offInteractive",value:function(){this.unTransitionEnd&&this.unTransitionEnd()}},{key:"enter",value:function(e){var n=e.parentNode,t=n.lastElementChild;t.style.overflow="scroll";var i=t.scrollHeight;t.style.overflow="",this.onInteractive(),t.style.height=i+"px",function(e,n){o(e,n)||(e.className+=" "+n)}(n,this.options.isOpenClass)}},{key:"leave",value:function(e){var n=this,i=e.parentNode,r=i.lastElementChild,a=r.scrollHeight;this.offInteractive(),de(function(){r.style.height=a+"px",de(function(){!function(e,n){if(o(e,n)){var i=t(n,"g");e.className=e.className.replace(i," ").replace(ee," ")}}(i,n.options.isOpenClass),r.style.height=0})})}},{key:"handleTransitionEnd",value:function(e){"height"===e.propertyName&&(e.target.style.height="",this.offInteractive())}},{key:"destroy",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"destroy",this).call(this),delete this.rootNode,delete this.options}}]),n}());ue.DEFAULTS={containerClass:".js-dropdown",toggleClass:"js-dropdown__toggle",isOpenClass:"is-dropdown-open"};var pe=function(e){function n(){return l(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,_,Z))}return p(n,ae),c(n,[{key:"connectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.dropDown=new ue(this,{containerClass:null})}},{key:"disconnectedCallback",value:function(){this.dropDown.destroy(),delete this.dropDown}},{key:"render",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"render",this).call(this);var e=this.hasAttribute("in-flow");this.className=g(this.initialClassName,"m-dropdown js-dropdown",{"m-dropdown--in-flow":e})}}]),n}();return function(e){var n=0,t=function(){if(0===n)try{e.apply(void 0,arguments),n+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}};document.addEventListener("DOMContentLoaded",t,!1),document.addEventListener("WebComponentsReady",t,!1)}(function(){window.customElements.define("axa-dropdown",pe),ae.appendGlobalStyles(_)}),pe}();
