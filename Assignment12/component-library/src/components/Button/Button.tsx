import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types.js';

// Type for styled component (excludes text prop since it's passed as children)
type StyledButtonProps = Omit<ButtonProps, 'text'>;

const StyledButton = styled.button<StyledButtonProps>`
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#ccc' : backgroundColor || '#007bff'};
  color: white;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ disabled, backgroundColor }) =>
      !disabled && backgroundColor ? darkenColor(backgroundColor, 20) : undefined};
  }

  @media (max-width: 600px) {
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
  }
`;

// Utility to darken color on hover
const darkenColor = (hex: string, percent: number) => {
  const num = parseInt(hex.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = ((num >> 8) & 0x00ff) + amt;
  const B = (num & 0x0000ff) + amt;
  return `#${(
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
    (B < 255 ? (B < 1 ? 0 : B) : 255)
  )
    .toString(16)
    .slice(1)}`;
};

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled, backgroundColor }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} backgroundColor={backgroundColor}>
      {text}
    </StyledButton>
  );
};

export default Button;