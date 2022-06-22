/* eslint-disable react/prop-types */

import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import airPollutionReducer from '../Redux/airPollution/airPollution';
import countriesReducer from '../Redux/countries/countries';

const CustomRender = (
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        airPollution: airPollutionReducer,
        countries: countriesReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {},
) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export default CustomRender;
