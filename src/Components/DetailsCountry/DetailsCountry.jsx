import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as styled from './detailsCountryStyles';

const DetailsCountry = ({ country, regionName }) => {
  const navigate = useNavigate();
  return (
    <styled.HeadingContainer>
      <styled.BackIcon
        data-testid="backBtn"
        onClick={() => navigate(-1)}
      />
      <styled.Country>{country}</styled.Country>
      <styled.Region>{regionName}</styled.Region>
    </styled.HeadingContainer>
  );
};

DetailsCountry.propTypes = {
  country: PropTypes.string.isRequired,
  regionName: PropTypes.string.isRequired,
};

export default DetailsCountry;
