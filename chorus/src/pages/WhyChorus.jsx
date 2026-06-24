import Footer from '../components/Footer'

const PERSONAS = [
  {
    title: 'Design Teams',
    color: '#9590e8',
    bg: 'rgba(149,144,232,0.1)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    pains: [
      'Design decisions made without context from Product',
      'Dev implements wrong design because specs weren\'t shared',
      'AI tools run independently — no one sees what was explored',
      'Approval happens over Slack with no audit trail',
      'Brand standards get bypassed when teams move fast',
    ],
    solved: [
      'ECD Agent enforces brand standards on every output',
      'Design tokens sync automatically to Dev',
      'All explorations visible on the shared canvas',
      'Maya\'s approvals are logged and timestamped',
    ],
  },
  {
    title: 'Product Teams',
    color: '#1D9E75',
    bg: 'rgba(29,158,117,0.1)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
    pains: [
      'Requirements get lost between Notion docs and engineering tickets',
      'No visibility into whether Design has started or completed work',
      'AI-written specs have no governance — anyone can override',
      'Stakeholder sign-off is informal and untracked',
      'Cross-functional handoffs are manual and error-prone',
    ],
    solved: [
      'EPM Agent structures requirements and tracks status',
      'Full pipeline visibility from brief to deploy',
      'Jordan\'s approvals are binding and auditable',
      'Cross-team sync is automated, not manual',
    ],
  },
  {
    title: 'Dev Teams',
    color: '#378ADD',
    bg: 'rgba(55,138,221,0.1)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    pains: [
      'Building against incomplete or ambiguous design specs',
      'Discovering misalignment at code review, not during planning',
      'AI-generated code has no review gate before it lands in repo',
      'No clear ownership when agents produce conflicting outputs',
      'Architecture decisions made in isolation',
    ],
    solved: [
      'EDev Agent enforces architecture standards on all scaffold output',
      'Alex\'s gate catches issues before implementation begins',
      'Design tokens arrive pre-approved and ready to use',
      'All agent-generated code surfaces on the shared canvas',
    ],
  },
]

const COMPARE_ROWS = [
  { aspect: 'Visibility', without: 'Each team works in their own tools. No shared view of progress.', with: 'Full canvas visibility for Design, Product, and Dev simultaneously.' },
  { aspect: 'AI Governance', without: 'Agents run ad-hoc. Output is ungoverned and un-reviewed.', with: 'Every agent output passes through an Executive Agent and a Human Gate.' },
  { aspect: 'Handoffs', without: 'Manual, asynchronous, and error-prone. Specs lost in translation.', with: 'Automatic sync. Design tokens, specs, and code arrive aligned.' },
  { aspect: 'Audit Trail', without: 'No record of who approved what, or why.', with: 'Every gate event is logged: who approved, what state, when.' },
  { aspect: 'Speed', without: 'Bottlenecked by meetings to align on AI output.', with: '3× faster from brief to deploy with parallel agent execution.' },
]

const TESTIMONIALS = [
  {
    quote: 'For the first time, our Design Lead and Dev Lead are looking at the same canvas. There\'s no more "I didn\'t see that design" — it\'s all there.',
    author: 'Alex T.',
    role: 'Head of Engineering, Series B SaaS',
  },
  {
    quote: 'We were using six AI tools across three teams. Chorus is the first thing that made those tools feel like a single system.',
    author: 'Maya R.',
    role: 'Design Director, Enterprise Tech',
  },
  {
    quote: 'The governance alone is worth it. Every stakeholder can see exactly what was approved and who signed off. Audit reviews used to take days.',
    author: 'Jordan K.',
    role: 'Senior Product Manager, Fintech',
  },
]

export default function WhyChorus() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">The Case for Chorus</p>
          <h1 className="section-title">Why Teams Choose Chorus</h1>
          <p className="section-sub mx-auto">
            Every discipline has its own AI chaos. Chorus resolves all of them with a single governed canvas.
          </p>
        </div>
      </section>

      {/* Persona sections */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="persona-grid">
            {PERSONAS.map((p, i) => (
              <div key={i} className="persona-card">
                <div className="persona-icon" style={{ background: p.bg, color: p.color }}>
                  {p.icon}
                </div>
                <h3 style={{ color: p.color }}>{p.title}</h3>
                <p style={{ fontSize: 12, color: 'var(--text-3)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 14 }}>Pain Points Solved</p>
                <ul className="persona-pains">
                  {p.pains.map((pain, j) => (
                    <li key={j} className="persona-pain">
                      <div className="pain-check" style={{ background: p.bg }}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2 2 4-4" stroke={p.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      {pain}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <p className="section-label">Before and After</p>
          <h2 className="section-title">Without Chorus vs. With Chorus</h2>
          <p className="section-sub" style={{ marginBottom: 48 }}>
            The difference isn't just tools. It's a fundamental shift in how AI work is governed.
          </p>
          <div className="compare-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Dimension</th>
                  <th style={{ color: 'var(--text-3)' }}>Without Chorus</th>
                  <th style={{ color: 'var(--teal)' }}>With Chorus</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row, i) => (
                  <tr key={i}>
                    <td>{row.aspect}</td>
                    <td className="without">{row.without}</td>
                    <td className="with">{row.with}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <p className="section-label">Early Feedback</p>
          <h2 className="section-title">What teams are saying</h2>
          <p className="section-sub" style={{ marginBottom: 48 }}>
            Chorus is in early access with select teams. Here's what they've told us.
          </p>
          <div className="testimonial-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div style={{ color: 'var(--purple)', marginBottom: 16 }}>
                  <svg width="24" height="18" viewBox="0 0 24 18" fill="currentColor" opacity="0.6">
                    <path d="M0 18V10.8C0 4.8 4.32 1.2 12.96 0l1.44 2.4C10.08 3.36 7.68 5.04 7.2 7.2H10.8V18H0zm13.2 0V10.8C13.2 4.8 17.52 1.2 26.16 0l1.44 2.4C23.28 3.36 20.88 5.04 20.4 7.2H24V18H13.2z"/>
                  </svg>
                </div>
                <blockquote>{t.quote}</blockquote>
                <div className="testimonial-author">{t.author}</div>
                <div className="testimonial-role">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
