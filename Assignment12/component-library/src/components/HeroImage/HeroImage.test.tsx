import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeroImage } from './HeroImage';

describe('HeroImage Component', () => {
  test('renders the component with heading and description', () => {
    render(
      <HeroImage 
        imageUrl="https://example.com/test-image.jpg" 
        heading="Test Heading" 
        description="Test description for hero image"
      />
    );
    
    expect(screen.getByText('Test Heading')).toBeInTheDocument();
    expect(screen.getByText('Test description for hero image')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  test('renders without description when not provided', () => {
    render(
      <HeroImage 
        imageUrl="https://example.com/test-image.jpg" 
        heading="Only Heading" 
      />
    );
    
    expect(screen.getByText('Only Heading')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  test('renders with custom alt text', () => {
    render(
      <HeroImage 
        imageUrl="https://example.com/test-image.jpg" 
        heading="Test Heading" 
        alt="Custom alt text"
      />
    );
    
    expect(screen.getByAltText('Custom alt text')).toBeInTheDocument();
  });

  test('uses default alt text when not provided', () => {
    render(
      <HeroImage 
        imageUrl="https://example.com/test-image.jpg" 
        heading="Test Heading" 
      />
    );
    
    expect(screen.getByAltText('Hero image')).toBeInTheDocument();
  });
});
