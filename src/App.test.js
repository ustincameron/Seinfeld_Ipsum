import React from 'react';
import { render, screen } from '@testing-library/react';
import TwitCard from './components/twitCard';

test('quotes were reachable', () => {
  render(<TwitCard />);
  const element = screen.getByTestId('test-tweet');
  expect(element).toBeTruthy();
});
