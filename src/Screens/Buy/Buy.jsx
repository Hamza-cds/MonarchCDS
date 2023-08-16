import React, { useState } from "react";
import "./buy.css";
import { AiFillCaretDown } from "react-icons/ai";
import Select from "react-select";
import {
  BathIcon,
  BedIcon,
  GarageIcon,
  LocationIcon,
  SgFeetIcon,
  SliderImage1,
  SliderImage2,
  SliderImage3,
  SwiperRightArrow,
} from "../../Assets";
import { AiOutlineHeart } from "react-icons/ai";
import SideComp from "../../Components/SideComp/SideComp";

function Buy() {
  const [isHouse, setIsHouse] = useState(false);
  const [isVilla, setIsVilla] = useState(false);
  const [isBangla, setIsBangla] = useState(false);
  const [isTownHouse, setIsTownHouse] = useState(false);
  const [isLoft, setIsLoft] = useState(false);
  const [isOffice, setIsOffice] = useState(false);
  const [isAll, setIsAll] = useState(false);
  const [isRent, setIsRent] = useState(false);
  const [isSell, setIsSell] = useState(false);

  const [isJakarta, setIsJakarta] = useState(false);
  const [isSingapure, setIsSingapure] = useState(false);
  const [isBali, setIsBali] = useState(false);
  const [isLondon, setIsLondon] = useState(false);
  const [isNewYork, setIsNewYork] = useState(false);
  const [isLosAng, setIsLosAng] = useState(false);
  const [isQueensland, setIsQueensland] = useState(false);
  const [isShanghai, setIsShanghai] = useState(false);

  const [isBed1, setIsBed1] = useState(false);
  const [isBed2, setIsBed2] = useState(false);
  const [isBed3, setIsBed3] = useState(false);
  const [isBed4, setIsBed4] = useState(false);

  const [isTypeCheck, setIsTypeCheck] = useState(true);
  const [isStatusCheck, setIsStatusCheck] = useState(true);
  const [isLocationCheck, setIsLocationCheck] = useState(true);
  const [isBedCheck, setIsBedCheck] = useState(true);
  const [isPriceCheck, setIsPriceCheck] = useState(true);
  let [isLike, setIsLike] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const options = [
    { value: "option 1", label: "option 1" },
    { value: "option 2", label: "option 2" },
    { value: "option 3", label: "option 3" },
  ];

  const Data = [
    {
      id: 1,
      image: SliderImage1,
      heading: "Beach View Villa",
    },
    {
      id: 2,
      image: SliderImage2,
      heading: "Shangri la New Apartment Unit",
    },
    {
      id: 3,
      image: SliderImage3,
      heading: "Single Family Ranch House",
    },
    {
      id: 4,
      image: SliderImage1,
      heading: "Beach View Villa",
    },
    {
      id: 5,
      image: SliderImage2,
      heading: "Shangri la New Apartment Unit",
    },
    {
      id: 6,
      image: SliderImage3,
      heading: "Beach View Villa",
    },
    {
      id: 7,
      image: SliderImage1,
      heading: "Beach View Villa",
    },
    {
      id: 8,
      image: SliderImage2,
      heading: "Shangri la New Apartment Unit",
    },
  ];

  return (
    <section className="mainBuyParentContainer">
      <div>
        <section className="RentSideBarContainer">
          <div>
            <div
              className="RentDropdownContainer"
              onClick={() => {
                setIsTypeCheck(!isTypeCheck);
              }}
            >
              <p className="RentDropdownTextStyle">Type</p>
              <AiFillCaretDown size={14} color="black" />
            </div>
            {isTypeCheck && (
              <>
                <div className="RentCheckBoxWrapper">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    checked={isHouse}
                    onChange={() => {
                      setIsHouse(!isHouse);
                    }}
                  />
                  <p className="RentCheckBoxTextStyle">Houses</p>
                </div>
                <div className="RentCheckBoxWrapper">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    checked={isVilla}
                    onChange={() => {
                      setIsVilla(!isVilla);
                    }}
                  />
                  <p className="RentCheckBoxTextStyle">Villa</p>
                </div>
                <div className="RentCheckBoxWrapper">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    checked={isBangla}
                    onChange={() => {
                      setIsBangla(!isBangla);
                    }}
                  />
                  <p className="RentCheckBoxTextStyle">Bungalow</p>
                </div>
                <div className="RentCheckBoxWrapper">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    checked={isTownHouse}
                    onChange={() => {
                      setIsTownHouse(!isTownHouse);
                    }}
                  />
                  <p className="RentCheckBoxTextStyle">Townhouse</p>
                </div>
                <div className="RentCheckBoxWrapper">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    checked={isLoft}
                    onChange={() => {
                      setIsLoft(!isLoft);
                    }}
                  />
                  <p className="RentCheckBoxTextStyle">Loft</p>
                </div>
                <div className="RentCheckBoxWrapper">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    checked={isOffice}
                    onChange={() => {
                      setIsOffice(!isOffice);
                    }}
                  />
                  <p className="RentCheckBoxTextStyle">Office</p>
                </div>
              </>
            )}
          </div>
          <div>
            <div
              className="RentDropdownContainer"
              onClick={() => {
                setIsStatusCheck(!isStatusCheck);
              }}
            >
              <p className="RentDropdownTextStyle">Status</p>
              <AiFillCaretDown size={14} color="black" />
            </div>
            {isStatusCheck && (
              <>
                <div className="RentCheckBoxWrapper">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    checked={isAll}
                    onChange={() => {
                      setIsAll(!isAll);
                    }}
                  />
                  <p className="RentCheckBoxTextStyle">All</p>
                </div>
                <div className="RentCheckBoxWrapper">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    checked={isRent}
                    onChange={() => {
                      setIsRent(!isRent);
                    }}
                  />
                  <p className="RentCheckBoxTextStyle">Rent</p>
                </div>
                <div className="RentCheckBoxWrapper">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    checked={isSell}
                    onChange={() => {
                      setIsSell(!isSell);
                    }}
                  />
                  <p className="RentCheckBoxTextStyle">Sell</p>
                </div>
              </>
            )}
          </div>
          <div>
            <div
              className="RentDropdownContainer"
              onClick={() => {
                setIsLocationCheck(!isLocationCheck);
              }}
            >
              <p className="RentDropdownTextStyle">Location</p>
              <AiFillCaretDown size={14} color="black" />
            </div>
            {isLocationCheck && (
              <>
                <div className="RentCheckBoxWrapper">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    checked={isJakarta}
                    onChange={() => {
                      setIsJakarta(!isJakarta);
                    }}
                  />
                  <p className="RentCheckBoxTextStyle">Jakarta</p>
                </div>
                <div className="RentCheckBoxWrapper">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    checked={isSingapure}
                    onChange={() => {
                      setIsSingapure(!isSingapure);
                    }}
                  />
                  <p className="RentCheckBoxTextStyle">Singapore</p>
                </div>
                <div className="RentCheckBoxWrapper">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    checked={isBali}
                    onChange={() => {
                      setIsBali(!isBali);
                    }}
                  />
                  <p className="RentCheckBoxTextStyle">Bali</p>
                </div>
                <div className="RentCheckBoxWrapper">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    checked={isLondon}
                    onChange={() => {
                      setIsLondon(!isLondon);
                    }}
                  />
                  <p className="RentCheckBoxTextStyle">London</p>
                </div>
                <div className="RentCheckBoxWrapper">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    checked={isNewYork}
                    onChange={() => {
                      setIsNewYork(!isNewYork);
                    }}
                  />
                  <p className="RentCheckBoxTextStyle">New York</p>
                </div>
                <div className="RentCheckBoxWrapper">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    checked={isLosAng}
                    onChange={() => {
                      setIsLosAng(!isLosAng);
                    }}
                  />
                  <p className="RentCheckBoxTextStyle">Los Angeles</p>
                </div>
                <div className="RentCheckBoxWrapper">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    checked={isQueensland}
                    onChange={() => {
                      setIsQueensland(!isQueensland);
                    }}
                  />
                  <p className="RentCheckBoxTextStyle">Queensland</p>
                </div>
                <div className="RentCheckBoxWrapper">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    checked={isShanghai}
                    onChange={() => {
                      setIsShanghai(!isShanghai);
                    }}
                  />
                  <p className="RentCheckBoxTextStyle">Shanghai</p>
                </div>
              </>
            )}
          </div>
          <div>
            <div
              className="RentDropdownContainer"
              onClick={() => {
                setIsBedCheck(!isBedCheck);
              }}
            >
              <p className="RentDropdownTextStyle">Bedroom</p>
              <AiFillCaretDown size={14} color="black" />
            </div>
            {isBedCheck && (
              <>
                <div className="RentCheckBoxWrapper">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    checked={isBed1}
                    onChange={() => {
                      setIsBed1(!isBed1);
                    }}
                  />
                  <p className="RentCheckBoxTextStyle">1</p>
                </div>
                <div className="RentCheckBoxWrapper">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    checked={isBed2}
                    onChange={() => {
                      setIsBed2(!isBed2);
                    }}
                  />
                  <p className="RentCheckBoxTextStyle">2</p>
                </div>
                <div className="RentCheckBoxWrapper">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    checked={isBed3}
                    onChange={() => {
                      setIsBed3(!isBed3);
                    }}
                  />
                  <p className="RentCheckBoxTextStyle">2</p>
                </div>
                <div className="RentCheckBoxWrapper">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    checked={isBed4}
                    onChange={() => {
                      setIsBed4(!isBed4);
                    }}
                  />
                  <p className="RentCheckBoxTextStyle">More than 4</p>
                </div>
              </>
            )}
          </div>
          <div>
            <div
              className="RentDropdownContainer"
              onClick={() => {
                setIsPriceCheck(!isPriceCheck);
              }}
            >
              <p className="RentDropdownTextStyle">Price</p>
              <AiFillCaretDown size={14} color="black" />
            </div>
            {isPriceCheck && (
              <>
                <div className="DropdownPriceContainer">
                  <div>
                    <p className="DropPriceTextStye">Min Price</p>
                    <div className="TextInputContainerRentDropDown">
                      <input
                        type="text"
                        placeholder="$20"
                        className="TextInputPriceDropDown"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="DropPriceTextStye">Max Price</p>
                    <div className="TextInputContainerRentDropDown">
                      <input
                        type="text"
                        placeholder="$$1,390"
                        className="TextInputPriceDropDown"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
        <SideComp />
      </div>
      <section className="RentContentMainContainer">
        <p className="BuyDreamHomeTextStyle">Buy a Dream Home</p>
        <div className="RentDropDownMainContainerWrapper">
          <div className="DropDownWrapper">
            <p className="SortByTextStyle">Sort by</p>
            <Select
              // menuPlacement="top"
              placeholder={"Newest"}
              options={options}
              className="Select_Option_Style_Rent"
              classNamePrefix="Select"
              components={{
                IndicatorSeparator: () => null,
              }}
              isSearchable={false}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? "white" : null,
                  borderRadius: "5px",
                  border: state.isFocused ? 0 : 0,
                  outline: state.isFocused ? "none" : "none",
                  boxShadow: "none",
                  cursor: "pointer",
                }),
              }}
            />
            <Select
              // menuPlacement="top"
              placeholder={"Popular"}
              options={options}
              className="Select_Option_Style_Rent"
              classNamePrefix="Select"
              components={{
                IndicatorSeparator: () => null,
              }}
              isSearchable={false}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? "white" : null,
                  borderRadius: "5px",
                  border: state.isFocused ? 0 : 0,
                  outline: state.isFocused ? "none" : "none",
                  boxShadow: "none",
                  cursor: "pointer",
                }),
              }}
            />
            <Select
              // menuPlacement="top"
              placeholder={"Featured"}
              options={options}
              className="Select_Option_Style_Rent"
              classNamePrefix="Select"
              components={{
                IndicatorSeparator: () => null,
              }}
              isSearchable={false}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? "white" : null,
                  borderRadius: "5px",
                  border: state.isFocused ? 0 : 0,
                  outline: state.isFocused ? "none" : "none",
                  boxShadow: "none",
                  cursor: "pointer",
                }),
              }}
            />
            <Select
              // menuPlacement="top"
              placeholder={"Other"}
              options={options}
              className="Select_Option_Style_Rent"
              classNamePrefix="Select"
              components={{
                IndicatorSeparator: () => null,
              }}
              isSearchable={false}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? "white" : null,
                  borderRadius: "5px",
                  border: state.isFocused ? 0 : 0,
                  outline: state.isFocused ? "none" : "none",
                  boxShadow: "none",
                  cursor: "pointer",
                }),
              }}
            />
          </div>
          <div className="SvgIconRentWrapper">
            <svg
              className="SvgIconRentWrapperStyle"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <g opacity="0.1">
                <path
                  d="M22.6994 0H2.30063C1.03208 0 0 0.980948 0 2.18824C0 3.39401 1.03208 4.375 2.30063 4.375H22.6994C23.9679 4.375 25 3.39401 25 2.18824C25 0.980948 23.9679 0 22.6994 0Z"
                  fill="#636363"
                />
                <path
                  d="M22.6994 20.625H2.30063C1.03208 20.625 0 21.6059 0 22.8132C0 24.019 1.03208 25 2.30063 25H22.6994C23.9679 25 25 24.019 25 22.8132C25 21.6059 23.9679 20.625 22.6994 20.625Z"
                  fill="#636363"
                />
                <path
                  d="M22.6994 10H2.30063C1.03208 10 0 10.9809 0 12.1882C0 13.394 1.03208 14.375 2.30063 14.375H22.6994C23.9679 14.375 25 13.394 25 12.1882C25 10.9809 23.9679 10 22.6994 10Z"
                  fill="#636363"
                />
              </g>
            </svg>
            <svg
              className="SvgIconRentWrapperStyle"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M9.16168 0H2.13417C0.957389 0 0 0.957373 0 2.13413V9.16152C0 10.3383 0.957389 11.2957 2.13417 11.2957H9.16168C10.3385 11.2957 11.2958 10.3383 11.2958 9.16152V2.13413C11.2958 0.957373 10.3385 0 9.16168 0Z"
                fill="#124342"
              />
              <path
                d="M22.8659 0H15.8384C14.6616 0 13.7042 0.957373 13.7042 2.13413V9.16152C13.7042 10.3383 14.6616 11.2957 15.8384 11.2957H22.8659C24.0427 11.2957 25.0001 10.3383 25.0001 9.16152V2.13413C25.0001 0.957373 24.0427 0 22.8659 0Z"
                fill="#124342"
              />
              <path
                d="M9.16168 13.7043H2.13417C0.957389 13.7043 0 14.6617 0 15.8385V22.8659C0 24.0426 0.957389 25 2.13417 25H9.16168C10.3385 25 11.2958 24.0426 11.2958 22.8659V15.8385C11.2958 14.6617 10.3385 13.7043 9.16168 13.7043Z"
                fill="#124342"
              />
              <path
                d="M22.8658 13.7043H15.8383C14.6615 13.7043 13.7041 14.6617 13.7041 15.8385V22.8659C13.7041 24.0426 14.6615 25 15.8383 25H22.8658C24.0426 25 24.9999 24.0426 24.9999 22.8659V15.8385C24.9999 14.6617 24.0426 13.7043 22.8658 13.7043Z"
                fill="#124342"
              />
            </svg>
          </div>
        </div>
        <div className="RentSortMainContainer">
          {Data.map((user) => {
            return <></>;
          })}
        </div>
      </section>
    </section>
  );
}

export default Buy;
