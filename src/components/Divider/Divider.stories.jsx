import React from 'react';
import { Divider } from './Divider';

export default {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    spacing: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};

export const Default = {
  render: () => (
    <div style={{ color: 'var(--text)', fontSize: 'var(--text-base)' }}>
      <p>Content above the divider.</p>
      <Divider />
      <p>Content below the divider.</p>
    </div>
  ),
};

export const WithLabel = {
  render: () => (
    <div style={{ color: 'var(--text)', fontSize: 'var(--text-base)' }}>
      <p>Section one content.</p>
      <Divider label="OR" />
      <p>Section two content.</p>
    </div>
  ),
};

export const AllSpacings = {
  render: () => (
    <div style={{ color: 'var(--text)', fontSize: 'var(--text-base)' }}>
      <p>Small spacing</p>
      <Divider spacing="sm" />
      <p>Medium spacing</p>
      <Divider spacing="md" />
      <p>Large spacing</p>
      <Divider spacing="lg" />
      <p>End</p>
    </div>
  ),
};

export const Vertical = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', height: '40px', color: 'var(--text)', fontSize: 'var(--text-base)' }}>
      <span>Item one</span>
      <Divider orientation="vertical" />
      <span>Item two</span>
      <Divider orientation="vertical" />
      <span>Item three</span>
    </div>
  ),
};
