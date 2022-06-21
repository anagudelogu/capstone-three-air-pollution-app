import FetchRequest from '../Helpers/FetchRequest';

const URL = 'https://restcountries.com/v3.1/region/';
const FILTER_FIELDS = '?fields=name,latlng,area,flags';

const getCountriesFromRegion = async (region) => {
  const fetchRequest = new FetchRequest({
    url: URL + region + FILTER_FIELDS,
  });

  const data = await fetchRequest.call();
  return data;
};

export default getCountriesFromRegion;
