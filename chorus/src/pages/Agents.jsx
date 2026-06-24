import Footer from '../components/Footer'

const AGENTS = [
  {
    name: 'Executive Creative Director',
    abbr: 'ECD',
    role: 'Design Governance Agent',
    color: '#9590e8',
    bg: 'rgba(149,144,232,0.12)',
    caps: [
      'Orchestrates Wireframe and Visual sub-agents',
      'Enforces brand standards and design system rules',
      'Generates design token proposals',
      'Gates all design output before human review',
      'Resolves conflicts between visual outputs',
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
    role: 'Product Governance Agent',
    color: '#1D9E75',
    bg: 'rgba(29,158,117,0.12)',
    caps: [
      'Decomposes briefs into user stories and requirements',
      'Orchestrates Requirements and Copy sub-agents',
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
    role: 'Engineering Governance Agent',
    color: '#378ADD',
    bg: 'rgba(55,138,221,0.12)',
    caps: [
      'Orchestrates Scaffold and Architecture sub-agents',
      'Enforces coding standards and architecture rules',
      'Generates file structures and boilerplate',
      'Reviews technical specs against requirements',
      'Gates all code output before human review',
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
      'All decisions are logged with timestamp and context',
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
  {
    name: 'Wireframe Agent',
    abbr: 'WF',
    role: 'Design Sub-Agent',
    color: '#9590e8',
    bg: 'rgba(149,144,232,0.08)',
    caps: [
      'Generates layout wireframes from brief intent',
      'Maps UI components to functional requirements',
      'Plans responsive breakpoints',
      'Outputs structured layout specs',
    ],
    governed: 'ECD Agent',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
  },
  {
    name: 'Dynamic Sub-Agents',
    abbr: 'DSA',
    role: 'Runtime Specialist Agents',
    color: '#378ADD',
    bg: 'rgba(55,138,221,0.08)',
    caps: [
      'Spawned at runtime based on work discovered',
      'Specialist in a single task or output type',
      'Report back to their parent Executive Agent',
      'Lifecycle managed by Chorus orchestrator',
      'Include: Copy, Audit, Notify, Deploy sub-agents',
    ],
    governed: 'Respective Executive Agent',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
  },
]

export default function Agents() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">The Team</p>
          <h1 className="section-title">Meet the Agents</h1>
          <p className="section-sub mx-auto">
            Executive Agents govern the work. Sub-Agents execute it. Human Gates approve it. Every agent has a defined role, a defined authority, and a defined ceiling.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="agents-grid">
            {AGENTS.map((a, i) => (
              <div key={i} className="agent-card">
                <div className="agent-avatar" style={{ background: a.bg, color: a.color }}>
                  {a.icon}
                </div>
                <h3>{a.name}</h3>
                <p className="agent-role">{a.role}</p>
                <ul className="agent-caps-list">
                  {a.caps.map(c => <li key={c}>{c}</li>)}
                </ul>
                <div className="agent-governed">
                  Governed by: <span>{a.governed}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration visual */}
      <section className="section" style={{ borderTop: '1px solid var(--border)', paddingTop: 80 }}>
        <div className="container">
          <p className="section-label">How They Work Together</p>
          <h2 className="section-title">From Parallel to Sequential</h2>
          <p className="section-sub" style={{ marginBottom: 48 }}>
            Agents collaborate in two modes. Executive Agents run in parallel for speed. Sub-agents within a discipline run sequentially for quality.
          </p>

          <div className="collab-visual" aria-label="Agent collaboration diagram">
            <svg width="100%" height="200" viewBox="0 0 800 200" preserveAspectRatio="xMidYMid meet">
              {/* PARALLEL: Three Exec Agents at top */}
              {[
                { x: 160, label: 'ECD', color: '#9590e8' },
                { x: 400, label: 'EPM', color: '#1D9E75' },
                { x: 640, label: 'EDev', color: '#378ADD' },
              ].map(n => (
                <g key={n.label}>
                  <line x1={n.x} y1={60} x2={n.x} y2={90} stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4,3"/>
                  <circle cx={n.x} cy={40} r={26} fill={n.color + '33'} stroke={n.color} strokeWidth="1.5"/>
                  <text x={n.x} y={40} textAnchor="middle" dominantBaseline="middle" fill={n.color} fontSize="13" fontFamily="Inter,sans-serif" fontWeight="600">{n.label}</text>
                  {/* sub-agent chain */}
                  {[110, 145].map((y, si) => (
                    <g key={si}>
                      <line x1={n.x} y1={y} x2={n.x} y2={y+20} stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
                      <rect x={n.x-30} y={y} width="60" height="20" rx="4" fill={n.color + '20'} stroke={n.color + '40'} strokeWidth="1"/>
                      <text x={n.x} y={y+10} textAnchor="middle" dominantBaseline="middle" fill={n.color} fontSize="10" fontFamily="Inter,sans-serif">{si === 0 ? 'Sub-1' : 'Sub-2'}</text>
                    </g>
                  ))}
                  {/* gate */}
                  <line x1={n.x} y1={165} x2={n.x} y2={180} stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
                  <rect x={n.x-32} y={166} width="64" height="22" rx="4" fill="rgba(239,159,39,0.15)" stroke="#EF9F27" strokeWidth="1"/>
                  <text x={n.x} y={177} textAnchor="middle" dominantBaseline="middle" fill="#EF9F27" fontSize="10" fontFamily="Inter,sans-serif">Human Gate</text>
                </g>
              ))}
              {/* Top label */}
              <text x="400" y="14" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="11" fontFamily="Inter,sans-serif" letterSpacing="1">PARALLEL EXECUTION ↔ SEQUENTIAL PIPELINE</text>
            </svg>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
