import React from "react";
import "./pages.css"
import {  NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Signup = () => {

const [name,setname]=useState("")
const [email,setemail]=useState("")
const [password,setpassword]=useState("")


  const handeldsignup = async() => {

 await axios.post('http://localhost:8500/signup', {name,email,password}, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((data) => console.log(data.data)).catch((error)=>console.log(error))

  };
  return (
    <div className="formdiv">
      <h1>Signup</h1>
      <input type="text" onChange={(e)=>setname(e.target.value)} placeholder="Enter name" />
      <input type="text" onChange={(e)=>setemail(e.target.value)}  placeholder="Enter Email Address" />
      <input type="text" onChange={(e)=>setpassword(e.target.value)}  placeholder="Enter Password" />
      <button onClick={handeldsignup}>Signup</button>
      <NavLink to="/login">Already have in Account ? Login !</NavLink>

   
    </div>
  );
};

export default Signup;
