import React from "react";
import { Header } from "../Header/Header";
import ComplianceLogos from "../../images/complianceLogosImage.png";
import './Login.css'
import { useDispatch } from "react-redux";
import { LoginDetails } from "./LoginReducer/LoginSlice";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  let dispatch = useDispatch()
  let navigate = useNavigate()
  const Login = ()=>{
    console.log("Login clicked")
    dispatch(LoginDetails({"status":"true"}))
    navigate('/landingPage')
  }
  return (
    <div className="MainLoginHeader">
      <div className="genInfo">
        <p className="text-center my-0" style={{ fontSize: "2rem" }}>
          Welcome to Compliance Centre
        </p>
        <p className="text-center my-0">
          Access your testing and certification reports whenever you need them.
        </p>
        <div className="text-center">
          <img src={ComplianceLogos} />
        </div>
      </div>
      <div className="LoginFormContainer">
        <form style={{backgroundColor:"#C1C1C1"}}>
          <p className="display-5 text-center py-3"  style={{fontWeight:"500"}}>Login</p>
          <div className="FieldsContainer">
          <div className="mb-3">
            
            <input
              type="email"
              className="form-control"
              placeholder="Enter User ID"
              aria-describedby="emailHelp"
            />
           
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
            />
          </div>
          <div className="LoginForgot text-center pb-3">
          <button type="submit" className="btn customBtn mx-3" onClick={Login} >
            Login
          </button>
          <a style={{color:"black"}} href="#">Forgot Your Password</a>

          </div>
          </div>
        </form>
      <p className="text-center"><a href="#" className=" text-dark">Not a member? Register today.</a></p>
      <div className="LoginFooter">
        <div className="fomore">Find Out More</div>
        <div className="otherDetails">
          <div><a href="#">Why Compliance Central</a></div>
          <hr />
          <div>
          <p>Have comments or questions about Compliance Central</p>
          <p>Call +1-123-123-1234 or email insupport.dc@dailycompliance.com</p>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
};
