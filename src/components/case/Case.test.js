import React from 'react';
import { render } from '@testing-library/react';
import Case from './Case.js';

test('renders learn react link', () => {
  const { getByText } = render(<Case />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
