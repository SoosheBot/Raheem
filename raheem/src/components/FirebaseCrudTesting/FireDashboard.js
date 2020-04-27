import React, { useState } from "react";
import firebase from "../../config/firebase";

import FireUpdate from "./FireUpdate";
import FireAdd from "./FireAdd";
import FireList from "./FireList";

//Testing the firebase collection functionality Dashboard of Firebase 'test" collection

function FireDashboard() {
  const initialItemState = [{ Fname: "", Lname: "", age: 0 }];
  const [editing, setEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState(initialItemState);
  const [currentId, setCurrentId] = useState();

  const editItem = (test) => {
    setEditing(true);
    setCurrentItem({
      Fname: test.Fname,
      Lname: test.Lname,
      age: test.age
    });
    setCurrentId(test.id)
  };

  const updateItem = ({ currentItem }, updatedItem) => {
    console.log(
      "It send the item to the updated item function:",
      updatedItem
      
    );
    setEditing(false);
    firebase
      .firestore()
      .collection("test")
      .doc(currentId)
      .update(updatedItem);
  };

  return (
    <div>
      {/* <h2>Item List</h2> */}
      <FireList editItem={editItem} />
      {/* <h2>Add Item</h2> */}
      {editing ? (
        <FireUpdate
          setEditing={setEditing}
          currentItem={currentItem}
          updateItem={updateItem}
        />
      ) : (
        <FireAdd />
      )}
    </div>
  );

}

export default FireDashboard;