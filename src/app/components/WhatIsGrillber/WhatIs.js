import React, { Component } from "react";
import steak from "../../images/steak-grill.gif";
import "./styles.css";

const grillberList = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Lorem ipsum dolor sit amet, consectetur adipisci",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "am et suscipit purus, auctor rhoncus torto",
  "Vivamus feugiat feugiat erat, vitae blandit "
];

class WhatIsGrillber extends Component {
  render() {
    return (
      <section className="whatIs-section">
        <div className="whatIs-header">
          <h1>What's Grillber?</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing</h2>
        </div>

        <div className="whatIs-information">
          <img src={steak} alt="steak grill" />
          <ul>
            {grillberList.map((listItem, index) => {
              return <li key={"listItem_ " + index}>{listItem}</li>;
            })}
          </ul>
        </div>
      </section>
    );
  }
}

export default WhatIsGrillber;
