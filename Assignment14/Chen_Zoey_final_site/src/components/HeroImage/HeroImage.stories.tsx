import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { HeroImage } from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  tags: ['autodocs'],
  argTypes: {
    imageUrl: { control: 'text' },
    heading: { control: 'text' },
    description: { control: 'text' },
    alt: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
    heading: 'Welcome to Our Platform',
    description:
      'Discover amazing features and capabilities that will transform your experience. Join thousands of satisfied users today.',
    alt: 'Beautiful mountain landscape'
  }
};

export const WithoutDescription: Story = {
  args: {
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop',
    heading: 'Simple Hero Section',
    alt: 'Forest landscape'
  }
};

export const CustomContent: Story = {
  args: {
    imageUrl: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=400&fit=crop',
    heading: 'Start Your Journey',
    description:
      'Every great journey begins with a single step. Take yours today and unlock unlimited possibilities.',
    alt: 'Serene lake at sunset'
  }
};
