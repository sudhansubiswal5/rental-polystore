import React, { useState } from "react";
import axios from "axios";
import "./LoginSignup.css";

import email_icon from "../assets/images.png";
import password_icon from "../assets/download.png";

const LoginSignup = () => {

  const [action, setAction] = useState("Sign Up");

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSignup = async () => {

    try{
      const res = await axios.post("http://localhost:5000/api/signup",{
        name,
        email,
        password
      });

      alert(res.data);

       setName("");
       setEmail("");
       setPassword("");

    }catch(err){
      console.log(err);
    }

  };

  const handleLogin = async () => {

    try{

      const res = await axios.post("http://localhost:5000/api/login",{
        email,
        password
      });

      alert(res.data);

      setEmail("");
      setPassword("");


    }catch(err){
      console.log(err);
    }

  };

  return (
    <div className="container">

      <div className="form-box">

        <div className="header">
          <div className="text">{action}</div>
        </div>

        <div className="inputs">

          {action === "Sign Up" && (
            <div className="input">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />
            </div>
          )}

          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

        </div>

        <div className="submit-container">

          <button
            className="submit"
            onClick={()=>{
              setAction("Sign Up");
              handleSignup();
            }}
          >
            Sign Up
          </button>

          <button
            className="submit"
            onClick={()=>{
              setAction("Login");
              handleLogin();
            }}
          >
            Login
          </button>

        </div>

      </div>

    </div>
  );
};

export default LoginSignup;