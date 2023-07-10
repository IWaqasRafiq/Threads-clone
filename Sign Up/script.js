
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
  
  const signup = document.getElementById("signup-form-btn");
  
  signup.addEventListener("click", (event) => {
    event.preventDefault();
    const email = document.querySelector(".signup-email-input").value;
    const password = document.querySelector(".signup-password-input").value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
        // Signed in 
        // alert("user created")
        window.location.href = "../Polls App/index.html";
  
        // ...
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        alert(errorMessage)
        // ..
      });
  });