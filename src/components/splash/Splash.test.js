import React from 'react';
import { render } from '@testing-library/react';
import Splash from './Splash';

test('renders learn react link', () => {
  const { getByText } = render(<Splash />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
