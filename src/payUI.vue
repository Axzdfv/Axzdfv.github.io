<template>
<div id="app">
  <div id="dropin-wrapper">
    <div id="a"></div>
    <div id="dropin-container"></div>
    <button id="submit-button">Submit payment</button>
  </div>
  {{m}}
  <button>rea</button>
</div>
</template>

<script>
  import * as firebase from "firebase/app";
  import "firebase/auth";
  import "firebase/firestore";
  import axios from 'axios'
  var dropin = require('braintree-web-drop-in');
  
  export default {
    name: payui,
    el: "#app"
    data(){
      return {
        firebaseConfig: {
          apiKey: "AIzaSyDUqQjUOgvHp0dtaH8zTafyD7MAvlz0vlg",
          authDomain: "rubyaetherrake.firebaseapp.com",
          databaseURL: "https://rubyaetherrake.firebaseio.com",
          projectId: "rubyaetherrake",
          storageBucket: "rubyaetherrake.appspot.com",
          messagingSenderId: "862436012917",
          appId: "1:862436012917:web:9e8a952b02a8902b71193c",
          measurementId: "G-YVDV8R9J80"
        },
        db: null,
        m: ""
      }
    },
    created() {
      firebase.initializeApp(this.firebaseConfig);
      var functions = firebase.functions();
      var self = this;
      //self.db = firebase.firestore();
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          self.db=firebase.firestore();
          var uid = firebase.auth().currentUser.uid;
          firebase
            .auth()
            .currentUser.getIdToken()
            .then(function (uidToken) {
              self.getToken(uidToken);
            });
          }
       });
     },
  }
</script>
