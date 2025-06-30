import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    text: 'Click Me',
    backgroundColor: '#007bff',
    disabled: false
  }
};

export const Disabled: Story = {
  args: {
    text: 'Disabled',
    backgroundColor: '#007bff',
    disabled: true
  }
};