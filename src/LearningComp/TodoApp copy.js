import React, { useState } from "react";

function TodoApp() {
  const [userInput, setUserInput] = useState("");
  const [arrayData, setArrayData] = useState([]);

  //setting the state inside the function
  // const getList = (e) => {
  //   let updatedvalue = e.target.value;
  //   setUserData(updatedvalue);
  // };

  const addList = () => {
    if (userInput !== "") {
      setArrayData([...arrayData, userInput]);
      setUserInput("");
    }
  };

  // const deleteItems = () => {
  //   var a = {arrayData} // we should call the state in a function inside the curly braces

  //   console.log(a);

  //   arrayData.map((itam,index) =>
  //   {
      
  //   })


  // };

  const removeItem = (arrayData) => {
    setArrayData((prev) => {
      return prev.filter((item, index) => index !== arrayData);
      
    });
  };

   const editItems = () => {
    // setUserInput("");
  };
  

  // Output button style
  const btnStyle = {
    padding: "1% 2%",
    background: "lightGrey",
    color: "black",
    borderRadius: "5px",
    marginLeft: "2%",
     marginTop: "2%",
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
      <h2>Display List</h2>
      Enter items:
      <input
        type="text"
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="enter your name"
        name="textname"
        style={inputStyle}
      />
      <button onClick={addList} style={btnStyle}>
        Add
      </button>
     
     
     
      <ul>
        {arrayData.map((items, index) =>(
            <li key={index}>
             
              {index}:{items}{''}
            
                <button onClick={editItems} style={btnStyle}>
                  Edit
                </button>
                
                
                {/* <button onClick={()=>{setArrayData(arrayData.filter(index == index))}} style={btnStyle}>
                Delete
                </button> */}

                
            
            </li>
          
        ))}
      </ul>

      <ul>
        {arrayData.map((item, index) => (
          <li onClick={() => removeItem(index)} key={index}>
            {index}{item}
          </li>
        ))}
    </ul>
   
    </>
  );
}

export default TodoApp1;

//................................................




