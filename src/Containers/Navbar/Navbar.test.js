import React from 'react';
import { render, screen } from '../../Mocks/test-utils';
import '@testing-library/jest-dom';

import Navbar from './Navbar';

describe(Navbar, () => {
  test('Should render Title, "Regions" Accordion list, and Home', () => {
    render(<Navbar />);

    const regionsTitle = screen.getByText(/regions/i);
    const homeLink = screen.getByText(/home/i);
    const title = screen.getByText(/air pollution app/i);

    expect(regionsTitle).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  test('Should render footer with social info and social links', () => {
    render(<Navbar />);

    const allLists = screen.getAllByRole('list');
    const socialList = allLists[1];
    const madeBy = screen.getByText(/made by/i);

    expect(madeBy).toBeInTheDocument();
    expect(socialList).toBeInTheDocument();
  });
});
