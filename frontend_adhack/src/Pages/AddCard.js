import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import AddCard from '../Components/AddCard';

import { Button, Icon, Grid, Message } from 'semantic-ui-react'


class AddCardPage extends Component {
    render() {
        return (
            <div className="w70p">
                <AddCard/>
            </div>
        );
    }
}

export default AddCardPage;
