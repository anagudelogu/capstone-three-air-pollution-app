import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const RegionCountries = ({ countries, regionName }) => {
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
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      flag: PropTypes.string.isRequired,
      lat: PropTypes.number.isRequired,
      long: PropTypes.number.isRequired,
      area: PropTypes.number.isRequired,
    }),
  ).isRequired,
  regionName: PropTypes.string.isRequired,
};

export default RegionCountries;
