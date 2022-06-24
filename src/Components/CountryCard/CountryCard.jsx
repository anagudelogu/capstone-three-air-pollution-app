import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as styled from './countryCardStyles';

const CountryCard = ({
  flag, name, area, regionName, lat, long,
}) => {
  const navigate = useNavigate();
  return (
    <styled.CardContainer>
      <styled.InfoWrapper
        onClick={() => navigate(`/${regionName}/${name}/${lat}/${long}`)}
        role="button"
        tabIndex={0}
        aria-hidden
      >
        <styled.Flag src={flag} alt={`${name} flag`} />
        <styled.ArrowIcon />
        <styled.Textcontainer>
          <styled.CountryName>{name}</styled.CountryName>
          <styled.CountryArea>
            {area}
            km2
          </styled.CountryArea>
        </styled.Textcontainer>
      </styled.InfoWrapper>
    </styled.CardContainer>
  );
};

CountryCard.propTypes = {
  name: PropTypes.string.isRequired,
  regionName: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  area: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
  long: PropTypes.number.isRequired,
};

export default CountryCard;
