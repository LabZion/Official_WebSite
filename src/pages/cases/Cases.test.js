import React from 'react';
import { render } from '@testing-library/react';
import Cases from './Cases';

test('renders learn react link', () => {
  const { getByText } = render(<Cases />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
