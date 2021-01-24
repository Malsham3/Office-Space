import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBuEaQc-VFFdNlVWeBhNFDr8evyef2chmY",
    authDomain: "office-space-crm.firebaseapp.com",
    databaseURL: "https://office-space-crm-default-rtdb.firebaseio.com",
    projectId: "office-space-crm",
    storageBucket: "office-space-crm.appspot.com",
    messagingSenderId: "238325863839",
    appId: "1:238325863839:web:3527c22b85b7f450c059aa",
    measurementId: "G-F70GJBLHL4"
  };
let app = firebase.initializeApp(firebaseConfig);
let db = app.firestore();

export function auth() {
  return app.auth();
}

export default db;
