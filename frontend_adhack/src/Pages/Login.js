import React, { Component } from 'react';

import CLogin from '../Layouts/LoginLayout';


class Login extends Component {
    render() {
        return (
            <div className="LoginPage">
                <div className="LoginPage__bg">

                </div>
                <div className="LoginPage__inner">
                    <h1>Добро пожаловать!</h1>
                    <CLogin />
                </div>
            </div>
        );
    }
}

export default Login;
