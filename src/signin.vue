<template>
  <div id="app">
   <label for="username">Username:</label>
   <input id="username" placeholder="Enter username here" type="text" v-model="username" /><br />
   <label for="password">Password:</label>
   <input id="password" type="text" placeholder="Enter password here" v-model="password"></input><br />
   {{message}}
   <button @click="signIn">Sign In</button>
{{id}}
 </div>
</template>

<script>
  import * as firebase from "firebase/app";
  import "firebase/auth";
  import "firebase/firestore";
export default {
  name: 'signin',
  el: "#app",
  data() {
    return{
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
    message: "w",
    id: "",
    db: null
    }
  },
  created: function () {
    firebase.initializeApp(this.firebaseConfig);
    this.db = firebase.firestore();
    if (firebase.auth().currentUser) {
      this.message = "user already logged in";
    } else {
      this.message = "log in!";
    }
  },
  methods: {
    signIn() {
      var self = this;
      firebase
        .auth()
        .signInWithEmailAndPassword(self.username, self.password)
        .then(function () {
          if (firebase.auth().currentUser) {
            console.log("asgj");
            self.message = "Login successful!";
            self.id = firebase.auth().currentUser.uid;
            self.addUser(self.id);
          } else {
            console.log("zzzz");
          }
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          self.message = errorMessage;
          console.log(errorMessage);
          // ...
        });
    },
    addUser(id) {
      var self=this;
      this.db.collection("users")
        .doc(id).set({
          first: "Anne",
          last: "Onymous",
          born: 1999,
          test: "zxc"
        })
        .then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    }
  }
}
</script>
