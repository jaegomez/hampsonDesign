
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCV_-6U43pPXgMcoHpBd-QbbRWLi2KbaJE",
    authDomain: "hampsondesign-e9ac3.firebaseapp.com",
    databaseURL: "https://hampsondesign-e9ac3.firebaseio.com",
    storageBucket: "hampsondesign-e9ac3.appspot.com",
    messagingSenderId: "682248612261"
  };
  firebase.initializeApp(config);

var dataRef = firebase.database();


// Initial Values
var firstName = "";
var lastName = "";
var email = "";
var phoneNumber = "";
var message = "";


// Capture Button Click
$("#submitForm").on("click", function() {

    // Dont forget to provide initial data to your Firebase database.
    firstName = $('#firstNameInput').val().trim();
    lastName = $('#lastNameInput').val().trim();
    email = $('#emailInput').val().trim();
    phoneNumber = $('#phoneInput').val().trim();
    message = $('#messageInput').val().trim();


    // Code for the push
    dataRef.ref().push({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        message: message,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
    // Don't refresh the page!
    return false;
});

/*
Dont need it to log information anymore was just using it to check for success


//Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
dataRef.ref().on("child_added", function(childSnapshot) {
    // Log everything that's coming out of snapshot
    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().email);
    console.log(childSnapshot.val().subject);
    console.log(childSnapshot.val().message);
    

// Handle the errors
}, function(errorObject){
    //console.log("Errors handled: " + errorObject.code)
});

*/
