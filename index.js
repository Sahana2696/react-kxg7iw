import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { MyDataComp } from './MyDataComp'
import { Store, StoreProvider } from './Store'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
       
          <MyDataComp />
        
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(
  <StoreProvider>
    <App />
  </StoreProvider>
  , document.getElementById('root'));
