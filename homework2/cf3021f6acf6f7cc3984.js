!function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=33)}([function(t,n,e){var r=e(27)("wks"),o=e(30),i=e(1).Symbol,c="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=c&&i[t]||(c?i:o)("Symbol."+t))}).store=r},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(11),o=e(26);t.exports=e(5)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){t.exports=!e(22)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports={}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(12);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(2),o=e(40),i=e(61),c=Object.defineProperty;n.f=e(5)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(10),o=e(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(11).f,o=e(9),i=e(0)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(27)("keys"),o=e(30);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(42),o=e(13);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(7),o=e(0)("toStringTag"),i="Arguments"==r(function(){return arguments}()),c=function(t,n){try{return t[n]}catch(t){}};t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=c(n=Object(t),o))?e:i?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(1),o=e(3),i=e(8),c=e(4),u=function(t,n,e){var s,a,f,l=t&u.F,d=t&u.G,p=t&u.S,h=t&u.P,v=t&u.B,m=t&u.W,y=d?o:o[n]||(o[n]={}),g=y.prototype,_=d?r:p?r[n]:(r[n]||{}).prototype;d&&(e=n);for(s in e)(a=!l&&_&&void 0!==_[s])&&s in y||(f=a?_[s]:e[s],y[s]=d&&"function"!=typeof _[s]?e[s]:v&&a?i(f,r):m&&_[s]==f?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(f):h&&"function"==typeof f?i(Function.call,f):f,h&&((y.virtual||(y.virtual={}))[s]=f,t&u.R&&g&&!g[s]&&c(g,s,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){t.exports=e(1).document&&document.documentElement},function(t,n,e){"use strict";var r=e(25),o=e(21),i=e(55),c=e(4),u=e(9),s=e(6),a=e(45),f=e(15),l=e(51),d=e(0)("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,n,e,v,m,y,g){a(e,n,v);var _,x,b,w=function(t){if(!p&&t in S)return S[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},A=n+" Iterator",E="values"==m,I=!1,S=t.prototype,O=S[d]||S["@@iterator"]||m&&S[m],j=O||w(m),L=m?E?w("entries"):j:void 0,P="Array"==n?S.entries||O:O;if(P&&(b=l(P.call(new t)))!==Object.prototype&&(f(b,A,!0),r||u(b,d)||c(b,d,h)),E&&O&&"values"!==O.name&&(I=!0,j=function(){return O.call(this)}),r&&!g||!p&&!I&&S[d]||c(S,d,j),s[n]=j,s[A]=h,m)if(_={values:E?j:w("values"),keys:y?j:w("keys"),entries:L},g)for(x in _)x in S||i(S,x,_[x]);else o(o.P+o.F*(p||I),n,_);return _}},function(t,n){t.exports=!0},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(1),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,n,e){var r,o,i,c=e(8),u=e(41),s=e(23),a=e(14),f=e(1),l=f.process,d=f.setImmediate,p=f.clearImmediate,h=f.MessageChannel,v=0,m={},y=function(){var t=+this;if(m.hasOwnProperty(t)){var n=m[t];delete m[t],n()}},g=function(t){y.call(t.data)};d&&p||(d=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return m[++v]=function(){u("function"==typeof t?t:Function(t),n)},r(v),v},p=function(t){delete m[t]},"process"==e(7)(l)?r=function(t){l.nextTick(c(y,t,1))}:h?(o=new h,i=o.port2,o.port1.onmessage=g,r=c(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",g,!1)):r="onreadystatechange"in a("script")?function(t){s.appendChild(a("script")).onreadystatechange=function(){s.removeChild(this),y.call(t)}}:function(t){setTimeout(c(y,t,1),0)}),t.exports={set:d,clear:p}},function(t,n,e){var r=e(17),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){t.exports={default:e(34),__esModule:!0}},function(t,n,e){t.exports={default:e(35),__esModule:!0}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=e(31),i=r(o),c=e(32),u=r(c),s={init:function(){this.apiInit(),this.getFriends(),this.setListeners(),this.search(),this.saveButton(),this.resetButton(),window.myModule=this},friendsIdArr:[],rightFriendsArr:[],renderFriend:function(t,n,e){var r=document.createElement("div"),o=new Image,i=document.createElement("div"),c=document.createElement("a");r.classList.add("central-box__friend"),o.src=t.photo_50,o.classList.add("central-box__friend_img"),i.classList.add("central-box__friend_name"),i.textContent=t.first_name+" "+t.last_name,c.classList.add("central-box__friend_button"),c.innerHTML=n,r.setAttribute("id",t.id),r.setAttribute("draggable","true"),r.setAttribute("ondragstart","return dragStart(event)"),e.appendChild(r),r.appendChild(o),r.appendChild(i),r.appendChild(c)},apiInit:function(){VK.init({apiId:6074753}),VK.Auth.login(function(t){null!==t.session?console.log("All is good"):console.log("Не удалось авторизоваться")},2)},getFriends:function(){var t=this;if(!localStorage.getItem("leftLocalArr")||!localStorage.getItem("rightLocalArr")){var n=this;return new u.default(function(t,n){VK.api("friends.get",{v:"5.64",order:"name",fields:"photo_50"},function(e){e.error?n(new Error(e.error.error_msg)):t(e)})}).then(function(t){t.response.items.forEach(function(t){n.renderFriend(t,"+",document.getElementById("friends")),n.friendsIdArr.push(t)})})}for(var e=JSON.parse(localStorage.getItem("leftLocalArr")),r=JSON.parse(localStorage.getItem("rightLocalArr")),o=this.friendsIdArr,i=this.rightFriendsArr,c=0;c<e.length;c++)o.push(e[c]);for(var s=0;s<r.length;s++)i.push(r[s]);e.forEach(function(n){t.renderFriend(n,"+",document.getElementById("friends"))}),r.forEach(function(n){t.renderFriend(n,"-",document.getElementById("friendsNewlist"))})},setListeners:function(){function t(t){var n=new Event("keyup",{search:t.value=""});t.dispatchEvent(n)}function n(n){function u(t,n,e){for(var r=0;r<t.length;r++)t[r].id==e.id&&(n.push(t[r]),t.splice(r,1))}if("+"===n.target.innerHTML){t(i);var s=n.target.parentNode;n.target.innerHTML="-",u(e.friendsIdArr,e.rightFriendsArr,s),o.appendChild(s)}else if("-"===n.target.innerHTML){t(c);var a=n.target.parentNode;n.target.innerHTML="+",u(e.rightFriendsArr,e.friendsIdArr,a),r.appendChild(a)}}var e=this,r=document.getElementById("friends"),o=document.getElementById("friendsNewlist"),i=document.getElementById("right-search-box_input"),c=document.getElementById("left-search-box_input");r.addEventListener("click",n),o.addEventListener("click",n)},search:function(){function t(t){for(var n=t.firstChild;null!=n;){var e=n.nextSibling;t.removeChild(n),n=e}}function n(n){var e=n.target.value;t(i);for(var r=0;r<this.friendsIdArr.length;r++)this.friendsIdArr[r].fullName=this.friendsIdArr[r].first_name+" "+this.friendsIdArr[r].last_name,this.friendsIdArr[r].fullName.toLowerCase().startsWith(e)&&this.renderFriend(this.friendsIdArr[r],"+",document.getElementById("friends"))}function e(n){var e=n.target.value;t(c);for(var r=0;r<this.rightFriendsArr.length;r++)this.rightFriendsArr[r].fullName2=this.rightFriendsArr[r].first_name+" "+this.rightFriendsArr[r].last_name,this.rightFriendsArr[r].fullName2.toLowerCase().startsWith(e)&&this.renderFriend(this.rightFriendsArr[r],"-",document.getElementById("friendsNewlist"))}var r=document.getElementById("left-search-box_input"),o=document.getElementById("right-search-box_input"),i=document.getElementById("friends"),c=document.getElementById("friendsNewlist");r.addEventListener("keyup",n.bind(this)),o.addEventListener("keyup",e.bind(this))},saveButton:function(){var t=this;document.querySelector(".friend-box__bottom-box_button").addEventListener("click",function(n){var e=t.friendsIdArr,r=(0,i.default)(e),o=t.rightFriendsArr,c=(0,i.default)(o);localStorage.setItem("leftLocalArr",r),localStorage.setItem("rightLocalArr",c)})},resetButton:function(){document.querySelector(".friend-box__bottom-box_button-reset").addEventListener("click",function(t){localStorage.clear()})}};window.onload=s.init()},function(t,n,e){var r=e(3),o=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},function(t,n,e){e(64),e(66),e(67),e(65),t.exports=e(3).Promise},function(t,n){t.exports=function(){}},function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n,e){var r=e(18),o=e(29),i=e(59);t.exports=function(t){return function(n,e,c){var u,s=r(n),a=o(s.length),f=i(c,a);if(t&&e!=e){for(;a>f;)if((u=s[f++])!=u)return!0}else for(;a>f;f++)if((t||f in s)&&s[f]===e)return t||f||0;return!t&&-1}}},function(t,n,e){var r=e(8),o=e(44),i=e(43),c=e(2),u=e(29),s=e(62),a={},f={},n=t.exports=function(t,n,e,l,d){var p,h,v,m,y=d?function(){return t}:s(t),g=r(e,l,n?2:1),_=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(i(y)){for(p=u(t.length);p>_;_++)if((m=n?g(c(h=t[_])[0],h[1]):g(t[_]))===a||m===f)return m}else for(v=y.call(t);!(h=v.next()).done;)if((m=o(v,g,h.value,n))===a||m===f)return m};n.BREAK=a,n.RETURN=f},function(t,n,e){t.exports=!e(5)&&!e(22)(function(){return 7!=Object.defineProperty(e(14)("div"),"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},function(t,n,e){var r=e(7);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(6),o=e(0)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,n,e){var r=e(2);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){"use strict";var r=e(49),o=e(26),i=e(15),c={};e(4)(c,e(0)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(c,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(0)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],c=i[r]();c.next=function(){return{done:e=!0}},i[r]=function(){return c},t(i)}catch(t){}return e}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){var r=e(1),o=e(28).set,i=r.MutationObserver||r.WebKitMutationObserver,c=r.process,u=r.Promise,s="process"==e(7)(c);t.exports=function(){var t,n,e,a=function(){var r,o;for(s&&(r=c.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(s)e=function(){c.nextTick(a)};else if(i){var f=!0,l=document.createTextNode("");new i(a).observe(l,{characterData:!0}),e=function(){l.data=f=!f}}else if(u&&u.resolve){var d=u.resolve();e=function(){d.then(a)}}else e=function(){o.call(r,a)};return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}},function(t,n,e){var r=e(2),o=e(50),i=e(20),c=e(16)("IE_PROTO"),u=function(){},s=function(){var t,n=e(14)("iframe"),r=i.length;for(n.style.display="none",e(23).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s.prototype[i[r]];return s()};t.exports=Object.create||function(t,n){var e;return null!==t?(u.prototype=r(t),e=new u,u.prototype=null,e[c]=t):e=s(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(11),o=e(2),i=e(53);t.exports=e(5)?Object.defineProperties:function(t,n){o(t);for(var e,c=i(n),u=c.length,s=0;u>s;)r.f(t,e=c[s++],n[e]);return t}},function(t,n,e){var r=e(9),o=e(60),i=e(16)("IE_PROTO"),c=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},function(t,n,e){var r=e(9),o=e(18),i=e(38)(!1),c=e(16)("IE_PROTO");t.exports=function(t,n){var e,u=o(t),s=0,a=[];for(e in u)e!=c&&r(u,e)&&a.push(e);for(;n.length>s;)r(u,e=n[s++])&&(~i(a,e)||a.push(e));return a}},function(t,n,e){var r=e(52),o=e(20);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(4);t.exports=function(t,n,e){for(var o in n)e&&t[o]?t[o]=n[o]:r(t,o,n[o]);return t}},function(t,n,e){t.exports=e(4)},function(t,n,e){"use strict";var r=e(1),o=e(3),i=e(11),c=e(5),u=e(0)("species");t.exports=function(t){var n="function"==typeof o[t]?o[t]:r[t];c&&n&&!n[u]&&i.f(n,u,{configurable:!0,get:function(){return this}})}},function(t,n,e){var r=e(2),o=e(12),i=e(0)("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||void 0==(e=r(c)[i])?n:o(e)}},function(t,n,e){var r=e(17),o=e(13);t.exports=function(t){return function(n,e){var i,c,u=String(o(n)),s=r(e),a=u.length;return s<0||s>=a?t?"":void 0:(i=u.charCodeAt(s),i<55296||i>56319||s+1===a||(c=u.charCodeAt(s+1))<56320||c>57343?t?u.charAt(s):i:t?u.slice(s,s+2):c-56320+(i-55296<<10)+65536)}}},function(t,n,e){var r=e(17),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(13);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(10);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(19),o=e(0)("iterator"),i=e(6);t.exports=e(3).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,n,e){"use strict";var r=e(36),o=e(47),i=e(6),c=e(18);t.exports=e(24)(Array,"Array",function(t,n){this._t=c(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n){},function(t,n,e){"use strict";var r,o,i,c=e(25),u=e(1),s=e(8),a=e(19),f=e(21),l=e(10),d=e(12),p=e(37),h=e(39),v=e(57),m=e(28).set,y=e(48)(),g=u.TypeError,_=u.process,x=u.Promise,_=u.process,b="process"==a(_),w=function(){},A=!!function(){try{var t=x.resolve(1),n=(t.constructor={})[e(0)("species")]=function(t){t(w,w)};return(b||"function"==typeof PromiseRejectionEvent)&&t.then(w)instanceof n}catch(t){}}(),E=function(t,n){return t===n||t===x&&n===i},I=function(t){var n;return!(!l(t)||"function"!=typeof(n=t.then))&&n},S=function(t){return E(x,t)?new O(t):new o(t)},O=o=function(t){var n,e;this.promise=new t(function(t,r){if(void 0!==n||void 0!==e)throw g("Bad Promise constructor");n=t,e=r}),this.resolve=d(n),this.reject=d(e)},j=function(t){try{t()}catch(t){return{error:t}}},L=function(t,n){if(!t._n){t._n=!0;var e=t._c;y(function(){for(var r=t._v,o=1==t._s,i=0;e.length>i;)!function(n){var e,i,c=o?n.ok:n.fail,u=n.resolve,s=n.reject,a=n.domain;try{c?(o||(2==t._h&&M(t),t._h=1),!0===c?e=r:(a&&a.enter(),e=c(r),a&&a.exit()),e===n.promise?s(g("Promise-chain cycle")):(i=I(e))?i.call(e,u,s):u(e)):s(r)}catch(t){s(t)}}(e[i++]);t._c=[],t._n=!1,n&&!t._h&&P(t)})}},P=function(t){m.call(u,function(){var n,e,r,o=t._v;if(F(t)&&(n=j(function(){b?_.emit("unhandledRejection",o,t):(e=u.onunhandledrejection)?e({promise:t,reason:o}):(r=u.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=b||F(t)?2:1),t._a=void 0,n)throw n.error})},F=function(t){if(1==t._h)return!1;for(var n,e=t._a||t._c,r=0;e.length>r;)if(n=e[r++],n.fail||!F(n.promise))return!1;return!0},M=function(t){m.call(u,function(){var n;b?_.emit("rejectionHandled",t):(n=u.onrejectionhandled)&&n({promise:t,reason:t._v})})},T=function(t){var n=this;n._d||(n._d=!0,n=n._w||n,n._v=t,n._s=2,n._a||(n._a=n._c.slice()),L(n,!0))},k=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw g("Promise can't be resolved itself");(n=I(t))?y(function(){var r={_w:e,_d:!1};try{n.call(t,s(k,r,1),s(T,r,1))}catch(t){T.call(r,t)}}):(e._v=t,e._s=1,L(e,!1))}catch(t){T.call({_w:e,_d:!1},t)}}};A||(x=function(t){p(this,x,"Promise","_h"),d(t),r.call(this);try{t(s(k,this,1),s(T,this,1))}catch(t){T.call(this,t)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=e(54)(x.prototype,{then:function(t,n){var e=S(v(this,x));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=b?_.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&L(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),O=function(){var t=new r;this.promise=t,this.resolve=s(k,t,1),this.reject=s(T,t,1)}),f(f.G+f.W+f.F*!A,{Promise:x}),e(15)(x,"Promise"),e(56)("Promise"),i=e(3).Promise,f(f.S+f.F*!A,"Promise",{reject:function(t){var n=S(this);return(0,n.reject)(t),n.promise}}),f(f.S+f.F*(c||!A),"Promise",{resolve:function(t){if(t instanceof x&&E(t.constructor,this))return t;var n=S(this);return(0,n.resolve)(t),n.promise}}),f(f.S+f.F*!(A&&e(46)(function(t){x.all(t).catch(w)})),"Promise",{all:function(t){var n=this,e=S(n),r=e.resolve,o=e.reject,i=j(function(){var e=[],i=0,c=1;h(t,!1,function(t){var u=i++,s=!1;e.push(void 0),c++,n.resolve(t).then(function(t){s||(s=!0,e[u]=t,--c||r(e))},o)}),--c||r(e)});return i&&o(i.error),e.promise},race:function(t){var n=this,e=S(n),r=e.reject,o=j(function(){h(t,!1,function(t){n.resolve(t).then(e.resolve,r)})});return o&&r(o.error),e.promise}})},function(t,n,e){"use strict";var r=e(58)(!0);e(24)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){e(63);for(var r=e(1),o=e(4),i=e(6),c=e(0)("toStringTag"),u=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],s=0;s<5;s++){var a=u[s],f=r[a],l=f&&f.prototype;l&&!l[c]&&o(l,c,a),i[a]=i.Array}}]);
//# sourceMappingURL=cf3021f6acf6f7cc3984.js.map