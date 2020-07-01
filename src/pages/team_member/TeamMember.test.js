import React from 'react';
import { render } from '@testing-library/react';
import TeamMember from './TeamMember';

test('renders learn react link', () => {
  const { getByText } = render(<TeamMember />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
