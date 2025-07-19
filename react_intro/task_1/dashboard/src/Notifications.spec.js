import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

test('renders notifications text', () => {
  render(<Notifications />);
  const notificationText = screen.getByText(/here is the list of notifications/i);
  expect(notificationText).toBeInTheDocument();
});

test('Notifications component renders a p element', () => {
  render(<Notifications />);
  const paragraphElement = screen.getByText('Here is the list of notifications');
  expect(paragraphElement.tagName).toBe('P');
});