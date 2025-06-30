import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';
import '@testing-library/jest-dom';

describe('Text Component', () => {
  test('should be visible', () => {
    render(<Text value="Visible Input" readOnly />);
    expect(screen.getByDisplayValue('Visible Input')).toBeVisible();
  });

  test('should apply disabled style', () => {
    render(<Text value="" disabled />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });
});