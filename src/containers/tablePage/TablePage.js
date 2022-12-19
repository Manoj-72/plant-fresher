import React from "react";
import { NavbarPage, Sidebar, Table } from "../../components";
import "./TablePage.css";

const TablePage = () => {
  return (
    <div className="App">
      <div className="sideBar-div">
        <Sidebar />
      </div>
      <div className="homePage-div">
        <div className="vegetable">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default TablePage;
