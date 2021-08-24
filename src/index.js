import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import App from './views/App';
import Store from './store';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(

  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
