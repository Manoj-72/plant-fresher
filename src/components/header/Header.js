import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { GiThreeLeaves } from "react-icons/gi";
import { FaLeaf, FaShippingFast } from "react-icons/fa";
import { NavbarPage } from "../../components";

const Header = () => {
  const [logout, setLogout] = useState(false)
  const logOut = () => {
    localStorage.removeItem('logIn')
    setLogout(true)
  }
  return (
    <div className="homePage">
      <NavbarPage
        key='homeKey'
        title='home'
        skip="Skip"
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
