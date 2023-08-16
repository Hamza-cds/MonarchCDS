import React, { useState, useEffect } from "react";
import "./colaborativePartner.css";
import { pic1, pic2, pic3, pic4 } from "../../Assets";

export default function ColabratePartner() {
  let imagesArr = [
    { id: 1, image: pic1 },
    { id: 2, image: pic2 },
    { id: 3, image: pic3 },
    { id: 4, image: pic1 },
    { id: 5, image: pic4 },
    { id: 6, image: pic2 },
    { id: 7, image: pic3 },
    { id: 8, image: pic1 },
    { id: 9, image: pic4 },
    // { id: 10, image: pic2 },
    // { id: 11, image: pic4 },
    // { id: 12, image: pic2 },
    // { id: 13, image: pic3 },
    // { id: 14, image: pic1 },
    // { id: 15, image: pic2 },
    // { id: 16, image: pic3 },
  ];

  const [animationState, setAnimationState] = useState(true);

  useEffect(() => {
    const imageContainer = document.querySelector(".ImageContainer");
    const handleAnimationEnd = () => {
      setAnimationState((prevState) => !prevState); // Toggle animation
    };

    imageContainer.addEventListener("animationend", handleAnimationEnd);

    return () => {
      imageContainer.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  return (
    <div className="ColaboratePartnerMainContainer">
      <div className="ColaboratePartnerHeadingStyle">
        Our Collaborative Partners
      </div>

      <div className="ColaborateScrollerStyle">
        <div className="ImageContainer">
          {imagesArr.map((item, index) => (
            <img
              key={index}
              className="ColaborateImageStyle"
              src={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
