import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    className: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Default Card',
    content:
      'This is a default card component with some sample content to demonstrate its appearance and layout.'
  }
};

export const LongContent: Story = {
  args: {
    title: 'Card with Long Content',
    content:
      'This card demonstrates how the component handles longer content. It shows that the card gracefully expands to accommodate more text while maintaining its visual structure and readability. The text flows naturally and the card maintains its aesthetic appeal even with extended content.'
  }
};

export const ShortContent: Story = {
  args: {
    title: 'Brief Card',
    content: 'Short and sweet content.'
  }
};
