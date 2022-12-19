import React from "react";
import {
  CartContainer,
  NavbarPage,
  Sidebar,
  Vegetable,
} from "../../components";
import "./VegePage.css";
import DATA from "./data";

const VegePage = () => {
  const vegcards = DATA.map((item) => {
    return (
      <Vegetable
        key={item.id}
        img={item.coverImg}
        name={item.name}
        price={item.price}
        addButton={item.addButton}
        share={item.share}
      />
    );
  });
  return (
    <div className="App">
      <div className="sideBar-div">
        <Sidebar />
      </div>
      <div className="homePage-div cartPage-div">
        <div className="vegetable">
          <NavbarPage title="vegetable" />
          <h1>Vegetable</h1>
          <div className="vegetableBox">{vegcards}</div>
        </div>
      </div>
    </div>
  );
};

export default VegePage;
