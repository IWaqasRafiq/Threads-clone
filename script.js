
const firebaseApp = firebase.initializeApp(
  {
    apiKey: "AIzaSyDydCU0Fe2_TcJVB98idMF45dyz6423gxQ",
    authDomain: "threads-clone-web.firebaseapp.com",
    databaseURL: "https://threads-clone-web-default-rtdb.firebaseio.com",
    projectId: "threads-clone-web",
    storageBucket: "threads-clone-web.appspot.com",
    messagingSenderId: "1093836480632",
    appId: "1:1093836480632:web:4d9db806c2b1bb7a490d8d"
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
    window.location.href = "./Threads Clone/index.html";
    // ...
  })
  .catch((error) => {
    alert("error try again")
    console.log(error.code);
    console.log(error.message);
  });
});