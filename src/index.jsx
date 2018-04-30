import React from 'react';
import ReactDOM from 'react-dom';
//import App from './components/App';

//import 'materialize-css/dist/css/materialize.css'
import './../sass/style.scss'
import './../sass/header.scss'
import store from './store/configureStore'
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker';

import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app.jsx';

//FOR TEST
import axios from 'axios'
window.axios = axios

ReactDOM.render(
  <Provider store={store} >
    <Router>
      <App />
    </Router>
  </Provider>,
 
  document.getElementById('root')
);

registerServiceWorker();

console.log('ENVIROMENT is: ',process.env.REACT_APP_STRIPE_KEY)