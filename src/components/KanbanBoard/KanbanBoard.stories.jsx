import { KanbanBoard, KanbanColumn, KanbanCard } from './KanbanBoard';

export default {
  title: 'Components/KanbanBoard',
  component: KanbanBoard,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

/* ── Shared agent colors ── */
const AGENTS = {
  RE: { short: 'RE', name: 'Research Agent',      color: '#1f9d8f' },
  ST: { short: 'ST', name: 'Strategy Agent',       color: '#c2700f' },
  WF: { short: 'WF', name: 'Wireframe Agent',      color: '#6f57d4' },
  VD: { short: 'VD', name: 'Visual Design Agent',  color: '#d4456b' },
  PR: { short: 'PR', name: 'Persona Review Agent', color: '#2e8157' },
  EC: { short: 'EC', name: 'ECD Agent',            color: '#2f5bea' },
};

/* ── Sample cards per column ── */
const SAMPLE_CARDS = {
  exploring: [
    {
      kindLabel: 'WIREFRAME',
      kindColor: '#6f57d4',
      title: 'Mobile checkout — direction A',
      time: '4m',
      agent: AGENTS.WF,
      thumbnailType: 'wire',
    },
    {
      kindLabel: 'WIREFRAME',
      kindColor: '#6f57d4',
      title: 'Mobile checkout — direction B',
      time: '4m',
      agent: AGENTS.WF,
      thumbnailType: 'wire',
    },
    {
      kindLabel: 'WIREFRAME',
      kindColor: '#6f57d4',
      title: 'Mobile checkout — direction C',
      time: '5m',
      agent: AGENTS.WF,
      thumbnailType: 'wire',
    },
  ],
  review: [
    {
      kindLabel: 'HI-FI',
      kindColor: '#d4456b',
      title: 'Checkout v2 — warm gradient',
      time: '12m',
      agent: AGENTS.VD,
      thumbnailType: 'hifi',
      tone: '#d4456b',
    },
    {
      kindLabel: 'HI-FI',
      kindColor: '#d4456b',
      title: 'Checkout v2 — minimal dark',
      time: '15m',
      agent: AGENTS.VD,
      thumbnailType: 'hifi',
      tone: '#1a1a2e',
    },
  ],
  approved: [
    {
      kindLabel: 'HI-FI',
      kindColor: '#d4456b',
      title: 'Checkout v1 — teal trust',
      time: '38m',
      agent: AGENTS.VD,
      thumbnailType: 'hifi',
      tone: '#1f9d8f',
      fresh: true,
    },
  ],
  promoted: [
    {
      kindLabel: 'BRIEF',
      kindColor: '#c2700f',
      title: 'Strategy brief — Gen Z checkout',
      time: '1h',
      agent: AGENTS.ST,
      thumbnailType: 'brief',
    },
    {
      kindLabel: 'HI-FI',
      kindColor: '#2f5bea',
      title: 'Final checkout — approved by ECD',
      time: '2h',
      agent: AGENTS.EC,
      thumbnailType: 'hifi',
      tone: '#2f5bea',
    },
  ],
};

export const FullBoard = {
  render: () => (
    <KanbanBoard>
      <KanbanColumn label="Exploring" color="#c2700f" count={SAMPLE_CARDS.exploring.length}>
        {SAMPLE_CARDS.exploring.map((c, i) => (
          <KanbanCard
            key={i}
            kindLabel={c.kindLabel}
            kindColor={c.kindColor}
            title={c.title}
            time={c.time}
            agentName={c.agent.name}
            agentShort={c.agent.short}
            agentColor={c.agent.color}
            thumbnailType={c.thumbnailType}
            tone={c.tone}
            fresh={c.fresh}
          />
        ))}
      </KanbanColumn>

      <KanbanColumn label="In Review" color="#6f57d4" count={SAMPLE_CARDS.review.length}>
        {SAMPLE_CARDS.review.map((c, i) => (
          <KanbanCard
            key={i}
            kindLabel={c.kindLabel}
            kindColor={c.kindColor}
            title={c.title}
            time={c.time}
            agentName={c.agent.name}
            agentShort={c.agent.short}
            agentColor={c.agent.color}
            thumbnailType={c.thumbnailType}
            tone={c.tone}
            fresh={c.fresh}
          />
        ))}
      </KanbanColumn>

      <KanbanColumn label="Approved" color="#2e8157" count={SAMPLE_CARDS.approved.length}>
        {SAMPLE_CARDS.approved.map((c, i) => (
          <KanbanCard
            key={i}
            kindLabel={c.kindLabel}
            kindColor={c.kindColor}
            title={c.title}
            time={c.time}
            agentName={c.agent.name}
            agentShort={c.agent.short}
            agentColor={c.agent.color}
            thumbnailType={c.thumbnailType}
            tone={c.tone}
            fresh={c.fresh}
          />
        ))}
      </KanbanColumn>

      <KanbanColumn label="Promoted" color="#2f5bea" count={SAMPLE_CARDS.promoted.length}>
        {SAMPLE_CARDS.promoted.map((c, i) => (
          <KanbanCard
            key={i}
            kindLabel={c.kindLabel}
            kindColor={c.kindColor}
            title={c.title}
            time={c.time}
            agentName={c.agent.name}
            agentShort={c.agent.short}
            agentColor={c.agent.color}
            thumbnailType={c.thumbnailType}
            tone={c.tone}
            fresh={c.fresh}
          />
        ))}
      </KanbanColumn>
    </KanbanBoard>
  ),
};

export const SingleColumn = {
  render: () => (
    <div style={{ maxWidth: 300, padding: 20 }}>
      <KanbanBoard>
        <KanbanColumn label="Exploring" color="#c2700f" count={3}>
          {SAMPLE_CARDS.exploring.map((c, i) => (
            <KanbanCard
              key={i}
              kindLabel={c.kindLabel}
              kindColor={c.kindColor}
              title={c.title}
              time={c.time}
              agentName={c.agent.name}
              agentShort={c.agent.short}
              agentColor={c.agent.color}
              thumbnailType={c.thumbnailType}
            />
          ))}
        </KanbanColumn>
      </KanbanBoard>
    </div>
  ),
};

export const CardVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, padding: 20, background: 'var(--bg)' }}>
      <div style={{ width: 264 }}>
        <KanbanCard
          kindLabel="WIREFRAME"
          kindColor="#6f57d4"
          title="Wire thumbnail variant"
          time="2m"
          agentName="Wireframe Agent"
          agentShort="WF"
          agentColor="#6f57d4"
          thumbnailType="wire"
        />
      </div>
      <div style={{ width: 264 }}>
        <KanbanCard
          kindLabel="HI-FI"
          kindColor="#d4456b"
          title="HiFi thumbnail — fresh glow"
          time="8m"
          agentName="Visual Design Agent"
          agentShort="VD"
          agentColor="#d4456b"
          thumbnailType="hifi"
          tone="#d4456b"
          fresh
        />
      </div>
      <div style={{ width: 264 }}>
        <KanbanCard
          kindLabel="BRIEF"
          kindColor="#c2700f"
          title="Brief thumbnail variant"
          time="22m"
          agentName="Strategy Agent"
          agentShort="ST"
          agentColor="#c2700f"
          thumbnailType="brief"
        />
      </div>
    </div>
  ),
};
