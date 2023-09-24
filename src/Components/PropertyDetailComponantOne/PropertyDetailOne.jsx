import React, { useState } from "react";
import "./propertyDetailOne.css";
import { downloadIcon } from "../../Assets";
import PropertyDetailTwo from "../PropertyDetailComponantTwo/PropertyDetailTwo";
import { ac, heater, lawn, laundry, Swimming, dining } from "../../Assets";

import { BsChatDotsFill, BsFillClockFill } from "react-icons/bs";
import { AiTwotoneLike } from "react-icons/ai";

export default function PropertyDetailOne() {
  let [readMore, setReadMore] = useState(false);
  let [isLike, setIsLike] = useState(false);

  const PropertyDetailContainer = ({ heading, text }) => {
    return (
      <div className="PropertDetailTwoInfoTextWrapper">
        <div className="PropertDetailTwoInfoTextOne">{heading}</div>
        <div className="PropertDetailTwoInfoTextTwo">{text}</div>
      </div>
    );
  };

  const PropertyFeatureContainer = ({ image, text }) => {
    return (
      <div className="PropertFeatureInfoTextWrapper">
        <img className="PropertFeatureInfoIcon" src={image} alt="img" />
        <div className="PropertFeatureInfoText">{text}</div>
      </div>
    );
  };

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
  ];
  return (
    <>
      <div className="PropertyDetailOneMainContainer">
        <div className="PropertyDetailHeading">Description</div>
        {/* <div
          className={
            readMore
              ? "PropertyDetailDescriptionContainer"
              : "PropertyDetailDescriptionContainerWithoutReadMore"
          }
        >
          <div
            className={
              readMore
                ? "PropertyDetailDescriptionStyle"
                : "PropertyDetailDescriptionStyleWithOutReadMore"
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin velit
            augue, hendrerit et tempor ac, rutrum in diam. Mauris semper augue
            nec gravida aliquam. Duis ut arcu et ante tincidunt bibendum nec ut
            nisl. Ut bibendum, justo sed vestibulum malesuada, sapien metus
            pharetra nunc, nec vulputate ipsum tellus id erat. Nullam augue
            metus, accumsan a justo eget, rutrum accumsan orci. Mauris libero
            mi, laoreet a viverra vitae, sagittis eget eros. Integer vel quam
            interdum, condimentum orci eget, sodales sem.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin velit
            augue, hendrerit et tempor ac, rutrum in diam. Mauris semper augue
            nec gravida aliquam. Duis ut arcu et ante tincidunt bibendum nec ut
            nisl. Ut bibendum, justo sed vestibulum malesuada, sapien metus
            pharetra nunc, nec vulputate ipsum tellus id erat. Nullam augue
            metus, accumsan a justo eget, rutrum accumsan orci. Mauris libero
            mi, laoreet a viverra vitae, sagittis eget eros. Integer vel quam
            interdum, condimentum orci eget, sodales sem. <br />
            <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Proin velit augue, hendrerit et tempor ac, rutrum in diam. Mauris
            semper augue nec gravida aliquam. Duis ut arcu et ante tincidunt
            bibendum nec ut nisl. Ut bibendum, justo sed vestibulum malesuada,
            sapien metus pharetra nunc, nec vulputate ipsum tellus id erat.
            Nullam augue metus, accumsan a justo eget, rutrum accumsan orci.
            Mauris libero mi, laoreet a viverra vitae, sagittis eget eros.
            Integer vel quam interdum, condimentum orci eget, sodales sem.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin velit
            augue, hendrerit et tempor ac, rutrum in diam. Mauris semper augue
            nec gravida aliquam. Duis ut arcu et ante tincidunt bibendum nec ut
            nisl. Ut bibendum, justo sed vestibulum malesuada, sapien metus
            pharetra nunc, nec vulputate ipsum tellus id erat. Nullam augue
            metus, accumsan a justo eget, rutrum accumsan orci. Mauris libero
            mi, laoreet a viverra vitae, sagittis eget eros. Integer vel quam
            interdum, condimentum orci eget, sodales sem.
          </div>
          {!readMore ? (
            <div className="FadingDescriptionWithoutReadMore" />
          ) : null}
        </div> */}
        {readMore ? null : (
          <div
            onClick={() => {
              setReadMore((readMore = true));
            }}
            className="ReadMoreButtonStyle"
          >
            Read More
          </div>
        )}

        <div className="PropertyDetailDocumantMainContainer">
          <div className="PropertyDetailHeading">Documents</div>
          <div className="propertyDetailMainRowContainer">
            <div className="propertyDetailSubRowContainerOne">
              <img src={downloadIcon} alt="img" />
              <div className="PropertyDetailDocumantFIleNameStyle">
                propertydetails.pdf
              </div>
              <div className="PropertyDetailDocumantDownloadButtonStyle">
                Download
              </div>
            </div>
            <div className="propertyDetailSubRowContainerTwo">
              <img src={downloadIcon} alt="img" />
              <div className="PropertyDetailDocumantFIleNameStyle">
                floorplandetails.pdf
              </div>
              <div className="PropertyDetailDocumantDownloadButtonStyle">
                Download
              </div>
            </div>
          </div>
        </div>
        <div className="ProppertyDetailOneBottomLine" />
        {/* <div className="PropertDetailTwoMainContainer"> */}
        <div className="PropertyDetailHeading">Property Details</div>
        <div className="PropertDetailTwoInfoMainContainer">
          <div className="PropertDetailInfoSubContainerOne">
            <PropertyDetailContainer
              heading={"Property ID:"}
              text={"RH09876"}
            />
            <PropertyDetailContainer heading={"Price:"} text={"$985,000"} />
            <PropertyDetailContainer
              heading={"Property Size:"}
              text={"1567 sqft"}
            />
            <PropertyDetailContainer heading={"Year Built:"} text={"1989"} />
            <PropertyDetailContainer heading={"Bedrooms:"} text={"3"} />
          </div>
          <div className="PropertDetailTwoInfoSubContainerTwo">
            <PropertyDetailContainer heading={"Bathrooms:"} text={"2"} />
            <PropertyDetailContainer heading={"Garage:"} text={"1"} />
            <PropertyDetailContainer
              heading={"Garage Size:"}
              text={"285 sqft"}
            />
            <PropertyDetailContainer
              heading={"Property Size:"}
              text={"House"}
            />
            <PropertyDetailContainer
              heading={"Property Status:"}
              text={"For Sale"}
            />
          </div>
        </div>
        <div className="ProppertyDetailOneBottomLine" />

        <div className="PropertyFeaturesMainContainer">
          <div className="PropertyDetailHeading">Property Features</div>
          <div className="PropertDetailTwoInfoMainContainer">
            <div className="PropertDetailInfoSubContainerOne">
              <PropertyFeatureContainer image={ac} text={"Air Conditioning"} />
              <PropertyFeatureContainer image={heater} text={"Heater"} />
              <PropertyFeatureContainer image={lawn} text={"Lawn"} />
            </div>
            <div className="PropertDetailTwoInfoSubContainerTwo">
              <PropertyFeatureContainer image={laundry} text={"Laundry Room"} />
              <PropertyFeatureContainer
                image={Swimming}
                text={"Swimming Pool"}
              />
              <PropertyFeatureContainer image={dining} text={"Dining Room"} />
            </div>
          </div>
        </div>
        <div className="ProppertyDetailOneBottomLine" />
        <div className="ReViewTextStyle">Reiewes</div>
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
        <div className="MoreCommentButtonStyle_Property">More Reviews</div>
      </div>

      {/* </div> */}
    </>
  );
}
