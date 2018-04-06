import React from "react";
import Grill from "../Grill/Grill";
import "./styles.css";

const GrillList = ({ grills }) => (
  <section style={styles.results}>
    <div>
      <Grill
        grillImage="Grill Image"
        grillName="THE MINI"
        cost="£9.95"
        start="Weds 28 Mar - 9am"
        end="Sat 31 Mar - 9am"
        stars="3.5"
        feature1="feature-1"
        feature2="feature-2"
      />
    </div>
  </section>
);

const styles = {
  results: {
    display: "flex",
    flexDirection: "column",
    padding: "50px",
    margin: "auto"
  }
};
export default GrillList;
