import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./Header.css";
import { GiThreeLeaves } from "react-icons/gi";
import { FaLeaf, FaShippingFast } from "react-icons/fa";
import { NavbarPage } from "../../components";
import { useSelector } from "react-redux";
import { CiLineHeight } from "react-icons/ci";

const Header = () => {
  const [logout, setLogout] = useState(false);
  const [name, setName] = useState("");
  const logOut = () => {
    localStorage.removeItem("currentUser");
    setLogout(true);
  };
  const userInfo = JSON.parse(localStorage.getItem("currentUser").charAt(0).toLowerCase())
  useEffect(()=>{
    if(localStorage.getItem("currentUser")){
    // const UserUiName = UserName.charAt(0).toUpperCase() + UserName.slice(1).toLowerCase();
    //  let  userName = JSON.parse(localStorage.getItem("currentUser")).data.userName;
    //  console.log(localStorage.getItem("currentUser").data.UserName)
     setName(`Hi ${userInfo.UserName},`)
    }
     else{
      setName("")
     }
  },[])
  
  return (
    <div className="homePage">
      <NavbarPage
        key="homeKey"
        title="home"
        skip="Skip"
        username={name}
        logout={<button onClick={logOut}>Logout</button>}
        login={
          <Link to="/login">
            <button>Log in</button>
          </Link>
        }
      />
      <div className="homeHeader">
        <h1>We provide </h1>
        <h1>fresh vegetables ,</h1>
        <h1>Fruits and Plants</h1>
        {/* <Loaderdesgin /> */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqa.
        </p>
      </div>
      <div className="headerAddon">
        <div className="addon">
          <GiThreeLeaves style={{ fontSize: 25, color: "#49A010" }} />
          <h3>100% Organic</h3>
        </div>
        <div className="addon">
          <FaLeaf style={{ fontSize: 25, color: "#49A010" }} />
          <h3>Always fresh</h3>
        </div>
        <div className="addon">
          <FaShippingFast style={{ fontSize: 25, color: "#49A010" }} />
          <h3>Free shipping</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
