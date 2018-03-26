import React, { Component } from "react";
import Loader from "../components/Loader/Loader";

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
        <Loader />
        <h2>{this.state.serverMsg}</h2>
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
