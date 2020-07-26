<template>
<component is="script" src="https://api.mqcdn.com/sdk/place-search-js/v1.0.0/place-search.js" />
<component is="script" src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js" />
<component is="style" src="https://api.mqcdn.com/sdk/place-search-js/v1.0.0/place-search.css" />
<input type="search" id="addrPicker" placeholder="Start Searching..." />
<div id="eventCreator">
  <br/>
  <label for="desc">Event Description:</label>
  <input id="desc" type="text" placeholder="event description" v-model="eventDesc"></input>
<br />
<label for="name">Event Name:</label>
  <input id="name" type="text" placeholder="event name" v-model="eventName"></input>
  <div>Address: {{addr}}</div>
  <div>Latitude: {{lat}}</div>
  <div>Longitude: {{lng}}</div>
  <div>User: {{user}}</div>
  <button @click="getLatLn">Create Event</button>
</div>
</template>

<script>
  import * as firebase from "firebase/app";
  import "firebase/auth";
  import "firebase/firestore";
  export default{
    name: "eventCreator",
    el: "#eventCreator",
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
      eventDesc: "",
      eventName: "",
      addr: "",
      lat: "",
      lng: "",
      user: "",
      latLn: null,
      key: "wGXUDMy8NxdaUO2znqvMGqrI85LhRA68",
      db: null
      }
    },
    methods: {
    getLatLn() {
      if (firebase.auth().currentUser) {
        this.user = firebase.auth().currentUser.uid;
      }
      var self = this;
      self.addr = document.getElementById("addrPicker").value;
      var config = {
        params: {
          key: self.key,
          location: self.addr
        },
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "x-access-token, Origin, X-Requested-With, Content-Type, Accept",
          "Access-Control-Allow-Methods": "GET"
        }
      };
      axios
        .get("https://www.mapquestapi.com/geocoding/v1/address", config)
        .then(function (response) {
          var coor = response.data.results[0].locations[0].latLng;
          self.lat = coor.lat;
          self.lng = coor.lng;
          self.createEvent();
        })
        .catch(function (response) {
          console.log(response);
        });
    },
    createEvent() {
      var self = this;
      var newDoc = self.db.collection("events").doc();
      var newDocId = newDoc.id;
      newDoc
        .set({
          address: self.addr,
          lat: self.lat,
          lng: self.lng,
          dscr: self.eventDesc,
          time: "10:40 AM PST",
          name: self.eventName,
          owner: self.user
        })
        .then(function (a) {
          console.log("event added");
        })
        .catch(function (e) {
          console.log("azxs");
          console.log(e);
        });

      self.db
        .collection("users")
        .doc(self.user)
        .update({
          events: firebase.firestore.FieldValue.arrayUnion(newDocId)
        })
        .then(function (doc) {
          console.log("qwert");
        })
        .catch(function (err) {
          console.log("Errojr getting document", err);
        });
    }
  },
  created: function () {
    placeSearch({
      key: this.key,
      container: document.querySelector("#addrPicker")
    });
    firebase.initializeApp(this.firebaseConfig);
    this.db = firebase.firestore();
  }
}
</script>
