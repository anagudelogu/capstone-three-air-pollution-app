import React from 'react';
import { Outlet } from 'react-router-dom';
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
