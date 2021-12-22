import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./SignUp.css";
import M from "materialize-css";

function SignUp() {
  const history = useHistory();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const postData = () => {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      return M.toast({
        html: "Invalid email",
        classes: "#4db6ac teal lighten-2",
      });
    }
    fetch("http://localhost:3000/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#4db6ac teal lighten-2" });
        } else {
          M.toast({ html: data.msg, classes: "#4db6ac teal lighten-2" });
          history.push("/signin");
        }
      })
      .catch((err) => {
        console.log("sign up err :", err);
      });
  };

  return (
    <div className="signin">
      <h2>Shop App</h2>

      <div className="input_div">
        <div className="signin_div">
          <label> Name : </label>
          <input
            className="signin_input"
            type="text"
            placeholder="name"
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
        </div>
        <div className="signin_div">
          <label>Username : </label>
          <input
            className="signin_input"
            type="text"
            placeholder="email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
        </div>
        <div className="signin_div">
          <label>Password : </label>
          <input
            className="signin_input"
            type="password"
            placeholder="password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>
        <button className="signin_btn" onClick={postData}>
          Sign Up
        </button>
      </div>

      <div>
        All ready have an Account <Link to="/signin">Sign In</Link>
      </div>
    </div>
  );
}

export default SignUp;
