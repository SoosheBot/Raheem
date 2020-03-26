import React, { useState } from "react";
import firebase from "firebase";

const AddItemForm = () => {
  //useState() hook captures the value from the input value
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [age, setAge] = useState(0);
  

  /* The onSubmit function we takes the 'e' 
    or event and submits it to Firebase
    */
  const onSubmit = e => {
    /* 
    preventDefault is important because it 
    prevents the whole page from reloading
    */
    e.preventDefault();
    firebase
      .firestore()
      .collection("test")
      .add({
        Fname,
        Lname,
        age
      })
      //.then will reset the form to nothing
      .then(() => setFname(""), setLname(""), setAge(""));
  };

  return (
    
      <form onSubmit={onSubmit}>
        <input type="text" name="Fname" value={Fname.Fname} placeholder="First Name" onChange={e => setFname(e.currentTarget.value)}/>
        <input type="text" name="Lname" value={Lname.Lname} placeholder="Last Name" onChange={e => setLname(e.currentTarget.value)}/>
        <input type="number" name="age" value={age.age} placeholder={0} onChange={e => setAge(e.currentTarget.value)}/>
      <button>Add</button>
    </form>
  );
};
export default AddItemForm;