import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Ticker Data/i);

  expect(headerElement).toBeInTheDocument();
});
