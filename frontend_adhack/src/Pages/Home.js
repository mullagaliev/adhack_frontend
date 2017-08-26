import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import Test from '../Layouts/Test';

import { Button, Icon, Grid, Message } from 'semantic-ui-react'


class Home extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                    <Icon disabled name='users' />
                    <Button onClick={this.onHandler()}>
                        Click Here
                    </Button>
                </p>
                <Icon.Group size='huge'>
                    <Icon size='big' color='red' name='dont' />
                    <Icon color='black' name='user' />
                </Icon.Group>
                <Icon.Group size='huge'>
                    <Icon loading size='big' name='sun' />
                    <Icon name='user' />
                </Icon.Group>
            </div>
        );
    }
}

export default Home;
