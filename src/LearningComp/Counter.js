import React, { useState } from "react";

 const Counter = () => {
  const [no, setNo] = useState(0);

  const increament = () => {
    setNo(no + 1);
  };

  const decreament = () => {
    setNo(no - 1);
  };

  const reset = () => {
    setNo(0);
  };

  const updateValue = (e)=>{
  //  e.target.value;
   console.log( e.target.value)
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

  // Style for the number button
  const numberBtnStyle = {
    marginLeft: "2%",
    padding: "1%",
    background: "Green",
    color: "white",
    borderRadius: "5px",
    fontWeight: "bold",
    marginTop: "20px",
  };

  return (
    <div style={{ marginLeft: "15%", marginTop: "10%" }}>
      <h1 style={{ marginLeft: "2%" }}>Counter</h1>
      <div>
        <label style={{ marginLeft: "2%" }}>Enter your name: </label>
        <input
          style={{ padding: "1%", borderRadius: "5px" }}
          type="text"
          name="name"
          placeholder="your name"
          onChange={updateValue}
        ></input>
      
        
        
        <br></br>
        <button style={numberBtnStyle} onClick={increament}>
          + increament
        </button>
        <button style={numberBtnStyle} onClick={decreament}>
          - decreamentcreament
        </button>
        <button style={numberBtnStyle} onClick={reset}>
          reset
        </button>
        <button style={btnStyle}>{no}</button>
      </div>
    </div>
  );
};

export default Counter;
