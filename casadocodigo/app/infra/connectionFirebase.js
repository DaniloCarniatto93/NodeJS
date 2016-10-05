var Firebase = require("firebase");

var connectFirebase = function (){
var config = {
    apiKey: "AIzaSyBxpPJLounvmN8mXU3m6x0JJroQQ9lwAWo",
    authDomain: "uniaoforte-914f3.firebaseapp.com",
    databaseURL: "https://uniaoforte-914f3.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "201577569232"
  };
  console.log("conectou");
  return Firebase.initializeApp(config);
}


module.exports = function(){
	return connectFirebase;
}