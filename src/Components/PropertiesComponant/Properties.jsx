import React from "react";
import "./properties.css";

export default function Properties() {
  let newArr = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
  ];
  return (
    <div className="PropertiesMainContainer">
      <div className="PrpertiesHeadText">
        Looking for popular cities to get properties in?
      </div>
      <div className="UnderHeadText">
        Here's a list of houses flats plots and rooms in all bustling
        metropolitan cities.
      </div>

      <div className="MapingDivStyle">
        {newArr.map(() => {
          return (
            <div className="InvisibleBoxStyle">
              <div className="BoxHeadingtextStyling">Islamabad Properties</div>
              <p className="LittleHeadingStyle">Property in DHA islamabad</p>
              <p className="LittleHeadingStyle">Property in PWD </p>
              <p className="LittleHeadingStyle">Property is Rawalpindi</p>
              <p className="LittleHeadingStyle">Property is Rawalpindi</p>
              <p className="LittleHeadingStyle">Property is Rawalpindi</p>
              <p className="LittleHeadingStyle">Property in PWD </p>
              <p className="LittleHeadingStyle">Property is Rawalpindi</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
