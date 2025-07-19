import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders h1 element with "School Dashboard" text', () => {
  render(<App />);
  // Dəqiq h1 mətnini yoxlayın - School Dashboard vs School dashboard
  const headingElement = screen.getByRole('heading', { 
    name: /school dashboard/i, 
    level: 1 
  });
  expect(headingElement).toBeInTheDocument();
});

test('renders correct text content in app-body and app-footer paragraphs', () => {
  render(<App />);
  
  // App-body paragraph - dəqiq mətn
  const bodyParagraph = screen.getByText(/login to access the full dashboard/i);
  expect(bodyParagraph).toBeInTheDocument();
  
  // App-footer paragraph - dəqiq format yoxlayın
  const currentYear = new Date().getFullYear();
  const footerParagraph = screen.getByText(
    new RegExp(`copyright ${currentYear} - holberton school`, 'i')
  );
  expect(footerParagraph).toBeInTheDocument();
});

test('renders img element with correct alt text', () => {
  render(<App />);
  // Alt text dəqiq "holberton logo" olmalıdır
  const logoImage = screen.getByAltText(/holberton logo/i);
  expect(logoImage).toBeInTheDocument();
});