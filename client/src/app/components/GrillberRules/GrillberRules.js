import React from "react";
import Card from "../Card/Card";
import "./styles.css";
import SubHeader from "../../components/SubHeader/SubHeader";

//Images for the cards
import checked from "../../images/checked.svg";
import error from "../../images/error.svg";
import fire from "../../images/fire.svg";
import hazard from "../../images/biohazard.svg";
import meat from "../../images/meat.svg";
import spatula from "../../images/spatula.svg";

const arr = [
  {
    number: "ONE",
    image: checked
  },
  {
    number: "TWO",
    image: error
  },
  {
    number: "THREE",
    image: meat
  },
  {
    number: "FOUR",
    image: hazard
  },
  {
    number: "FIVE",
    image: spatula
  },
  {
    number: "SIX",
    image: fire
  }
];

const GrillberRules = () => (
  <section id="gb-rules-comp">
    <SubHeader h1="The Grillber Rules" h2="Six Easy Rules to Follow" />
    <div id="grid-container">
      {arr.map(item => (
        <Card
          src={item.image}
          alt="desktop monitor and mobile device"
          title={item.number}
          text="Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus."
          cardWrap="cardWrap"
          textWrap="textWrap"
          imgWrap="imgWrap"
          key={"item-" + item.number}
        />
      ))}
    </div>
  </section>
);

export default GrillberRules;
