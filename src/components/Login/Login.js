import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login </h2>
      <form className="form-container">
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <input className="login-btn" type="submit" value="Login" />
      </form>
      <p>
        <span className="sign-up-text">New to amazon? </span>
        <Link to="/signup">
          <span className="signUp-link-text">Create New Account</span>
        </Link>
      </p>
    </div>
  );
};

export default Login;
