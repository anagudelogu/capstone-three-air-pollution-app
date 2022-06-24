import React from 'react';
import { Outlet } from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Navbar from '../Containers/Navbar/Navbar';

const AirPollutionApp = () => (
  <>
    <header>
      <Navbar />
    </header>
    <main>
      <Outlet />
    </main>
  </>
);

export default AirPollutionApp;
