import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RegionCountries = ({ regionName }) => {
  const { countries } = useSelector((state) => state.countries);
  const navigate = useNavigate();
  const flex = {
    display: 'flex',
    justifyContent: 'space-between',
  };
  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name}>
          <div
            style={flex}
            onClick={() => navigate(
              `/${regionName}/${country.name}/${country.lat}/${country.long}`,
            )}
            role="button"
            tabIndex={0}
            aria-hidden="true"
          >
            <img
              src={country.flag}
              alt={`${country.name} flag`}
              width="30"
            />
            <span>{country.name}</span>
            <span>
              {country.area}
              km2
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

RegionCountries.propTypes = {
  regionName: PropTypes.string.isRequired,
};

export default RegionCountries;
