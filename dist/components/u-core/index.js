var StyleGuideWebComponent=function(){"use strict";var r=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function c(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=function(t,n){var e=t;if(t&&n!==t){if(r.test(t))try{e=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else e=!0;return e}(n,t)}var s=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,n=/[-_]+/g;function f(e,t){return 0==+e||n.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},a=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t};function l(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(l.prototype,HTMLElement.prototype),Object.setPrototypeOf(l,HTMLElement);var e,t,p,d={},b=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l),a(t,[{key:"connectedCallback",value:function(){var e=function(e){if(!e.hasAttributes)return null;for(var t,n={},r=e.attributes,o=r.length,a=0;a<o;++a){var i=r[a],u=i.name;n[(t=u,t.replace(s,f))]=c(i)}return n}(this),t={};if(e){var n=e.iconsPath,r=e.onlyLoad;if(n){var o=new XMLHttpRequest;r||(t.iconsPath=n),o.open("GET",n,!0),o.send(),o.onload=function(){var e=document.createElement("div");e.innerHTML=o.responseText,e.style.display="none",document.body.insertBefore(e,document.body.childNodes[0])}}}window.__axaPLibConfig=i({},d,window.__axaPLibConfig||{},t)}}]),t}();return b.tagName="axa-core",e=function(){window.customElements.define(b.tagName,b)},t=0,p=function(){if(0===t)try{e.apply(void 0,arguments),t+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",p,!1),document.addEventListener("WebComponentsReady",p,!1),b}();
