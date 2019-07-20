"use strict";const DIST_PATH="dist";function assertPath(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function normalizeStringPosix(e,t){for(var r,n="",i=0,a=-1,o=0,s=0;s<=e.length;++s){if(s<e.length)r=e.charCodeAt(s);else{if(47===r)break;r=47}if(47===r){if(a===s-1||1===o);else if(a!==s-1&&2===o){if(n.length<2||2!==i||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var l=n.lastIndexOf("/");if(l!==n.length-1){-1===l?(n="",i=0):i=(n=n.slice(0,l)).length-1-n.lastIndexOf("/"),a=s,o=0;continue}}else if(2===n.length||1===n.length){n="",i=0,a=s,o=0;continue}t&&(n.length>0?n+="/..":n="..",i=2)}else n.length>0?n+="/"+e.slice(a+1,s):n=e.slice(a+1,s),i=s-a-1;a=s,o=0}else 46===r&&-1!==o?++o:o=-1}return n}function _format(e,t){var r=t.dir||t.root,n=t.base||(t.name||"")+(t.ext||"");return r?r===t.root?r+n:r+e+n:n}var posix={resolve:function(){for(var e,t="",r=!1,n=arguments.length-1;n>=-1&&!r;n--){var i;n>=0?i=arguments[n]:(void 0===e&&(e=process.cwd()),i=e),assertPath(i),0!==i.length&&(t=i+"/"+t,r=47===i.charCodeAt(0))}return t=normalizeStringPosix(t,!r),r?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(e){if(assertPath(e),0===e.length)return".";var t=47===e.charCodeAt(0),r=47===e.charCodeAt(e.length-1);return 0!==(e=normalizeStringPosix(e,!t)).length||t||(e="."),e.length>0&&r&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return assertPath(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var r=arguments[t];assertPath(r),r.length>0&&(void 0===e?e=r:e+="/"+r)}return void 0===e?".":posix.normalize(e)},relative:function(e,t){if(assertPath(e),assertPath(t),e===t)return"";if((e=posix.resolve(e))===(t=posix.resolve(t)))return"";for(var r=1;r<e.length&&47===e.charCodeAt(r);++r);for(var n=e.length,i=n-r,a=1;a<t.length&&47===t.charCodeAt(a);++a);for(var o=t.length-a,s=i<o?i:o,l=-1,h=0;h<=s;++h){if(h===s){if(o>s){if(47===t.charCodeAt(a+h))return t.slice(a+h+1);if(0===h)return t.slice(a+h)}else i>s&&(47===e.charCodeAt(r+h)?l=h:0===h&&(l=0));break}var c=e.charCodeAt(r+h);if(c!==t.charCodeAt(a+h))break;47===c&&(l=h)}var f="";for(h=r+l+1;h<=n;++h)h!==n&&47!==e.charCodeAt(h)||(0===f.length?f+="..":f+="/..");return f.length>0?f+t.slice(a+l):(a+=l,47===t.charCodeAt(a)&&++a,t.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(assertPath(e),0===e.length)return".";for(var t=e.charCodeAt(0),r=47===t,n=-1,i=!0,a=e.length-1;a>=1;--a)if(47===(t=e.charCodeAt(a))){if(!i){n=a;break}}else i=!1;return-1===n?r?"/":".":r&&1===n?"//":e.slice(0,n)},basename:function(e,t){if(void 0!==t&&"string"!=typeof t)throw new TypeError('"ext" argument must be a string');assertPath(e);var r,n=0,i=-1,a=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var o=t.length-1,s=-1;for(r=e.length-1;r>=0;--r){var l=e.charCodeAt(r);if(47===l){if(!a){n=r+1;break}}else-1===s&&(a=!1,s=r+1),o>=0&&(l===t.charCodeAt(o)?-1==--o&&(i=r):(o=-1,i=s))}return n===i?i=s:-1===i&&(i=e.length),e.slice(n,i)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!a){n=r+1;break}}else-1===i&&(a=!1,i=r+1);return-1===i?"":e.slice(n,i)},extname:function(e){assertPath(e);for(var t=-1,r=0,n=-1,i=!0,a=0,o=e.length-1;o>=0;--o){var s=e.charCodeAt(o);if(47!==s)-1===n&&(i=!1,n=o+1),46===s?-1===t?t=o:1!==a&&(a=1):-1!==t&&(a=-1);else if(!i){r=o+1;break}}return-1===t||-1===n||0===a||1===a&&t===n-1&&t===r+1?"":e.slice(t,n)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return _format("/",e)},parse:function(e){assertPath(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return t;var r,n=e.charCodeAt(0),i=47===n;i?(t.root="/",r=1):r=0;for(var a=-1,o=0,s=-1,l=!0,h=e.length-1,c=0;h>=r;--h)if(47!==(n=e.charCodeAt(h)))-1===s&&(l=!1,s=h+1),46===n?-1===a?a=h:1!==c&&(c=1):-1!==a&&(c=-1);else if(!l){o=h+1;break}return-1===a||-1===s||0===c||1===c&&a===s-1&&a===o+1?-1!==s&&(t.base=t.name=0===o&&i?e.slice(1,s):e.slice(o,s)):(0===o&&i?(t.name=e.slice(1,a),t.base=e.slice(1,s)):(t.name=e.slice(o,a),t.base=e.slice(o,s)),t.ext=e.slice(a,s)),o>0?t.dir=e.slice(0,o-1):i&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};posix.posix=posix;var pathBrowserify=posix;const dist=e=>pathBrowserify.join("dist",e||"/"),paths={dist:dist};chrome.browserAction.onClicked.addListener(function(e){chrome.tabs.executeScript(e.ib,{file:paths.dist("script.js")})});
