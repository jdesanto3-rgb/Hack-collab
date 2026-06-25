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
      'Orchestrates all design SAGE agents',
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
      'Orchestrates all product SAGE agents',
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
      'Orchestrates all engineering SAGE agents',
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
            Weave runs two layers of agents. Executive Agents govern and gate the work. SAGE specialist agents execute it. Every agent has a defined role, a defined authority, and a defined ceiling — and a human in the loop above them. Agents don't replace people. They preserve the thread between people.
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
          <p className="section-label">SAGE Specialists</p>
          <h2 className="section-title">The SAGE Specialists</h2>
          <p className="section-sub" style={{ marginBottom: 64 }}>
            SAGE agents are the named specialist workforce inside Weave. They don't wait to be summoned — they respond to the product model as it evolves, preserve context at every step, and surface decisions at the right moment for human review.
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
            Executive Agents govern and gate. SAGE agents execute and preserve context. Humans approve. The system is event-driven — when a thread in the product model changes, the right agents respond automatically. Nothing is disconnected. Nothing is lost.
          </p>

          <div className="collab-visual" aria-label="Agent collaboration diagram">
            <svg width="100%" height="200" viewBox="0 0 800 200" preserveAspectRatio="xMidYMid meet">
              {[
                { x: 160, label: 'ECD', color: '#9590e8' },
                { x: 400, label: 'EPM', color: '#1D9E75' },
                { x: 640, label: 'EDev', color: '#378ADD' },
              ].map(n => (
                <g key={n.label}>
                  <line x1={n.x} y1={60} x2={n.x} y2={90} stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4,3"/>
                  <circle cx={n.x} cy={40} r={26} fill={n.color + '33'} stroke={n.color} strokeWidth="1.5"/>
                  <text x={n.x} y={40} textAnchor="middle" dominantBaseline="middle" fill={n.color} fontSize="13" fontFamily="Inter,sans-serif" fontWeight="600">{n.label}</text>
                  {[110, 145].map((y, si) => (
                    <g key={si}>
                      <line x1={n.x} y1={y} x2={n.x} y2={y+20} stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
                      <rect x={n.x-30} y={y} width="60" height="20" rx="4" fill={n.color + '20'} stroke={n.color + '40'} strokeWidth="1"/>
                      <text x={n.x} y={y+10} textAnchor="middle" dominantBaseline="middle" fill={n.color} fontSize="10" fontFamily="Inter,sans-serif">{si === 0 ? 'SAGE-1' : 'SAGE-2'}</text>
                    </g>
                  ))}
                  <line x1={n.x} y1={165} x2={n.x} y2={180} stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
                  <rect x={n.x-32} y={166} width="64" height="22" rx="4" fill="rgba(239,159,39,0.15)" stroke="#EF9F27" strokeWidth="1"/>
                  <text x={n.x} y={177} textAnchor="middle" dominantBaseline="middle" fill="#EF9F27" fontSize="10" fontFamily="Inter,sans-serif">Human Gate</text>
                </g>
              ))}
              <text x="400" y="14" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="11" fontFamily="Inter,sans-serif" letterSpacing="1">PARALLEL EXECUTION ↔ SEQUENTIAL PIPELINE ↔ EVENT-DRIVEN</text>
            </svg>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )

  return outerFrame(isCanvas, isObsidian, content)
}
