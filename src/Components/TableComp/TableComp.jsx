import React, { useState } from "react";
import "./tableComp.css";
import BookingTableEntry from "../BookingTableEntry/BookingTableEntry";
import { PlusIcon } from "../../Assets";

function TableComp() {
  const [selectedElement, setSelectedElement] = useState(0);

  const Data = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ];
  let arr = [
    { id: 1, name: "Project" },
    { id: 2, name: "Unit Type" },
    { id: 3, name: "Floor " },
    { id: 4, name: "Size" },
    { id: 5, name: "Price/sqft" },
    { id: 6, name: "Availability" },
  ];
  const handleElementClick = (index) => {
    setSelectedElement(index);
  };
  return (
    <section className="TableMainParentContainer">
      <p className="TableAvailableTextStyle">
        Availability of Space in Our Project
      </p>

      <div className="MainTableContentContainer">
        <div className="main_contenttable_wrapper">
          <table
            style={{
              borderSpacing: "0 10px",
            }}
          >
            <thead>
              <tr className="main_contenttableheader_entry">
                {arr.map((item, index) => {
                  return (
                    <th
                      key={index}
                      className={`ArrayElementStyleOInfo ${
                        selectedElement === index ? "selected" : ""
                      }`}
                      onClick={() => handleElementClick(index)}
                    >
                      {item.name}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {Data.map((item, index) => (
                <BookingTableEntry />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="PlusIconContainer">
        <img src={PlusIcon} alt="Image" />
        <p className="PlusTextStyle">Talk to An Expert</p>
      </div>
    </section>
  );
}

export default TableComp;
