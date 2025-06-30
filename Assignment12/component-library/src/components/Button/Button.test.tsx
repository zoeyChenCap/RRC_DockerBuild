// src/components/Button/Button.tests.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';
import '@testing-library/jest-dom';

describe('Button component', () => {
  it('renders the button with correct text', () => {
    render(<Button text="Click Me" backgroundColor="#007bff" disabled={false} />);
    expect(screen.getByText('Click Me')).toBeVisible();
  });

  it('applies disabled styles', () => {
    render(<Button text="Disabled" backgroundColor="#007bff" disabled />);
    const button = screen.getByText('Disabled');
    expect(button).toHaveStyle('background-color: #ccc'); // Matches actual disabled style
    expect(button).toHaveStyle('cursor: not-allowed');
  });
});