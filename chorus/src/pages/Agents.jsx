import Footer from '../components/Footer'
import { useTheme } from '../ThemeContext'

const EXEC_AGENTS = [
  {
    name: 'Executive Creative Director',
    abbr: 'ECD',
    role: 'Design Continuity Agent',
    color: '#9590e8',
    bg: 'rgba(149,144,232,0.12)',
    caps: [
      'Orchestrates all design specialist agents',
      'Enforces brand standards and design system rules',
      'Generates design token proposals',
      'Gates all design output before human review',
      'Preserves the thread between brief and visual output',
    ],
    governed: 'Maya (Design Lead)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
  },
  {
    name: 'Executive Product Manager',
    abbr: 'EPM',
    role: 'Product Continuity Agent',
    color: '#1D9E75',
    bg: 'rgba(29,158,117,0.12)',
    caps: [
      'Decomposes briefs into the living product model',
      'Orchestrates all product specialist agents',
      'Aligns output with business objectives',
      'Generates acceptance criteria and DoD checklists',
      'Gates product specs before human review',
    ],
    governed: 'Jordan (PM)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
  },
  {
    name: 'Executive Developer',
    abbr: 'EDev',
    role: 'Engineering Continuity Agent',
    color: '#378ADD',
    bg: 'rgba(55,138,221,0.12)',
    caps: [
      'Orchestrates all engineering specialist agents',
      'Enforces coding standards and architecture rules',
      'Reviews technical specs against requirements',
      'Gates all code output before human review',
      'Ensures every component traces back to the design decision behind it',
    ],
    governed: 'Alex (Dev Lead)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    name: 'Human Gate Nodes',
    abbr: 'HGN',
    role: 'Approval & Review',
    color: '#EF9F27',
    bg: 'rgba(239,159,39,0.12)',
    caps: [
      'Named reviewers assigned per discipline',
      'Receive structured notifications at gate events',
      'Approve, reject, or request revisions',
      'All decisions logged with timestamp and context',
      'Can delegate to another named human',
    ],
    governed: 'Chris (Executive)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
]

const SAGE_GROUPS = [
  {
    label: 'Under ECD — Creative Direction',
    color: '#9590e8',
    agents: [
      { name: 'Intentor', role: 'Design Intent Agent', governed: 'ECD Agent', caps: ['Translates plain-English goals into structured design intent', 'Preserves the thread between the original brief and everything that follows', 'Outputs Jira-convertible epics and Confluence briefs'] },
      { name: 'Stormy', role: 'Idea Brainstorming Agent', governed: 'ECD Agent', caps: ['Generates 3–5 UX concepts with pros, cons, effort level, and user impact', 'Every concept stays connected to the customer need that caused it', 'Outputs Notion brainstorm docs and effort/impact quadrant maps'] },
      { name: 'Ranker', role: 'Prioritization Agent', governed: 'ECD Agent', caps: ['Ranks concepts by feasibility and ROI', 'Flags fast wins and high-risk bets', 'The reasoning behind every ranking is preserved in the model'] },
      { name: 'Spark', role: 'Inspiration Agent', governed: 'ECD Agent', caps: ['Pulls annotated UI examples from leading products', 'Includes accessibility and interaction design guidance', 'Assembles a visual reference board connected to the product brief'] },
      { name: 'Composer', role: 'Creative Brief Agent', governed: 'ECD Agent', caps: ['Synthesizes concept, persona, goals, and research into a complete creative brief', 'Outputs visual tone guide and design rationale', 'Can export to Notion, Confluence, or PDF'] },
      { name: 'Sketch', role: 'Wireframe & Prototype Agent', governed: 'ECD Agent', caps: ['Builds mid-fidelity wireframes and annotated user flows', 'Every layout decision annotated with the rationale that caused it', 'Exports to Figma with design tokens'] },
      { name: 'Lens', role: 'Validation Agent', governed: 'ECD Agent', caps: ['Tests design against original goals, KPIs, and persona needs', 'Flags heuristic and accessibility issues', 'Scores solution effectiveness before refinement'] },
      { name: 'Polish', role: 'Refinement Agent', governed: 'ECD Agent', caps: ['Suggests UI tweaks, clearer copy, and A/B variants', 'Ensures design is sprint-ready before handoff', 'Every change traced back to the original brief'] },
    ],
  },
  {
    label: 'Under EPM — Product Management',
    color: '#1D9E75',
    agents: [
      { name: 'Scout', role: 'Research Agent', governed: 'EPM Agent', caps: ['Pulls competitor UX patterns, user reviews, and best practices', 'Surfaces accessibility risks and user pain points', 'Every finding connected to the product problem being solved'] },
      { name: 'Echo', role: 'Persona Generator Agent', governed: 'EPM Agent', caps: ['Creates behavioral personas from domain and research brief', 'Includes motivations, frustrations, and access needs', 'Every persona stays connected to the evidence that produced it'] },
      { name: 'Mapper', role: 'Opportunity Mapping Agent', governed: 'EPM Agent', caps: ['Translates persona and research into UX jobs-to-be-done', 'Highlights friction points and recommends success metrics', 'Every opportunity traced to a customer need'] },
      { name: 'Sprinto', role: 'Sprint Planning Agent', governed: 'EPM Agent', caps: ['Bundles user stories into prioritized, role-based sprint plans', 'Flags risk — new components, untested flows', 'Every ticket traces back to the customer insight that started the thread'] },
    ],
  },
  {
    label: 'Under EDev — Engineering',
    color: '#378ADD',
    agents: [
      { name: 'Builder', role: 'User Stories Agent', governed: 'EDev Agent', caps: ['Writes dev-ready user stories and acceptance criteria', 'Every story links back to the requirement, persona, and customer problem behind it', 'Formats for Jira, Linear, or custom templates'] },
      { name: 'Proof', role: 'Test Coverage Agent', governed: 'EDev Agent', caps: ['Produces unit and integration test stubs for generated components', 'Validates coverage before pull request is drafted'] },
      { name: 'Audit', role: 'Code Quality Agent', governed: 'EDev Agent', caps: ['Runs linting, pattern checks, and consistency analysis', 'Ensures quality before any code reaches human review'] },
      { name: 'Ship', role: 'Pull Request Agent', governed: 'EDev Agent', caps: ['Creates a draft pull request with component package and implementation notes', 'Every line of code traceable to the design decision behind it'] },
    ],
  },
]

const SAGE_ICONS = {
  default: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
    </svg>
  ),
}

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

