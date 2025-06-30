import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('Dropdown Component', () => {
  const mockOptions = ['Option 1', 'Option 2', 'Option 3'];
  
  test('renders the dropdown with options', () => {
    render(<Dropdown options={mockOptions} placeholder="Select an option" />);
    
    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
    expect(screen.getByText('Select an option')).toBeInTheDocument();
    
    mockOptions.forEach(option => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  test('calls onChange when option is selected', () => {
    const mockOnChange = jest.fn();
    render(<Dropdown options={mockOptions} onChange={mockOnChange} />);
    
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'Option 2' } });
    
    expect(mockOnChange).toHaveBeenCalledWith('Option 2');
  });

  test('renders with selected value', () => {
    render(<Dropdown options={mockOptions} value="Option 2" />);
    
    const select = screen.getByRole('combobox') as HTMLSelectElement;
    expect(select.value).toBe('Option 2');
  });

  test('is disabled when disabled prop is true', () => {
    render(<Dropdown options={mockOptions} disabled />);
    
    const select = screen.getByRole('combobox');
    expect(select).toBeDisabled();
  });

  test('does not call onChange when disabled', () => {
    const mockOnChange = jest.fn();
    render(<Dropdown options={mockOptions} onChange={mockOnChange} disabled />);
    
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'Option 1' } });
    
    expect(mockOnChange).not.toHaveBeenCalled();
  });
});
