import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_API_HOST
axios.defaults.headers.get['Accept'] = 'application/json'
axios.defaults.headers.post['Accept'] = 'application/json'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
