import React, { useState} from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { RiShoppingBag3Line } from "react-icons/ri";
import { GrFavorite } from "react-icons/gr";
import { BiSearch } from "react-icons/bi";
import { MdClear } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";
import moment from "moment";
import { data } from "../table/MOCK_DATA";


 export const startDate = (e) => {
    // console.log(e.target.value)
  };
 export const endDate = (e) => {
    // console.log(e.target.value)
  };

const NavbarPage = (props) => {
  const [dateFilters, setDateFilters] = useState({});
  const [search, setSearch] = useState("");
  // const [typed, setTyped] = useState(props.filter)
  
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const clearSearch = () => {
    setSearch("");
  };

  const todayDate = moment(new Date()).format("YYYY-MM-DD")

  // const searchWithDate = () => {
  //   dateFilters.start &&
  //     dateFilters.end &&
  //     setTData(
  //       data.filter(
  //         ({ date }) =>
  //           new Date(date) >= dateFilters.start &&
  //           new Date(date) <= dateFilters.end
  //       )
  //     );
  // };
  // const setDateFilter = (e, type) => {
  //   setDateFilters((prevState) => ({
  //     ...prevState,
  //     [type]: new Date(e),
  //   }));
  // };
  // console.log(todayDate)
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
          <BiSearch
            style={{cursor:'pointer'}}
          />
          <input
            onChange={handleSearch}
            className="navbar-search"
            placeholder="Search"
            name="search"
            value={search}
            type='text'
          />
          <MdClear 
            onClick={clearSearch}
            style={{cursor:'pointer'}} />
        </div>
      )}
      {props.title === "table" && (
        <div className="table-searchBox">
          <BiSearch
            style={{cursor:'pointer'}}
          />
          <input
            onChange={props.filter}
            className="navbar-tableSearch"
            placeholder="Search"
            autocomplete="off"
            name="search"
            type='text'
          />
          <MdClear 
            onClick={props.clearSearch}
            style={{cursor:'pointer'}} />
        </div>
      )}
      <div className="navBarRight">
        {localStorage.getItem("logIn") ? (
          <p>{props.nothing}</p>
        ) : (
          <p>{props.skip}</p>
        )}
        {localStorage.getItem("logIn") ? (
          <>{props.logout} </>
        ) : (
          <>{props.login}</>
        )}
        {props.title === "vegetable" && (
          <>
            <GrFavorite
              style={{
                fontSize: "24px",
                marginRight: "50px",
                cursor: "pointer",
              }}
            />
            <RiShoppingBag3Line
              style={{
                fontSize: "24px",
                marginRight: "10px",
                cursor: "pointer",
              }}
            />
          </>
        )}
        {props.title === "table" && (
          <>
          <input type="date" style={{width:'100px',backgroundColor:'transparent', border:'1px solid #3A7F0D', height:'20px',paddingRight:'3px',marginRight:'50px'}} onChange={(e) => props.setDateFilter(e.target.value, "start")} />
          <input type="date" style={{width:'100px',backgroundColor:'transparent', border:'1px solid #3A7F0D', height:'20px',paddingRight:'3px',marginRight:'50px'}} onChange={(e) => props.setDateFilter(e.target.value, "end")} />
            {/* <input type="date" value={todayDate}  style={{width:'100px',backgroundColor:'transparent', border:'1px solid #3A7F0D', height:'20px',paddingRight:'3px',marginRight:'50px'}}  onChange={startDate}/> */}
            {/* <input type="date" value={todayDate}  style={{width:'100px', backgroundColor:'transparent', border:'1px solid #3A7F0D',height:'20px',paddingRight:'3px',marginRight:'50px'}} onChange={endDate}/> */}

            <RiShoppingBag3Line
              style={{
                fontSize: "24px",
                marginRight: "10px",
                cursor: "pointer",
              }}
              onClick={props.searchWithDate}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default NavbarPage;