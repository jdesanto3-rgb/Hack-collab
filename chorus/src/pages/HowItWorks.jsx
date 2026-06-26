import { useState } from 'react'
import Footer from '../components/Footer'
import { useTheme } from '../ThemeContext'

const STEPS = [
  {
    num: '01',
    title: 'A thread enters the model',
    short: 'A customer insight or brief enters Weave.',
    desc: 'A team member submits a brief — a customer insight, a product opportunity, a design direction. Weave ingests it, structures it into the living product model, and connects it to everything already known about the problem. No more context lost in Slack. No more briefs that arrive without history.',
    agents: ['Intentor', 'Scout'],
    color: '#7F77DD',
  },
  {
    num: '02',
    title: 'The right agents pick up the work',
    short: 'The right Executive Agent accepts ownership.',
    desc: 'The Executive Creative Director, Executive PM, or Executive Developer agent evaluates the brief and accepts ownership. They decompose the work into discrete threads and activate the appropriate specialist agents — each one preserving context as it executes, not discarding it.',
    agents: ['ECD Agent', 'EPM Agent', 'EDev Agent'],
    color: '#1D9E75',
  },
  {
    num: '03',
    title: 'Specialists execute — in parallel or sequence',
    short: 'Specialist agents weave their threads into the model.',
    desc: 'Specialist agents weave their threads into the model. Intentor structures design intent. Scout researches the competitive landscape. Echo generates behavioral personas. Sketch wireframes the flows. Every output lands on the shared canvas in real time — connected to the insight that caused it.',
    agents: ['Intentor', 'Scout', 'Echo', 'Mapper', 'Composer', 'Sketch'],
    color: '#378ADD',
  },
  {
    num: '04',
    title: 'A human reviews before anything moves',
    short: 'Named humans review and approve at defined gates.',
    desc: "Before any output promotes to the next stage, a named human reviewer is notified. They review the agent's work in full context — connected to the brief, the persona, the research, the decision history — and approve, reject, or redirect. Every gate is logged, timestamped, and auditable.",
    agents: [],
    color: '#EF9F27',
    humanGate: true,
  },
  {
    num: '05',
    title: 'Approved outputs strengthen the model',
    short: 'Weave updates the living product model automatically.',
    desc: 'Once a human approves, Weave updates the living product model. Design decisions connect to the research that informed them. Personas update across all connected flows. Requirements link back to the customer problems they solve. The thread is preserved. Nothing is lost.',
    agents: [],
    color: '#7F77DD',
    syncLayer: true,
  },
  {
    num: '06',
    title: 'Sprint-ready. Every thread traceable.',
    short: 'Executive stakeholder signs off. Work ships.',
    desc: 'The final gate belongs to the executive stakeholder. They review the assembled output — design, requirements, and implementation notes aligned — and approve promotion. Sprinto bundles everything into prioritized sprint stories. Every ticket traces back to the customer insight that started the thread.',
    agents: ['Sprinto', 'Builder'],
    color: '#1D9E75',
  },
]

