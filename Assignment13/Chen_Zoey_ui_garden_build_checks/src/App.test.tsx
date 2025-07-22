import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page title', () => {
  render(<App />);
  // 查找只包含主标题文字的确切h1标题
  const titleElement = screen.getByRole('heading', { level: 1, name: 'My Component Library' });
  expect(titleElement).toBeInTheDocument();
});

test('renders user registration form', () => {
  render(<App />);
  const formTitle = screen.getByText(/User Registration Form/i);
  expect(formTitle).toBeInTheDocument();
});

test('renders hero image section', () => {
  render(<App />);
  const heroHeading = screen.getByText(/Welcome to My Component Library!/i);
  expect(heroHeading).toBeInTheDocument();
});
