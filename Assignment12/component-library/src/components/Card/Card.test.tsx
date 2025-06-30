import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card Component', () => {
  test('renders the card with title and content', () => {
    render(<Card title="Test Title" content="Test content for the card" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test content for the card')).toBeInTheDocument();
  });

  test('renders title as h3 element', () => {
    render(<Card title="Test Title" content="Test content" />);
    const titleElement = screen.getByRole('heading', { level: 3 });
    expect(titleElement).toHaveTextContent('Test Title');
  });

  test('applies custom className when provided', () => {
    render(<Card title="Test" content="Content" className="custom-class" />);
    const cardElement = screen.getByText('Test').closest('div');
    expect(cardElement).toHaveClass('custom-class');
  });
});
