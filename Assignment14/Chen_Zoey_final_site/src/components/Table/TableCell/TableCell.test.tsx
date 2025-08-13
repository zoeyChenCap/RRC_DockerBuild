import React from 'react';
import { render, screen } from '@testing-library/react';
import { TableCell } from './TableCell';

describe('TableCell Component', () => {
  test('renders the component', () => {
    render(<TableCell text="TableCell visible" />);
    expect(screen.getByText('TableCell visible')).toBeInTheDocument();
  });

  test('applies disabled style', () => {
    render(<TableCell text="Disabled" disabled backgroundColor="#eee" />);
    const element = screen.getByText('Disabled');
    expect(element).toHaveStyle('background-color: #ccc');
    expect(element).toHaveStyle('cursor: not-allowed');
  });
});
