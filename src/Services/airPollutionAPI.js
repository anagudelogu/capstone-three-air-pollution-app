import FetchRequest from '../Helpers/FetchRequest';

const API_KEY = `&appid=${process.env.REACT_APP_AIR_POLLUTION_API_KEY}`;
const URL = 'http://api.openweathermap.org/data/2.5/';
const AIR_POLLUTION_ENDPOINT = 'air_pollution?';

const finalUrl = (lat, lon) => `${URL + AIR_POLLUTION_ENDPOINT}lat=${lat}&lon=${lon}${API_KEY}`;

const getAirPollutionDataForCountry = async (lat, lon) => {
  const fetchRequest = new FetchRequest({ url: finalUrl(lat, lon) });
  const data = await fetchRequest.call();

  return data;
};
