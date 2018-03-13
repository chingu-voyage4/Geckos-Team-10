import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Styles from "./styles.css";
// Card images
import agenda from "../../images/agenda.svg";
import barbecue from "../../images/barbecue.svg";
import screen from "../../images/screen.svg";

// class name variables
const card_wrap = "card-wrap";
const image_wrap = "img-wrap";
const text_wrap = "text-wrap";

const HowItWorks = () => (
  <section className="hiw-section">
    <header className="hiw-header">
      <h2>How it Works</h2>
      <h2>3 Simple Steps to Use GrillBer</h2>
    </header>
    <div className="hiw-card-container">
      <Card
        cardWrap={card_wrap}
        imgWrap={image_wrap}
        textWrap={text_wrap}
        src={screen}
        alt="desktop monitor and mobile device"
        title="Join"
        text="Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus."
      />
      <Card
        cardWrap={card_wrap}
        imgWrap={image_wrap}
        textWrap={text_wrap}
        src={agenda}
        alt="book with bookmark"
        title="Book"
        text="Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus."
      />
      <Card
        cardWrap={card_wrap}
        imgWrap={image_wrap}
        textWrap={text_wrap}
        src={barbecue}
        alt="animated grill outside on a sunny day"
        title="Grill"
        text="Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus."
      />
    </div>
    <div className="cta-join">
      <Link to="/sign-up">Join</Link>
    </div>
  </section>
);

export default HowItWorks;
