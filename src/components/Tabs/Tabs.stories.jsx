import React from 'react';
import { Tabs, Tab } from './Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

const panels = {
  overview: 'Overview content: This panel shows a high-level summary of the project.',
  analytics: 'Analytics content: Charts, metrics, and trend data appear here.',
  settings: 'Settings content: Configure preferences and integrations here.',
};

export const Default = {
  render: () => {
    const [active, setActive] = React.useState('overview');
    return (
      <div>
        <Tabs value={active} onChange={setActive}>
          <Tab value="overview" label="Overview" />
          <Tab value="analytics" label="Analytics" />
          <Tab value="settings" label="Settings" />
        </Tabs>
        <div style={{ padding: '16px', color: 'var(--text)', fontSize: 'var(--text-base)' }}>
          {panels[active]}
        </div>
      </div>
    );
  },
};

export const WithDisabledTab = {
  render: () => {
    const [active, setActive] = React.useState('overview');
    return (
      <div>
        <Tabs value={active} onChange={setActive}>
          <Tab value="overview" label="Overview" />
          <Tab value="analytics" label="Analytics" disabled />
          <Tab value="settings" label="Settings" />
        </Tabs>
        <div style={{ padding: '16px', color: 'var(--text)', fontSize: 'var(--text-base)' }}>
          {panels[active]}
        </div>
      </div>
    );
  },
};

export const ManyTabs = {
  render: () => {
    const [active, setActive] = React.useState('one');
    return (
      <Tabs value={active} onChange={setActive}>
        {['one', 'two', 'three', 'four', 'five'].map((v) => (
          <Tab key={v} value={v} label={`Tab ${v}`} />
        ))}
      </Tabs>
    );
  },
};
