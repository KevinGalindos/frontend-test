import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import App from './views/App';
import Store from './store';

import reportWebVitals from './reportWebVitals';

import "./sass/_all.scss"

ReactDOM.render(

  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
