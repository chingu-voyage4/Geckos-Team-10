import React, { Component } from "react";

class Pricing extends Component {
  render() {
    return (
      <main style={styles}>
        <h1>this is the pricing page</h1>
        <h2>{this.state.serverMsg}</h2>
      </main>
    );
  }
}

const styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "120px"
};

export default Pricing;
