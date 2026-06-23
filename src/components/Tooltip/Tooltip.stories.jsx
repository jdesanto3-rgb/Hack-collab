import React from 'react';
import { Tooltip } from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    placement: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
  },
};

export const Default = {
  args: {
    content: 'Helpful tooltip text',
    placement: 'top',
    children: <button style={{ padding: '6px 14px', border: '1px solid var(--border2)', borderRadius: 'var(--radius)', background: 'var(--surface)', cursor: 'pointer' }}>Hover me</button>,
  },
};

export const AllPlacements = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center', justifyContent: 'center', padding: '48px' }}>
      {['top', 'bottom', 'left', 'right'].map((p) => (
        <Tooltip key={p} content={`Tooltip ${p}`} placement={p}>
          <button style={{ padding: '6px 14px', border: '1px solid var(--border2)', borderRadius: 'var(--radius)', background: 'var(--surface)', cursor: 'pointer' }}>{p}</button>
        </Tooltip>
      ))}
    </div>
  ),
};

export const OnText = {
  render: () => (
    <p style={{ color: 'var(--text)' }}>
      This sentence has a{' '}
      <Tooltip content="This term has extra context" placement="top">
        <span style={{ borderBottom: '1px dashed var(--purple)', color: 'var(--purple)', cursor: 'default' }}>key term</span>
      </Tooltip>
      {' '}with a tooltip.
    </p>
  ),
};
