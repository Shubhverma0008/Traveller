import "./register.css";
import axios from 'axios'
import {useRef, useState} from 'react'
import{ useNavigate} from 'react-router-dom'

export default function Register() {


  
 
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Travelopedia</h3>
          <span className="loginDesc">
          Enjoy the beauty of world.
          </span>
        </div>
        <div className="loginRight" >
          <form className="loginBox">
            <input placeholder="Username" 
            type="text"
            required
             className="loginInput" />
            <input
            type="email"
            required
             placeholder="Email"  className="loginInput" />
            <input
            type="text"
            required
             placeholder="Password"  className="loginInput" />
            <input
            type="text"
            required
             placeholder="Password Again"  className="loginInput" />
            <button type="submit" className="loginButton mb-2">Sign Up</button>
            <a  className="loginRegisterButton"  style={{textDecoration:"none",textAlign:"center",paddingTop:"4px"}} href="/login">
              Log into Account
            </a>
           
          </form>
        </div>
      </div>
    </div>
  );
}
