import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  test('renders notifications title "Here is the list of notifications"', () => {
    render(<Notifications />);
    const titleElement = screen.getByText(/here is the list of notifications/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders button element in the notifications', () => {
    render(<Notifications />);
    const buttonElement = screen.getByRole('button', { name: /close/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders 3 li elements as notifications', () => {
    render(<Notifications />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });

  test('clicking close button logs "Close button has been clicked" to console', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    
    render(<Notifications />);
    const closeButton = screen.getByRole('button', { name: /close/i });
    
    fireEvent.click(closeButton);
    
    expect(consoleSpy).toHaveBeenCalledWith('Close button has been clicked');
    
    consoleSpy.mockRestore();
  });
});