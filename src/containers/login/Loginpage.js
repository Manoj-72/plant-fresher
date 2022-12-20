import React from "react";
import { Login } from "../../components";
import "./Loginpage.css";

const Loginpage = () => {
  return (
    <div className="loginpage-pg">
      <Login
        title="Login"
        des="Sign in and start managing your candidates!"
        placeholder="Mobile no"
        forget="Forget password?"
        button="Login"
        signup="New User?"
      />
    </div>
  );
};

export default Loginpage;
// let obj ={
//   title:"Login",
//       des:"Sign in and start managing your candidates!",
//       placeholder:"Mobile no",
//       forget:"Forget password?",
//       button:'Login'
// }
