module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/preact-taskpad/",n(n.s="QfWi")}({DnIH:function(t,e,n){},HteQ:function(t,e){t.exports=require("preact")},QfWi:function(t,e,n){"use strict";n.r(e);n("DnIH");var r=n("cJmp");e.default=r.a},SW5g:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("HteQ");n("Wz0F");function o(t){if(null==t)throw new TypeError("Cannot destructure undefined")}var i=function(t){var e,n;function i(e){var n;return(n=t.call(this,e)||this).state={body:""},n}n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var a=i.prototype;return a.render=function(t,e){var n=this;return o(t),o(e),Object(r.h)("div",{className:"row mb-5"},Object(r.h)("div",{className:"col-12"},Object(r.h)("div",{className:"card shadow"},Object(r.h)("div",{className:"card-body"},Object(r.h)("h5",{className:"card-title"},"Nueva tarea"),Object(r.h)("div",{className:"form-group"},Object(r.h)("textarea",{onChange:function(t){return n.onChange(t)},placeholder:"Aqui la descripción de la tarea...",className:(this.state.error?"is-invalid":"")+" card-text form-control",rows:"5"}),Object(r.h)("div",{className:"invalid-feedback"},"El contenido de la tarea no puede quedar en blanco"))),Object(r.h)("div",{className:"card-footer text-right"},Object(r.h)("a",{href:"#",className:"card-link mr-1",onClick:this.props.cancelListener},"Cancelar "),Object(r.h)("a",{href:"#",className:"card-link",onClick:this.onSaveClick.bind(this)},"Guardar")))))},a.onChange=function(t){var e=t.target.value;this.setState((function(t){return{body:e}}))},a.onSaveClick=function(){var t=this.state.body;0!==t.trim().length?this.props.saveListener(t):this.setState((function(t){return{error:!0}}))},i}(r.Component),a=n.p+"efd112ff3177456b531ae594582229f4.png";n("l8WD");function s(t){if(null==t)throw new TypeError("Cannot destructure undefined")}var c=function(t){var e,n;function o(e){var n;return(n=t.call(this,e)||this).state={editing:!1,body:n.props.item.body,error:!1,savingChanges:!1},n}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var i=o.prototype;return i.onCancelEdit=function(){var t=this;this.setState((function(e){return{editing:!1,body:t.props.item.body,error:!1}}))},i.onEditClick=function(){this.setState((function(t){return{editing:!0}}))},i.onSaveChangesClick=function(){var t=this.state.body;0!==t.trim().length?(this.setState((function(t){return{editing:!1}})),this.props.onSaveChangesListener(this.props.item.id,this.props.idx,t)):this.setState((function(t){return{error:!0}}))},i.render=function(t,e){var n,o=this;s(t),s(e),n=this.state.editing?Object(r.h)("div",{className:"form-group"},Object(r.h)("textarea",{onChange:function(t){return o.onBodyChange(t)},className:(this.state.error?"is-invalid":"")+" card-text form-control",value:this.state.body,rows:"5"}),Object(r.h)("div",{className:"invalid-feedback"},"El contenido de la tarea no puede quedar en blanco")):Object(r.h)("p",{className:"card-text"},this.state.body);var i=this.state.savingChanges;return Object(r.h)("div",{className:"row mb-5"},Object(r.h)("div",{className:"col-12"},Object(r.h)("div",{className:"card shadow"},Object(r.h)("div",{className:"card-body"},Object(r.h)("h5",{className:"card-title"},"Tarea ",this.props.item.id),n),Object(r.h)("div",{className:"card-footer text-right"},Object(r.h)("div",{className:"spinner-border spinner-border-sm text-primary mr-2 "+(i?"":"d-none"),role:"status"},Object(r.h)("span",{className:"sr-only"},"Loading...")),Object(r.h)("a",{href:"#",className:"card-link "+(this.state.editing?"mr-1":"d-none"),onClick:function(t){return o.onCancelEdit(t)}},"Cancelar "),Object(r.h)("a",{href:"#",className:"card-link "+(this.state.editing?"d-none":"mr-1"),onClick:function(t){return o.onEditClick(t)}},"Editar "),Object(r.h)("a",{href:"#",className:"card-link "+(this.state.editing?"mr-1":"d-none"),onClick:function(t){return o.onSaveChangesClick(t)}},"Guardar cambios "),Object(r.h)("a",{href:"#",className:"card-link",onClick:function(){return o.props.onDeleteListener(o.props.id)}},"Eliminar")))))},i.onBodyChange=function(t){var e=t.target.value;this.setState((function(t){return{body:e}}))},o}(r.Component);var u=function(t){var e,n;function o(e){var n;return(n=t.call(this,e)||this).state={tasks:[]},n.onSaveChangesClick=function(t,e,r){return new Promise((function(o,i){return Promise.resolve(n.props.dao.update({id:t,idx:e,body:r})).then((function(a){try{return n.setState((function(n){return{tasks:n.tasks.splice(e,1,{id:t,body:r})}})),o()}catch(t){return i(t)}}),i)}))},n.onDeleteClick=function(t){return new Promise((function(e,r){return Promise.resolve(n.props.dao.delete(t)).then((function(o){try{return n.setState((function(e){return{tasks:e.tasks.filter((function(e){return e.id!==t}))}})),e()}catch(t){return r(t)}}),r)}))},n}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var s=o.prototype;return s.componentDidUpdate=function(t,e,n){return new Promise(function(e,n){var r;return t.dao?e():Promise.resolve(this.props.dao.readAll()).then(function(t){try{return r=t,this.setState((function(t){return{tasks:r}})),e()}catch(t){return n(t)}}.bind(this),n)}.bind(this))},s.render=function(){var t=this,e="";this.props.creatingNewTask&&(e=Object(r.h)("div",{className:"col-10 offset-1"},Object(r.h)(i,{cancelListener:this.onNewTaskCancelClick.bind(this),saveListener:this.onNewTaskSaveClick.bind(this)})));var n,o=this.state.tasks.map((function(e,n){return Object(r.h)("div",{className:"col-10 offset-1"},Object(r.h)(c,{key:e.id,id:e.id,idx:n,onSaveChangesListener:t.onSaveChangesClick.bind(t),onDeleteListener:t.onDeleteClick.bind(t),item:e}))}));return n=0===o.length&&!this.props.creatingNewTask?[Object(r.h)("div",{className:"row d-flex justify-content-center align-items-center"},Object(r.h)("img",{alt:"Lista vacía",className:"col-lg-4 col-md-8 col-sm-10 img-fluid",src:a})),Object(r.h)("h2",{className:"text-center"},"No hay ninguna tarea guardada")]:Object(r.h)("div",{className:"row"},e,o),Object(r.h)("div",{className:"container-fluid"},n)},s.onNewTaskCancelClick=function(){this.props.onNewTaskDoneListener()},s.onNewTaskSaveClick=function(t){return new Promise(function(e,n){var r;return Promise.resolve(this.props.dao.create({body:t})).then(function(t){try{return r=t,this.props.onNewTaskDoneListener(),this.setState((function(t){return{tasks:[].concat(t.tasks,[r])}})),e()}catch(t){return n(t)}}.bind(this),n)}.bind(this))},o}(r.Component)},W7yo:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=function(){function t(){}var e=t.prototype;return e.init=function(){},e.create=function(t){return new Promise((function(t,e){return e(new Error("Unimplemented method!"))}))},e.read=function(t){return new Promise((function(t,e){return e(new Error("Unimplemented method!"))}))},e.readAll=function(){return new Promise((function(t,e){return e(new Error("Unimplemented method!"))}))},e.update=function(t){return new Promise((function(t,e){return e(new Error("Unimplemented method!"))}))},e.delete=function(t){return new Promise((function(t,e){return e(new Error("Unimplemented method!"))}))},e.deleteAll=function(){return new Promise((function(t,e){return e(new Error("Unimplemented method!"))}))},t}();var o=function(t){var e,n;function r(){var e;return(e=t.call(this)||this).shortName="notepad",e.version="1.0",e.initiated=!1,e.displayName="notepad",e.maxSize=65536,e}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var o=r.prototype;return o.init=function(){return new Promise(function(t,e){var n=this;return this.initiated?t(Promise.resolve()):t(new Promise((function(t,e){n.db=openDatabase(n.shortName,n.version,n.displayName,n.maxSize),n.db.transaction((function(t){t.executeSql("CREATE TABLE IF NOT EXISTS task (id INTEGER PRIMARY KEY AUTOINCREMENT, body TEXT NOT NULL)")}),(function(t){e()}),(function(){n.initiated=!0,t()}))})))}.bind(this))},o.create=function(t){return new Promise(function(e,n){var r=this;return e(new Promise((function(e,n){r.db.transaction((function(r){r.executeSql("INSERT INTO task (body) VALUES (?)",[t.body],(function(r,o){1===o.rowsAffected?e({body:t.body,id:o.insertId}):n("Not inserted")}))}),(function(t){n(t)}))})))}.bind(this))},o.read=function(t){return new Promise(function(e,n){var r=this;return e(new Promise((function(e,n){r.db.transaction((function(r){r.executeSql("SELECT * FROM task WHERE id = ?",[t],(function(t,r){1===r.rows.length?e(r.rows[0]):n("Not found")}))}),(function(t){n(t)}))})))}.bind(this))},o.readAll=function(){return new Promise(function(t,e){var n=this;return t(new Promise((function(t,e){n.db.transaction((function(e){e.executeSql("SELECT * FROM task",[],(function(e,n){for(var r=[],o=0;o<n.rows.length;o++){var i=n.rows.item(o);r.push(i)}t(r)}))}),(function(t){e(t)}))})))}.bind(this))},o.update=function(t){return new Promise(function(e,n){var r=this;return e(new Promise((function(e,n){var o=t.id,i=t.body;r.db.transaction((function(t){t.executeSql("UPDATE task SET body = ? WHERE id = ?",[i,o],(function(t,r){1===r.rowsAffected?e():n("0 rows updated")}))}),(function(t){n(t)}))})))}.bind(this))},o.delete=function(t){return new Promise(function(e,n){var r=this;return e(new Promise((function(e,n){r.db.transaction((function(r){r.executeSql("DELETE FROM task WHERE id = ?",[t],(function(t,r){1===r.rowsAffected?e():n("0 rows updated")}))}),(function(t){n(t)}))})))}.bind(this))},o.deleteAll=function(){return new Promise(function(t,e){var n=this;return t(new Promise((function(t,e){n.db.transaction((function(e){e.executeSql("DELETE FROM task",[],(function(e,n){t()}))}),(function(t){e(t)}))})))}.bind(this))},r}(r);var i=function(t){var e,n;function r(e){var n;return(n=t.call(this)||this).tableName="task_table",n.initiated=!1,n.sequence="task_seq",n.conn=e,n}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var o=r.prototype;return o.init=function(){this.initiated||(this.__restore()||(this.__save({}),this.conn.setItem(this.sequence,"0")),this.initiated=!0)},o.create=function(t){var e=this.__restore(),n=this.__nextId();return e[n]={body:t.body,id:n},this.__save(e),e[n]},o.__save=function(t){this.conn.setItem(this.tableName,JSON.stringify(t))},o.__restore=function(){return JSON.parse(this.conn.getItem(this.tableName))},o.read=function(t){return this.__restore()[t]},o.readAll=function(){var t=this.__restore();return Object.values(t)},o.update=function(t){var e=this.__restore();e[t.id].body=t.body,this.__save(e)},o.__nextId=function(){var t=Number(this.conn.getItem(this.sequence)),e=++t;return this.conn.setItem(this.sequence,e.toString()),e},o.delete=function(t){var e=this.__restore();delete e[t],this.__save(e)},o.deleteAll=function(){this.__save({}),this.conn.setItem(this.sequence,"0")},r}(r);var a=function(t){var e,n;function r(e){var n;return(n=t.call(this)||this).tableName="task_table",n.initiated=!1,n.sequence="task_seq",n.conn=e,n}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var o=r.prototype;return o.init=function(){this.initiated||(this.__restore()||(this.__save({}),this.conn.setItem(this.sequence,"0")),this.initiated=!0)},o.create=function(t){var e=this.__restore(),n=this.__nextId();return e[n]={body:t.body,id:n},this.__save(e),e[n]},o.__save=function(t){this.conn.setItem(this.tableName,JSON.stringify(t))},o.__restore=function(){return JSON.parse(this.conn.getItem(this.tableName))},o.read=function(t){return this.__restore()[t]},o.readAll=function(){var t=this.__restore();return Object.values(t)},o.update=function(t){var e=this.__restore();e[t.id].body=t.body,this.__save(e)},o.__nextId=function(){var t=Number(this.conn.getItem(this.sequence)),e=++t;return this.conn.setItem(this.sequence,e.toString()),e},o.delete=function(t){var e=this.__restore();delete e[t],this.__save(e)},o.deleteAll=function(){this.__save({}),this.conn.setItem(this.sequence,"0")},r}(r),s=new Promise((function(t,e){var n;n="undefined"!=typeof window?window.openDatabase?new o:window.localStorage?new i(window.localStorage):new a:new a;var r=function(n){try{return t(new a)}catch(t){return e(t)}};try{return Promise.resolve(n.init()).then((function(o){try{return function(){try{return t(n)}catch(t){return e(t)}}()}catch(t){return r()}}),r)}catch(t){r()}}))},Wz0F:function(t,e,n){},X3rF:function(t,e,n){"use strict";(function(t){var r=n("g+w6"),o=n("zkEH");n("l8WD");e.a=function(e){return t("header",null,t("nav",{style:"background-color: #673AB7; box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);",className:"navbar mb-5 navbar-expand-sm navbar-dark justify-content-end"},t("span",{className:"navbar-brand"},t(r.a,null)," TaskPad"),t("button",{onClick:e.newListener,className:"btn shadow ml-auto mr-1 btn-light"},t(o.a,null)," Nueva tarea")))}}).call(this,n("HteQ").h)},cJmp:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return s}));var r=n("HteQ"),o=n("X3rF"),i=(n("l8WD"),n("SW5g")),a=n("W7yo");var s=function(e){var n,r;function s(t){return e.call(this,t)||this}r=e,(n=s).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r;var c=s.prototype;return c.componentDidMount=function(){return new Promise(function(t,e){var n;return Promise.resolve(a.a).then(function(r){try{return n=r,this.setState((function(t){return{dao:n}})),t()}catch(t){return e(t)}}.bind(this),e)}.bind(this))},c.render=function(){return t("div",{id:"app"},t(o.a,{newListener:this.onNewTaskClick.bind(this)}),t(i.a,{creatingNewTask:this.state.creatingNewTask,cancelNewTaskListener:this.onNewTaskClick.bind(this),onNewTaskDoneListener:this.onNewTaskDone.bind(this),dao:this.state.dao}))},c.onNewTaskDone=function(){this.setState((function(t){return{creatingNewTask:!1}}))},c.onNewTaskClick=function(){this.state.creatingNewTask||this.setState((function(t){return{creatingNewTask:!0}}))},s}(r.Component)}).call(this,n("HteQ").h)},"g+w6":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("HteQ");function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var i=function(t){var e=t.color||"currentColor",n=t.size||24;return delete t.color,delete t.size,Object(r.h)("svg",o({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:e,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},t),Object(r.h)("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),Object(r.h)("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"}))}},l8WD:function(t,e,n){"use strict";var r,o=n("HteQ"),i=[],a=o.options.__r,s=o.options.diffed,c=o.options.__c,u=o.options.unmount;function l(){i.some((function(t){if(t.__P)try{t.__H.__h.forEach(f),t.__H.__h.forEach(d),t.__H.__h=[]}catch(e){return t.__H.__h=[],o.options.__e(e,t.__v),!0}})),i=[]}function f(t){"function"==typeof t.u&&t.u()}function d(t){t.u=t.__()}function h(t,e){for(var n in e)t[n]=e[n];return t}function p(t,e){for(var n in t)if("__source"!==n&&!(n in e))return!0;for(var r in e)if("__source"!==r&&t[r]!==e[r])return!0;return!1}o.options.__r=function(t){a&&a(t),0;var e=t.__c.__H;e&&(e.__h.forEach(f),e.__h.forEach(d),e.__h=[])},o.options.diffed=function(t){s&&s(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(1!==i.push(e)&&r===o.options.requestAnimationFrame||((r=o.options.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);"undefined"!=typeof window&&(e=requestAnimationFrame(n))})(l))},o.options.__c=function(t,e){e.some((function(t){try{t.__h.forEach(f),t.__h=t.__h.filter((function(t){return!t.__||d(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],o.options.__e(n,t.__v)}})),c&&c(t,e)},o.options.unmount=function(t){u&&u(t);var e=t.__c;if(e&&e.__H)try{e.__H.__.forEach(f)}catch(t){o.options.__e(t,e.__v)}};!function(t){var e,n;function r(e){var n;return(n=t.call(this,e)||this).isPureReactComponent=!0,n}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.shouldComponentUpdate=function(t,e){return p(this.props,t)||p(this.state,e)}}(o.Component);var _=o.options.__b;o.options.__b=function(t){t.type&&t.type.t&&t.ref&&(t.props.ref=t.ref,t.ref=null),_&&_(t)};"undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref");var v=function(t,e){return t?Object(o.toChildArray)(t).reduce((function(t,n,r){return t.concat(e(n,r))}),[]):null},m=(o.toChildArray,o.options.__e);function b(t){return t&&((t=h({},t)).__c=null,t.__k=t.__k&&t.__k.map(b)),t}function y(){this.__u=0,this.o=null,this.__b=null}function w(t){var e=t.__.__c;return e&&e.u&&e.u(t)}function g(){this.i=null,this.l=null}o.options.__e=function(t,e,n){if(t.then)for(var r,o=e;o=o.__;)if((r=o.__c)&&r.__c)return r.__c(t,e.__c);m(t,e,n)},(y.prototype=new o.Component).__c=function(t,e){var n=this;null==n.o&&(n.o=[]),n.o.push(e);var r=w(n.__v),o=!1,i=function(){o||(o=!0,r?r(a):a())};e.__c=e.componentWillUnmount,e.componentWillUnmount=function(){i(),e.__c&&e.__c()};var a=function(){var t;if(!--n.__u)for(n.__v.__k[0]=n.state.u,n.setState({u:n.__b=null});t=n.o.pop();)t.forceUpdate()};n.__u++||n.setState({u:n.__b=n.__v.__k[0]}),t.then(i,i)},y.prototype.render=function(t,e){return this.__b&&(this.__v.__k[0]=b(this.__b),this.__b=null),[Object(o.createElement)(o.Component,null,e.u?null:t.children),e.u&&t.fallback]};var k=function(t,e,n){if(++n[1]===n[0]&&t.l.delete(e),t.props.revealOrder&&("t"!==t.props.revealOrder[0]||!t.l.size))for(n=t.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.i=n=n[2]}};(g.prototype=new o.Component).u=function(t){var e=this,n=w(e.__v),r=e.l.get(t);return r[0]++,function(o){var i=function(){e.props.revealOrder?(r.push(o),k(e,t,r)):o()};n?n(i):i()}},g.prototype.render=function(t){this.i=null,this.l=new Map;var e=Object(o.toChildArray)(t.children);t.revealOrder&&"b"===t.revealOrder[0]&&e.reverse();for(var n=e.length;n--;)this.l.set(e[n],this.i=[1,0,this.i]);return t.children},g.prototype.componentDidUpdate=g.prototype.componentDidMount=function(){var t=this;t.l.forEach((function(e,n){k(t,n,e)}))};!function(){function t(){}var e=t.prototype;e.getChildContext=function(){return this.props.context},e.render=function(t){return t.children}}();var N=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;o.Component.prototype.isReactComponent={};var O="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;var C=o.options.event;function j(t,e){t["UNSAFE_"+e]&&!t[e]&&Object.defineProperty(t,e,{configurable:!1,get:function(){return this["UNSAFE_"+e]},set:function(t){this["UNSAFE_"+e]=t}})}o.options.event=function(t){C&&(t=C(t)),t.persist=function(){};var e=!1,n=!1,r=t.stopPropagation;t.stopPropagation=function(){r.call(t),e=!0};var o=t.preventDefault;return t.preventDefault=function(){o.call(t),n=!0},t.isPropagationStopped=function(){return e},t.isDefaultPrevented=function(){return n},t.nativeEvent=t};var S={configurable:!0,get:function(){return this.class}},E=o.options.vnode;o.options.vnode=function(t){t.$$typeof=O;var e=t.type,n=t.props;if(e){if(n.class!=n.className&&(S.enumerable="className"in n,null!=n.className&&(n.class=n.className),Object.defineProperty(n,"className",S)),"function"!=typeof e){var r,i,a;for(a in n.defaultValue&&void 0!==n.value&&(n.value||0===n.value||(n.value=n.defaultValue),delete n.defaultValue),Array.isArray(n.value)&&n.multiple&&"select"===e&&(Object(o.toChildArray)(n.children).forEach((function(t){-1!=n.value.indexOf(t.props.value)&&(t.props.selected=!0)})),delete n.value),n)if(r=N.test(a))break;if(r)for(a in i=t.props={},n)i[N.test(a)?a.replace(/[A-Z0-9]/,"-$&").toLowerCase():a]=n[a]}!function(e){var n=t.type,r=t.props;if(r&&"string"==typeof n){var o={};for(var i in r)/^on(Ani|Tra|Tou)/.test(i)&&(r[i.toLowerCase()]=r[i],delete r[i]),o[i.toLowerCase()]=i;if(o.ondoubleclick&&(r.ondblclick=r[o.ondoubleclick],delete r[o.ondoubleclick]),o.onbeforeinput&&(r.onbeforeinput=r[o.onbeforeinput],delete r[o.onbeforeinput]),o.onchange&&("textarea"===n||"input"===n.toLowerCase()&&!/^fil|che|ra/i.test(r.type))){var a=o.oninput||"oninput";r[a]||(r[a]=r[o.onchange],delete r[o.onchange])}}}(),"function"==typeof e&&!e.m&&e.prototype&&(j(e.prototype,"componentWillMount"),j(e.prototype,"componentWillReceiveProps"),j(e.prototype,"componentWillUpdate"),e.m=!0)}E&&E(t)};o.Fragment,o.createElement,o.createContext,o.createRef,o.Fragment,o.Component,o.Fragment},zkEH:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("HteQ");function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var i=function(t){var e=t.color||"currentColor",n=t.size||24;return delete t.color,delete t.size,Object(r.h)("svg",o({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:e,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},t),Object(r.h)("path",{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"}))}}});
//# sourceMappingURL=ssr-bundle.js.map