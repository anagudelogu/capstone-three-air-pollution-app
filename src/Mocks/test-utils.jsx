/* eslint-disable */

import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import countriesReducer from '../Redux/countries/countries';
import airPollutionReducer from '../Redux/airPollution/airPollution';
import { MemoryRouter } from 'react-router-dom';

const render = (
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        countries: countriesReducer,
        airPollution: airPollutionReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {},
) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>{children}</MemoryRouter>
    </Provider>
  );
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
