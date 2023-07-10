
const firebaseApp = firebase.initializeApp(
  {
    apiKey: "AIzaSyCzZTDuR5mwE-2Wq6D8-cK3lDnfpAkecbw",
    authDomain: "real-time-polling-app.firebaseapp.com",
    databaseURL: "https://real-time-polling-app-default-rtdb.firebaseio.com",
    projectId: "real-time-polling-app",
    storageBucket: "real-time-polling-app.appspot.com",
    messagingSenderId: "151148454470",
    appId: "1:151148454470:web:d1e8eaa2c32102e4f36047"
  });

// Initialize Firebase
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

console.log();


//////   log in page ////////

const logIn = document.getElementById("login-form-btn");

logIn.addEventListener("click", (event) => {
  event.preventDefault();
  const email = document.querySelector(".login-email-input").value;
  const password = document.querySelector(".login-password-input").value;

firebase.auth().signInWithEmailAndPassword(email, password)
  .then(() => {
    // Signed in 
    // alert("Your successfully log In")
    window.location.href = "./Polls App/index.html";
    // ...
  })
  .catch((error) => {
    alert("error try again")
    console.log(error.code);
    console.log(error.message);
  });
});