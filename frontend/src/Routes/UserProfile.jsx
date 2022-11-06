import React from "react";
import axios from "axios";
import {useEffect} from "react";
import {useState} from "react";

const UserProfile = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
const [bmidata,setbmi]=useState([])

  const getbmihistory = () => {
    axios
    .get("http://localhost:8500/bmihistory", {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        token: `${localStorage.getItem("token")}`,
      },
    })
    .then(function (response) {
      setbmi(response.data)
     
    })
  };
  useEffect(() => {
    axios
      .get("http://localhost:8500/profile", {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          token: `${localStorage.getItem("token")}`,
        },
      })
      .then(function (response) {
        setname(response.data.name);
        setemail(response.data.email);
        console.log(response.data);
      });
  }, []);
  console.log(name, email);
  return (
    <div>
      <h1>UserProfile</h1>

      <h3>name:{name}</h3>
      <h4>Email:{email}</h4>

      <button onClick={getbmihistory}>Get BMI Data</button>

{ bmidata.map((el)=>{
  const {height,weight,BMI}=el
  return(
    <div>
      <p>Height: {height}</p>
      <p>Weight : {weight}</p>
      <p>BMI : {BMI}</p>
    </div>
  )
})}
    </div>
  );
};

export default UserProfile;
