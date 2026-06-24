import { useEffect, useRef, useState } from 'react'
import Footer from '../components/Footer'

const NODE_DATA = {
  chorus: {
    label: 'Chorus',
    type: 'Platform',
    color: '#7F77DD',
    desc: 'The central canvas and governance engine. Routes briefs, manages state, enforces gates, and provides the shared workspace visible to all teams.',
    caps: ['Brief orchestration', 'State management', 'Audit trail', 'Cross-team sync'],
  },
  ecd: {
    label: 'ECD Agent',
    type: 'Executive Agent',
    color: '#9590e8',
    desc: 'The Executive Creative Director. Governs all design sub-agents, sets creative direction, and gates visual output before human review.',
    caps: ['Wireframe orchestration', 'Visual QA', 'Brand compliance', 'Design token generation'],
  },
  epm: {
    label: 'EPM Agent',
    type: 'Executive Agent',
    color: '#1D9E75',
    desc: 'The Executive Product Manager. Decomposes briefs into requirements, governs product sub-agents, and aligns output with business objectives.',
    caps: ['Brief decomposition', 'Requirements generation', 'Prioritisation', 'Acceptance criteria'],
  },
  edev: {
    label: 'EDev Agent',
    type: 'Executive Agent',
    color: '#378ADD',
    desc: 'The Executive Developer. Governs all engineering sub-agents, enforces architecture standards, and gates technical output.',
    caps: ['Code scaffolding', 'Architecture review', 'Quality gates', 'Deploy coordination'],
  },
  maya: {
    label: 'Maya',
    type: 'Human Gate',
    color: '#EF9F27',
    desc: 'Design Lead. Reviews and approves all design output before promotion. Her gate is the final checkpoint before design assets reach Dev.',
    caps: ['Design approval', 'Brand sign-off', 'Token review'],
  },
  jordan: {
    label: 'Jordan',
    type: 'Human Gate',
    color: '#EF9F27',
    desc: 'Product Manager. Reviews requirements, acceptance criteria, and product specs. Approves work for cross-team handoff.',
    caps: ['Requirements sign-off', 'Scope approval', 'Backlog prioritisation'],
  },
  alex: {
    label: 'Alex',
    type: 'Human Gate',
    color: '#EF9F27',
    desc: 'Dev Lead. Reviews code scaffolding, architecture decisions, and technical specs before implementation begins.',
    caps: ['Code review', 'Architecture approval', 'Tech debt assessment'],
  },
  chris: {
    label: 'Chris',
    type: 'Executive Gate',
    color: '#EF9F27',
    desc: 'Executive stakeholder. Final gating authority. Nothing promotes to production without Chris signing off on the complete aligned output.',
    caps: ['Final approval', 'Budget authorisation', 'Risk sign-off'],
  },
  wireframe: {
    label: 'Wireframe',
    type: 'Sub-Agent',
    color: '#9590e8',
    desc: 'Generates low-fidelity wireframes from brief descriptions. Outputs structured layout specs for Visual Agent.',
    caps: ['Layout generation', 'Component mapping', 'Responsive planning'],
  },
  visual: {
    label: 'Visual',
    type: 'Sub-Agent',
    color: '#9590e8',
    desc: 'Applies visual design — colour, typography, spacing — to wireframe structures. Outputs design token proposals.',
    caps: ['Visual styling', 'Token generation', 'Asset creation'],
  },
  reqs: {
    label: 'Requirements',
    type: 'Sub-Agent',
    color: '#1D9E75',
    desc: 'Converts brief intent into structured user stories, acceptance criteria, and definition-of-done checklists.',
    caps: ['User story writing', 'Acceptance criteria', 'DoD generation'],
  },
  scaffold: {
    label: 'Scaffold',
    type: 'Sub-Agent',
    color: '#378ADD',
    desc: 'Generates code scaffolding, file structure, and boilerplate based on approved requirements and design tokens.',
    caps: ['File structure', 'Boilerplate generation', 'Dependency mapping'],
  },
}

