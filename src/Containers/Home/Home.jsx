import React from 'react';
import RegionCard from '../../Components/RegionCard/RegionCard';

const Home = () => (
  <section>
    <h1>Air Pollution APP</h1>
    <div>
      <h2>Select a region:</h2>
      <div>
        <RegionCard>Asia</RegionCard>
        <RegionCard>America</RegionCard>
        <RegionCard>Europe</RegionCard>
        <RegionCard>Africa</RegionCard>
        <RegionCard>Oceania</RegionCard>
      </div>
    </div>
  </section>
);

export default Home;
