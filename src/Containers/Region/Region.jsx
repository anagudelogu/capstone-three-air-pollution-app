import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCountries } from '../../Redux/countries/countries';
import RegionHeading from '../../Components/RegionHeading/RegionHeading';
import RegionSearchBar from '../../Components/RegionSearchBar/RegionSearchBar';
import RegionCountries from '../../Components/RegionCountries/RegionCountries';

const Region = () => {
  const dispatch = useDispatch();
  const { regionName, country } = useParams();
  const [query, setQuery] = useState('');
  const { status, countries, error } = useSelector(
    (state) => state.countries,
  );

  useEffect(() => {
    dispatch(fetchCountries(regionName));
  }, [dispatch, regionName, country]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <RegionHeading>{regionName}</RegionHeading>
      <RegionSearchBar query={query} onChange={handleChange} />
      {status === 'loading' && <div>Loading...</div>}
      {error && <div>There was an error fetching the data</div>}
      {status === 'succeeded' && (
        <RegionCountries
          countries={countries}
          regionName={regionName}
        />
      )}
    </>
  );
};

export default Region;
