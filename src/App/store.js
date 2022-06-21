import { configureStore } from '@reduxjs/toolkit';
import airPollutionReducer from '../Redux/airPollution/airPollution';
import countriesReducer from '../Redux/countries/countries';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    airPollution: airPollutionReducer,
  },
});

export default store;
