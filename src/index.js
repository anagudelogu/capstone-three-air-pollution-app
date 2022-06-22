import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import AirPollutionApp from './App/AirPollutionApp';
import './index.css';
import worker from './Mocks/browser';
import store from './App/store';
import Home from './Containers/Home/Home';

if (process.env.REACT_APP_STAGE === 'development') {
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AirPollutionApp />}>
            <Route index element={<Home />} />
            <Route path=":regionName" element={<h2>Hello</h2>} />
          </Route>
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
