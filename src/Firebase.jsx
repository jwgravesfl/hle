// src/firebase.js
import firebase from 'firebase'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDn1WdXuXnGatq5A7uu3qTVZ6tX_tMtDX4",
    authDomain: "leathernlaceus.firebaseapp.com",
    databaseURL: "https://leathernlaceus.firebaseio.com",
    projectId: "leathernlaceus",
    storageBucket: "leathernlaceus.appspot.com",
    messagingSenderId: "501919823905"
  };
firebase.initializeApp(config);

export default firebase;