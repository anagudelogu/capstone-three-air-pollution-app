import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  fetchCountries,
  searchCountryBy,
} from '../../Redux/countries/countries';
import RegionHeading from '../../Components/RegionHeading/RegionHeading';
import RegionSearchBar from '../../Components/RegionSearchBar/RegionSearchBar';
import RegionCountries from '../../Components/RegionCountries/RegionCountries';

const Region = () => {
  const dispatch = useDispatch();
  const { regionName } = useParams();
  const [query, setQuery] = useState('');
  const { status, error } = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(fetchCountries(regionName));
  }, [dispatch, regionName]);

  useEffect(() => {
    dispatch(searchCountryBy(query));
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <RegionHeading>{regionName}</RegionHeading>
      <RegionSearchBar query={query} onChange={handleChange} />
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>{error}</div>}
      {status === 'succeeded' && (
        <RegionCountries regionName={regionName} />
      )}
    </>
  );
};

export default Region;
