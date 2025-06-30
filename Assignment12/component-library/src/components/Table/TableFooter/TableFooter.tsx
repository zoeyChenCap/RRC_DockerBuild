import React from 'react';
import styled from 'styled-components';
import { TableFooterProps } from './TableFooter.types';

const StyledFooterCell = styled.td`
  background-color: #f8f9fa;
  color: #6c757d;
  font-style: italic;
  padding: 1rem;
  text-align: center;
  border-top: 2px solid #dee2e6;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    padding: 0.75rem 0.5rem;
    font-size: 0.8rem;
  }
`;

export const TableFooter: React.FC<TableFooterProps> = ({ content, className, ...rest }) => (
  <tr className={className} {...rest}>
    <StyledFooterCell colSpan={4}>
      {content}
    </StyledFooterCell>
  </tr>
);
