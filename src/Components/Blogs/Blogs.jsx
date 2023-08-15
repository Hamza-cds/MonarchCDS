import React from "react";
import "./blogs.css";
import { BlogIcon1, BlogImage1, BlogImage2 } from "../../Assets";

function Blogs() {
  const Data = [
    {
      id: 1,
      image: BlogImage1,
      heading: "Investment on Property, Profitable or Detrimental?",
    },
    {
      id: 2,
      image: BlogImage1,
      heading: "5 Tips on Choosing Comfortable Housing for Families",
    },
    {
      id: 3,
      image: BlogImage1,
      heading: "5 Tips on Choosing Comfortable Housing for Families",
    },
  ];
  return (
    <div className="BlogsMainContainer">
      <div className="BlogsMainContentContainer">
        {Data.map((item) => {
          return (
            <div className="ContentContainer">
              <img src={item.image} alt="Image" className="BlogImageStyle" />
              <p className="BlogTextStyle">{item.heading}</p>
              <div className="BlogsIconMainContainer">
                <div className="BlogIconContainer">
                  <img src={BlogIcon1} alt="Icon" />
                  <p className="BlogTextInfoStyle">Dreamwell Team</p>
                </div>
                <div className="BlogIconContainer">
                  <img src={BlogIcon1} alt="Icon" />
                  <p className="BlogTextInfoStyle"> 13 March</p>
                </div>
              </div>
              <div className="BlogReadMoreTextStyle">Read More</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blogs;
