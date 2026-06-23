import React from 'react';
import { Switch } from './Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
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
    label: 'Enable notifications',
    checked: false,
  },
};

export const On = {
  args: {
    label: 'Enable notifications',
    checked: true,
  },
};

export const Disabled = {
  args: {
    label: 'Enable notifications',
    checked: false,
    disabled: true,
  },
};

export const WithLabel = {
  render: () => {
    const [on, setOn] = React.useState(false);
    return (
      <Switch
        label={on ? 'Dark mode on' : 'Dark mode off'}
        checked={on}
        onChange={() => setOn((v) => !v)}
      />
    );
  },
};

export const AllStates = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Switch label="Off" checked={false} onChange={() => {}} />
      <Switch label="On" checked={true} onChange={() => {}} />
      <Switch label="Disabled off" checked={false} disabled onChange={() => {}} />
      <Switch label="Disabled on" checked={true} disabled onChange={() => {}} />
    </div>
  ),
};
