import React from 'react';
import PropTypes from 'prop-types';

const DetailsCountry = ({ country, regionName }) => (
  <div style={{ margin: '100px 0' }}>
    <h2>{country}</h2>
    <h3>{regionName}</h3>
  </div>
);

DetailsCountry.propTypes = {
  country: PropTypes.string.isRequired,
  regionName: PropTypes.string.isRequired,
};

export default DetailsCountry;
