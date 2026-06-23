import React, { useState, useEffect } from 'react';
import { ProgressBar } from './ProgressBar';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['purple', 'teal', 'amber'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  },
};

export const Default = {
  args: { value: 60, variant: 'purple', size: 'md' },
};

export const WithLabel = {
  args: { value: 75, variant: 'purple', size: 'md', label: 'Upload progress', showValue: true },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <ProgressBar value={70} variant="purple" label="Purple" showValue />
      <ProgressBar value={55} variant="teal" label="Teal" showValue />
      <ProgressBar value={40} variant="amber" label="Amber" showValue />
    </div>
  ),
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <ProgressBar value={65} size="sm" label="Small (4px)" />
      <ProgressBar value={65} size="md" label="Medium (8px)" />
      <ProgressBar value={65} size="lg" label="Large (12px)" />
    </div>
  ),
};

export const Animated = {
  render: () => {
    const [progress, setProgress] = React.useState(0);
    React.useEffect(() => {
      const t = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) { clearInterval(t); return 100; }
          return p + 2;
        });
      }, 80);
      return () => clearInterval(t);
    }, []);
    return <ProgressBar value={progress} variant="purple" label="Loading…" showValue size="md" />;
  },
};
