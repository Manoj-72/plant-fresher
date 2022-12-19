import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { RiShoppingBag3Line } from "react-icons/ri";
import { GrFavorite } from "react-icons/gr";
import { BiSearch } from "react-icons/bi";
import { MdClear, MdOutlineAddBox } from "react-icons/md";
import moment from "moment";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from "react-tooltip";

export const startDate = (e) => {};
export const endDate = (e) => {};

const NavbarPage = (props) => {
  const [dateFilters, setDateFilters] = useState({});
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const clearSearch = () => {
    setSearch("");
  };

  const todayDate = moment(new Date()).format("YYYY-MM-DD");

  return (
    <div className="navBar">
      <div className="navBarLeft">
        <img src={logo} className="logo" alt="Logo" />

        <h3>
          Plants <span>Fresher</span>
        </h3>
      </div>
      {props.title === "vegetable" && (
        <div className="navbar-searchBox">
          <BiSearch style={{ cursor: "pointer" }} />
          <input
            onChange={props.cartFilter}
            className="navbar-search"
            placeholder="Search"
            name="search"
            type="text"
          />
          <MdClear onClick={props.clearSearch} style={{ cursor: "pointer" }} />
        </div>
      )}
      {props.title === "table" && (
        <div className="table-searchBox">
          <BiSearch style={{ cursor: "pointer" }} />
          <input
            onChange={props.filter}
            className="navbar-tableSearch"
            placeholder="Search"
            autocomplete="off"
            name="search"
            type="text"
          />
          <MdClear onClick={props.clearSearch} style={{ cursor: "pointer" }} />
        </div>
      )}
      <div className="navBarRight">
        {localStorage.getItem("userInfo") ? (
          <p>{props.nothing}</p>
        ) : (
          <p>{props.skip}</p>
        )}
        {localStorage.getItem("userInfo") ? (
          <>{props.logout} </>
        ) : (
          <>{props.login}</>
        )}
        {props.title === "vegetable" && (
          <>
            <GrFavorite
              id="favourite"
              style={{
                fontSize: "24px",
                marginRight: "50px",
                cursor: "pointer",
              }}
            />
            <Tooltip anchorId="favourite" content="Favourite" place="bottom" offset={13} />
            <RiShoppingBag3Line
            id="shopping"
              style={{
                fontSize: "24px",
                marginRight: "10px",
                cursor: "pointer",
              }}
            />
            <Tooltip anchorId="shopping" content="Bag" place="bottom" offset={13} />
          </>
        )}
        {props.title === "table" && (
          <>
            <input
              type="date"
              style={{
                width: "100px",
                backgroundColor: "transparent",
                border: "1px solid #3A7F0D",
                height: "20px",
                paddingRight: "3px",
                marginRight: "50px",
              }}
              onChange={(e) => props.setDateFilter(e.target.value, "start")}
            />
            <input
              type="date"
              style={{
                width: "100px",
                backgroundColor: "transparent",
                border: "1px solid #3A7F0D",
                height: "20px",
                paddingRight: "3px",
                marginRight: "30px",
              }}
              onChange={(e) => (props.setDateFilter(e.target.value, "end"), props.searchWithDate())}
            />
            {/* <input type="date" value={todayDate}  style={{width:'100px',backgroundColor:'transparent', border:'1px solid #3A7F0D', height:'20px',paddingRight:'3px',marginRight:'50px'}}  onChange={startDate}/> */}
            {/* <input type="date" value={todayDate}  style={{width:'100px', backgroundColor:'transparent', border:'1px solid #3A7F0D',height:'20px',paddingRight:'3px',marginRight:'50px'}} onChange={endDate}/> */}
            <MdOutlineAddBox
            id="add"
            style={{
              fontSize: "24px",
              marginRight: "20px",
              cursor: "pointer",
            }}
            onClick={props.toggleAddModal}
            />
            <Tooltip anchorId="add" content="Add" place="bottom" offset={13} />
            <RiShoppingBag3Line
            id="shopping"
              style={{
                fontSize: "24px",
                marginRight: "10px",
                cursor: "pointer",
              }}
              // onClick={props.searchWithDate}
            />
            <Tooltip anchorId="shopping" content="Bag" place="bottom" offset={13} />
          </>
        )}
      </div>
    </div>
  );
};

export default NavbarPage;
