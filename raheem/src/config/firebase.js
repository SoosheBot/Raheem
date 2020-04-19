import firebase from 'firebase/app';
import 'firebase/firebase-auth'
import 'firebase/database';
import 'firebase/firestore';



// var firebaseConfig = {
//   apiKey: "AIzaSyCO6v_oMVa9lwKmiaT4VAI3NGj8GeCXtY4",
//   authDomain: "raheem-mercy.firebaseapp.com",
//   databaseURL: "https://raheem-mercy.firebaseio.com",
//   projectId: "raheem-mercy",
//   storageBucket: "raheem-mercy.appspot.com",
//   messagingSenderId: "29941601473",
//   appId: "1:29941601473:web:dec5b326bec24a1c50f040",
//   measurementId: "G-3H9BJ0D7SR"
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: "raheem-mercy",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,

  // may not be using the following, commenting it out if so
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//   const googleProvider = new firebase.auth.GoogleAuthProvider();

  // const database = firebase.database().ref();

// export const authRef = firebase.auth();
// export const loginGoogle = () => firebaseAuth(googleProvider);
// export const raheemRef = database.child('raheem-mercy');
// export const reportsRef = database.child('reports');


  export default firebase;