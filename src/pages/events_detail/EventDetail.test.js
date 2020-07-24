import React from 'react';
import { render } from '@testing-library/react';
import EventDetail from './EventDetail';

test('renders learn react link', () => {
  const { getByText } = render(<EventDetail />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
