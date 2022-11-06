import React from "react";
import "./pages.css";
import {NavLink} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
const Login = () => {
  const [email, setemail] = useState(" ");
  const [password, setpassword] = useState("");

  const handeldlogin = async () => {
    await axios
      .post("http://localhost:8500/login", {email,password})
      .then((res) => localStorage.setItem("token",res.data.token))
      .catch((error) => console.log(error))
  };
  return (
    <div className="formdiv">
      <h1>Login</h1>

      <input type="text" onChange={(e)=>setemail(e.target.value)} placeholder="Enter Email Address" />
      <input type="text" onChange={(e)=>setpassword(e.target.value)} placeholder="Enter Password" />
      <button onClick={handeldlogin}>Login</button>
      <NavLink to="/signup">New Here Signup !!</NavLink>
    </div>
  );
};

export default Login;
