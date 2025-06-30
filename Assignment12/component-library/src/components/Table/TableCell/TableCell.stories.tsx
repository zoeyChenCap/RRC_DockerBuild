import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableCell } from './TableCell';

const meta: Meta<typeof TableCell> = {
  title: 'Components/TableCell',
  component: TableCell,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof TableCell>;

export const Default: Story = {
  args: {
    text: 'TableCell Example',
    backgroundColor: '#6c757d',
    disabled: false
  }
};

export const Disabled: Story = {
  args: {
    text: 'TableCell Disabled',
    backgroundColor: '#6c757d',
    disabled: true
  }
};
