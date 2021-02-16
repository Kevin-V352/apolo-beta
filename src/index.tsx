import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import AppState from './context/AppState';
import { BrowserRouter } from 'react-router-dom';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppState>
        <App />
      </AppState>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

