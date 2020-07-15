
<template>
<div id="app">
    <label for="username">Username:</label>
    <input id="username" placeholder="754" type="text" v-model="username"/><br />
    <label for="password">Password:</label>
    <input id="password" type="text" v-model="password"></input><br />
    {{message}}
    <button @click="signUp">Sign Up</button>
</div>
</template>

<script>
  import * as firebase from "firebase/app";
  import "firebase/auth";
  
  export default{
    name: "signup",
    el: "#app",
  data() {
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
      username: "",
      password: "",
      message: "testing 123"
    };
  },
  methods:{
    signUp(){
      firebase.initializeApp(this.firebaseConfig);
        if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        console.log("signing out");
        // [END signout]
      } else {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.username, this.password)
          .then(function () {
            this.message="986";
            a();
            // window.location.href("http://stackoverflow.com");
          })
          .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode == "auth/weak-password") {
              this.message = "The password is too weak.";
            } else {
              //console.log(errorMessage);
            }
            this.message=errorMessage;
            // [END_EXCLUDE]
          });
        //window.location.replace("http://stackoverflow.com");
      }
      function a() {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            console.log("9");
            window.location.href = "http://stackoverflow.com"; //After successful signup, user will be redirected to home.html
          }
        });
      }
    }
  }
  }
  
</script>
