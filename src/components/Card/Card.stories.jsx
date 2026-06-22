import { Card } from './Card';
import { Button } from '../Button/Button';
import { Badge } from '../Badge/Badge';

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  parameters: {
    layout: 'padded',
  },
};

export const Default = {
  args: {
    children: 'This is some card content. Cards are used to group related information.',
  },
};

export const WithTitle = {
  args: {
    title: 'Card Title',
    children: 'Content goes inside the card body, below the header.',
  },
};

export const SmallPadding = {
  args: {
    title: 'Compact Card',
    padding: 'sm',
    children: 'Compact padding for dense UIs.',
  },
};

export const LargePadding = {
  args: {
    title: 'Spacious Card',
    padding: 'lg',
    children: 'More breathing room for editorial or marketing layouts.',
  },
};

export const WithActions = {
  render: () => (
    <Card title="Project Overview">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <p style={{ margin: 0, fontSize: '13px', color: 'var(--text2)' }}>
          This project is currently in progress with 3 open tasks.
        </p>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Badge variant="purple">In Progress</Badge>
          <Badge variant="amber">2 Blockers</Badge>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button variant="primary" size="sm">View Tasks</Button>
          <Button variant="ghost" size="sm">Archive</Button>
        </div>
      </div>
    </Card>
  ),
};

export const CardGrid = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
      <Card title="Revenue">
        <p style={{ margin: 0, fontSize: '24px', fontWeight: 600, color: 'var(--teal)' }}>$48,200</p>
        <p style={{ margin: '4px 0 0', fontSize: '11px', color: 'var(--text3)' }}>+12% vs last month</p>
      </Card>
      <Card title="Active Users">
        <p style={{ margin: 0, fontSize: '24px', fontWeight: 600, color: 'var(--purple)' }}>1,842</p>
        <p style={{ margin: '4px 0 0', fontSize: '11px', color: 'var(--text3)' }}>+5% vs last month</p>
      </Card>
      <Card title="Open Issues">
        <p style={{ margin: 0, fontSize: '24px', fontWeight: 600, color: 'var(--amber)' }}>23</p>
        <p style={{ margin: '4px 0 0', fontSize: '11px', color: 'var(--text3)' }}>-3 since yesterday</p>
      </Card>
    </div>
  ),
};
