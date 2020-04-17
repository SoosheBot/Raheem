import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCO6v_oMVa9lwKmiaT4VAI3NGj8GeCXtY4",
  authDomain: "raheem-mercy.firebaseapp.com",
  databaseURL: "https://raheem-mercy.firebaseio.com",
  projectId: "raheem-mercy",
  storageBucket: "raheem-mercy.appspot.com",
  messagingSenderId: "29941601473",
  appId: "1:29941601473:web:dec5b326bec24a1c50f040",
  measurementId: "G-3H9BJ0D7SR"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;