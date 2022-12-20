import React from "react";
import { Login } from "../../components";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="loginpage-pg">
      <Login
        title="Signup"
        para="Amazing items waiting for you :)"
        placeholder="Mobile no"
        button="Sign up"
      />
    </div>
  );
};

export default Signup;