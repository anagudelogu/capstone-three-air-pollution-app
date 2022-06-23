import React from 'react';
import PropTypes from 'prop-types';
import * as styled from './regionSearchBarStyles';

const RegionSearchBar = ({ query, onChange }) => (
  <styled.SearchBarContainer>
    <styled.SearchBar
      type="text"
      name="searchBar"
      id="searchBar"
      placeholder="Search..."
      value={query}
      onChange={onChange}
    />
  </styled.SearchBarContainer>
);

RegionSearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RegionSearchBar;
