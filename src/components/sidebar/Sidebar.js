import React, { useState } from "react";
import "./Sidebar.css";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";
import { GiTomato, GiFruitBowl } from "react-icons/gi";
import { BsCart2 } from "react-icons/bs";
import { CiViewTable } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from "react-tooltip";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const badgeValue = useSelector(state => state.cart.totalQuantity)
  const activeLink = "activeLink";
  const normalLink = "defaultLink";

  let sidebarObj = [
    {
      key: 1,
      name: "Home",
      navTo: "/",
      icon: AiOutlineHome,
    },
    {
      key: 2,
      name: "Vegetable",
      navTo: "/vegetables",
      icon: GiTomato,
    },
    {
      key: 3,
      name: "Cart",
      navTo: "/cart",
      icon: BsCart2,
    },
    {
      key: 4,
      name: "Product details",
      navTo: "/table",
      icon: CiViewTable,
    },
  ];

  return (
    <div className="sideBar">
      <div className="sideBarButton">
        <HiMenuAlt1
        id="menu"
          style={{ fontSize: 30, color: "#49A010", cursor: "pointer" }}
        />
        <Tooltip anchorId="menu" content="Menu" place="bottom" offset={13} />
      </div>
      <div className="sideBarMenu">
        {sidebarObj.map((item) => {
          return (
            <div className="sideBarMenuItem" key={item.key}>
              <NavLink
                to={item.navTo}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <item.icon
                  key={item.id}
                  style={{ fontSize: 20, color: activeLink, zIndex:'1',cursor: "pointer" }}
                />
                
                <h4>{item.name}</h4>{item.key === 3 && <p className="cartBadge">{badgeValue}</p>}
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
