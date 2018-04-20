import React from "react";
import { Link } from "react-router-dom";
import SubHeader from "../SubHeader/SubHeader";
import Card from "../Card/Card";
import "./styles.css";
// Card images
import agenda from "../../images/agenda.svg";
import barbecue from "../../images/barbecue.svg";
import screen from "../../images/screen.svg";


const HowItWorks = () => (
  <section className="hiw-section">
    <SubHeader h1="How it Works" h2="3 simple steps to use Grillber" />
    <div className="hiw-card-container">
      <Card
        src={screen}
        alt="desktop monitor and mobile device"
        title="Join"
        text="Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus."
      />
      <Card
        src={agenda}
        alt="book with bookmark"
        title="Book"
        text="Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus."
      />
      <Card
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
