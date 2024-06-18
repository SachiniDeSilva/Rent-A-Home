import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter as Router} from 'react-router-dom'
import HouseContextProvider from './components/HouseContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HouseContextProvider>
      <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>
  </HouseContextProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
