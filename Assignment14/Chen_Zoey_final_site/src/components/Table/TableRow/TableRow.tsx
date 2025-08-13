import React from 'react';
import styled from 'styled-components';
import { TableRowProps } from './TableRow.types';

const StyledRow = styled.tr`
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f8f9fa;
  }

  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  &:nth-child(even):hover {
    background-color: #f1f3f4;
  }
`;

const StyledCell = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
  border-right: 1px solid #dee2e6;
  color: #495057;

  &:last-child {
    border-right: none;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 0.5rem;
    font-size: 0.9rem;
  }
`;

export const TableRow: React.FC<TableRowProps> = ({ cells, className, ...rest }) => (
  <StyledRow className={className} {...rest}>
    {cells.map((cell, index) => (
      <StyledCell key={index}>{cell}</StyledCell>
    ))}
  </StyledRow>
);
