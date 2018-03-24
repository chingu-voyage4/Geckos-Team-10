import React from "react";

import SubHeader from "../SubHeader/SubHeader";
import Card from "../PriceCard/PriceCard";
import "./styles.css";
// Card images
import student from "../../images/student.svg";
import personal from "../../images/personal.svg";
import office from "../../images/office.svg";

// class name variables
const card_wrap = "card-wrap";
const image_wrap = "img-wrap";
const text_wrap = "text-wrap";

const HowItWorks = () => (
  <section className="hiw-section">
    <SubHeader h1="Pricing" h2="What can we suggest you" />
    <div className="hiw-card-container">
      <Card
        cardWrap={card_wrap}
        imgWrap={image_wrap}
        textWrap={text_wrap}
        src={personal}
        alt="desktop monitor and mobile device"
        title="Personal"
        text="If you are alone right now and want to order only one sad grill to cheer ypu up, press the button."
        price={20}
      />
      <Card
        cardWrap={card_wrap}
        imgWrap={image_wrap}
        textWrap={text_wrap}
        src={student}
        alt="Student"
        title="Students"
        text="If you are with your friends in a dormitory and wanna make a party, press this amazing button."
        price={30}
      />
      <Card
        cardWrap={card_wrap}
        imgWrap={image_wrap}
        textWrap={text_wrap}
        src={office}
        alt="animated grill outside on a sunny day"
        title="Office"
        text="If you are gonna make a office party, press this button."
        price={60}
      />
    </div>
  </section>
);

export default HowItWorks;
