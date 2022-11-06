import React from 'react'
import { Link } from 'react-router-dom'
import "./compo.css"
const Navbar = () => {
  return (
    <div className='navdiv'>

<h1>BMI CALCULATOR</h1>

<div className='links'>
    <Link to="/">Home</Link>
    <Link to="/signup">Signup</Link>
    
    <Link to="/calculator">Calculator</Link>
    <Link to="/profile">Profile</Link>
    {/* <Link to="/profile"> History</Link> */}
</div>


        


    </div>
  )
}

export default Navbar