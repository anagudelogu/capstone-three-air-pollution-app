import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as styled from './regionCardStyles';

const RegionCard = ({ children }) => {
  const navigate = useNavigate();
  return (
    <styled.CardContainer
      data-testid="container"
      region={children}
      onClick={() => navigate(`/${children}`)}
    >
      <styled.CardTitle>{children}</styled.CardTitle>
    </styled.CardContainer>
  );
};

RegionCard.propTypes = {
  children: PropTypes.string.isRequired,
};

export default RegionCard;
