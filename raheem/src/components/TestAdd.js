import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import {userForm} from 'react-hook-form'

function TestAdd(props) {

  const [info, setInfo] = useState({Fname:"", Lname:"", age:0})

  const handleChange = e =>{
    setInfo({...info, [e.target.name]: e.target.value});
    console.log("HandleChange - Fire")
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log("hanldeSubmit - fire")
    
    firebase
    .firestore()
    .collection('test')
    .doc()
    .set(info)
  }
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input type="text" name="Fname" placeholder="First Name" onChange={handleChange}/>
        <input type="text" name="Lname" placeholder="Last Name" onChange={handleChange}/>
        <input type="number" name="age" placeholder={0} onChange={handleChange}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TestAdd;