import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';

import { Switch, Route , Link} from 'react-router-dom';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/schedule' component={Home}/>
        </Switch>
    </main>
);


const FullRoster = () => (
    <div>
        <ul>
            <li>
                fewrf
            </li>
        </ul>
    </div>
);
const Schedule = () => (
    <div>
        <ul>
            <li>6/5 @ Спартак</li>
            <li>6/8 vs Зенит</li>
            <li>6/14 @ Рубин</li>
        </ul>
    </div>
);

const Roster = () => (
    <div>
        <h2>This is a roster page!</h2>
        <Switch>
            <Route exact path='/roster' component={FullRoster}/>
            <Route path='/roster/:number' component={Schedule}/>
        </Switch>
    </div>
);

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/schedule'>Schedule</Link></li>
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