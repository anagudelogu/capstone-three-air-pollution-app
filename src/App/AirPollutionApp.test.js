import React from 'react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Routes, Route, useParams } from 'react-router-dom';
import { render, screen } from '../Mocks/test-utils';

import AirPollutionApp from './AirPollutionApp';

const DummyComp = () => {
  const { regionName } = useParams();
  return (
    <h3>
      {regionName}
      {' '}
      is a continent
    </h3>
  );
};

test('should navigate through pages', async () => {
  const user = userEvent.setup();
  render(
    <Routes>
      <Route path="/" element={<AirPollutionApp />}>
        <Route path="/:regionName" element={<DummyComp />} />
      </Route>
    </Routes>,
  );

  let content = screen.queryByRole('heading', {
    name: /america is a continent/i,
  });

  expect(content).toBeNull();

  const navbarRegionsButton = screen.getByRole('button', {
    name: /regions/i,
  });

  await user.click(navbarRegionsButton);

  const americaLink = screen.getByText(/america/i);

  await user.click(americaLink);
  content = screen.queryByRole('heading', {
    name: /america is a continent/i,
  });
  expect(content).toBeInTheDocument();

  await user.click(navbarRegionsButton);
  const asiaLink = screen.getByText(/asia/i);
  await user.click(asiaLink);
  content = screen.queryByRole('heading', {
    name: /asia is a continent/i,
  });
  expect(content).toBeInTheDocument();

  await user.click(navbarRegionsButton);
  const africaLink = screen.getByText(/africa/i);
  await user.click(africaLink);
  content = screen.queryByRole('heading', {
    name: /africa is a continent/i,
  });
  expect(content).toBeInTheDocument();

  await user.click(navbarRegionsButton);
  const europeLink = screen.getByText(/europe/i);
  await user.click(europeLink);
  content = screen.queryByRole('heading', {
    name: /europe is a continent/i,
  });
  expect(content).toBeInTheDocument();

  await user.click(navbarRegionsButton);
  const oceaniaLink = screen.getByText(/oceania/i);
  await user.click(oceaniaLink);
  content = screen.queryByRole('heading', {
    name: /oceania is a continent/i,
  });
  expect(content).toBeInTheDocument();
});