function buildNodes(w, h) {
  const cx = w / 2, cy = h / 2
  const r1 = Math.min(w, h) * 0.22
  const r2 = Math.min(w, h) * 0.38
  const r3 = Math.min(w, h) * 0.50

  return [
    { id: 'chorus', x: cx, y: cy, r: 28, ...NODE_DATA.chorus },
    // Ring 1 — Executive Agents
    { id: 'ecd', x: cx + Math.cos(-Math.PI/2) * r1, y: cy + Math.sin(-Math.PI/2) * r1, r: 20, ...NODE_DATA.ecd },
    { id: 'epm', x: cx + Math.cos(-Math.PI/2 + (2*Math.PI/3)) * r1, y: cy + Math.sin(-Math.PI/2 + (2*Math.PI/3)) * r1, r: 20, ...NODE_DATA.epm },
    { id: 'edev', x: cx + Math.cos(-Math.PI/2 + (4*Math.PI/3)) * r1, y: cy + Math.sin(-Math.PI/2 + (4*Math.PI/3)) * r1, r: 20, ...NODE_DATA.edev },
    // Ring 2 — Human Gates
    { id: 'maya', x: cx + Math.cos(-Math.PI/2) * r2, y: cy + Math.sin(-Math.PI/2) * r2, r: 16, ...NODE_DATA.maya },
    { id: 'jordan', x: cx + Math.cos(-Math.PI/2 + (2*Math.PI/3)) * r2, y: cy + Math.sin(-Math.PI/2 + (2*Math.PI/3)) * r2, r: 16, ...NODE_DATA.jordan },
    { id: 'alex', x: cx + Math.cos(-Math.PI/2 + (4*Math.PI/3)) * r2, y: cy + Math.sin(-Math.PI/2 + (4*Math.PI/3)) * r2, r: 16, ...NODE_DATA.alex },
    { id: 'chris', x: cx + Math.cos(0) * r2, y: cy + Math.sin(0) * r2, r: 16, ...NODE_DATA.chris },
    // Ring 3 — Sub-Agents
    { id: 'wireframe', x: cx + Math.cos(-Math.PI * 0.6) * r3, y: cy + Math.sin(-Math.PI * 0.6) * r3, r: 13, ...NODE_DATA.wireframe },
    { id: 'visual', x: cx + Math.cos(-Math.PI * 0.3) * r3, y: cy + Math.sin(-Math.PI * 0.3) * r3, r: 13, ...NODE_DATA.visual },
    { id: 'reqs', x: cx + Math.cos(Math.PI * 0.5) * r3, y: cy + Math.sin(Math.PI * 0.5) * r3, r: 13, ...NODE_DATA.reqs },
    { id: 'scaffold', x: cx + Math.cos(Math.PI * 0.85) * r3, y: cy + Math.sin(Math.PI * 0.85) * r3, r: 13, ...NODE_DATA.scaffold },
  ]
}

const EDGES = [
  ['chorus', 'ecd'], ['chorus', 'epm'], ['chorus', 'edev'],
  ['ecd', 'maya'], ['epm', 'jordan'], ['edev', 'alex'],
  ['chorus', 'chris'],
  ['ecd', 'wireframe'], ['ecd', 'visual'],
  ['epm', 'reqs'],
  ['edev', 'scaffold'],
]

