import React from 'react';
import { render } from '@testing-library/react';
import Blogs from './Blogs';

test('renders learn react link', () => {
  const { getByText } = render(<Blogs />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
