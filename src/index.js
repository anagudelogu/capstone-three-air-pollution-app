import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import AirPollutionApp from './App/AirPollutionApp';
import './index.css';
import worker from './Mocks/browser';
import store from './App/store';
import Home from './Containers/Home/Home';
import Region from './Containers/Region/Region';
import PollutionDetails from './Containers/PollutionDetails/PollutionDetails';

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
            <Route path=":regionName" element={<Region />} />
            <Route
              path=":regionName/:country/:lat/:lon"
              element={<PollutionDetails />}
            />
          </Route>
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
