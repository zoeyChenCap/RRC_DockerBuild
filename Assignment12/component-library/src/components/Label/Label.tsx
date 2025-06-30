import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

// Type for styled component (excludes text, className, style props since they're handled separately)
type StyledLabelProps = Omit<LabelProps, 'text' | 'className' | 'style'>;

const StyledLabel = styled.label<StyledLabelProps>`
  font-size: 1rem;
  color: ${({ disabled }) => (disabled ? '#aaa' : '#333')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const Label: React.FC<LabelProps> = ({ text, htmlFor, disabled, className, style }) => {
  return (
    <StyledLabel 
      htmlFor={htmlFor} 
      disabled={disabled} 
      className={className} 
      style={style}
    >
      {text}
    </StyledLabel>
  );
};

export default Label;