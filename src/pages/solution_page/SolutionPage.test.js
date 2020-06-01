import React from 'react';
import { render } from '@testing-library/react';
import SolutionPage from './SolutionPage';

test('renders learn react link', () => {
  const { getByText } = render(<SolutionPage />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
