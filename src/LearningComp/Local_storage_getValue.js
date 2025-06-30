import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginUser() {
  let navigate = useNavigate();
  const nameref = useRef();
  const attemptRef = useRef(0)
  const [signupData, SetData] = useState({
    email: "",
    pass: "",
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("signupData"));
    if (data?.is_loggedin === true) {
      navigate("/"); // Redirect to home if alredy logged in
    }
    nameref.current.focus();
  },[navigate]);

  const getValue = (event) => {
    const { name, value } = event.target;
    SetData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  const clickbutton = () => {
    const ParsedData = JSON.parse(localStorage.getItem("signupData"));

    if (
      ParsedData &&
      ParsedData.email === signupData.email &&
      ParsedData.pass === signupData.pass
    ) {
      alert("login success");
      localStorage.setItem("signupData",JSON.stringify({...ParsedData, is_loggedin: true}))
      navigate("/");
    } else {
      attemptRef.current+= 1;
      alert(`login failed (${attemptRef.current} attempts)`);
    }
  };

  return (
    <>
      <div style={{ padding: "10%" }}>
        <h1>Login</h1>
        email :
        <input
          type="text"
          value={signupData.email}
          name="email"
          ref={nameref}
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
        <input type="button" onClick={clickbutton} value="Login" />
      </div>
    </>
  );
}

export default LoginUser;
