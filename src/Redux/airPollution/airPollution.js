import getAirPollutionDataForCountry from '../../Services/airPollutionAPI';

// Actions

const FETCH_DATA_STARTED = 'air_pollution_app/air_pollution/FETCH_DATA_STARTED';
const FETCH_DATA_SUCCEEDED = 'air_pollution_app/air_pollution/FETCH_DATA_SUCCEEDED';
const FETCH_DATA_FAILED = 'air_pollution_app/air_pollution/FETCH_DATA_FAILED';

// Action Creators

const getAirPollutionStarted = () => ({
  type: FETCH_DATA_STARTED,
});

const getAirPollutionSucceeded = (airPollutionData) => ({
  type: FETCH_DATA_SUCCEEDED,
  payload: airPollutionData,
});

const getAirPollutionFailed = (error) => ({
  type: FETCH_DATA_FAILED,
  error,
});

// Thunk

const fetchAirPollutionData = (lat, lon) => async (dispatch) => {
  dispatch(getAirPollutionStarted());
  try {
    const data = await getAirPollutionDataForCountry(lat, lon);

    const { main, components, dt } = data.list[0];

    const organizedData = {
      aqi: main.aqi,
      components,
      dt,
    };
    dispatch(getAirPollutionSucceeded(organizedData));
  } catch (error) {
    dispatch(getAirPollutionFailed(error.toString()));
  }
};

// Reducer

const initialState = {
  data: {},
  status: 'idle',
  error: null,
};

const airPollutionReducer = (state = initialState, action) => {
  if (action.type === FETCH_DATA_STARTED) {
    return { ...state, status: 'loading', error: null };
  }

  if (action.type === FETCH_DATA_SUCCEEDED) {
    return {
      ...state,
      data: action.payload,
      status: 'succeeded',
      error: null,
    };
  }

  if (action.type === FETCH_DATA_FAILED) {
    return { ...state, status: 'failed', error: action.error };
  }

  return state;
};

export default airPollutionReducer;

export {
  getAirPollutionStarted,
  getAirPollutionSucceeded,
  getAirPollutionFailed,
  fetchAirPollutionData,
};
