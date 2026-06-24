import { useState } from 'react'
import Footer from '../components/Footer'

const STEPS = [
  {
    num: '01',
    title: 'Brief Ingestion',
    short: 'A structured brief enters Chorus from any team.',
    desc: 'A team member submits a brief — a product feature, design direction, or technical spec. Chorus ingests it, structures it into machine-readable intent, and queues it for routing. No more briefs lost in Slack.',
    agents: ['Brief Parser Agent', 'Context Enricher', 'Priority Router'],
    color: '#7F77DD',
  },
  {
    num: '02',
    title: 'Executive Agent Routing',
    short: 'The right Executive Agent picks up the work.',
    desc: 'The Executive Creative Director, Executive PM, or Executive Developer agent evaluates the brief and accepts ownership. They decompose the work into discrete tasks and spin up the appropriate sub-agents for execution.',
    agents: ['ECD Agent', 'EPM Agent', 'EDev Agent', 'Task Decomposer'],
    color: '#1D9E75',
  },
  {
    num: '03',
    title: 'Sub-Agent Execution',
    short: 'Specialist agents execute the work in parallel.',
    desc: 'Sub-agents tackle their assigned tasks — Wireframe agents sketch layouts, Requirements agents draft acceptance criteria, Scaffold agents generate code structures. All work surfaces on the shared canvas.',
    agents: ['Wireframe Agent', 'Visual Agent', 'Requirements Agent', 'Scaffold Agent', 'Copy Agent'],
    color: '#378ADD',
  },
  {
    num: '04',
    title: 'Human Gate Review',
    short: 'Named humans review and approve at defined gates.',
    desc: 'Before any output promotes to the next stage, a named human reviewer is notified. Maya reviews design output, Jordan reviews product specs, Alex reviews code. Each gate is logged, timestamped, and auditable.',
    agents: ['Maya (Design Lead)', 'Jordan (PM)', 'Alex (Dev Lead)', 'Gate Notifier'],
    color: '#EF9F27',
  },
  {
    num: '05',
    title: 'Cross-Team Sync',
    short: 'Approved outputs sync across all three disciplines.',
    desc: 'Once a human approves, Chorus automatically syncs the output to all affected teams. Design tokens flow to Dev. Approved specs land in Design. No more hand-off meetings. No more context lost between tools.',
    agents: ['Sync Coordinator', 'Conflict Resolver', 'Notification Agent'],
    color: '#7F77DD',
  },
  {
    num: '06',
    title: 'Promotion & Deploy',
    short: 'Chris (Exec) signs off. Work ships.',
    desc: 'The final gate belongs to the Executive stakeholder. Chris reviews the assembled output — design, requirements, and code aligned — and approves promotion. The work deploys with a full audit trail attached.',
    agents: ['Chris (Exec)', 'Audit Logger', 'Deploy Trigger', 'Notification Agent'],
    color: '#1D9E75',
  },
]

