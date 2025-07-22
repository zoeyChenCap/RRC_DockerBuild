import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableHeader } from './TableHeader';

const meta: Meta<typeof TableHeader> = {
  title: 'Components/TableHeader',
  component: TableHeader,
  tags: ['autodocs'],
  argTypes: {
    headers: { control: 'object' },
    className: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {
  args: {
    headers: ['Name', 'Email', 'Department', 'Phone']
  },
  decorators: [
    (Story) => (
      <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #dee2e6' }}>
        <thead>
          <Story />
        </thead>
      </table>
    )
  ]
};

export const WithIcons: Story = {
  args: {
    headers: ['Name', 'Email', 'Department', 'Phone']
  },
  decorators: [
    (Story) => (
      <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #dee2e6' }}>
        <thead>
          <Story />
        </thead>
      </table>
    )
  ]
};
