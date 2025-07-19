import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders h1 element with "School dashboard" text', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { name: /school dashboard/i, level: 1 });
  expect(headingElement).toBeInTheDocument();
});

test('renders correct text content in app-body and app-footer paragraphs', () => {
  render(<App />);
  const bodyParagraph = screen.getByText(/login to access the full dashboard/i);
  expect(bodyParagraph).toBeInTheDocument();
  
  const currentYear = new Date().getFullYear();
  const footerParagraph = screen.getByText(new RegExp(`copyright ${currentYear} - holberton school main dashboard`, 'i'));
  expect(footerParagraph).toBeInTheDocument();
});

test('renders img element with correct alt text', () => {
  render(<App />);
  const logoImage = screen.getByAltText(/holberton logo/i);
  expect(logoImage).toBeInTheDocument();
});

test('renders 2 input elements', () => {
  render(<App />);
  const emailInput = screen.getByRole('textbox');
  const passwordInput = screen.getByLabelText(/password/i);
  
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

test('renders 2 label elements with Email and Password text', () => {
  render(<App />);
  const emailLabel = screen.getByText(/email/i);
  expect(emailLabel).toBeInTheDocument();
  
  const passwordLabel = screen.getByText(/password/i);
  expect(passwordLabel).toBeInTheDocument();
});

test('renders a button with text OK', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /ok/i });
  expect(buttonElement).toBeInTheDocument();
});