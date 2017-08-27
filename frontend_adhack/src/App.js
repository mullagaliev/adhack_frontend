import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import AddCard from './Pages/AddCard';
import Menu from './Components/Menu';

import { Switch, Route} from 'react-router-dom';

const Logout = () =>{
    return <h3 >Пока!</h3>;
};

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/add_card' component={AddCard}/>
            <Route path='/logout' component={Logout}/>
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
const Header = () =>{
    return <div className="Header">
        <a href="/" className="HeaderLogo__logo">
            <img  src="/assets/logo.png"></img>
        </a>
        <Menu menuItems={menuItems} className="Header__menu"/>
    </div>;
};
class App extends Component {
  render() {
    return (
        <div className="App">
            <Header />
            <Main />
        </div>
    );
  }
}

export default App;