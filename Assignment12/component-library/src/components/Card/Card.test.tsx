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

  test('renders content in paragraph element', () => {
    render(<Card title="Test" content="Test content" />);
    const contentElement = screen.getByText('Test content');
    expect(contentElement).toBeInTheDocument();
  });

  test('applies custom className when provided', () => {
    const { container } = render(<Card title="Test" content="Content" className="custom-class" />);
    // 检查容器的第一个div（CardContainer）是否有我们的className
    const cardContainer = container.firstChild;
    expect(cardContainer).toHaveClass('custom-class');
  });
});
