import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from './Label';
import '@testing-library/jest-dom';

describe('Label Component', () => {
  test('should be visible', () => {
    render(<Label text="Visible Label" />);
    expect(screen.getByText('Visible Label')).toBeVisible();
  });

  test('should have disabled style when disabled', () => {
    render(<Label text="Disabled Label" disabled />);
    const label = screen.getByText('Disabled Label');
    expect(label).toHaveStyle('color: #aaa');
  });
});