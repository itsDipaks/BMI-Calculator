import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const Calculator = () => {
  const [height,setheight]=useState(0)
  const [weight,setweight]=useState(0)
const [bmi,setbmi]=useState(0)
  const calculatebmi=async()=>{
 await axios.post("http://localhost:8500/bmicalculator",{
      height,weight
    },{
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "token":`${localStorage.getItem("token")}`
    }
    }).then((res)=>setbmi(res.data.BMI)).catch((Error)=>console.log(Error))
  }


   return (
    <div>
      <h1>Bmi Calculator</h1>
   <h1>{bmi}</h1>
<input type="text" onChange={(e)=>setheight(e.target.value)} placeholder=' Height in Feet' />
<input type="text" onChange={(e)=>setweight(e.target.value)} placeholder='Weight in Kg'/>
    <button onClick={calculatebmi}>Calculate</button>
    </div>
  )
}

export default Calculator