const ARCHS = [
  {
    title: 'Sequential Pipeline',
    desc: "Agents fire one after another, each output becoming the next agent's input. The thread builds continuously — no context dropped between steps.",
    svg: (
      <svg width="80" height="48" viewBox="0 0 80 48">
        {[0,1,2].map(i => (
          <g key={i}>
            <circle cx={12 + i * 28} cy="24" r="10" fill="none" stroke="var(--purple)" strokeWidth="1.5" opacity="0.7"/>
            {i < 2 && <path d={`M${22 + i*28} 24 L${34 + i*28} 24`} stroke="var(--border-hover)" strokeWidth="1.5"/>}
          </g>
        ))}
      </svg>
    ),
  },
  {
    title: 'Parallel Execution',
    desc: 'Multiple agents run simultaneously on different aspects of the same problem. All threads converge back into the living product model.',
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
    desc: 'A central agent evaluates the brief and directs each thread to the right specialist. Work always reaches the agent best equipped to handle it.',
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
    desc: 'Agents pause at defined checkpoints for human review. The most important decisions remain human. AI ensures those decisions are informed by complete context.',
    svg: (
      <svg width="80" height="48" viewBox="0 0 80 48">
        <circle cx="12" cy="24" r="9" fill="none" stroke="var(--purple)" strokeWidth="1.5" opacity="0.7"/>
        <path d="M21 24 L32 24" stroke="var(--border-hover)" strokeWidth="1.5"/>
        <rect x="32" y="14" width="20" height="20" rx="4" fill="none" stroke="var(--amber)" strokeWidth="1.8"/>
        <circle cx="42" cy="22" r="2" fill="var(--amber)" opacity="0.8"/>
        <path d="M52 24 L62 24" stroke="var(--border-hover)" strokeWidth="1.5"/>
        <circle cx="70" cy="24" r="9" fill="none" stroke="var(--teal)" strokeWidth="1.5" opacity="0.7"/>
      </svg>
    ),
  },
  {
    title: 'Dynamic Sub-Agents',
    desc: 'Agents spawn specialist child agents based on work discovered at runtime. The system adapts to the complexity of the problem, not the other way around.',
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

function outerFrame(isCanvas, isObsidian, content) {
  if (isCanvas) return (
    <div className="site-outer-frame">
      <div className="frame-dot frame-dot--tl"></div>
      <div className="frame-dot frame-dot--tr"></div>
      <div className="frame-dot frame-dot--bl"></div>
      <div className="frame-dot frame-dot--br"></div>
      {content}
    </div>
  )
  if (isObsidian) return (
    <div className="site-outer-frame">
      <div className="obs-frame-dot obs-frame-dot--tl"></div>
      <div className="obs-frame-dot obs-frame-dot--tr"></div>
      <div className="obs-frame-dot obs-frame-dot--bl"></div>
      <div className="obs-frame-dot obs-frame-dot--br"></div>
      {content}
    </div>
  )
  return content
}

export default function HowItWorks() {
  const [active, setActive] = useState(0)
  const step = STEPS[active]
  const { theme } = useTheme()
  const isCanvas = theme === 'canvas'
  const isObsidian = theme === 'obsidian'

  const content = (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">Process</p>
          <h1 className="section-title">From first insight to sprint-ready.<br />Nothing lost in between.</h1>
          <p className="section-sub mx-auto">
            Every project follows the same governed pipeline. Specialist agents do the work. Humans approve at gates. The living product model stays current for everyone.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="hiw-layout">
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

            <div className="step-detail">
              <div className="step-detail-num" style={{ color: `${step.color}20` }}>{step.num}</div>
              <h2 style={{ color: step.color }}>{step.title}</h2>
              <p>{step.desc}</p>
              {step.agents.length > 0 && (
                <>
                  <p style={{ fontSize: 13, color: 'var(--text-3)', marginBottom: 12, marginTop: -20 }}>Agents involved</p>
                  <div className="step-agents">
                    {step.agents.map(a => (
                      <span key={a} className="agent-tag">{a}</span>
                    ))}
                  </div>
                </>
              )}
              {step.humanGate && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 8 }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(239,159,39,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF9F27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                    </svg>
                  </div>
                  <span style={{ fontSize: 14, color: '#EF9F27' }}>Human gate — no agents pass this point without approval</span>
                </div>
              )}
              {step.syncLayer && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 8 }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(127,119,221,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7F77DD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/>
                      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
                    </svg>
                  </div>
                  <span style={{ fontSize: 14, color: 'var(--purple)' }}>Sync layer — the living product model updates automatically</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <p className="section-label">Architecture Patterns</p>
          <h2 className="section-title">How Weave Orchestrates Intelligence</h2>
          <p className="section-sub" style={{ marginBottom: 48 }}>
            Weave supports five orchestration patterns — applied automatically based on the work type. The system chooses the right pattern. Teams never have to.
          </p>
          <div className="arch-grid">
            {ARCHS.map((a, i) => (
              <div key={i} className="arch-card">
                {isCanvas && <div className="canvas-card-rail"><span className="rail-left">{`SYS.${String(i+1).padStart(2,'0')} // ARCH`}</span><span className="rail-right">STATUS: ACTIVE</span></div>}
                {isObsidian && <div className="obs-card-rail"><span className="obs-rail-left">{`SYS.${String(i+1).padStart(2,'0')} // ARCH`}</span><span className="obs-rail-right">STATUS: ACTIVE</span></div>}
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

  return outerFrame(isCanvas, isObsidian, content)
}
