import React from 'react';
import ReactDOM from 'react-dom/client';
import AirPollutionApp from './App/AirPollutionApp';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AirPollutionApp />
  </React.StrictMode>,
);
