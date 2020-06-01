import React from 'react';
import { render } from '@testing-library/react';
import LatestPosts from './LatestPosts.js';

test('renders learn react link', () => {
  const { getByText } = render(<LatestPosts />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
