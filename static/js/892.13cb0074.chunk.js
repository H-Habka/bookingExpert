"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[892],{9396:function(e,t,r){var a=r(1413),n=r(4569),l=r.n(n)().create({baseURL:"http://ec2-34-207-182-73.compute-1.amazonaws.com/justsaywhat-laravel/public/index.php",timeout:2e4});t.Z={customer:{register:function(e){return l.post("/api/v1/user/customerRegister",(0,a.Z)((0,a.Z)({},e),{},{device_type:0}))}},provider:{register:function(){return l.post("/api/v1/user/providerRegister","body")}},providerOrCustomer:{login:function(e){return l.post("/api/v1/user/login",(0,a.Z)((0,a.Z)({},e),{},{device_type:0}))},logout:function(){return l.get("/api/v1/user/logout")}},otp:{resend:function(e){return l.post("/api/v1/user/resendOtp",e)},verify:function(e){return l.post("/api/v1/user/verifyOtp",e)},verifyResetPassword:function(e){return l.post("/api/v1/user/verifyResetPasswordOtp",e)}},password:{forget:function(e){return l.post("/api/v1/user/forgotPassword",e)},reset:function(e){return l.post("/api/v1/user/resetPassword",e)}}}},3892:function(e,t,r){r.r(t),r.d(t,{default:function(){return J}});var a,n=r(9439),l=r(2791),i=["title","titleId"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function c(e,t){var r=e.title,n=e.titleId,c=o(e,i);return l.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:86.799,height:86.799,viewBox:"0 0 86.799 86.799",ref:t,"aria-labelledby":n},c),r?l.createElement("title",{id:n},r):null,a||(a=l.createElement("g",{transform:"translate(-195.6 -194.6)"},l.createElement("path",{d:"M239,281a42.83,42.83,0,1,1,16.772-3.391A42.729,42.729,0,0,1,239,281Zm0-30.405h0a38.053,38.053,0,0,0-15.228,3.171,37.6,37.6,0,0,0-13.09,9.513,37.9,37.9,0,0,0,56.633,0,37.69,37.69,0,0,0-20.567-11.891A38.286,38.286,0,0,0,239,250.6Zm-.008-5.039h0a43.112,43.112,0,0,1,16.861,3.426,42.569,42.569,0,0,1,14.6,10.269,37.961,37.961,0,1,0-62.92,0,42.687,42.687,0,0,1,22.889-12.839A43.349,43.349,0,0,1,238.993,245.556Z",fill:"#0a94d5",stroke:"#fff",strokeWidth:.8}),l.createElement("path",{d:"M239,240.52A15.134,15.134,0,0,1,223.883,225.4v-5.039a15.117,15.117,0,1,1,30.234,0V225.4A15.134,15.134,0,0,1,239,240.52Zm0-30.235a10.09,10.09,0,0,0-10.078,10.078V225.4a10.078,10.078,0,1,0,20.156,0v-5.039A10.089,10.089,0,0,0,239,210.285Z",fill:"#0a94d5",stroke:"#fff",strokeWidth:.8}))))}var u,d=l.forwardRef(c),f=(r.p,["title","titleId"]);function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},m.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function h(e,t){var r=e.title,a=e.titleId,n=p(e,f);return l.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",width:86.559,height:86.559,viewBox:"0 0 86.559 86.559",ref:t,"aria-labelledby":a},n),r?l.createElement("title",{id:a},r):null,u||(u=l.createElement("g",{transform:"translate(-636.72 -194.721)"},l.createElement("ellipse",{cx:2.048,cy:2.048,rx:2.048,ry:2.048,transform:"translate(681.365 224.349)",fill:"#61c8f1",strokeWidth:.559}),l.createElement("ellipse",{cx:2.048,cy:2.048,rx:2.048,ry:2.048,transform:"translate(663.619 224.349)",fill:"#61c8f1",strokeWidth:.559}),l.createElement("path",{d:"M2.048,9.542h2.73A2.048,2.048,0,0,0,5.324,5.52L6.609,2.949A2.048,2.048,0,0,0,2.946,1.118L.216,6.578A2.048,2.048,0,0,0,2.048,9.542Z",transform:"translate(669.762 226.411)",fill:"#61c8f1",strokeWidth:.559}),l.createElement("path",{d:"M2.048,4.1h5.46a2.048,2.048,0,0,0,0-4.1H2.048a2.048,2.048,0,0,0,0,4.1Z",transform:"translate(669.762 203.19)",fill:"#61c8f1",strokeWidth:.559}),l.createElement("path",{d:"M706.95,281H700a2.051,2.051,0,0,1-2.032-1.8l-.269-2.176-1.134-.47-1.73,1.348a2.047,2.047,0,0,1-2.706-.166l-4.918-4.918a2.049,2.049,0,0,1-.167-2.706l1.348-1.73-.47-1.134-2.177-.27a2.046,2.046,0,0,1-1.774-1.749l-8.081,7.069a2.047,2.047,0,0,1-2.7,0L658.011,259.02l-14.485,4.345a3.42,3.42,0,0,0-2.431,3.269v12.318a2.047,2.047,0,1,1-4.095,0V266.634a7.462,7.462,0,0,1,5.35-7.191l21.952-6.586V247.25c-.445-.31-.88-.638-1.292-.973a18.484,18.484,0,0,1-6.254-9.167,8.179,8.179,0,0,1-4.485-4.234,13.27,13.27,0,0,1-1.62-5.8,4.6,4.6,0,0,1,1.249-3.407,4.931,4.931,0,0,1,3.229-1.318,7.489,7.489,0,0,1-1.748-4.811v-9.575A12.983,12.983,0,0,1,666.349,195H682.73A12.983,12.983,0,0,1,695.7,207.968v9.575a7.484,7.484,0,0,1-1.748,4.811,4.925,4.925,0,0,1,3.229,1.318,4.6,4.6,0,0,1,1.249,3.407,13.269,13.269,0,0,1-1.62,5.8,8.179,8.179,0,0,1-4.485,4.234,18.484,18.484,0,0,1-6.254,9.167c-3.5,2.85-8.029,4.692-11.53,4.692a16.013,16.013,0,0,1-6.143-1.436v4.847a2.036,2.036,0,0,1-1.459,1.962l-4.3,1.289,11.9,10.409,9.406-8.23V258a2.05,2.05,0,0,1,1.8-2.032l2.176-.269.47-1.135-1.348-1.729a2.051,2.051,0,0,1,.167-2.707l4.918-4.917a2.048,2.048,0,0,1,2.707-.167l1.729,1.348,1.135-.47.269-2.177a2.05,2.05,0,0,1,2.032-1.8h6.953a2.051,2.051,0,0,1,2.032,1.8l.269,2.177,1.134.47,1.73-1.348a2.047,2.047,0,0,1,2.706.167l4.918,4.918a2.049,2.049,0,0,1,.167,2.706l-1.348,1.73.471,1.134,2.176.27A2.05,2.05,0,0,1,723,258v6.953a2.049,2.049,0,0,1-1.8,2.031l-2.176.27-.47,1.134,1.348,1.73a2.05,2.05,0,0,1-.167,2.706l-4.917,4.918a2.048,2.048,0,0,1-2.707.167l-1.729-1.348-1.135.47-.269,2.177A2.05,2.05,0,0,1,706.95,281Zm-10.707-8.837a2.041,2.041,0,0,1,.784.156l3.339,1.382a2.051,2.051,0,0,1,1.248,1.64l.194,1.564h3.333l.193-1.565a2.051,2.051,0,0,1,1.249-1.64l3.338-1.382a2.049,2.049,0,0,1,2.043.277l1.243.969,2.359-2.358-.969-1.243a2.05,2.05,0,0,1-.277-2.042l1.382-3.339a2.05,2.05,0,0,1,1.64-1.248l1.564-.194v-3.333l-1.565-.193a2.051,2.051,0,0,1-1.64-1.249l-1.382-3.338a2.052,2.052,0,0,1,.277-2.043l.969-1.243-2.358-2.357-1.242.969a2.06,2.06,0,0,1-1.259.432,2.035,2.035,0,0,1-.784-.156l-3.339-1.382a2.054,2.054,0,0,1-1.248-1.641l-.193-1.563h-3.334l-.193,1.563a2.054,2.054,0,0,1-1.248,1.641l-3.339,1.382a2.035,2.035,0,0,1-.784.156,2.059,2.059,0,0,1-1.259-.432l-1.243-.969-2.357,2.357.969,1.243a2.054,2.054,0,0,1,.277,2.043l-1.383,3.338a2.051,2.051,0,0,1-1.641,1.249l-1.563.193v3.332l1.563.193a2.052,2.052,0,0,1,1.641,1.248l1.383,3.339a2.054,2.054,0,0,1-.277,2.043l-.969,1.243,2.358,2.359,1.243-.969A2.057,2.057,0,0,1,696.243,272.163Zm-36.036-47.145h0v7.521a13.409,13.409,0,0,0,4.71,10.02,16.721,16.721,0,0,0,9.623,4.314c4.286,0,14.333-4.877,14.333-14.333v-7.52c-.2.02-.4.029-.611.029a14.378,14.378,0,0,1-2.674-.343c-.521-.1-1.058-.2-1.575-.266a2.056,2.056,0,0,1,1.4,2.41,2.036,2.036,0,0,1-1.995,1.6,2.048,2.048,0,1,1,0-4.1h.009a58.84,58.84,0,0,0-17.765,0h.01a2.048,2.048,0,1,1-.6.089c-.519.063-1.056.166-1.575.267a14.3,14.3,0,0,1-2.669.343C660.611,225.048,660.4,225.038,660.207,225.018Zm32.762,1.382h0v4.934a9.164,9.164,0,0,0,1.365-4.254,1.7,1.7,0,0,0-.057-.5,3.8,3.8,0,0,0-1.309-.175Zm-36.858,0a3.8,3.8,0,0,0-1.309.175,1.677,1.677,0,0,0-.056.5,9.173,9.173,0,0,0,1.364,4.254V226.4Zm18.429-6.825a68.079,68.079,0,0,1,13,1.319,3.416,3.416,0,0,0,4.059-3.174,66.4,66.4,0,0,0-34.118,0,3.418,3.418,0,0,0,3.413,3.236,3.437,3.437,0,0,0,.646-.061A68.084,68.084,0,0,1,674.54,219.575Zm0-8.181a70.376,70.376,0,0,1,17.064,2.1v-5.527a8.883,8.883,0,0,0-8.873-8.873H666.349a8.883,8.883,0,0,0-8.873,8.873V213.5A70.379,70.379,0,0,1,674.54,211.393Z",fill:"#61c8f1",strokeWidth:.559}),l.createElement("path",{d:"M703.471,269.824h0a8.35,8.35,0,0,1,0-16.7h.02a8.35,8.35,0,0,1-.022,16.7Zm0-12.6a4.254,4.254,0,1,0,3.01,1.246A4.233,4.233,0,0,0,703.473,257.219Z",fill:"#61c8f1",strokeWidth:.559}))))}var x,g,v,b,w=l.forwardRef(h),j=(r.p,r(9458)),y=r(7689),k=r(1413),N=r(9405),O=(r(1827),r(7210)),_=r.n(O),Z=r(5924),S=r(184),L=function(){return(0,S.jsx)(_(),{appId:"1118915829022806",autoLoad:!1,fields:"name,email,picture",callback:function(e){console.log(e),alert("test")},cssClass:"h-full w-[55px] flex justify-center items-center bg-four rounded-lg",textButton:"",icon:(0,S.jsx)(Z.r,{fill:"#1877f2"})})},E=r(929),C=r.n(E),A=["title","titleId"];function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},P.apply(this,arguments)}function I(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function z(e,t){var r=e.title,a=e.titleId,n=I(e,A);return l.createElement("svg",P({xmlns:"http://www.w3.org/2000/svg",width:33.577,height:32.645,viewBox:"0 0 33.577 32.645",ref:t,"aria-labelledby":a},n),r?l.createElement("title",{id:a},r):null,x||(x=l.createElement("path",{d:"M16.446,3.339A17.9,17.9,0,0,0,16.134,0H0V6.314H9.22A7.5,7.5,0,0,1,5.8,11.24v4.1h5.536a15.551,15.551,0,0,0,5.108-12Z",transform:"translate(17.131 13.355)",fill:"#4285f4"})),g||(g=l.createElement("path",{d:"M15.309,13.221A16.833,16.833,0,0,0,26.646,9.267l-5.536-4.1a10.674,10.674,0,0,1-5.8,1.558A10.166,10.166,0,0,1,5.723,0H0V4.229a17.229,17.229,0,0,0,15.309,8.992Z",transform:"translate(1.822 19.424)",fill:"#34a853"})),v||(v=l.createElement("path",{d:"M7.545,10.431a9.219,9.219,0,0,1,0-6.2V0H1.822a15.655,15.655,0,0,0,0,14.66l5.723-4.229Z",transform:"translate(0 8.992)",fill:"#fbbc05"})),b||(b=l.createElement("path",{d:"M15.309,6.492a9.509,9.509,0,0,1,6.549,2.441l4.913-4.682A16.916,16.916,0,0,0,15.309,0,17.229,17.229,0,0,0,0,8.992l5.723,4.229a10.166,10.166,0,0,1,9.586-6.729Z",transform:"translate(1.822)",fill:"#ea4335"})))}var q=l.forwardRef(z),M=(r.p,function(){var e=function(e){console.log(e)};return(0,S.jsx)(C(),{clientId:"932368142042-9irch41f5n3th84ttrftlfi97mkn5t3n.apps.googleusercontent.com",render:function(e){return(0,S.jsx)("div",{className:"flex justify-center items-center h-full w-[55px] bg-[#191919] dark:bg-white rounded-lg cursor-pointer outline-none",onClick:e.onClick,disabled:e.disabled,children:(0,S.jsx)(q,{})})},onSuccess:e,onFailure:e,cookiePolicy:"single_host_origin",autoLoad:!1})}),V=r(887),R=r(8032),W=r(1087),H=r(3267),U=r(9396),$=r(3402),B=r(3590),T=r(3168),F=r(7623),D=function(){var e=(0,T.$)().t,t=(0,l.useState)("email"),r=(0,n.Z)(t,2),a=r[0],i=r[1],s=(0,y.s0)(),o=(0,B.o)((function(e){return e.setUser})),c=(0,B.o)((function(e){return e.user}));console.log({user:c});var u=(0,V.cI)(),d=u.register,f=u.handleSubmit,m=u.watch,p=u.reset,h=u.formState,x=h.errors,g=h.isSubmitSuccessful;(0,l.useEffect)((function(){p({email:"",phone_number:"",phone_code:""})}),[a]);return(0,l.useEffect)((function(){console.log("Component Re Renders")})),(0,S.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,S.jsxs)("form",{className:"z-[1]",onSubmit:f((function(t){t.fcm_token="GUID",t.register_using="email"===a?0:1,t.iso_code="SY",t.role_id=2,console.log(t),$.Am.promise(U.Z.providerOrCustomer.login(t),{loading:e("Loading"),success:function(e){var t,r,a;return console.log({res:e}),o(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data),localStorage.setItem("user",JSON.stringify(null===e||void 0===e||null===(r=e.data)||void 0===r?void 0:r.data)),s("/"),(0,S.jsx)("p",{children:null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.message})},error:function(e){var t,r;return console.log({err:e}),(0,S.jsx)("p",{children:(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.message)||(null===e||void 0===e?void 0:e.message)})}})})),children:[(0,S.jsxs)("div",{className:"my-10 z-10",children:[(0,S.jsx)("div",{children:"email"===a?(0,S.jsx)("div",{children:(0,S.jsx)(N.Z,{register:(0,k.Z)({},d("email",{required:H._.required(),maxLength:H._.maxLength(40),minLength:H._.minLength(3),pattern:H._.isEmail()})),type:"text",label:"Email",className:"w-[300px] sm:w-[400px]",error:null===x||void 0===x?void 0:x.email,isSubmitSuccessful:g})}):(0,S.jsxs)("div",{className:"flex w-[300px] sm:w-[400px] gap-4",children:[(0,S.jsx)(R.Z,{register:d,type:"text",label:"Code",className:"w-[70px] sm:w-[94px]",error:!(null===x||void 0===x||!x.phone_code),isSubmitSuccessful:g,watch:m,reset:p}),(0,S.jsx)(N.Z,{register:(0,k.Z)({},d("phone_number",{required:H._.required(),maxLength:H._.maxLength(20),minLength:H._.minLength(3),validate:H._.phoneValidate})),type:"text",label:"Phone",className:"w-[214px] sm:w-[290px]",error:null===x||void 0===x?void 0:x.phone_number,isSubmitSuccessful:g})]})}),(0,S.jsx)("div",{className:"flex justify-end",children:(0,S.jsx)(F.Z,{title:"email"===a?"Use Mobile NO":"Use Email",onClick:function(){return i((function(e){return"email"===e?"phone":"email"}))}})})]}),(0,S.jsx)("div",{className:"mb-10 z-[-1]",children:(0,S.jsx)(N.Z,{register:(0,k.Z)({},d("password",{required:H._.required(),maxLength:H._.maxLength(40),minLength:H._.minLength(8)})),error:null===x||void 0===x?void 0:x.password,isSubmitSuccessful:g,type:"password",label:"Password",className:"w-[300px] sm:w-[400px] "})}),(0,S.jsxs)("div",{className:"w-[300px] md:w-[400px] mx-auto",children:[(0,S.jsx)("button",{type:"submit",className:"sm:text-lg md:text-xl text-white bg-four border-2 border-four rounded-lg w-full py-2 hover:text-four hover:bg-white dark:hover:bg-darkbg1 transition-all duration-300",children:e("login")}),(0,S.jsxs)("div",{className:"mt-4",children:[(0,S.jsxs)("div",{className:"relative z-[1] ",children:[(0,S.jsx)("div",{className:"absolute w-full h-1 bg-five top-1/2 -translate-y-1/2 z-[-1] rounded-2xl"}),(0,S.jsx)("div",{className:"bg-white text-3xl w-fit mx-auto px-3 text-five dark:bg-darkbg1",children:e("Or")})]}),(0,S.jsxs)("div",{className:"flex gap-2 justify-center mt-4 h-[65px]",children:[(0,S.jsx)("div",{className:"transition-all duration-100 hover:scale-105",children:(0,S.jsx)(L,{})}),(0,S.jsx)("div",{className:"transition-all duration-100 hover:scale-105",children:(0,S.jsx)(M,{})})]})]})]})]}),(0,S.jsx)(W.rU,{to:"/auth/forgetPassword",className:"flex justify-end m-1 mt-6",children:(0,S.jsx)(F.Z,{title:"Forget password"})})]})},G=function(){var e=(0,T.$)().t,t=(0,l.useState)("email"),r=(0,n.Z)(t,2),a=r[0],i=r[1],s=(0,V.cI)({defaultValues:{first_name:"",last_name:"",phone_number:"",email:"",password:"",phone_code:""}}),o=s.reset,c=s.register,u=s.handleSubmit,d=s.watch,f=s.formState,m=f.errors,p=f.isSubmitSuccessful;(0,l.useEffect)((function(){o({email:"",phone_number:"",phone_code:""})}),[a]);return(0,S.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,S.jsxs)("form",{className:"",onSubmit:u((function(e){e.fcm_token="GUID",e.register_type=1,e.register_using="email"===a?0:1,e.iso_code="SY",console.log(e),U.Z.customer.register(e).then((function(e){return console.log({res:e})})).catch((function(e){return console.log({err:e})}))})),children:[(0,S.jsxs)("div",{className:"my-10",children:[(0,S.jsxs)("div",{className:"flex flex-col md:flex-row gap-4 md:my-10 my-4",children:[(0,S.jsx)("div",{className:"",children:(0,S.jsx)(N.Z,{register:(0,k.Z)({},c("first_name",{required:H._.required(),maxLength:H._.maxLength(20),minLength:H._.minLength(3),pattern:H._.isName()})),error:null===m||void 0===m?void 0:m.first_name,isSubmitSuccessful:p,type:"text",label:"First Name",className:"w-[300px]"})}),(0,S.jsx)("div",{className:"",children:(0,S.jsx)(N.Z,{register:(0,k.Z)({},c("last_name",{required:H._.required(),maxLength:H._.maxLength(20),minLength:H._.minLength(3),pattern:H._.isName()})),error:null===m||void 0===m?void 0:m.last_name,isSubmitSuccessful:p,type:"text",label:"Last Name",className:"w-[300px]"})})]}),(0,S.jsxs)("div",{className:"flex flex-col md:flex-row gap-4 md:my-10 my-4",children:[(0,S.jsxs)("div",{className:"z-[10]",children:[(0,S.jsx)("div",{children:"email"===a?(0,S.jsx)("div",{children:(0,S.jsx)(N.Z,{register:(0,k.Z)({},c("email",{required:H._.required(),maxLength:H._.maxLength(40),minLength:H._.minLength(3),pattern:H._.isEmail()})),type:"text",label:"Email",className:"w-[300px]",error:null===m||void 0===m?void 0:m.email,isSubmitSuccessful:p})}):(0,S.jsx)("div",{children:(0,S.jsxs)("div",{className:"flex w-[300px] gap-4",children:[(0,S.jsx)(R.Z,{register:c,type:"text",label:"Code",className:"w-[70px]",error:null===m||void 0===m?void 0:m.phone_code,isSubmitSuccessful:p,watch:d,reset:o}),(0,S.jsx)(N.Z,{register:(0,k.Z)({},c("phone_number",{required:H._.required(),maxLength:H._.maxLength(20),minLength:H._.minLength(3),validate:H._.phoneValidate})),type:"text",label:"Phone",className:"w-[214px]",error:null===m||void 0===m?void 0:m.phone_number,isSubmitSuccessful:p})]})})}),(0,S.jsx)("div",{className:"flex justify-end",children:(0,S.jsx)(F.Z,{title:"email"===a?"Use Mobile NO":"Use Email",onClick:function(){return i((function(e){return"email"===e?"phone":"email"}))}})})]}),(0,S.jsx)("div",{className:"",children:(0,S.jsx)(N.Z,{register:(0,k.Z)({},c("password",{required:H._.required(),maxLength:H._.maxLength(40),minLength:H._.minLength(8)})),error:null===m||void 0===m?void 0:m.password,isSubmitSuccessful:p,type:"password",label:"Password",className:"w-[300px]"})})]})]}),(0,S.jsxs)("div",{className:"w-[300px] md:w-[400px] mx-auto",children:[(0,S.jsx)("button",{type:"submit",className:"sm:text-lg md:text-xl text-white bg-four border-2 border-four rounded-lg w-full py-2 hover:text-four hover:bg-white dark:hover:bg-darkbg1 transition-all duration-300",children:e("signup")}),(0,S.jsxs)("div",{className:"mt-4",children:[(0,S.jsxs)("div",{className:"relative z-[1] ",children:[(0,S.jsx)("div",{className:"absolute w-full h-1 bg-five top-1/2 -translate-y-1/2 z-[-1] rounded-2xl"}),(0,S.jsx)("div",{className:"bg-white text-3xl w-fit mx-auto px-3 text-five dark:bg-darkbg1",children:e("Or")})]}),(0,S.jsxs)("div",{className:"flex gap-2 justify-center mt-4 h-[65px]",children:[(0,S.jsx)("div",{className:"transition-all duration-100 hover:scale-105",children:(0,S.jsx)(L,{})}),(0,S.jsx)("div",{className:"transition-all duration-100 hover:scale-105",children:(0,S.jsx)(M,{})})]})]})]})]})})},Y=[{idx:0,title:"login",to:"/auth/login"},{idx:1,title:"signup",to:"/auth/signup"}],J=function(){var e=(0,T.$)().t,t=(0,l.useState)("login"),r=(0,n.Z)(t,2),a=r[0],i=r[1],s=(0,l.useState)(null),o=(0,n.Z)(s,2),c=o[0],u=o[1],f=(0,y.TH)();return(0,l.useEffect)((function(){var e=Y.filter((function(e){return e.to===f.pathname}))[0];i(e?e.title:"")}),[f]),(0,S.jsx)("div",{className:"flex justify-center items-center md:pt-12 pt-6 pb-10",children:(0,S.jsxs)("div",{className:"".concat(c?"px-2 ":"md:px-20 sm:px-10 px-2","  sm:py-6 py-2 sm:border-2 rounded-xl min-w-[300px] w-[80%] max-w-[800px]"),children:[(0,S.jsx)("div",{"data-aos":"fade-down",className:"w-72 mx-auto",children:(0,S.jsx)(j.Z,{navData:Y,truck:!0})}),c&&"login"===a&&(0,S.jsx)(D,{}),c&&"signup"===a&&(0,S.jsx)(G,{}),!c&&(0,S.jsxs)("div",{className:"grid gap-2 md:gap-10 mt-10",style:{gridTemplateColumns:"1fr 1fr"},children:[(0,S.jsxs)("button",{"data-aos":"fade-up-right",onClick:function(){return u("customer")},className:"border-2 border-blue-400 hover:shadow-custom shadow-two transition-all duration-100 rounded-xl flex flex-col justify-center items-center p-4 gap-2",children:[(0,S.jsx)("div",{children:(0,S.jsx)(d,{width:100,height:100})}),(0,S.jsx)("p",{children:e("As Customer")})]}),(0,S.jsxs)("button",{"data-aos":"fade-up-left",onClick:function(){return u("provider")},className:"border-2 border-blue-400 hover:shadow-custom shadow-two transition-all duration-100 rounded-xl flex flex-col justify-center items-center p-4 gap-2",children:[(0,S.jsx)("div",{children:(0,S.jsx)(w,{width:100,height:100})}),(0,S.jsx)("p",{children:e("As Service Provider")})]})]})]})})}},8032:function(e,t,r){var a=r(1413),n=r(9439),l=r(2791),i=r(3168),s=r(184),o=["+963","+943","+245","+1","+542","+236","+987","+256","+232","+557","+589","+984"];t.Z=function(e){var t=e.type,r=e.label,c=e.className,u=e.register,d=e.error,f=e.isSubmitSuccessful,m=e.watch,p=e.reset,h=(0,i.$)().t,x=m("phone_code",""),g=(0,l.useState)([]),v=(0,n.Z)(g,2),b=v[0],w=v[1];return(0,l.useEffect)((function(){w(x?o.filter((function(e){return e.startsWith(x)})):[])}),[x]),(0,s.jsxs)("div",{"data-aos":"flip-up",className:"w-fit relative group z-10",children:[(0,s.jsx)("input",(0,a.Z)((0,a.Z)({},u("phone_code",{required:!0,maxLength:30,validate:function(e){return!!o.find((function(t){return t===e}))}})),{},{autoComplete:"off",type:t,className:"dark:bg-darkbg1 dark:text-darktext dark:placeholder:text-darktext rounded-lg outline-none border  p-2 text-xl placeholder:text-black placeholder:focus:text-transparent dark:placeholder:focus:text-transparent placeholder:transition-all placeholder:duration-500 placeholder:text-sm  ".concat(d?"border-red-600 focus:border-red-600":f?"border-green-700":"border-black dark:border-darktext dark:focus:border-two focus:border-two "," ").concat(c),style:{boxShadow:d?"0px 0px 3px 0px red":f?"0px 0px 3px 0px green":""},placeholder:h(r)})),(0,s.jsx)("div",{className:"".concat(x?"-top-2 opacity-100 z-[1]":"top-1/2 -translate-y-1/2 opacity-0 z-[-1]"," absolute bg-white dark:bg-darkbg1 px-2  start-2 group-focus-within:-top-2 group-focus-within:-translate-y-0 translate-all duration-300 group-focus-within:opacity-100  text-sm group-focus-within:z-[1]  ").concat(d?"text-red-600":f?"text-green-700":"group-focus-within:text-two"),children:h(r)}),!o.find((function(e){return e===x}))&&(0,s.jsx)("div",{className:"absolute top-full z-[50] bg-gray-300 w-full text-lg max-h-[200px] overflow-auto scrollbar-thin",children:b.map((function(e,t){return(0,s.jsx)("button",{onClick:function(){return p({phone_code:e})},className:"p-1 block w-full",type:"button",children:e},t)}))})]})}},9405:function(e,t,r){r.d(t,{Z:function(){return y}});var a,n,l=r(1413),i=r(9439),s=r(2791),o=["title","titleId"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function d(e,t){var r=e.title,l=e.titleId,i=u(e,o);return s.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",ref:t,"aria-labelledby":l},i),r?s.createElement("title",{id:l},r):null,a||(a=s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"})),n||(n=s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})))}var f,m=s.forwardRef(d),p=(r.p,["title","titleId"]);function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},h.apply(this,arguments)}function x(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function g(e,t){var r=e.title,a=e.titleId,n=x(e,p);return s.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",ref:t,"aria-labelledby":a},n),r?s.createElement("title",{id:a},r):null,f||(f=s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"})))}var v=s.forwardRef(g),b=(r.p,r(3168)),w=r(184),j=function(e,t){var r,a=null===e||void 0===e||null===(r=e.split("(")[1])||void 0===r?void 0:r.split(")")[0];return a?t("".concat(null===e||void 0===e?void 0:e.split("(")[0],"_").concat(a<11?"few":"many"),{value:a}):t(e)},y=function(e){var t=e.type,r=e.label,a=(e.width,e.className),n=e.register,o=e.error,c=e.isSubmitSuccessful,u=(0,b.$)().t,d=(0,s.useState)(!1),f=(0,i.Z)(d,2),p=f[0],h=f[1],x=(0,s.useState)(!1),g=(0,i.Z)(x,2),y=g[0],k=g[1],N="password"===t;return(0,w.jsxs)("div",{"data-aos":"flip-up",className:"w-fit relative group ",children:[(0,w.jsx)("input",(0,l.Z)((0,l.Z)({},n),{},{autoComplete:"off",type:y?"text":t,className:"dark:bg-darkbg1 dark:text-darktext dark:placeholder:text-darktext rounded-lg outline-none border  p-2 text-xl placeholder:text-black placeholder:focus:text-transparent dark:placeholder:focus:text-transparent placeholder:transition-all placeholder:duration-500 placeholder:text-sm  ".concat(o?"border-red-600 focus:border-red-600":c?"border-green-700":"border-black dark:border-darktext dark:focus:border-two focus:border-two "," ").concat(a),style:{boxShadow:o?"0px 0px 3px 0px red":c?"0px 0px 3px 0px green":""},onChange:function(e){n.onChange(e),e.target.value?h(!0):h(!1)},placeholder:u(r)})),(0,w.jsx)("div",{className:"".concat(p?"-top-2 opacity-100 z-[1]":"top-1/2 -translate-y-1/2 opacity-0 z-[-1]"," absolute bg-white dark:bg-darkbg1 px-2  start-2 group-focus-within:-top-2 group-focus-within:-translate-y-0 translate-all duration-300 group-focus-within:opacity-100  text-sm group-focus-within:z-[1]  ").concat(o?"text-red-600":c?"text-green-700":"group-focus-within:text-two"),children:u(r)}),N&&(0,w.jsx)("div",{onClick:function(){return k((function(e){return!e}))},className:"cursor-pointer w-fit absolute end-2 top-1/2 -translate-y-1/2 ",children:y?(0,w.jsx)(v,{width:24,height:24}):(0,w.jsx)(m,{width:24,height:24})}),(0,w.jsx)("div",{className:"z-[50] absolute bottom-full end-0 text-red-600 bg-gray-300 text-xs  border-red-600 rounded-md overflow-hidden max-w-[200px] ".concat(o?"h-[24px]  p-1 border":"h-0 p-0"," transition-all duration-700"),children:j(null===o||void 0===o?void 0:o.message,u)})]})}},7623:function(e,t,r){var a=r(3168),n=r(184);t.Z=function(e){var t=e.onClick,r=e.title,l=(0,a.$)().t;return(0,n.jsx)("div",{"data-aos":"fade-up","data-aos-offset":-200,className:"flex justify-end m-1 w-fit",children:(0,n.jsx)("button",{type:"button",onClick:t,className:"relative after:absolute after:w-0 after:h-[1px] after:bg-four  hover:after:w-full after:transition-all after:duration-300 after:bottom-0 after:start-0  text-four",children:l(r)})})}},3267:function(e,t,r){r.d(t,{_:function(){return a}});var a={required:function(){return{value:!0,message:"This Field Is Required"}},maxLength:function(e){return{value:e,message:"More Than Validation(".concat(e,")")}},minLength:function(e){return{value:e,message:"Less Than Validation(".concat(e,")")}},isName:function(){return{value:/[A-Za-z]{3,29}/,message:"Name Can Only Contain Letters"}},isEmail:function(){return{value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,message:"Invalid Email Address"}},phoneValidate:function(e){return!!Number(e)||"Invalid Phone Number"}}}}]);
//# sourceMappingURL=892.13cb0074.chunk.js.map