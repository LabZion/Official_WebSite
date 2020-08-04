import React from 'react';
import { render } from '@testing-library/react';
import BlogPage from './BlogPage';

test('renders learn react link', () => {
  const { getByText } = render(<BlogPage />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
