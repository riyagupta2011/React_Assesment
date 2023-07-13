import Landing from "../LandingPage/Landing";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css";

export default function Login() {
  const navigate = useNavigate();
  const [username,setUsername]=useState("")
  const goToLanding=()=>{
    setUsername()
    navigate(`/landing?username=${username}`);
  }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Ticket App</h3>
          <span className="loginDesc">
           Book your tickets now
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" onChange={(e)=>setUsername(e.target.value)}/>
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton"   onClick={goToLanding}>Log In</button>
            <span className="loginForgot">Forgot Password?</span>
           
          </div>
        </div>
      </div>
    </div>
  );
}