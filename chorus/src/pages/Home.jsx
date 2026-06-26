import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { useTheme } from '../ThemeContext'

function ObsGeoArt() {
  return (
    <div className="obs-geo-art" aria-hidden="true">
      <div className="obs-geo-panel obs-geo-panel--coral">
        <div className="obs-geo-rail">
          <span>SYS.01 // TOPO_EVAL</span>
          <span>COORDS: 34.05°N</span>
        </div>
        <div className="obs-geo-assembly">
          <svg className="obs-geo-svg obs-geo-svg--bg" viewBox="0 0 100 100">
            <polygon points="50,0 100,50 50,100 0,50" fill="#1A1A1A" />
          </svg>
          <div className="obs-geo-circle"></div>
          <div className="obs-geo-square"></div>
          <svg className="obs-geo-svg obs-geo-svg--wire" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="35.35" fill="none" stroke="#1A1A1A" strokeWidth="1.5" vectorEffect="non-scaling-stroke" opacity="0.4"/>
            <rect x="25" y="25" width="50" height="50" fill="none" stroke="#F47C59" strokeWidth="0.5" vectorEffect="non-scaling-stroke" opacity="0.5"/>
            <line x1="0" y1="0" x2="100" y2="100" stroke="#1A1A1A" strokeWidth="1" opacity="0.2"/>
            <line x1="100" y1="0" x2="0" y2="100" stroke="#1A1A1A" strokeWidth="1" opacity="0.2"/>
          </svg>
          <div className="obs-geo-node obs-geo-node--l"></div>
          <div className="obs-geo-node obs-geo-node--r"></div>
          <div className="obs-geo-node obs-geo-node--t"></div>
          <div className="obs-geo-node obs-geo-node--b"></div>
        </div>
      </div>
      <div className="obs-geo-panel obs-geo-panel--blue">
        <div className="obs-geo-rail">
          <span>SYS.02 // LOGIC</span>
          <span>STATUS: SECURE</span>
        </div>
        <div className="obs-geo-assembly">
          <svg className="obs-geo-svg obs-geo-svg--bg" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50" fill="#1A1A1A" />
          </svg>
          <div className="obs-geo-square obs-geo-square--blue"></div>
          <div className="obs-geo-diamond"></div>
          <svg className="obs-geo-svg obs-geo-svg--wire" viewBox="0 0 100 100">
            <rect x="25" y="25" width="50" height="50" fill="none" stroke="#92CFF2" strokeWidth="0.5" vectorEffect="non-scaling-stroke" opacity="0.6"/>
            <line x1="50" y1="14.6" x2="50" y2="85.4" stroke="#1A1A1A" strokeWidth="1" opacity="0.3"/>
            <line x1="14.6" y1="50" x2="85.4" y2="50" stroke="#1A1A1A" strokeWidth="1" opacity="0.3"/>
            <text x="50" y="54" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#92CFF2" opacity="0.8">+</text>
          </svg>
          <div className="obs-geo-node obs-geo-node--tl"></div>
          <div className="obs-geo-node obs-geo-node--tr"></div>
          <div className="obs-geo-node obs-geo-node--bl"></div>
          <div className="obs-geo-node obs-geo-node--br"></div>
        </div>
      </div>
    </div>
  )
}

