// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBtsVzA_sKCy7XzOwbeVzAHbPlMwohGKTU",
    authDomain: "train-scheduler-wk7.firebaseapp.com",
    databaseURL: "https://train-scheduler-wk7.firebaseio.com",
    projectId: "train-scheduler-wk7",
    storageBucket: "",
    messagingSenderId: "940603114062"
  };

  firebase.initializeApp(config);
  
  var database = firebase.database();