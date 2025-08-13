import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { RadioButton } from './RadioButton';

describe('RadioButton Component', () => {
  const defaultProps = {
    label: 'Test Option',
    name: 'test',
    value: 'test-value'
  };

  test('renders the radio button with label', () => {
    render(<RadioButton {...defaultProps} />);

    expect(screen.getByText('Test Option')).toBeInTheDocument();
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });

  test('calls onChange when clicked', () => {
    const mockOnChange = jest.fn();
    render(<RadioButton {...defaultProps} onChange={mockOnChange} />);

    const radio = screen.getByRole('radio');
    fireEvent.click(radio);

    expect(mockOnChange).toHaveBeenCalledWith('test-value');
  });

  test('is checked when checked prop is true', () => {
    render(<RadioButton {...defaultProps} checked={true} />);

    const radio = screen.getByRole('radio') as HTMLInputElement;
    expect(radio.checked).toBe(true);
  });

  test('is not checked when checked prop is false', () => {
    render(<RadioButton {...defaultProps} checked={false} />);

    const radio = screen.getByRole('radio') as HTMLInputElement;
    expect(radio.checked).toBe(false);
  });

  test('is disabled when disabled prop is true', () => {
    render(<RadioButton {...defaultProps} disabled={true} />);

    const radio = screen.getByRole('radio');
    expect(radio).toBeDisabled();
  });

  test('does not call onChange when disabled', () => {
    const mockOnChange = jest.fn();
    render(<RadioButton {...defaultProps} disabled={true} onChange={mockOnChange} />);

    const radio = screen.getByRole('radio');
    fireEvent.click(radio);

    expect(mockOnChange).not.toHaveBeenCalled();
  });

  test('has correct name and value attributes', () => {
    render(<RadioButton {...defaultProps} />);

    const radio = screen.getByRole('radio') as HTMLInputElement;
    expect(radio.name).toBe('test');
    expect(radio.value).toBe('test-value');
  });
});
