import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { useTheme } from '../ThemeContext'

const EXAMPLE_BRIEFS = [
  'Design a notification system for B2B teams that reduces alert fatigue and surfaces urgent signals clearly.',
  'Build a performance dashboard so teams can track AI model quality across production deployments in real time.',
  'Create an enterprise onboarding flow that shows measurable team value in under five minutes.',
]

const ITEM_COUNT = 5
const TICK_MS = 820
const STAGGER_MS = 200

function getOutputs(brief) {
  const snippet = brief.trim().split(' ').slice(0, 5).join(' ').replace(/[.,!?]$/, '')
  return {
    ecd: [
      {
        label: 'Design Direction',
        text: `Calm, signal-forward visual language. Hierarchy driven by function, not decoration. The "${snippet}…" surface must communicate state at a glance without visual noise.`,
      },
      {
        label: 'Typography System',
        text: 'Inter 600 for display. JetBrains Mono for system data and status values. One type scale — no exceptions to the established design system.',
      },
      {
        label: 'Color Semantics',
        text: 'Semantic palette only. Status maps to intensity, not hue variety. Brand token compliance enforced globally through design tokens.',
      },
      {
        label: 'Component Set',
        text: 'StateCard, StatusBadge, ActionBar, EmptyState, SkeletonLoader — all pinned to design tokens. No one-off styles.',
      },
      {
        label: 'UX Principle',
        text: 'Progressive disclosure. Surface summary first. Reveal detail on demand. Urgent information is never buried in volume. Thread to brief preserved.',
      },
    ],
    epm: [
      {
        label: 'Core User Story',
        text: `As a team member, I need to understand the state of "${snippet}…" immediately so I can act without investigation or context switching.`,
      },
      {
        label: 'Acceptance Criteria',
        text: 'Primary action visible without scroll. State always current, never stale. WCAG AA compliant. P95 response time under 100ms.',
      },
      {
        label: 'Definition of Done',
        text: 'ECD design sign-off complete. EDev architecture approved. Load-tested at production scale. PM gate passed before any shipping.',
      },
      {
        label: 'Priority Stack',
        text: 'P0: Core state surface. P1: Actions and feedback. P2: Filtering and search. P3: History and audit trail.',
      },
      {
        label: 'Open Risks',
        text: 'Data taxonomy must be agreed cross-team before sprint begins. Undefined states become tech debt. Raise in next standup. Thread to brief preserved.',
      },
    ],
    edev: [
      {
        label: 'Architecture',
        text: 'Event-driven. Real-time state via WebSocket stream → aggregator → client store. Optimistic updates. No polling.',
      },
      {
        label: 'Component Tree',
        text: 'AppShell → PageLayout → PrimaryView → StateCard → ActionBar → StatusBadge. Each node maps to an EPM acceptance criterion.',
      },
      {
        label: 'Performance Budget',
        text: 'FCP < 1.2s. Interactive < 2.5s. State updates < 50ms. Lighthouse CI budget enforced on every PR gate.',
      },
      {
        label: 'Engineering DoD',
        text: 'Unit coverage ≥ 90%. E2E for all primary flows. Performance budget CI gate. Security review complete before merge.',
      },
      {
        label: 'Thread Trace',
        text: 'Every component maps back to: EPM acceptance criteria → ECD component spec → this engineering output. Thread intact from brief to code.',
      },
    ],
  }
}

const AGENTS = [
  {
    id: 'ecd',
    abbr: 'ECD',
    name: 'Executive Creative Director',
    role: 'Design Continuity Agent',
    color: '#9590e8',
    bg: 'rgba(149,144,232,0.12)',
    governed: 'Maya (Design Lead)',
    sysNum: '01',
  },
  {
    id: 'epm',
    abbr: 'EPM',
    name: 'Executive Product Manager',
    role: 'Product Continuity Agent',
    color: '#1D9E75',
    bg: 'rgba(29,158,117,0.12)',
    governed: 'Jordan (PM)',
    sysNum: '02',
  },
  {
    id: 'edev',
    abbr: 'EDev',
    name: 'Executive Developer',
    role: 'Engineering Continuity Agent',
    color: '#378ADD',
    bg: 'rgba(55,138,221,0.12)',
    governed: 'Alex (Dev Lead)',
    sysNum: '03',
  },
]

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

