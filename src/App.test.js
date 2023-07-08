import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('check header footer exist', () => {
  render(<App />);
  const someText = screen.getByText(/learn abc/i);
  expect(someText).toBeInTheDocument();
})