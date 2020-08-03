import React from 'react';
import { render } from '@testing-library/react';
import Privacy from './Privacy';

test('renders learn react link', () => {
  const { getByText } = render(<Privacy />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
