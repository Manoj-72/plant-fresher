import React from "react";
import { Login } from "../../components";
import "./Verification.css";

const Verification = () => {
    const number = localStorage.getItem('OTP')
  return (
    <div className='loginpage-pg'>
      <Login
        title="OTP Verification"
        para={`Please enter your verification code send to +91 ${number}`}
        placeholder="Mobile no"
        button="Enter OTP"
      />
    </div>
  );
};

export default Verification;