function AgentPanel({ agent, revealed, phase, outputs, isCanvas, isObsidian, isBlueprint }) {
  const statusText = phase === 'gate' || phase === 'approved' ? 'READY' : 'ACTIVE'
  const sysLabel = `SYS.${agent.sysNum} // ${agent.abbr}`

  return (
    <div className="pg-agent-panel" style={{ '--agent-color': agent.color }}>
      <div className="pg-agent-header" style={{ borderColor: `${agent.color}33` }}>
        {isCanvas && (
          <div className="canvas-card-rail">
            <span className="rail-left">{sysLabel}</span>
            <span className="rail-right">STATUS: {statusText}</span>
          </div>
        )}
        {isObsidian && (
          <div className="obs-card-rail">
            <span className="obs-rail-left">{sysLabel}</span>
            <span className="obs-rail-right">STATUS: {statusText}</span>
          </div>
        )}
        {isBlueprint && (
          <div className="pg-bp-rail">
            <span>{sysLabel}</span>
            <span>STATUS: {statusText}</span>
          </div>
        )}
        <div className="pg-agent-abbr" style={{ color: agent.color }}>{agent.abbr}</div>
        <div className="pg-agent-name">{agent.name}</div>
        <div className="pg-agent-role" style={{ color: agent.color }}>{agent.role}</div>
        <div className="pg-agent-governed">governed by {agent.governed}</div>
      </div>

      <div className="pg-agent-output">
        {outputs[agent.id].slice(0, revealed[agent.id]).map((item, i) => (
          <div key={i} className="pg-output-item pg-output-item--visible">
            <span className="pg-output-label">{item.label}</span>
            <p className="pg-output-text">{item.text}</p>
          </div>
        ))}

        {phase === 'weaving' && revealed[agent.id] < ITEM_COUNT && (
          <div className="pg-cursor-wrap">
            <span className="pg-cursor" style={{ background: agent.color }} />
          </div>
        )}

        {(phase === 'gate' || phase === 'approved') && (
          <div className="pg-complete-badge" style={{ color: agent.color }}>
            <CheckIcon />
            Output ready for review
          </div>
        )}
      </div>
    </div>
  )
}

function GateReviewer({ agent, approval, onApprove, onRevise, onReject }) {
  return (
    <div className={`pg-reviewer${approval ? ` pg-reviewer--${approval}` : ''}`}>
      <div className="pg-reviewer-info">
        <div
          className="pg-reviewer-dot"
          style={{
            background:
              approval === 'approved' ? '#1D9E75'
              : approval === 'rejected' ? '#E84B4B'
              : approval === 'revise' ? '#EF9F27'
              : agent.color,
          }}
        />
        <div>
          <div className="pg-reviewer-name">{agent.governed}</div>
          <div className="pg-reviewer-role">{agent.role}</div>
        </div>
        {approval && (
          <span className={`pg-reviewer-badge pg-reviewer-badge--${approval}`}>
            {approval === 'approved' ? 'Approved' : approval === 'rejected' ? 'Rejected' : 'Revision requested'}
          </span>
        )}
      </div>
      {!approval && (
        <div className="pg-reviewer-actions">
          <button className="pg-action-btn pg-action-btn--approve" onClick={onApprove}>Approve</button>
          <button className="pg-action-btn pg-action-btn--revise" onClick={onRevise}>Revise</button>
          <button className="pg-action-btn pg-action-btn--reject" onClick={onReject}>Reject</button>
        </div>
      )}
    </div>
  )
}

