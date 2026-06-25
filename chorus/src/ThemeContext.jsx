import { createContext, useContext, useState, useEffect, useRef } from 'react'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('obsidian')
  const bpCanvas = useRef(null)
  const bpGl = useRef(null)
  const bpRaf = useRef(null)
  const obsCanvas = useRef(null)
  const obsRaf = useRef(null)

  // ── BLUEPRINT WebGL strip + point system ──────────────────────────────────
  function startBlueprintCanvas() {
    const hero = document.querySelector('.hero')
    if (!hero || bpCanvas.current) return

    const c = document.createElement('canvas')
    c.id = 'blueprint-orbit'
    c.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;'
    c.style.filter = 'drop-shadow(0 0 1.15rem rgba(185,218,255,0.28))'
    hero.insertBefore(c, hero.firstChild)
    bpCanvas.current = c

    const gl = c.getContext('webgl', { alpha: true, antialias: true, premultipliedAlpha: false })
    if (!gl) { startBlueprintCanvasFallback(c); return }
    bpGl.current = gl

    const stripVS = `
      attribute vec2 a_pos; attribute float a_alpha; attribute float a_intensity;
      uniform vec2 u_res; varying float v_alpha; varying float v_intensity;
      void main(){
        vec2 clip=(a_pos/u_res)*2.0-1.0;
        gl_Position=vec4(clip*vec2(1.0,-1.0),0.0,1.0);
        v_alpha=a_alpha; v_intensity=a_intensity;
      }`
    const stripFS = `
      precision mediump float; varying float v_alpha; varying float v_intensity;
      void main(){
        vec3 cold=vec3(0.52,0.66,0.78); vec3 white=vec3(1.0,1.0,1.0);
        vec3 color=mix(cold,white,clamp(v_intensity,0.0,1.0));
        gl_FragColor=vec4(color,v_alpha);
      }`
    const ptVS = `
      attribute vec2 a_pos; attribute float a_size; attribute float a_alpha;
      uniform vec2 u_res; varying float v_alpha;
      void main(){
        vec2 clip=(a_pos/u_res)*2.0-1.0;
        gl_Position=vec4(clip*vec2(1.0,-1.0),0.0,1.0);
        gl_PointSize=a_size; v_alpha=a_alpha;
      }`
    const ptFS = `
      precision mediump float; varying float v_alpha;
      void main(){
        vec2 cc=gl_PointCoord-vec2(0.5); float d=length(cc);
        float core=smoothstep(0.5,0.0,d); float halo=smoothstep(0.5,0.18,d)*0.42;
        vec3 color=mix(vec3(0.56,0.70,0.84),vec3(1.0),core);
        gl_FragColor=vec4(color,(core+halo)*v_alpha);
      }`

    function mkShader(type, src) {
      const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s
    }
    function mkProg(vs, fs) {
      const p = gl.createProgram()
      gl.attachShader(p, mkShader(gl.VERTEX_SHADER, vs))
      gl.attachShader(p, mkShader(gl.FRAGMENT_SHADER, fs))
      gl.linkProgram(p); return p
    }

    const sProg = mkProg(stripVS, stripFS)
    const pProg = mkProg(ptVS, ptFS)
    const sBuf = gl.createBuffer(), pBuf = gl.createBuffer()

    let W = 1, H = 1, ratio = 1
    function resize() {
      const r = c.getBoundingClientRect()
      ratio = Math.min(window.devicePixelRatio || 1, 2)
      W = Math.max(1, Math.floor(r.width * ratio))
      H = Math.max(1, Math.floor(r.height * ratio))
      c.width = W; c.height = H; gl.viewport(0, 0, W, H)
    }
    window.addEventListener('resize', resize, { passive: true }); resize()

    function vCurve(t, l, time) {
      const wave = Math.sin(t * Math.PI * 2.0 + time * 0.28) * 0.012
      return [W * (0.835 - 0.265 * Math.sin(t * Math.PI * 0.92) + 0.078 * Math.sin(t * Math.PI * 2.18 + 0.66) + wave), H * (-0.18 + 1.36 * t)]
    }
    function lCurve(t, l, time) {
      return [W * (0.27 + 0.84 * t), H * (0.825 - 0.305 * Math.sin(Math.PI * t) + 0.052 * Math.sin(Math.PI * 2.0 * t + 1.2 + time * 0.18))]
    }
    function loopCurve(t, l, time) {
      const a = t * Math.PI * 2.0, cx = W * 0.555, cy = H * 0.565, rx = W * 0.205, ry = H * 0.108, rot = -0.22
      const px = Math.cos(a) * rx, py = Math.sin(a) * ry, wobble = Math.sin(a * 3.0 + time * 0.25) * H * 0.004
      return [cx + px * Math.cos(rot) - (py + wobble) * Math.sin(rot), cy + px * Math.sin(rot) + (py + wobble) * Math.cos(rot)]
    }
    function bCurve(t, l, time) {
      return [W * (0.505 + 0.63 * t), H * (1.03 - 0.145 * Math.sin(Math.PI * t) + 0.025 * Math.sin(Math.PI * 2.0 * t + time * 0.16))]
    }

    function buildStrip(curve, lanes, segs, spacing, thick, alpha, intensity, time, data, closed) {
      for (let l = -lanes; l <= lanes; l++) {
        const lane = l * spacing * ratio
        const pts = []
        for (let i = 0; i <= segs; i++) pts.push(curve(i / segs, l, time))
        const lp = []
        for (let i = 0; i <= segs; i++) {
          const prev = pts[Math.max(0, i - 1)], next = pts[Math.min(segs, i + 1)]
          let dx = next[0] - prev[0], dy = next[1] - prev[1]
          const len = Math.hypot(dx, dy) || 1; dx /= len; dy /= len
          lp.push([pts[i][0] + (-dy) * lane, pts[i][1] + dx * lane, -dy, dx])
        }
        for (let i = 0; i <= segs; i++) {
          const t = i / segs, p = lp[i]
          const taper = closed ? 1 : Math.min(1, Math.min(t, 1 - t) * 5.2)
          const shimmer = 0.78 + Math.sin(t * 9.0 + l * 0.7 + time * 0.5) * 0.22
          const a = alpha * taper * shimmer, b = intensity + Math.max(0, l) * 0.016
          const half = thick * ratio * (0.84 + Math.abs(l) * 0.018)
          data.push(p[0] + p[2] * half, p[1] + p[3] * half, a, b)
          data.push(p[0] - p[2] * half, p[1] - p[3] * half, a, b)
        }
        data.push(NaN, NaN, 0, 0, NaN, NaN, 0, 0)
      }
    }

    function starLine(cx, cy, len, angle, thick, alpha, data) {
      const nx = Math.cos(angle), ny = Math.sin(angle), px = -ny * thick * 0.5, py = nx * thick * 0.5
      const x1 = cx - nx * len * 0.5, y1 = cy - ny * len * 0.5, x2 = cx + nx * len * 0.5, y2 = cy + ny * len * 0.5
      data.push(x1 + px, y1 + py, alpha, 1, x1 - px, y1 - py, alpha, 1, x2 + px, y2 + py, 0, 1, x2 - px, y2 - py, 0, 1)
    }

    function buildPoints(time, data) {
      const moving = [
        { curve: vCurve,    t: (time * 0.045 + 0.18) % 1, lane: -4, size: 19, alpha: 0.95 },
        { curve: vCurve,    t: (time * 0.035 + 0.44) % 1, lane: 3,  size: 15, alpha: 0.78 },
        { curve: vCurve,    t: (time * 0.052 + 0.73) % 1, lane: 6,  size: 12, alpha: 0.70 },
        { curve: lCurve,    t: (time * 0.033 + 0.22) % 1, lane: -5, size: 9,  alpha: 0.52 },
        { curve: lCurve,    t: (time * 0.028 + 0.64) % 1, lane: 2,  size: 11, alpha: 0.58 },
        { curve: loopCurve, t: (time * 0.026 + 0.12) % 1, lane: -2, size: 13, alpha: 0.88 },
        { curve: loopCurve, t: (time * 0.031 + 0.53) % 1, lane: 5,  size: 10, alpha: 0.72 },
        { curve: bCurve,    t: (time * 0.02  + 0.36) % 1, lane: 3,  size: 8,  alpha: 0.46 },
        { curve: bCurve,    t: (time * 0.023 + 0.76) % 1, lane: -4, size: 9,  alpha: 0.50 },
      ]
      for (const item of moving) {
        const p = item.curve(item.t, item.lane, time)
        const d = item.curve(Math.min(1, item.t + 0.01), item.lane, time)
        const dx = d[0] - p[0], dy = d[1] - p[1], len = Math.hypot(dx, dy) || 1
        const nx = -dy / len, ny = dx / len
        data.push(p[0] + nx * item.lane * 10 * ratio, p[1] + ny * item.lane * 10 * ratio, item.size * ratio, item.alpha)
      }
      const fixed = [[0.69,0.29,8,0.64],[0.715,0.365,12,0.74],[0.783,0.482,7,0.48],
        [0.485,0.825,13,0.78],[0.522,0.814,8,0.58],[0.548,0.77,6,0.5],
        [0.935,0.57,7,0.55],[0.89,0.848,6,0.45],[0.626,0.418,5,0.42]]
      for (const f of fixed) {
        const pulse = 0.76 + Math.sin(time * 1.2 + f[0] * 12.0) * 0.24
        data.push(W * f[0], H * f[1], f[2] * ratio * pulse, f[3])
      }
    }

    function renderFrame(now) {
      if (!bpCanvas.current) return
      const time = now * 0.001
      gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT)
      gl.enable(gl.BLEND); gl.blendFunc(gl.SRC_ALPHA, gl.ONE)

      const sData = []
      buildStrip(lCurve,    7, 150, 7.1, 1.2, 0.18, 0.62, time, sData, false)
      buildStrip(bCurve,    7, 120, 7.0, 1.1, 0.13, 0.58, time, sData, false)
      buildStrip(loopCurve, 6, 168, 8.1, 1.25, 0.22, 0.68, time, sData, true)
      buildStrip(vCurve,    5, 170, 9.8, 6.2, 0.16, 0.74, time, sData, false)
      buildStrip(vCurve,    5, 170, 9.8, 2.25, 0.94, 1.0, time, sData, false)
      starLine(W * 0.742, H * 0.235, W * 0.12,  -2.5, 1.0 * ratio, 0.5, sData)
      starLine(W * 0.708, H * 0.71,  W * 0.105, 1.12, 1.0 * ratio, 0.43, sData)
      starLine(W * 0.905, H * 0.518, W * 0.085, -0.92, 1.0 * ratio, 0.32, sData)

      gl.useProgram(sProg)
      gl.uniform2f(gl.getUniformLocation(sProg, 'u_res'), W, H)
      gl.bindBuffer(gl.ARRAY_BUFFER, sBuf)
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(sData), gl.DYNAMIC_DRAW)
      const sPos = gl.getAttribLocation(sProg, 'a_pos')
      const sAlp = gl.getAttribLocation(sProg, 'a_alpha')
      const sInt = gl.getAttribLocation(sProg, 'a_intensity')
      gl.enableVertexAttribArray(sPos); gl.enableVertexAttribArray(sAlp); gl.enableVertexAttribArray(sInt)
      gl.vertexAttribPointer(sPos, 2, gl.FLOAT, false, 16, 0)
      gl.vertexAttribPointer(sAlp, 1, gl.FLOAT, false, 16, 8)
      gl.vertexAttribPointer(sInt, 1, gl.FLOAT, false, 16, 12)
      let start = 0
      for (let i = 0; i < sData.length / 4; i++) {
        if (Number.isNaN(sData[i * 4])) {
          const count = i - start; if (count > 2) gl.drawArrays(gl.TRIANGLE_STRIP, start, count)
          start = i + 2; i++
        }
      }
      const rem = sData.length / 4 - start; if (rem > 2) gl.drawArrays(gl.TRIANGLE_STRIP, start, rem)

      const pData = []; buildPoints(time, pData)
      gl.useProgram(pProg)
      gl.uniform2f(gl.getUniformLocation(pProg, 'u_res'), W, H)
      gl.bindBuffer(gl.ARRAY_BUFFER, pBuf)
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(pData), gl.DYNAMIC_DRAW)
      const pPos = gl.getAttribLocation(pProg, 'a_pos')
      const pSz  = gl.getAttribLocation(pProg, 'a_size')
      const pAlp = gl.getAttribLocation(pProg, 'a_alpha')
      gl.enableVertexAttribArray(pPos); gl.enableVertexAttribArray(pSz); gl.enableVertexAttribArray(pAlp)
      gl.vertexAttribPointer(pPos, 2, gl.FLOAT, false, 16, 0)
      gl.vertexAttribPointer(pSz, 1, gl.FLOAT, false, 16, 8)
      gl.vertexAttribPointer(pAlp, 1, gl.FLOAT, false, 16, 12)
      gl.drawArrays(gl.POINTS, 0, pData.length / 4)

      bpRaf.current = requestAnimationFrame(renderFrame)
    }

    bpRaf.current = requestAnimationFrame(renderFrame)
  }

  function startBlueprintCanvasFallback(c) {
    // 2D fallback if WebGL unavailable
    const ctx = c.getContext('2d')
    let W, H
    function resize() { W = c.width = c.offsetWidth; H = c.height = c.offsetHeight }
    const nodes = Array.from({ length: 28 }, (_, i) => ({
      angle: (i / 28) * Math.PI * 2, radius: 180 + (i * 37 % 280),
      speed: ((i % 7) - 3) * 0.0002, size: i % 3 === 0 ? 1.5 : 0.7, opacity: 0.18 + (i % 5) * 0.07,
    }))
    function draw() {
      ctx.clearRect(0, 0, W, H)
      const cx = W * 0.82, cy = H * 0.58
      nodes.forEach(n => {
        n.angle += n.speed
        ctx.beginPath(); ctx.arc(cx + Math.cos(n.angle) * n.radius, cy + Math.sin(n.angle) * n.radius * 0.55, n.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(185,218,255,${n.opacity})`; ctx.fill()
      })
      bpRaf.current = requestAnimationFrame(draw)
    }
    window.addEventListener('resize', resize); resize(); draw()
  }

  function stopBlueprintCanvas() {
    if (bpRaf.current) cancelAnimationFrame(bpRaf.current)
    if (bpCanvas.current) { bpCanvas.current.remove(); bpCanvas.current = null }
    bpGl.current = null; bpRaf.current = null
  }

  // ── OBSIDIAN Three.js-style particle field (canvas 2D) ───────────────────
  function startObsidianField() {
    const body = document.body
    if (document.getElementById('obsidian-field')) return
    const c = document.createElement('canvas')
    c.id = 'obsidian-field'
    c.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;opacity:0.5;'
    body.insertBefore(c, body.firstChild)
    obsCanvas.current = c

    const ctx = c.getContext('2d')
    let W, H, mouseX = 0, mouseY = 0, targetX = 0, targetY = 0
    const count = 500
    const posArr = Array.from({ length: count }, (_, i) => ({
      x: (((i * 7919) % 1000) / 1000 - 0.5) * 15,
      y: (((i * 6271) % 1000) / 1000 - 0.5) * 15,
      z: (((i * 4133) % 1000) / 1000 - 0.5) * 15,
    }))

    function resize() { W = c.width = window.innerWidth; H = c.height = window.innerHeight }
    function onMouse(e) { mouseX = e.clientX / W - 0.5; mouseY = e.clientY / H - 0.5 }
    window.addEventListener('resize', resize, { passive: true })
    document.addEventListener('mousemove', onMouse, { passive: true })
    resize()

    let t = 0
    function draw() {
      if (!obsCanvas.current) return
      t += 0.001
      targetX = mouseX * 0.5; targetY = mouseY * 0.5
      const camX = 3, camY = 0
      ctx.clearRect(0, 0, W, H)
      const cy = H / 2, cx = W / 2
      const rotY = t + targetX, rotX = targetY
      const cosY = Math.cos(rotY), sinY = Math.sin(rotY)
      const cosX = Math.cos(rotX), sinX = Math.sin(rotX)
      const wave = Math.sin(t * 0.2) * 0.1

      for (const p of posArr) {
        // rotate around Y
        const x1 = p.x * cosY - p.z * sinY
        const z1 = p.x * sinY + p.z * cosY
        // rotate around X
        const y1 = p.y * cosX - z1 * sinX
        const z2 = p.y * sinX + z1 * cosX + wave

        if (z2 < -2.5) continue
        const fov = 400, scale = fov / (fov + z2 * 80)
        const sx = cx + x1 * scale * 80
        const sy = cy + y1 * scale * 80
        const opacity = 0.05 + (scale - 0.5) * 0.25

        ctx.beginPath()
        ctx.arc(sx, sy, scale * 0.8, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(235,230,223,${Math.max(0, Math.min(0.4, opacity))})`
        ctx.fill()
      }

      obsRaf.current = requestAnimationFrame(draw)
    }
    obsRaf.current = requestAnimationFrame(draw)
  }

  function stopObsidianField() {
    if (obsRaf.current) cancelAnimationFrame(obsRaf.current)
    if (obsCanvas.current) { obsCanvas.current.remove(); obsCanvas.current = null }
    obsRaf.current = null
  }

  useEffect(() => {
    const saved = localStorage.getItem('weave-theme') || 'obsidian'
    setTheme(saved)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme === 'obsidian' ? '' : theme)
    localStorage.setItem('weave-theme', theme)

    function tryStart(fn, id, attempts = 0) {
      if (document.querySelector('.hero')) { fn(); return }
      if (attempts < 20) setTimeout(() => tryStart(fn, id, attempts + 1), 50)
    }

    function triggerBlueprintReveals() {
      if (document.documentElement.getAttribute('data-theme') !== 'blueprint') return
      const selectors = [
        '.section-label', '.eyebrow', 'h1', 'h2', '.section-title',
        '.section-sub', '.hero-sub', '.hero-actions', '.btn-row',
        '.problem-grid', '.pillars-grid', '.agents-grid', '.arch-grid',
        '.persona-grid', '.testimonial-grid', '.demo-layout', '.stats-row',
        '.hiw-layout', '.system-layout'
      ]
      const els = document.querySelectorAll(selectors.join(','))
      els.forEach(el => { el.setAttribute('data-reveal', ''); el.classList.remove('revealed') })
      requestAnimationFrame(() => {
        els.forEach((el, i) => {
          el.style.transitionDelay = `${i * 80}ms`
          setTimeout(() => el.classList.add('revealed'), 60 + i * 80)
        })
      })
    }

    if (theme === 'blueprint') {
      stopObsidianField()
      tryStart(startBlueprintCanvas, 'bp')
      setTimeout(triggerBlueprintReveals, 100)
    } else if (theme === 'obsidian') {
      stopBlueprintCanvas()
      tryStart(startObsidianField, 'obs')
    } else {
      stopBlueprintCanvas()
      stopObsidianField()
    }

    return () => {
      stopBlueprintCanvas()
      stopObsidianField()
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
