import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledInput = styled.input<TextProps>`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  width: 100%;
  max-width: 400px;

  background-color: ${({ disabled }) => (disabled ? '#eee' : 'white')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const Text: React.FC<TextProps> = ({ value, onChange, disabled, placeholder, readOnly }) => {
  return (
    <StyledInput
      type="text"
      value={value}
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder}
      readOnly={readOnly}
    />
  );
};

export default Text;