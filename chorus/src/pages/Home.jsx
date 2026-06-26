import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { useTheme } from '../ThemeContext'

function ObsGeoArt() {
  return (
    <div className="obs-geo-art" aria-hidden="true">
      <div className="obs-geo-panel obs-geo-panel--coral">
        <div className="obs-geo-rail">
          <span>SYS.01 // FRAGMENTS</span>
          <span className="obs-rail-cycle obs-rail-cycle--coral">THREADS: DISCONNECTED</span>
        </div>
        <div className="obs-geo-assembly">
          <svg className="obs-geo-svg obs-geo-svg--bg" viewBox="0 0 100 100">
            <polygon points="50,0 100,50 50,100 0,50" fill="#1A1A1A" />
          </svg>
          <div className="obs-shape-wrap obs-shape-wrap--circle">
            <div className="obs-geo-circle"></div>
          </div>
          <div className="obs-shape-wrap obs-shape-wrap--square-coral">
            <div className="obs-geo-square"></div>
          </div>
          <svg id="obs-wire-coral" className="obs-geo-svg obs-geo-svg--wire" viewBox="0 0 100 100">
            <circle id="obs-coral-circle" cx="50" cy="50" r="35.35" fill="none" stroke="#1A1A1A" strokeWidth="1.5" vectorEffect="non-scaling-stroke" opacity="0.4" strokeDasharray="222" strokeDashoffset="222"/>
            <rect id="obs-coral-rect" x="25" y="25" width="50" height="50" fill="none" stroke="#F47C59" strokeWidth="0.5" vectorEffect="non-scaling-stroke" opacity="0.5" strokeDasharray="200" strokeDashoffset="200"/>
            <line id="obs-coral-line-1" x1="0" y1="0" x2="100" y2="100" stroke="#1A1A1A" strokeWidth="1" opacity="0.2" strokeDasharray="142" strokeDashoffset="142"/>
            <line id="obs-coral-line-2" x1="100" y1="0" x2="0" y2="100" stroke="#1A1A1A" strokeWidth="1" opacity="0.2" strokeDasharray="142" strokeDashoffset="142"/>
          </svg>
          <div className="obs-geo-node obs-geo-node--l"></div>
          <div className="obs-geo-node obs-geo-node--r"></div>
          <div className="obs-geo-node obs-geo-node--t"></div>
          <div className="obs-geo-node obs-geo-node--b"></div>
        </div>
      </div>
      <div className="obs-geo-panel obs-geo-panel--blue">
        <div className="obs-geo-rail">
          <span>SYS.02 // WEAVE</span>
          <span className="obs-rail-cycle obs-rail-cycle--blue">THREADS: CONNECTED</span>
        </div>
        <div className="obs-geo-assembly">
          <svg className="obs-geo-svg obs-geo-svg--bg" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50" fill="#1A1A1A" />
          </svg>
          <div className="obs-shape-wrap obs-shape-wrap--square-blue">
            <div className="obs-geo-square obs-geo-square--blue"></div>
          </div>
          <div className="obs-shape-wrap obs-shape-wrap--diamond">
            <div className="obs-geo-diamond"></div>
          </div>
          <svg id="obs-wire-blue" className="obs-geo-svg obs-geo-svg--wire" viewBox="0 0 100 100">
            <rect id="obs-blue-rect" x="25" y="25" width="50" height="50" fill="none" stroke="#92CFF2" strokeWidth="0.5" vectorEffect="non-scaling-stroke" opacity="0.6" strokeDasharray="200" strokeDashoffset="200"/>
            <line id="obs-blue-line-v" x1="50" y1="14.6" x2="50" y2="85.4" stroke="#1A1A1A" strokeWidth="1" opacity="0.3" strokeDasharray="70" strokeDashoffset="70"/>
            <line id="obs-blue-line-h" x1="14.6" y1="50" x2="85.4" y2="50" stroke="#1A1A1A" strokeWidth="1" opacity="0.3" strokeDasharray="70" strokeDashoffset="70"/>
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
  { value: '80%', label: 'Less time spent realigning on decisions already made', color: '#7F77DD' },
  { value: '3×', label: 'Faster from customer insight to sprint-ready output', color: '#1D9E75' },
  { value: '100%', label: 'Of your product decisions connected to the customer need behind them', color: '#378ADD' },
  { value: '0', label: 'Threads lost between idea and outcome', color: '#EF9F27' },
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
    body: 'Three governing agents — ECD, EPM, EDev — orchestrate specialist agents, enforce quality standards, and gate approvals. Agents execute. Humans approve. The thread is always preserved.',
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

function BlueprintGeoArt() {
  const containerRef = useRef(null)

  useEffect(() => {
    const host = containerRef.current
    if (!host) return

    const canvas = document.createElement('canvas')
    canvas.id = 'blueprint-canvas'
    host.appendChild(canvas)

    const gl = canvas.getContext('webgl', { alpha: true, antialias: true, premultipliedAlpha: false })
    if (!gl) { canvas.remove(); return }

    const vertexSource = `
      attribute vec2 a_position;
      attribute float a_alpha;
      attribute float a_intensity;
      uniform vec2 u_resolution;
      varying float v_alpha;
      varying float v_intensity;
      void main() {
        vec2 zeroToOne = a_position / u_resolution;
        vec2 clipSpace = zeroToOne * 2.0 - 1.0;
        gl_Position = vec4(clipSpace * vec2(1.0, -1.0), 0.0, 1.0);
        v_alpha = a_alpha;
        v_intensity = a_intensity;
      }
    `
    const fragmentSource = `
      precision mediump float;
      varying float v_alpha;
      varying float v_intensity;
      void main() {
        vec3 cold = vec3(0.52, 0.66, 0.78);
        vec3 white = vec3(1.0, 1.0, 1.0);
        vec3 color = mix(cold, white, clamp(v_intensity, 0.0, 1.0));
        gl_FragColor = vec4(color, v_alpha);
      }
    `
    const pointVertexSource = `
      attribute vec2 a_position;
      attribute float a_size;
      attribute float a_alpha;
      uniform vec2 u_resolution;
      varying float v_alpha;
      void main() {
        vec2 zeroToOne = a_position / u_resolution;
        vec2 clipSpace = zeroToOne * 2.0 - 1.0;
        gl_Position = vec4(clipSpace * vec2(1.0, -1.0), 0.0, 1.0);
        gl_PointSize = a_size;
        v_alpha = a_alpha;
      }
    `
    const pointFragmentSource = `
      precision mediump float;
      varying float v_alpha;
      void main() {
        vec2 c = gl_PointCoord - vec2(0.5);
        float d = length(c);
        float core = smoothstep(0.5, 0.0, d);
        float halo = smoothstep(0.5, 0.18, d) * 0.42;
        vec3 color = mix(vec3(0.56, 0.70, 0.84), vec3(1.0), core);
        gl_FragColor = vec4(color, (core + halo) * v_alpha);
      }
    `

    function makeShader(type, source) {
      const s = gl.createShader(type)
      gl.shaderSource(s, source)
      gl.compileShader(s)
      return s
    }
    function makeProgram(vs, fs) {
      const p = gl.createProgram()
      gl.attachShader(p, makeShader(gl.VERTEX_SHADER, vs))
      gl.attachShader(p, makeShader(gl.FRAGMENT_SHADER, fs))
      gl.linkProgram(p)
      return p
    }

    const stripProgram = makeProgram(vertexSource, fragmentSource)
    const pointProgram = makeProgram(pointVertexSource, pointFragmentSource)
    const stripBuffer = gl.createBuffer()
    const pointBuffer = gl.createBuffer()

    const stripPos       = gl.getAttribLocation(stripProgram, 'a_position')
    const stripAlpha     = gl.getAttribLocation(stripProgram, 'a_alpha')
    const stripIntensity = gl.getAttribLocation(stripProgram, 'a_intensity')
    const stripRes       = gl.getUniformLocation(stripProgram, 'u_resolution')
    const pointPos       = gl.getAttribLocation(pointProgram, 'a_position')
    const pointSize      = gl.getAttribLocation(pointProgram, 'a_size')
    const pointAlpha     = gl.getAttribLocation(pointProgram, 'a_alpha')
    const pointRes       = gl.getUniformLocation(pointProgram, 'u_resolution')

    let W = 1, H = 1, ratio = 1

    function resize() {
      const rect = host.getBoundingClientRect()
      ratio = Math.min(window.devicePixelRatio || 1, 2)
      W = Math.max(1, Math.floor(rect.width * ratio))
      H = Math.max(1, Math.floor(rect.height * ratio))
      canvas.width = W
      canvas.height = H
      gl.viewport(0, 0, W, H)
    }
    window.addEventListener('resize', resize, { passive: true })
    resize()

    function verticalCurve(t, lane, time) {
      const wave = Math.sin(t * Math.PI * 2.0 + time * 0.28) * 0.012
      return [
        W * (0.835 - 0.265 * Math.sin(t * Math.PI * 0.92) + 0.078 * Math.sin(t * Math.PI * 2.18 + 0.66) + wave),
        H * (-0.18 + 1.36 * t)
      ]
    }
    function lowerCurve(t, lane, time) {
      return [
        W * (0.27 + 0.84 * t),
        H * (0.825 - 0.305 * Math.sin(Math.PI * t) + 0.052 * Math.sin(Math.PI * 2.0 * t + 1.2 + time * 0.18))
      ]
    }
    function loopCurve(t, lane, time) {
      const a = t * Math.PI * 2.0
      const cx = W * 0.555, cy = H * 0.565
      const rx = W * 0.205, ry = H * 0.108
      const rot = -0.22
      const px = Math.cos(a) * rx
      const py = Math.sin(a) * ry
      const wobble = Math.sin(a * 3.0 + time * 0.25) * H * 0.004
      return [
        cx + px * Math.cos(rot) - (py + wobble) * Math.sin(rot),
        cy + px * Math.sin(rot) + (py + wobble) * Math.cos(rot)
      ]
    }
    function bottomCurve(t, lane, time) {
      return [
        W * (0.505 + 0.63 * t),
        H * (1.03 - 0.145 * Math.sin(Math.PI * t) + 0.025 * Math.sin(Math.PI * 2.0 * t + time * 0.16))
      ]
    }

    function starLine(cx, cy, length, angle, thickness, alpha, data) {
      const nx = Math.cos(angle), ny = Math.sin(angle)
      const px = -ny * thickness * 0.5, py = nx * thickness * 0.5
      const x1 = cx - nx * length * 0.5, y1 = cy - ny * length * 0.5
      const x2 = cx + nx * length * 0.5, y2 = cy + ny * length * 0.5
      data.push(x1+px, y1+py, alpha, 1, x1-px, y1-py, alpha, 1, x2+px, y2+py, 0, 1, x2-px, y2-py, 0, 1)
    }

    function buildStrip(curve, lanes, segments, spacing, thickness, alpha, intensity, time, data, closed) {
      for (let l = -lanes; l <= lanes; l++) {
        const lane = l * spacing * ratio
        const points = []
        for (let i = 0; i <= segments; i++) points.push(curve(i / segments, l, time))
        const lp = []
        for (let i = 0; i <= segments; i++) {
          const prev = points[Math.max(0, i-1)]
          const next = points[Math.min(segments, i+1)]
          let dx = next[0]-prev[0], dy = next[1]-prev[1]
          const len = Math.hypot(dx, dy) || 1
          dx /= len; dy /= len
          lp.push([points[i][0] + (-dy)*lane, points[i][1] + dx*lane, -dy, dx])
        }
        for (let i = 0; i <= segments; i++) {
          const t = i / segments
          const p = lp[i]
          const taper = closed ? 1 : Math.min(1, Math.min(t, 1-t) * 5.2)
          const shimmer = 0.78 + Math.sin(t*9+l*0.7+time*0.5) * 0.22
          const a = alpha * taper * shimmer
          const b = intensity + Math.max(0, l) * 0.016
          const half = thickness * ratio * (0.84 + Math.abs(l) * 0.018)
          data.push(p[0]+p[2]*half, p[1]+p[3]*half, a, b)
          data.push(p[0]-p[2]*half, p[1]-p[3]*half, a, b)
        }
        data.push(NaN, NaN, 0, 0, NaN, NaN, 0, 0)
      }
    }

    function buildPoints(time, data) {
      const moving = [
        { curve: verticalCurve, t: (time*0.045+0.18)%1, lane:-4, size:19, alpha:0.95 },
        { curve: verticalCurve, t: (time*0.035+0.44)%1, lane:3,  size:15, alpha:0.78 },
        { curve: verticalCurve, t: (time*0.052+0.73)%1, lane:6,  size:12, alpha:0.7  },
        { curve: lowerCurve,    t: (time*0.033+0.22)%1, lane:-5, size:9,  alpha:0.52 },
        { curve: lowerCurve,    t: (time*0.028+0.64)%1, lane:2,  size:11, alpha:0.58 },
        { curve: loopCurve,     t: (time*0.026+0.12)%1, lane:-2, size:13, alpha:0.88 },
        { curve: loopCurve,     t: (time*0.031+0.53)%1, lane:5,  size:10, alpha:0.72 },
        { curve: bottomCurve,   t: (time*0.02+0.36)%1,  lane:3,  size:8,  alpha:0.46 },
        { curve: bottomCurve,   t: (time*0.023+0.76)%1, lane:-4, size:9,  alpha:0.5  },
      ]
      for (const item of moving) {
        const p = item.curve(item.t, item.lane, time)
        const d = item.curve(Math.min(1, item.t+0.01), item.lane, time)
        const dx = d[0]-p[0], dy = d[1]-p[1]
        const len = Math.hypot(dx, dy) || 1
        data.push(p[0]+(-dy/len)*item.lane*10*ratio, p[1]+(dx/len)*item.lane*10*ratio, item.size*ratio, item.alpha)
      }
      const fixed = [
        [0.69,0.29,8,0.64],[0.715,0.365,12,0.74],[0.783,0.482,7,0.48],
        [0.485,0.825,13,0.78],[0.522,0.814,8,0.58],[0.548,0.77,6,0.5],
        [0.935,0.57,7,0.55],[0.89,0.848,6,0.45],[0.626,0.418,5,0.42]
      ]
      for (const f of fixed) {
        const pulse = 0.76 + Math.sin(time*1.2+f[0]*12) * 0.24
        data.push(W*f[0], H*f[1], f[2]*ratio*pulse, f[3])
      }
    }

    let raf
    function render(now) {
      const time = now * 0.001
      gl.clearColor(0,0,0,0)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.enable(gl.BLEND)
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE)

      const stripData = []
      buildStrip(lowerCurve,    7, 150, 7.1, 1.2,  0.18, 0.62, time, stripData, false)
      buildStrip(bottomCurve,   7, 120, 7.0, 1.1,  0.13, 0.58, time, stripData, false)
      buildStrip(loopCurve,     6, 168, 8.1, 1.25, 0.22, 0.68, time, stripData, true)
      buildStrip(verticalCurve, 5, 170, 9.8, 6.2,  0.16, 0.74, time, stripData, false)
      buildStrip(verticalCurve, 5, 170, 9.8, 2.25, 0.94, 1.0,  time, stripData, false)
      starLine(W*0.742, H*0.235, W*0.12,  -2.5,  1.0*ratio, 0.5,  stripData)
      starLine(W*0.708, H*0.71,  W*0.105,  1.12, 1.0*ratio, 0.43, stripData)
      starLine(W*0.905, H*0.518, W*0.085, -0.92, 1.0*ratio, 0.32, stripData)

      gl.useProgram(stripProgram)
      gl.uniform2f(stripRes, W, H)
      gl.bindBuffer(gl.ARRAY_BUFFER, stripBuffer)
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(stripData), gl.DYNAMIC_DRAW)
      gl.enableVertexAttribArray(stripPos)
      gl.enableVertexAttribArray(stripAlpha)
      gl.enableVertexAttribArray(stripIntensity)
      gl.vertexAttribPointer(stripPos,       2, gl.FLOAT, false, 16, 0)
      gl.vertexAttribPointer(stripAlpha,     1, gl.FLOAT, false, 16, 8)
      gl.vertexAttribPointer(stripIntensity, 1, gl.FLOAT, false, 16, 12)

      let start = 0
      for (let i = 0; i < stripData.length/4; i++) {
        if (Number.isNaN(stripData[i*4])) {
          const count = i - start
          if (count > 2) gl.drawArrays(gl.TRIANGLE_STRIP, start, count)
          start = i + 2; i++
        }
      }
      const rem = stripData.length/4 - start
      if (rem > 2) gl.drawArrays(gl.TRIANGLE_STRIP, start, rem)

      const pointData = []
      buildPoints(time, pointData)
      gl.useProgram(pointProgram)
      gl.uniform2f(pointRes, W, H)
      gl.bindBuffer(gl.ARRAY_BUFFER, pointBuffer)
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(pointData), gl.DYNAMIC_DRAW)
      gl.enableVertexAttribArray(pointPos)
      gl.enableVertexAttribArray(pointSize)
      gl.enableVertexAttribArray(pointAlpha)
      gl.vertexAttribPointer(pointPos,   2, gl.FLOAT, false, 16, 0)
      gl.vertexAttribPointer(pointSize,  1, gl.FLOAT, false, 16, 8)
      gl.vertexAttribPointer(pointAlpha, 1, gl.FLOAT, false, 16, 12)
      gl.drawArrays(gl.POINTS, 0, pointData.length/4)

      raf = requestAnimationFrame(render)
    }
    raf = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      canvas.remove()
    }
  }, [])

  return <div ref={containerRef} className="bp-canvas-host" aria-hidden="true" style={{position:'absolute',inset:0,pointerEvents:'none',zIndex:0}} />
}

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

  useEffect(() => {
    function isObsidianTheme() {
      return document.documentElement.getAttribute('data-theme') === '';
    }
    const coralPhrases = ['THREADS: DISCONNECTED','CONTEXT: FRAGMENTED','DECISIONS: SILOED','RESEARCH: LOST','HANDOFFS: BROKEN'];
    const bluePhrases  = ['THREADS: CONNECTED','CONTEXT: PRESERVED','DECISIONS: TRACED','RESEARCH: SURFACED','HANDOFFS: SEAMLESS'];
    let coralTimer = null, blueTimer = null;
    function cycleText(el, phrases, indexRef, delay) {
      return setInterval(() => {
        if (!isObsidianTheme()) return;
        el.classList.add('obs-rail-fade-out');
        setTimeout(() => {
          indexRef.i = (indexRef.i + 1) % phrases.length;
          el.textContent = phrases[indexRef.i];
          el.classList.remove('obs-rail-fade-out');
          el.classList.add('obs-rail-fade-in');
          setTimeout(() => el.classList.remove('obs-rail-fade-in'), 600);
        }, 400);
      }, delay);
    }
    function startCycling() {
      const coralEl = document.querySelector('.obs-rail-cycle--coral');
      const blueEl  = document.querySelector('.obs-rail-cycle--blue');
      if (!coralEl || !blueEl) return;
      const coralRef = { i: 0 }, blueRef = { i: 0 };
      coralTimer = cycleText(coralEl, coralPhrases, coralRef, 3000);
      blueTimer  = cycleText(blueEl,  bluePhrases,  blueRef,  4200);
    }
    function stopCycling() {
      if (coralTimer) { clearInterval(coralTimer); coralTimer = null; }
      if (blueTimer)  { clearInterval(blueTimer);  blueTimer  = null; }
    }
    if (isObsidianTheme()) startCycling();
    const observer = new MutationObserver(() => {
      if (isObsidianTheme()) {
        startCycling();
      } else {
        stopCycling();
        const coralEl = document.querySelector('.obs-rail-cycle--coral');
        const blueEl  = document.querySelector('.obs-rail-cycle--blue');
        if (coralEl) coralEl.textContent = 'THREADS: DISCONNECTED';
        if (blueEl)  blueEl.textContent  = 'THREADS: CONNECTED';
      }
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => { stopCycling(); observer.disconnect(); };
  }, []);

  const content = (
    <>
      <section className="hero">
        {isBlueprint && <BlueprintGeoArt />}
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
                Never lose the thread.
              </h1>
              <p className="hero-sub">
                Every customer story. Every design decision. Every requirement. Every line of code. Each is a thread.
              </p>
              <p className="hero-sub">
                Weave is where those threads become a product — and nothing gets lost between idea and outcome.
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
              <button className="bv-play-btn-overlay" onClick={handlePlayVideo} aria-label="Play brand video">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
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
          <div className="stats-subhead">
            <p className="stats-subhead-line">Every decision traceable.</p>
            <p className="stats-subhead-line">Every insight preserved.</p>
            <p className="stats-subhead-line">Every agent in context.</p>
            <p className="stats-subhead-line">Every human in control.</p>
          </div>
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
