(this["webpackJsonpheard-project"]=this["webpackJsonpheard-project"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(9),u=c.n(a),s=(c(14),c(3)),o=(c(15),c(19)),i=c(7),j=r.a.createContext(),l=r.a.createContext(),d="ACCOUNT_CREATED",b="ACCOUNT_SIGNIN",O="ACCOUNT_SIGNOUT",m="USER_CREATED",p="USER_SIGNIN",x="USER_SIGNOUT",h="CATEGORY_CREATED",f="CATEGORY_CHANGED",v="BUDGET_CREATED",g="BUDGET_CHANGED",C="EXPENSE_CREATED",y="EXPENSE_CHANGED",N=["parent","child"],S=["weekly","monthly"],A=c(0),E=function(e){return"$".concat(e/100)},I=function(){var e=Object(n.useContext)(j),t=Object(n.useContext)(l),c=e.categories,r=e.currentAccount.id,a=c.filter((function(e){return e.accountId===r})),u=Object(n.useState)(""),i=Object(s.a)(u,2),d=i[0],b=i[1];return Object(A.jsxs)("div",{className:"categories-container",children:[Object(A.jsx)("h4",{children:"Budget Categories"}),Object(A.jsxs)("form",{onSubmit:function(e){var c=Object(o.a)();e.preventDefault(),t({type:h,payload:{id:c,accountId:r,name:d}}),b("")},children:[Object(A.jsx)("h4",{children:"Create New Budget Category"}),Object(A.jsx)("input",{type:"text",name:"name",placeholder:"Name",value:d,onChange:function(e){var t=e.target.value;b(t)}}),Object(A.jsx)("button",{type:"submit",children:"Create New Category"})]}),a.length?Object(A.jsx)("ul",{className:"categories-list",children:a.map((function(e){return Object(A.jsx)("li",{classNme:"category-item",children:e.name},e.id)}))}):Object(A.jsx)("p",{children:"No categories."})]})},D=function(){var e=Object(n.useContext)(j),t=Object(n.useContext)(l),c=e.categories,r=e.currentAccount,a=e.currentUser,u=r.id,d=a.id,b=c.filter((function(e){return e.accountId===u})),O=Object(n.useState)(""),m=Object(s.a)(O,2),p=m[0],x=m[1],h=Object(n.useState)(0),f=Object(s.a)(h,2),g=f[0],C=f[1],y=Object(n.useState)(""),N=Object(s.a)(y,2),E=N[0],I=N[1],D=Object(n.useState)(S[0]),U=Object(s.a)(D,2),w=U[0],T=U[1],_=function(e){return function(t){I(e)}},k=function(e){var t=e.target.value;T(t)};return Object(A.jsxs)("form",{className:"create-new",onSubmit:function(e){e.preventDefault();var c=Object(o.a)(),n=100*Number(g);t({type:v,payload:{id:c,accountId:u,userId:d,name:p,centAmount:n,categoryId:E,timeframe:w,startDate:(new Date).valueOf()}}),x(""),I(""),C(0)},children:[Object(A.jsx)("h4",{children:"Create New Budget"}),Object(A.jsx)("input",{type:"text",placeholder:"Name",value:p,onChange:function(e){var t=e.target.value;x(t)},required:!0}),Object(A.jsx)("select",{name:"category",required:!0,children:b.length?[{id:"",name:"select category"}].concat(Object(i.a)(b)).map((function(e){return Object(A.jsx)("option",{value:e.id,onClick:_(e.id),selected:E===e.id,children:e.name})})):Object(A.jsx)("option",{selected:!0,disabled:!0,children:"No categories."})}),S.map((function(e){return Object(A.jsxs)("label",{children:[Object(A.jsx)("input",{type:"radio",value:e,checked:e===w,onChange:k},e),e]})})),Object(A.jsx)("input",{type:"number",placeholder:"Amount",value:g,onChange:function(e){var t=e.target.value;C(t)},required:!0}),Object(A.jsx)("button",{type:"submit",children:"Create"})]})},U=function(e){var t=e.budget,c=Object(n.useContext)(j).expenses,r=t.name,a=t.centAmount,u=t.startDate,s=t.timeframe,o=E(a),i=c.filter((function(e){return e.budgetId===t.id})),l=E(i.reduce((function(e,t){return e+t.centAmount}),0)),d=function(){var e=864e5,t=u+("monthly"===s?30*e:7*e),c=(new Date).valueOf();return u<=c&&c<=t}();return console.log(c),Object(A.jsxs)("li",{className:"budget-item",children:[Object(A.jsx)("strong",{className:"budget-name",children:r}),Object(A.jsx)("br",{}),t.timeframe," from ",new Date(t.startDate).toLocaleString()," (",d?"open":"closed",")",Object(A.jsx)("br",{}),Object(A.jsxs)("span",{className:"progress",children:[l," / ",Object(A.jsx)("strong",{children:o})]}),Object(A.jsx)("ul",{className:"expenses-list",children:i.sort((function(e,t){return e.date-t.date})).map((function(e){return Object(A.jsx)(w,{expense:e},e.id)}))})]})},w=function(e){var t=e.expense,c=t.centAmount,n=t.date,r=t.approved,a=E(c),u=!0===r?"approved":!1===r?"disapproved":"pending approval";return Object(A.jsxs)("li",{className:"expense-item",children:[new Date(n).toLocaleString()," - ",a," (",u,")"]})},T=function(){var e=Object(n.useContext)(j),t=Object(n.useContext)(l),c=e.budgets,r=e.currentAccount,a=e.currentUser,u=r.id,d=a.id,b=c.filter((function(e){return e.accountId===u})),O=b.filter((function(e){return e.userId===u})),m="parent"===a.type?b:O,p=Object(n.useState)(0),x=Object(s.a)(p,2),h=x[0],f=x[1],v=Object(n.useState)(""),g=Object(s.a)(v,2),y=g[0],N=g[1];return Object(A.jsxs)("form",{className:"create-new",onSubmit:function(e){if(e.preventDefault(),console.log({amount:h,budgetId:y}),!h||!y)return alert("Please ensure all fields are completed.");var c=Object(o.a)(),n=100*Number(h);t({type:C,payload:{id:c,userId:d,budgetId:y,centAmount:n,approved:void 0,date:(new Date).valueOf()}}),N(""),f(0)},children:[Object(A.jsx)("h4",{children:"Create New Expense"}),Object(A.jsx)("select",{name:"budget",onChange:function(e){var t=e.target.value;N(t)},value:y,required:!0,children:m.length?[{id:"",name:"select budget"}].concat(Object(i.a)(m)).map((function(e){return Object(A.jsx)("option",{value:e.id,children:e.name})})):Object(A.jsx)("option",{selected:!0,disabled:!0,children:"No budgets."})}),Object(A.jsx)("input",{type:"number",placeholder:"Amount",value:h,onChange:function(e){var t=e.target.value;f(t)},required:!0}),Object(A.jsx)("button",{type:"submit",children:"Create"})]})},_=function(){var e=Object(n.useContext)(j),t=e.budgets,c=e.currentAccount,r=e.currentUser,a=c.id,u=r.id,s=t.filter((function(e){return e.accountId===a})),o=s.filter((function(e){return e.userId===u})),i="child"===r.type?o:s;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(I,{}),Object(A.jsxs)("div",{className:"budgets-container",children:[Object(A.jsx)("h2",{children:"Budgets"}),Object(A.jsx)(D,{}),i.length?Object(A.jsx)("ul",{className:"budgets-list",children:i.map((function(e){return Object(A.jsx)(U,{budget:e},e.id)}))}):Object(A.jsx)("p",{children:"No budgets created."})]}),Object(A.jsx)(T,{})]})},k=function(){var e=Object(n.useContext)(j),t=Object(n.useContext)(l),c=e.users,r=e.currentAccount.id,a=c.filter((function(e){return e.accountId===r})),u=function(e){return function(c){t({type:p,payload:e})}};return Object(A.jsxs)("div",{className:"users-list-container",children:[Object(A.jsx)("h2",{className:"title",children:"Select your user:"}),Object(A.jsx)(F,{onFormSubmit:function(e){var c=e.name,n=e.type;if(!c)return alert("Please ensure all fields are completed.");var a=Object(o.a)();t({type:m,payload:{id:a,accountId:r,name:c,type:n}})}}),a.length?Object(A.jsx)("ul",{className:"users-list",children:a.map((function(e){return Object(A.jsx)(G,{user:e,onSelect:u},e.id)}))}):Object(A.jsx)("p",{children:"No users created."})]})},F=function(e){var t=e.onFormSubmit,c=Object(n.useState)(""),r=Object(s.a)(c,2),a=r[0],u=r[1],o=Object(n.useState)(N[0]),i=Object(s.a)(o,2),j=i[0],l=i[1],d=function(e){var t=e.target.value;l(t)};return Object(A.jsxs)("form",{className:"create-new",onSubmit:function(e){t({name:a,type:j}),u(""),l(N[0])},children:[Object(A.jsx)("input",{type:"text",placeholder:"Name",value:a,onChange:function(e){var t=e.target.value;u(t)},required:!0}),N.map((function(e){return Object(A.jsxs)("label",{children:[Object(A.jsx)("input",{type:"radio",value:e,checked:e===j,onChange:d},e),e]})})),Object(A.jsx)("button",{type:"submit",children:"Create"})]})},G=function(e){var t=e.user,c=e.onSelect,n=t.name;return Object(A.jsxs)("li",{className:"users-list-item",children:[n," ",Object(A.jsx)("button",{onClick:c(t),children:"Select"})]})},R=function(){var e=Object(n.useContext)(j),t=Object(n.useContext)(l),c=e.currentUser;return Object(A.jsxs)("div",{className:"current-account-container",children:[Object(A.jsxs)("h2",{children:["Current user: ",c.name]}),Object(A.jsxs)("button",{onClick:function(e){t({type:x})},children:["Sign Out from ",c.name]})]})},P=function(){var e=Object(n.useContext)(j).currentUser;return Object(A.jsx)("div",{className:"user-container",children:e?Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(R,{}),Object(A.jsx)(_,{})]}):Object(A.jsx)(k,{})})},B=function(){var e=Object(n.useContext)(j),t=Object(n.useContext)(l),c=e.accounts,r=function(e){t({type:b,payload:e})};return Object(A.jsxs)("div",{className:"accounts-list-container",children:[Object(A.jsx)("h2",{className:"title",children:"Select your account:"}),Object(A.jsx)(q,{onFormSubmit:function(e){if(!e)return alert("Please ensure all fields are completed.");var c=Object(o.a)();t({type:d,payload:{id:c,name:e}})}}),c.length?Object(A.jsx)("ul",{className:"accounts-list",children:c.map((function(e){return Object(A.jsx)(H,{account:e,onSelect:r},e.id)}))}):Object(A.jsx)("p",{children:"No accounts created."})]})},q=function(e){var t=e.onFormSubmit,c=Object(n.useState)(""),r=Object(s.a)(c,2),a=r[0],u=r[1];return Object(A.jsxs)("form",{className:"create-new",onSubmit:function(e){e.preventDefault(),t(a),u("")},children:[Object(A.jsx)("input",{type:"text",placeholder:"Name",value:a,onChange:function(e){var t=e.target.value;u(t)},required:!0}),Object(A.jsx)("button",{type:"submit",children:"Create"})]})},H=function(e){var t=e.account,c=e.onSelect,n=t.name;return Object(A.jsxs)("li",{className:"accounts-list-item",children:[n," ",Object(A.jsx)("button",{onClick:function(e){c(t)},children:"Select"})]})},L=function(){var e=Object(n.useContext)(j),t=Object(n.useContext)(l),c=e.currentAccount;return Object(A.jsxs)("div",{className:"current-account-container",children:[Object(A.jsxs)("h2",{children:["Current account: ",c.name]}),Object(A.jsxs)("button",{onClick:function(e){t({type:O})},children:["Sign Out from ",c.name]})]})},J=function(){var e=Object(n.useContext)(j).currentAccount;return Object(A.jsx)("div",{className:"account-container",children:e?Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(L,{}),Object(A.jsx)(P,{})]}):Object(A.jsx)(B,{})})},X=c(20),Y=c(2),M={accounts:[],users:[],categories:[],budgets:[],expenses:[],currentAccount:void 0,currentUser:void 0},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(Y.a)(Object(Y.a)({},e),{},{accounts:e.accounts.concat([t.payload])});case b:return Object(Y.a)(Object(Y.a)({},e),{},{currentAccount:t.payload});case O:return Object(Y.a)(Object(Y.a)({},e),{},{currentAccount:void 0});case m:return Object(Y.a)(Object(Y.a)({},e),{},{users:e.users.concat([t.payload])});case p:return Object(Y.a)(Object(Y.a)({},e),{},{currentUser:t.payload});case x:return Object(Y.a)(Object(Y.a)({},e),{},{currentUser:void 0});case h:return Object(Y.a)(Object(Y.a)({},e),{},{categories:e.categories.concat([t.payload])});case f:return Object(Y.a)(Object(Y.a)({},e),{},{categories:e.categories.map((function(e){return e.id===t.payload.id?t.payload:e}))});case v:return Object(Y.a)(Object(Y.a)({},e),{},{budgets:e.budgets.concat([t.payload])});case g:return Object(Y.a)(Object(Y.a)({},e),{},{budgets:e.budgets.map((function(e){return e.id===t.payload.id?t.payload:e}))});case C:return Object(Y.a)(Object(Y.a)({},e),{},{expenses:e.expenses.concat([t.payload])});case y:return Object(Y.a)(Object(Y.a)({},e),{},{expenses:e.expenses.map((function(e){return e.id===t.payload.id?t.payload:e}))});default:return e}},Z=function(){var e=function(e,t){var c=Object(X.a)("@@@@_Heard_Onsite_Project-Adam_Zhu",t),r=Object(s.a)(c,2),a=r[0],u=r[1],o=Object(n.useCallback)((function(t,c){var n=e(t,c);return u(n),n}),[e,u]);return Object(n.useReducer)(o,a)}(W,M),t=Object(s.a)(e,2),c=t[0],r=t[1];return Object(A.jsx)(j.Provider,{value:c,children:Object(A.jsx)(l.Provider,{value:r,children:Object(A.jsxs)("div",{className:"app-container",children:[Object(A.jsx)("h1",{className:"app-title",children:"Welcome to the Heard Family Expenses Tracker"}),Object(A.jsx)(J,{})]})})})},$=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,21)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,u=t.getTTFB;c(e),n(e),r(e),a(e),u(e)}))};u.a.render(Object(A.jsx)(r.a.StrictMode,{children:Object(A.jsx)(Z,{})}),document.getElementById("root")),$()}},[[17,1,2]]]);
//# sourceMappingURL=main.8afe8e81.chunk.js.map