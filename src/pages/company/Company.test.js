import React from 'react';
import { render } from '@testing-library/react';
import Company from './Company';

test('renders learn react link', () => {
  const { getByText } = render(<Company />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
