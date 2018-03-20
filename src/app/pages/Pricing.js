import React from "react";
import Price from "../components/Price/Price";

const styles = {
    display: "flex",
    justifyContent: "center",
    marginTop: "25vh"
};

const Pricing = () => (
<main style={styles}>
    <h1>This is the Pricing page</h1>
<Price />
</main>
);

export default Pricing;
