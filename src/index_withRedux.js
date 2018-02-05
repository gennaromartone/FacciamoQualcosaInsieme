import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

//import configureStore from './store/configureStore'
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker';

const store = null;//configureStore();

ReactDOM.render(
  <Provider store={store}>  
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();