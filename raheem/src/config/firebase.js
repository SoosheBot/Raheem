import firebase from 'firebase/app';
import 'firebase/database';
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
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//   const googleProvider = new firebase.auth.GoogleAuthProvider();

  // const database = firebase.database().ref();

// export const authRef = firebase.auth();
// export const loginGoogle = () => firebaseAuth(googleProvider);
// export const raheemRef = database.child('raheem-mercy');
// export const reportsRef = database.child('reports');


  export default firebase;