export default function Agents() {
  const { theme } = useTheme()
  const isCanvas = theme === 'canvas'
  const isObsidian = theme === 'obsidian'

  const content = (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">The Workforce</p>
          <h1 className="section-title">Meet the Workforce</h1>
          <p className="section-sub mx-auto">
            Weave runs two layers of agents. Executive Agents govern and gate the work. Specialist agents execute it. Every agent has a defined role, a defined authority, and a defined ceiling — and a human in the loop above them. Agents don't replace people. They preserve the thread between people.
          </p>
        </div>
      </section>

      {/* Executive Agents */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <p className="section-label">Executive Layer</p>
          <h2 className="section-title" style={{ fontSize: 32, marginBottom: 40 }}>Executive Agents & Human Gates</h2>
          <div className="agents-grid">
            {EXEC_AGENTS.map((a, i) => (
              <div key={i} className="agent-card">
                {isCanvas && <div className="canvas-card-rail"><span className="rail-left">{`SYS.${String(i+1).padStart(2,'0')} // EXEC`}</span><span className="rail-right">STATUS: LIVE</span></div>}
                {isObsidian && <div className="obs-card-rail"><span className="obs-rail-left">{`SYS.${String(i+1).padStart(2,'0')} // EXEC`}</span><span className="obs-rail-right">STATUS: LIVE</span></div>}
                <div className="agent-avatar" style={{ background: a.bg, color: a.color }}>{a.icon}</div>
                <h3>{a.name}</h3>
                <p className="agent-role">{a.role}</p>
                <ul className="agent-caps-list">
                  {a.caps.map(c => <li key={c}>{c}</li>)}
                </ul>
                <div className="agent-governed">Governed by: <span>{a.governed}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAGE Specialists */}
      <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <p className="section-label">Specialist Agents</p>
          <h2 className="section-title">The Specialist Agents</h2>
          <p className="section-sub" style={{ marginBottom: 64 }}>
            Specialist agents are the named specialist workforce inside Weave. They don't wait to be summoned — they respond to the product model as it evolves, preserve context at every step, and surface decisions at the right moment for human review.
          </p>

          {SAGE_GROUPS.map((group, gi) => (
            <div key={gi} style={{ marginBottom: 64 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <div style={{ width: 3, height: 20, borderRadius: 2, background: group.color }} />
                <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-2)' }}>{group.label}</h3>
              </div>
              <div className="agents-grid">
                {group.agents.map((a, i) => (
                  <div key={i} className="agent-card">
                    {isCanvas && <div className="canvas-card-rail"><span className="rail-left">{`SYS.${gi+1}.${String(i+1).padStart(2,'0')} // SAGE`}</span><span className="rail-right">STATUS: ACTIVE</span></div>}
                    {isObsidian && <div className="obs-card-rail"><span className="obs-rail-left">{`SYS.${gi+1}.${String(i+1).padStart(2,'0')} // SAGE`}</span><span className="obs-rail-right">STATUS: ACTIVE</span></div>}
                    <div className="agent-avatar" style={{ background: group.color + '18', color: group.color }}>
                      {SAGE_ICONS.default}
                    </div>
                    <h3>{a.name}</h3>
                    <p className="agent-role">{a.role}</p>
                    <ul className="agent-caps-list">
                      {a.caps.map(c => <li key={c}>{c}</li>)}
                    </ul>
                    <div className="agent-governed">Governed by: <span>{a.governed}</span></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Collaboration visual */}
      <section className="section" style={{ borderTop: '1px solid var(--border)', paddingTop: 80 }}>
        <div className="container">
          <p className="section-label">Collaboration Model</p>
          <h2 className="section-title">How They Work Together</h2>
          <p className="section-sub" style={{ marginBottom: 48 }}>
            Executive Agents govern and gate. Specialist agents execute and preserve context. Humans approve. The system is event-driven — when a thread in the product model changes, the right agents respond automatically. Nothing is disconnected. Nothing is lost.
          </p>

          <div className="collab-diagram" id="collabDiagram">

            <div className="collab-label">
              PARALLEL EXECUTION ↔ SEQUENTIAL PIPELINE ↔ EVENT-DRIVEN
            </div>

            <div className="collab-grid">

              {/* ── DESIGN COLUMN ── */}
              <div className="collab-column">
                <div className="collab-exec collab-exec--design">
                  <div className="collab-exec-ring"></div>
                  <span className="collab-exec-label">ECD</span>
                  <span className="collab-exec-sub">Executive Creative Director</span>
                </div>
                <div className="collab-connector">
                  <div className="collab-connector-line"></div>
                  <div className="collab-connector-dot"></div>
                </div>
                <div className="collab-gate">
                  <span className="collab-gate-icon">⏸</span>
                  <span className="collab-gate-label">Human Gate</span>
                </div>
                <div className="collab-connector">
                  <div className="collab-connector-line"></div>
                  <div className="collab-connector-dot"></div>
                </div>
                <div className="collab-agents">
                  <div className="collab-agent collab-agent--design">
                    <span className="collab-agent-name">Intentor</span>
                    <span className="collab-agent-role">design intent</span>
                  </div>
                  <div className="collab-agent collab-agent--design">
                    <span className="collab-agent-name">Sketch</span>
                    <span className="collab-agent-role">wireframes</span>
                  </div>
                  <div className="collab-agent collab-agent--design">
                    <span className="collab-agent-name">Lens</span>
                    <span className="collab-agent-role">validation</span>
                  </div>
                </div>
              </div>

              {/* ── CENTER — WEAVE CANVAS ── */}
              <div className="collab-center">
                <div className="collab-canvas-ring collab-canvas-ring--outer"></div>
                <div className="collab-canvas-ring collab-canvas-ring--inner"></div>
                <div className="collab-canvas-node">
                  <span className="collab-canvas-label">Weave</span>
                  <span className="collab-canvas-sub">living product model</span>
                </div>
                <div className="collab-canvas-threads" aria-hidden="true">
                  <div className="collab-thread collab-thread--left"></div>
                  <div className="collab-thread collab-thread--right"></div>
                  <div className="collab-thread collab-thread--bottom"></div>
                </div>
              </div>

              {/* ── PRODUCT COLUMN ── */}
              <div className="collab-column">
                <div className="collab-exec collab-exec--product">
                  <div className="collab-exec-ring"></div>
                  <span className="collab-exec-label">EPM</span>
                  <span className="collab-exec-sub">Executive Product Manager</span>
                </div>
                <div className="collab-connector">
                  <div className="collab-connector-line"></div>
                  <div className="collab-connector-dot"></div>
                </div>
                <div className="collab-gate">
                  <span className="collab-gate-icon">⏸</span>
                  <span className="collab-gate-label">Human Gate</span>
                </div>
                <div className="collab-connector">
                  <div className="collab-connector-line"></div>
                  <div className="collab-connector-dot"></div>
                </div>
                <div className="collab-agents">
                  <div className="collab-agent collab-agent--product">
                    <span className="collab-agent-name">Scout</span>
                    <span className="collab-agent-role">research</span>
                  </div>
                  <div className="collab-agent collab-agent--product">
                    <span className="collab-agent-name">Echo</span>
                    <span className="collab-agent-role">persona gen</span>
                  </div>
                  <div className="collab-agent collab-agent--product">
                    <span className="collab-agent-name">Mapper</span>
                    <span className="collab-agent-role">opportunity map</span>
                  </div>
                </div>
              </div>

              {/* ── DEV COLUMN ── */}
              <div className="collab-column">
                <div className="collab-exec collab-exec--dev">
                  <div className="collab-exec-ring"></div>
                  <span className="collab-exec-label">EDev</span>
                  <span className="collab-exec-sub">Executive Developer</span>
                </div>
                <div className="collab-connector">
                  <div className="collab-connector-line"></div>
                  <div className="collab-connector-dot"></div>
                </div>
                <div className="collab-gate">
                  <span className="collab-gate-icon">⏸</span>
                  <span className="collab-gate-label">Human Gate</span>
                </div>
                <div className="collab-connector">
                  <div className="collab-connector-line"></div>
                  <div className="collab-connector-dot"></div>
                </div>
                <div className="collab-agents">
                  <div className="collab-agent collab-agent--dev">
                    <span className="collab-agent-name">Builder</span>
                    <span className="collab-agent-role">user stories</span>
                  </div>
                  <div className="collab-agent collab-agent--dev">
                    <span className="collab-agent-name">Proof</span>
                    <span className="collab-agent-role">test coverage</span>
                  </div>
                  <div className="collab-agent collab-agent--dev">
                    <span className="collab-agent-name">Ship</span>
                    <span className="collab-agent-role">pull request</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="collab-legend">
              <div className="collab-legend-item">
                <div className="collab-legend-dot collab-legend-dot--exec"></div>
                <span>Executive Agent</span>
              </div>
              <div className="collab-legend-item">
                <div className="collab-legend-dot collab-legend-dot--gate"></div>
                <span>Human Gate</span>
              </div>
              <div className="collab-legend-item">
                <div className="collab-legend-dot collab-legend-dot--agent"></div>
                <span>Specialist Agent</span>
              </div>
              <div className="collab-legend-item">
                <div className="collab-legend-dot collab-legend-dot--canvas"></div>
                <span>Living Product Model</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  )

  return outerFrame(isCanvas, isObsidian, content)
}
