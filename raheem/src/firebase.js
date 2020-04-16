import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBz7WrOfVZUkPoQvkC-Kd75z-FDOa4LnAo",
    authDomain: "raheem-b6ed6.firebaseapp.com",
    databaseURL: "https://raheem-b6ed6.firebaseio.com",
    projectId: "raheem-b6ed6",
    storageBucket: "raheem-b6ed6.appspot.com",
    messagingSenderId: "629185099277",
    appId: "1:629185099277:web:536c4ed806980c15a30744"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;