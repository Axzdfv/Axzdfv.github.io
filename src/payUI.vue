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
     methods: {
       getToken(uidToken) {
         var self = this;
         axios
          .get(
            "https://us-central1-rubyaetherrake.cloudfunctions.net/brntreeCliTkn",
            {
              params: {
                uidToken: uidToken
              }
            }
          )
          .then(function (res) {
            var token = res.data.token;
            self.createDropin(token);
          })
          .catch(function (error) {
            console.log(error.toJSON());
          });
      },
      createDropin(token) {
        var self = this;
        dropin.create(
          {
            // Insert your tokenization key here
            authorization: token,
            container: "#dropin-container"
          },
          function (createErr, instance) {
            document
              .querySelector("#submit-button")
              .addEventListener("click", function () {
                instance.requestPaymentMethod(function (
                  requestPaymentMethodErr,
                  payload
                ) {
                axios
                  .get(
                    "https://us-central1-rubyaetherrake.cloudfunctions.net/pay",
                    {
                      params: {
                        paymentMethodNonce: payload.nonce,
                        uid: firebase.auth().currentUser.uid,
                        eventId: "6T3kaqONzK4E7oLqHPYJ"
                      }
                    })
                  .then(function (res) {
                    self.m = res.data;
                  })
                  .catch(function (err) {
                    console.log(err);
                    self.m = err;
                    });
              });
            });
        });
      }
      }
  }
</script>
