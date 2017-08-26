import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import AddCard from './Pages/AddCard';

import { Switch, Route , Link} from 'react-router-dom';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/add_card' component={AddCard}/>
        </Switch>
    </main>
);



const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/add_card'>Новая компания</Link></li>
            </ul>
        </nav>
    </header>
);


class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <Main />
        </div>
    );
  }
}

export default App;