function CanvasGeoArt() {
  return (
    <div className="canvas-geo-art" aria-hidden="true">
      <div className="geo-panel geo-panel--coral">
        <div className="geo-assembly">
          <svg className="geo-svg geo-svg--bg" viewBox="0 0 100 100">
            <polygon points="50,0 100,50 50,100 0,50" fill="#241208" />
          </svg>
          <div className="geo-circle"></div>
          <div className="geo-square"></div>
          <svg className="geo-svg geo-svg--wire" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="35.35" fill="none" stroke="#241208" strokeWidth="1.5" vectorEffect="non-scaling-stroke" opacity="0.4"/>
            <rect x="25" y="25" width="50" height="50" fill="none" stroke="#F47C59" strokeWidth="0.5" vectorEffect="non-scaling-stroke" opacity="0.5"/>
            <line x1="0" y1="0" x2="100" y2="100" stroke="#241208" strokeWidth="1" opacity="0.2"/>
            <line x1="100" y1="0" x2="0" y2="100" stroke="#241208" strokeWidth="1" opacity="0.2"/>
          </svg>
          <div className="geo-node geo-node--l"></div>
          <div className="geo-node geo-node--r"></div>
          <div className="geo-node geo-node--t"></div>
          <div className="geo-node geo-node--b"></div>
        </div>
      </div>
      <div className="geo-panel geo-panel--blue">
        <div className="geo-assembly">
          <svg className="geo-svg geo-svg--bg" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50" fill="#241208" />
          </svg>
          <div className="geo-square geo-square--blue"></div>
          <div className="geo-diamond"></div>
          <svg className="geo-svg geo-svg--wire" viewBox="0 0 100 100">
            <rect x="25" y="25" width="50" height="50" fill="none" stroke="#92CFF2" strokeWidth="0.5" vectorEffect="non-scaling-stroke" opacity="0.6"/>
            <line x1="50" y1="14.6" x2="50" y2="85.4" stroke="#241208" strokeWidth="1" opacity="0.3"/>
            <line x1="14.6" y1="50" x2="85.4" y2="50" stroke="#241208" strokeWidth="1" opacity="0.3"/>
            <text x="50" y="54" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#92CFF2" opacity="0.8">+</text>
          </svg>
          <div className="geo-node geo-node--tl"></div>
          <div className="geo-node geo-node--tr"></div>
          <div className="geo-node geo-node--bl"></div>
          <div className="geo-node geo-node--br"></div>
        </div>
      </div>
    </div>
  )
}

function OrbitalCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf
    let t = 0

    const resize = () => {
      const size = canvas.parentElement.offsetWidth
      canvas.width = size
      canvas.height = size
    }
    resize()
    window.addEventListener('resize', resize)

    const nodes = [
      { label: 'Design', color: '#7F77DD', angle: 0, radius: 0.32, size: 0.038 },
      { label: 'Product', color: '#1D9E75', angle: (2 * Math.PI) / 3, radius: 0.32, size: 0.038 },
      { label: 'Dev', color: '#378ADD', angle: (4 * Math.PI) / 3, radius: 0.32, size: 0.038 },
    ]

    const draw = () => {
      const w = canvas.width
      const cx = w / 2, cy = w / 2
      ctx.clearRect(0, 0, w, w)

      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, w * 0.5)
      grad.addColorStop(0, 'rgba(127,119,221,0.06)')
      grad.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, w, w)

      ctx.beginPath()
      ctx.arc(cx, cy, w * 0.32, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(255,255,255,0.06)'
      ctx.lineWidth = 1
      ctx.stroke()

      ctx.beginPath()
      ctx.arc(cx, cy, w * 0.44, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(255,255,255,0.03)'
      ctx.lineWidth = 1
      ctx.stroke()

      const centerPulse = 1 + Math.sin(t * 0.04) * 0.05
      const centerR = w * 0.075 * centerPulse
      const centerGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, centerR)
      centerGrad.addColorStop(0, 'rgba(127,119,221,0.9)')
      centerGrad.addColorStop(0.6, 'rgba(127,119,221,0.5)')
      centerGrad.addColorStop(1, 'rgba(127,119,221,0)')
      ctx.beginPath()
      ctx.arc(cx, cy, centerR, 0, Math.PI * 2)
      ctx.fillStyle = centerGrad
      ctx.fill()

      ctx.beginPath()
      ctx.arc(cx, cy, w * 0.068, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(127,119,221,0.4)'
      ctx.lineWidth = 1.5
      ctx.stroke()

      ctx.fillStyle = 'rgba(255,255,255,0.95)'
      ctx.font = `600 ${w * 0.028}px Syne, sans-serif`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText('Weave', cx, cy)

      nodes.forEach((node, i) => {
        const speed = 0.008 + i * 0.001
        const a = node.angle + t * speed
        const nx = cx + Math.cos(a) * w * node.radius
        const ny = cy + Math.sin(a) * w * node.radius

        const linePulse = 0.3 + Math.sin(t * 0.05 + i * 2) * 0.15
        ctx.beginPath()
        ctx.moveTo(cx, cy)
        ctx.lineTo(nx, ny)
        ctx.strokeStyle = `${node.color}${Math.round(linePulse * 255).toString(16).padStart(2,'0')}`
        ctx.lineWidth = 1.5
        ctx.stroke()

        const nodeR = w * node.size
        const ng = ctx.createRadialGradient(nx, ny, 0, nx, ny, nodeR * 1.6)
        ng.addColorStop(0, `${node.color}44`)
        ng.addColorStop(1, `${node.color}00`)
        ctx.beginPath()
        ctx.arc(nx, ny, nodeR * 1.6, 0, Math.PI * 2)
        ctx.fillStyle = ng
        ctx.fill()

        const pulse = 1 + Math.sin(t * 0.06 + i * 1.5) * 0.08
        ctx.beginPath()
        ctx.arc(nx, ny, nodeR * pulse, 0, Math.PI * 2)
        ctx.fillStyle = node.color
        ctx.fill()

        ctx.fillStyle = 'rgba(255,255,255,0.9)'
        ctx.font = `600 ${w * 0.024}px Inter, sans-serif`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(node.label, nx, ny)

        const pa = a + Math.PI * 0.3
        const px = cx + Math.cos(pa) * w * node.radius
        const py = cy + Math.sin(pa) * w * node.radius
        ctx.beginPath()
        ctx.arc(px, py, w * 0.008, 0, Math.PI * 2)
        ctx.fillStyle = `${node.color}60`
        ctx.fill()
      })

      t++
      raf = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="hero-canvas-wrap">
      <canvas ref={canvasRef} className="hero-canvas" aria-label="Weave canvas showing Design, Product, and Dev teams orbiting a central shared workspace" />
    </div>
  )
}

