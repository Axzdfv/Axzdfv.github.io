(function(e){function r(r){for(var n,s,i=r[0],u=r[1],c=r[2],l=0,d=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);p&&p(r);while(d.length)d.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,r=0;r<o.length;r++){for(var t=o[r],n=!0,i=1;i<t.length;i++){var u=t[i];0!==a[u]&&(n=!1)}n&&(o.splice(r--,1),e=s(s.s=t[0]))}return e}var n={},a={signup:0},o=[];function s(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=n,s.d=function(e,r,t){s.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,r){if(1&r&&(e=s(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)s.d(t,n,function(r){return e[r]}.bind(null,n));return t},s.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(r,"a",r),r},s.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=r,i=i.slice();for(var c=0;c<i.length;c++)r(i[c]);var p=u;o.push([1,"chunk-vendors"]),t()})({1:function(e,r,t){e.exports=t("2640")},2640:function(e,r,t){"use strict";t.r(r);var n=t("2b0e"),a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{id:"app"}},[t("label",{attrs:{for:"username"}},[e._v("Username:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{id:"username",placeholder:"754",type:"text"},domProps:{value:e.username},on:{input:function(r){r.target.composing||(e.username=r.target.value)}}}),t("br"),t("label",{attrs:{for:"password"}},[e._v("Password:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{id:"password",type:"text"},domProps:{value:e.password},on:{input:function(r){r.target.composing||(e.password=r.target.value)}}}),t("br"),e._v(" "+e._s(e.message)+" "),t("button",{on:{click:e.signUp}},[e._v("Sign Up")])])},o=[],s=t("59ca"),i=(t("ea7b"),t("e71f"),{name:"signup",el:"#app",data:function(){return{firebaseConfig:{apiKey:"AIzaSyDUqQjUOgvHp0dtaH8zTafyD7MAvlz0vlg",authDomain:"rubyaetherrake.firebaseapp.com",databaseURL:"https://rubyaetherrake.firebaseio.com",projectId:"rubyaetherrake",storageBucket:"rubyaetherrake.appspot.com",messagingSenderId:"862436012917",appId:"1:862436012917:web:9e8a952b02a8902b71193c",measurementId:"G-YVDV8R9J80"},username:"",password:"",message:"",id:"",db:""}},created:function(){s["initializeApp"](this.firebaseConfig),this.db=s["firestore"](),s["auth"]().currentUser?this.message="user already logged in":this.message="Sign up!"},methods:{signUp:function(){var e=this;s["auth"]().createUserWithEmailAndPassword(e.username,e.password).then((function(){s["auth"]().currentUser?(console.log("Signup successful!"),e.message="Signup successful!",e.id=s["auth"]().currentUser.uid,e.addUser(e.id)):console.log("???")})).catch((function(r){r.code;var t=r.message;e.message=t,console.log(t)}))},addUser:function(e){var r=this;this.db.collection("users").doc(e).set({first:"Anne",last:"Onymous",dispName:"AoniQuilt",email:r.username,eventsOwned:[],eventsJoined:[]}).then((function(e){console.log("Document written with ID: ",e.id)})).catch((function(e){console.error("Error adding document: ",e)}))}}}),u=i,c=t("2877"),p=Object(c["a"])(u,a,o,!1,null,null,null),l=p.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(l)}}).$mount("#app")}});
//# sourceMappingURL=signup.1935aa86.js.map