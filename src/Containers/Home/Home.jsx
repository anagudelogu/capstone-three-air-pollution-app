import React from 'react';
import RegionCard from '../../Components/RegionCard/RegionCard';
import regions from '../../Helpers/regionsArr';

const Home = () => (
  <section>
    <h1>Air Pollution APP</h1>
    <div>
      <h2>Select a region:</h2>
      <div>
        {regions.map((region) => (
          <RegionCard key={region}>{region}</RegionCard>
        ))}
      </div>
    </div>
  </section>
);

export default Home;
