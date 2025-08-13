import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    value: 'Hello',
    placeholder: 'Enter text...',
    disabled: false
  },
  render: (args) => {
    const [val, setVal] = useState(args.value || '');
    return <Text {...args} value={val} onChange={(e) => setVal(e.target.value)} />;
  }
};

export const Disabled: Story = {
  args: {
    value: '',
    placeholder: 'Disabled',
    disabled: true
  },
  render: (args) => {
    const [val, setVal] = useState(args.value || '');
    return <Text {...args} value={val} onChange={(e) => setVal(e.target.value)} />;
  }
};
