import React from 'react';
import PropTypes from 'prop-types';

const RegionSearchBar = ({ query, onChange }) => (
  <div>
    <input
      type="text"
      name="searchBar"
      id="searchBar"
      placeholder="Search..."
      value={query}
      onChange={onChange}
    />
  </div>
);

RegionSearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RegionSearchBar;
