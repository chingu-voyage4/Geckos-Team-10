import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import PrimaryLayout from './layouts/PrimaryLayout'; 

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <PrimaryLayout />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
