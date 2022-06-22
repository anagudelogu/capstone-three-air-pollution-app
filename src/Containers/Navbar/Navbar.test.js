import React from 'react';
import { render, screen } from '../../Mocks/test-utils';
import '@testing-library/jest-dom';

import Navbar from './Navbar';

describe(Navbar, () => {
  test('Should render "Regions" Accordion list, and Home', () => {
    render(<Navbar />);

    const regionsTitle = screen.getByText(/regions/i);
    const homeLink = screen.getByText(/home/i);

    expect(regionsTitle).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
  });
});
