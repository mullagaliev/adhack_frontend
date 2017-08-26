import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './Layouts/LoginLayout';
import Test from './Layouts/Test';

import { Button, Icon, Grid, Message } from 'semantic-ui-react'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
            <Login />
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
