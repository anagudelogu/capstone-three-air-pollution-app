import React from 'react';
import { render, screen } from '../../Mocks/test-utils';
import '@testing-library/jest-dom';
import Home from './Home';

describe('Home page component', () => {
  test('Should render correct title and regions subtitle', () => {
    render(<Home />);

    const mainTitle = screen.getByRole('heading', {
      name: /air pollution/i,
    });

    const regionsTitle = screen.getByRole('heading', {
      name: /select a region/i,
    });

    expect(mainTitle).toBeInTheDocument();
    expect(regionsTitle).toBeInTheDocument();
  });

  test('Should render all 5 regions', () => {
    render(<Home />);

    const asia = screen.getByRole('heading', { name: /asia/i });
    const america = screen.getByRole('heading', { name: /america/i });
    const europe = screen.getByRole('heading', { name: /europe/i });
    const oceania = screen.getByRole('heading', { name: /oceania/i });
    const africa = screen.getByRole('heading', { name: /africa/i });

    expect(asia).toBeInTheDocument();
    expect(america).toBeInTheDocument();
    expect(europe).toBeInTheDocument();
    expect(oceania).toBeInTheDocument();
    expect(africa).toBeInTheDocument();
  });
});
