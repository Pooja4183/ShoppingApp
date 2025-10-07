import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Localstorage() {
  let navigate = useNavigate();
  const nameref = useRef();
  const [signupData, SetData] = useState({
    name: "",
    email: "",
    pass: "",
    is_loggedin: false,
  });

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("signupData"));
    if(data?.is_loggedin){
navigate("/")
    }
 nameref.current.focus();
  },[navigate]
);
  useEffect(() => {
    if (signupData.name || signupData.pass || signupData.email) {
      console.log("User input changed");
    }
   
  }, [signupData]);

  const getValue = (event) => {
    const { name, value } = event.target;
    SetData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  
  const clickbutton = () => {
  console.log(`
    Name: ${signupData.name}
    email: ${signupData.email}
    password: ${signupData.pass}`);
  
  localStorage.setItem("signupData", JSON.stringify(signupData));
  navigate("/login"); // <--- Always go to login after signup
};

  return (
    <>
      <div style={{ padding: "10%" }}>
        <h1>Sign up </h1>
        name :
        <input
          type="text"
          value={signupData.name}
          name="name"
          ref={nameref}
          required
          placeholder="enter your name"
          style={{ margin: "1%" }}
          onChange={getValue}
        />
        <br />
        email :
        <input
          type="text"
          value={signupData.email}
          name="email"
          placeholder="enter your email"
          style={{ margin: "1%" }}
          onChange={getValue}
        />
        <br />
        password :{" "}
        <input
          type="password"
          value={signupData.pass}
          name="pass"
          placeholder="enter your password"
          style={{ margin: "1%" }}
          onChange={getValue}
        />
        <input type="submit" onClick={clickbutton} />
        <p>{}</p>
      </div>
    </>
  );
}

export default Localstorage;
