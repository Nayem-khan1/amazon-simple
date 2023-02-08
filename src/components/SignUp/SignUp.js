import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="login-container">
      <h2>Sign Up </h2>
      <form className="form-container">
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name="confirm" id="confirm" required />
        </div>
        <input className="login-btn" type="submit" value="Sign Up" />
      </form>
      <p>
        <span className="sign-up-text">Already have an account? </span>
        <Link to="/login">
          <span className="signUp-link-text">Login</span>
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
