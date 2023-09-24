import React from "react";
import "./contactUs.css";
import { contactUsImage } from "../../Assets";
import { greenCall, greenLoc, greenMail, greenPhone } from "../../Assets";

export default function ContactUs() {
  return (
    <div className="ConatactUsMainContainer">
      <img src={contactUsImage} alt="img" className="ContactUsImageStyle" />
      <div className="TextStyleOnImage">We are eager to hear from you.</div>
      <div className="contactUsFormMainContainer">
        <div className="FormMainHeadingStyle">Contact Us</div>

        <div className="InputFieldContainerRow">
          <div className="FieldHeadingAndInputWrapper">
            <div className="FieldHeadStyle">Your Name*</div>
            <input
              className="InputFieldStyle"
              placeholder="Write your name here"
            />
          </div>
          <div className="FieldHeadingAndInputWrapper">
            <div className="FieldHeadStyle">Your Email*</div>
            <input
              className="InputFieldStyle"
              placeholder="Write your email here"
            />
          </div>
        </div>
        <div className="InputFieldContainerRow">
          <div className="FieldHeadingAndInputWrapper">
            <div className="FieldHeadStyle">Phone*</div>
            <input
              className="InputFieldStyle"
              placeholder="Write your phone here"
            />
          </div>
          <div className="FieldHeadingAndInputWrapper">
            <div className="FieldHeadStyle">
              Category ka selecter lagana ha{" "}
            </div>
            <input
              className="InputFieldStyle"
              placeholder="Write your email here"
            />
          </div>
        </div>

        <div className="InputFieldContainerRow">
          <div className="DescriptionFieldHeadingAndInputWrapper">
            <div className="FieldHeadStyle">Your Message*</div>
            <div className="textarea-container">
              <textarea placeholder="" className="custom-textarea" />
            </div>
          </div>
        </div>

        <div className="SubmitButtonStyle">Submit</div>
      </div>

      <div className="BottomBlocksMainContainer">
        <div className="BottomBlocksStyle">
          <img src={greenLoc} alt="img" className="iconStyleBottomBlockone" />
          <div className="BottomBlockHeadingStyle">Our Address</div>
          <div className="LocationBlockTextOneStyle">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </div>
          <div className="LocationBlockTextOneStyle">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </div>
        </div>

        <div className="BottomBlocksStyle">
          <img src={greenMail} alt="img" className="iconStyleBottomBlockTwo" />
          <div className="BottomBlockHeadingStyle">Email Us</div>
          <div className="emailBlockTextWrapper">
            <div className="EmailBlockTextOneStyle">Info@nkassociat.com.pk</div>
            <div className="EmailBlockTextOneStyle">Info@nkassociat.com.pk</div>
            <div className="EmailBlockTextOneStyle">Info@nkassociat.com.pk</div>
            <div className="EmailBlockTextOneStyle">Info@nkassociat.com.pk</div>
          </div>
        </div>

        <div className="BottomBlocksStyle">
          <img
            src={greenCall}
            alt="img"
            className="iconStyleBottomBlockThree"
          />
          <div className="BottomBlockHeadingStyle">Call Us</div>
          <div className="callTextWrapperContainer">
            <div className="CallBlockTextWrapper">
              <img src={greenPhone} alt="img" />
              <div className="phoneNumberTextStyle">0314 1234567</div>
            </div>
            <div className="CallBlockTextWrapper">
              <img src={greenPhone} alt="img" />
              <div className="phoneNumberTextStyle">0314 1234567</div>
            </div>
            <div className="CallBlockTextWrapper">
              <img src={greenPhone} alt="img" />
              <div className="phoneNumberTextStyle">0314 1234567</div>
            </div>
            <div className="CallBlockTextWrapper">
              <img src={greenPhone} alt="img" />
              <div className="phoneNumberTextStyle">0314 1234567</div>
            </div>
            <div className="CallBlockTextWrapper">
              <img src={greenPhone} alt="img" />
              <div className="phoneNumberTextStyle">0314 1234567</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
