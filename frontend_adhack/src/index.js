import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';
import './semantic/dist/semantic.min.css';
import { BrowserRouter } from 'react-router-dom';

import $ from 'jquery';
import jQuery from 'jquery';
window.jQuery = jQuery;


ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));


registerServiceWorker();
