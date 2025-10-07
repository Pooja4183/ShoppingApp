import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function LoginUser() {
  const navigate = useNavigate();
  const nameref = useRef();
  const attemptRef = useRef(0);
  const [signupData, SetData] = useState({
    email: "",
    pass: "",
  });

  const {login} = useContext(AuthContext)
  useEffect(() => {
 
    nameref.current.focus(); // Keep focusing on input field for better UX
  }, []);

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

      login(ParsedData);
      navigate('/');
      

      // ✅ Login success 
      localStorage.setItem(
        "signupData",
        JSON.stringify({ ...ParsedData, is_loggedin: true })
      );

      navigate("/"); // ✅ Redirect after login
    } else {
      attemptRef.current += 1;
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
        <p>
  Don't have an account?{" "}
  <span
    style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
    onClick={() => navigate("/signup")}
  >
    Create Account
  </span>
</p>
      </div>
      
    </>
  );
}

export default LoginUser;
