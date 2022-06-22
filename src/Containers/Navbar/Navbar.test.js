import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Navbar from './Navbar';

describe(Navbar, () => {
  test('Should render "Regions" Accordion list', () => {
    render(<Navbar />);

    const regionsTitle = screen.getByText(/regions/i);

    expect(regionsTitle).toBeInTheDocument();
  });
});
