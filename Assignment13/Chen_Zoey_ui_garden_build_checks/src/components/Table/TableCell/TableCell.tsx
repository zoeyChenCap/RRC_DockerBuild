import React from 'react';
import styled from 'styled-components';
import { TableCellProps } from './TableCell.types';

const StyledTableCell = styled.div.withConfig({
  shouldForwardProp: (prop) => !['backgroundColor'].includes(prop)
})<TableCellProps>`
  padding: 1rem;
  background-color: ${(props) => (props.disabled ? '#ccc' : props.backgroundColor || '#eee')};
  color: #333;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export const TableCell: React.FC<TableCellProps> = ({
  text,
  disabled,
  backgroundColor,
  ...rest
}) => (
  <StyledTableCell disabled={disabled} backgroundColor={backgroundColor} {...rest}>
    {text}
  </StyledTableCell>
);
