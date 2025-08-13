import React from 'react';
import styled from 'styled-components';
import { TableHeaderProps } from './TableHeader.types';

const StyledHeaderCell = styled.th`
  background-color: #f8f9fa;
  color: #495057;
  font-weight: 600;
  padding: 1rem;
  text-align: left;
  border-bottom: 2px solid #dee2e6;
  border-right: 1px solid #dee2e6;

  &:last-child {
    border-right: none;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 0.5rem;
    font-size: 0.9rem;
  }
`;

export const TableHeader: React.FC<TableHeaderProps> = ({ headers, className, ...rest }) => (
  <tr className={className} {...rest}>
    {headers.map((header, index) => (
      <StyledHeaderCell key={index}>{header}</StyledHeaderCell>
    ))}
  </tr>
);
