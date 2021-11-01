import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/storage";


var firebaseConfig = {
  apiKey: "AIzaSyDpx2wHDPYOMUPiU8SP9C06uA0c_oJU25s",
  authDomain: "vite-legram.firebaseapp.com",
  projectId: "vite-legram",
  storageBucket: "vite-legram.appspot.com",
  messagingSenderId: "718663980669",
  appId: "1:718663980669:web:f7e4bdda34eaaffcef4314",
  measurementId: "G-439SQ3R5QR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

firebase.firestore()

export default firebase;