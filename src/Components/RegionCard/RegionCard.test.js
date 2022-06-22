import { React } from 'react';
import userEvent from '@testing-library/user-event';
import { Route, Routes, useParams } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen } from '../../Mocks/test-utils';
import RegionCard from './RegionCard';

const DummyComp = () => {
  const { testParam } = useParams();
  return (
    <h3>
      {testParam}
      {' '}
      is a Continent
    </h3>
  );
};

test('Should render with given Children as title', () => {
  render(<RegionCard>Title</RegionCard>);

  const title = screen.getByRole('heading', { name: /title/i });

  expect(title).toBeInTheDocument();
});

test('Should navigate to desired location when user clicks the card', async () => {
  const user = userEvent.setup();
  render(
    <>
      <Routes>
        <Route path="/" element={<RegionCard>Title</RegionCard>} />
        <Route path="/:testParam" element={<DummyComp />} />
      </Routes>
    </>,
  );
  const container = screen.getByTestId('container');
  await user.click(container);

  const dummyTitle = screen.getByRole('heading', {
    name: /title is a continent/i,
  });
  expect(dummyTitle).toBeInTheDocument();
});
