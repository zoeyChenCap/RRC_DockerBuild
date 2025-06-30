import React from 'react';
import { render, screen } from '@testing-library/react';
import { TableHeader } from './TableHeader';

const TableWrapper = ({ children }: { children: React.ReactNode }) => (
  <table>
    <thead>
      {children}
    </thead>
  </table>
);

describe('TableHeader Component', () => {
  test('renders all header cells', () => {
    const headers = ['Name', 'Email', 'Department', 'Phone'];
    render(
      <TableWrapper>
        <TableHeader headers={headers} />
      </TableWrapper>
    );
    
    headers.forEach(header => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  });

  test('renders correct number of header cells', () => {
    const headers = ['Column 1', 'Column 2', 'Column 3'];
    render(
      <TableWrapper>
        <TableHeader headers={headers} />
      </TableWrapper>
    );
    
    const headerCells = screen.getAllByRole('columnheader');
    expect(headerCells).toHaveLength(3);
  });

  test('applies custom className when provided', () => {
    render(
      <TableWrapper>
        <TableHeader headers={['Test']} className="custom-class" />
      </TableWrapper>
    );
    
    const rowElement = screen.getByRole('row');
    expect(rowElement).toHaveClass('custom-class');
  });
});
