import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableRow } from './TableRow';

const meta: Meta<typeof TableRow> = {
  title: 'Components/TableRow',
  component: TableRow,
  tags: ['autodocs'],
  argTypes: {
    cells: { control: 'object' },
    className: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<typeof TableRow>;

export const Default: Story = {
  args: {
    cells: ['John Doe', 'john.doe@company.com', 'Engineering', '+1 (555) 123-4567']
  },
  decorators: [
    (Story) => (
      <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #dee2e6' }}>
        <tbody>
          <Story />
        </tbody>
      </table>
    )
  ]
};

export const AlternativeData: Story = {
  args: {
    cells: ['Jane Smith', 'jane.smith@company.com', 'Marketing', '+1 (555) 987-6543']
  },
  decorators: [
    (Story) => (
      <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #dee2e6' }}>
        <tbody>
          <Story />
        </tbody>
      </table>
    )
  ]
};
