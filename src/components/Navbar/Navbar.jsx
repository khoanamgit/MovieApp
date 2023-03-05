import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import classes from "./Navbar.module.css";

function Navbar(props) {
  const { user, logOut } = UserAuth();
  // console.log(user.email)
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.navbar}>
      <Link to="/">
        <h2 className={`${classes["nav-logo"]} `}>NETFLIX</h2>
      </Link>
      {user?.email ? (
        <>
          <Link to="/search">
            <button className={classes.btn}>Search</button>
          </Link>
          <div className={classes["nav-auth"]}>
            <Link to="/login">
              <button className={classes.btn}>Account</button>
            </Link>

            <Link to="/signup">
              <button onClick={handleLogout} className={classes.btn}>
                Logout
              </button>
            </Link>
          </div>
        </>
      ) : (
        <>
          {/* <Link to="/search">
            <button className={classes.btn}>Search</button>
          </Link> */}
          <div className={classes["nav-auth"]}>
            <Link to="/login">
              <button className={classes.btn}>Sign In</button>
            </Link>
            <Link to="/signup">
              <button className={classes.btn}>Sign Up</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
