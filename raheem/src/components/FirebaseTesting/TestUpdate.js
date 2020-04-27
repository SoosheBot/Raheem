import React, { useState, useEffect } from "react";

//NOTE -- THIS COLLECTION HAS BEEN DISABLED IN FIREBASE FOR PRODUCTION, USERS WILL HAVE ADD AND GET PERMISSIONS ONLY--NO PUT/DELETE

const TestUpdate = ({ setEditing, currentItem, updateItem }) => {
    const [item, setItem] = useState(currentItem);

    useEffect(() => {
        setItem(currentItem);
        console.log("useEffect passes the currentItem: ", currentItem);
      }, [currentItem]);
    
      const onSubmit = e => {
        e.preventDefault();
        console.log("onSubmit passes the id and items", item);
        updateItem({ currentItem }, item);
      };

      const onChange = e => {
        const { name, value } = e.target;
        setItem({ ...item, [name]: value });
      };


  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="Fname" value={item.Fname} placeholder="First Name" onChange={onChange}/>
        <input type="text" name="Lname" value={item.Lname} placeholder="Last Name" onChange={onChange}/>
        <input type="number" name="age" value={item.age} placeholder={0} onChange={onChange}/>
        <button>Update</button>
        <button onClick={() => setEditing(false)}>Cancel</button>
      </form>
    </>
  )
}


export default TestUpdate;

