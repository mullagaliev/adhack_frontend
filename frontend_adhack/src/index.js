import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './semantic/dist/semantic.min.css';

import $ from 'jquery';
import jQuery from 'jquery';
window.jQuery = jQuery;


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
