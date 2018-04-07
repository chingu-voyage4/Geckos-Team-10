import React from "react";
import SubHeader from "../components/SubHeader/SubHeader";
import Price from "../components/Price/Price";
import FAQ from "../components/FAQ/Faq";

const Pricing = () => (
  <main style={styles}>
    <Price />
    <SubHeader h1="Frequently Asked Questions" />
    <FAQ />
  </main>
);

const styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
};

export default Pricing;
