import React from 'react';
import ReactDOM from 'react-dom';
//import App from './components/App';

import store from './store/configureStore'
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker';

import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app.jsx';


ReactDOM.render(
  <Provider store={store} >
    <Router>
      <App />
    </Router>
  </Provider>,
 
  document.getElementById('root')
);

registerServiceWorker();