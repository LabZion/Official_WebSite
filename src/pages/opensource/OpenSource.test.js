import React from 'react';
import { render } from '@testing-library/react';
import OpenSource from './OpenSource';

test('renders learn react link', () => {
  const { getByText } = render(<OpenSource />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
