import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import AddCard from './Pages/AddCard';
import Menu from './Components/Menu';

import { Switch, Route} from 'react-router-dom';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/add_card' component={AddCard}/>
        </Switch>
    </main>
);


let menuItems = [
    {
        link: '/',
        name: 'Главная'
    },
    {
        link: '/login',
        name: 'Вход'
    },
    {
        link: '/add_card',
        name: 'Новая компания'
    }
];


class App extends Component {
  render() {
    return (
        <div className="App">
            <Menu menuItems={menuItems}/>
            <Main />
        </div>
    );
  }
}

export default App;