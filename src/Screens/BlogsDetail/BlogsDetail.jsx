import React, { useState } from "react";
import "./blogDetail.css";
import ColabratePartner from "../../Components/CollaborativePartner/ColabratePartner";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { BiSolidTimeFive } from "react-icons/bi";
import { BsChatDotsFill, BsFillClockFill } from "react-icons/bs";
import { AiTwotoneDislike, AiTwotoneLike } from "react-icons/ai";

import Select from "react-select";

import {
  BlogIcon1,
  BlogsDeatialImage4,
  BlogsDemoImages,
  BlogsDemoImages2,
  BlogsDetailImage,
  BlogsDetailImage1,
  BlogsDetailImage2,
  BlogsDetailImage3,
  BlogsFacebook,
  BlogsLinkedIn,
  BlogsPinterest,
  BlogsTwitter,
  FaceBookSupport,
  LinkedInSupport,
  SideArrow,
  SideLadyImage,
  SidebarImage,
  WhatsAppCallSupport,
  WhatsAppSupport,
} from "../../Assets";
import Blogs from "../../Components/Blogs/Blogs";

function BlogsDetail() {
  const [searchText, setSearchText] = useState("");
  let [isLike, setIsLike] = useState(false);

  const handleSearch = () => {
    console.log("Searching for:", searchText);
  };

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
  const Tags2 = [
    {
      id: 1,
      title: "house",
    },
    {
      id: 2,
      title: "living space",
    },
    {
      id: 3,
      title: "london",
    },
    {
      id: 4,
      title: "apartment",
    },
    {
      id: 5,
      title: "property",
    },
    {
      id: 6,
      title: "living area",
    },
  ];
  const options = [
    { value: "option 1", label: "option 1" },
    { value: "option 2", label: "option 2" },
    { value: "option 3", label: "option 3" },
  ];
  return (
    <>
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
                    <div className="SidebarDreamWellTextStyle">16, March</div>
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
                    <div className="SidebarDreamWellTextStyle">16, March</div>
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
            <div className="SideImageWrapperContainer">
              <img src={SideLadyImage} alt="Image" className="SidebarImage" />
              <div className="SocialWrapperStyle">
                <div className="CustomerSupportTextStyle">Customer Support</div>
                <img
                  src={FaceBookSupport}
                  alt="Image"
                  className="SupportImageStyle"
                />
                <img
                  src={WhatsAppCallSupport}
                  alt="Image"
                  className="SupportImageStyle"
                />
                <img
                  src={LinkedInSupport}
                  alt="Image"
                  className="SupportImageStyle"
                />
                <img
                  src={WhatsAppSupport}
                  alt="Image"
                  className="SupportImageStyle"
                />
              </div>
            </div>
            <div className="SideMoreInfoWrapper">
              <p className="SideTextStyle">Schedule a Visit</p>
              <p className="SideTextStyle2">For More Information</p>
            </div>
            <input
              placeholder="Date"
              className="custom-date_Side"
              type="date"
            />
            <Select
              placeholder={"Time"}
              options={options}
              className="Select_Option_Style_Sidebar_Pro"
              classNamePrefix="Select"
              components={{
                IndicatorSeparator: () => null,
              }}
              isSearchable={false}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  border: state.isFocused ? 0 : 0,
                  outline: state.isFocused ? "none" : "none",
                  boxShadow: "none",
                  cursor: "pointer",
                }),
              }}
            />
            <p className="SidebarInfoTextStyle">Your Information</p>
            <div className="SidebarInputContainer">
              <p className="SidebarLabelTextStyle">Name</p>
              <input
                placeholder="Enter text"
                class="rounded-input_Pro"
                type="text"
              />
            </div>
            <div className="SidebarInputContainer">
              <p className="SidebarLabelTextStyle">Phone</p>
              <input
                placeholder="Enter text"
                class="rounded-input_Pro"
                type="text"
              />
            </div>
            <div className="SidebarInputContainer">
              <p className="SidebarLabelTextStyle">Email</p>
              <input
                placeholder="Enter text"
                class="rounded-input_Pro"
                type="text"
              />
            </div>
            <div className="SidebarInputContainer">
              <p className="SidebarLabelTextStyle">Message</p>
              <input
                placeholder="Enter text"
                class="rounded-input_Pro"
                type="text"
              />
            </div>
            <div className="SidebarSubmitButton">Submit a Tour Request</div>
          </div>
          <div className="BlogDetailsContentContentContainer">
            <div className="BlogsDetailRouteTextContainer">
              Home / Blog/
              <span style={{ color: "black" }}>
                Most Comfortable Areas For Living
              </span>
            </div>
            <div className="BlogsDetailLovingTextStyle">
              5 Most Comfortable Areas for Living Space in London
            </div>
            <div className="BlogsDetailIconMainWrapper">
              <div className="SideIconWrapper">
                <FaUserCircle size={18} color="#B1B1B1" />
                <div className="SidebarDreamWellTextStyle">DreamWell Team</div>
              </div>
              <div className="SideIconWrapper">
                <BiSolidTimeFive size={18} color="#B1B1B1" />
                <div className="SidebarDreamWellTextStyle">16 march</div>
              </div>
              <div className="SideIconWrapper">
                <BsChatDotsFill size={18} color="#B1B1B1" />
                <div className="SidebarDreamWellTextStyle">23 comments</div>
              </div>
            </div>
            <div className="BlogsDetailImageStyleContainer">
              <img
                src={BlogsDetailImage}
                alt="Image"
                className="BlogsDetailImageStyle"
              />
            </div>
            <div className="BlogsDetailLoremTextStyle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ex augue, fermentum id tristique eget, condimentum ut sapien. Ut
              id quam nec lacus dignissim rutrum. Sed congue massa in elit
              tincidunt, et tempor ante elementum. Sed fringilla sapien sit amet
              dictum tempor. Vestibulum eu tempor nisi. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. In a ex nibh. Nunc porttitor vestibulum diam, vitae
              hendrerit magna accumsan ac. Etiam vitae volutpat urna. Aenean
              metus justo, pellentesque non bibendum sed, ultricies vitae dui.
              Praesent lobortis sollicitudin dictum. Nam blandit diam et erat
              congue, pharetra feugiat dui aliquam. Nam tempor magna ut nunc
              mollis venenatis.
            </div>
            <div className="BlogsDesignedLoremTextStyle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ex augue, fermentum id tristique eget, condimentum ut sapien. Ut
              id quam nec lacus dignissim rutrum.
            </div>
            <div className="BlogsDetailLoremTextStyle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ex augue, fermentum id tristique eget, condimentum ut sapien. Ut
              id quam nec lacus dignissim rutrum. Sed congue massa in elit
              tincidunt, et tempor ante elementum. Sed fringilla sapien sit amet
              dictum tempor:
            </div>
            <div className="BlogsDetailLoremPointsContainerStyle">
              <div className="BlogsHeadingTextStyle">
                1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div className="BlogsDetailLoremTextStylePoint">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ex augue, fermentum id tristique eget, condimentum ut sapien. Ut
                id quam nec lacus dignissim rutrum. Sed congue massa in elit
                tincidunt, et tempor ante elementum. Sed fringilla sapien sit
                amet dictum tempor. Vestibulum eu tempor nisi. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. In a ex nibh. Nunc porttitor vestibulum
                diam, vitae hendrerit magna accumsan ac. Etiam vitae volutpat
                urna. Aenean metus justo, pellentesque non bibendum sed,
                ultricies vitae dui.
              </div>
              <div className="BlogsDetailImageStyleContainer">
                <img
                  src={BlogsDetailImage1}
                  alt="Image"
                  className="BlogsDetailImageStyle"
                />
              </div>
            </div>
            <div className="BlogsDetailLoremPointsContainerStyle">
              <div className="BlogsHeadingTextStyle">
                2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div className="BlogsDetailLoremTextStylePoint">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ex augue, fermentum id tristique eget, condimentum ut sapien. Ut
                id quam nec lacus dignissim rutrum. Sed congue massa in elit
                tincidunt, et tempor ante elementum. Sed fringilla sapien sit
                amet dictum tempor. Vestibulum eu tempor nisi. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. In a ex nibh. Nunc porttitor vestibulum
                diam, vitae hendrerit magna accumsan ac. Etiam vitae volutpat
                urna. Aenean metus justo, pellentesque non bibendum sed,
                ultricies vitae dui.
              </div>
              <div className="BlogsDetailImageStyleContainer">
                <img
                  src={BlogsDetailImage2}
                  alt="Image"
                  className="BlogsDetailImageStyle"
                />
              </div>
            </div>
            <div className="BlogsDetailLoremPointsContainerStyle">
              <div className="BlogsHeadingTextStyle">
                3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div className="BlogsDetailLoremTextStylePoint">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ex augue, fermentum id tristique eget, condimentum ut sapien. Ut
                id quam nec lacus dignissim rutrum. Sed congue massa in elit
                tincidunt, et tempor ante elementum. Sed fringilla sapien sit
                amet dictum tempor. Vestibulum eu tempor nisi. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. In a ex nibh. Nunc porttitor vestibulum
                diam, vitae hendrerit magna accumsan ac. Etiam vitae volutpat
                urna. Aenean metus justo, pellentesque non bibendum sed,
                ultricies vitae dui.
              </div>
              <div className="BlogsDetailImageStyleContainer">
                <img
                  src={BlogsDetailImage3}
                  alt="Image"
                  className="BlogsDetailImageStyle"
                />
              </div>
            </div>
            <div className="BlogsDetailLoremPointsContainerStyle">
              <div className="BlogsHeadingTextStyle">
                4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div className="BlogsDetailLoremTextStylePoint">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ex augue, fermentum id tristique eget, condimentum ut sapien. Ut
                id quam nec lacus dignissim rutrum. Sed congue massa in elit
                tincidunt, et tempor ante elementum. Sed fringilla sapien sit
                amet dictum tempor. Vestibulum eu tempor nisi. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. In a ex nibh. Nunc porttitor vestibulum
                diam, vitae hendrerit magna accumsan ac. Etiam vitae volutpat
                urna. Aenean metus justo, pellentesque non bibendum sed,
                ultricies vitae dui.
              </div>
              <div className="BlogsDetailImageStyleContainer">
                <img
                  src={BlogsDeatialImage4}
                  alt="Image"
                  className="BlogsDetailImageStyle"
                />
              </div>
            </div>
            <div className="BlogsDetailLoremPointsContainerStyle">
              <div className="BlogsHeadingTextStyle">
                5. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div className="BlogsDetailLoremTextStylePoint">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ex augue, fermentum id tristique eget, condimentum ut sapien. Ut
                id quam nec lacus dignissim rutrum. Sed congue massa in elit
                tincidunt, et tempor ante elementum. Sed fringilla sapien sit
                amet dictum tempor. Vestibulum eu tempor nisi. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. In a ex nibh. Nunc porttitor vestibulum
                diam.
              </div>
            </div>
            <div className="BlogsDetailArticleTextStyle">Article Tags</div>
            <div className="SideTagsContainer">
              {Tags2.map((item) => {
                return <div className="SideTitleTextStyle">{item.title}</div>;
              })}
            </div>
            <div className="BlogsDetailMainSocialConatainer">
              <img
                src={BlogsFacebook}
                alt="Image"
                className="BlogsDetrailSocialImageStyle"
              />
              <img
                src={BlogsTwitter}
                alt="Image"
                className="BlogsDetrailSocialImageStyle"
              />
              <img
                src={BlogsLinkedIn}
                alt="Image"
                className="BlogsDetrailSocialImageStyle"
              />
              <img
                src={BlogsPinterest}
                alt="Image"
                className="BlogsDetrailSocialImageStyle"
              />
            </div>
            <div className="BlogsDetailDropMainContainer">
              <div className="CommentTextSyle">Comments (23)</div>
              <div className="BlogsDropContainer">
                <div className="BlogsSortTextStyle">Sort by</div>
                <Select
                  placeholder={"Top Categories"}
                  options={options}
                  className="Select_Option_Style_Sidebar_Pro_Blogs"
                  classNamePrefix="Select"
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  isSearchable={false}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      border: state.isFocused ? 0 : 0,
                      outline: state.isFocused ? "none" : "none",
                      boxShadow: "none",
                      cursor: "pointer",
                      backgroundColor: "#EDFBF4",
                    }),
                  }}
                />
              </div>
            </div>
            <div className="BlogsDetailMainContainer">
              {Tags2.map((item) => {
                return (
                  <div className="BlogCommentMainWrapper">
                    <div className="CommentDetailContainer">
                      <div className="ImageWrapper"></div>
                      <div className="CommentContentWrapper">
                        <div className="CommentPeopleName">Penelope Green</div>
                        <div className="CommentClockContainer">
                          <BsFillClockFill size={18} color="#B1B1B1" />
                          <div className="CommnetDateTextStyle">
                            February 12, 2023
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CommentActualComment">
                      I lived in one of that areas, and yes, it’s true. I really
                      love the place so much.
                    </div>
                    <div className="CommentLikeButtonMainWrapper">
                      <div className="CommentLikeButtonWrapper">
                        <AiTwotoneLike
                          style={{ cursor: "pointer" }}
                          size={18}
                          color={isLike == item.id ? "#124342" : "#B1B1B1"}
                          onClick={() => {
                            setIsLike(item.id);
                          }}
                        />
                        <div className="CommnetDateTextStyle">11 likes</div>
                      </div>
                      <div className="CommentMessageWrapper">
                        <BsChatDotsFill size={18} color="#B1B1B1" />
                        <div className="CommnetDateTextStyle">2 replies</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="MoreCommentButtonStyle">More Comments</div>
            <div className="BlogsInputMainConatainer">
              <div className="YourCommentTextStyle">Your Comment</div>
              <div className="CommentDetailTextStyle">
                Your email address will not be published. Required fields are
                marked
              </div>
              <div className="InputFieldCommentMainWrapper">
                <div className="input-wrapper_First">
                  <div className="NameCommentTextInfostyle">Your Name</div>
                  <div className="input-container_Blogs">
                    <input
                      type="text"
                      placeholder=""
                      className="rounded-input-Blogs"
                    />
                  </div>
                </div>
                <div className="input-wrapper">
                  <div className="NameCommentTextInfostyle">Your Name</div>
                  <div className="input-container_Blogs">
                    <input
                      type="text"
                      placeholder=""
                      className="rounded-input-Blogs"
                    />
                  </div>
                </div>
              </div>
              <div className="input-wrapper_TextArea">
                <div className="NameCommentTextInfostyle">Comment</div>
                <div className="textarea-container">
                  <textarea placeholder="" className="custom-textarea" />
                </div>
              </div>
              <div className="checkbox-row">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  style={{ cursor: "pointer" }}
                />
                <label htmlFor="myCheckbox" className="myCheckbox">
                  Save my name and email in this browser for the next time I
                  comment.
                </label>
              </div>
              <div className="MoreCommentButtonStyleSubmit">Submit</div>
            </div>
          </div>
        </section>
      </section>
      <Blogs />
    </>
  );
}

export default BlogsDetail;
