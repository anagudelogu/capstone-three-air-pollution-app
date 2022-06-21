import { React } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RegionCard from './RegionCard';

test('Should render with given Children as title', () => {
  render(<RegionCard>Title</RegionCard>);

  const title = screen.getByRole('heading', { name: /title/i });

  expect(title).toBeInTheDocument();
});
