import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCODTvQaM5oTx005W9izkYPHRgBei89ME8",
  authDomain: "ecommerce-redux-react-a6fbd.firebaseapp.com",
  projectId: "ecommerce-redux-react-a6fbd",
  storageBucket: "ecommerce-redux-react-a6fbd.appspot.com",
  messagingSenderId: "477276801858",
  appId: "1:477276801858:web:b66ca633e914dc6fe296db",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const auth = fb.auth();

export const db = fb.firestore();
