import React, { useState, useEffect } from "react";
import firebase from "../../firebase";

//NOTE -- THIS COLLECTION HAS BEEN DISABLED IN FIREBASE FOR PRODUCTION, USERS WILL HAVE ADD AND GET PERMISSIONS ONLY--NO PUT/DELETE
const useItems = () => {
  const [items, setItems] = useState([]); //useState() hook, sets initial state to an empty array


  useEffect(() => {
    const unsubscribe = firebase
      .firestore() //access firestore
      .collection("test") //access "items" collection
      .onSnapshot(snapshot => {
        //You can "listen" to a document with the onSnapshot() method.
        const listItems = snapshot.docs.map(doc => ({
          //map each document into snapshot
          id: doc.id, //id and data pushed into items array
          ...doc.data() //spread operator merges data to id.
        }));
        setItems(listItems); //items is equal to listItems
      });
    return () => unsubscribe();
  }, []);
  return items;
};
const deleteItem = id => {
  firebase
    .firestore()
    .collection("test")
    .doc(id)
    .delete();
};
const TestList = ({ editItem }) => {
  const listItems = useItems();

  return (
    <div>
      {listItems.map(test => (
        <li key={test.id}>
          <h2>First Name: {test.Fname}</h2>
          <h2>Last Name: {test.Lname}</h2>
          <h2>Age: {test.age}</h2>
          <button onClick={() => editItem(test)}>Edit</button>
          <button onClick={() => deleteItem(test.id)}>Delete</button>
        </li>
      ))}
    </div>
  );
};
export default TestList;
