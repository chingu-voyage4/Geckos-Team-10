import React from "react";
import Card from "../Card/Card";
import "./styles.css";
import screen from "../../images/screen.svg";

const GrillberRules = () => (
  <section id="gb-rules-comp">
    <div id="grid-container">
      <Card
        src={screen}
        alt="desktop monitor and mobile device"
        title="Join"
        text="Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus."
        cardWrap="cardWrap"
        textWrap="textWrap"
      />
    </div>
  </section>
);

export default GrillberRules;