const ARCHS = [
  {
    title: 'Sequential Pipeline',
    desc: 'Agents fire one after another. Output of each step feeds the next.',
    svg: (
      <svg width="80" height="48" viewBox="0 0 80 48">
        {[0,1,2].map(i => (
          <g key={i}>
            <circle cx={12 + i * 28} cy="24" r="10" fill="none" stroke="var(--purple)" strokeWidth="1.5" opacity="0.7"/>
            {i < 2 && <path d={`M${22 + i*28} 24 L${34 + i*28} 24`} stroke="var(--border-hover)" strokeWidth="1.5" markerEnd="url(#arr)"/>}
          </g>
        ))}
        <defs>
          <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="var(--border-hover)"/>
          </marker>
        </defs>
      </svg>
    ),
  },
  {
    title: 'Parallel Execution',
    desc: 'Multiple agents run simultaneously on different tasks.',
    svg: (
      <svg width="80" height="48" viewBox="0 0 80 48">
        <circle cx="12" cy="24" r="10" fill="none" stroke="var(--teal)" strokeWidth="1.5" opacity="0.7"/>
        {[10,24,38].map(y => (
          <g key={y}>
            <path d={`M22 24 L50 ${y}`} stroke="var(--border-hover)" strokeWidth="1.2"/>
            <circle cx="60" cy={y} r="8" fill="none" stroke="var(--teal)" strokeWidth="1.5" opacity="0.6"/>
          </g>
        ))}
      </svg>
    ),
  },
  {
    title: 'Router Agent',
    desc: 'A central agent directs work to the right specialist.',
    svg: (
      <svg width="80" height="48" viewBox="0 0 80 48">
        <circle cx="40" cy="24" r="10" fill="none" stroke="var(--blue)" strokeWidth="1.8" opacity="0.8"/>
        {[8, 24, 40].map((y, i) => (
          <g key={i}>
            <circle cx="72" cy={y} r="6" fill="none" stroke="var(--blue)" strokeWidth="1.2" opacity="0.5"/>
            <path d={`M50 24 L66 ${y}`} stroke="var(--border-hover)" strokeWidth="1.2"/>
            <circle cx="8" cy={y} r="6" fill="none" stroke="var(--border-hover)" strokeWidth="1.2" opacity="0.5"/>
            <path d={`M14 ${y} L30 24`} stroke="var(--border-hover)" strokeWidth="1" strokeDasharray="3,2"/>
          </g>
        ))}
      </svg>
    ),
  },
  {
    title: 'Human-in-Loop Gates',
    desc: 'Agents pause for human review at defined checkpoints.',
    svg: (
      <svg width="80" height="48" viewBox="0 0 80 48">
        <circle cx="12" cy="24" r="9" fill="none" stroke="var(--purple)" strokeWidth="1.5" opacity="0.7"/>
        <path d="M21 24 L32 24" stroke="var(--border-hover)" strokeWidth="1.5"/>
        <rect x="32" y="14" width="20" height="20" rx="4" fill="none" stroke="var(--amber)" strokeWidth="1.8"/>
        <path d="M42 24" stroke="var(--amber)" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="42" cy="22" r="2" fill="var(--amber)" opacity="0.8"/>
        <path d="M52 24 L62 24" stroke="var(--border-hover)" strokeWidth="1.5"/>
        <circle cx="70" cy="24" r="9" fill="none" stroke="var(--teal)" strokeWidth="1.5" opacity="0.7"/>
      </svg>
    ),
  },
  {
    title: 'Dynamic Sub-Agents',
    desc: 'Agents spawn child agents based on work discovered at runtime.',
    svg: (
      <svg width="80" height="48" viewBox="0 0 80 48">
        <circle cx="16" cy="24" r="10" fill="none" stroke="var(--blue)" strokeWidth="1.8" opacity="0.8"/>
        {[[48,10],[52,24],[48,38]].map(([x,y], i) => (
          <g key={i}>
            <path d={`M26 24 L${x-6} ${y}`} stroke="var(--border-hover)" strokeWidth="1.2" strokeDasharray="3,2"/>
            <circle cx={x} cy={y} r="7" fill="none" stroke="var(--blue)" strokeWidth="1.2" opacity="0.5"/>
          </g>
        ))}
        {[[66,10],[70,24],[66,38]].map(([x,y], i) => (
          <g key={i}>
            <path d={`M${[54,58,54][i]} ${[10,24,38][i]} L${x-5} ${y}`} stroke="var(--border-hover)" strokeWidth="1" strokeDasharray="2,2"/>
            <circle cx={x} cy={y} r="5" fill="none" stroke="var(--blue)" strokeWidth="1" opacity="0.35"/>
          </g>
        ))}
      </svg>
    ),
  },
]

export default function HowItWorks() {
  const [active, setActive] = useState(0)
  const step = STEPS[active]

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">Process</p>
          <h1 className="section-title">From Brief to Approved<br />in Six Steps</h1>
          <p className="section-sub mx-auto">
            Every project follows the same governed pipeline. Agents do the work, humans approve at gates, and nothing ships without a signature.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="hiw-layout">
            {/* Step list */}
            <div className="step-list">
              {STEPS.map((s, i) => (
                <button
                  key={i}
                  className={`step-item${active === i ? ' active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                >
                  <div className="step-num">{s.num}</div>
                  <div className="step-info">
                    <h4>{s.title}</h4>
                    <p>{s.short}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Detail panel */}
            <div className="step-detail">
              <div className="step-detail-num" style={{ color: `${step.color}20` }}>{step.num}</div>
              <h2 style={{ color: step.color }}>{step.title}</h2>
              <p>{step.desc}</p>
              <p style={{ fontSize: 13, color: 'var(--text-3)', marginBottom: 12, marginTop: -20 }}>Agents involved</p>
              <div className="step-agents">
                {step.agents.map(a => (
                  <span key={a} className="agent-tag">{a}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Architectures */}
      <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <p className="section-label">Architecture Patterns</p>
          <h2 className="section-title">Five Agent Architectures</h2>
          <p className="section-sub" style={{ marginBottom: 48 }}>
            Chorus orchestrates agents using proven patterns from multi-agent systems research, adapted for enterprise workflows.
          </p>
          <div className="arch-grid">
            {ARCHS.map((a, i) => (
              <div key={i} className="arch-card">
                <div style={{ height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {a.svg}
                </div>
                <h4>{a.title}</h4>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
