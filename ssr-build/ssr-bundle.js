module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/preact-taskpad/",n(n.s="QfWi")}({GFNa:function(t,e,n){},HteQ:function(t,e){t.exports=require("preact")},QfWi:function(t,e,n){"use strict";n.r(e);n("GFNa");var r=n("HteQ"),o={};function i(t,e){for(var n in e)t[n]=e[n];return t}function a(t,e,n){var r,i=/(?:\?([^#]*))?(#.*)?$/,a=t.match(i),c={};if(a&&a[1])for(var s=a[1].split("&"),l=0;l<s.length;l++){var f=s[l].split("=");c[decodeURIComponent(f[0])]=decodeURIComponent(f.slice(1).join("="))}t=u(t.replace(i,"")),e=u(e||"");for(var p=Math.max(t.length,e.length),h=0;h<p;h++)if(e[h]&&":"===e[h].charAt(0)){var d=e[h].replace(/(^:|[+*?]+$)/g,""),m=(e[h].match(/[+*?]+$/)||o)[0]||"",v=~m.indexOf("+"),_=~m.indexOf("*"),b=t[h]||"";if(!b&&!_&&(m.indexOf("?")<0||v)){r=!1;break}if(c[d]=decodeURIComponent(b),v||_){c[d]=t.slice(h).map(decodeURIComponent).join("/");break}}else if(e[h]!==t[h]){r=!1;break}return(!0===n.default||!1!==r)&&c}function c(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function s(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,u(e).map(l).join(""));var e}(t),t.props}function u(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function l(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}var f=null,p=[],h=[],d={};function m(){var t;return""+((t=f&&f.location?f.location:f&&f.getCurrentLocation?f.getCurrentLocation():"undefined"!=typeof location?location:d).pathname||"")+(t.search||"")}function v(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=p.length;e--;)if(p[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),f&&f[e]?f[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),_(t)}function _(t){for(var e=!1,n=0;n<p.length;n++)!0===p[n].routeTo(t)&&(e=!0);for(var r=h.length;r--;)h[r](t);return e}function b(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return v(e)}}function y(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return b(t.currentTarget||t.target||this),g(t)}function g(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function w(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(b(e))return g(t)}}while(e=e.parentNode)}}var O=!1;var k=function(t){function e(e){t.call(this,e),e.history&&(f=e.history),this.state={url:e.url||m()},O||("function"==typeof addEventListener&&(f||addEventListener("popstate",(function(){_(m())})),addEventListener("click",w)),O=!0)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(r.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){p.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;f&&(this.unlisten=f.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),p.splice(p.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(s).sort(c).map((function(t){var o=a(e,t.props.path,t.props);if(o){if(!1!==n){var c={url:e,matches:o};return i(c,o),delete c.ref,delete c.key,Object(r.cloneElement)(t,c)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,o=t.onChange,i=e.url,a=this.getMatchingChildren(Object(r.toChildArray)(n),i,!0),c=a[0]||null,s=this.previousUrl;return i!==s&&(this.previousUrl=i,"function"==typeof o&&o({router:this,url:i,previous:s,active:a,current:c})),c},e}(r.Component);k.subscribers=h,k.getCurrentUrl=m,k.route=v,k.Router=k,k.Route=function(t){return Object(r.createElement)(t.component,t)},k.Link=function(t){return Object(r.createElement)("a",i({onClick:y},t))},k.exec=a;function C(){return(C=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var j=function(t){var e=t.color||"currentColor",n=t.size||24;return delete t.color,delete t.size,Object(r.h)("svg",C({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:e,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},t),Object(r.h)("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),Object(r.h)("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"}))};function N(){return(N=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var E,S=function(t){var e=t.color||"currentColor",n=t.size||24;return delete t.color,delete t.size,Object(r.h)("svg",N({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:e,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},t),Object(r.h)("path",{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"}))},P=[],x=r.options.__r,A=r.options.diffed,T=r.options.__c,U=r.options.unmount;function L(){P.some((function(t){if(t.__P)try{t.__H.__h.forEach(R),t.__H.__h.forEach(M),t.__H.__h=[]}catch(e){return t.__H.__h=[],r.options.__e(e,t.__v),!0}})),P=[]}function R(t){"function"==typeof t.u&&t.u()}function M(t){t.u=t.__()}function I(t,e){for(var n in e)t[n]=e[n];return t}function F(t,e){for(var n in t)if("__source"!==n&&!(n in e))return!0;for(var r in e)if("__source"!==r&&t[r]!==e[r])return!0;return!1}r.options.__r=function(t){x&&x(t),0;var e=t.__c.__H;e&&(e.__h.forEach(R),e.__h.forEach(M),e.__h=[])},r.options.diffed=function(t){A&&A(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(1!==P.push(e)&&E===r.options.requestAnimationFrame||((E=r.options.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);"undefined"!=typeof window&&(e=requestAnimationFrame(n))})(L))},r.options.__c=function(t,e){e.some((function(t){try{t.__h.forEach(R),t.__h=t.__h.filter((function(t){return!t.__||M(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],r.options.__e(n,t.__v)}})),T&&T(t,e)},r.options.unmount=function(t){U&&U(t);var e=t.__c;if(e&&e.__H)try{e.__H.__.forEach(R)}catch(t){r.options.__e(t,e.__v)}};!function(t){var e,n;function r(e){var n;return(n=t.call(this,e)||this).isPureReactComponent=!0,n}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.shouldComponentUpdate=function(t,e){return F(this.props,t)||F(this.state,e)}}(r.Component);var q=r.options.__b;r.options.__b=function(t){t.type&&t.type.t&&t.ref&&(t.props.ref=t.ref,t.ref=null),q&&q(t)};"undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref");var D=function(t,e){return t?Object(r.toChildArray)(t).reduce((function(t,n,r){return t.concat(e(n,r))}),[]):null},H=(r.toChildArray,r.options.__e);function W(t){return t&&((t=I({},t)).__c=null,t.__k=t.__k&&t.__k.map(W)),t}function z(){this.__u=0,this.o=null,this.__b=null}function B(t){var e=t.__.__c;return e&&e.u&&e.u(t)}function K(){this.i=null,this.l=null}r.options.__e=function(t,e,n){if(t.then)for(var r,o=e;o=o.__;)if((r=o.__c)&&r.__c)return r.__c(t,e.__c);H(t,e,n)},(z.prototype=new r.Component).__c=function(t,e){var n=this;null==n.o&&(n.o=[]),n.o.push(e);var r=B(n.__v),o=!1,i=function(){o||(o=!0,r?r(a):a())};e.__c=e.componentWillUnmount,e.componentWillUnmount=function(){i(),e.__c&&e.__c()};var a=function(){var t;if(!--n.__u)for(n.__v.__k[0]=n.state.u,n.setState({u:n.__b=null});t=n.o.pop();)t.forceUpdate()};n.__u++||n.setState({u:n.__b=n.__v.__k[0]}),t.then(i,i)},z.prototype.render=function(t,e){return this.__b&&(this.__v.__k[0]=W(this.__b),this.__b=null),[Object(r.createElement)(r.Component,null,e.u?null:t.children),e.u&&t.fallback]};var $=function(t,e,n){if(++n[1]===n[0]&&t.l.delete(e),t.props.revealOrder&&("t"!==t.props.revealOrder[0]||!t.l.size))for(n=t.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.i=n=n[2]}};(K.prototype=new r.Component).u=function(t){var e=this,n=B(e.__v),r=e.l.get(t);return r[0]++,function(o){var i=function(){e.props.revealOrder?(r.push(o),$(e,t,r)):o()};n?n(i):i()}},K.prototype.render=function(t){this.i=null,this.l=new Map;var e=Object(r.toChildArray)(t.children);t.revealOrder&&"b"===t.revealOrder[0]&&e.reverse();for(var n=e.length;n--;)this.l.set(e[n],this.i=[1,0,this.i]);return t.children},K.prototype.componentDidUpdate=K.prototype.componentDidMount=function(){var t=this;t.l.forEach((function(e,n){$(t,n,e)}))};!function(){function t(){}var e=t.prototype;e.getChildContext=function(){return this.props.context},e.render=function(t){return t.children}}();var G=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;r.Component.prototype.isReactComponent={};var Q="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;var V=r.options.event;function J(t,e){t["UNSAFE_"+e]&&!t[e]&&Object.defineProperty(t,e,{configurable:!1,get:function(){return this["UNSAFE_"+e]},set:function(t){this["UNSAFE_"+e]=t}})}r.options.event=function(t){V&&(t=V(t)),t.persist=function(){};var e=!1,n=!1,r=t.stopPropagation;t.stopPropagation=function(){r.call(t),e=!0};var o=t.preventDefault;return t.preventDefault=function(){o.call(t),n=!0},t.isPropagationStopped=function(){return e},t.isDefaultPrevented=function(){return n},t.nativeEvent=t};var X={configurable:!0,get:function(){return this.class}},Y=r.options.vnode;r.options.vnode=function(t){t.$$typeof=Q;var e=t.type,n=t.props;if(e){if(n.class!=n.className&&(X.enumerable="className"in n,null!=n.className&&(n.class=n.className),Object.defineProperty(n,"className",X)),"function"!=typeof e){var o,i,a;for(a in n.defaultValue&&void 0!==n.value&&(n.value||0===n.value||(n.value=n.defaultValue),delete n.defaultValue),Array.isArray(n.value)&&n.multiple&&"select"===e&&(Object(r.toChildArray)(n.children).forEach((function(t){-1!=n.value.indexOf(t.props.value)&&(t.props.selected=!0)})),delete n.value),n)if(o=G.test(a))break;if(o)for(a in i=t.props={},n)i[G.test(a)?a.replace(/[A-Z0-9]/,"-$&").toLowerCase():a]=n[a]}!function(e){var n=t.type,r=t.props;if(r&&"string"==typeof n){var o={};for(var i in r)/^on(Ani|Tra|Tou)/.test(i)&&(r[i.toLowerCase()]=r[i],delete r[i]),o[i.toLowerCase()]=i;if(o.ondoubleclick&&(r.ondblclick=r[o.ondoubleclick],delete r[o.ondoubleclick]),o.onbeforeinput&&(r.onbeforeinput=r[o.onbeforeinput],delete r[o.onbeforeinput]),o.onchange&&("textarea"===n||"input"===n.toLowerCase()&&!/^fil|che|ra/i.test(r.type))){var a=o.oninput||"oninput";r[a]||(r[a]=r[o.onchange],delete r[o.onchange])}}}(),"function"==typeof e&&!e.m&&e.prototype&&(J(e.prototype,"componentWillMount"),J(e.prototype,"componentWillReceiveProps"),J(e.prototype,"componentWillUpdate"),e.m=!0)}Y&&Y(t)};r.Fragment,r.createElement,r.createContext,r.createRef,r.Fragment,r.Component,r.Fragment;var Z=function(t){return Object(r.h)("header",null,Object(r.h)("nav",{style:"background-color: #673AB7; box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);",className:"navbar navbar-expand-sm navbar-dark justify-content-end"},Object(r.h)("span",{className:"navbar-brand"},Object(r.h)(j,null)," TaskPad"),Object(r.h)("button",{onClick:t.newListener,className:"btn shadow ml-auto mr-1 btn-light"},Object(r.h)(S,null)," Nueva tarea")))},tt=function(){function t(){}var e=t.prototype;return e.init=function(){},e.create=function(t){throw new Error("Unimplemented method!")},e.read=function(t){throw new Error("Unimplemented method!")},e.readAll=function(){throw new Error("Unimplemented method!")},e.update=function(t){throw new Error("Unimplemented method!")},e.delete=function(t){throw new Error("Unimplemented method!")},e.deleteAll=function(){throw new Error("Unimplemented method!")},t}();var et=function(t){var e,n;function r(){var e;return(e=t.call(this)||this).shortName="notepad",e.version="1.0",e.displayName="notepad",e.maxSize=65536,e}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var o=r.prototype;return o.init=function(){return new Promise(function(t,e){var n=this;return t(new Promise((function(t,e){n.db=openDatabase(n.shortName,n.version,n.displayName,n.maxSize),n.db.transaction((function(e){e.executeSql("CREATE TABLE IF NOT EXISTS task (id INTEGER PRIMARY KEY AUTOINCREMENT, body TEXT NOT NULL)"),t()}))})))}.bind(this))},o.create=function(t){return new Promise(function(e,n){var r=this;return e(new Promise((function(e,n){r.db.transaction((function(r){r.executeSql("INSERT INTO task (body) VALUES (?)",[t.body],(function(r,o){1===o.rowsAffected?e({body:t.body,id:o.insertId}):n("Not inserted")}))}),(function(t){n(t)}))})))}.bind(this))},o.read=function(t){return new Promise(function(e,n){var r=this;return e(new Promise((function(e,n){r.db.transaction((function(r){r.executeSql("SELECT * FROM task WHERE id = ?",[t],(function(t,r){1===r.rows.length?e(r.rows[0]):n("Not found")}))}),(function(t){n(t)}))})))}.bind(this))},o.readAll=function(){return new Promise(function(t,e){var n=this;return t(new Promise((function(t,e){n.db.transaction((function(e){e.executeSql("SELECT * FROM task",[],(function(e,n){for(var r=[],o=0;o<n.rows.length;o++){var i=n.rows.item(o);r.push(i)}t(r)}))}),(function(t){e(t)}))})))}.bind(this))},o.update=function(t){return new Promise(function(e,n){var r=this;return e(new Promise((function(e,n){var o=t.id,i=t.body;r.db.transaction((function(t){t.executeSql("UPDATE task SET body = ? WHERE id = ?",[i,o],(function(t,r){1===r.rowsAffected?e():n("0 rows updated")}))}),(function(t){n(t)}))})))}.bind(this))},o.delete=function(t){return new Promise(function(e,n){var r=this;return e(new Promise((function(e,n){r.db.transaction((function(r){r.executeSql("DELETE FROM task WHERE id = ?",[t],(function(t,r){1===r.rowsAffected?e():n("0 rows updated")}))}),(function(t){n(t)}))})))}.bind(this))},o.deleteAll=function(){return new Promise(function(t,e){var n=this;return t(new Promise((function(t,e){n.db.transaction((function(e){e.executeSql("DELETE FROM task",[],(function(e,n){t()}))}),(function(t){e(t)}))})))}.bind(this))},r}(tt);n("Wz0F");function nt(t){if(null==t)throw new TypeError("Cannot destructure undefined")}var rt=function(t){var e,n;function o(e){var n;return(n=t.call(this,e)||this).state={body:""},n}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var i=o.prototype;return i.render=function(t,e){var n=this;return nt(t),nt(e),Object(r.h)("div",{className:"row mb-5"},Object(r.h)("div",{className:"col-12"},Object(r.h)("div",{className:"card shadow"},Object(r.h)("div",{className:"card-body"},Object(r.h)("h5",{className:"card-title"},"Nueva tarea"),Object(r.h)("div",{className:"form-group"},Object(r.h)("textarea",{onChange:this.onBodyChanged.bind(this),placeholder:"Aqui la descripción de la tarea...",className:"card-text form-control",rows:"3"}))),Object(r.h)("div",{className:"card-footer text-right"},Object(r.h)("a",{href:"#",className:"card-link mr-1",onClick:function(){return n.props.cancelListener()}},"Cancelar "),Object(r.h)("a",{href:"#",className:"card-link",onClick:function(){return n.props.saveListener(n.state.body)}},"Guardar")))))},i.onBodyChanged=function(t){this.setState((function(e){return{body:t.target.value}}))},o}(r.Component);function ot(t){if(null==t)throw new TypeError("Cannot destructure undefined")}var it=function(t){var e,n;function o(e){var n;return(n=t.call(this,e)||this).state={editing:!1,savingChanges:!1},n.state.body=e.item.body,n.dao=new et,n}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var i=o.prototype;return i.componentDidMount=function(){return new Promise(function(t,e){return this.listener=this.props.listener,this.dao=new et,Promise.resolve(this.dao.init()).then((function(n){try{return t()}catch(t){return e(t)}}),e)}.bind(this))},i.onCancelEdit=function(){this.setState((function(t){return{editing:!1}}))},i.onEditClick=function(){this.setState((function(t){return{editing:!0}}))},i.onBodyChange=function(t){this.setState((function(e){return{body:t}}))},i.onSaveChangesClick=function(t){var e=this.state.body;this.props.listener.onSaveChangesClick(this.props.item.id,e),this.setState((function(t){return{editing:!1}}))},i.render=function(t,e){var n,o=this;ot(t),ot(e),console.log("aa"),n=this.state.editing?Object(r.h)("div",{className:"form-group"},Object(r.h)("textarea",{onInput:function(t){return o.onBodyChange(t.target.value)},className:"card-text form-control",value:this.state.body,rows:"3"})):Object(r.h)("p",{className:"card-text"},this.state.body);var i=this.state.savingChanges;return Object(r.h)("div",{className:"row mb-5"},Object(r.h)("div",{className:"col-12"},Object(r.h)("div",{className:"card shadow"},Object(r.h)("div",{className:"card-body"},Object(r.h)("h5",{className:"card-title"},"Tarea ",this.props.item.id),n),Object(r.h)("div",{className:"card-footer text-right"},Object(r.h)("div",{className:"spinner-border spinner-border-sm text-primary mr-2 "+(i?"":"d-none"),role:"status"},Object(r.h)("span",{className:"sr-only"},"Loading...")),Object(r.h)("a",{href:"#",className:"card-link "+(this.state.editing?"mr-1":"d-none"),onClick:this.onCancelEdit.bind(this)},"Cancelar "),Object(r.h)("a",{href:"#",className:"card-link "+(this.state.editing?"d-none":"mr-1"),onClick:this.onEditClick.bind(this)},"Editar "),Object(r.h)("a",{href:"#",className:"card-link "+(this.state.editing?"mr-1":"d-none"),onClick:this.onSaveChangesClick.bind(this)},"Guardar cambios "),Object(r.h)("a",{href:"#",className:"card-link",onClick:function(){return o.props.listener.onDeleteClick(o.props.id)}},"Eliminar")))))},o}(r.Component),at=n.p+"efd112ff3177456b531ae594582229f4.png";var ct=function(t){var e,n;function r(e){var n;return(n=t.call(this)||this).tableName="task_table",n.sequence="task_seq",n.conn=e,n.__restore()||(n.__save({}),n.conn.setItem(n.sequence,"0")),n}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var o=r.prototype;return o.create=function(t){return new Promise(function(e,n){var r=this.__restore(),o=this.__nextId();return r[o]={body:t.body,id:o},this.__save(r),e(r[o])}.bind(this))},o.__save=function(t){this.conn.setItem(this.tableName,JSON.stringify(t))},o.__restore=function(){return JSON.parse(this.conn.getItem(this.tableName))},o.read=function(t){return new Promise(function(e,n){return e(this.__restore()[t])}.bind(this))},o.readAll=function(){return new Promise(function(t,e){var n=this.__restore();return t(Object.values(n))}.bind(this))},o.update=function(t){return new Promise(function(e,n){var r=this.__restore();return r[t.id].body=t.body,this.__save(r),e()}.bind(this))},o.__nextId=function(){var t=Number(this.conn.getItem(this.sequence)),e=++t;return this.conn.setItem(this.sequence,e.toString()),e},o.delete=function(t){return new Promise(function(e,n){var r=this.__restore();return delete r[t],this.__save(r),e()}.bind(this))},o.deleteAll=function(){this.__save({}),this.conn.setItem(this.sequence,"0")},r}(tt);var st=function(t){var e,n;function o(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).state={tasks:[],creatingNewTask:!1},e}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var i=o.prototype;return i.componentDidMount=function(){return new Promise(function(t,e){var n,r;if(n=this,this.itemListener={onSaveChangesClick:function(t,e){return new Promise((function(r,o){return Promise.resolve(n.dao.update({id:t,body:e})).then((function(t){try{return r()}catch(t){return o(t)}}),o)}))},onDeleteClick:function(t){return new Promise((function(e,r){return Promise.resolve(n.dao.delete(t)).then((function(o){try{return n.setState((function(e){return{tasks:e.tasks.filter((function(e){return e.id!==t}))}})),e()}catch(t){return r(t)}}),r)}))},onEditClick:function(){}},"undefined"!=typeof window)return this.dao=new ct(window.localStorage),Promise.resolve(this.dao.init()).then(function(t){try{return Promise.resolve(this.dao.readAll()).then(function(t){try{return r=t,this.setState({tasks:r}),o.call(this)}catch(t){return e(t)}}.bind(this),e)}catch(t){return e(t)}}.bind(this),e);function o(){return t()}return o.call(this)}.bind(this))},i.render=function(){var t=this,e="";this.state.creatingNewTask&&(e=Object(r.h)("div",{className:"col-10 offset-1"},Object(r.h)(rt,{cancelListener:this.onNewTaskCancelClick.bind(this),saveListener:this.onNewTaskSaveClick.bind(this)})));var n,o=this.state.tasks.map((function(e,n){return Object(r.h)("div",{className:"col-10 offset-1"},Object(r.h)(it,{key:e.id,id:e.id,listener:t.itemListener,item:e}))}));return n=0===o.length&&!this.state.creatingNewTask?Object(r.h)("div",null,Object(r.h)("div",{className:"row d-flex justify-content-center"},Object(r.h)("img",{className:"col-4 offset-4 img-fluid",src:at})),Object(r.h)("h2",{className:"text-center"},"No hay ninguna tarea guardada")):Object(r.h)("div",{className:style.profile},Object(r.h)("div",{className:"row"},e,o)),Object(r.h)("div",{id:"app"},Object(r.h)(Z,{newListener:this.onNewTaskClick.bind(this)}),n)},i.onNewTaskCancelClick=function(){this.setState((function(t){return{creatingNewTask:!1,newTask:{}}}))},i.onNewTaskSaveClick=function(t){return new Promise(function(e,n){var r;return Promise.resolve(this.dao.create({body:t})).then(function(t){try{return r=t,this.setState((function(t){return{creatingNewTask:!1,tasks:[].concat(t.tasks,[r]),deleteAllEnabled:!0}})),e()}catch(t){return n(t)}}.bind(this),n)}.bind(this))},i.onNewTaskClick=function(){this.state.creatingNewTask||this.setState((function(t){return{creatingNewTask:!0}}))},o}(r.Component);e.default=st},Wz0F:function(t,e,n){}});
//# sourceMappingURL=ssr-bundle.js.map