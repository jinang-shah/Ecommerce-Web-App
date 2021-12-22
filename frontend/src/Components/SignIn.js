import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

function SignIn() {
  return (
    <div className="signin">
      <h2>Shop App</h2>

      <div className="input_div">
        <div className="signin_div">
          <label>username : </label>
          <input className="signin_input" type="text" />
        </div>
        <div className="signin_div">
          <label>password : </label>
          <input className="signin_input" type="password" />
        </div>
        <button className="signin_btn">Sign In</button>
      </div>


      
      <div>Don't have an Account  <Link to="/signUp">Sign Up</Link></div>

      
    </div>
  );
}

export default SignIn;
