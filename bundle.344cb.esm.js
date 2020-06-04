!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(t){return e[t]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/preact-taskpad/",t(t.s="mdyV")}({DnIH:function(){},QfWi:function(e,t,n){"use strict";n.r(t),n("DnIH");var o=n("cJmp");t.default=o.a},SW5g:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n("hosL");n("Wz0F");class r extends o.Component{constructor(e){super(e),this.state={body:""}}render({},{}){return Object(o.h)("div",{className:"row mb-5"},Object(o.h)("div",{className:"col-12"},Object(o.h)("div",{className:"card shadow"},Object(o.h)("div",{className:"card-body"},Object(o.h)("h5",{className:"card-title"},"Nueva tarea"),Object(o.h)("div",{className:"form-group"},Object(o.h)("textarea",{onChange:e=>this.onChange(e),placeholder:"Aqui la descripción de la tarea...",className:(this.state.error?"is-invalid":"")+" card-text form-control",rows:"5"}),Object(o.h)("div",{className:"invalid-feedback"},"El contenido de la tarea no puede quedar en blanco"))),Object(o.h)("div",{className:"card-footer text-right"},Object(o.h)("a",{href:"#",className:"card-link mr-1",onClick:this.props.cancelListener},"Cancelar "),Object(o.h)("a",{href:"#",className:"card-link",onClick:this.onSaveClick.bind(this)},"Guardar")))))}onChange(e){const t=e.target.value;this.setState(()=>({body:t}))}onSaveClick(){const e=this.state.body;0!==e.trim().length?this.props.saveListener(e):this.setState(()=>({error:!0}))}}var i=n.p+"efd112ff3177456b531ae594582229f4.png";n("l8WD");class s extends o.Component{constructor(e){super(e),this.state={editing:!1,body:this.props.item.body,error:!1,savingChanges:!1}}onCancelEdit(){this.setState(()=>({editing:!1,body:this.props.item.body,error:!1}))}onEditClick(){this.setState(()=>({editing:!0}))}onSaveChangesClick(){const e=this.state.body;0!==e.trim().length?(this.setState(()=>({editing:!1})),this.props.onSaveChangesListener(this.props.item.id,this.props.idx,e)):this.setState(()=>({error:!0}))}render({},{}){let e;e=this.state.editing?Object(o.h)("div",{className:"form-group"},Object(o.h)("textarea",{onChange:e=>this.onBodyChange(e),className:(this.state.error?"is-invalid":"")+" card-text form-control",value:this.state.body,rows:"5"}),Object(o.h)("div",{className:"invalid-feedback"},"El contenido de la tarea no puede quedar en blanco")):Object(o.h)("p",{className:"card-text"},this.state.body);const t=this.state.savingChanges;return Object(o.h)("div",{className:"row mb-5"},Object(o.h)("div",{className:"col-12"},Object(o.h)("div",{className:"card shadow"},Object(o.h)("div",{className:"card-body"},Object(o.h)("h5",{className:"card-title"},"Tarea ",this.props.item.id),e),Object(o.h)("div",{className:"card-footer text-right"},Object(o.h)("div",{className:"spinner-border spinner-border-sm text-primary mr-2 "+(t?"":"d-none"),role:"status"},Object(o.h)("span",{className:"sr-only"},"Loading...")),Object(o.h)("a",{href:"#",className:"card-link "+(this.state.editing?"mr-1":"d-none"),onClick:e=>this.onCancelEdit(e)},"Cancelar "),Object(o.h)("a",{href:"#",className:"card-link "+(this.state.editing?"d-none":"mr-1"),onClick:e=>this.onEditClick(e)},"Editar "),Object(o.h)("a",{href:"#",className:"card-link "+(this.state.editing?"mr-1":"d-none"),onClick:e=>this.onSaveChangesClick(e)},"Guardar cambios "),Object(o.h)("a",{href:"#",className:"card-link",onClick:()=>this.props.onDeleteListener(this.props.id)},"Eliminar")))))}onBodyChange(e){const t=e.target.value;this.setState(()=>({body:t}))}}class a extends o.Component{constructor(e){var t;super(e),t=this,this.state={tasks:[]},this.onSaveChangesClick=async function(e,n,o){await t.props.dao.update({id:e,body:o}),t.setState(t=>(t.tasks[n]={id:e,body:o},{tasks:t.tasks}))},this.onDeleteClick=async function(e){await t.props.dao.delete(e),t.setState(t=>({tasks:t.tasks.filter(t=>t.id!==e)}))}}async componentDidUpdate(e,t,n){if(e.dao)return;const o=await this.props.dao.readAll();this.setState(()=>({tasks:o}))}render(){let e="";this.props.creatingNewTask&&(e=Object(o.h)("div",{className:"col-10 offset-1"},Object(o.h)(r,{cancelListener:this.onNewTaskCancelClick.bind(this),saveListener:this.onNewTaskSaveClick.bind(this)})));const t=this.state.tasks.map((e,t)=>Object(o.h)("div",{className:"col-10 offset-1"},Object(o.h)(s,{key:e.id,id:e.id,idx:t,onSaveChangesListener:this.onSaveChangesClick.bind(this),onDeleteListener:this.onDeleteClick.bind(this),item:e})));let n;return n=0!==t.length||this.props.creatingNewTask?Object(o.h)("div",{className:"row"},e,t):[Object(o.h)("div",{className:"row d-flex justify-content-center align-items-center"},Object(o.h)("img",{alt:"Lista vacía",className:"col-lg-4 col-md-8 col-sm-10 img-fluid",src:i})),Object(o.h)("h2",{className:"text-center"},"No hay ninguna tarea guardada")],Object(o.h)("div",{className:"container-fluid"},n)}onNewTaskCancelClick(){this.props.onNewTaskDoneListener()}async onNewTaskSaveClick(e){const t=await this.props.dao.create({body:e});this.props.onNewTaskDoneListener(),this.setState(e=>({tasks:[...e.tasks,t]}))}}},W7yo:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));class o{init(){}async create(e){throw new Error("Unimplemented method!")}async read(e){throw new Error("Unimplemented method!")}async readAll(){throw new Error("Unimplemented method!")}async update(e){throw new Error("Unimplemented method!")}async delete(e){throw new Error("Unimplemented method!")}async deleteAll(){throw new Error("Unimplemented method!")}}class r extends o{constructor(){super(),this.shortName="notepad",this.version="1.0",this.initiated=!1,this.displayName="notepad",this.maxSize=65536}async init(){return this.initiated?Promise.resolve():new Promise((e,t)=>{openDatabase(this.shortName,this.version,this.displayName,this.maxSize,n=>{null===n&&t(),this.db=n,this.db.transaction(e=>{e.executeSql("CREATE TABLE IF NOT EXISTS task (id INTEGER PRIMARY KEY AUTOINCREMENT, body TEXT NOT NULL)")},()=>{t()},()=>{this.initiated=!0,e()})})})}async create(e){return new Promise((t,n)=>{this.db.transaction(o=>{o.executeSql("INSERT INTO task (body) VALUES (?)",[e.body],(o,r)=>{1===r.rowsAffected?t({body:e.body,id:r.insertId}):n("Not inserted")})},e=>{n(e)})})}async read(e){return new Promise((t,n)=>{this.db.transaction(o=>{o.executeSql("SELECT * FROM task WHERE id = ?",[e],(e,o)=>{1===o.rows.length?t(o.rows[0]):n("Not found")})},e=>{n(e)})})}async readAll(){return new Promise((e,t)=>{this.db.transaction(t=>{t.executeSql("SELECT * FROM task",[],(t,n)=>{const o=[];for(let e=0;e<n.rows.length;e++){const t=n.rows.item(e);o.push(t)}e(o)})},e=>{t(e)})})}async update(e){return new Promise((t,n)=>{const o=e.id,r=e.body;this.db.transaction(e=>{e.executeSql("UPDATE task SET body = ? WHERE id = ?",[r,o],(e,o)=>{1===o.rowsAffected?t():n("0 rows updated")})},e=>{n(e)})})}async delete(e){return new Promise((t,n)=>{this.db.transaction(o=>{o.executeSql("DELETE FROM task WHERE id = ?",[e],(e,o)=>{1===o.rowsAffected?t():n("0 rows updated")})},e=>{n(e)})})}async deleteAll(){return new Promise((e,t)=>{this.db.transaction(t=>{t.executeSql("DELETE FROM task",[],()=>{e()})},e=>{t(e)})})}}class i extends o{constructor(e){super(),this.tableName="task_table",this.initiated=!1,this.sequence="task_seq",this.conn=e}init(){this.initiated||(this.__restore()||(this.__save({}),this.conn.setItem(this.sequence,"0")),this.initiated=!0)}create(e){let t=this.__restore();const n=this.__nextId();return t[n]={body:e.body,id:n},this.__save(t),t[n]}__save(e){this.conn.setItem(this.tableName,JSON.stringify(e))}__restore(){return JSON.parse(this.conn.getItem(this.tableName))}read(e){return this.__restore()[e]}readAll(){const e=this.__restore();return Object.values(e)}update(e){const t=this.__restore();t[e.id].body=e.body,this.__save(t)}__nextId(){let e=Number(this.conn.getItem(this.sequence));const t=++e;return this.conn.setItem(this.sequence,t.toString()),t}delete(e){const t=this.__restore();delete t[e],this.__save(t)}deleteAll(){this.__save({}),this.conn.setItem(this.sequence,"0")}}class s extends o{constructor(){super(),this.tableName="task_table",this.initiated=!1,this.sequence="task_seq",this.tasks={},this.sequence=0}init(){this.initiated||(this.__restore()||(this.__save({}),this.sequence=0),this.initiated=!0)}create(e){let t=this.__restore();const n=this.__nextId();return t[n]={body:e.body,id:n},this.__save(t),t[n]}__save(e){this.tasks=e}__restore(){return this.tasks}read(e){return this.__restore()[e]}readAll(){const e=this.__restore();return Object.values(e)}update(e){const t=this.__restore();t[e.id].body=e.body,this.__save(t)}__nextId(){let e=this.sequence;const t=++e;return this.sequence=t,t}delete(e){const t=this.__restore();delete t[e],this.__save(t)}deleteAll(){this.__save({}),this.sequence=0}}const a=(async()=>{let e;e="undefined"!=typeof window?window.openDatabase?new r:window.localStorage?new i(window.localStorage):new s:new s;try{await e.init()}catch(e){return new s}return e})()},Wz0F:function(){},X3rF:function(e,t,n){"use strict";(function(e){var o=n("g+w6"),r=n("zkEH");n("l8WD"),t.a=t=>e("header",null,e("nav",{style:"background-color: #673AB7; box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);",className:"navbar mb-5 navbar-expand-sm navbar-dark justify-content-end"},e("span",{className:"navbar-brand"},e(o.a,null)," TaskPad"),e("button",{onClick:t.newListener,className:"btn shadow ml-auto mr-1 btn-light"},e(r.a,null)," Añadir nueva tarea")))}).call(this,n("hosL").h)},cJmp:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return a}));var o=n("hosL"),r=n("X3rF"),i=(n("l8WD"),n("SW5g")),s=n("W7yo");class a extends o.Component{constructor(e){super(e)}async componentDidMount(){const e=await s.a;this.setState(()=>({dao:e}))}render(){return e("div",{id:"app"},e(r.a,{newListener:this.onNewTaskClick.bind(this)}),e(i.a,{creatingNewTask:this.state.creatingNewTask,cancelNewTaskListener:this.onNewTaskClick.bind(this),onNewTaskDoneListener:this.onNewTaskDone.bind(this),dao:this.state.dao}))}onNewTaskDone(){this.setState(()=>({creatingNewTask:!1}))}onNewTaskClick(){this.state.creatingNewTask||this.setState(()=>({creatingNewTask:!0}))}}}).call(this,n("hosL").h)},"g+w6":function(e,t,n){"use strict";function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return i}));var r=n("hosL");const i=e=>{const t=e.color||"currentColor",n=e.size||24;return delete e.color,delete e.size,Object(r.h)("svg",o({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},e),Object(r.h)("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),Object(r.h)("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"}))}},hosL:function(e,t,n){"use strict";function o(e,t){for(var n in t)e[n]=t[n];return e}function r(e){var t=e.parentNode;t&&t.removeChild(e)}function i(e,t,n){var o,r=arguments,i={};for(o in t)"key"!==o&&"ref"!==o&&(i[o]=t[o]);if(arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(r[o]);if(null!=n&&(i.children=n),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===i[o]&&(i[o]=e.defaultProps[o]);return s(e,i,t&&t.key,t&&t.ref,null)}function s(e,t,n,o,r){var i={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r};return null==r&&(i.__v=i),j.vnode&&j.vnode(i),i}function a(){return{}}function l(e){return e.children}function c(e,t){this.props=e,this.context=t}function u(e,t){if(null==t)return e.__?u(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?u(e):null}function _(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return _(e)}}function d(e){(!e.__d&&(e.__d=!0)&&A.push(e)&&!L++||D!==j.debounceRendering)&&((D=j.debounceRendering)||P)(h)}function h(){for(var e;L=A.length;)e=A.sort((function(e,t){return e.__v.__b-t.__v.__b})),A=[],e.some((function(e){var t,n,r,i,s,a,l;e.__d&&(a=(s=(t=e).__v).__e,(l=t.__P)&&(n=[],(r=o({},s)).__v=r,i=b(l,s,r,t.__n,void 0!==l.ownerSVGElement,null,n,null==a?u(s):a),k(n,s),i!=a&&_(s)))}))}function p(e,t,n,o,i,a,c,_,d,h){var p,f,v,m,y,k,g,C,S,O=o&&o.__k||I,E=O.length;for(d==q&&(d=null!=c?c[0]:E?u(o,0):null),n.__k=[],p=0;p<t.length;p++)if(null!=(m=n.__k[p]=null==(m=t[p])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m?s(null,m,null,null,m):Array.isArray(m)?s(l,{children:m},null,null,null):null!=m.__e||null!=m.__c?s(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(v=O[p])||v&&m.key==v.key&&m.type===v.type)O[p]=void 0;else for(f=0;f<E;f++){if((v=O[f])&&m.key==v.key&&m.type===v.type){O[f]=void 0;break}v=null}if(y=b(e,m,v=v||q,i,a,c,_,d,h),(f=m.ref)&&v.ref!=f&&(C||(C=[]),v.ref&&C.push(v.ref,null,m),C.push(f,m.__c||y,m)),null!=y){if(null==g&&(g=y),S=void 0,void 0!==m.__d)S=m.__d,m.__d=void 0;else if(c==v||y!=d||null==y.parentNode){e:if(null==d||d.parentNode!==e)e.appendChild(y),S=null;else{for(k=d,f=0;(k=k.nextSibling)&&f<E;f+=2)if(k==y)break e;e.insertBefore(y,d),S=d}"option"==n.type&&(e.value="")}d=void 0!==S?S:y.nextSibling,"function"==typeof n.type&&(n.__d=d)}else d&&v.__e==d&&d.parentNode!=e&&(d=u(v))}if(n.__e=g,null!=c&&"function"!=typeof n.type)for(p=c.length;p--;)null!=c[p]&&r(c[p]);for(p=E;p--;)null!=O[p]&&N(O[p],O[p]);if(C)for(p=0;p<C.length;p++)w(C[p],C[++p],C[++p])}function f(e){return null==e||"boolean"==typeof e?[]:Array.isArray(e)?I.concat.apply([],e.map(f)):[e]}function v(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===M.test(t)?n+"px":null==n?"":n}function m(e,t,n,o,r){var i,s,a,l,c;if(r?"className"===t&&(t="class"):"class"===t&&(t="className"),"style"===t)if(i=e.style,"string"==typeof n)i.cssText=n;else{if("string"==typeof o&&(i.cssText="",o=null),o)for(l in o)n&&l in n||v(i,l,"");if(n)for(c in n)o&&n[c]===o[c]||v(i,c,n[c])}else"o"===t[0]&&"n"===t[1]?(s=t!==(t=t.replace(/Capture$/,"")),a=t.toLowerCase(),t=(a in e?a:t).slice(2),n?(o||e.addEventListener(t,y,s),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,y,s)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!r&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function y(e){this.l[e.type](j.event?j.event(e):e)}function b(e,t,n,r,i,s,a,u,_){var d,h,f,v,m,y,b,k,w,N,S,O=t.type;if(void 0!==t.constructor)return null;(d=j.__b)&&d(t);try{e:if("function"==typeof O){if(k=t.props,w=(d=O.contextType)&&r[d.__c],N=d?w?w.props.value:d.__:r,n.__c?b=(h=t.__c=n.__c).__=h.__E:("prototype"in O&&O.prototype.render?t.__c=h=new O(k,N):(t.__c=h=new c(k,N),h.constructor=O,h.render=C),w&&w.sub(h),h.props=k,h.state||(h.state={}),h.context=N,h.__n=r,f=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=O.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=o({},h.__s)),o(h.__s,O.getDerivedStateFromProps(k,h.__s))),v=h.props,m=h.state,f)null==O.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==O.getDerivedStateFromProps&&k!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(k,N),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(k,h.__s,N)||t.__v===n.__v){for(h.props=k,h.state=h.__s,t.__v!==n.__v&&(h.__d=!1),h.__v=t,t.__e=n.__e,t.__k=n.__k,h.__h.length&&a.push(h),d=0;d<t.__k.length;d++)t.__k[d]&&(t.__k[d].__=t);break e}null!=h.componentWillUpdate&&h.componentWillUpdate(k,h.__s,N),null!=h.componentDidUpdate&&h.__h.push((function(){h.componentDidUpdate(v,m,y)}))}h.context=N,h.props=k,h.state=h.__s,(d=j.__r)&&d(t),h.__d=!1,h.__v=t,h.__P=e,d=h.render(h.props,h.state,h.context),null!=h.getChildContext&&(r=o(o({},r),h.getChildContext())),f||null==h.getSnapshotBeforeUpdate||(y=h.getSnapshotBeforeUpdate(v,m)),S=null!=d&&d.type==l&&null==d.key?d.props.children:d,p(e,Array.isArray(S)?S:[S],t,n,r,i,s,a,u,_),h.base=t.__e,h.__h.length&&a.push(h),b&&(h.__E=h.__=null),h.__e=!1}else null==s&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=g(n.__e,t,n,r,i,s,a,_);(d=j.diffed)&&d(t)}catch(e){t.__v=null,j.__e(e,t,n)}return t.__e}function k(e,t){j.__c&&j.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){j.__e(e,t.__v)}}))}function g(e,t,n,o,r,i,s,a){var l,c,u,_,d,h=n.props,f=t.props;if(r="svg"===t.type||r,null!=i)for(l=0;l<i.length;l++)if(null!=(c=i[l])&&((null===t.type?3===c.nodeType:c.localName===t.type)||e==c)){e=c,i[l]=null;break}if(null==e){if(null===t.type)return document.createTextNode(f);e=r?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,f.is&&{is:f.is}),i=null,a=!1}if(null===t.type)h!==f&&e.data!=f&&(e.data=f);else{if(null!=i&&(i=I.slice.call(e.childNodes)),u=(h=n.props||q).dangerouslySetInnerHTML,_=f.dangerouslySetInnerHTML,!a){if(null!=i)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(_||u)&&(_&&u&&_.__html==u.__html||(e.innerHTML=_&&_.__html||""))}(function(e,t,n,o,r){var i;for(i in n)"children"===i||"key"===i||i in t||m(e,i,null,n[i],o);for(i in t)r&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||m(e,i,t[i],n[i],o)})(e,f,h,r,a),_?t.__k=[]:(l=t.props.children,p(e,Array.isArray(l)?l:[l],t,n,o,"foreignObject"!==t.type&&r,i,s,q,a)),a||("value"in f&&void 0!==(l=f.value)&&l!==e.value&&m(e,"value",l,h.value,!1),"checked"in f&&void 0!==(l=f.checked)&&l!==e.checked&&m(e,"checked",l,h.checked,!1))}return e}function w(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){j.__e(e,n)}}function N(e,t,n){var o,i,s;if(j.unmount&&j.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||w(o,null,t)),n||"function"==typeof e.type||(n=null!=(i=e.__e)),e.__e=e.__d=void 0,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){j.__e(e,t)}o.base=o.__P=null}if(o=e.__k)for(s=0;s<o.length;s++)o[s]&&N(o[s],t,n);null!=i&&r(i)}function C(e,t,n){return this.constructor(e,n)}function S(e,t,n){var o,r,s;j.__&&j.__(e,t),r=(o=n===U)?null:n&&n.__k||t.__k,e=i(l,null,[e]),s=[],b(t,(o?t:n||t).__k=e,r||q,q,void 0!==t.ownerSVGElement,n&&!o?[n]:r?null:t.childNodes.length?I.slice.call(t.childNodes):null,s,n||q,o),k(s,e)}function O(e,t){S(e,t,U)}function E(e,t){var n,r;for(r in t=o(o({},e.props),t),arguments.length>2&&(t.children=I.slice.call(arguments,2)),n={},t)"key"!==r&&"ref"!==r&&(n[r]=t[r]);return s(e.type,n,t.key||e.key,t.ref||e.ref,null)}function x(e){var t={},n={__c:"__cC"+W++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var o,r=this;return this.getChildContext||(o=[],this.getChildContext=function(){return t[n.__c]=r,t},this.shouldComponentUpdate=function(e){r.props.value!==e.value&&o.some((function(t){t.context=e.value,d(t)}))},this.sub=function(e){o.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){o.splice(o.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Consumer.contextType=n,n.Provider.__=n,n}n.r(t),n.d(t,"render",(function(){return S})),n.d(t,"hydrate",(function(){return O})),n.d(t,"createElement",(function(){return i})),n.d(t,"h",(function(){return i})),n.d(t,"Fragment",(function(){return l})),n.d(t,"createRef",(function(){return a})),n.d(t,"isValidElement",(function(){return T})),n.d(t,"Component",(function(){return c})),n.d(t,"cloneElement",(function(){return E})),n.d(t,"createContext",(function(){return x})),n.d(t,"toChildArray",(function(){return f})),n.d(t,"_unmount",(function(){return N})),n.d(t,"options",(function(){return j}));var j,T,A,L,P,D,U,W,q={},I=[],M=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;j={__e:function(e,t){for(var n,o;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(o=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(o=!0,n.componentDidCatch(e)),o)return d(n.__E=n)}catch(t){e=t}throw e}},T=function(e){return null!=e&&void 0===e.constructor},c.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=o({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&o(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),d(this))},c.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),d(this))},c.prototype.render=l,A=[],L=0,P="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,U=q,W=0},l8WD:function(e,t,n){"use strict";function o(){p.some((function(e){if(e.__P)try{e.__H.__h.forEach(r),e.__H.__h.forEach(i),e.__H.__h=[]}catch(t){return e.__H.__h=[],h.options.__e(t,e.__v),!0}})),p=[]}function r(e){"function"==typeof e.u&&e.u()}function i(e){e.u=e.__()}function s(e,t){for(var n in e)if("__source"!==n&&!(n in t))return!0;for(var o in t)if("__source"!==o&&e[o]!==t[o])return!0;return!1}function a(e){return e&&((e=function(e,t){for(var n in t)e[n]=t[n];return e}({},e)).__c=null,e.__k=e.__k&&e.__k.map(a)),e}function l(){this.__u=0,this.o=null,this.__b=null}function c(e){var t=e.__.__c;return t&&t.u&&t.u(e)}function u(){this.i=null,this.l=null}function _(e,t){e["UNSAFE_"+t]&&!e[t]&&Object.defineProperty(e,t,{configurable:!1,get:function(){return this["UNSAFE_"+t]},set:function(e){this["UNSAFE_"+t]=e}})}var d,h=n("hosL"),p=[],f=h.options.__r,v=h.options.diffed,m=h.options.__c,y=h.options.unmount;h.options.__r=function(e){f&&f(e);var t=e.__c.__H;t&&(t.__h.forEach(r),t.__h.forEach(i),t.__h=[])},h.options.diffed=function(e){v&&v(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==p.push(t)&&d===h.options.requestAnimationFrame||((d=h.options.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(o),cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,100);"undefined"!=typeof window&&(t=requestAnimationFrame(n))})(o))},h.options.__c=function(e,t){t.some((function(e){try{e.__h.forEach(r),e.__h=e.__h.filter((function(e){return!e.__||i(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],h.options.__e(n,e.__v)}})),m&&m(e,t)},h.options.unmount=function(e){y&&y(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(r)}catch(e){h.options.__e(e,t.__v)}},function(e){function t(t){var n;return(n=e.call(this,t)||this).isPureReactComponent=!0,n}var n,o;o=e,(n=t).prototype=Object.create(o.prototype),n.prototype.constructor=n,n.__proto__=o,t.prototype.shouldComponentUpdate=function(e,t){return s(this.props,e)||s(this.state,t)}}(h.Component);var b=h.options.__b;h.options.__b=function(e){e.type&&e.type.t&&e.ref&&(e.props.ref=e.ref,e.ref=null),b&&b(e)},"undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref");var k=h.options.__e;h.options.__e=function(e,t,n){if(e.then)for(var o,r=t;r=r.__;)if((o=r.__c)&&o.__c)return o.__c(e,t.__c);k(e,t,n)},(l.prototype=new h.Component).__c=function(e,t){var n=this;null==n.o&&(n.o=[]),n.o.push(t);var o=c(n.__v),r=!1,i=function(){r||(r=!0,o?o(s):s())};t.__c=t.componentWillUnmount,t.componentWillUnmount=function(){i(),t.__c&&t.__c()};var s=function(){var e;if(!--n.__u)for(n.__v.__k[0]=n.state.u,n.setState({u:n.__b=null});e=n.o.pop();)e.forceUpdate()};n.__u++||n.setState({u:n.__b=n.__v.__k[0]}),e.then(i,i)},l.prototype.render=function(e,t){return this.__b&&(this.__v.__k[0]=a(this.__b),this.__b=null),[Object(h.createElement)(h.Component,null,t.u?null:e.children),t.u&&e.fallback]};var g=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};(u.prototype=new h.Component).u=function(e){var t=this,n=c(t.__v),o=t.l.get(e);return o[0]++,function(r){var i=function(){t.props.revealOrder?(o.push(r),g(t,e,o)):r()};n?n(i):i()}},u.prototype.render=function(e){this.i=null,this.l=new Map;var t=Object(h.toChildArray)(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},u.prototype.componentDidUpdate=u.prototype.componentDidMount=function(){var e=this;e.l.forEach((function(t,n){g(e,n,t)}))},function(){var e=function(){}.prototype;e.getChildContext=function(){return this.props.context},e.render=function(e){return e.children}}();var w=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;h.Component.prototype.isReactComponent={};var N="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,C=h.options.event;h.options.event=function(e){C&&(e=C(e)),e.persist=function(){};var t=!1,n=!1,o=e.stopPropagation;e.stopPropagation=function(){o.call(e),t=!0};var r=e.preventDefault;return e.preventDefault=function(){r.call(e),n=!0},e.isPropagationStopped=function(){return t},e.isDefaultPrevented=function(){return n},e.nativeEvent=e};var S={configurable:!0,get:function(){return this.class}},O=h.options.vnode;h.options.vnode=function(e){e.$$typeof=N;var t=e.type,n=e.props;if(t){if(n.class!=n.className&&(S.enumerable="className"in n,null!=n.className&&(n.class=n.className),Object.defineProperty(n,"className",S)),"function"!=typeof t){var o,r,i;for(i in n.defaultValue&&void 0!==n.value&&(n.value||0===n.value||(n.value=n.defaultValue),delete n.defaultValue),Array.isArray(n.value)&&n.multiple&&"select"===t&&(Object(h.toChildArray)(n.children).forEach((function(e){-1!=n.value.indexOf(e.props.value)&&(e.props.selected=!0)})),delete n.value),n)if(o=w.test(i))break;if(o)for(i in r=e.props={},n)r[w.test(i)?i.replace(/[A-Z0-9]/,"-$&").toLowerCase():i]=n[i]}!function(){var t=e.type,n=e.props;if(n&&"string"==typeof t){var o={};for(var r in n)/^on(Ani|Tra|Tou)/.test(r)&&(n[r.toLowerCase()]=n[r],delete n[r]),o[r.toLowerCase()]=r;if(o.ondoubleclick&&(n.ondblclick=n[o.ondoubleclick],delete n[o.ondoubleclick]),o.onbeforeinput&&(n.onbeforeinput=n[o.onbeforeinput],delete n[o.onbeforeinput]),o.onchange&&("textarea"===t||"input"===t.toLowerCase()&&!/^fil|che|ra/i.test(n.type))){var i=o.oninput||"oninput";n[i]||(n[i]=n[o.onchange],delete n[o.onchange])}}}(),"function"==typeof t&&!t.m&&t.prototype&&(_(t.prototype,"componentWillMount"),_(t.prototype,"componentWillReceiveProps"),_(t.prototype,"componentWillUpdate"),t.m=!0)}O&&O(e)}},mdyV:function(e,t,n){"use strict";n.r(t);var o=n("hosL");const{h:r,render:i,hydrate:s}=o,a=e=>e&&e.default?e.default:e;if("serviceWorker"in navigator&&navigator.serviceWorker.register(n.p+"sw-esm.js"),"function"==typeof a(n("QfWi"))){let e=document.getElementById("preact_root")||document.body.firstElementChild;(()=>{let t=a(n("QfWi")),o={};const l=document.querySelector('[type="__PREACT_CLI_DATA__"]');l&&(o=JSON.parse(l.innerHTML).preRenderData||o);const c=o.url?"/"===(u=o.url)[u.length-1]?u:u+"/":"";var u;const _=s&&c===location.pathname;e=(_?s:i)(r(t,{CLI_DATA:{preRenderData:o}}),document.body,e)})()}},zkEH:function(e,t,n){"use strict";function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return i}));var r=n("hosL");const i=e=>{const t=e.color||"currentColor",n=e.size||24;return delete e.color,delete e.size,Object(r.h)("svg",o({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},e),Object(r.h)("path",{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"}))}}});
//# sourceMappingURL=bundle.344cb.esm.js.map