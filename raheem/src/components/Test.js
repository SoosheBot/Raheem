import React, { useState, useEffect } from "react";
import firebase from "../firebase";

function useCollection(collectionName, coll, setColl) {

  useEffect(() => {
    firebase
      .firestore()
      .collection(collectionName)
      .onSnapshot(snapshot => {
        const newColl = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setColl(newColl);
      });
  }, []);

  return coll;
}

function TestList() {
  const [tests, setTests] = useState([]);
    const collection = useCollection("test", tests, setTests);

  return (
    <div>
      {collection.map(test =>
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
