import React from 'react';
import { Spinner } from './Spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['purple', 'teal', 'white', 'muted'] },
  },
};

export const Default = {
  args: { size: 'md', variant: 'purple', label: 'Loading…' },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <Spinner size="sm" variant="purple" />
      <Spinner size="md" variant="purple" />
      <Spinner size="lg" variant="purple" />
    </div>
  ),
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
        <Spinner size="md" variant="purple" />
        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text2)' }}>purple</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
        <Spinner size="md" variant="teal" />
        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text2)' }}>teal</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', background: 'var(--purple)', padding: '12px', borderRadius: 'var(--radius)' }}>
        <Spinner size="md" variant="white" />
        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--surface)' }}>white</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
        <Spinner size="md" variant="muted" />
        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text2)' }}>muted</span>
      </div>
    </div>
  ),
};

export const InlineUsage = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text2)', fontSize: 'var(--text-base)' }}>
      <Spinner size="sm" variant="purple" />
      Loading data…
    </div>
  ),
};
