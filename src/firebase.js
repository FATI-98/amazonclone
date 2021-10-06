import firebase from'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDOmR3rCBgoL3t-Bi-3sAl2MtTq5MSnUsk",
    authDomain: "e-challenge-aadca.firebaseapp.com",
    projectId: "e-challenge-aadca",
    storageBucket: "e-challenge-aadca.appspot.com",
    messagingSenderId: "336201587472",
    appId: "1:336201587472:web:4e9c541c7527fcc1cca395",
    measurementId: "G-SRQB5B9FEW"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};
