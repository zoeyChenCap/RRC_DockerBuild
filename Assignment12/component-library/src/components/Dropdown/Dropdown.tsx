import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<{ disabled?: boolean }>`
  width: 100%;
  max-width: 400px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  background-color: ${({ disabled }) => (disabled ? '#f5f5f5' : 'white')};
  color: ${({ disabled }) => (disabled ? '#999' : '#333')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }

  &:hover:not(:disabled) {
    border-color: #80bdff;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const StyledOption = styled.option`
  padding: 0.5rem;
  color: #333;
`;

export const Dropdown: React.FC<DropdownProps> = ({ 
  options, 
  value, 
  placeholder = "Please select...", 
  disabled = false, 
  onChange,
  className,
  ...rest 
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange && !disabled) {
      onChange(e.target.value);
    }
  };

  return (
    <StyledSelect 
      value={value || ''} 
      onChange={handleChange}
      disabled={disabled}
      className={className}
      {...rest}
    >
      <StyledOption value="" disabled>
        {placeholder}
      </StyledOption>
      {options.map((option, index) => (
        <StyledOption key={index} value={option}>
          {option}
        </StyledOption>
      ))}
    </StyledSelect>
  );
};
