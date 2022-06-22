import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import AccordionList from './AccordionList';

const testTitle = 'Test';
const testList = ['1', '2', '3', '4'];

test('Should render only the button at the beginning', () => {
  render(<AccordionList list={testList}>{testTitle}</AccordionList>);

  const button = screen.getByRole('button', { name: /test/i });
  const list = screen.queryByRole('list');

  expect(button).toBeInTheDocument();
  expect(list).toBeNull();
});

test('When user clicks button, list should appear ', async () => {
  const user = userEvent.setup();
  render(
    <MemoryRouter>
      <AccordionList list={testList}>{testTitle}</AccordionList>
    </MemoryRouter>,
  );
  const button = screen.getByRole('button', { name: /test/i });
  let list = screen.queryByRole('list');
  expect(list).toBeNull();

  await user.click(button);

  list = screen.getByRole('list');

  expect(list).toBeInTheDocument();
});
