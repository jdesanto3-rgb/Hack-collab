import React from 'react';
import { Radio, RadioGroup } from './Radio';

export default {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
  parameters: {
    layout: 'padded',
  },
};

export const Default = {
  args: {
    label: 'Option A',
    value: 'a',
    name: 'single-radio',
    checked: false,
  },
};

export const Checked = {
  args: {
    label: 'Option A',
    value: 'a',
    name: 'single-radio-checked',
    checked: true,
  },
};

export const RadioGroupDefault = {
  render: () => {
    const [val, setVal] = React.useState('option1');
    return (
      <RadioGroup
        label="Preferred contact method"
        name="contact"
        options={[
          { value: 'option1', label: 'Email' },
          { value: 'option2', label: 'Phone' },
          { value: 'option3', label: 'Post' },
        ]}
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
    );
  },
};

export const Disabled = {
  args: {
    label: 'Disabled option',
    value: 'disabled',
    name: 'disabled-radio',
    checked: false,
    disabled: true,
  },
};
