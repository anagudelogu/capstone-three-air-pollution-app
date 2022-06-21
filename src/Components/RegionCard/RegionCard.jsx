import React from 'react';
import PropTypes from 'prop-types';
import * as styled from './regionCardStyles';

const RegionCard = ({ children }) => (
  <styled.CardContainer region={children}>
    <styled.CardTitle>{children}</styled.CardTitle>
  </styled.CardContainer>
);

RegionCard.propTypes = {
  children: PropTypes.string.isRequired,
};

export default RegionCard;
