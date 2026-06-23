import { useState } from 'react';
import { PipelineRail } from './PipelineRail';

export default {
  title: 'Components/PipelineRail',
  component: PipelineRail,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 280, height: 560 }}>
        <Story />
      </div>
    ),
  ],
};

const AGENTS = [
  { key: 'research',  name: 'Research Agent',       short: 'RE', color: '#1f9d8f' },
  { key: 'strategy',  name: 'Strategy Agent',        short: 'ST', color: '#c2700f' },
  { key: 'wireframe', name: 'Wireframe Agent',       short: 'WF', color: '#6f57d4' },
  { key: 'visual',    name: 'Visual Design Agent',   short: 'VD', color: '#d4456b' },
  { key: 'persona',   name: 'Persona Review Agent',  short: 'PR', color: '#2e8157' },
  { key: 'ecd',       name: 'ECD Agent',             short: 'EC', color: '#2f5bea' },
];

export const Idle = {
  args: { agents: AGENTS, currentPhase: 0 },
};

export const InProgress = {
  args: { agents: AGENTS, currentPhase: 3 }, // Wireframe Agent active
};

export const Complete = {
  args: { agents: AGENTS, currentPhase: 7 }, // all done (> agents.length)
};

export const Interactive = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [phase, setPhase] = useState(2);
    return (
      <div style={{ maxWidth: 280 }}>
        <div style={{ marginBottom: 12, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {AGENTS.map((a, i) => (
            <button
              key={a.key}
              onClick={() => setPhase(i + 1)}
              style={{
                fontSize: 10,
                padding: '3px 8px',
                borderRadius: 5,
                border: `1.5px solid ${a.color}`,
                cursor: 'pointer',
                background: phase === i + 1 ? a.color : '#fff',
                color: phase === i + 1 ? '#fff' : a.color,
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 600,
              }}
            >
              {a.short}
            </button>
          ))}
        </div>
        <div style={{ height: 520 }}>
          <PipelineRail
            agents={AGENTS}
            currentPhase={phase}
            onReset={() => setPhase(0)}
          />
        </div>
      </div>
    );
  },
};
