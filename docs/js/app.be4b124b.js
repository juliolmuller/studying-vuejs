(function(t){function e(e){for(var r,a,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&p.push(n[a][0]),n[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],r=!0,i=1;i<o.length;i++){var c=o[i];0!==n[c]&&(r=!1)}r&&(s.splice(e--,1),t=a(a.s=o[0]))}return t}var r={},n={app:0},s=[];function a(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=r,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(o,r,function(e){return t[e]}.bind(null,r));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var r=o("85ec"),n=o.n(r);n.a},"26c1":function(t,e,o){},"522b":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("a79d");var r=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[t._m(0),o("main",[o("progression-bar",{attrs:{progression:t.completion}}),o("new-todo-input",{on:{create:t.addTodo}}),t.todos.length?o("div",{staticClass:"todos-grid"},t._l(t.todos,(function(e,r){return o("todo-card",{key:r,attrs:{todo:e},on:{delete:function(e){return t.deleteTodo(r)}}})})),1):o("div",{staticClass:"no-todos"},[o("p",[t._v("Você parece estar em dia com suas tarefas! 😎")])])],1),t._m(1)])},s=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",[o("h1",[t._v("Lista de Afazeres")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",[o("small",[t._v("LacusSoft © 2020 - Todos os direitos reservados")])])}],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"progress-bar"},[o("div",{staticClass:"progress-bar-inner",style:{width:t.percentage}}),o("span",{staticClass:"progress-bar-label"},[t._v(t._s(t.percentage))])])},i=[],c={props:{progression:{type:Number,default:0}},computed:{percentage(){return this.progression+"%"}}},l=c,u=(o("7413"),o("2877")),d=Object(u["a"])(l,a,i,!1,null,"11369ece",null),p=d.exports,f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{staticClass:"input-form",on:{submit:function(e){return e.preventDefault(),t.createTodo(e)}}},[o("label",{staticClass:"input-label",attrs:{for:"newTodo"}},[t._v("Insira uma nova tarefa")]),o("div",{staticClass:"input-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo,expression:"todo"}],staticClass:"input-control",attrs:{id:"newTodo",type:"text",placeholder:"Insira uma nova tarefa",autofocus:""},domProps:{value:t.todo},on:{input:function(e){e.target.composing||(t.todo=e.target.value)}}}),o("button",{staticClass:"input-submit",attrs:{type:"submit","aria-label":"salvar"}},[t._v("+")])])])},m=[],v={data:()=>({todo:""}),methods:{createTodo(){this.$emit("create",this.todo),this.todo=""}}},h=v,b=(o("8923"),Object(u["a"])(h,f,m,!1,null,"417bd8d7",null)),g=b.exports,_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-card",class:t.completion,on:{click:function(e){t.todo.completed=!t.todo.completed}}},[o("span",{staticClass:"todo-delete",attrs:{title:"Excluir"},on:{click:function(e){return e.stopPropagation(),t.$emit("delete")}}},[t._v("x")]),o("span",{staticClass:"todo-card-text"},[t._v(t._s(t.todo.task))])])},y=[],w={props:{todo:{type:Object,required:!0}},computed:{completion(){return this.todo.completed?"completed":"pending"}}},O=w,x=(o("ecf9"),Object(u["a"])(O,_,y,!1,null,"29e02484",null)),j=x.exports,T={components:{ProgressionBar:p,NewTodoInput:g,TodoCard:j},data:()=>({todos:[]}),computed:{completion(){const t=100,e=this.todos.reduce((t,e)=>t+e.completed,0);return Math.round(e/this.todos.length*t)||0}},watch:{todos:{deep:!0,handler(t){localStorage.setItem("my_todos",JSON.stringify(t))}}},methods:{addTodo(t){this.todos.push({task:t,completed:!1})},deleteTodo(t){confirm("Tem certeza de que deseja excluir essa tarefa?")&&this.todos.splice(t,1)}},created(){this.todos=JSON.parse(localStorage.getItem("my_todos"))||[]}},C=T,P=(o("034f"),Object(u["a"])(C,n,s,!1,null,null,null)),S=P.exports;r["a"].config.productionTip=!1,new r["a"]({el:"#app",render:t=>t(S)})},"6f29":function(t,e,o){},7413:function(t,e,o){"use strict";var r=o("6f29"),n=o.n(r);n.a},"85ec":function(t,e,o){},8923:function(t,e,o){"use strict";var r=o("26c1"),n=o.n(r);n.a},ecf9:function(t,e,o){"use strict";var r=o("522b"),n=o.n(r);n.a}});
//# sourceMappingURL=app.be4b124b.js.map