import getCountriesFromRegion from '../../Services/restCountriesAPI';

// Actions

const FETCH_DATA_STARTED = 'air_pollution_app/countries/FETCH_DATA_STARTED';
const FETCH_DATA_SUCCEEDED = 'air_pollution_app/countries/FETCH_DATA_SUCCEEDED';
const FETCH_DATA_FAILED = 'air_pollution_app/countries/FETCH_DATA_FAILED';

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

// Thunk

const fetchCountries = (region) => async (dispatch) => {
  dispatch(getCountriesStarted());
  try {
    const data = await getCountriesFromRegion(region);
    dispatch(getCountriesSucceeded(data));
  } catch (error) {
    dispatch(getCountriesFailed(error.toString()));
  }
};

// Reducer

const initialState = {
  countries: [],
  status: 'idle',
  error: null,
};

const countriesReducer = (state = initialState, action) => {
  if (action.type === FETCH_DATA_STARTED) {
    return { ...state, status: 'loading', error: null };
  }

  if (action.type === FETCH_DATA_SUCCEEDED) {
    return {
      ...state,
      countries: action.payload,
      status: 'succeeded',
      error: null,
    };
  }

  if (action.type === FETCH_DATA_FAILED) {
    return { ...state, status: 'failed', error: action.error };
  }

  return state;
};

export {
  getCountriesStarted,
  getCountriesSucceeded,
  getCountriesFailed,
  fetchCountries,
};

export default countriesReducer;
