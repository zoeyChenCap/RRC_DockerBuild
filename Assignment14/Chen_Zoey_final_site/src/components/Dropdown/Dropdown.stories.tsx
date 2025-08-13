import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    options: { control: 'object' },
    value: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    placeholder: 'Please select an option'
  }
};

export const WithValue: Story = {
  args: {
    options: ['Apple', 'Banana', 'Orange', 'Grape'],
    value: 'Banana',
    placeholder: 'Choose a fruit'
  }
};

export const Countries: Story = {
  args: {
    options: [
      'United States',
      'Canada',
      'United Kingdom',
      'Germany',
      'France',
      'Japan',
      'Australia'
    ],
    placeholder: 'Select your country'
  }
};

export const Disabled: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    placeholder: 'This dropdown is disabled',
    disabled: true
  }
};