export default function Playground() {
  const { theme } = useTheme()
  const isCanvas = theme === 'canvas'
  const isObsidian = theme === 'obsidian'
  const isBlueprint = theme === 'blueprint'

  const [brief, setBrief] = useState('')
  const [briefError, setBriefError] = useState(false)
  const [phase, setPhase] = useState('brief')
  const [revealed, setRevealed] = useState({ ecd: 0, epm: 0, edev: 0 })
  const [approvals, setApprovals] = useState({ ecd: null, epm: null, edev: null })
  const [outputs, setOutputs] = useState(null)
  const timerRef = useRef(null)

  const handleWeave = () => {
    if (brief.trim().length < 10) { setBriefError(true); return }
    setBriefError(false)
    setOutputs(getOutputs(brief))
    setRevealed({ ecd: 0, epm: 0, edev: 0 })
    setApprovals({ ecd: null, epm: null, edev: null })
    setPhase('weaving')
  }

  useEffect(() => {
    if (phase !== 'weaving') return
    let tick = 0

    const schedule = () => {
      if (tick >= ITEM_COUNT) {
        setTimeout(() => setPhase('gate'), 600)
        return
      }
      const currentTick = tick
      AGENTS.forEach((agent, i) => {
        setTimeout(() => {
          setRevealed(prev => ({ ...prev, [agent.id]: currentTick + 1 }))
        }, i * STAGGER_MS)
      })
      tick++
      timerRef.current = setTimeout(schedule, TICK_MS)
    }

    schedule()
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [phase])

  const handleApprove = (agentId) => {
    const next = { ...approvals, [agentId]: 'approved' }
    setApprovals(next)
    if (Object.values(next).every(v => v === 'approved')) {
      setTimeout(() => setPhase('approved'), 400)
    }
  }
  const handleRevise  = (agentId) => setApprovals(prev => ({ ...prev, [agentId]: 'revise' }))
  const handleReject  = (agentId) => setApprovals(prev => ({ ...prev, [agentId]: 'rejected' }))

  const handleReset = () => {
    setPhase('brief')
    setBrief('')
    setBriefError(false)
    setRevealed({ ecd: 0, epm: 0, edev: 0 })
    setApprovals({ ecd: null, epm: null, edev: null })
    setOutputs(null)
  }

  const totalItems = ITEM_COUNT * 3
  const revealedTotal = revealed.ecd + revealed.epm + revealed.edev
  const progress = phase === 'weaving' ? Math.round((revealedTotal / totalItems) * 100) : 100

  const hasRevision = Object.values(approvals).some(v => v === 'revise' || v === 'rejected')

  const outerClass = isCanvas || isObsidian ? 'site-outer-frame' : ''

  const content = (
    <>
      {/* ── HERO ── */}
      <section className="page-hero">
        <div className="container">
          <p className="section-label">Interactive Simulation</p>
          <h1 className="section-title">Pull the Thread</h1>
          <p className="section-sub mx-auto">
            Enter a product brief. Watch ECD, EPM, and EDev work in parallel. Approve the gate. See what "thread intact" actually looks like.
          </p>
        </div>
      </section>

      {/* ── BRIEF INPUT ── */}
      {phase === 'brief' && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="pg-brief-wrap">
              <p className="pg-chips-label">Quick examples — or write your own below</p>
              <div className="pg-brief-chips">
                {EXAMPLE_BRIEFS.map((ex, i) => (
                  <button
                    key={i}
                    className="pg-chip"
                    onClick={() => { setBrief(ex); setBriefError(false) }}
                  >
                    {ex}
                  </button>
                ))}
              </div>
              <div className="pg-textarea-wrap">
                <textarea
                  className={`pg-textarea${briefError ? ' pg-textarea--error' : ''}`}
                  placeholder="Describe your product brief. What are you building? Who is it for? What problem does it solve?"
                  value={brief}
                  onChange={e => { setBrief(e.target.value); if (briefError && e.target.value.trim().length >= 10) setBriefError(false) }}
                  rows={5}
                />
                {briefError && <p className="pg-field-error">Brief must be at least 10 characters.</p>}
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: 24 }}>
                <button className="btn btn-primary btn-lg" onClick={handleWeave}>
                  Weave It
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── WEAVING + GATE ── */}
      {(phase === 'weaving' || phase === 'gate') && outputs && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="pg-brief-recap">
              <span className="pg-recap-label">Brief</span>
              <p className="pg-recap-text">{brief}</p>
            </div>

            {phase === 'weaving' && (
              <div className="pg-progress-wrap">
                <div className="pg-progress-rail">
                  <div className="pg-progress-bar" style={{ width: `${progress}%` }} />
                </div>
                <span className="pg-progress-label">Agents working… {progress}%</span>
              </div>
            )}

            {phase === 'gate' && (
              <div className="pg-phase-banner">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                All agents complete — Human Gate active
              </div>
            )}

            <div className="pg-agent-panels">
              {AGENTS.map(agent => (
                <AgentPanel
                  key={agent.id}
                  agent={agent}
                  revealed={revealed}
                  phase={phase}
                  outputs={outputs}
                  isCanvas={isCanvas}
                  isObsidian={isObsidian}
                  isBlueprint={isBlueprint}
                />
              ))}
            </div>

            {phase === 'gate' && (
              <div className="pg-gate">
                <div className="pg-gate-header">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF9F27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span>Human Gate — Review Required</span>
                </div>
                <p className="pg-gate-sub">
                  Three reviewers must approve before the thread advances. Each agent output is independently gated.
                </p>
                <div className="pg-reviewers">
                  {AGENTS.map(agent => (
                    <GateReviewer
                      key={agent.id}
                      agent={agent}
                      approval={approvals[agent.id]}
                      onApprove={() => handleApprove(agent.id)}
                      onRevise={() => handleRevise(agent.id)}
                      onReject={() => handleReject(agent.id)}
                    />
                  ))}
                </div>
                {hasRevision && (
                  <div className="pg-gate-note">
                    In a live Weave session, revision requests re-trigger the relevant agent with your feedback attached. You can approve to continue this simulation.
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── APPROVED ── */}
      {phase === 'approved' && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="pg-approved">
              <div className="pg-approved-icon">
                <CheckIcon />
              </div>
              <h2 className="pg-approved-title">Thread Intact</h2>
              <p className="pg-approved-sub">
                From brief to design direction, product spec, and engineering output — every decision is traceable back to the intent behind it. Nothing got lost between idea and outcome.
              </p>

              <div className="pg-thread-trace">
                {[
                  { label: 'Brief', color: '#EBE6DF' },
                  { label: 'ECD Design', color: '#9590e8' },
                  { label: 'EPM Spec', color: '#1D9E75' },
                  { label: 'EDev Output', color: '#378ADD' },
                  { label: 'Gate: Approved', color: '#EF9F27' },
                  { label: 'Ship', color: '#1D9E75' },
                ].map((step, i, arr) => (
                  <div key={i} className="pg-trace-step">
                    <div className="pg-trace-dot" style={{ background: step.color }} />
                    <span className="pg-trace-label">{step.label}</span>
                    {i < arr.length - 1 && <div className="pg-trace-line" />}
                  </div>
                ))}
              </div>

              <div className="pg-approved-actions">
                <button className="btn btn-ghost" onClick={handleReset}>Run Another Brief</button>
                <Link to="/demo" className="btn btn-primary">
                  Request Full Demo
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  )

  if (!outerClass) return content

  return (
    <div className={outerClass}>
      {isCanvas && <>
        <div className="frame-dot frame-dot--tl" />
        <div className="frame-dot frame-dot--tr" />
        <div className="frame-dot frame-dot--bl" />
        <div className="frame-dot frame-dot--br" />
      </>}
      {isObsidian && <>
        <div className="obs-frame-dot obs-frame-dot--tl" />
        <div className="obs-frame-dot obs-frame-dot--tr" />
        <div className="obs-frame-dot obs-frame-dot--bl" />
        <div className="obs-frame-dot obs-frame-dot--br" />
      </>}
      {content}
    </div>
  )
}