const PROBLEMS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
    color: '#7F77DD',
    bg: 'rgba(127,119,221,0.12)',
    title: 'Context gets lost at every handoff',
    body: 'Every tool your team uses optimizes for output — screens, tickets, answers. None of them preserve the reasoning behind the output. Every handoff is a lossy compression of context.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/>
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
      </svg>
    ),
    color: '#EF9F27',
    bg: 'rgba(239,159,39,0.12)',
    title: 'Teams manually resync instead of build',
    body: "Every time something changes — a user insight, a business pivot, a failed experiment — the whole team stops to manually rebuild shared understanding from scratch. That's not collaboration. That's coordination tax.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
    color: '#378ADD',
    bg: 'rgba(55,138,221,0.12)',
    title: 'AI makes the problem worse, not better',
    body: 'Agents running in isolation produce outputs no one can trace back to a decision. Without the thread connecting insight to execution, AI accelerates the fragmentation instead of resolving it.',
  },
]

const STATS = [
  { value: '80%', label: 'Reduction in context lost between handoffs', color: '#7F77DD' },
  { value: '3×', label: 'Faster from customer insight to sprint-ready output', color: '#1D9E75' },
  { value: '100%', label: 'Shared visibility across every team and agent', color: '#378ADD' },
  { value: '0', label: 'Decisions disconnected from the customer problem that caused them', color: '#EF9F27' },
]

const PILLARS = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3"/>
        <path d="M9 3v18M3 9h6M3 15h6"/>
      </svg>
    ),
    color: '#7F77DD',
    bg: 'rgba(127,119,221,0.12)',
    title: 'The Living Model',
    body: 'A shared workspace where every agent action, human decision, and approval is visible to Design, Product, and Dev in real time — around one living product model. Every artifact stays connected to the insight that caused it.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <circle cx="12" cy="3" r="1.5"/><circle cx="12" cy="21" r="1.5"/>
        <circle cx="3" cy="12" r="1.5"/><circle cx="21" cy="12" r="1.5"/>
        <path d="M12 6v3M12 15v3M6 12h3M15 12h3"/>
      </svg>
    ),
    color: '#1D9E75',
    bg: 'rgba(29,158,117,0.12)',
    title: 'Executive Agents',
    body: 'Three governing agents — ECD, EPM, EDev — orchestrate SAGE specialist agents, enforce quality standards, and gate approvals. Agents execute. Humans approve. The thread is always preserved.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    ),
    color: '#378ADD',
    bg: 'rgba(55,138,221,0.12)',
    title: 'Staged Workflow',
    body: 'Nothing promotes without a gate. Brief → Execute → Review → Approve → Ship. Human judgment at every critical junction, with a full audit trail and complete traceability attached.',
  },
]

