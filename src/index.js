import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import AirPollutionApp from './App/AirPollutionApp';
import './index.css';
import worker from './Mocks/browser';
import store from './App/store';

if (process.env.REACT_APP_STAGE === 'development') {
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AirPollutionApp />
    </Provider>
  </React.StrictMode>,
);
