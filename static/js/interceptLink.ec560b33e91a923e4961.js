!function(t){function r(n){if(e[n])return e[n].exports;var o=e[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var e={};return r.m=t,r.c=e,r.p="//imgcache.qq.com/qcloud/act/scripts/",r(0)}([function(t,r){"use strict";function e(t){var r=/^((http(s)?:)?\/\/)?(.*\.)?(cloud\.tencent\.(com|cn|com\.cn))(\/.*)?$/g,e=r.exec(t);return e?(e.groups||(e.groups={sub:e[4],main:e[5],suffix:e[6]}),e):null}function n(){if(window.QCACT_DOMAIN_CONFIG)return window.QCACT_DOMAIN_CONFIG.main;var t="cloud.tencent.com";if("undefined"!=typeof location){var r=e(location.hostname),n=r&&r.groups&&r.groups.main||t;return n}return t}function o(t,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20;if(!t||"function"!=typeof r||!e)return null;for(var n=t,o=null,c=0;c<e&&n;){if(r(n)){o=n;break}n=n.parentElement,c+=1}return o}function c(t){var r=["qcportal-kit-topnav","qcportal-kit-floatbar","qcportal-kit-footer"];if(t.closest){for(var e=0;e<r.length;e+=1)if(t.closest("#"+r[e]))return!0;return!1}return!!o(t,function(t){return!!~r.indexOf(t.getAttribute("id"))})}function i(t){try{var r=t.target.closest?t.target.closest("a"):o(t.target,function(t){return"a"===String(t.tagName).toLowerCase()},3),i="qcact-intercept-link";if(r&&!r.getAttribute(i)&&!c(r)){var a=r.getAttribute("href"),u=e(a);if(u){var f=u.groups.main,s=n();if(f!==s){var l=a.replace(f,s);r.setAttribute("href",l),r.setAttribute(i,1)}}}}catch(t){console.error(t)}}try{document.addEventListener("mouseenter",i,!0)}catch(t){console.warn(t)}}]);