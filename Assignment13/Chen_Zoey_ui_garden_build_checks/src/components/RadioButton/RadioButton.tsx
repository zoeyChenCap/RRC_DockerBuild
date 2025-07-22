import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const RadioContainer = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  user-select: none;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: opacity 0.3s ease;

  &:hover:not([disabled]) {
    opacity: 0.8;
  }
`;

const HiddenRadio = styled.input.attrs({ type: 'radio' })<{ disabled?: boolean }>`
  position: absolute;
  opacity: 0;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const CustomRadio = styled.div<{ checked?: boolean; disabled?: boolean }>`
  width: 20px;
  height: 20px;
  border: 2px solid
    ${({ checked, disabled }) => (disabled ? '#ccc' : checked ? '#007bff' : '#dee2e6')};
  border-radius: 50%;
  margin-right: 0.75rem;
  position: relative;
  transition: all 0.3s ease;
  background-color: ${({ checked, disabled }) =>
    disabled ? '#f8f9fa' : checked ? '#007bff' : 'white'};

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: white;
    transform: translate(-50%, -50%) scale(${({ checked }) => (checked ? 1 : 0)});
    transition: transform 0.2s ease;
  }

  ${HiddenRadio}:focus + & {
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }

  ${HiddenRadio}:not(:disabled) + &:hover {
    border-color: #007bff;
  }
`;

const RadioLabel = styled.span<{ disabled?: boolean }>`
  font-size: 1rem;
  color: ${({ disabled }) => (disabled ? '#6c757d' : '#333')};
  line-height: 1.5;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  checked = false,
  disabled = false,
  onChange,
  className,
  ...rest
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange && !disabled) {
      onChange(e.target.value);
    }
  };

  return (
    <RadioContainer disabled={disabled} className={className}>
      <HiddenRadio
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        {...rest}
      />
      <CustomRadio checked={checked} disabled={disabled} />
      <RadioLabel disabled={disabled}>{label}</RadioLabel>
    </RadioContainer>
  );
};
