import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Label from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    disabled: { control: 'boolean' },
    htmlFor: { control: 'text' },
    className: { control: 'text' },
    style: { control: 'object' }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Label Text',
    disabled: false
  }
};

export const Disabled: Story = {
  args: {
    text: 'Disabled Label',
    disabled: true
  }
};

export const WithCustomStyle: Story = {
  args: {
    text: 'Styled Label',
    disabled: false,
    style: {
      color: '#007bff',
      fontWeight: 'bold',
      fontSize: '1.2rem'
    }
  }
};

export const RightAligned: Story = {
  args: {
    text: 'Right Aligned Label',
    disabled: false,
    style: {
      textAlign: 'right',
      minWidth: '120px'
    }
  }
};
