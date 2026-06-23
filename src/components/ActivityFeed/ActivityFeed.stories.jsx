import { ActivityFeed } from './ActivityFeed';

export default {
  title: 'Components/ActivityFeed',
  component: ActivityFeed,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 420, height: 500 }}>
        <Story />
      </div>
    ),
  ],
};

const SAMPLE_EVENTS = [
  {
    agentColor: '#2f5bea',
    agentShort: 'EC',
    agentName: 'ECD Agent',
    text: 'Approved & promoted to Shared Canvas',
    tag: 'promote',
    time: 'just now',
  },
  {
    agentColor: '#2e8157',
    agentShort: 'PR',
    agentName: 'Persona Review Agent',
    text: 'Returned structured feedback vs. persona "Maya"',
    tag: '',
    time: '1m',
  },
  {
    agentColor: '#6f57d4',
    agentShort: 'WF',
    agentName: 'Wireframe Agent',
    text: 'Spawned 3 directions in parallel · all Exploring',
    tag: 'parallel',
    time: '3m',
  },
  {
    agentColor: '#1f9d8f',
    agentShort: 'RE',
    agentName: 'Research Agent',
    text: 'Compiled competitive landscape report — 12 sources',
    tag: '',
    time: '8m',
  },
];

export const WithEvents = {
  args: { events: SAMPLE_EVENTS },
};

export const Empty = {
  args: { events: [] },
};

export const WithGateEvent = {
  args: {
    events: [
      {
        agentColor: '#2f5bea',
        agentShort: 'EC',
        agentName: 'ECD Agent',
        text: 'Flagged Design Brief ready for concepting',
        tag: 'gate',
        time: 'just now',
      },
    ],
  },
};

export const WithHumanEvent = {
  args: {
    events: [
      {
        agentColor: '#c2700f',
        agentShort: 'ST',
        agentName: 'Strategy Agent',
        text: 'Paused — awaiting stakeholder approval on brand direction',
        tag: 'human',
        time: '2m',
      },
    ],
  },
};
