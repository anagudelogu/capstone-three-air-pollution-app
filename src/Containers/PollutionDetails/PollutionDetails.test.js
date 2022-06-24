import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import CustomRender from '../../Mocks/customRenderNoRouter';
import handlers from '../../Mocks/handlers';

import PollutionDetails from './PollutionDetails';

const server = setupServer(...handlers);

describe(PollutionDetails, () => {
  beforeAll(() => {
    server.listen();
  });

  // Reset any runtime request handlers we may add during the tests.
  afterEach(() => {
    server.resetHandlers();
  });

  // Disable API mocking after the tests are done.
  afterAll(() => server.close());

  test('should render region and country', () => {
    CustomRender(
      <MemoryRouter initialEntries={['/America/Colombia/4/-72']}>
        <Routes>
          <Route
            path="/:regionName/:country/:lat/:lon"
            element={<PollutionDetails />}
          />
        </Routes>
      </MemoryRouter>,
    );

    const region = screen.getByRole('heading', { name: /america/i });
    const country = screen.getByRole('heading', {
      name: /colombia/i,
    });

    expect(region).toBeInTheDocument();
    expect(country).toBeInTheDocument();
  });

  test('should render Air pollution details', async () => {
    CustomRender(
      <MemoryRouter initialEntries={['/America/Colombia/4/-72']}>
        <Routes>
          <Route
            path="/:regionName/:country/:lat/:lon"
            element={<PollutionDetails />}
          />
        </Routes>
      </MemoryRouter>,
    );
    const date = await screen.findByText(/date/i);
    const aqi = await screen.findByText(/AQI/i);
    const co = await screen.findByText(/carbon monoxide/i);
    const no = await screen.findByText(/nitrogen monoxide/i);
    const no2 = await screen.findByText(/nitrogen dioxide/i);
    const o3 = await screen.findByText(/ozone/i);
    const so2 = await screen.findByText(/sulphur dioxide/i);
    const pm25 = await screen.findByText(
      'Suspended Particles (Pm2.5)',
    );
    const pm10 = await screen.findByText(
      'Suspended Particles (Pm10)',
    );
    const nh3 = await screen.findByText(/ammonia/i);

    expect(date).toBeInTheDocument();
    expect(aqi).toBeInTheDocument();
    expect(co).toBeInTheDocument();
    expect(no).toBeInTheDocument();
    expect(no2).toBeInTheDocument();
    expect(o3).toBeInTheDocument();
    expect(so2).toBeInTheDocument();
    expect(pm25).toBeInTheDocument();
    expect(pm10).toBeInTheDocument();
    expect(nh3).toBeInTheDocument();
  });

  test('should display error message', async () => {
    server.use(
      rest.get(/air_pollution/i, (res, ctx) => res(ctx.status(404))),
    );

    CustomRender(
      <MemoryRouter initialEntries={['/America/Colombia/4/-72']}>
        <Routes>
          <Route
            path="/:regionName/:country/:lat/:lon"
            element={<PollutionDetails />}
          />
        </Routes>
      </MemoryRouter>,
    );

    const errorMsg = await screen.findByText(/error/i);

    expect(errorMsg).toBeInTheDocument();
  });

  test('If user clicks back icon, should render desired component', async () => {
    const user = userEvent.setup();
    CustomRender(
      <MemoryRouter
        initialEntries={['/America', '/America/Colombia/4/-72']}
      >
        <Routes>
          <Route
            path="/:regionName/:country/:lat/:lon"
            element={<PollutionDetails />}
          />
          <Route
            path="/:regionName"
            element={<div>Test passed</div>}
          />
        </Routes>
      </MemoryRouter>,
    );

    const backIcon = screen.getByTestId('backBtn');

    await user.click(backIcon);

    const testPassedText = screen.getByText(/test passed/i);
    expect(testPassedText).toBeInTheDocument();
  });
});
