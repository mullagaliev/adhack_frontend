import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';

import registerServiceWorker from './registerServiceWorker';
import './semantic/dist/semantic.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import $ from 'jquery';
import jQuery from 'jquery';
window.jQuery = jQuery;

ReactDOM.render( ( <BrowserRouter>
                        <Route path='/' component={App}/>
                    </BrowserRouter>), document.getElementById('root'));
registerServiceWorker();

