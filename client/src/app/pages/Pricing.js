import React, { Component } from "react";
import Loader from "../components/Loader/Loader";

class Pricing extends Component {
  render() {
    return (
      <main style={styles}>
        <Loader message="Searching for the best offers..." />
        <h1>this is the pricing page</h1>
      </main>
    );
  }
}

const styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
};

export default Pricing;
