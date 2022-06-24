import getCountriesFromRegion from '../../Services/restCountriesAPI';

// Actions

const FETCH_DATA_STARTED = 'air_pollution_app/countries/FETCH_DATA_STARTED';
const FETCH_DATA_SUCCEEDED = 'air_pollution_app/countries/FETCH_DATA_SUCCEEDED';
const FETCH_DATA_FAILED = 'air_pollution_app/countries/FETCH_DATA_FAILED';
const SEARCH_COUNTRY = 'air_pollution_app/countries/SEARCH_COUNTRY';

// Action Creators

const getCountriesStarted = () => ({
  type: FETCH_DATA_STARTED,
});

const getCountriesSucceeded = (countries) => ({
  type: FETCH_DATA_SUCCEEDED,
  payload: countries,
});

const getCountriesFailed = (error) => ({
  type: FETCH_DATA_FAILED,
  error,
});

// Thunks

const fetchCountries = (region) => async (dispatch) => {
  dispatch(getCountriesStarted());
  try {
    const data = await getCountriesFromRegion(region);

    if (data.status && data.status === 404) {
      throw new Error('No matches');
    }

    const organizedData = data.map(
      ({
        flags, name, latlng, area,
      }) => ({
        flag: flags.svg,
        name: name.common,
        lat: latlng[0],
        long: latlng[1],
        area,
      }),
    );

    dispatch(getCountriesSucceeded(organizedData));
  } catch (error) {
    dispatch(getCountriesFailed(error.toString()));
  }
};

const searchCountryBy = (query) => (dispatch, getState) => {
  const { countries } = getState();
  const Arr = countries.countries;
  const filteredArr = Arr.filter(({ name }) => name.toLowerCase().includes(query.toLowerCase()));

  dispatch({ type: SEARCH_COUNTRY, payload: filteredArr });
};

// Reducer

const initialState = {
  countries: [],
  status: 'idle',
  error: null,
  filteredCountries: [],
};

const countriesReducer = (state = initialState, action) => {
  if (action.type === FETCH_DATA_STARTED) {
    return { ...state, status: 'loading', error: null };
  }

  if (action.type === FETCH_DATA_SUCCEEDED) {
    return {
      ...state,
      countries: action.payload,
      filteredCountries: action.payload,
      status: 'succeeded',
      error: null,
    };
  }

  if (action.type === FETCH_DATA_FAILED) {
    return { ...state, status: 'failed', error: action.error };
  }

  if (action.type === SEARCH_COUNTRY) {
    return {
      ...state,
      filteredCountries: action.payload,
    };
  }

  return state;
};

export {
  getCountriesStarted,
  getCountriesSucceeded,
  getCountriesFailed,
  fetchCountries,
  searchCountryBy,
};

export default countriesReducer;
