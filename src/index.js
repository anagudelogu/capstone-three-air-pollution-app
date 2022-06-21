import React from 'react';
import ReactDOM from 'react-dom/client';
import AirPollutionApp from './App/AirPollutionApp';
import './index.css';
import worker from './Mocks/browser';

if (process.env.REACT_APP_STAGE === 'development') {
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AirPollutionApp />
  </React.StrictMode>,
);
