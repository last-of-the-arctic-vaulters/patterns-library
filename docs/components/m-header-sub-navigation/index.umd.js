!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e,t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function e(t,n,i){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,i)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(i):void 0},a=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},s=function(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n},l=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},u=function e(t,n,i,o){var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,i,o)}else if("value"in r&&r.writable)r.value=i;else{var s=r.set;void 0!==s&&s.call(o,i)}return i},d=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,o=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){o=!0,r=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},h=(function(e){!function(){var n={}.hasOwnProperty;function i(){for(var e=[],o=0;o<arguments.length;o++){var r=arguments[o];if(r){var a=void 0===r?"undefined":t(r);if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r))e.push(i.apply(null,r));else if("object"===a)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?e.exports=i:window.classNames=i}()}(e={exports:{}},e.exports),e.exports),p="@-webkit-keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n.m-header-sub-navigation {\n  display: none;\n  background: #fff;\n  border-bottom: 2px solid #ccc;\n  -webkit-box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.3);\n          box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.3);\n  text-align: left; }\n  .is-header-sub-navigation-open .m-header-sub-navigation {\n    display: block; }\n\n.m-header-sub-navigation--flyout {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1050;\n  width: 100%;\n  margin-top: 2px; }\n\n.m-header-sub-navigation__index {\n  background: #fafafa; }\n\n.m-header-sub-navigation__index-box {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  height: 60px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__index-box {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .m-header-sub-navigation__index-box {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .m-header-sub-navigation__index-box {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .m-header-sub-navigation__index-box {\n      max-width: 1140px; } }\n\n.m-header-sub-navigation__index-link {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__index-link {\n      font-size: 18px; } }\n  .m-header-sub-navigation__index-link:hover, .m-header-sub-navigation__index-link:active, .m-header-sub-navigation__index-link:focus {\n    text-decoration: none;\n    font-weight: 600; }\n\n.m-header-sub-navigation__index-close {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  position: relative;\n  padding-right: 44px;\n  margin-left: auto;\n  text-transform: uppercase;\n  border: none;\n  background: transparent;\n  color: #00008f; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__index-close {\n      font-size: 13px;\n      line-height: 1.38; } }\n  .m-header-sub-navigation__index-close:hover, .m-header-sub-navigation__index-close:active, .m-header-sub-navigation__index-close:focus {\n    color: #00005b;\n    cursor: pointer;\n    outline: none; }\n\n.m-header-sub-navigation__index-close__icon {\n  width: 23px;\n  height: 23px;\n  display: block;\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  right: 0;\n  margin-top: -11.5px; }\n\n.m-header-sub-navigation__box {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto;\n  padding-top: 30px;\n  padding-bottom: 40px; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__box {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .m-header-sub-navigation__box {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .m-header-sub-navigation__box {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .m-header-sub-navigation__box {\n      max-width: 1140px; } }\n\n.m-header-sub-navigation__row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-right: -30px;\n  margin-left: -30px;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n  .m-header-sub-navigation__row + .m-header-sub-navigation__row > .m-header-sub-navigation__block {\n    padding-top: 30px; }\n\n.m-header-sub-navigation__block {\n  max-width: 25%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  padding: 0 30px;\n  border-right: 1px solid #ccc; }\n  .m-header-sub-navigation__block:last-child {\n    border: none; }\n  .m-header-sub-navigation__row--col-2 .m-header-sub-navigation__block {\n    max-width: 50%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    padding-right: 45px;\n    padding-left: 45px; }\n    .m-header-sub-navigation__row--col-2 .m-header-sub-navigation__block:nth-child(n + 3) {\n      padding-top: 30px;\n      border-right: 1px solid #ccc; }\n    .m-header-sub-navigation__row--col-2 .m-header-sub-navigation__block:nth-child(2n) {\n      border: none; }\n  .m-header-sub-navigation__row--col-3 .m-header-sub-navigation__block {\n    max-width: 33.33333%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    padding-right: 65px;\n    padding-left: 65px; }\n    .m-header-sub-navigation__row--col-3 .m-header-sub-navigation__block:nth-child(n + 4) {\n      padding-top: 30px;\n      border-right: 1px solid #ccc; }\n    .m-header-sub-navigation__row--col-3 .m-header-sub-navigation__block:nth-child(3n) {\n      border: none; }\n  .m-header-sub-navigation__row--col-4 .m-header-sub-navigation__block:nth-child(n + 5) {\n    padding-top: 30px;\n    border-right: 1px solid #ccc; }\n  .m-header-sub-navigation__row--col-4 .m-header-sub-navigation__block:nth-child(4n) {\n    border: none; }\n  .m-header-sub-navigation__row:not(.m-header-sub-navigation__row--col-2):not(.m-header-sub-navigation__row--col-3):not(.m-header-sub-navigation__row--col-4) .m-header-sub-navigation__block:nth-last-child(1):first-child,\n  .m-header-sub-navigation__row:not(.m-header-sub-navigation__row--col-2):not(.m-header-sub-navigation__row--col-3):not(.m-header-sub-navigation__row--col-4) .m-header-sub-navigation__block:nth-last-child(1):first-child ~ * {\n    max-width: 33.33333%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%; }\n  .m-header-sub-navigation__row:not(.m-header-sub-navigation__row--col-2):not(.m-header-sub-navigation__row--col-3):not(.m-header-sub-navigation__row--col-4) .m-header-sub-navigation__block:nth-last-child(2):first-child,\n  .m-header-sub-navigation__row:not(.m-header-sub-navigation__row--col-2):not(.m-header-sub-navigation__row--col-3):not(.m-header-sub-navigation__row--col-4) .m-header-sub-navigation__block:nth-last-child(2):first-child ~ * {\n    max-width: 25%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    padding-right: 45px;\n    padding-left: 45px; }\n  .m-header-sub-navigation__row:not(.m-header-sub-navigation__row--col-2):not(.m-header-sub-navigation__row--col-3):not(.m-header-sub-navigation__row--col-4) .m-header-sub-navigation__block:nth-last-child(3n):first-child,\n  .m-header-sub-navigation__row:not(.m-header-sub-navigation__row--col-2):not(.m-header-sub-navigation__row--col-3):not(.m-header-sub-navigation__row--col-4) .m-header-sub-navigation__block:nth-last-child(3n):first-child ~ * {\n    max-width: 33.33333%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    padding-right: 65px;\n    padding-left: 65px; }\n\n.m-header-sub-navigation__row--col-2 {\n  margin-right: -45px;\n  margin-left: -45px; }\n\n.m-header-sub-navigation__row--col-3 {\n  margin-right: -65px;\n  margin-left: -65px; }\n\n.m-header-sub-navigation__block--wide:nth-last-child(2):first-child,\n.m-header-sub-navigation__block--wide:nth-last-child(2):first-child ~ * {\n  max-width: 50%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%; }\n  .m-header-sub-navigation__block--wide:nth-last-child(2):first-child .m-header-sub-navigation__list,\n  .m-header-sub-navigation__block--wide:nth-last-child(2):first-child ~ * .m-header-sub-navigation__list {\n    -webkit-column-count: 2;\n            column-count: 2; }\n\n.m-header-sub-navigation__category {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0;\n  color: #00008f;\n  text-transform: uppercase; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__category {\n      font-size: 24px;\n      line-height: 1.2; } }\n\n.m-header-sub-navigation__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  margin-top: 15px; }\n\n.m-header-sub-navigation__list-item {\n  display: block; }\n\n.m-header-sub-navigation__link {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em;\n  display: inline-block;\n  width: 100%;\n  padding: 4px 0;\n  line-height: 1.3 !important; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__link {\n      font-size: 18px; } }\n  .m-header-sub-navigation__link.is-header-sub-navigation-active, .m-header-sub-navigation__link:hover, .m-header-sub-navigation__link:active, .m-header-sub-navigation__link:focus {\n    color: #00005b;\n    text-decoration: none;\n    font-weight: 600;\n    letter-spacing: -0.005em; }\n",f=/\n[\s]+$/,v=/^\n[\s]+/,_=/[\s]+$/,b=/^[\s]+/,m=/[\n\s]+/g,g=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],y=["code","pre","textarea"],x=function e(t,n){if(Array.isArray(n))for(var i,o,r=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var u=n[s];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var d=t.childNodes[t.childNodes.length-1];if("string"==typeof u)a=!0,d&&"#text"===d.nodeName?d.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),d=u),s===l-1&&(a=!1,-1===g.indexOf(r)&&-1===y.indexOf(r)?""===(i=d.nodeValue.replace(v,"").replace(_,"").replace(f,"").replace(m," "))?t.removeChild(d):d.nodeValue=i:-1===y.indexOf(r)&&(o=0===s?"":" ",i=d.nodeValue.replace(v,o).replace(b," ").replace(_,"").replace(f,"").replace(m," "),d.nodeValue=i));else if(u&&u.nodeType){a&&(a=!1,-1===g.indexOf(r)&&-1===y.indexOf(r)?""===(i=d.nodeValue.replace(v,"").replace(f,"").replace(m," "))?t.removeChild(d):d.nodeValue=i:-1===y.indexOf(r)&&(i=d.nodeValue.replace(b," ").replace(v,"").replace(f,"").replace(m," "),d.nodeValue=i));var c=u.nodeName;c&&(r=c.toLowerCase()),t.appendChild(u)}}}};var w=function(e){var t,n=document.createElement("div");return n.innerHTML=e,t=n.childNodes,Array.isArray(t)?t:[].slice.call(t)},k=function(e){var t,n,i=e.url,o=void 0===i?"":i,r=e.name,a=e.isActive,s=e.preventDefault,l=void 0===s?"false":s;return(n=document.createElement("li")).setAttribute("class","m-header-sub-navigation__list-item"),x(n,["\n    ",(t=document.createElement("a"),t.setAttribute("data-prevent-default",""+String(l)),t.setAttribute("href",""+String(o)),t.setAttribute("class",""+String(h("m-header-sub-navigation__link","js-header-navigation-close",{"is-header-sub-navigation-active":a}))),x(t,[w(r)]),t),"\n  "]),n},C=function(e){var t,n,i=e.columns,o=e.col,r=e.isWide;return(t=document.createElement("div")).setAttribute("class","m-header-sub-navigation__row m-header-sub-navigation__row--col-"+String(o||(2===(n=i.length)?n:n%3==0&&n%4!=0?3:4))),x(t,["\n\n  ",Array.isArray(i)&&i.map(function(e){var t,n,i,o,a=e.links,s=e.title,l=e.url,u=void 0===l?"":l;return(i=document.createElement("div")).setAttribute("class",""+String(h("m-header-sub-navigation__block",{"m-header-sub-navigation__block--wide":r}))),x(i,["\n      ",(t=document.createElement("strong"),t.setAttribute("class","m-header-sub-navigation__category"),x(t,["\n        ",u?(o=document.createElement("a"),o.setAttribute("href",""+String(u)),o.setAttribute("class","m-header-sub-navigation__category__link"),x(o,[s]),o):s,"\n      "]),t),"\n\n      ",(n=document.createElement("ul"),n.setAttribute("class","m-header-sub-navigation__list"),x(n,["\n        ",a&&a.map(k),"\n      "]),n),"\n    "]),i}),"\n  "]),t},O=function(e){var t=e.items,n=e.indexUrl,i=e.indexTitle,o=[];if(Array.isArray(t)){var r,a,s,l,u,d;if(i&&n)o.push(((d=document.createElement("div")).setAttribute("class","m-header-sub-navigation__index"),x(d,["\n          ",(u=document.createElement("div"),u.setAttribute("class","m-header-sub-navigation__index-box"),x(u,["\n            ",(a=document.createElement("a"),a.setAttribute("href",""+String(n)),a.setAttribute("class","m-header-sub-navigation__index-link js-header-navigation-close"),x(a,[i]),a),"\n            ",(l=document.createElement("button"),l.setAttribute("type","button"),l.setAttribute("class","m-header-sub-navigation__index-close js-header-navigation-close"),x(l,["\n              Close\n              ",(s=document.createElement("axa-icon"),s.setAttribute("icon","cross-gap"),s.setAttribute("classes","m-header-sub-navigation__index-close__icon"),s),"\n            "]),l),"\n          "]),u),"\n        "]),d));o.push(((r=document.createElement("div")).setAttribute("class","m-header-sub-navigation__box"),x(r,["\n        ",t&&t.map(C),"\n      "]),r))}return o},A={},E=function(e){return e in A||(A[e]=0),++A[e]},N=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,i=void 0!==n&&n,o=t.cancelable,r=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,i,r,s);var u=l.preventDefault;return l.preventDefault=function(){u.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function T(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new N(t,o({},i,{detail:n}));return e.dispatchEvent(r)}var P=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function j(e){for(var t=e.className,n=!1,i=!0,o=arguments.length,r=Array(o>1?o-1:0),a=1;a<o;a++)r[a-1]=arguments[a];var s=r.map(function(e){var o=(r=e,new RegExp("^"+r+"$|^"+r+"\\s|\\s"+r+"\\s|\\s"+r+"$",a)).test(t);var r,a;o?n=!0:i=!1;return{className:e,hasClass:o}});return!(!i&&!n)&&s}var S=/\s+/,R={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),i=n.length,o=void 0,r=0;r<i;++r)if(void 0!==e[o=n[r]])return t[o];return""}()};function D(e,n,i,o){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=r.capture,s=void 0!==a&&a,l=r.passive,u=void 0===l||l;if(R[n]&&(n=R[n]),!e||!n)return null;var d=void 0===i?"undefined":t(i),c=i&&"string"===d;if("function"===d){if(o){var h=o;s=h.capture,u=h.passive}o=i}for(var p=P?{capture:s,passive:u}:s,f=c?function(t){var n=t.target;for(;!j(n,i)&&n!==e;)n=n.parentNode;if(n!==e)return o(t,n)}:o,v=n.split(S),_=v.length,b=0;b<_;++b)e.addEventListener(v[b],f,p);return function t(){for(var n=0;n<_;++n)e.removeEventListener(v[n],f,p);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),i=n.length,o=0;o<i;++o){var r=n[o];if(e[r]===t)return delete e[r]}}(this,t)}}function L(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.leading,o=void 0!==i&&i,r=n.trailing,a=void 0===r||r,s=n.maxWait,l=void 0!==s&&s,u=void 0,d=void 0,h=void 0,p=void 0,f=!1,v=t!==l,_=!1!==l;function b(){for(var n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];return u=i,v&&(d&&clearTimeout(d),d=setTimeout(m,t)),_&&!h&&(h=setTimeout(g,l)),o&&!f&&(f=!0,p=e.apply(void 0,c(u))),p}return b.flush=function(){(d||h)&&(p=e.apply(void 0,c(u)));return x(),p},b.cancel=x,b;function m(){h&&clearTimeout(h),y()}function g(){d&&clearTimeout(d),y()}function y(){a&&(p=e.apply(void 0,c(u))),d=null,h=null,f=!1}function x(){d&&(clearTimeout(d),d=null),h&&(clearTimeout(h),h=null),u=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var M=window.__subscriptions;function U(e,t){var n=D(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);M[e]||(M[e]={count:0});var i,o=M[e];return o.count++,o.onsubscribe||(o.onsubscribe=L((i=e,function(){T(document,"pubsub/onsubscribe",i),T(document,"pubsub/onsubscribe/"+i,i),M[i]&&delete M[i].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete M[e]}}D(document,"pubsub/onsubscribe",function(e){var t=e.detail;M[t]||(M[t]={count:0});var n=M[t],i=n.queue;Array.isArray(i)&&(i.forEach(function(e){var t=d(e,3),n=t[0],i=t[1],o=t[2];T(o,n,i)}),delete n.queue)});var I,V=function(e,t){return e===t},z=((I=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V;return function(){for(var t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];return function(){for(var t=arguments.length,i=Array(t),o=0;o<t;o++)i[o]=arguments[o];return function(){return e.apply(void 0,[].concat(n,i))?I.apply(void 0,arguments):void 0}}}})()(!0),function(e){function t(e,i){var o;n(this,t);for(var r="\n    Native Property >>>"+e+"<<< exists already at "+i.nodeName+"#"+i._id+" and evaluates to -> "+i[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",a=arguments.length,s=Array(a>2?a-2:0),u=2;u<a;u++)s[u-2]=arguments[u];var d=l(this,(o=t.__proto__||Object.getPrototypeOf(t)).call.apply(o,[this,r].concat(s)));return Error.captureStackTrace&&Error.captureStackTrace(d,t),d.name="PropertyExistsException",d}return a(t,e),t}(Error)),F=/[A-Z]/g;function K(e,t,n){var i=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?i:"-"+i}var H=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function W(e,t){var n=e;if(e&&t!==e){if(H.test(e))try{n=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else n=!0;return n}var q=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,B=/[-_]+/g;function $(e){return e.replace(q,G)}function G(e,t){return 0==+e||B.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function Z(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=W(n,t)}var J=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function X(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=i.capture,r=void 0===o||o,a=i.passive,s=void 0===a||a,l=e.ownerDocument.documentElement,u=D(l,t,function(t){var i=t.target;if(!e.contains(i)&&e!==i)return n(t)},{capture:r,passive:s});return J&&(l.style.cursor="pointer"),u}var Y=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var i=t.length,o={},r=0;r<i;++r){var a=t[r];o[a.toUpperCase()]=a}return o}("click","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend"),Q="axa-change",ee="data-prevent-default";((function(){function e(t){var i=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n(this,e),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!i._lastToggleNode,o=t!==i._lastToggleNode,r=!n&&!o;n?(i._notify(Y.ENTER,t),i._onInteractive()):o&&i._notify(Y.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,r&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){(e.key===Y.ESCAPE||e.key===Y.ESC||27===e.keyCode)&&(e.preventDefault(),i._close())},this._init(t,o)}return i(e,[{key:"_init",value:function(t,n){t&&(this._wcNode=t),n&&(this._options=o({},e.DEFAULTS,n));var i=this._options.containerClass;this._container=i?this._wcNode.querySelector(i):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=D(this._container,Y.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=D(this._container,Y.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=X(this._container,Y.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=D(this._container.ownerDocument,Y.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(ee)?Z(e,ee):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(Y.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),e})()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var te=["title","checked","disabled"],ne=[];var ie=1,oe=3,re=8;function ae(e,t){var n=e.nodeType,i=e.nodeName;n===ie&&function(e,t){for(var n=t.attributes,i=e.attributes,o=null,r=null,a=null,s=null,l=i.length-1;l>=0;--l)if(s=i[l],a=s.name,o=s.namespaceURI,r=s.value,o){var u=s.localName;t.getAttributeNS(o,u||a)!==r&&t.setAttributeNS(o,a,r)}else t.hasAttribute(a)?t.getAttribute(a)!==r&&("null"===r||"undefined"===r?t.removeAttribute(a):t.setAttribute(a,r)):t.setAttribute(a,r);for(var d=n.length-1;d>=0;--d)!1!==(s=n[d]).specified&&(a=s.name,(o=s.namespaceURI)?(a=s.localName||a,e.hasAttributeNS(o,a)||t.removeAttributeNS(o,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==oe&&n!==re||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===i?function(e,t){var n=e.value,i=t.value;se(e,t,"checked"),se(e,t,"disabled"),n!==i&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===i?se(e,t,"selected"):"TEXTAREA"===i&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function se(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var le=3;function ue(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(ae(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,i=void 0,o=void 0,r=void 0,a=0,s=0;n=t.childNodes[s],i=e.childNodes[s-a],n||i;s++)if(i)if(n)if(de(i,n))(o=ue(i,n))!==n&&(t.replaceChild(o,n),a++);else{r=null;for(var l=s;l<t.childNodes.length;l++)if(de(t.childNodes[l],i)){r=t.childNodes[l];break}r?((o=ue(i,r))!==r&&a++,t.insertBefore(o,n)):i.id||n.id?(t.insertBefore(i,n),a++):(o=ue(i,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(i),a++;else t.removeChild(n),s--}(e,t),t):null:e}function de(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===le&&e.nodeValue===t.nodeValue)}var ce=function(e){function t(e){var i;n(this,t);for(var o="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,a=Array(r>1?r-1:0),s=1;s<r;s++)a[s-1]=arguments[s];var u=l(this,(i=t.__proto__||Object.getPrototypeOf(t)).call.apply(i,[this,o].concat(a)));return Error.captureStackTrace&&Error.captureStackTrace(u,t),u.name="TemplateNoStringReturnException",u}return a(t,e),t}(Error),he=!!document.createDocumentFragment().children;function pe(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(pe.prototype,HTMLElement.prototype),Object.setPrototypeOf(pe,HTMLElement);var fe=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(e){return function(t){function o(){var e,t,i;n(this,o);for(var r=arguments.length,a=Array(r),s=0;s<r;s++)a[s]=arguments[s];return t=i=l(this,(e=o.__proto__||Object.getPrototypeOf(o)).call.apply(e,[this].concat(a))),i._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;i.contextNode&&(clearTimeout(i.timeoutId),i.timeoutId=setTimeout(function(){i.contextCallback(i.contextNode,e)},10)),i.unContextEnabled&&i.unContextEnabled(),i.unContextEnabled=U("context/available",i._makeContextReady)},l(i,t)}return a(o,e),i(o,[{key:"connectedCallback",value:function(){r(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this)&&r(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){r(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"disconnectedCallback",this)&&r(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;M[e]||(M[e]={count:0,queue:[]});var i=M[e].queue;Array.isArray(i)?i.push([e,t,n]):T(n,e,t)}("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),o}()},function(e){return function(t){function o(){return n(this,o),l(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return a(o,e),i(o,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):r(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else u(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else u(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else u(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"innerHTML",e,this)}}]),o}()},function(e){return function(t){function o(e){n(this,o);var t=l(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e));t._reduceProps=function(e,n){var i=e.props,r=e.shouldUpdate,a=t._hasKeys[n];if(-1===te.indexOf(n)&&a)throw new z(n,t);var s="_"+n,l=i[n],d=t[s];return r||t.shouldUpdateCallback(l,d)?(t[s]=l,t._props[n]=l,a&&u(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),n,l,t),{props:i,shouldUpdate:!0}):{props:i,shouldUpdate:!1}},t._isConnected=!1,t._props={},t._hasKeys={},t.updatedDebounced=L(function(){return t.updated&&t.updated()},50);var i=t.constructor.observedAttributes;return Array.isArray(i)&&i.forEach(function(e){var n,i=$(e),o=i in t;if(-1===te.indexOf(i)&&o)throw new z(i,t);t._hasKeys[i]=o,Object.defineProperty(t,i,n={get:function(){return this._props[i]},set:function(e){this.shouldUpdateCallback(this._props[i],e)&&(this._props[i]=e,o&&u(n.__proto__||Object.getPrototypeOf(n),i,e,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),t}return a(o,e),i(o,[{key:"connectedCallback",value:function(){var e=this;if(r(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this)&&r(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&t.forEach(function(t){var n=$(t);if(e.hasAttribute(t)){var i=Z(e,t),r=e._hasKeys[n];e._props[n]=i,r&&u(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),n,i,e)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var i=$(e);this.hasAttribute(e)?this[i]=W(n):this[i]=null,"value"===e&&null!==n&&T(this,Q,n,{bubbles:!0,cancelable:!0,composed:!0})}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return n.indexOf(e.replace(F,K))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),o}()},function(e){return function(o){function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,i=s(e,["template"]);n(this,u);var o=l(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,i));return o._template=t,o._hasTemplate=!!t,o._hasRendered=!1,o.updated=o.render,o}return a(u,e),i(u,[{key:"render",value:function(){var e=this,n=!this._hasRendered;if(this.willRenderCallback(n),this._hasTemplate){var i=this._template;try{if(n){for(var o=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});he||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var s=i(this._props,this.childrenFragment,this),l=document.createDocumentFragment();if(Array.isArray(s))s.forEach(function(e){l.appendChild(e)});else if(s){if("string"==typeof s)throw new ce(this);l.appendChild(s)}if(n)r(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"appendChild",this).call(this,l);else{var d=this.cloneNode(!1);d._isMorphing=!0,d.appendChild(l),this._isMorphing=!0,function(e,n){if("object"!==(void 0===e?"undefined":t(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===n?"undefined":t(n)))throw new Error("componentMorph: newTree should be an object");ue(n,e)}(this,d),function(){for(var e=void 0;e=ne.pop();)delete e.isSameNode;ne=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(n)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),u}()},function(e){return function(t){function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,i=void 0===t?"":t,r=s(e,["styles"]);n(this,o);var a=l(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,r));return a._styles=i,a}return a(o,e),i(o,[{key:"connectedCallback",value:function(){r(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this)&&r(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),o}()})(function(e){function t(e){n(this,t);var i=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i._id=E(i.nodeName),i}return a(t,pe),i(t,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}()),ve={},_e=function(e){function t(){var e,i,o;n(this,t);for(var r=arguments.length,a=Array(r),s=0;s<r;s++)a[s]=arguments[s];return i=o=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),o._appendStyles=function(){t.appendGlobalStyles(o._styles,o.nodeName)},l(o,i)}return a(t,fe),i(t,null,[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:fe.uuidv4();if(e&&!ve[t]){var n=document.createElement("style"),i=document.createTextNode(e);ve[t]=!0,n.appendChild(i),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),t}();var be,me,ge=function(e){function t(){return n(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:p,template:O}))}return a(t,_e),i(t,null,[{key:"observedAttributes",get:function(){return["flyout","index-title","index-url","items"]}}]),i(t,[{key:"willRenderCallback",value:function(){var e=this.flyout;this.className=h(this.initialClassName,"m-header-sub-navigation js-header-sub-navigation",{"m-header-sub-navigation--flyout":e})}}]),t}();return ge.tagName="axa-header-sub-navigation",be=ge.tagName,me=ge,customElements.get(be)||customElements.define(be,me),ge});
