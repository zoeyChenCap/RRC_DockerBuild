import React from 'react';
import { render, screen } from '@testing-library/react';
import { TableFooter } from './TableFooter';

const TableWrapper = ({ children }: { children: React.ReactNode }) => (
  <table>
    <tfoot>
      {children}
    </tfoot>
  </table>
);

describe('TableFooter Component', () => {
  test('renders footer content', () => {
    const content = 'Total: 5 Employees | Last Updated: December 2024';
    render(
      <TableWrapper>
        <TableFooter content={content} />
      </TableWrapper>
    );
    
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  test('renders as a table cell with correct colspan', () => {
    render(
      <TableWrapper>
        <TableFooter content="Test footer" />
      </TableWrapper>
    );
    
    const footerCell = screen.getByRole('cell');
    expect(footerCell).toHaveAttribute('colspan', '4');
  });

  test('applies custom className when provided', () => {
    render(
      <TableWrapper>
        <TableFooter content="Test" className="custom-class" />
      </TableWrapper>
    );
    
    const rowElement = screen.getByRole('row');
    expect(rowElement).toHaveClass('custom-class');
  });
});
