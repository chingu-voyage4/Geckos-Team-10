import React from "react";
import Grill from "./Grill/Grill";

const GrillList = ({ grills }) => (
  <section style={styles.results}>
    <div>{grills.map(grill => <Grill grill={grill} />)}</div>
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