const PROBLEM_RAILS = [
  { left: 'SYS.01 // CONTEXT', right: 'STATUS: FRAGMENTED' },
  { left: 'SYS.02 // RESYNC',  right: 'STATUS: DELAYED' },
  { left: 'SYS.03 // SIGNAL',  right: 'STATUS: LOST' },
]

const PILLAR_RAILS = [
  { left: 'SYS.01 // MODEL',  right: 'STATUS: LIVE' },
  { left: 'SYS.02 // AGENTS', right: 'STATUS: ACTIVE' },
  { left: 'SYS.03 // GATES',  right: 'STATUS: SECURE' },
]

export default function Home() {
  const { theme } = useTheme()
  const isCanvas = theme === 'canvas'
  const isObsidian = theme === 'obsidian'

  const isBlueprint = theme === 'blueprint'
  const heroVisual = isCanvas ? <CanvasGeoArt /> : isObsidian ? <ObsGeoArt /> : isBlueprint ? null : <OrbitalCanvas />
  const videoRef = useRef(null)
  const [videoPlaying, setVideoPlaying] = useState(false)
  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setVideoPlaying(true)
    }
  }
  const handlePauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      setVideoPlaying(false)
    }
  }

  const content = (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="animate-fade-up">
              <div className="hero-badge">
                <span className="badge badge-purple">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><circle cx="6" cy="6" r="4"/></svg>
                  Introducing Weave
                </span>
              </div>
              <h1 className="hero-title">
                The workplace where your team and your AI <span className="accent-purple">never lose the thread.</span>
              </h1>
              <p className="hero-sub">
                Weave is the living product model where humans and AI agents collaborate around every customer insight, design decision, and line of code — so nothing is ever disconnected, and every decision is smarter than the last.
              </p>
              <div className="hero-actions">
                <Link to="/demo" className="btn btn-primary btn-lg">Pull the Thread</Link>
                <Link to="/how-it-works" className="btn btn-ghost btn-lg">
                  See How It Works
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="animate-fade-up animate-delay-2">
              {heroVisual}
            </div>
          </div>
        </div>
      </section>

      {/* BRAND VIDEO */}
      <section className="brand-video-section" aria-label="Brand video">
        <div className="brand-video-wrap">
          <div className="brand-video-frame">
            <span className="bv-corner bv-corner--tl"></span>
            <span className="bv-corner bv-corner--tr"></span>
            <span className="bv-corner bv-corner--bl"></span>
            <span className="bv-corner bv-corner--br"></span>
            <video
              ref={videoRef}
              className="brand-video"
              src="/videos/weave-brand-video.mp4"
              poster="/videos/weave-brand-poster.png"
              loop
              playsInline
              preload="metadata"
              aria-label="Weave brand video"
              onClick={handlePauseVideo}
              onEnded={() => setVideoPlaying(false)}
              style={{ cursor: videoPlaying ? 'pointer' : 'default' }}
            />
            {!videoPlaying && (
              <button className="bv-play-overlay" onClick={handlePlayVideo} aria-label="Play brand video">
                <div className="bv-poster-logo">
                  <svg viewBox="0 0 260 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <defs>
                      <linearGradient id="wg" x1="0" y1="60" x2="260" y2="60" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#F0476A"/>
                        <stop offset="50%" stopColor="#F47C59"/>
                        <stop offset="100%" stopColor="#F5A623"/>
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="blur"/>
                        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                      </filter>
                    </defs>
                    <path
                      d="M10 70 Q30 20 65 60 Q85 85 100 60 Q115 35 130 60 Q145 85 160 60 Q175 35 195 60 Q230 100 250 70"
                      stroke="url(#wg)" strokeWidth="5" strokeLinecap="round" fill="none" filter="url(#glow)"
                    />
                    <path
                      d="M10 50 Q40 10 75 60 Q95 90 115 55 Q130 30 145 55 Q165 90 185 55 Q210 10 250 50"
                      stroke="url(#wg)" strokeWidth="5" strokeLinecap="round" fill="none" filter="url(#glow)" opacity="0.7"
                    />
                  </svg>
                </div>
                <div className="bv-play-btn" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </button>
            )}
          </div>
          <p className="brand-video-caption">
            <span className="bv-eyebrow">The Experience OS</span>
            Products aren't built. They're woven.
          </p>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section">
        <div className="container">
          <p className="section-label">The Problem</p>
          <h2 className="section-title" style={{ maxWidth: 560 }}>Your tools fragment the work. And the thinking behind it.</h2>
          <p className="section-sub" style={{ marginBottom: 48 }}>
            A customer insight becomes a meeting note. A decision disappears in Slack. Research never reaches engineering. Design rationale gets buried in Figma. By launch, no one remembers why the product was built that way.
          </p>
          <div className="problem-grid">
            {PROBLEMS.map((p, i) => (
              <div key={i} className="problem-card animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                {isCanvas && (
                  <div className="canvas-card-rail">
                    <span className="rail-left">{PROBLEM_RAILS[i].left}</span>
                    <span className="rail-right">{PROBLEM_RAILS[i].right}</span>
                  </div>
                )}
                {isObsidian && (
                  <div className="obs-card-rail">
                    <span className="obs-rail-left">{PROBLEM_RAILS[i].left}</span>
                    <span className="obs-rail-right">{PROBLEM_RAILS[i].right}</span>
                  </div>
                )}
                <div className="problem-icon" style={{ background: p.bg, color: p.color }}>{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section-sm">
        <div className="container">
          <div className="stats-row">
            {STATS.map((s, i) => (
              <div key={i} className="stat-item">
                <div className="stat-value" style={{ color: s.color }}>{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="section">
        <div className="container">
          <p className="section-label">How Weave Works</p>
          <h2 className="section-title">One living model. Every thread connected.</h2>
          <p className="section-sub" style={{ marginBottom: 48 }}>
            Weave isn't a project board, a chat interface, or another AI copilot. It's the continuous product intelligence platform where your PM, designer, researcher, engineer, and a team of specialized AI agents all work from the same living model — so every decision stays connected to the customer need that caused it.
          </p>
          <div className="pillars-grid">
            {PILLARS.map((p, i) => (
              <div key={i} className="pillar-card">
                {isCanvas && (
                  <div className="canvas-card-rail">
                    <span className="rail-left">{PILLAR_RAILS[i].left}</span>
                    <span className="rail-right">{PILLAR_RAILS[i].right}</span>
                  </div>
                )}
                {isObsidian && (
                  <div className="obs-card-rail">
                    <span className="obs-rail-left">{PILLAR_RAILS[i].left}</span>
                    <span className="obs-rail-right">{PILLAR_RAILS[i].right}</span>
                  </div>
                )}
                <div className="pillar-icon" style={{ background: p.bg, color: p.color }}>{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="section-sm">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title" style={{ marginBottom: 16 }}>Ready to see it in action?</h2>
          <p className="section-sub mx-auto" style={{ marginBottom: 32 }}>
            Join teams already using Weave to build together — humans and agents, on one living model.
          </p>
          <Link to="/demo" className="btn btn-primary btn-lg">Pull the Thread</Link>
        </div>
      </section>

      <Footer />
    </>
  )

  if (isCanvas) {
    return (
      <div className="site-outer-frame">
        <div className="frame-dot frame-dot--tl"></div>
        <div className="frame-dot frame-dot--tr"></div>
        <div className="frame-dot frame-dot--bl"></div>
        <div className="frame-dot frame-dot--br"></div>
        {content}
      </div>
    )
  }

  if (isObsidian) {
    return (
      <div className="site-outer-frame">
        <div className="obs-frame-dot obs-frame-dot--tl"></div>
        <div className="obs-frame-dot obs-frame-dot--tr"></div>
        <div className="obs-frame-dot obs-frame-dot--bl"></div>
        <div className="obs-frame-dot obs-frame-dot--br"></div>
        {content}
      </div>
    )
  }

  return content
}
