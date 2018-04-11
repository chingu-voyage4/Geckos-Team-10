import React from "react";
import SubHeader from "../SubHeader/SubHeader";
import Card from "../Card/Card";
import "./style.css";

const HowItWorks = () => (
  <section className="nf-section">
    <SubHeader h1="Something went wrong" h2="404: Page not found" />
    <div className="nf-container">
      <SubHeader h2="You can find this on our service" />
      <div className="nf-card-container">
        <Card
          title="How to Grill"
          text="Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus."
          pageLink={"How to Grill"}
          path={"/how-to-grill"}
        />
        <Card
          title="Pricing"
          text="Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus."
          pageLink={"Pricing"}
          path={"/pricing"}
        />
        <Card
          title="Book a grill"
          text="Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus."
          pageLink={"Book Grill"}
          path={"/book-a-grill"}
        />
      </div>
    </div>
  </section>
);

export default HowItWorks;
