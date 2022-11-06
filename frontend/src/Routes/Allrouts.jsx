import React from 'react'
import {Routes,Route} from "react-router-dom"
import Calculator from './Calculator'
import Homepage from './Homepage'
import Login from './Login'
import Signup from './Signup'
import UserProfile from './UserProfile'
const Allrouts = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/profile" element={<UserProfile />} />
        
        </Routes>
        
        

    </div>
  )
}

export default Allrouts