import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { RadioButton } from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    name: { control: 'text' },
    value: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Select this option',
    name: 'example',
    value: 'option1',
    checked: false,
    disabled: false
  }
};

export const Checked: Story = {
  args: {
    label: 'This option is selected',
    name: 'example',
    value: 'option2',
    checked: true,
    disabled: false
  }
};

export const Disabled: Story = {
  args: {
    label: 'This option is disabled',
    name: 'example',
    value: 'option3',
    checked: false,
    disabled: true
  }
};

export const DisabledChecked: Story = {
  args: {
    label: 'This option is disabled and checked',
    name: 'example',
    value: 'option4',
    checked: true,
    disabled: true
  }
};

export const TermsAgreement: Story = {
  args: {
    label: 'I agree to the Terms and Conditions',
    name: 'terms',
    value: 'agree',
    checked: false,
    disabled: false
  }
};
