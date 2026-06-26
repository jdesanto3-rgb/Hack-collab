import { useRef, useEffect } from 'react'
import Footer from '../components/Footer'
import { useTheme } from '../ThemeContext'

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
      'Design rationale gets buried in Figma — no one knows why a decision was made six weeks later',
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
      'AI-written specs have no continuity — anyone can override',
      'Stakeholder sign-off is informal and untracked',
      'Cross-functional handoffs are manual and error-prone',
      'The thread between customer insight and shipped feature is invisible and untraceable',
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
      'Code gets built against requirements disconnected from the customer problem that caused them',
    ],
  },
]

const CATEGORY_ROWS = [
  { label: 'Optimizes for', figma: 'Screens', linear: 'Tasks', claude: 'Answers', weave: 'Product continuity', highlight: false },
  { label: 'Primary object', figma: 'Frames', linear: 'Issues', claude: 'Conversation', weave: 'Living product model', highlight: false },
  { label: 'AI role', figma: 'Copilot', linear: 'None', claude: 'Responder', weave: 'Specialist workforce', highlight: false },
  { label: 'Memory', figma: 'File-level', linear: 'Project-level', claude: 'None', weave: 'Connected product graph', highlight: false },
  { label: 'Preserves reasoning', figma: 'No', linear: 'No', claude: 'No', weave: 'Yes — always', highlight: true },
]

const COMPARE_ROWS = [
  { aspect: 'Shared understanding', without: 'Context lost at every handoff. Teams manually resync.', with: 'One living product model. Every team and every agent works from the same thread.' },
  { aspect: 'Decision traceability', without: 'No one knows why a decision was made.', with: 'Every decision connected to the insight, persona, and customer need behind it.' },
  { aspect: 'AI continuity', without: 'Agents run in isolation. Output is ungoverned and untraceable.', with: 'Every agent output passes through an Executive Agent and a Human Gate.' },
  { aspect: 'Handoffs', without: 'Manual, asynchronous, error-prone. Specs lost in translation.', with: 'Automatic. Design tokens, specs, and stories arrive aligned and connected.' },
  { aspect: 'Speed', without: 'Bottlenecked by meetings to realign.', with: '3× faster from customer insight to sprint-ready output.' },
  { aspect: 'Product memory', without: 'By launch, no one remembers why it was built that way.', with: 'Every feature traceable to the customer problem it was built to solve.' },
]

