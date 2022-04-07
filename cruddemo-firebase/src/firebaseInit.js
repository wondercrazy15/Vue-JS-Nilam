import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAExOH-bGf8dvcD29wBM8INjRK2AWwt5k4",
    authDomain: "vue-firebase-3f76e.firebaseapp.com",
    databaseURL: "https://vue-firebase-3f76e.firebaseio.com",
    projectId: "vue-firebase-3f76e",
    storageBucket: "vue-firebase-3f76e.appspot.com",
    messagingSenderId: "79656142642",
    appId: "1:79656142642:web:675e5f4456a0465d34792b"
  };
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const db = firebaseApp.firestore();
