!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e,t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function e(t,n,r){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,n,r)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(r):void 0},a=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},s=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},l=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},d=function e(t,n,r,i){var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,i)}else if("value"in o&&o.writable)o.value=r;else{var s=o.set;void 0!==s&&s.call(i,r)}return r},u=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},h=(function(e){!function(){var n={}.hasOwnProperty;function r(){for(var e=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var a=void 0===o?"undefined":t(o);if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o))e.push(r.apply(null,o));else if("object"===a)for(var s in o)n.call(o,s)&&o[s]&&e.push(s)}}return e.join(" ")}e.exports?e.exports=r:window.classNames=r}()}(e={exports:{}},e.exports),e.exports),p="@-webkit-keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n.m-header-sub-navigation {\n  display: none;\n  background: #fff;\n  border-bottom: 2px solid #ccc;\n  -webkit-box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.3);\n          box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.3);\n  text-align: left; }\n  .is-header-sub-navigation-open .m-header-sub-navigation {\n    display: block; }\n\n.m-header-sub-navigation--flyout {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1050;\n  width: 100%;\n  margin-top: 2px; }\n\n.m-header-sub-navigation__index {\n  background: #fafafa; }\n\n.m-header-sub-navigation__index-box {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  height: 60px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__index-box {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .m-header-sub-navigation__index-box {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .m-header-sub-navigation__index-box {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .m-header-sub-navigation__index-box {\n      max-width: 1140px; } }\n\n.m-header-sub-navigation__index-link {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__index-link {\n      font-size: 18px; } }\n  .m-header-sub-navigation__index-link:hover, .m-header-sub-navigation__index-link:active, .m-header-sub-navigation__index-link:focus {\n    text-decoration: none;\n    font-weight: 600; }\n\n.m-header-sub-navigation__index-close {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  position: relative;\n  padding-right: 44px;\n  margin-left: auto;\n  text-transform: uppercase;\n  border: none;\n  background: transparent;\n  color: #00008f; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__index-close {\n      font-size: 13px;\n      line-height: 1.38; } }\n  .m-header-sub-navigation__index-close:hover, .m-header-sub-navigation__index-close:active, .m-header-sub-navigation__index-close:focus {\n    color: #00005b;\n    cursor: pointer;\n    outline: none; }\n\n.m-header-sub-navigation__index-close__icon {\n  width: 23px;\n  height: 23px;\n  display: block;\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  right: 0;\n  margin-top: -11.5px; }\n\n.m-header-sub-navigation__box {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto;\n  padding-top: 30px;\n  padding-bottom: 40px; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__box {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .m-header-sub-navigation__box {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .m-header-sub-navigation__box {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .m-header-sub-navigation__box {\n      max-width: 1140px; } }\n\n.m-header-sub-navigation__row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-right: -30px;\n  margin-left: -30px;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n  .m-header-sub-navigation__row + .m-header-sub-navigation__row > .m-header-sub-navigation__block {\n    padding-top: 30px; }\n\n.m-header-sub-navigation__block {\n  max-width: 25%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  padding: 0 30px;\n  border-right: 1px solid #ccc; }\n  .m-header-sub-navigation__block:last-child {\n    border: none; }\n  .m-header-sub-navigation__row--col-2 .m-header-sub-navigation__block {\n    max-width: 50%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    padding-right: 45px;\n    padding-left: 45px; }\n    .m-header-sub-navigation__row--col-2 .m-header-sub-navigation__block:nth-child(n + 3) {\n      padding-top: 30px;\n      border-right: 1px solid #ccc; }\n    .m-header-sub-navigation__row--col-2 .m-header-sub-navigation__block:nth-child(2n) {\n      border: none; }\n  .m-header-sub-navigation__row--col-3 .m-header-sub-navigation__block {\n    max-width: 33.33333%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    padding-right: 65px;\n    padding-left: 65px; }\n    .m-header-sub-navigation__row--col-3 .m-header-sub-navigation__block:nth-child(n + 4) {\n      padding-top: 30px;\n      border-right: 1px solid #ccc; }\n    .m-header-sub-navigation__row--col-3 .m-header-sub-navigation__block:nth-child(3n) {\n      border: none; }\n  .m-header-sub-navigation__row--col-4 .m-header-sub-navigation__block:nth-child(n + 5) {\n    padding-top: 30px;\n    border-right: 1px solid #ccc; }\n  .m-header-sub-navigation__row--col-4 .m-header-sub-navigation__block:nth-child(4n) {\n    border: none; }\n  .m-header-sub-navigation__row:not(.m-header-sub-navigation__row--col-2):not(.m-header-sub-navigation__row--col-3):not(.m-header-sub-navigation__row--col-4) .m-header-sub-navigation__block:nth-last-child(1):first-child,\n  .m-header-sub-navigation__row:not(.m-header-sub-navigation__row--col-2):not(.m-header-sub-navigation__row--col-3):not(.m-header-sub-navigation__row--col-4) .m-header-sub-navigation__block:nth-last-child(1):first-child ~ * {\n    max-width: 33.33333%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%; }\n  .m-header-sub-navigation__row:not(.m-header-sub-navigation__row--col-2):not(.m-header-sub-navigation__row--col-3):not(.m-header-sub-navigation__row--col-4) .m-header-sub-navigation__block:nth-last-child(2):first-child,\n  .m-header-sub-navigation__row:not(.m-header-sub-navigation__row--col-2):not(.m-header-sub-navigation__row--col-3):not(.m-header-sub-navigation__row--col-4) .m-header-sub-navigation__block:nth-last-child(2):first-child ~ * {\n    max-width: 25%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    padding-right: 45px;\n    padding-left: 45px; }\n  .m-header-sub-navigation__row:not(.m-header-sub-navigation__row--col-2):not(.m-header-sub-navigation__row--col-3):not(.m-header-sub-navigation__row--col-4) .m-header-sub-navigation__block:nth-last-child(3n):first-child,\n  .m-header-sub-navigation__row:not(.m-header-sub-navigation__row--col-2):not(.m-header-sub-navigation__row--col-3):not(.m-header-sub-navigation__row--col-4) .m-header-sub-navigation__block:nth-last-child(3n):first-child ~ * {\n    max-width: 33.33333%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    padding-right: 65px;\n    padding-left: 65px; }\n\n.m-header-sub-navigation__row--col-2 {\n  margin-right: -45px;\n  margin-left: -45px; }\n\n.m-header-sub-navigation__row--col-3 {\n  margin-right: -65px;\n  margin-left: -65px; }\n\n.m-header-sub-navigation__block--wide:nth-last-child(2):first-child,\n.m-header-sub-navigation__block--wide:nth-last-child(2):first-child ~ * {\n  max-width: 50%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%; }\n  .m-header-sub-navigation__block--wide:nth-last-child(2):first-child .m-header-sub-navigation__list,\n  .m-header-sub-navigation__block--wide:nth-last-child(2):first-child ~ * .m-header-sub-navigation__list {\n    -webkit-column-count: 2;\n            column-count: 2; }\n\n.m-header-sub-navigation__category {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0;\n  color: #00008f;\n  text-transform: uppercase; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__category {\n      font-size: 24px;\n      line-height: 1.2; } }\n\n.m-header-sub-navigation__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  margin-top: 15px; }\n\n.m-header-sub-navigation__list-item {\n  display: block; }\n\n.m-header-sub-navigation__link {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em;\n  display: inline-block;\n  width: 100%;\n  padding: 4px 0;\n  line-height: 1.3 !important; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__link {\n      font-size: 18px; } }\n  .m-header-sub-navigation__link.is-header-sub-navigation-active, .m-header-sub-navigation__link:hover, .m-header-sub-navigation__link:active, .m-header-sub-navigation__link:focus {\n    color: #00005b;\n    text-decoration: none;\n    font-weight: 600;\n    letter-spacing: -0.005em; }\n",f=/\n[\s]+$/,b=/^\n[\s]+/,v=/[\s]+$/,m=/^[\s]+/,_=/[\n\s]+/g,g=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],y=["code","pre","textarea"],x=function e(t,n){if(Array.isArray(n))for(var r,i,o=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var d=n[s];if(Array.isArray(d))e(t,d);else{("number"==typeof d||"boolean"==typeof d||"function"==typeof d||d instanceof Date||d instanceof RegExp)&&(d=d.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof d)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=d:(d=document.createTextNode(d),t.appendChild(d),u=d),s===l-1&&(a=!1,-1===g.indexOf(o)&&-1===y.indexOf(o)?""===(r=u.nodeValue.replace(b,"").replace(v,"").replace(f,"").replace(_," "))?t.removeChild(u):u.nodeValue=r:-1===y.indexOf(o)&&(i=0===s?"":" ",r=u.nodeValue.replace(b,i).replace(m," ").replace(v,"").replace(f,"").replace(_," "),u.nodeValue=r));else if(d&&d.nodeType){a&&(a=!1,-1===g.indexOf(o)&&-1===y.indexOf(o)?""===(r=u.nodeValue.replace(b,"").replace(f,"").replace(_," "))?t.removeChild(u):u.nodeValue=r:-1===y.indexOf(o)&&(r=u.nodeValue.replace(m," ").replace(b,"").replace(f,"").replace(_," "),u.nodeValue=r));var c=d.nodeName;c&&(o=c.toLowerCase()),t.appendChild(d)}}}};var w=function(e){var t,n=document.createElement("div");return n.innerHTML=e,t=n.childNodes,Array.isArray(t)?t:[].slice.call(t)},k=function(e){var t,n,r=e.url,i=void 0===r?"":r,o=e.name,a=e.isActive,s=e.preventDefault,l=void 0===s?"false":s;return(n=document.createElement("li")).setAttribute("class","m-header-sub-navigation__list-item"),x(n,["\n    ",(t=document.createElement("a"),t.setAttribute("data-prevent-default",""+String(l)),t.setAttribute("href",""+String(i)),t.setAttribute("class",""+String(h("m-header-sub-navigation__link","js-header-navigation-close",{"is-header-sub-navigation-active":a}))),x(t,[w(o)]),t),"\n  "]),n},O=function(e){var t,n,r=e.columns,i=e.col,o=e.isWide;return(t=document.createElement("div")).setAttribute("class","m-header-sub-navigation__row m-header-sub-navigation__row--col-"+String(i||(2===(n=r.length)?n:n%3==0&&n%4!=0?3:4))),x(t,["\n\n  ",Array.isArray(r)&&r.map(function(e){var t,n,r,i,a=e.links,s=e.title,l=e.url,d=void 0===l?"":l;return(r=document.createElement("div")).setAttribute("class",""+String(h("m-header-sub-navigation__block",{"m-header-sub-navigation__block--wide":o}))),x(r,["\n      ",(t=document.createElement("strong"),t.setAttribute("class","m-header-sub-navigation__category"),x(t,["\n        ",d?(i=document.createElement("a"),i.setAttribute("href",""+String(d)),i.setAttribute("class","m-header-sub-navigation__category__link"),x(i,[s]),i):s,"\n      "]),t),"\n\n      ",(n=document.createElement("ul"),n.setAttribute("class","m-header-sub-navigation__list"),x(n,["\n        ",a&&a.map(k),"\n      "]),n),"\n    "]),r}),"\n  "]),t},C=function(e){var t=e.items,n=e.indexUrl,r=e.indexTitle,i=[];if(Array.isArray(t)){var o,a,s,l,d,u;if(r&&n)i.push(((u=document.createElement("div")).setAttribute("class","m-header-sub-navigation__index"),x(u,["\n          ",(d=document.createElement("div"),d.setAttribute("class","m-header-sub-navigation__index-box"),x(d,["\n            ",(a=document.createElement("a"),a.setAttribute("href",""+String(n)),a.setAttribute("class","m-header-sub-navigation__index-link js-header-navigation-close"),x(a,[r]),a),"\n            ",(l=document.createElement("button"),l.setAttribute("type","button"),l.setAttribute("class","m-header-sub-navigation__index-close js-header-navigation-close"),x(l,["\n              Close\n              ",(s=document.createElement("axa-icon"),s.setAttribute("icon","cross-gap"),s.setAttribute("classes","m-header-sub-navigation__index-close__icon"),s),"\n            "]),l),"\n          "]),d),"\n        "]),u));i.push(((o=document.createElement("div")).setAttribute("class","m-header-sub-navigation__box"),x(o,["\n        ",t&&t.map(O),"\n      "]),o))}return i},A={},E=function(e){return e in A||(A[e]=0),++A[e]},N=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,i=t.cancelable,o=void 0!==i&&i,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,r,o,s);var d=l.preventDefault;return l.preventDefault=function(){d.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function j(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new N(t,i({},r,{detail:n}));return e.dispatchEvent(o)}var P=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function T(e){for(var t=e.className,n=!1,r=!0,i=arguments.length,o=Array(i>1?i-1:0),a=1;a<i;a++)o[a-1]=arguments[a];var s=o.map(function(e){var i=(o=e,new RegExp("^"+o+"$|^"+o+"\\s|\\s"+o+"\\s|\\s"+o+"$",a)).test(t);var o,a;i?n=!0:r=!1;return{className:e,hasClass:i}});return!(!r&&!n)&&s}var S=/\s+/,R={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,i=void 0,o=0;o<r;++o)if(void 0!==e[i=n[o]])return t[i];return""}()};function M(e,n,r,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=o.capture,s=void 0!==a&&a,l=o.passive,d=void 0===l||l;if(R[n]&&(n=R[n]),!e||!n)return null;var u=void 0===r?"undefined":t(r),c=r&&"string"===u;if("function"===u){if(i){var h=i;s=h.capture,d=h.passive}i=r}for(var p=P?{capture:s,passive:d}:s,f=c?function(t){var n=t.target;for(;!T(n,r)&&n!==e;)n=n.parentNode;if(n!==e)return i(t,n)}:i,b=n.split(S),v=b.length,m=0;m<v;++m)e.addEventListener(b[m],f,p);return function t(){for(var n=0;n<v;++n)e.removeEventListener(b[n],f,p);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,i=0;i<r;++i){var o=n[i];if(e[o]===t)return delete e[o]}}(this,t)}}function L(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,i=void 0!==r&&r,o=n.trailing,a=void 0===o||o,s=n.maxWait,l=void 0!==s&&s,d=void 0,u=void 0,h=void 0,p=void 0,f=!1,b=t!==l,v=!1!==l;function m(){for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return d=r,b&&(u&&clearTimeout(u),u=setTimeout(_,t)),v&&!h&&(h=setTimeout(g,l)),i&&!f&&(f=!0,p=e.apply(void 0,c(d))),p}return m.flush=function(){(u||h)&&(p=e.apply(void 0,c(d)));return x(),p},m.cancel=x,m;function _(){h&&clearTimeout(h),y()}function g(){u&&clearTimeout(u),y()}function y(){a&&(p=e.apply(void 0,c(d))),u=null,h=null,f=!1}function x(){u&&(clearTimeout(u),u=null),h&&(clearTimeout(h),h=null),d=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var D=window.__subscriptions;function V(e,t){var n=M(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);D[e]||(D[e]={count:0});var r,i=D[e];return i.count++,i.onsubscribe||(i.onsubscribe=L((r=e,function(){j(document,"pubsub/onsubscribe",r),j(document,"pubsub/onsubscribe/"+r,r),D[r]&&delete D[r].unsubscribe}),100)),i.onsubscribe(),function(){i.count--,n.call(this),i.count<=0&&delete D[e]}}M(document,"pubsub/onsubscribe",function(e){var t=e.detail;D[t]||(D[t]={count:0});var n=D[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=u(e,3),n=t[0],r=t[1],i=t[2];j(i,n,r)}),delete n.queue)});var U,I=function(e,t){return e===t},z=((U=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I;return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),i=0;i<t;i++)r[i]=arguments[i];return function(){return e.apply(void 0,[].concat(n,r))?U.apply(void 0,arguments):void 0}}}})()(!0),function(e){function t(e,r){var i;n(this,t);for(var o="\n    Native Property >>>"+e+"<<< exists already at "+r.nodeName+"#"+r._id+" and evaluates to -> "+r[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",a=arguments.length,s=Array(a>2?a-2:0),d=2;d<a;d++)s[d-2]=arguments[d];var u=l(this,(i=t.__proto__||Object.getPrototypeOf(t)).call.apply(i,[this,o].concat(s)));return Error.captureStackTrace&&Error.captureStackTrace(u,t),u.name="PropertyExistsException",u}return a(t,e),t}(Error)),F=/[A-Z]/g;function H(e,t,n){var r=e.toLowerCase(),i=n.charAt(t+1);return 0===t||i.toUpperCase()===i?r:"-"+r}var W=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function B(e,t){var n=e;if(e&&t!==e){if(W.test(e))try{n=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else n=!0;return n}var q=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,$=/[-_]+/g;function K(e){return e.replace(q,G)}function G(e,t){return 0==+e||$.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var Z=["title","checked","disabled"],J=[];var X=1,Q=3,Y=8;function ee(e,t){var n=e.nodeType,r=e.nodeName;n===X&&function(e,t){for(var n=t.attributes,r=e.attributes,i=null,o=null,a=null,s=null,l=r.length-1;l>=0;--l)if(s=r[l],a=s.name,i=s.namespaceURI,o=s.value,i){var d=s.localName;t.getAttributeNS(i,d||a)!==o&&t.setAttributeNS(i,a,o)}else t.hasAttribute(a)?t.getAttribute(a)!==o&&("null"===o||"undefined"===o?t.removeAttribute(a):t.setAttribute(a,o)):t.setAttribute(a,o);for(var u=n.length-1;u>=0;--u)!1!==(s=n[u]).specified&&(a=s.name,(i=s.namespaceURI)?(a=s.localName||a,e.hasAttributeNS(i,a)||t.removeAttributeNS(i,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==Q&&n!==Y||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;te(e,t,"checked"),te(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?te(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function te(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var ne=3;function re(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(ee(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,i=void 0,o=void 0,a=0,s=0;n=t.childNodes[s],r=e.childNodes[s-a],n||r;s++)if(r)if(n)if(ie(r,n))(i=re(r,n))!==n&&(t.replaceChild(i,n),a++);else{o=null;for(var l=s;l<t.childNodes.length;l++)if(ie(t.childNodes[l],r)){o=t.childNodes[l];break}o?((i=re(r,o))!==o&&a++,t.insertBefore(i,n)):r.id||n.id?(t.insertBefore(r,n),a++):(i=re(r,n))!==n&&(t.replaceChild(i,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),s--}(e,t),t):null:e}function ie(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===ne&&e.nodeValue===t.nodeValue)}var oe=function(e){function t(e){var r;n(this,t);for(var i="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,a=Array(o>1?o-1:0),s=1;s<o;s++)a[s-1]=arguments[s];var d=l(this,(r=t.__proto__||Object.getPrototypeOf(t)).call.apply(r,[this,i].concat(a)));return Error.captureStackTrace&&Error.captureStackTrace(d,t),d.name="TemplateNoStringReturnException",d}return a(t,e),t}(Error),ae=!!document.createDocumentFragment().children;function se(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(se.prototype,HTMLElement.prototype),Object.setPrototypeOf(se,HTMLElement);var le=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(e){return function(t){function i(){var e,t,r;n(this,i);for(var o=arguments.length,a=Array(o),s=0;s<o;s++)a[s]=arguments[s];return t=r=l(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(a))),r._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;r.contextNode&&(clearTimeout(r.timeoutId),r.timeoutId=setTimeout(function(){r.contextCallback(r.contextNode,e)},10)),r.unContextEnabled&&r.unContextEnabled(),r.unContextEnabled=V("context/available",r._makeContextReady)},l(r,t)}return a(i,e),r(i,[{key:"connectedCallback",value:function(){o(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&o(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){o(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"disconnectedCallback",this)&&o(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;D[e]||(D[e]={count:0,queue:[]});var r=D[e].queue;Array.isArray(r)?r.push([e,t,n]):j(n,e,t)}("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),i}()},function(e){return function(t){function i(){return n(this,i),l(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return a(i,e),r(i,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):o(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"innerHTML",e,this)}}]),i}()},function(e){return function(t){function i(e){n(this,i);var t=l(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,e));t._reduceProps=function(e,n){var r=e.props,o=e.shouldUpdate,a=t._hasKeys[n];if(-1===Z.indexOf(n)&&a)throw new z(n,t);var s="_"+n,l=r[n],u=t[s];return o||t.shouldUpdateCallback(l,u)?(t[s]=l,t._props[n]=l,a&&d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),n,l,t),{props:r,shouldUpdate:!0}):{props:r,shouldUpdate:!1}},t._isConnected=!1,t._props={},t._hasKeys={},t.updatedDebounced=L(function(){return t.updated&&t.updated()},50);var r=t.constructor.observedAttributes;return Array.isArray(r)&&r.forEach(function(e){var n,r=K(e),i=r in t;if(-1===Z.indexOf(r)&&i)throw new z(r,t);t._hasKeys[r]=i,Object.defineProperty(t,r,n={get:function(){return this._props[r]},set:function(e){this.shouldUpdateCallback(this._props[r],e)&&(this._props[r]=e,i&&d(n.__proto__||Object.getPrototypeOf(n),r,e,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),t}return a(i,e),r(i,[{key:"connectedCallback",value:function(){var e=this;if(o(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&o(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&t.forEach(function(t){var n=K(t);if(e.hasAttribute(t)){var r=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=B(n,t)}(e,t),o=e._hasKeys[n];e._props[n]=r,o&&d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),n,r,e)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){this.shouldUpdateCallback(n,t)&&(this[K(e)]=B(n))}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return n.indexOf(e.replace(F,H))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),i}()},function(e){return function(i){function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,r=s(e,["template"]);n(this,d);var i=l(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,r));return i._template=t,i._hasTemplate=!!t,i._hasRendered=!1,i.updated=i.render,i}return a(d,e),r(d,[{key:"render",value:function(){var e=this,n=!this._hasRendered;if(this.willRenderCallback(n),this._hasTemplate){var r=this._template;try{if(n){for(var i=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),i.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=i}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});ae||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var s=r(this._props,this.childrenFragment),l=document.createDocumentFragment();if(Array.isArray(s))s.forEach(function(e){l.appendChild(e)});else if(s){if("string"==typeof s)throw new oe(this);l.appendChild(s)}if(n)o(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"appendChild",this).call(this,l);else{var u=this.cloneNode(!1);u._isMorphing=!0,u.appendChild(l),this._isMorphing=!0,function(e,n){if("object"!==(void 0===e?"undefined":t(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===n?"undefined":t(n)))throw new Error("componentMorph: newTree should be an object");re(n,e)}(this,u),function(){for(var e=void 0;e=J.pop();)delete e.isSameNode;J=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(n)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),d}()},function(e){return function(t){function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,r=void 0===t?"":t,o=s(e,["styles"]);n(this,i);var a=l(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,o));return a._styles=r,a}return a(i,e),r(i,[{key:"connectedCallback",value:function(){o(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&o(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),i}()})(function(e){function t(e){n(this,t);var r=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r._id=E(r.nodeName),r}return a(t,se),r(t,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}()),de={},ue=function(e){function t(){var e,r,i;n(this,t);for(var o=arguments.length,a=Array(o),s=0;s<o;s++)a[s]=arguments[s];return r=i=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),i._appendStyles=function(){t.appendGlobalStyles(i._styles,i.nodeName)},l(i,r)}return a(t,le),r(t,null,[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:le.uuidv4();if(e&&!de[t]){var n=document.createElement("style"),r=document.createTextNode(e);de[t]=!0,n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),t}();var ce,he,pe=function(e){function t(){return n(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:p,template:C}))}return a(t,ue),r(t,null,[{key:"observedAttributes",get:function(){return["flyout","index-title","index-url","items"]}}]),r(t,[{key:"willRenderCallback",value:function(){var e=this.flyout;this.className=h(this.initialClassName,"m-header-sub-navigation js-header-sub-navigation",{"m-header-sub-navigation--flyout":e})}}]),t}();return pe.tagName="axa-header-sub-navigation",ce=pe.tagName,he=pe,customElements.get(ce)||customElements.define(ce,he),pe});
