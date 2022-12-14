import React, { useState } from "react";
import "./Sidebar.css";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";
import { GiTomato, GiFruitBowl } from "react-icons/gi";
import { BsCart2 } from "react-icons/bs";
import { CiViewTable } from "react-icons/ci";
import { NavLink } from "react-router-dom";





const Sidebar = () => {
  const activeLink = "activeLink";
  const normalLink = "defaultLink";

  let sidebarObj = [
    {
    key:1,
    name:"Home",
    navTo:"/",
    icon: AiOutlineHome,
    },
    {
      key:2,
      name:"Vegetable",
      navTo:"/vegetables",
      icon: GiTomato,
    },
    {
      key:3,
      name:"Cart",
      navTo:"/cart",
      icon: BsCart2,
    },
    {
      key:4,
      name:"Product details",
      navTo:"/table",
      icon: CiViewTable,
    }

]


  return (
    <div className="sideBar">
      <div className="sideBarButton">
        <HiMenuAlt1
          style={{ fontSize: 30, color: "#49A010", cursor: "pointer" }}
        />
      </div>
      <div className="sideBarMenu">
        {sidebarObj.map(item => {
    return <div className="sideBarMenuItem" key={item.key}>
          <NavLink
            to={item.navTo}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <item.icon key={item.id}
              style={{ fontSize: 20, color: activeLink, cursor: "pointer" }}
            />
            <h4>{item.name}</h4>
          </NavLink>
        </div>
  })}
      </div> 
    </div>
  );
};

export default Sidebar;