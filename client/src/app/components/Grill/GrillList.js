import React from "react";
import GrillItem from "./Grill_Item/Grill_Item";

const GrillList = ({ grills }) => (
  <section style={styles.results}>
    <div>{grills.map(grill => <GrillItem grill={grill} />)}</div>
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
