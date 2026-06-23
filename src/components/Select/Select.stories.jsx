import React from 'react';
import { Select } from './Select';

const FRUIT_OPTIONS = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'mango', label: 'Mango' },
];

const ROLE_OPTIONS = [
  { value: 'admin', label: 'Admin' },
  { value: 'editor', label: 'Editor' },
  { value: 'viewer', label: 'Viewer' },
];

export default {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
  parameters: {
    layout: 'padded',
  },
};

export const Default = {
  args: {
    label: 'Favourite fruit',
    options: FRUIT_OPTIONS,
    value: 'apple',
  },
};

export const WithError = {
  args: {
    label: 'Role',
    options: ROLE_OPTIONS,
    value: '',
    error: 'Please select a role.',
  },
};

export const Disabled = {
  args: {
    label: 'Favourite fruit',
    options: FRUIT_OPTIONS,
    value: 'banana',
    disabled: true,
  },
};

export const Placeholder = {
  args: {
    label: 'Favourite fruit',
    options: FRUIT_OPTIONS,
    value: '',
    placeholder: 'Choose a fruit…',
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 320 }}>
      <Select
        label="Default"
        options={FRUIT_OPTIONS}
        value="apple"
        onChange={() => {}}
      />
      <Select
        label="With placeholder"
        options={FRUIT_OPTIONS}
        value=""
        placeholder="Choose a fruit…"
        onChange={() => {}}
      />
      <Select
        label="With error"
        options={ROLE_OPTIONS}
        value=""
        error="Please select a role."
        onChange={() => {}}
      />
      <Select
        label="Disabled"
        options={FRUIT_OPTIONS}
        value="banana"
        disabled
        onChange={() => {}}
      />
    </div>
  ),
};
