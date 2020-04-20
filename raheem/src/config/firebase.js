import firebase from 'firebase/app';
import 'firebase/firestore';


var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: "raheem-mercy",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
};
  
  // Initialize Firebase -- prevent "firebase has already been called" error with the 'if' statement
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase;