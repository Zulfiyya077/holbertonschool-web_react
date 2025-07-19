import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders h1 element with "School dashboard" text', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { 
    name: /school dashboard/i, 
    level: 1 
  });
  expect(headingElement).toBeInTheDocument();
});

test('renders correct text content in app-body and app-footer paragraphs', () => {
  render(<App />);
  
  const bodyParagraph = screen.getByText(/login to access the full dashboard/i);
  expect(bodyParagraph).toBeInTheDocument();
  
  const currentYear = new Date().getFullYear();
  const footerParagraph = screen.getByText(
    new RegExp(`copyright ${currentYear} - holberton school main dashboard`, 'i')
  );
  expect(footerParagraph).toBeInTheDocument();
});

test('renders logo placeholder element', () => {
  render(<App />);
  // Daha spesifik selector istifadə edin - yalnız "HOLBERTON" mətnini
  const logoElements = screen.getAllByText(/^HOLBERTON$/i);
  expect(logoElements.length).toBeGreaterThan(0);
  expect(logoElements[0]).toBeInTheDocument();
});

test('renders Notifications component', () => {
  render(<App />);
  const notificationText = screen.getByText(/here is the list of notifications/i);
  expect(notificationText).toBeInTheDocument();
});