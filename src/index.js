import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './debug.css';
import App from './components/App.jsx';
import {HashRouter} from "react-router-dom";

ReactDOM.render(< React.StrictMode > <HashRouter > <App > < /App >  < /HashRouter > < /
  React.StrictMode > ,
  document.getElementById('root'));
