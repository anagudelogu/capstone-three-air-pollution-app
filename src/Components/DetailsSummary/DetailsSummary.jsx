import React from 'react';
import { useSelector } from 'react-redux';

const DetailsSummary = () => {
  const { data } = useSelector((state) => state.airPollution);

  const { aqi, dt } = data;
  const date = new Date(dt * 1000);
  return (
    <div>
      <span>
        Date:
        {date.toLocaleDateString()}
      </span>
      <div>
        <span>Air Quality Index (AQI)</span>
        <span>{aqi}</span>
      </div>
    </div>
  );
};

export default DetailsSummary;
