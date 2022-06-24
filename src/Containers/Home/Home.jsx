import React from 'react';
import RegionCard from '../../Components/RegionCard/RegionCard';
import regions from '../../Helpers/regionsArr';
import * as styled from './homeStyles';

const Home = () => (
  <styled.Section>
    <styled.HeadingContainer>
      <styled.Title>AIR POLLUTION APP</styled.Title>
    </styled.HeadingContainer>
    <styled.SubTitle>COUNTRIES BY REGION</styled.SubTitle>
    <styled.RegionsContainer>
      {regions.map((region) => (
        <RegionCard key={region}>{region}</RegionCard>
      ))}
    </styled.RegionsContainer>
  </styled.Section>
);

export default Home;
