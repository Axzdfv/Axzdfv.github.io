
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
new Vue({
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
    message: ""
    }
  },
  created: function () {
    firebase.initializeApp(this.firebaseConfig);
    if (firebase.auth().currentUser){
      this.message = "user already logged in";
    } else {
      this.message = "Sign up!";
   }
  },
  methods: {
    signUp() {
      var self = this;
      firebase
        .auth()
        .createUserWithEmailAndPassword(self.username, self.password)
        .then(function () {
          if (firebase.auth().currentUser){
            console.log("Signup successful!");
            self.message = "Signup successful!";
          } else {
            console.log("???");
          }
      })
        .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          self.message = errorMessage;
          console.log(errorMessage);
        });
    }
  }
});
  }
  
</script>