const TESTIMONIALS = [
  {
    quote: 'For the first time, our Design Lead and Dev Lead are looking at the same model. There\'s no more "I didn\'t see that research" — the thread is right there.',
    author: 'Alex T.',
    role: 'Head of Engineering, Series B SaaS',
  },
  {
    quote: 'We were using six AI tools across three teams. Weave is the first thing that kept the context connected instead of fragmenting it further.',
    author: 'Maya R.',
    role: 'Design Director, Enterprise Tech',
  },
  {
    quote: 'The traceability alone is worth it. Every stakeholder can see exactly what decision was made, what evidence informed it, and who approved it.',
    author: 'Jordan K.',
    role: 'Senior Product Manager, Fintech',
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

export default function WhyWeave() {
  const { theme } = useTheme()
  const isCanvas = theme === 'canvas'
  const isObsidian = theme === 'obsidian'

  const videoRef   = useRef(null)
  const frameRef   = useRef(null)
  const controlRef = useRef(null)
  const barRef     = useRef(null)

  useEffect(() => {
    const video   = videoRef.current
    const frame   = frameRef.current
    const control = controlRef.current
    const bar     = barRef.current
    if (!video || !control || !bar) return

    const iconPlay   = control.querySelector('.pv-icon--play')
    const iconPause  = control.querySelector('.pv-icon--pause')
    const iconReplay = control.querySelector('.pv-icon--replay')

    function showIcon(name) {
      iconPlay.style.display   = name === 'play'   ? 'block' : 'none'
      iconPause.style.display  = name === 'pause'  ? 'block' : 'none'
      iconReplay.style.display = name === 'replay' ? 'block' : 'none'
    }

    function setState(state) {
      control.dataset.state = state
      control.setAttribute('aria-label',
        state === 'playing' ? 'Pause video' :
        state === 'ended'   ? 'Replay video' : 'Play video'
      )
      showIcon(
        state === 'playing' ? 'pause' :
        state === 'ended'   ? 'replay' : 'play'
      )
      frame.classList.toggle('is-playing', state === 'playing')
      frame.classList.toggle('is-ended',   state === 'ended')
    }

    setState('paused')

    const onControl = () => {
      const state = control.dataset.state
      if (state === 'paused' || state === 'ended') {
        if (state === 'ended') video.currentTime = 0
        video.play().then(() => setState('playing')).catch(() => {})
      } else {
        video.pause()
        setState('paused')
      }
    }
    const onVideoClick  = () => control.click()
    const onTimeUpdate  = () => { if (video.duration) bar.style.width = (video.currentTime / video.duration * 100) + '%' }
    const onEnded       = () => { setState('ended'); bar.style.width = '100%' }
    const onPlay        = () => setState('playing')
    const onPause       = () => { if (!video.ended) setState('paused') }

    control.addEventListener('click', onControl)
    video.addEventListener('click',      onVideoClick)
    video.addEventListener('timeupdate', onTimeUpdate)
    video.addEventListener('ended',      onEnded)
    video.addEventListener('play',       onPlay)
    video.addEventListener('pause',      onPause)

    return () => {
      control.removeEventListener('click', onControl)
      video.removeEventListener('click',      onVideoClick)
      video.removeEventListener('timeupdate', onTimeUpdate)
      video.removeEventListener('ended',      onEnded)
      video.removeEventListener('play',       onPlay)
      video.removeEventListener('pause',      onPause)
    }
  }, [])

  const content = (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">The Case for Weave</p>
          <h1 className="section-title">Every tool knows a piece.<br />Weave knows the whole thread.</h1>
          <p className="section-sub mx-auto">
            Figma knows what your product looks like. Jira knows what your team is doing. Claude knows what you asked. Weave knows what you're building, why every decision was made, and what changed.
          </p>
        </div>
      </section>

      {/* PHILOSOPHY VIDEO */}
      <section className="philosophy-video-section" aria-label="Why we build this way">
        <div className="philosophy-video-wrap">
          <div className="philosophy-video-eyebrow">
            <span className="pv-eyebrow">Why we build this way</span>
          </div>
          <div className="philosophy-video-frame" ref={frameRef}>
            <span className="pv-corner pv-corner--tl"></span>
            <span className="pv-corner pv-corner--tr"></span>
            <span className="pv-corner pv-corner--bl"></span>
            <span className="pv-corner pv-corner--br"></span>
            <video
              ref={videoRef}
              className="philosophy-video"
              src="/videos/Weave-Philosophy-1.mp4"
              poster="/videos/weave-philosophy-poster.png"
              muted
              playsInline
              preload="metadata"
              aria-label="Why we build this way — Weave philosophy video"
            />
            <button ref={controlRef} className="pv-control" aria-label="Play video">
              <svg className="pv-icon pv-icon--play" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
              <svg className="pv-icon pv-icon--pause" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{display:'none'}}><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
              <svg className="pv-icon pv-icon--replay" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{display:'none'}}><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/></svg>
            </button>
            <div className="pv-progress-wrap">
              <div ref={barRef} className="pv-progress-bar"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Persona pain points */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="persona-grid">
            {PERSONAS.map((p, i) => (
              <div key={i} className="persona-card">
                {isCanvas && <div className="canvas-card-rail"><span className="rail-left">{`SYS.${String(i+1).padStart(2,'0')} // PERSONA`}</span><span className="rail-right">STATUS: MAPPED</span></div>}
                {isObsidian && <div className="obs-card-rail"><span className="obs-rail-left">{`SYS.${String(i+1).padStart(2,'0')} // PERSONA`}</span><span className="obs-rail-right">STATUS: MAPPED</span></div>}
                <div className="persona-icon" style={{ background: p.bg, color: p.color }}>{p.icon}</div>
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

      {/* Category section */}
      <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <p className="section-label">The Category</p>
          <h2 className="section-title">A new category. A new kind of platform.</h2>
          <p className="section-sub" style={{ marginBottom: 48 }}>
            Every major discipline in software has a tool that optimizes its output. None of them preserve the thinking behind the output.
          </p>

          <div className="compare-wrap" style={{ marginBottom: 40 }}>
            <table className="compare-table">
              <thead>
                <tr>
                  <th style={{ width: 160 }}></th>
                  <th>Figma</th>
                  <th>Linear / Jira</th>
                  <th>Claude</th>
                  <th style={{ color: 'var(--purple)' }}>Weave</th>
                </tr>
              </thead>
              <tbody>
                {CATEGORY_ROWS.map((row, i) => (
                  <tr key={i}>
                    <td>{row.label}</td>
                    <td style={{ color: 'var(--text-3)' }}>{row.figma}</td>
                    <td style={{ color: 'var(--text-3)' }}>{row.linear}</td>
                    <td style={{ color: 'var(--text-3)' }}>{row.claude}</td>
                    <td style={{ color: row.highlight ? 'var(--purple)' : 'var(--teal)', fontWeight: row.highlight ? 700 : 500 }}>{row.weave}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{
            background: 'var(--bg-card)', border: '1px solid var(--border)',
            borderRadius: 16, padding: '28px 32px',
            borderLeft: '3px solid var(--purple)',
          }}>
            <p style={{ fontSize: 16, color: 'var(--text-2)', lineHeight: 1.75, fontStyle: 'italic' }}>
              "Weave doesn't replace Figma, Jira, or Claude. It sits above them — preserving the thread that connects customer insight to shipped experience, and making sure that thread never breaks."
            </p>
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <p className="section-label">Before and After</p>
          <h2 className="section-title">Without Weave vs. With Weave</h2>
          <p className="section-sub" style={{ marginBottom: 48 }}>
            The difference isn't just tools. It's a fundamental shift in how teams stay connected to the customer problems they're solving.
          </p>
          <div className="compare-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Dimension</th>
                  <th style={{ color: 'var(--text-2)' }}>Without Weave</th>
                  <th style={{ color: 'var(--teal)' }}>With Weave</th>
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
            Weave is in early access with select teams. Here's what they've told us.
          </p>
          <div className="testimonial-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial-card">
                {isCanvas && <div className="canvas-card-rail"><span className="rail-left">{`SYS.${String(i+1).padStart(2,'0')} // SIGNAL`}</span><span className="rail-right">STATUS: VERIFIED</span></div>}
                {isObsidian && <div className="obs-card-rail"><span className="obs-rail-left">{`SYS.${String(i+1).padStart(2,'0')} // SIGNAL`}</span><span className="obs-rail-right">STATUS: VERIFIED</span></div>}
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

  return outerFrame(isCanvas, isObsidian, content)
}
