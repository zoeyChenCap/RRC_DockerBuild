import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableFooter } from './TableFooter';

const meta: Meta<typeof TableFooter> = {
  title: 'Components/TableFooter',
  component: TableFooter,
  tags: ['autodocs'],
  argTypes: {
    content: { control: 'text' },
    className: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<typeof TableFooter>;

export const Default: Story = {
  args: {
    content: 'Total: 5 Employees | Last Updated: December 2024'
  },
  decorators: [(Story) => (
    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #dee2e6' }}>
      <tfoot>
        <Story />
      </tfoot>
    </table>
  )]
};

export const ShortContent: Story = {
  args: {
    content: 'End of table'
  },
  decorators: [(Story) => (
    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #dee2e6' }}>
      <tfoot>
        <Story />
      </tfoot>
    </table>
  )]
};
