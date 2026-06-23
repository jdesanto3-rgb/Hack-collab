import React from 'react';
import { Checkbox } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
  parameters: {
    layout: 'padded',
  },
};

export const Default = {
  args: {
    label: 'Accept terms and conditions',
    checked: false,
  },
};

export const Checked = {
  args: {
    label: 'Accept terms and conditions',
    checked: true,
  },
};

export const Indeterminate = {
  args: {
    label: 'Select all',
    checked: false,
    indeterminate: true,
  },
};

export const Disabled = {
  args: {
    label: 'Disabled option',
    checked: false,
    disabled: true,
  },
};

export const AllStates = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Checkbox label="Unchecked" checked={false} onChange={() => {}} />
      <Checkbox label="Checked" checked={true} onChange={() => {}} />
      <Checkbox label="Indeterminate" checked={false} indeterminate={true} onChange={() => {}} />
      <Checkbox label="Disabled unchecked" checked={false} disabled onChange={() => {}} />
      <Checkbox label="Disabled checked" checked={true} disabled onChange={() => {}} />
    </div>
  ),
};
