import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import ListCard from '../Components/ListCard';
import Test from '../Layouts/Test';

import { Button, Icon, Grid, Message } from 'semantic-ui-react'

var fetch = require('node-fetch');


class Home extends Component {
    onHandlerClick(){
        fetch('https://api.github.com/users/github')
            .then(function(res) {
                return res.json();
            }).then(function(json) {
            console.log(json);
        });
    };
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <div className="App-logo">
                        💩💩💩
                        <h2>Welcome to React </h2>
                    </div>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                    <Icon disabled name='users' />
                    <Button onClick={this.onHandlerClick}>
                        Click Here
                    </Button>
                </p>
               <ListCard/>
            </div>
        );
    }
}

export default Home;
