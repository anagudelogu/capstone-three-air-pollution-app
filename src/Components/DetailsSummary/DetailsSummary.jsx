import React from 'react';
import { useSelector } from 'react-redux';
import ProgressBar from '@ramonak/react-progress-bar';
import * as styled from './detailsSummaryStyles';
import indicatorsValues from '../../Helpers/indicatorsValues';

const DetailsSummary = () => {
  const { data } = useSelector((state) => state.airPollution);

  const { aqi, dt } = data;
  const date = new Date(dt * 1000);
  return (
    <styled.SummaryContainer>
      <styled.DateContainer>
        <styled.Label>Date:</styled.Label>
        <styled.Date>{date.toLocaleDateString()}</styled.Date>
      </styled.DateContainer>
      <styled.AqiContainer>
        <styled.Label>Air Quality Index (AQI)</styled.Label>
        <ProgressBar
          bgColor={indicatorsValues(aqi)}
          completed={`${aqi}`}
          maxCompleted={5}
        />
      </styled.AqiContainer>
    </styled.SummaryContainer>
  );
};

export default DetailsSummary;
