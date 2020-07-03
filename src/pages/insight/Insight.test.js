import React from 'react';
import { render } from '@testing-library/react';
import Insight from './Insight';

test('renders learn react link', () => {
  const { getByText } = render(<Insight />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
