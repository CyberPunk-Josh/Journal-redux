import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyD-FP6N8GNA_NuWuRzkBFTTKgoMv4A9p5M",
  
    authDomain: "react-redux-dc975.firebaseapp.com",
  
    projectId: "react-redux-dc975",
  
    storageBucket: "react-redux-dc975.appspot.com",
  
    messagingSenderId: "900876453513",
  
    appId: "1:900876453513:web:3c92cf82f3d57b83c0a858"
  
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}