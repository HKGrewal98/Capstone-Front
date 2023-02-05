import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginDetails } from '../Login/LoginReducer/LoginSlice'
import "./Navbar.css"

export const Navbar = () => {
  // const [login, setLogin] = useState(false)
  let dispatch = useDispatch()
  const LoginStatus = useSelector((state)=>state.LoginDetails?.value)
  console.log("Loginn Statsus", LoginStatus)

  const Logout = ()=>{
    console.log("Logout clicked")
    
    dispatch(LoginDetails({"status":"false"}))
  }
  return (
    <div className='navbar'>
    <div id='itemCompliance'><a href="#" className='nav-item' >Compliance Centre</a></div>
    {LoginStatus? <>
      <div><a href="#" className='nav-item'>Projects</a></div>
    <div><a href="#" className='nav-item'>Report Groups</a></div>
    <div><a href="#" className='nav-item'>Users</a></div>
    <div><a href="#" className='nav-item'>Help</a></div>
    <div><a href="#" className='nav-item'>My profile</a></div>
    <div className="navbarLogout"><button onClick={Logout} className='nav-item' >Logout</button></div>
    
    </>:<>
      <p>NOne</p>
    </>}
   
  </div>
  )
}
