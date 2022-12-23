import React from "react";
import {
  CartContainer,
  NavbarPage,
  Sidebar,
  Vegetable,
} from "../../components";
import "./VegePage.css";
import DATA from "./data";
import { useSelector } from "react-redux";

const VegePage = () => {
  const vegcards = DATA.map((product) =>(
    <Vegetable
    key={product.id}
    id={product.id}
    name={product.name}
    img={product.coverImg}
    share={product.share}
    addButton={product.addButton}
    delButton={product.delButton}
    title={product.title}
    price={product.price}
    description={product.description}
  />
  ))
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
