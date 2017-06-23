// Initialize Firebase
  var config = {

  };

  firebase.initializeApp(config);
  var database = firebase.database();

// Input Field variables
  var trainNameInput = "";
  var destinationInput = "";
  var firstTrainTimeInput = "";
  var frequencyInput = "";

// Button On Click function sends entered info to Firebase

$("#submitButton").on("click", function(event) {
    event.preventDefault();

    trainNameInput = $("#trainNameInput").val().trim();
    destinationInput = $("#destinationInput").val().trim();
    firstTrainTimeInput = $("#firstTrainTimeInput").val().trim();
    frequencyInput = $("#frequencyInput").val().trim();

    database.ref().push({
    trainName: trainNameInput,
    trainDestination: destinationInput,
    firstTrainTime: firstTrainTimeInput,
    trainFrequency: frequencyInput,
    });
  });

// 