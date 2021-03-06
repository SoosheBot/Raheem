import React, { useState, useEffect } from "react";

//Testing the firebase collection Update

const FireUpdate = ({ setEditing, currentItem, updateItem }) => {
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


export default FireUpdate;

