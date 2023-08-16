import React, { useState } from "react";
import "./trendingProjects.css";
import {
  image1,
  image2,
  image3,
  image4,
  doller,
  infinity,
  PinLoc,
} from "../../Assets";

export default function TrendingProjects() {
  const [selectedElement, setSelectedElement] = useState(0);
  const [showAll, setShowAll] = useState(false);

  let arr = [
    { id: 1, name: "Luxury Apartment" },
    { id: 1, name: "Corporate Office" },
    { id: 1, name: "Commerical Shops" },
    { id: 1, name: "Food Courts" },
    { id: 1, name: "Farm Houses " },
  ];

  let objArr = [
    {
      id: 1,
      image: image1,
      duration: "05 Year",
      payment: "$120,000/",
      address: "Realtor Office Building 5F Pakistan",
    },
    {
      id: 2,
      image: image2,
      duration: "05 Year",
      payment: "$120,000/",
      address: "Realtor Office Building 5F Pakistan",
    },
    {
      id: 3,
      image: image3,
      duration: "05 Year",
      payment: "$120,000/",
      address: "Realtor Office Building 5F Pakistan",
    },
    {
      id: 4,
      image: image2,
      duration: "05 Year",
      payment: "$120,000/",
      address: "Realtor Office Building 5F Pakistan",
    },
    {
      id: 5,
      image: image1,
      duration: "05 Year",
      payment: "$120,000/",
      address: "Realtor Office Building 5F Pakistan",
    },
    {
      id: 6,
      image: image3,
      duration: "05 Year",
      payment: "$120,000/",
      address: "Realtor Office Building 5F Pakistan",
    },
  ];

  const handleElementClick = (index) => {
    setSelectedElement(index);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="MainContainerTrending">
      <div className="MianHeadingText">Most Trending Projects</div>
      <div className="ArrayHeadingBlock">
        {arr.map((item, index) => {
          return (
            <div
              key={index}
              className={`ArrayElementStyle ${
                selectedElement === index ? "selected" : ""
              }`}
              onClick={() => handleElementClick(index)}
            >
              {item.name}
            </div>
          );
        })}
      </div>
      <div className="ArrBottomLine" />

      {/* <div className="TrendingArrayObjectMainContainer">
        <div className={`array-container ${showAll ? "scrollable" : ""}`}>
          <div className="inner-container">
            {objArr.map((element, index) => (
              <div key={index} className="TrendingProjectArrayObject">
                <img
                  src={element.image}
                  alt="My Image"
                  className="ObjectImageStyle"
                />
                <div className="ContainerStyleToRow">
                  <div className="BoxStyle1">
                    <img src={infinity} alt="Image" className="InBoxIcon1Style" />  
                    <div className="textColumn">
                      <div className="durationStringStyle">
                        Duration of Project
                      </div>
                      <div className="durationDateStyle">
                        {element.duration}
                      </div>
                    </div>
                  </div>
                  <div className="BoxStyle2">
                    <img src={doller} alt="Image" className="InBoxIcon2Style"/>
                    <div className="textColumn">
                      <div className="durationStringStyle">
                      Down Payment Start From
                      </div>
                      <div className="paymentAmountStyle">
                        {element.payment}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="addressStyleContainer">
                <img src={PinLoc} alt="Image" />
                <div className="addressTextStyle">{element.address}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {!showAll && (
          <div className="show-more-button">
            <button onClick={toggleShowAll} id="showMoreBtn">
              Show More
            </button>
          </div>
        )}
      </div> */}
      <div className="TrendingArrayObjectMainContainer">
        <div className={`array-container ${showAll ? "scrollable" : ""}`}>
          {objArr.slice(0, 3).map((element, index) => (
            <div key={index} className="TrendingProjectArrayObject">
              <img
                src={element.image}
                alt="Image"
                className="ObjectImageStyle"
              />
              <div className="ContainerStyleToRow">
                {/* Box 1 */}
                <div className="BoxStyle1">
                  <img src={infinity} alt="Image" className="InBoxIconStyle" />
                  <div className="textColumn">
                    <div className="durationStringStyle">
                      Duration of Project
                    </div>
                    <div className="durationDateStyle">{element.duration}</div>
                  </div>
                </div>
                {/* Box 2 */}
                <div className="BoxStyle2">
                  <img src={doller} alt="Image" className="InBoxIconStyle" />
                  <div className="textColumn">
                    <div className="durationStringStyle">
                      Down Payment Start From
                    </div>
                    <div className="paymentAmountStyle">{element.payment}</div>
                  </div>
                </div>
              </div>
              <div className="addressStyleContainer">
                <img src={PinLoc} alt="Image" />
                <div className="addressTextStyle">{element.address}</div>
              </div>
            </div>
          ))}
          {!showAll && (
            <div
              className="ArrayObjectForLearnMore learn-more-button"
              // onClick={toggleShowAll}
            >
              <div className="SeeMoreStyle">See More</div>
              <img src={image4} alt="Image" className="ObjectImageStyle" />
            </div>
          )}
          {showAll && (
            <div className="inner-container">
              {objArr.slice(3).map((element, index) => (
                <div key={index} className="TrendingProjectArrayObject">
                  <img
                    src={element.image}
                    alt="Image"
                    className="ObjectImageStyle"
                  />
                  <div className="ContainerStyleToRow">
                    {/* Box 1 */}
                    <div className="BoxStyle1">
                      <img
                        src={infinity}
                        alt="Image"
                        className="InBoxIconStyle"
                      />
                      <div className="textColumn">
                        <div className="durationStringStyle">
                          Duration of Project
                        </div>
                        <div className="durationDateStyle">
                          {element.duration}
                        </div>
                      </div>
                    </div>
                    {/* Box 2 */}
                    <div className="BoxStyle2">
                      <img
                        src={doller}
                        alt="Image"
                        className="InBoxIconStyle"
                      />
                      <div className="textColumn">
                        <div className="durationStringStyle">
                          Down Payment Start From
                        </div>
                        <div className="paymentAmountStyle">
                          {element.payment}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="addressStyleContainer">
                    <img src={PinLoc} alt="Image" />
                    <div className="addressTextStyle">{element.address}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
