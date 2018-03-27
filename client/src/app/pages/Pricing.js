import React, { Component } from "react";
import Price from "../components/Price/Price";

class Pricing extends Component {
  state = {
    serverMsg: ""
  };

  componentDidMount() {
    fetch("/api/hello")
      .then(res => res.json())
      .then(res => this.setState({ serverMsg: res.express }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <main style={styles}>
        <h1>this is the pricing page</h1>
        <h2>{this.state.serverMsg}</h2>
        <Price />
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
