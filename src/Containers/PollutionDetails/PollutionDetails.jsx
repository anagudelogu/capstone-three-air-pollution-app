import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Circles } from 'react-loader-spinner';
import { fetchAirPollutionData } from '../../Redux/airPollution/airPollution';
import DetailsCountry from '../../Components/DetailsCountry/DetailsCountry';
import DetailsSummary from '../../Components/DetailsSummary/DetailsSummary';
import DetailsAirComponents from '../../Components/DetailsAirComponents/DetailsAirComponents';
import * as styled from './pollutionDetailsStyles';

const PollutionDetails = () => {
  const dispatch = useDispatch();
  const {
    regionName, country, lat, lon,
  } = useParams();
  const { status, error } = useSelector(
    (state) => state.airPollution,
  );

  useEffect(() => {
    dispatch(fetchAirPollutionData(lat, lon));
  }, [dispatch, lat, lon]);

  return (
    <styled.Section>
      <DetailsCountry country={country} regionName={regionName} />
      {status === 'failed' && <div>{error}</div>}
      {status === 'loading' && (
        <styled.SpinnerContainer>
          <Circles color="#00BFFF" height={80} width={80} />
        </styled.SpinnerContainer>
      )}
      {status === 'succeeded' && (
        <styled.DetailsContainer>
          <DetailsSummary />
          <DetailsAirComponents />
        </styled.DetailsContainer>
      )}
    </styled.Section>
  );
};

export default PollutionDetails;
