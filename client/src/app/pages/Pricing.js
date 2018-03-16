import React, { Component } from 'react';

class Pricing extends Component {
  state = {
    serverMsg: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ serverMsg: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

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
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginTop: '120px'
};

export default Pricing;
