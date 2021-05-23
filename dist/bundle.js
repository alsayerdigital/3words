(()=>{"use strict";var n={902:(n,e,r)=>{r.d(e,{Z:()=>a});var t=r(645),o=r.n(t)()((function(n){return n[1]}));o.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Pattaya&display=swap);"]),o.push([n.id,"html{box-sizing: border-box;}\r\nbody{\r\n    margin:0px;\r\n    background-color: #E12026;\r\n    font-family: 'Pattaya', sans-serif;\r\n}\r\n#container{\r\n    height: 100vh;\r\n    width: 100vw;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    text-align: center;\r\n    align-items: center;\r\n}\r\n#logo svg{\r\n    width: 6rem;\r\n    height: 6rem;\r\n}\r\n#words{\r\n    font-size: 5rem;\r\n    color: #fff;\r\n    word-wrap: break-word;\r\n}\r\n#query{\r\n    background: #09304A;\r\n    box-shadow: -4px 33px 56px -9px rgba(254,254,254,0.12) inset;\r\n    color: #fff;\r\n    font-size: 1.3rem;\r\n    padding: 10px 20px;\r\n    flex-shrink: inherit;\r\n    border-radius: 5px;\r\n \r\n    border:3px solid rgba(255, 255, 255, .8);\r\n    font-family: 'Pattaya', sans-serif;\r\n    font-weight: 100;\r\n}\r\n#query:hover{\r\n    filter: brightness(120%);\r\n    transform: translate(0px,-2px);\r\n    \r\n}\r\n#query:active{\r\n    transform: translate(0,5px);\r\n    filter: brightness(150%);\r\n}\r\n#points{\r\n    color:#fff;\r\n    font-size: .8rem;\r\n    font-weight: 100\r\n    ;\r\n}\r\n#points a{\r\n    color:#fff;\r\n    text-decoration: none;\r\n}",""]);const a=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=n(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);t&&o[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),e.push(s))}},e}},379:(n,e,r)=>{var t,o=function(){var n={};return function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}n[e]=r}return n[e]}}(),a=[];function i(n){for(var e=-1,r=0;r<a.length;r++)if(a[r].identifier===n){e=r;break}return e}function c(n,e){for(var r={},t=[],o=0;o<n.length;o++){var c=n[o],s=e.base?c[0]+e.base:c[0],l=r[s]||0,u="".concat(s," ").concat(l);r[s]=l+1;var f=i(u),d={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:u,updater:v(d,e),references:1}),t.push(u)}return t}function s(n){var e=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var a=r.nc;a&&(t.nonce=a)}if(Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(e);else{var i=o(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var l,u=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function f(n,e,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=u(e,o);else{var a=document.createTextNode(o),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}function d(n,e,r){var t=r.css,o=r.media,a=r.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var p=null,h=0;function v(n,e){var r,t,o;if(e.singleton){var a=h++;r=p||(p=s(e)),t=f.bind(null,r,a,!1),o=f.bind(null,r,a,!0)}else r=s(e),t=d.bind(null,r,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)};return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var r=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<r.length;t++){var o=i(r[t]);a[o].references--}for(var s=c(n,e),l=0;l<r.length;l++){var u=i(r[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}r=s}}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={id:t,exports:{}};return n[t](a,a.exports,r),a.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=r(379),e=r.n(n),t=r(902);function o(n,e,r,t,o,a,i){try{var c=n[a](i),s=c.value}catch(n){return void r(n)}c.done?e(s):Promise.resolve(s).then(t,o)}function a(n){return function(){var e=this,r=arguments;return new Promise((function(t,a){var i=n.apply(e,r);function c(n){o(i,t,a,c,s,"next",n)}function s(n){o(i,t,a,c,s,"throw",n)}c(void 0)}))}}e()(t.Z,{insert:"head",singleton:!1}),t.Z.locals;var i=document.querySelector("#query"),c=document.querySelector("#words"),s=document.querySelector("#points");function l(){return(l=a(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(s.innerHTML="",navigator.geolocation){n.next=5;break}c.innerHTML='<i class="fas fa-exclamation"></i> . Need Location Access',n.next=8;break;case 5:return c.innerHTML="Locating…",n.next=8,navigator.geolocation.getCurrentPosition(u,f);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function u(n){var e=n.coords.latitude,r=n.coords.longitude,t=document.createElement("a");t.href="http://maps.google.com/maps?q=loc:".concat(e,",").concat(r),t.innerHTML=" Latitude: ".concat(e," °, Longitude: ").concat(r,' °  <i class="fas fa-external-link-alt"></i>'),t.target="_blank",s.appendChild(t),what3words.api.convertTo3wa({lat:e,lng:r},"en").then((function(n){console.log("[convertTo3wa]",n),c.innerHTML=n.words.replaceAll("."," . ")})).catch((function(n){console.log("[code]",n.code),console.log("[message]",n.message),c.innerHTML='<i class="fas fa-bug"></i>  Unable to contact 3words server'}))}function f(){c.innerHTML='<i class="fas fa-exclamation"></i>  Unable to retrieve your location'}i.addEventListener("click",(function(){return l.apply(this,arguments)}))})()})();