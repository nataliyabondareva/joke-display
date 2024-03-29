import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store'
import App from './App';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
,
   document.getElementById('root'));
   serviceWorker.unregister();