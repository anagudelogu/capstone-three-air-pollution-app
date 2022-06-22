import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAirPollutionData } from '../../Redux/airPollution/airPollution';
import DetailsCountry from '../../Components/DetailsCountry/DetailsCountry';
import DetailsSummary from '../../Components/DetailsSummary/DetailsSummary';
import DetailsAirComponents from '../../Components/DetailsAirComponents/DetailsAirComponents';
// import ProgressBar from '@ramonak/react-progress-bar';

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
    <>
      <DetailsCountry country={country} regionName={regionName} />
      {status === 'failed' && <div>{error}</div>}
      {status === 'loading' && <div>Loading...</div>}
      {status === 'succeeded' && (
        <div>
          <DetailsSummary />
          <DetailsAirComponents />
        </div>
      )}
    </>
  );
};

export default PollutionDetails;
