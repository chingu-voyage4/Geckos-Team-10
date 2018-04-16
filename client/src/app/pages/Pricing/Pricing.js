import React from "react";
import SubHeader from "../../components/SubHeader/SubHeader";
import Price from "../../components/Price/Price";
import FAQ from "../../components/FAQ/Faq";
import "./styles.css";

const Pricing = () => (
  <main className="pricing-main-container">
    <Price />
    <SubHeader h1="Frequently Asked Questions" />
    <FAQ />
  </main>
);

export default Pricing;
