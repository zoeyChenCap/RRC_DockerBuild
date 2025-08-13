import React from 'react';
import { render, screen } from '@testing-library/react';
import { TableRow } from './TableRow';

const TableWrapper = ({ children }: { children: React.ReactNode }) => (
  <table>
    <tbody>{children}</tbody>
  </table>
);

describe('TableRow Component', () => {
  test('renders all cell data', () => {
    const cells = ['John Doe', 'john@example.com', 'Engineering', '555-1234'];
    render(
      <TableWrapper>
        <TableRow cells={cells} />
      </TableWrapper>
    );

    cells.forEach((cellContent) => {
      expect(screen.getByText(cellContent)).toBeInTheDocument();
    });
  });

  test('renders correct number of cells', () => {
    const cells = ['Cell 1', 'Cell 2', 'Cell 3'];
    render(
      <TableWrapper>
        <TableRow cells={cells} />
      </TableWrapper>
    );

    const tableCells = screen.getAllByRole('cell');
    expect(tableCells).toHaveLength(3);
  });

  test('applies custom className when provided', () => {
    render(
      <TableWrapper>
        <TableRow cells={['Test']} className="custom-class" />
      </TableWrapper>
    );

    const rowElement = screen.getByRole('row');
    expect(rowElement).toHaveClass('custom-class');
  });
});
