import React from 'react';
import { useSelector } from 'react-redux';

const DetailsAirComponents = () => {
  const { data } = useSelector((state) => state.airPollution);
  const { components } = data;

  return (
    <ul>
      <li>
        <span>Carbon monoxide (CO)</span>
        <span>{components.co}</span>
      </li>
      <li>
        <span>Nitrogen monoxide (NO)</span>
        <span>{components.no}</span>
      </li>
      <li>
        <span>Nitrogen dioxide (NO2)</span>
        <span>{components.no2}</span>
      </li>
      <li>
        <span>Ozone (O3)</span>
        <span>{components.o3}</span>
      </li>
      <li>
        <span>Sulphur dioxide (SO2)</span>
        <span>{components.so2}</span>
      </li>
      <li>
        <span>Ammonia (NH3)</span>
        <span>{components.nh3}</span>
      </li>
      <li>
        <span>Suspended Particles (Pm2.5)</span>
        <span>{components.pm2_5}</span>
      </li>
      <li>
        <span>Suspended Particles (Pm10)</span>
        <span>{components.pm10}</span>
      </li>
    </ul>
  );
};

export default DetailsAirComponents;
