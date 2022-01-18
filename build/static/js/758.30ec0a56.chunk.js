"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[758],{2627:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(5861),a=t(885),u=t(7757),i=t.n(u),s=t(2791),o=t(7496),c=t(9818),l=t(1523),d=t(6549),f=t(4171),h=t(9599),m=t(184);function p(e){var n=e.bgcolor,t=e.bgheader,u=e.label,p=e.handle,x=e.hideAmount,g=e.successButton,b=(0,s.useContext)(d.V).authFB,j=(0,s.useState)(!0),v=(0,a.Z)(j,2),Z=v[0],w=v[1],k=(0,s.useState)(""),y=(0,a.Z)(k,2),C=y[0],A=y[1],F=(0,s.useState)(""),S=(0,a.Z)(F,2),L=S[0],B=S[1],E=(0,s.useState)(""),T=(0,a.Z)(E,2),U=T[0],N=T[1],P=(0,s.useState)(""),I=(0,a.Z)(P,2),V=I[0],W=I[1],D=(0,s.useState)(""),R=(0,a.Z)(D,2),_=R[0],z=R[1],K=(0,s.useState)(""),O=(0,a.Z)(K,2),Y=O[0],q=O[1],G=(0,s.useState)(""),H=(0,a.Z)(G,2),J=H[0],M=H[1],Q=function(){var e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!b){e.next=9;break}return e.next=4,h.A.all();case 4:return n=e.sent,W(!0),e.abrupt("return",n.data);case 9:W(!1),N(!1);case 11:e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return");case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();function X(e,n){return e?!("password"===n&&e.length<8)||(A("Please enter at least 8 characters"),setTimeout((function(){return A("")}),3e3),!1):(A("Please enter "+n),setTimeout((function(){return A("")}),3e3),!1)}(0,s.useEffect)((function(){x||Q().then((function(e){var n=e.filter((function(e){return e.firebaseId===b.uid}));N(n[0].balance)}))}),[Z]);return(0,m.jsx)(f.Z,{bgcolor:n,bgheader:t,header:u,status:C,body:Z?(0,m.jsxs)(s.Fragment,{children:[x?(0,m.jsxs)(s.Fragment,{children:["Login"!==u&&(0,m.jsxs)(s.Fragment,{children:["Name",(0,m.jsx)("br",{}),(0,m.jsx)(c.Z,{name:"name",id:"name",placeholder:"Enter name",value:_,onChange:function(e){return z(e.currentTarget.value)}}),(0,m.jsx)("br",{})]}),(0,m.jsx)("br",{}),"Email ",(0,m.jsx)("br",{}),(0,m.jsx)(c.Z,{name:"email",type:"email",id:"email",placeholder:"Enter email",value:Y,onChange:function(e){return q(e.currentTarget.value)}}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),"Password",(0,m.jsx)("br",{}),(0,m.jsx)(c.Z,{type:"password",id:"password",placeholder:"Enter password",value:J,onChange:function(e){return M(e.currentTarget.value)}}),(0,m.jsx)("br",{})]}):(0,m.jsxs)(s.Fragment,{children:["Balance: ",V?U:null," ",(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),u+" Amount",(0,m.jsx)("br",{}),(0,m.jsx)("input",{type:"input",id:"amount",placeholder:"Enter Amount",value:L,onChange:function(e){isNaN(Number(e.target.value))?alert("Only positive amounts are allowed"):B(e.target.value)}}),(0,m.jsx)("br",{})]}),(0,m.jsx)("br",{}),(0,m.jsx)(o.Z,{type:"submit",id:"submit",title:"Withdraw"===u||"Deposit"===u?"Confirm transaction":"Click to Login",variant:"contained",color:"primary",disabled:function(){if("Create Account"===u)return""===Y&&""===J&&""===_;if("Login"===u)return""===Y&&""===J;if(x){if(!U)return!1;if(U<=0)return!0}else{if("Withdraw"===u)return!U||!V||(""===L||0===L);if("Deposit"===u)return!V||(""===L||0===L)}}(),onClick:function(){if(x){if("Login"!==u&&!X(_,"name"))return;if(!X(Y,"email"))return;if(!X(J,"password"))return}else if(!X(L,"amount"))return;p({name:_,email:Y,password:J,amount:L}),w(!1)},children:u})]}):(0,m.jsxs)(s.Fragment,{children:[(0,m.jsx)(o.Z,{type:"submit",variant:"contained",color:"primary",onClick:function(){z(""),q(""),M(""),B(""),w(!0)},children:g}),"Create Account"===u?(0,m.jsx)(o.Z,{type:"submit",variant:"contained",title:"Click to go the Login",color:"secundary",children:(0,m.jsx)(l.rU,{className:"nav-link",to:"/login",children:"Login"})}):null]})})}},9758:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(5861),a=t(885),u=t(7757),i=t.n(u),s=t(2791),o=t(2627),c=t(9271),l=t(1523),d=t(6549),f=t(184);function h(){var e=(0,s.useState)(null),n=(0,a.Z)(e,2),t=n[0],u=n[1],h=(0,s.useState)(!1),m=(0,a.Z)(h,2),p=m[0],x=m[1],g=(0,c.k6)(),b=(0,s.useContext)(d.V),j=b.authFB,v=b.loginFB;function Z(){return(Z=(0,r.Z)(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(n.email,n.password).then((function(){j?(u(j),x(!1),g.push("/")):x(!0)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,s.useEffect)((function(){u(j)}),[j]),(0,f.jsx)(s.Fragment,{children:(0,f.jsx)(l.UT,{children:(0,f.jsx)(l.VK,{children:t?(0,f.jsxs)(s.Fragment,{children:[(0,f.jsxs)("h3",{children:["Welcome ",t.email]}),(0,f.jsx)("h5",{children:"You are logged in Badbank"})]}):(0,f.jsxs)(s.Fragment,{children:[(0,f.jsx)(o.Z,{bgcolor:"black",txtcolor:"white",label:"Login",handle:function(e){return Z.apply(this,arguments)},hideAmount:!0,successButton:"Try Again"}),p&&(0,f.jsx)("p",{style:{textAlign:"center"},children:"Please register"})]})})})})}},9599:function(e,n,t){t.d(n,{A:function(){return o}});var r=t(4569),a=t.n(r),u=t(4075).Z.API_URL,i=localStorage.getItem("token"),s=a().create({baseURL:u,headers:{authorization:"Bearer ".concat(i)}}),o={all:function(){return s.get("/account/all")},getUser:function(e){return s.get("/account",{params:{firebaseId:e}})},createUser:function(e){return s.post("/account/create",e)},updated:function(e,n){return s.put("/account/update",{_id:e,amount:n})}}}}]);
//# sourceMappingURL=758.30ec0a56.chunk.js.map