export default function TheSystem() {
  const canvasRef = useRef(null)
  const [selected, setSelected] = useState(NODE_DATA.chorus)
  const nodesRef = useRef([])
  let raf = useRef(null)
  let t = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = Math.min(rect.width * 0.75, 600)
      nodesRef.current = buildNodes(canvas.width, canvas.height)
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      const w = canvas.width, h = canvas.height
      ctx.clearRect(0, 0, w, h)

      const nodes = nodesRef.current

      // Draw edges
      EDGES.forEach(([aId, bId]) => {
        const a = nodes.find(n => n.id === aId)
        const b = nodes.find(n => n.id === bId)
        if (!a || !b) return
        const pulse = 0.2 + Math.sin(t.current * 0.04 + (a.x + b.x) * 0.01) * 0.1
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.strokeStyle = `rgba(255,255,255,${pulse})`
        ctx.lineWidth = 1
        ctx.stroke()

        // Data pulse dot
        const progress = ((t.current * 0.008) % 1)
        const px = a.x + (b.x - a.x) * progress
        const py = a.y + (b.y - a.y) * progress
        ctx.beginPath()
        ctx.arc(px, py, 2, 0, Math.PI * 2)
        ctx.fillStyle = a.color + '99'
        ctx.fill()
      })

      // Draw nodes
      nodes.forEach(node => {
        const scale = 1 + Math.sin(t.current * 0.05 + node.x * 0.01) * 0.04

        // Glow
        const g = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.r * 2.5)
        g.addColorStop(0, node.color + '30')
        g.addColorStop(1, node.color + '00')
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.r * 2.5, 0, Math.PI * 2)
        ctx.fillStyle = g
        ctx.fill()

        // Circle
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.r * scale, 0, Math.PI * 2)
        ctx.fillStyle = node.color + (node.id === 'chorus' ? 'cc' : '99')
        ctx.fill()
        ctx.strokeStyle = node.color
        ctx.lineWidth = 1.5
        ctx.stroke()

        // Label
        ctx.fillStyle = '#fff'
        ctx.font = `${node.r > 20 ? 600 : 500} ${Math.max(node.r * 0.55, 10)}px Inter, sans-serif`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(node.label, node.x, node.y)
      })

      t.current++
      raf.current = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(raf.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const handleClick = (e) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const mx = (e.clientX - rect.left) * (canvas.width / rect.width)
    const my = (e.clientY - rect.top) * (canvas.height / rect.height)
    const hit = nodesRef.current.find(n => Math.hypot(n.x - mx, n.y - my) < n.r + 8)
    if (hit) setSelected(NODE_DATA[hit.id])
  }

  const typeColors = {
    'Platform': '#7F77DD',
    'Executive Agent': '#1D9E75',
    'Human Gate': '#EF9F27',
    'Executive Gate': '#EF9F27',
    'Sub-Agent': '#378ADD',
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">Architecture</p>
          <h1 className="section-title">The Chorus System</h1>
          <p className="section-sub mx-auto">
            An interactive map of every node in the Chorus canvas — from Executive Agents to Human Gates to sub-agents. Click any node to explore.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="system-layout">
            <div>
              <div className="system-canvas-wrap">
                <canvas
                  ref={canvasRef}
                  className="system-canvas"
                  onClick={handleClick}
                  style={{ cursor: 'pointer' }}
                  aria-label="Interactive node map of the Chorus system architecture"
                />
              </div>
              <p className="system-hint">Click any node to see details</p>
            </div>

            <div className="system-sidebar">
              {selected ? (
                <>
                  <h3>{selected.label}</h3>
                  <span
                    className="node-type-badge"
                    style={{
                      background: (typeColors[selected.type] || '#7F77DD') + '20',
                      color: typeColors[selected.type] || '#7F77DD',
                    }}
                  >
                    {selected.type}
                  </span>
                  <p>{selected.desc}</p>
                  <div style={{ fontSize: 12, color: 'var(--text-3)', marginBottom: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Capabilities</div>
                  <div className="node-caps">
                    {selected.caps.map(c => (
                      <div key={c} className="node-cap">
                        <div className="node-cap-dot" style={{ background: typeColors[selected.type] || '#7F77DD' }} />
                        {c}
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <p style={{ color: 'var(--text-3)', fontSize: 14 }}>Click a node to see details.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
