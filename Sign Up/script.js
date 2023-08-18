
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
  
  const signup = document.getElementById("signup-form-btn");
  
  signup.addEventListener("click", (event) => {
    event.preventDefault();
    const email = document.querySelector(".signup-email-input").value;
    const password = document.querySelector(".signup-password-input").value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
        // Signed in 
        // alert("user created")
        window.location.href = "../Threads Clone/index.html";
  
        // ...
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        alert(errorMessage)
        // ..
      });
  });