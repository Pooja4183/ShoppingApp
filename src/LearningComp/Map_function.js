import React, { useState } from "react";

function Displaylist() {
  const [userInput, setUserInput] = useState("");
  const [arrayData, setArrayData] = useState([]);

  //setting the state inside the function 
  // const getList = (e) => {
  //   let updatedvalue = e.target.value;
  //   setUserData(updatedvalue);
  // };

 const addList =()=>{
  if(userInput !==""){
    setArrayData([...arrayData,userInput]);
  setUserInput("");

  }
  
 }

  // Output button style
  const btnStyle = {
    padding: "1% 2%",
    background: "lightGrey",
    color: "green",
    borderRadius: "5px",
    marginLeft: "2%",
    fontWeight: "bold",
  };
  const inputStyle = {
    padding: "1% 2%",
    borderRadius: "5px",
    marginLeft: "2%",
    fontWeight: "bold",
  };

  return (
    <>
      <h2>Display list items</h2>
      Enter value:
      <input
        type="text"
        onChange={(e)=>setUserInput(e.target.value) }
        placeholder="enter your name"
        name="textname"
        style={inputStyle}
      ></input>
      <button onClick={addList} style={btnStyle}>
        Click here
      </button>
      <ul>
        {arrayData.map((items, index) => (
          <li key={index}>{items}</li>
          ))}
      </ul>
    </>
  );
}

export default Displaylist;
