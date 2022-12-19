import { AiOutlineEye } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import swal from "sweetalert";
import MOCK_DATA from "./MOCK_DATA";

const handleData = (row) => {
  //  for (var i = MOCK_DATA; i < MOCK_DATA.length; i++) {
  // console.log(
  //   `Name :${MOCK_DATA[i].name}\n Tag no :${MOCK_DATA[i].tag_number}\n Date of purchase :${MOCK_DATA[i].date}\n Price :${MOCK_DATA[i].price}`
  // );
  console.log(row, "check");
};

export const COLUMNS = [
  {
    Header: "S.no",
    Footer: "S.no",
    accessor: "id",
  },
  {
    Header: "Name",
    Footer: "Name",
    accessor: "name",
    Cell: (row) => <div className="table-price">{row.value}</div>,
  },
  {
    Header: "Tag no",
    Footer: "Tag no",
    accessor: "tag_number",
  },
  {
    Header: "Date of purchase",
    Footer: "Date of purchase",
    accessor: "date",
  },
  {
    Header: "Pay detail",
    Footer: "Pay detail",
    accessor: "price",
    Cell: (row) => <div className="table-price">{`${row.value}Rs`}</div>,
  },
  {
    Header: "Action",
    Footer: "Action",
    Cell: (row) => (
      <div className="table-icons">
        <AiOutlineEye
          cursor={"pointer"}
          onClick={() =>
            swal({
              title: "Product Details",
              text: "Your purchase details",
            })
          }
          size={20}
        />
        <RiDeleteBinLine size={20} onClick={handleData} />
      </div>
    ),
  },
];
