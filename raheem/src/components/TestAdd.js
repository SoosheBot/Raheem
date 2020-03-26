import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import {userForm} from 'react-hook-form'
import TestList from "./Test";
import TestUpdate from './TestUpdate'

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

function TestAdd(props) {

  const [info, setInfo] = useState({Fname:"", Lname:"", age:0})
  const [id, setId] = useState();
  const [uddata, setUddata] = useState({
    id:"",
    Fname:"",
    Lname:"",
    age:0
  })

  const handleChange = e =>{
    console.log(info);
    setInfo({...info, [e.target.name]: e.target.value});
    console.log("HandleChange - Fire")
  }

  const handleEdit = (test) =>{
    console.log(`handle Edit: ${test.Fname}`)
    setUddata({
      id:test.id,
      Fname:test.Fname,
      Lname:test.Lname,
      age:test.age
    })
    TestUpdate.intiset();

  }

  const handleSubmit = e => {
    console.log(`e: ${e}, id: ${id}, info: ${info}`)
    e.preventDefault();
    console.log("hanldeSubmit - fire")
    
    firebase
    .firestore()
    .collection('test')
    .doc()
    .set(info)

    setId("");
  }

  const [tests, setTests] = useState([]);
    const collection = useCollection("test", tests, setTests);

  return (
    <div id = "main">
      <form onSubmit={handleSubmit} >
        <input id="Fname" type="text" name="Fname" placeholder="First Name" onChange={handleChange}/>
        <input id="Lname" type="text" name="Lname" placeholder="Last Name" onChange={handleChange}/>
        <input id="Age" type="number" name="age" placeholder={0} onChange={handleChange}/>
        <button type="submit">Submit</button>
      </form>
      <div>
      {collection.map(test =>
          <li key={test.id}>
              <h2>First Name: {test.Fname}</h2>
              <h2>Last Name: {test.Lname}</h2>
              <h2>Age: {test.age}</h2>
              <button type="Submit" onClick={() => handleEdit(test)}>Edit</button>
          </li>
      )}
      </div>
      <TestUpdate id={uddata.id} Fname={uddata.Fname} Lname={uddata.Lname} age={uddata.age}/>

    </div>
  );
}

export default TestAdd;