"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[758],{2627:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(5861),a=n(885),u=n(7757),s=n.n(u),i=n(2791),o=n(7496),c=n(9818),l=n(1523),d=n(9920),f=n(4171),h=n(9599),m=n(184);function p(e){var t=e.bgcolor,n=e.bgheader,u=e.label,p=e.handle,x=e.hideAmount,g=e.successButton,b=(0,i.useContext)(d.V).authFB,j=(0,i.useState)(!0),v=(0,a.Z)(j,2),Z=v[0],w=v[1],k=(0,i.useState)(""),y=(0,a.Z)(k,2),C=y[0],A=y[1],F=(0,i.useState)(""),S=(0,a.Z)(F,2),L=S[0],B=S[1],E=(0,i.useState)(""),T=(0,a.Z)(E,2),U=T[0],N=T[1],P=(0,i.useState)(""),I=(0,a.Z)(P,2),V=I[0],W=I[1],D=(0,i.useState)(""),R=(0,a.Z)(D,2),_=R[0],z=R[1],K=(0,i.useState)(""),O=(0,a.Z)(K,2),Y=O[0],q=O[1],G=(0,i.useState)(""),H=(0,a.Z)(G,2),J=H[0],M=H[1],Q=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!b){e.next=9;break}return e.next=4,h.A.getUser(b.uid);case 4:return t=e.sent,W(!0),e.abrupt("return",t.data);case 9:W(!1),N(!1);case 11:e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return");case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();function X(e,t){return e?!("password"===t&&e.length<8)||(A("Please enter at least 8 characters"),setTimeout((function(){return A("")}),3e3),!1):(A("Please enter "+t),setTimeout((function(){return A("")}),3e3),!1)}(0,i.useEffect)((function(){x||Q().then((function(e){var t=e[0];N(t.balance)}))}),[Z]);return(0,m.jsx)(f.Z,{bgcolor:t,bgheader:n,header:u,status:C,body:Z?(0,m.jsxs)(i.Fragment,{children:[x?(0,m.jsxs)(i.Fragment,{children:["Login"!==u&&(0,m.jsxs)(i.Fragment,{children:["Name",(0,m.jsx)("br",{}),(0,m.jsx)(c.Z,{name:"name",id:"name",placeholder:"Enter name",value:_,onChange:function(e){return z(e.currentTarget.value)}}),(0,m.jsx)("br",{})]}),(0,m.jsx)("br",{}),"Email ",(0,m.jsx)("br",{}),(0,m.jsx)(c.Z,{name:"email",type:"email",id:"email",placeholder:"Enter email",value:Y,onChange:function(e){return q(e.currentTarget.value)}}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),"Password",(0,m.jsx)("br",{}),(0,m.jsx)(c.Z,{type:"password",id:"password",placeholder:"Enter password",value:J,onChange:function(e){return M(e.currentTarget.value)}}),(0,m.jsx)("br",{})]}):(0,m.jsxs)(i.Fragment,{children:["Balance: ",V?U:null," ",(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),u+" Amount",(0,m.jsx)("br",{}),(0,m.jsx)("input",{type:"input",id:"amount",placeholder:"Enter Amount",value:L,onChange:function(e){isNaN(Number(e.target.value))?alert("Only positive amounts are allowed"):B(e.target.value)}}),(0,m.jsx)("br",{})]}),(0,m.jsx)("br",{}),(0,m.jsx)(o.Z,{type:"submit",id:"submit",title:"Withdraw"===u||"Deposit"===u?"Confirm transaction":"Click to Login",variant:"contained",color:"primary",disabled:function(){if("Create Account"===u)return""===Y&&""===J&&""===_;if("Login"===u)return""===Y&&""===J;if(x){if(!U)return!1;if(U<=0)return!0}else{if("Withdraw"===u)return!U||!V||(""===L||0===L);if("Deposit"===u)return!V||(""===L||0===L)}}(),onClick:function(){if(x){if("Login"!==u&&!X(_,"name"))return;if(!X(Y,"email"))return;if(!X(J,"password"))return}else if(!X(L,"amount"))return;p({name:_,email:Y,password:J,amount:L}),w(!1)},children:u})]}):(0,m.jsxs)(i.Fragment,{children:[(0,m.jsx)(o.Z,{type:"submit",variant:"contained",color:"primary",onClick:function(){z(""),q(""),M(""),B(""),w(!0)},children:g}),"Create Account"===u?(0,m.jsx)(o.Z,{type:"submit",variant:"contained",title:"Click to go the Login",color:"secundary",children:(0,m.jsx)(l.rU,{className:"nav-link",to:"/login",children:"Login"})}):null]})})}},9758:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(5861),a=n(885),u=n(7757),s=n.n(u),i=n(2791),o=n(2627),c=n(9271),l=n(1523),d=n(9920),f=n(184);function h(){var e=(0,i.useState)(null),t=(0,a.Z)(e,2),n=t[0],u=t[1],h=(0,i.useState)(!1),m=(0,a.Z)(h,2),p=m[0],x=m[1],g=(0,c.k6)(),b=(0,i.useContext)(d.V),j=b.authFB,v=b.loginFB;function Z(){return(Z=(0,r.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t.email,t.password).then((function(){j?(u(j),x(!1),g.push("/")):x(!0)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,i.useEffect)((function(){u(j)}),[j]),(0,f.jsx)(i.Fragment,{children:(0,f.jsx)(l.UT,{children:(0,f.jsx)(l.VK,{children:n?(0,f.jsxs)(i.Fragment,{children:[(0,f.jsxs)("h3",{children:["Welcome ",n.email]}),(0,f.jsx)("h5",{children:"You are logged in Badbank"})]}):(0,f.jsxs)(i.Fragment,{children:[(0,f.jsx)(o.Z,{bgcolor:"black",txtcolor:"white",label:"Login",handle:function(e){return Z.apply(this,arguments)},hideAmount:!0,successButton:"Try Again"}),p&&(0,f.jsx)("p",{style:{textAlign:"center"},children:"Please register"})]})})})})}},9599:function(e,t,n){n.d(t,{A:function(){return o}});var r=n(4569),a=n.n(r),u=n(4075).Z.API_URL,s=localStorage.getItem("token"),i=a().create({baseURL:u,headers:{authorization:"Bearer ".concat(s)}}),o={all:function(){return i.get("/account/all")},getUser:function(e){return i.get("/account",{params:{firebaseId:e}})},createUser:function(e){return i.post("/account/create",e)},updated:function(e,t){return i.put("/account/update",{_id:e,amount:t})}}}}]);
//# sourceMappingURL=758.a4d2f5ef.chunk.js.map