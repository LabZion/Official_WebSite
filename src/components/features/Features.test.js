import React from 'react';
import { render } from '@testing-library/react';
import Features from './Features';

test('renders learn react link', () => {
  const { getByText } = render(<Features />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
