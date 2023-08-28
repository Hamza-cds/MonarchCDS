import React, { useState } from "react";
import "./blogs.css";
import ColabratePartner from "../../Components/CollaborativePartner/ColabratePartner";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { BiSolidTimeFive } from "react-icons/bi";
import {
  BlogIcon1,
  BlogsDemoImages,
  BlogsDemoImages2,
  SideArrow,
  SidebarImage,
} from "../../Assets";

function Blogs() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchText);
  };

  const Data = [
    {
      id: 1,
      image: BlogsDemoImages,
      heading: "Investment on Property, Profitable or Detrimental?",
    },
    {
      id: 2,
      image: BlogsDemoImages2,
      heading: "5 Tips on Choosing Comfortable Housing for Families",
    },
    {
      id: 3,
      image: BlogsDemoImages,
      heading: "5 Tips on Choosing Comfortable Housing for Families",
    },
    {
      id: 4,
      image: BlogsDemoImages2,
      heading: "5 Tips on Choosing Comfortable Housing for Families",
    },
    {
      id: 5,
      image: BlogsDemoImages,
      heading: "5 Tips on Choosing Comfortable Housing for Families",
    },
    {
      id: 6,
      image: BlogsDemoImages2,
      heading: "5 Tips on Choosing Comfortable Housing for Families",
    },
    {
      id: 7,
      image: BlogsDemoImages,
      heading: "5 Tips on Choosing Comfortable Housing for Families",
    },
  ];
  const Tags = [
    {
      id: 1,
      title: "house",
    },
    {
      id: 2,
      title: "recommendation",
    },
    {
      id: 3,
      title: "tips",
    },
    {
      id: 4,
      title: "apartment",
    },
    {
      id: 5,
      title: "design",
    },
    {
      id: 6,
      title: "design interior",
    },
    {
      id: 7,
      title: "house style",
    },
    {
      id: 8,
      title: "property",
    },
    {
      id: 9,
      title: "management",
    },
  ];
  return (
    <section className="BlogsMainParentContainer">
      <div className="mainHeaderBgContainer_Blogs">
        <div className="WelcomeRealEstateTextStyle">
          Welcome To Real Estate World
        </div>
      </div>
      <section className="BlogMainContainerStyle">
        <div className="BlogsSideMainContainer">
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <div onClick={handleSearch} style={{ cursor: "pointer" }}>
              <CiSearch size={20} color="#636363" />
            </div>
          </div>

          <div className="SidebarCategoryMainContainer">
            <div className="SidebarCategoryTextStyle">Categories</div>
            <div className="SideCat_Tips">Tips</div>
            <div className="SideCat_Tips">Management</div>
            <div className="SideCat_Tips">Property</div>
            <div className="SideCat_Tips">Finance</div>
            <div className="SideCat_Tips">Finance</div>
          </div>
          <div className="SidebarCategoryMainContainer">
            <div className="SidebarCategoryTextStyle">Recommendation</div>
            <div className="LatestTextStyleBlogs">Latest posts</div>
            <div className="ImageSideAreaMainContainer">
              <div className="ImageBlogSideContainer"></div>
              <div className="SidebarContextContainer">
                <div className="SideSpaceTextStyle">
                  5 Most Comfortable Areas for living in Space London
                </div>
                <div className="SideIconWrapper">
                  <FaUserCircle size={18} color="#B1B1B1" />
                  <div className="SidebarDreamWellTextStyle">
                    DreamWell Team
                  </div>
                </div>
                <div className="SideIconWrapper">
                  <BiSolidTimeFive size={18} color="#B1B1B1" />
                  <div className="SidebarDreamWellTextStyle">
                    DreamWell Team
                  </div>
                </div>
              </div>
            </div>

            <div className="ImageSideAreaMainContainer">
              <div className="ImageBlogSideContainer"></div>
              <div className="SidebarContextContainer">
                <div className="SideSpaceTextStyle">
                  5 Most Comfortable Areas for living in Space London
                </div>
                <div className="SideIconWrapper">
                  <FaUserCircle size={18} color="#B1B1B1" />
                  <div className="SidebarDreamWellTextStyle">
                    DreamWell Team
                  </div>
                </div>
                <div className="SideIconWrapper">
                  <BiSolidTimeFive size={18} color="#B1B1B1" />
                  <div className="SidebarDreamWellTextStyle">
                    DreamWell Team
                  </div>
                </div>
              </div>
            </div>
            <div className="PopularTextStyleBlogs">Popular Tags</div>
            <div className="SideTagsContainer">
              {Tags.map((item) => {
                return <div className="SideTitleTextStyle">{item.title}</div>;
              })}
            </div>
          </div>
          <img src={SidebarImage} alt="Image" className="SidebarImage_Pro" />
          <div className="SideTextMainWrapper">
            <img src={SideArrow} alt="Image" className="SideArrowStyle" />
            <div className="SideTextWrapperStyle">
              <p className="SideDownLoadTextStyle">Download & Read</p>
              <p className="SideProfileTextStyle">Our Company Profile</p>
            </div>
          </div>
        </div>
        <div className="BlogContentContentContainer">
          {Data.map((item) => {
            return (
              <div className="ContentContainerBlogs">
                <img src={item.image} alt="Image" className="BlogImageStyle" />
                <p className="BlogTextStyleBlogs">{item.heading}</p>
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
      </section>
      <ColabratePartner />
    </section>
  );
}

export default Blogs;
