import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

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

      // Background subtle gradient
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, w * 0.5)
      grad.addColorStop(0, 'rgba(127,119,221,0.06)')
      grad.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, w, w)

      // Orbit ring
      ctx.beginPath()
      ctx.arc(cx, cy, w * 0.32, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(255,255,255,0.06)'
      ctx.lineWidth = 1
      ctx.stroke()

      // Outer orbit ring
      ctx.beginPath()
      ctx.arc(cx, cy, w * 0.44, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(255,255,255,0.03)'
      ctx.lineWidth = 1
      ctx.stroke()

      // Center node
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

      // Center glow ring
      ctx.beginPath()
      ctx.arc(cx, cy, w * 0.068, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(127,119,221,0.4)'
      ctx.lineWidth = 1.5
      ctx.stroke()

      // Center label
      ctx.fillStyle = 'rgba(255,255,255,0.95)'
      ctx.font = `600 ${w * 0.028}px Syne, sans-serif`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText('Chorus', cx, cy)

      // Orbiting nodes
      nodes.forEach((node, i) => {
        const speed = 0.008 + i * 0.001
        const a = node.angle + t * speed
        const nx = cx + Math.cos(a) * w * node.radius
        const ny = cy + Math.sin(a) * w * node.radius

        // Connection line
        const linePulse = 0.3 + Math.sin(t * 0.05 + i * 2) * 0.15
        ctx.beginPath()
        ctx.moveTo(cx, cy)
        ctx.lineTo(nx, ny)
        ctx.strokeStyle = `${node.color}${Math.round(linePulse * 255).toString(16).padStart(2,'0')}`
        ctx.lineWidth = 1.5
        ctx.stroke()

        // Node glow
        const nodeR = w * node.size
        const ng = ctx.createRadialGradient(nx, ny, 0, nx, ny, nodeR * 1.6)
        ng.addColorStop(0, `${node.color}44`)
        ng.addColorStop(1, `${node.color}00`)
        ctx.beginPath()
        ctx.arc(nx, ny, nodeR * 1.6, 0, Math.PI * 2)
        ctx.fillStyle = ng
        ctx.fill()

        // Node circle
        const pulse = 1 + Math.sin(t * 0.06 + i * 1.5) * 0.08
        ctx.beginPath()
        ctx.arc(nx, ny, nodeR * pulse, 0, Math.PI * 2)
        ctx.fillStyle = node.color
        ctx.fill()

        // Node label
        ctx.fillStyle = 'rgba(255,255,255,0.9)'
        ctx.font = `600 ${w * 0.024}px Inter, sans-serif`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(node.label, nx, ny)

        // Particle on orbit
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
      <canvas ref={canvasRef} className="hero-canvas" aria-label="Chorus orbital diagram showing Design, Product, and Dev teams orbiting a central hub" />
    </div>
  )
}

const PROBLEMS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    color: '#7F77DD',
    bg: 'rgba(127,119,221,0.12)',
    title: 'AI is a Black Box',
    body: 'Teams run agents in isolation. No one knows what ran, what failed, or what shipped. Decisions get made without context.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>
      </svg>
    ),
    color: '#EF9F27',
    bg: 'rgba(239,159,39,0.12)',
    title: 'Work is Fragmented',
    body: 'Design is in Figma, requirements are in Notion, code is in GitHub. No single surface shows where the work actually stands.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    color: '#378ADD',
    bg: 'rgba(55,138,221,0.12)',
    title: 'No Governance',
    body: 'When agents produce output, who approves? Who audits? There are no structured gates between agent work and production.',
  },
]

const STATS = [
  { value: '80%', label: 'Effort Reduction', color: '#7F77DD' },
  { value: '3×', label: 'Faster Delivery', color: '#1D9E75' },
  { value: '100%', label: 'Visibility', color: '#378ADD' },
  { value: '0', label: 'Governance Gaps', color: '#EF9F27' },
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
    title: 'The Canvas',
    body: 'A shared workspace where every agent action, human decision, and approval is visible to Design, Product, and Dev in real time.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <circle cx="12" cy="3" r="1.5"/>
        <circle cx="12" cy="21" r="1.5"/>
        <circle cx="3" cy="12" r="1.5"/>
        <circle cx="21" cy="12" r="1.5"/>
        <path d="M12 6v3M12 15v3M6 12h3M15 12h3"/>
      </svg>
    ),
    color: '#1D9E75',
    bg: 'rgba(29,158,117,0.12)',
    title: 'Executive Agents',
    body: 'Three governing agents — ECD, EPM, EDev — orchestrate sub-agents per discipline, enforce quality standards, and gate approvals.',
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
    body: 'Nothing promotes without a gate. Brief → Execute → Review → Approve → Ship. Human judgment at every critical junction.',
  },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="animate-fade-up">
              <div className="hero-badge">
                <span className="badge badge-purple">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <circle cx="6" cy="6" r="4"/>
                  </svg>
                  The Shared Agentic Canvas
                </span>
              </div>
              <h1 className="hero-title">
                AI Work,<br />
                <span className="accent-purple">Finally Visible</span>
              </h1>
              <p className="hero-sub">
                Chorus gives Design, Product, and Dev a single canvas where agents execute, humans approve, and nothing ships without governance.
              </p>
              <div className="hero-actions">
                <Link to="/demo" className="btn btn-primary btn-lg">Request Early Access</Link>
                <Link to="/how-it-works" className="btn btn-ghost btn-lg">
                  See How It Works
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="animate-fade-up animate-delay-2">
              <OrbitalCanvas />
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section">
        <div className="container">
          <p className="section-label">The Problem</p>
          <h2 className="section-title" style={{ maxWidth: 520 }}>AI work today is invisible and ungoverned</h2>
          <p className="section-sub" style={{ marginBottom: 48 }}>
            Every team is using AI. No team is using it together. The result is fragmented work, missed context, and zero accountability.
          </p>
          <div className="problem-grid">
            {PROBLEMS.map((p, i) => (
              <div key={i} className="problem-card animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="problem-icon" style={{ background: p.bg, color: p.color }}>
                  {p.icon}
                </div>
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
          <p className="section-label">How Chorus Works</p>
          <h2 className="section-title">Three pillars. One canvas.</h2>
          <p className="section-sub" style={{ marginBottom: 48 }}>
            Chorus isn't another AI tool. It's the governance layer that makes AI work safe for enterprise teams.
          </p>
          <div className="pillars-grid">
            {PILLARS.map((p, i) => (
              <div key={i} className="pillar-card">
                <div className="pillar-icon" style={{ background: p.bg, color: p.color }}>
                  {p.icon}
                </div>
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
            Join teams already using Chorus to govern their agentic workflows.
          </p>
          <Link to="/demo" className="btn btn-primary btn-lg">Request Early Access</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
