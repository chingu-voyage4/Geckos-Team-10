import React, { Component } from "react";
import SubHeader from "../components/SubHeader/SubHeader";
import Price from "../components/Price/Price";
import FAQ from "../components/FAQ/Faq";

class Pricing extends Component {
  render() {
    return (
      <main style={styles}>
        <SubHeader />
        <Price />
        <FAQ />
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
