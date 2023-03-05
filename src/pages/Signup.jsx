// import { async } from "@firebase/util";
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import classes from "./Signup.module.css";
function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState()
  const {user, SignUp } = UserAuth();
  console.log(user)
  const navigation = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await SignUp(email, password);
      navigation("/");
    } catch (error) {
      console.log(error);
      setError(error.message)
    }
  };

  return (
    <div className={classes.signup}>
      <img
        className={classes["signup-img"]}
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a43711df-c428-4f88-8bb3-b2ac5f20608f/4af43f9f-8764-494f-a075-ba5c79c893f3/VN-vi-20230227-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt=""
      />
      <div className={classes["form-signup"]}>
        <h1 className={classes["form-heading"]}>Sign Up</h1>
        {error && <p className={classes.error}>{error}</p>}
        <form onSubmit={handleSubmit} className={classes.form}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className={classes.input}
            type="text"
            placeholder="Email..."
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className={classes.input}
            type="password"
            placeholder="Password..."
          />
          <button className={classes["btn-signup"]}>Sign Up</button>
        </form>
        <div className={classes["form-footer"]}>
          <div className={classes.remember}>
            <input className={classes["check-box"]} type="checkbox" />
            <span>Remember me</span>
          </div>
          <div className={classes.help}>
            You need help?
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
