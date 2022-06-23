import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  fetchCountries,
  searchCountryBy,
} from '../../Redux/countries/countries';
import RegionHeading from '../../Components/RegionHeading/RegionHeading';
import RegionSearchBar from '../../Components/RegionSearchBar/RegionSearchBar';
import CountryCard from '../../Components/CountryCard/CountryCard';
import CountryList from './regionStyles';

const Region = () => {
  const dispatch = useDispatch();
  const { regionName } = useParams();
  const [query, setQuery] = useState('');
  const { status, error, filteredCountries } = useSelector(
    (state) => state.countries,
  );

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
        <CountryList>
          {filteredCountries.map((country) => (
            <CountryCard
              key={country.name}
              regionName={regionName}
              flag={country.flag}
              name={country.name}
              area={country.area}
              lat={country.lat}
              long={country.long}
            />
          ))}
        </CountryList>
      )}
    </>
  );
};

export default Region;
