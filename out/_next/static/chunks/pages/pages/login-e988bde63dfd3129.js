(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[158],{3005:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pages/login",function(){return t(9291)}])},5064:function(e,n,t){"use strict";var r=t(5893),s=t(948),o=t(5616),a=(0,s.ZP)(o.Z)((function(e){return{height:"100vh","& .content-center":{display:"flex",minHeight:"100vh",alignItems:"center",justifyContent:"center",padding:e.theme.spacing(5)},"& .content-right":{display:"flex",minHeight:"100vh",overflowX:"hidden",position:"relative"}}}));n.Z=function(e){var n=e.children;return(0,r.jsx)(a,{className:"layout-wrapper",children:(0,r.jsx)(o.Z,{className:"app-content",sx:{minHeight:"100vh",overflowX:"hidden",position:"relative"},children:n})})}},9291:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return L}});var r=t(8520),s=t.n(r),o=t(5893),a=t(7294),i=t(1664),c=t(1163),l=t(5975);l.Z.apps.length||l.Z.initializeApp({apiKey:"AIzaSyD3KH-CmfDqRNwcQUg_MFYV94LpRFONYj8",authDomain:"ordermymenus.firebaseapp.com",projectId:"ordermymenus",storageBucket:"ordermymenus.appspot.com",messagingSenderId:"6381596267",appId:"1:6381596267:web:43c482ac62a3b0082fcb2e",measurementId:"G-25HVTR5K0P"});l.Z.storage();var u=l.Z.auth(),d=new l.Z.auth.GoogleAuthProvider,p=t(5616),h=t(9417),f=t(7720),m=t(9368),g=t(135),x=t(7312),v=t(5861),j=t(3946),w=t(4267),Z=t(4054),b=t(7058),y=t(948),P=t(2734),k=t(6242),C=t(7109),I=t(856),S=t(4463),N=t(5898),O=t(2218),_=(t(5193),t(5064)),D=t(9525);function E(e,n,t,r,s,o,a){try{var i=e[o](a),c=i.value}catch(l){return void t(l)}i.done?n(c):Promise.resolve(c).then(r,s)}function W(e){return function(){var n=this,t=arguments;return new Promise((function(r,s){var o=e.apply(n,t);function a(e){E(o,r,s,a,i,"next",e)}function i(e){E(o,r,s,a,i,"throw",e)}a(void 0)}))}}function A(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function H(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){A(e,n,t[n])}))}return e}var z=(0,y.ZP)(k.Z)((function(e){return A({},e.theme.breakpoints.up("sm"),{width:"28rem"})})),F=(0,y.ZP)("a")((function(e){return{fontSize:"0.875rem",textDecoration:"none",color:e.theme.palette.primary.main}})),R=(0,y.ZP)(I.Z)((function(e){return{"& .MuiFormControlLabel-label":{fontSize:"0.875rem",color:e.theme.palette.text.secondary}}})),B=function(){var e,n=(0,a.useState)({password:"",showPassword:!1}),t=n[0],r=n[1],l=(0,a.useState)(""),y=l[0],k=l[1],I=(0,a.useState)(""),_=I[0],E=I[1],B=((0,P.Z)(),(0,c.useRouter)()),L=W(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.signInWithEmailAndPassword(_,t.password);case 3:n=e.sent,localStorage.setItem("googleAccount",JSON.stringify(n.user)),B.push("/"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),k("Invalid Email or Password"),console.log(JSON.parse(e.t0.message).error.message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])}))),M=W(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.signInWithPopup(d);case 3:n=e.sent,localStorage.setItem("googleAccount",JSON.stringify(n.user)),B.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return(0,o.jsxs)(p.Z,{className:"content-center",children:[(0,o.jsx)(z,{sx:{zIndex:1},children:(0,o.jsxs)(w.Z,{sx:{padding:function(e){return"".concat(e.spacing(12,9,7)," !important")}},children:[(0,o.jsx)(p.Z,{sx:{mb:8,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)("img",{width:"100%",alt:"paypal",src:"/images/logos/logo-hori.png"})}),(0,o.jsxs)(p.Z,{sx:{mb:6},children:[(0,o.jsx)(v.Z,{variant:"h5",sx:{fontWeight:600,marginBottom:1.5},children:"Welcome Again!"}),(0,o.jsx)(v.Z,{variant:"body2",children:"Please sign-in to your account and start the adventure"})]}),(0,o.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){return e.preventDefault()},children:[(0,o.jsx)(g.Z,{autoFocus:!0,fullWidth:!0,value:_,id:"email",onChange:function(e){return E(e.target.value)},label:"Email",sx:{marginBottom:4}}),(0,o.jsxs)(Z.Z,{fullWidth:!0,children:[(0,o.jsx)(x.Z,{htmlFor:"auth-login-password",children:"Password"}),(0,o.jsx)(b.Z,{label:"Password",value:t.password,id:"auth-login-password",onChange:(e="password",function(n){r(H({},t,A({},e,n.target.value)))}),type:t.showPassword?"text":"password",endAdornment:(0,o.jsx)(C.Z,{position:"end",children:(0,o.jsx)(j.Z,{edge:"end",onClick:function(){r(H({},t,{showPassword:!t.showPassword}))},onMouseDown:function(e){e.preventDefault()},"aria-label":"toggle password visibility",children:t.showPassword?(0,o.jsx)(N.Z,{}):(0,o.jsx)(O.Z,{})})})})]}),(0,o.jsxs)(p.Z,{sx:{mb:4,display:"flex",alignItems:"center",flexWrap:"wrap",justifyContent:"space-between"},children:[(0,o.jsx)(R,{control:(0,o.jsx)(m.Z,{}),label:"Remember Me"}),(0,o.jsx)(i.default,{passHref:!0,href:"/",children:(0,o.jsx)(F,{onClick:function(e){return e.preventDefault()},children:"Forgot Password?"})})]}),y&&(0,o.jsx)("p",{style:{color:"red"},children:y}),(0,o.jsx)(h.Z,{fullWidth:!0,size:"large",variant:"contained",sx:{marginBottom:7},onClick:function(){return L()},children:"Login"}),(0,o.jsxs)(p.Z,{sx:{display:"flex",alignItems:"center",flexWrap:"wrap",justifyContent:"center"},children:[(0,o.jsx)(v.Z,{variant:"body2",sx:{marginRight:2},children:"New on our platform?"}),(0,o.jsx)(v.Z,{variant:"body2",children:(0,o.jsx)(i.default,{passHref:!0,href:"/pages/register",children:(0,o.jsx)(F,{children:"Create an account"})})})]}),(0,o.jsx)(f.Z,{sx:{my:5},children:"or"}),(0,o.jsx)(p.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)(i.default,{href:"/",passHref:!0,children:(0,o.jsxs)(j.Z,{component:"a",onClick:function(){return M()},children:[(0,o.jsx)(S.Z,{sx:{color:"#db4437"}}),"oogle"]})})})]})]})}),(0,o.jsx)(D.Z,{})]})};B.getLayout=function(e){return(0,o.jsx)(_.Z,{children:e})};var L=B},9525:function(e,n,t){"use strict";var r=t(5893),s=t(7294),o=t(1730),a=t(948),i=t(2734),c=(0,a.ZP)("img")((function(){return{bottom:0,zIndex:-1,width:"100%",position:"absolute"}})),l=(0,a.ZP)("img")((function(){return{left:0,bottom:0,position:"absolute"}})),u=(0,a.ZP)("img")((function(){return{right:0,bottom:0,position:"absolute"}}));n.Z=function(e){var n=e.image1,t=e.image2,a=(0,i.Z)();return(0,o.Z)(a.breakpoints.down("md"))?null:(0,r.jsxs)(s.Fragment,{children:[n||(0,r.jsx)(l,{alt:"tree",src:"/images/pages/auth-v1-tree.png"}),(0,r.jsx)(c,{alt:"mask",src:"/images/pages/auth-v1-mask-".concat(a.palette.mode,".png")}),t||(0,r.jsx)(u,{alt:"tree-2",src:"/images/pages/auth-v1-tree-2.png"})]})}}},function(e){e.O(0,[539,972,724,804,800,774,888,179],(function(){return n=3005,e(e.s=n);var n}));var n=e.O();_N_E=n}]);