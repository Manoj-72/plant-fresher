import React, { useEffect, useRef, useState } from "react";
import { data } from "./MOCK_DATA";
import "./Table.css";
import NavbarPage from "../navbar/NavbarPage";
import { Pagination } from "@mui/material";
import Modal from "react-modal";
import { GrFormAdd } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import moment from "moment";
import { RiDeleteBinLine } from "react-icons/ri";

Modal.setAppElement("#root");
const Table = () => {
  const [tableData, setTableData] = useState(data);
  // const [nameFilter, setTableData] = useState(data);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setEditIsOpen] = useState(false);
  const [modalEditDetails, setModalEditDetails] = useState([
    {
      name: "",
      id: 0,
      tag_number: 0,
      date: moment(new Date()).format("YYYY-MM-DD"),
      price: 0,
    },
  ]);
  const [serielNum, setSerielNum] = useState();
  const [nameValue, setNameValue] = useState("");
  const [tagValue, setTagValue] = useState();
  const [dateValue, setDateValue] = useState("");
  const [priceValue, setPriceValue] = useState();
  const [deleteIndex, setDeleteIndex] = useState()
  const [dateFilters, setDateFilters] = useState({});

  console.log(moment(dateFilters.start).format("DD-MM-YYYY"));

  const ref = useRef(null);
  const filterName = (e) => {
    if (e !== "clear") {
      var inpValue = e.target.value;
      let initialSearch = data.filter((element) =>
        element.name.toLocaleLowerCase().includes(inpValue.toLocaleLowerCase())
      );
      setTableData(initialSearch);
    } else {
      var inpValue = "";
      let initialSearch = tableData.filter((element) =>
        element.name.toLocaleLowerCase().includes(inpValue.toLocaleLowerCase())
      );
      setTableData(tableData);
    }
  };

  const toggleDeleteModal = (item, index) => {
    setModalEditDetails(item);
    setDeleteIndex(index);
    setIsOpen(!isOpen);
  };

  const toggleEditModal = (item, index) => {
    setModalEditDetails(item);
    
    setEditIsOpen(!isEditOpen);
  };

  const filteredObj = tableData.map((item, index) => {
    return (
      <>
        <tr>
          <td className="snum-td">{item.id}</td>
          <td className="name-td">{item.name}</td>
          <td className="tag-td">{item.tag_number}</td>
          <td className="date-td">{item.date}</td>
          <td className="price-td">{item.price}</td>
          <td className="action-td">
            <FiEdit
              style={{ fontSize: "22px" }}
              onClick={() => toggleEditModal(item, index)}
            />
            <RiDeleteBinLine
              className="edit-btn"
              style={{ fontSize: "22px" }}
              onClick={() => toggleDeleteModal(item, index)}
            />
          </td>
        </tr>
      </>
    );
  });

  const newData = {
    id: serielNum,
    name: nameValue,
    tag_number: tagValue,
    date: dateValue,
    price: priceValue,
  };

  const addSubmit = () => {
    console.log([...tableData, newData], "checkadd");
    setTableData([...tableData, newData]);
    setSerielNum("");
    setNameValue("");
    setDateValue("");
    setPriceValue("");
    setTagValue("");
  };
  useEffect(() => {
    console.log(tableData, "checktable");
  }, [tableData]);

  const handleEdit = () => {
    setModalEditDetails((prev) => (prev, tableData[modalEditDetails.id - 1] = modalEditDetails))
    console.log(modalEditDetails);
    // tableData[modalEditDetails.id - 1].name = modalEditDetails.name;
    // tableData[modalEditDetails.id - 1].tag_number = editTagno;
    // tableData[modalEditDetails.id - 1].date = editDate;
    // tableData[modalEditDetails.id - 1].price = editPrice;
    setEditIsOpen(!isEditOpen);
  };
  
  const handleDelete = () => {
    tableData.splice(deleteIndex, 1);
    setIsOpen(!isOpen)
  };

  const searchWithDate = () => {
    moment(dateFilters.start).format("YYYY-MM-DD") &&
      moment(dateFilters.end).format("YYYY-MM-DD") &&
      setTableData(
        tableData.filter(
          ({ date }) =>
            new Date(date) >= dateFilters.start &&
            new Date(date) <= dateFilters.end
        )
      );
      console.log(dateFilters.start)
  };
  const setDateFilter = (e, type) => {
    setDateFilters((prevState) => ({
      ...prevState,
      [type]: new Date(e),
    }));
    // if(type === "end"){
    //   searchWithDate()
    // }
  };

  return (
    <>
      <NavbarPage
        title="table"
        key="1"
        filter={filterName}
        ref={ref}
        searchWithDate={searchWithDate}
        setDateFilter={setDateFilter}
        clearSearch={() => filterName("clear")}
        // startDate={setStartDate}
        // endDate={endDate}
        // firstDate={firstDate}
        // lastDate={lastDate}
      />
      <div className="table-box">
        <table>
          <thead>
            <tr>
              <th>S.no</th>
              <th>Name</th>
              <th>Tag No</th>
              <th>Date of purchase</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="input-td1">
                <input
                  className="table-input table-input1"
                  type="number"
                  onChange={(e) => setSerielNum(e.target.value)}
                  value={serielNum}
                  placeholder="S.no"
                  min="0"
                />
              </td>
              <td className="input-td2">
                <input
                  className="table-input table-input2"
                  onChange={(e) => setNameValue(e.target.value)}
                  value={nameValue}
                  placeholder="Name"
                />
              </td>
              <td className="input-td3">
                <input
                  className="table-input table-input3"
                  type="number"
                  onChange={(e) => setTagValue(e.target.value)}
                  value={tagValue}
                  min="0"
                  placeholder="Tag No"
                />
              </td>
              <td className="input-td4">
                <input
                  className="table-input table-input4"
                  onChange={(e) => setDateValue(e.target.value)}
                  value={dateValue}
                  type="date"
                  placeholder="Date of purchase"
                />
              </td>
              <td className="input-td5">
                <input
                  className="table-input table-input5"
                  type="number"
                  min="0"
                  onChange={(e) => setPriceValue(e.target.value)}
                  value={priceValue}
                  placeholder="Price"
                />
              </td>
              <td className="input-td6">
                <GrFormAdd style={{ fontSize: "28px" }} onClick={addSubmit} />
              </td>
            </tr>
            {filteredObj}
          </tbody>
        </table>
        <Modal
          isOpen={isEditOpen}
          onRequestClose={() => setEditIsOpen(!isEditOpen)}
          style={{
            overlay: {
              backgroundColor: "rgba(0,0,0,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            content: {
              width: "359px",
              borderRadius: "10px",
              position: "absolute",
              top: "20%",
              left: "35%",
              height: "480px",
              textAlign: "center",
            },
          }}
        >
          <div className="modalContainer">
            <div className="modalHeader">
              <h2>Edit details</h2>
            </div>
            <div className="modalBody">
              <div className="modalInner">
                <p>Name</p>
                <p>Tag no</p>
                <p>Date of purchase</p>
                <p>Pay detail</p>
              </div>
              <div className="modalInnerTwo">
                <input
                  value={modalEditDetails.name}
                  onChange={(e) =>
                    setModalEditDetails({
                      id: modalEditDetails.id,
                      name: e.target.value,
                      date: modalEditDetails.date,
                      tag_number: modalEditDetails.tag_number,
                      price: modalEditDetails.price,
                    })
                  }
                />
                <input
                  value={modalEditDetails.tag_number}
                  onChange={(e) =>
                    setModalEditDetails({
                      id: modalEditDetails.id,
                      name: modalEditDetails.name,
                      date: modalEditDetails.date,
                      tag_number: e.target.value,
                      price: modalEditDetails.price,
                    })
                  }
                  type="number"
                  min="0"
                />
                <input
                  value={`${moment(new Date(modalEditDetails.date)).format(
                    "YYYY-MM-DD"
                  )}`}
                  type="date"
                  onChange={(e) =>
                    moment(
                      new Date(
                        setModalEditDetails({
                          id: modalEditDetails.id,
                          name: modalEditDetails.name,
                          date: e.target.value,
                          tag_number: modalEditDetails.tag_number,
                          price: modalEditDetails.price,
                        })
                      )
                    ).format("YYYY-MM-DD")
                  }
                />
                <input
                  value={modalEditDetails.price}
                  onChange={(e) =>
                    setModalEditDetails({
                      id: modalEditDetails.id,
                      name: modalEditDetails.name,
                      date: modalEditDetails.date,
                      tag_number: modalEditDetails.tag_number,
                      price: e.target.value,
                    })
                  }
                  type="number"
                  min="0"
                />
              </div>
            </div>
            <button onClick={handleEdit}>SAVE</button>
          </div>
        </Modal>
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(!isOpen)}
          style={{
            overlay: {
              backgroundColor: "rgba(0,0,0,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            content: {
              width: "359px",
              borderRadius: "10px",
              position: "absolute",
              top: "30%",
              left: "35%",
              height: "280px",
              textAlign: "center",
            },
          }}
        >
          <div className="modalContainer">
            <div className="modalHeader">
              <h2 style={{ color: "red" }}>Delete</h2>
            </div>
            <div className="modalBody">
              <div className="modalInner">
                <p>Are you sure want to delete?</p>
              </div>
            </div>
            <button
              onClick={handleDelete}
              style={{ backgroundColor: "red", color: "white" }}
            >
              DELETE
            </button>
          </div>
        </Modal>
        <div className="pagination-box">
          <p>First</p>
          <Pagination shape="rounded" showFirstButton showLastButton />
          <p>Last</p>
        </div>
      </div>
    </>
  );
};

export default Table;
