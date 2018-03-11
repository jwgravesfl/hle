// src/firebase.js
import firebase from 'firebase'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyALsO-cgn9wxtwH5W6YuhxwT5-LhcZR-FQ",
    authDomain: "heatherloveent.firebaseapp.com",
    databaseURL: "https://heatherloveent.firebaseio.com",
    projectId: "heatherloveent",
    storageBucket: "heatherloveent.appspot.com",
    messagingSenderId: "457046907201"
  };
firebase.initializeApp(config);

export default firebase;