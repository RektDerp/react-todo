(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{1807:function(e,t,c){},1808:function(e,t,c){"use strict";c.r(t);var n=c(12),i=c(0),s=c(30),o=c.n(s),r=c(1816),a=c(57),l=c(37),d=c(67),h=c(47),u=c(1813),j=c(147),p=c(1811),b=c(1815),f=c(131),O=c(130),m=function(e){var t=e.item,c=e.onCheck,i=e.onRemove,s=Object(O.useState)(""),o=Object(h.a)(s,2),r=o[0],a=o[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("li",{className:"todo-item",children:[Object(n.jsx)(b.a,{className:r,checked:t.checked,onChange:function(){c&&(c(t.id),a(""===r?"checked":""))},children:t.title}),Object(n.jsx)(j.a,{onClick:function(e){e.preventDefault(),i&&i(t.id)},style:{background:"#ff181d"},children:Object(n.jsx)(f.DeleteOutlined,{})})]},t.id),Object(n.jsx)("p",{class:"desc",children:t.description})]})},k=c(1812),x=c(1814),v=function(e){var t=e.onSubmit,c=k.a.useForm(),i=Object(h.a)(c,1)[0];return Object(n.jsxs)(k.a,{className:"todo-form",form:i,layout:"inline",onFinish:function(e){t&&t(e),i.resetFields()},children:[Object(n.jsx)(k.a.Item,{name:"title",className:"todo-form-input",children:Object(n.jsx)(x.a,{placeholder:"New todo"})}),Object(n.jsx)(k.a.Item,{name:"description",children:Object(n.jsx)(x.a,{placeholder:"Description"})}),Object(n.jsx)(k.a.Item,{className:"todo-form-actions",children:Object(n.jsx)(j.a,{htmlType:"submit",type:"primary",children:"Add"})})]})},g=c(93),y="1007c6b2a15afe074fe9cbc6862a0f4498b0b000",N=function e(t,c,n,i){Object(g.a)(this,e),this.id=t,this.title=c,this.checked=n,this.description=i},S=function e(t){Object(g.a)(this,e),this.content=t.title,this.completed=t.checked,this.description=t.description};function C(e,t,c,n){var i=new XMLHttpRequest;return i.open(n,e,!1),i.setRequestHeader("Authorization","Bearer "+t),i.setRequestHeader("Content-Type","application/json"),i.send(c),i.responseText}function E(e){var t;try{C("https://api.todoist.com/rest/v1/tasks/"+e,y,null,"DELETE"),t="ok"}catch(c){alert("Error deleting task: "+c),t="err"}return t}var w=function(){var e=Object(i.useState)([]),t=Object(h.a)(e,2),c=t[0],s=t[1],o=Object(i.useState)(0),r=Object(h.a)(o,2),a=r[0],l=r[1];Object(i.useEffect)((function(){var e=function(){try{for(var e=JSON.parse(C("https://api.todoist.com/rest/v1/tasks",y,null,"GET")),t=new Array(e.length),c=0;c<e.length;c++)t[c]=new N(e[c].id,e[c].content,e[c].completed)}catch(n){alert("Error getting tasks: "+n),t=new Array(0)}return t}();s(e)}),[]);var b=function(e){var t=c.findIndex((function(t){return t.id===e}));if(-1!==t){var n=c[t];""===function(e,t){var c;try{c=C("https://api.todoist.com/rest/v1/tasks/"+e+"/"+t,y,null,"POST")}catch(n){alert(n),c="err"}return c}(e,n.checked?"reopen":"close")&&(n.checked=!n.checked,c.splice(t,1,n),s(Object(d.a)(c)),l(n.checked?a+1:a-1))}},f=function(e){var t=c.findIndex((function(t){return t.id===e}));-1!==t&&"ok"===E(e)&&(c.splice(t,1),s(Object(d.a)(c)))};return Object(n.jsxs)(u.a,{title:"My todos",className:"todo-card",children:[Object(n.jsx)(j.a,{onClick:function(){console.log("remchecked");for(var e=c.length-1;e>=0;e--)if(c[e].checked){var t=c.findIndex((function(t){return t.id===c[e].id}));-1!==t&&"ok"===E(c[e].id)&&(c.splice(t,1),s(Object(d.a)(c)))}l(0)},className:"rmbutton",children:"Delete all checked"}),Object(n.jsxs)("p",{id:"checkcount",children:["Checked items: ",a]}),Object(n.jsx)(v,{onSubmit:function(e){if(console.log(null==e.description),null!=e.title&&e.title.length>=3&&(null==e.description||e.description.length>=3))if(console.log("first check pass"),e.title[0]===e.title[0].toUpperCase()){console.log("check ok");var t={title:e.title,id:0,checked:!1,description:e.description},n=function(e){var t;try{console.log(e),t=JSON.parse(C("https://api.todoist.com/rest/v1/tasks",y,JSON.stringify(new S(e)),"POST"))}catch(c){alert("Error adding task: "+c),t=null}return t}(t);null!==n&&(t.id=n.id,s([].concat(Object(d.a)(c),[t])))}else alert("Title should start of a capital letter");else alert("Length of title and description (if there is one) should be no less than 3")}}),Object(n.jsx)(p.a,{}),function(e){return Object(n.jsx)("ul",{className:"todo-list",children:e.map((function(e){return Object(n.jsx)(m,{item:e,onRemove:f,onCheck:b},e.id)}))})}(c)]})},T=(c(1806),c(1807),r.a.Header),I=r.a.Footer,D=r.a.Content,F=function(){return Object(n.jsxs)(r.a,{children:[Object(n.jsx)(T,{}),Object(n.jsx)(D,{children:Object(n.jsx)(a.a,{children:Object(n.jsx)(l.a,{span:12,offset:6,className:"todo",children:Object(n.jsx)(w,{})})})}),Object(n.jsx)(I,{})]})};o.a.render(Object(n.jsx)(F,{}),document.getElementById("root"))}},[[1808,1,2]]]);
//# sourceMappingURL=main.559d5ed2.chunk.js.map