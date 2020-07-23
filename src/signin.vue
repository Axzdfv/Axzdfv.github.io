 <template>
 <div id="app">
   <label for="username">Username:</label>
   <input id="username" placeholder="Enter username here" type="text" v-model="username" /><br />
   <label for="password">Password:</label>
   <input id="password" type="text" v-model="password"></input><br />
   {{message}}
   <button @click="signIn">Sign In</button>
 </div>
</template>

<script>
  import * as firebase from "firebase/app";
  import "firebase/auth";
export default {
  name: "signin",
  el: "#app",
  data: {
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
    message: "w"
  } 
  created: function () {
    firebase.initializeApp(this.firebaseConfig);
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
    }
  }
  }
</script>
