import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import {GetAllDataFromCollection, GetDataFromCollectionByCity} from "../FireBase-Utils/Get"

// function useTests() {
//   const [tests, setTests] = useState([]);

//   useEffect(() => {
//     // firebase
//     //   .firestore()
//     //   .collection("test")
//     //   .onSnapshot(snapshot => {
//     //     const newTests = snapshot.docs.map(doc => ({
//     //       id: doc.id,
//     //       ...doc.data()
//     //     }));

//     //     setTests(newTests);
//     //   });

//     setTests(GetAllDataFromCollection('test'));
//   }, []);

//   return tests;
// }

function TestList() {
    const tests = useTests();

  return (
    <div>
      {console.log(tests)}
      {tests.map(test =>
          <li key={test.id}>
              <h2>First Name: {test.fname}</h2>
              <h2>Last Name: {test.lname}</h2>
              <h2>Age: {test.age}</h2>
          </li>
      )}
    </div>
  );
}

export default TestList;
