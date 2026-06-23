import { AgentBadge } from './AgentBadge';

export default {
  title: 'Components/AgentBadge',
  component: AgentBadge,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
    shape: { control: 'radio', options: ['square', 'circle'] },
  },
};

export const Default = {
  args: {
    initials: 'RE',
    color: '#1f9d8f',
    size: 'md',
    shape: 'square',
  },
};

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <AgentBadge initials="RE" color="#1f9d8f" size="sm" />
      <AgentBadge initials="RE" color="#1f9d8f" size="md" />
      <AgentBadge initials="RE" color="#1f9d8f" size="lg" />
      <AgentBadge initials="RE" color="#1f9d8f" size="xl" />
    </div>
  ),
};

export const Shapes = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        <AgentBadge initials="RE" color="#1f9d8f" size="lg" shape="square" />
        <span style={{ fontSize: 11, color: 'var(--text3)' }}>square</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        <AgentBadge initials="RE" color="#1f9d8f" size="lg" shape="circle" />
        <span style={{ fontSize: 11, color: 'var(--text3)' }}>circle</span>
      </div>
    </div>
  ),
};

export const AllAgents = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <AgentBadge initials="RE" color="#1f9d8f" size="lg" />
      <AgentBadge initials="ST" color="#c2700f" size="lg" />
      <AgentBadge initials="WF" color="#6f57d4" size="lg" />
      <AgentBadge initials="VD" color="#d4456b" size="lg" />
      <AgentBadge initials="PR" color="#2e8157" size="lg" />
      <AgentBadge initials="EC" color="#2f5bea" size="lg" />
    </div>
  ),
};
