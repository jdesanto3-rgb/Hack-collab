import { useState } from 'react';
import { Input } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'url'],
    },
    onChange: { action: 'changed' },
  },
  parameters: {
    layout: 'padded',
  },
};

export const Default = {
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
    type: 'email',
  },
};

export const WithValue = {
  render: () => {
    const [val, setVal] = useState('hello@provokesolutions.com');
    return (
      <Input
        label="Email"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        type="email"
      />
    );
  },
};

export const WithError = {
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
    value: 'not-an-email',
    error: 'Please enter a valid email address.',
  },
};

export const Disabled = {
  args: {
    label: 'Username',
    defaultValue: 'jdoe',
    disabled: true,
  },
};

export const NoLabel = {
  args: {
    placeholder: 'Search…',
    type: 'search',
  },
};

export const Password = {
  args: {
    label: 'Password',
    placeholder: '••••••••',
    type: 'password',
  },
};
