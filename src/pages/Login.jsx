import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import classes from "./Signup.module.css";
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { Login } = UserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Login(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
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
        <h1 className={classes["form-heading"]}>Sign In</h1>
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
          <button className={classes["btn-signup"]}>Sign In</button>
        </form>
        <div className={classes["signup-now"]}>
          <div className="div">
            New to Netflix?
            <Link to="/signup">
              <span className={classes.sn}> Sign up now</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
