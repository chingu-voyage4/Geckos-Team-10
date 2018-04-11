import React from "react";
import SubHeader from "../SubHeader/SubHeader";
import Card from "../Card/Card";
import "./style.css";

const NoFound = () => (
  <section className="nf-section">
    <SubHeader h1="Something went wrong" h2="404: Page not found" />
    <div className="nf-container">
      <div className="nf-card-container">
        <Card
          cardWrap="nf-card-wrap"
          title="What is Grillber?"
          text="Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus."
          pageLink="Learn about Grillber"
          path={"/how-to-grill"}
        />
        <Card
          cardWrap="nf-card-wrap"
          title="Looking for Plans?"
          text="Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus."
          pageLink="See Pricing Plans"
          path={"/pricing"}
        />
        <Card
          cardWrap="nf-card-wrap"
          title="Looking for Grills?"
          text="Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus."
          pageLink="Reserve a Grill"
          path={"/book-a-grill"}
        />
      </div>
    </div>
  </section>
);

export default NoFound;
