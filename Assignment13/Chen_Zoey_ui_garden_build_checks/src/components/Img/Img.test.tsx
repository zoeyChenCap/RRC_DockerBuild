import React from 'react';
import { render, screen } from '@testing-library/react';
import { Img } from './Img';

describe('Img Component', () => {
  test('renders the image with correct src and alt', () => {
    render(<Img src="https://example.com/test.jpg" alt="Test image" />);

    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/test.jpg');
    expect(img).toHaveAttribute('alt', 'Test image');
  });

  test('renders with custom dimensions', () => {
    render(
      <Img src="https://example.com/test.jpg" alt="Test image" width="300px" height="200px" />
    );

    const img = screen.getByRole('img');
    expect(img).toHaveStyle('width: 300px');
    expect(img).toHaveStyle('height: 200px');
  });

  test('renders local image from public folder', () => {
    render(<Img src="/img1.jpg" alt="Local image" />);

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/img1.jpg');
    expect(img).toHaveAttribute('alt', 'Local image');
  });
});
