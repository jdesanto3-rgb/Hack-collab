import { useEffect } from 'react'
import Footer from '../components/Footer'
import { useTheme } from '../ThemeContext'

const SYSTEM_MAP_HTML = `
<div class="sm-header">
  <h2>Weave</h2>
  <div id="sm-breadcrumb">
    <span class="sm-bc-sep">›</span>
    <span id="sm-bc-disc"></span>
  </div>
</div>

<div id="sm-diagram-wrap">
  <button id="sm-back-btn">
    <span class="arrow">←</span> Overview
  </button>

  <svg id="sm-diagram" viewBox="230 148 1100 700" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="sm-shadow-node" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="2" stdDeviation="5" flood-color="#000" flood-opacity="0.07"/>
      </filter>
      <filter id="sm-shadow-md" x="-60%" y="-60%" width="220%" height="220%">
        <feDropShadow dx="0" dy="4" stdDeviation="11" flood-color="#000" flood-opacity="0.1"/>
      </filter>
      <radialGradient id="sm-rg-canvas" cx="50%" cy="50%" r="50%">
        <stop offset="0%"   stop-color="#F3F2ED"/>
        <stop offset="100%" stop-color="#ECEAE3"/>
      </radialGradient>
    </defs>

    <g id="sm-venn-layer">
      <g id="sm-vg-design" style="cursor:pointer">
        <circle class="sm-vc" id="sm-vc-design" cx="659" cy="350" r="162"
          fill="#7F77DD" fill-opacity="0.08" stroke="#7F77DD" stroke-width="1.5" stroke-opacity="0.38"/>
        <g id="sm-vl-design" style="pointer-events:none">
          <text x="659" y="344" font-family="-apple-system,BlinkMacSystemFont,'Inter',sans-serif"
            font-size="17" font-weight="700" letter-spacing="-0.2px" fill="#7F77DD"
            text-anchor="middle" dominant-baseline="middle">Design</text>
          <text id="sm-vhint-design" x="659" y="363"
            font-family="-apple-system,BlinkMacSystemFont,'Inter',sans-serif"
            font-size="10.5" fill="#7F77DD" fill-opacity="0.55"
            text-anchor="middle" dominant-baseline="middle">click to explore</text>
        </g>
        <circle id="sm-vh-design" cx="659" cy="350" r="162" fill="transparent"/>
      </g>

      <g id="sm-vg-product" style="cursor:pointer">
        <circle class="sm-vc" id="sm-vc-product" cx="901" cy="350" r="162"
          fill="#1D9E75" fill-opacity="0.08" stroke="#1D9E75" stroke-width="1.5" stroke-opacity="0.38"/>
        <g id="sm-vl-product" style="pointer-events:none">
          <text x="901" y="344" font-family="-apple-system,BlinkMacSystemFont,'Inter',sans-serif"
            font-size="17" font-weight="700" letter-spacing="-0.2px" fill="#1D9E75"
            text-anchor="middle" dominant-baseline="middle">Product</text>
          <text id="sm-vhint-product" x="901" y="363"
            font-family="-apple-system,BlinkMacSystemFont,'Inter',sans-serif"
            font-size="10.5" fill="#1D9E75" fill-opacity="0.55"
            text-anchor="middle" dominant-baseline="middle">click to explore</text>
        </g>
        <circle id="sm-vh-product" cx="901" cy="350" r="162" fill="transparent"/>
      </g>

      <g id="sm-vg-dev" style="cursor:pointer">
        <circle class="sm-vc" id="sm-vc-dev" cx="780" cy="560" r="162"
          fill="#378ADD" fill-opacity="0.08" stroke="#378ADD" stroke-width="1.5" stroke-opacity="0.38"/>
        <g id="sm-vl-dev" style="pointer-events:none">
          <text x="780" y="554" font-family="-apple-system,BlinkMacSystemFont,'Inter',sans-serif"
            font-size="17" font-weight="700" letter-spacing="-0.2px" fill="#378ADD"
            text-anchor="middle" dominant-baseline="middle">Dev</text>
          <text id="sm-vhint-dev" x="780" y="573"
            font-family="-apple-system,BlinkMacSystemFont,'Inter',sans-serif"
            font-size="10.5" fill="#378ADD" fill-opacity="0.55"
            text-anchor="middle" dominant-baseline="middle">click to explore</text>
        </g>
        <circle id="sm-vh-dev" cx="780" cy="560" r="162" fill="transparent"/>
      </g>

      <g id="sm-idle-desc">
        <rect x="310" y="736" width="940" height="90" rx="14"
          fill="white" fill-opacity="0.75" stroke="#ECEAE3" stroke-width="1"/>
        <text x="780" y="758" font-family="-apple-system,BlinkMacSystemFont,'Inter',sans-serif"
          font-size="13" fill="#9C9A92" text-anchor="middle">
          Figma has nodes. Miro has connectors. Linear has issues. GitHub has commits.
        </text>
        <text x="780" y="782" font-family="-apple-system,BlinkMacSystemFont,'Inter',sans-serif"
          font-size="18" font-weight="500" fill="#1C1C1A" text-anchor="middle">
          Weave has the thread.
        </text>
        <text x="780" y="808" font-family="-apple-system,BlinkMacSystemFont,'Inter',sans-serif"
          font-size="11.5" fill="#B4B2A9" text-anchor="middle" letter-spacing="0.01em">
          Click Design, Product, or Dev to explore each team&apos;s agents and people.
        </text>
      </g>

      <g id="sm-cn-canvas" class="sm-node">
        <circle cx="780" cy="420" r="72" fill="none" stroke="#D0CEC6" stroke-width="1"
          stroke-dasharray="4,5" opacity="0.5"/>
        <circle cx="780" cy="420" r="56" fill="url(#sm-rg-canvas)" stroke="#C0BEB5"
          stroke-width="1.8" filter="url(#sm-shadow-node)" class="main-circle"/>
        <text x="780" y="414" font-family="-apple-system,BlinkMacSystemFont,'Inter',sans-serif"
          font-size="13.5" font-weight="600" fill="#1C1C1A"
          text-anchor="middle" dominant-baseline="middle" pointer-events="none">Weave</text>
        <text x="780" y="430" font-family="-apple-system,BlinkMacSystemFont,'Inter',sans-serif"
          font-size="9.5" fill="#9C9A92"
          text-anchor="middle" dominant-baseline="middle" pointer-events="none">shared canvas</text>
        <circle cx="780" cy="420" r="66" fill="transparent"/>
      </g>
    </g>

    <g id="sm-edges-g"></g>
    <g id="sm-nodes-g"></g>

    <g id="sm-cn-client" class="sm-node" style="opacity:0; pointer-events:none">
      <circle cx="1082" cy="452" r="28" fill="#FBEAF0" stroke="#D4537E" stroke-width="1.5"
        filter="url(#sm-shadow-node)" class="main-circle"/>
      <text x="1082" y="446" font-family="-apple-system,BlinkMacSystemFont,'Inter',sans-serif"
        font-size="11" font-weight="600" fill="#1C1C1A"
        text-anchor="middle" dominant-baseline="middle" pointer-events="none">Client</text>
      <text x="1082" y="460" font-family="-apple-system,BlinkMacSystemFont,'Inter',sans-serif"
        font-size="9" fill="#9C9A92"
        text-anchor="middle" dominant-baseline="middle" pointer-events="none">preview + comment</text>
      <circle cx="1082" cy="452" r="38" fill="transparent"/>
    </g>
  </svg>
</div>

<div id="sm-legend">
  <div class="sm-leg"><div class="sm-leg-dot" style="background:#7F77DD"></div>Design</div>
  <div class="sm-leg"><div class="sm-leg-dot" style="background:#1D9E75"></div>Product</div>
  <div class="sm-leg"><div class="sm-leg-dot" style="background:#378ADD"></div>Dev</div>
  <div class="sm-leg"><div class="sm-leg-dot" style="background:#D4537E"></div>Client</div>
  <div class="sm-leg"><div class="sm-leg-dot" style="background:#EF9F27"></div>Human gate</div>
  <div class="sm-leg"><div class="sm-leg-dot" style="background:#B4B2A9"></div>Sub-agent</div>
</div>
`

const SM_PANEL_HTML = `
<button class="sm-panel-close" id="sm-panel-close">✕</button>
<div id="sm-panel-default">
  <div class="sm-hint-title">Click any node to explore</div>
  <div class="sm-hint-body">
    An interactive map of every thread in the Weave model — from
    specialist agents executing the work, to Human-in-the-loop
    approvals, to the living product canvas where everything comes
    together. Click any node to explore.
  </div>
</div>
<div id="sm-panel-node">
  <div class="sm-panel-top">
    <div class="sm-panel-badge" id="sm-p-badge">
      <div class="sm-panel-badge-dot" id="sm-p-dot"></div>
      <span id="sm-p-type"></span>
    </div>
    <div class="sm-panel-name" id="sm-p-name"></div>
    <div class="sm-panel-role" id="sm-p-role"></div>
  </div>
  <div class="sm-panel-body" id="sm-p-body"></div>
</div>
`

function initSystemMap() {
  if (typeof window.gsap !== 'undefined') {
    setupMap()
    return
  }
  const existing = document.querySelector('script[data-gsap-sm]')
  if (existing) {
    existing.addEventListener('load', setupMap)
    return
  }
  const s = document.createElement('script')
  s.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js'
  s.setAttribute('data-gsap-sm', 'true')
  s.onload = setupMap
  document.head.appendChild(s)
}

function setupMap() {
  const C = {
    purple:'#7F77DD', teal:'#1D9E75', blue:'#378ADD',
    pink:'#D4537E', amber:'#EF9F27', gray:'#7A786F', lgray:'#B4B2A9',
  }
  const BG = {
    purple:'#EEEDFE', teal:'#E3F7F0', blue:'#E6F1FB',
    pink:'#FBEAF0', amber:'#FFF5E1', gray:'#F3F2ED', lgray:'#F3F2ED',
  }
  const BG_HOVER = {
    '#EEEDFE':'#D4D0FF','#E3F7F0':'#A8EDCC','#E6F1FB':'#B2D6F8',
    '#FBEAF0':'#F2B8CF','#FFF5E1':'#FAD988','#F3F2ED':'#E5E3DB',
  }
  const TYPE_LABEL = {
    canvas:'Shared Canvas', exec:'Executive Agent', gate:'Human Gate',
    human:'Team Member', client:'Client', agent:'Sub-Agent',
  }
  const DISC_COLORS = { design:C.purple, product:C.teal, dev:C.blue }
  const DISC_NAMES  = { design:'Design', product:'Product', dev:'Dev' }
  const VENN = { design:{x:659,y:350}, product:{x:901,y:350}, dev:{x:780,y:560} }
  const R_IDLE=162, R_ACTIVE=272
  const VB_IDLE='230 148 1100 700', VB_ACTIVE='0 0 1560 980'

  const NODES = [
    { id:'ecd',x:470,y:240,r:32,label:'ECD agent',sub:'design governance',disc:'design',color:C.purple,bg:BG.purple,type:'exec',info:'Executive Creative Director agent. Governs what design work gets promoted to the shared canvas. Routes incoming briefs, reviews persona feedback, and gates all design approvals.' },
    { id:'gate-d',x:340,y:335,r:19,label:'Human gate',sub:'designer approves',disc:'design',color:C.amber,bg:BG.amber,type:'gate',info:'Human-in-loop gate for the design team. The designer reviews AI output and decides what moves forward. Designers always stay in control.' },
    { id:'d1',x:225,y:215,r:25,label:'Maya',sub:'product designer',disc:'design',color:C.purple,bg:BG.purple,type:'human',info:'Maya is a product designer. She works with wireframe, prototype, and persona review agents to explore concepts and validate ideas before they reach the ECD agent.' },
    { id:'d2',x:185,y:358,r:25,label:'Jordan',sub:'visual designer',disc:'design',color:C.purple,bg:BG.purple,type:'human',info:'Jordan is a visual designer. They use the visual design, image creation, and content agents to produce hi-fi concepts grounded in the connected design system.' },
    { id:'d3',x:220,y:490,r:25,label:'Sam',sub:'interaction designer',disc:'design',color:C.purple,bg:BG.purple,type:'human',info:'Sam focuses on interaction design and prototyping. They use the interaction, video, and accessibility agents to build working flows and validate micro-UX patterns.' },
    { id:'sa-wire',x:95,y:155,r:15,label:'Wireframe',sub:'lo-fi layouts',disc:'design',owner:'d1',color:C.lgray,bg:BG.lgray,type:'agent',info:'Wireframe agent: generates lo-fi layout concepts from the design brief. Runs in parallel to produce multiple directions for Maya to review and choose from.' },
    { id:'sa-proto',x:82,y:248,r:15,label:'Prototype',sub:'interactions',disc:'design',owner:'d1',color:C.lgray,bg:BG.lgray,type:'agent',info:'Prototype agent: builds working interactive flows from approved wireframes. Validates navigation and interaction patterns before visual design begins.' },
    { id:'sa-persona',x:100,y:340,r:15,label:'Persona review',sub:'user validation',disc:'design',owner:'d1',color:C.lgray,bg:BG.lgray,type:'agent',info:"Persona review agent: evaluates the design concept against defined user personas. Flags areas where the design may not support the target user's needs or workflow." },
    { id:'sa-visual',x:52,y:385,r:15,label:'Visual design',sub:'hi-fi + system',disc:'design',owner:'d2',color:C.lgray,bg:BG.lgray,type:'agent',info:'Visual design agent: applies the connected design system to approved wireframes to produce hi-fi concepts. Ensures designs stay grounded in real components.' },
    { id:'sa-image',x:50,y:462,r:15,label:'Image creation',sub:'AI-generated art',disc:'design',owner:'d2',color:C.lgray,bg:BG.lgray,type:'agent',info:'Image creation agent: generates AI imagery for use in mockups and concepts. Produces reference visuals grounded in brand and tone guidelines.' },
    { id:'sa-content',x:68,y:535,r:15,label:'Content',sub:'copy + tone',disc:'design',owner:'d2',color:C.lgray,bg:BG.lgray,type:'agent',info:'Content agent: writes UI copy, labels, microcopy, and error states in the correct brand voice. Works alongside the visual design agent.' },
    { id:'sa-interact',x:96,y:568,r:15,label:'Interaction',sub:'states + micro-UX',disc:'design',owner:'d3',color:C.lgray,bg:BG.lgray,type:'agent',info:'Interaction design agent: defines component states — hover, focus, error, loading, empty, disabled — and micro-UX patterns for Sam to review.' },
    { id:'sa-video',x:92,y:645,r:15,label:'Video',sub:'motion + animation',disc:'design',owner:'d3',color:C.lgray,bg:BG.lgray,type:'agent',info:'Video and motion agent: produces motion references and animation concepts for interactive components and onboarding flows.' },
    { id:'sa-a11y-d',x:110,y:720,r:15,label:'Accessibility',sub:'design checks',disc:'design',owner:'d3',color:C.lgray,bg:BG.lgray,type:'agent',info:'Accessibility agent (design): checks color contrast, focus order, and touch target sizes against WCAG 2.1 AA standards during the design phase.' },
    { id:'epm',x:1045,y:225,r:32,label:'Exec PM agent',sub:'product governance',disc:'product',color:C.teal,bg:BG.teal,type:'exec',info:'Executive Product Manager agent. Governs what product work reaches the shared canvas. Manages requirements coverage and stakeholder alignment before promotion.' },
    { id:'gate-p',x:1185,y:315,r:19,label:'Human gate',sub:'PM approves',disc:'product',color:C.amber,bg:BG.amber,type:'gate',info:'Human-in-loop gate for the product team. The PM reviews agent output before anything is promoted to the shared canvas.' },
    { id:'p1',x:1298,y:210,r:25,label:'Alex',sub:'product manager',disc:'product',color:C.teal,bg:BG.teal,type:'human',info:'Alex is the PM. They use the requirements, roadmap, and acceptance criteria agents to structure the brief, define done conditions, and surface gaps before review.' },
    { id:'p2',x:1318,y:352,r:25,label:'Dana',sub:'product strategist',disc:'product',color:C.teal,bg:BG.teal,type:'human',info:'Dana is a product strategist. She uses the stakeholder and research agents to synthesize insights and build the design brief that kicks off the design pipeline.' },
    { id:'sa-req',x:1408,y:158,r:15,label:'Requirements',sub:'captures + ranks',disc:'product',owner:'p1',color:C.lgray,bg:BG.lgray,type:'agent',info:'Requirements agent: captures project requirements from briefs or user stories, groups them by priority, and flags coverage gaps.' },
    { id:'sa-road',x:1432,y:242,r:15,label:'Roadmap',sub:'sequences + gaps',disc:'product',owner:'p1',color:C.lgray,bg:BG.lgray,type:'agent',info:'Roadmap agent: sequences requirements into phases, surfaces dependencies, and flags where the current concept does or does not meet scope.' },
    { id:'sa-criteria',x:1418,y:328,r:15,label:'Criteria',sub:'validates scope',disc:'product',owner:'p1',color:C.lgray,bg:BG.lgray,type:'agent',info:'Acceptance criteria agent: defines done conditions for each requirement and validates whether the design concept meets them.' },
    { id:'sa-stake',x:1428,y:400,r:15,label:'Stakeholder',sub:'summarizes + flags',disc:'product',owner:'p2',color:C.lgray,bg:BG.lgray,type:'agent',info:'Stakeholder agent: summarizes key decisions and open questions for leadership or client review. Flags risks before they reach the shared canvas.' },
    { id:'sa-research',x:1415,y:478,r:15,label:'Research',sub:'insights + context',disc:'product',owner:'p2',color:C.lgray,bg:BG.lgray,type:'agent',info:'Research synthesis agent: synthesizes user research, interviews, and feedback into structured insights and the design brief that starts the pipeline.' },
    { id:'edev',x:780,y:638,r:32,label:'Exec dev agent',sub:'code governance',disc:'dev',color:C.blue,bg:BG.blue,type:'exec',info:'Executive Dev agent. Gates code quality before any component is promoted. Ensures output is developer-review-ready — not production-ready.' },
    { id:'gate-v',x:780,y:738,r:19,label:'Human gate',sub:'dev lead approves',disc:'dev',color:C.amber,bg:BG.amber,type:'gate',info:'Human-in-loop gate for the dev team. The dev lead reviews generated code before it reaches the Executive Dev agent and the shared canvas.' },
    { id:'v1',x:628,y:838,r:25,label:'Chris',sub:'front-end dev',disc:'dev',color:C.blue,bg:BG.blue,type:'human',info:'Chris is a front-end developer who uses the component scaffold and accessibility agents to turn approved designs into code-ready component packages.' },
    { id:'v2',x:932,y:838,r:25,label:'Riley',sub:'full-stack dev',disc:'dev',color:C.blue,bg:BG.blue,type:'human',info:'Riley uses the code review, test generation, and PR agents to ensure generated components meet quality standards before the Exec Dev agent reviews them.' },
    { id:'sa-scaffold',x:490,y:890,r:15,label:'Scaffold',sub:'component code',disc:'dev',owner:'v1',color:C.lgray,bg:BG.lgray,type:'agent',info:'Component scaffold agent: generates base component code from the approved design, including props, variants, and interaction states.' },
    { id:'sa-a11y-v',x:560,y:938,r:15,label:'Accessibility',sub:'WCAG checks',disc:'dev',owner:'v1',color:C.lgray,bg:BG.lgray,type:'agent',info:'Accessibility agent (dev): runs automated WCAG checks on generated component code and produces implementation notes for Chris to review.' },
    { id:'sa-review',x:930,y:938,r:15,label:'Code review',sub:'linting + patterns',disc:'dev',owner:'v2',color:C.lgray,bg:BG.lgray,type:'agent',info:'Code review agent: runs linting, pattern checks, and consistency analysis on generated components before the Exec Dev gate.' },
    { id:'sa-test',x:1010,y:895,r:15,label:'Test gen',sub:'unit + integration',disc:'dev',owner:'v2',color:C.lgray,bg:BG.lgray,type:'agent',info:'Test generation agent: produces unit and integration test stubs for generated components. Used by Riley before PR submission.' },
    { id:'sa-pr',x:1078,y:845,r:15,label:'PR agent',sub:'draft pull request',disc:'dev',owner:'v2',color:C.lgray,bg:BG.lgray,type:'agent',info:'PR agent: creates a draft pull request with the generated component package, implementation notes, and a review summary for the dev team.' },
  ]

  const CLIENT = { id:'client',x:1082,y:452,r:28,label:'Client',sub:'preview + comment',color:C.pink,bg:BG.pink,type:'client',info:'The client sees a live preview link of approved work on the shared canvas. They leave comments and feedback — but never see internal team workspaces or agent activity.' }
  const CANVAS = { id:'canvas',x:780,y:420,r:56,label:'Weave',sub:'shared canvas',color:C.gray,type:'canvas',info:'The shared project canvas. Every thread in the Weave model connects here. Approved work from all teams is promoted to this living product model — visible to designers, PMs, developers, and clients.' }

  const LINKS = [
    { s:'canvas',t:'ecd',flow:true,disc:'design' },
    { s:'canvas',t:'epm',flow:true,disc:'product' },
    { s:'canvas',t:'edev',flow:true,disc:'dev' },
    { s:'canvas',t:'client',flow:true,disc:'any' },
    { s:'ecd',t:'gate-d',disc:'design' },
    { s:'epm',t:'gate-p',disc:'product' },
    { s:'edev',t:'gate-v',disc:'dev' },
    { s:'gate-d',t:'d1',disc:'design' },{ s:'gate-d',t:'d2',disc:'design' },{ s:'gate-d',t:'d3',disc:'design' },
    { s:'gate-p',t:'p1',disc:'product' },{ s:'gate-p',t:'p2',disc:'product' },
    { s:'gate-v',t:'v1',disc:'dev' },{ s:'gate-v',t:'v2',disc:'dev' },
    { s:'d1',t:'sa-wire',disc:'design' },{ s:'d1',t:'sa-proto',disc:'design' },{ s:'d1',t:'sa-persona',disc:'design' },
    { s:'d2',t:'sa-visual',disc:'design' },{ s:'d2',t:'sa-image',disc:'design' },{ s:'d2',t:'sa-content',disc:'design' },
    { s:'d3',t:'sa-interact',disc:'design' },{ s:'d3',t:'sa-video',disc:'design' },{ s:'d3',t:'sa-a11y-d',disc:'design' },
    { s:'p1',t:'sa-req',disc:'product' },{ s:'p1',t:'sa-road',disc:'product' },{ s:'p1',t:'sa-criteria',disc:'product' },
    { s:'p2',t:'sa-stake',disc:'product' },{ s:'p2',t:'sa-research',disc:'product' },
    { s:'v1',t:'sa-scaffold',disc:'dev' },{ s:'v1',t:'sa-a11y-v',disc:'dev' },
    { s:'v2',t:'sa-review',disc:'dev' },{ s:'v2',t:'sa-test',disc:'dev' },{ s:'v2',t:'sa-pr',disc:'dev' },
  ]

  const NM = {}
  ;[...NODES, CLIENT, CANVAS].forEach(n => NM[n.id]=n)
  const ADJ = {}
  ;[...NODES, CLIENT, CANVAS].forEach(n => ADJ[n.id]=new Set())
  LINKS.forEach(l => { ADJ[l.s]?.add(l.t); ADJ[l.t]?.add(l.s) })
  const DISC_NODES = { design:[], product:[], dev:[] }
  NODES.forEach(n => { if(n.disc && DISC_NODES[n.disc]) DISC_NODES[n.disc].push(n.id) })
  const DISC_LINKS = { design:[], product:[], dev:[], any:[] }
  LINKS.forEach((l,i) => { if(l.disc) DISC_LINKS[l.disc].push(i) })

  const NS = 'http://www.w3.org/2000/svg'
  const svgEl = (tag,a={}) => {
    const e = document.createElementNS(NS, tag)
    Object.entries(a).forEach(([k,v]) => e.setAttribute(k,v))
    return e
  }

  function edgePts(s,t) {
    const a = Math.atan2(t.y-s.y, t.x-s.x)
    return { x1:s.x+Math.cos(a)*s.r, y1:s.y+Math.sin(a)*s.r,
             x2:t.x-Math.cos(a)*t.r, y2:t.y-Math.sin(a)*t.r }
  }

  const edgesG = document.getElementById('sm-edges-g')
  const edgeEls = {}
  if (!edgesG) return

  LINKS.forEach((l,i) => {
    const s=NM[l.s], t=NM[l.t]; if(!s||!t) return
    const {x1,y1,x2,y2} = edgePts(s,t)
    const col = l.s==='canvas' ? t.color : (s.color===C.lgray ? '#C8C6BC' : s.color)
    const path = svgEl('path', {
      d:`M${x1},${y1} L${x2},${y2}`, fill:'none', stroke:col,
      'stroke-width': l.flow ? '1.8' : '1.2',
      'stroke-opacity': l.flow ? '0.55' : '0.35',
      opacity:'0', 'pointer-events':'none',
      class: l.flow ? 'sm-disc-edge sm-edge-flow' : 'sm-disc-edge',
      ...(l.flow ? { 'stroke-dasharray':'6,8' } : {}),
    })
    edgesG.appendChild(path)
    edgeEls[i] = path
  })

  const nodesG = document.getElementById('sm-nodes-g')
  const nodeEls = {}

  NODES.forEach(n => {
    const g = svgEl('g', { class:'sm-node', opacity:'0', 'pointer-events':'none' })
    const circle = svgEl('circle', {
      cx:n.x, cy:n.y, r:n.r, fill:n.bg||'#F3F2ED',
      stroke:n.color, 'stroke-width': n.type==='exec'?'2':'1.5',
      filter:'url(#sm-shadow-node)', class:'main-circle',
    })
    const label = svgEl('text', {
      x:n.x, y:n.sub ? n.y-5 : n.y,
      'font-family':"-apple-system,BlinkMacSystemFont,'Inter',sans-serif",
      'font-size': n.type==='exec'?'11.5':n.type==='human'?'11':'10',
      'font-weight':'600', fill:'#1C1C1A',
      'text-anchor':'middle', 'dominant-baseline':'middle',
      'pointer-events':'none',
    })
    label.textContent = n.label
    g.appendChild(circle)
    g.appendChild(label)
    if(n.sub) {
      const sub = svgEl('text', {
        x:n.x, y:n.y+10,
        'font-family':"-apple-system,BlinkMacSystemFont,'Inter',sans-serif",
        'font-size':'8.5', fill:'#9C9A92',
        'text-anchor':'middle', 'dominant-baseline':'middle',
        'pointer-events':'none',
      })
      sub.textContent = n.sub
      g.appendChild(sub)
    }
    const hit = svgEl('circle', { cx:n.x, cy:n.y, r:n.r+8, fill:'transparent' })
    g.appendChild(hit)
    nodesG.appendChild(g)
    nodeEls[n.id] = g
  })

  NODES.forEach(n => {
    const g = nodeEls[n.id]
    const circle = g.querySelector('.main-circle')
    const origFill = n.bg||'#F3F2ED'
    g.addEventListener('mouseenter', () => { circle.setAttribute('fill', BG_HOVER[origFill]||origFill) })
    g.addEventListener('mouseleave', () => { circle.setAttribute('fill', origFill) })
  })

  const gsap = window.gsap
  const diagram    = document.getElementById('sm-diagram')
  const backBtn    = document.getElementById('sm-back-btn')
  const breadcrumb = document.getElementById('sm-breadcrumb')
  const bcDisc     = document.getElementById('sm-bc-disc')
  const idleDesc   = document.getElementById('sm-idle-desc')
  const cnCanvas   = document.getElementById('sm-cn-canvas')
  const cnClient   = document.getElementById('sm-cn-client')

  const VENN_CENTERS = {
    design:`${VENN.design.x} ${VENN.design.y}`,
    product:`${VENN.product.x} ${VENN.product.y}`,
    dev:`${VENN.dev.x} ${VENN.dev.y}`,
  }

  const vgEls = {
    design:  document.getElementById('sm-vg-design'),
    product: document.getElementById('sm-vg-product'),
    dev:     document.getElementById('sm-vg-dev'),
  }
  const vlEls = {
    design:  document.getElementById('sm-vl-design'),
    product: document.getElementById('sm-vl-product'),
    dev:     document.getElementById('sm-vl-dev'),
  }
  const vhints = {
    design:  document.getElementById('sm-vhint-design'),
    product: document.getElementById('sm-vhint-product'),
    dev:     document.getElementById('sm-vhint-dev'),
  }

  let activeDisc   = null
  let activeNodeId = null

  function expandDisc(disc, delay=0) {
    const v = VENN[disc]
    DISC_NODES[disc].forEach(id => {
      const n = NM[id], g = nodeEls[id]; if(!g) return
      gsap.fromTo(g,
        { x: v.x-n.x, y: v.y-n.y, scale:0.1, opacity:0 },
        { x:0, y:0, scale:1, opacity:1, duration:0.55,
          delay: delay + Math.random()*0.18,
          ease:'elastic.out(1.05,0.65)',
          onStart:()=>{ g.style.pointerEvents='auto' } })
    })
    DISC_LINKS[disc].forEach(i => {
      const e=edgeEls[i]; if(!e) return
      gsap.to(e, { opacity:1, duration:0.4, delay:delay+0.25 })
      e.style.pointerEvents='auto'
    })
  }

  function collapseDisc(disc, instant=false) {
    const v=VENN[disc]
    DISC_NODES[disc].forEach(id => {
      const n=NM[id], g=nodeEls[id]; if(!g) return
      gsap.to(g, { x:v.x-n.x, y:v.y-n.y, scale:0.1, opacity:0,
        duration:instant?0.18:0.3, ease:'power2.in',
        onComplete:()=>{ g.style.pointerEvents='none'; gsap.set(g,{x:0,y:0}) } })
    })
    DISC_LINKS[disc].forEach(i => {
      const e=edgeEls[i]; if(!e) return
      gsap.to(e, { opacity:0, duration:0.2 })
      e.style.pointerEvents='none'
    })
  }

  function setDisc(disc) {
    if(activeNodeId) { activeNodeId=null; closeNodePanel() }
    const prev = activeDisc
    activeDisc = disc

    ;['design','product','dev'].forEach(d => {
      const vl=vlEls[d], hint=vhints[d]
      if(d===disc) {
        gsap.to(vgEls[d], { scale:1.04, duration:0.3, svgOrigin:VENN_CENTERS[d] })
        gsap.to(vl, { opacity:1, duration:0.3 })
        if(hint) hint.textContent='click to close'
      } else if(!disc) {
        gsap.to(vgEls[d], { scale:1, duration:0.3, svgOrigin:VENN_CENTERS[d] })
        gsap.to(vl, { opacity:1, duration:0.3 })
        if(hint) hint.textContent='click to explore'
      } else {
        gsap.to(vgEls[d], { scale:1, duration:0.3, svgOrigin:VENN_CENTERS[d] })
        gsap.to(vl, { opacity:0.3, duration:0.3 })
        if(hint) hint.textContent='switch'
      }
    })

    gsap.to(idleDesc, { opacity:disc?0:1, duration:0.3 })

    if(!disc) {
      gsap.to(diagram, { attr:{viewBox:VB_IDLE}, duration:0.65, ease:'power2.inOut' })
    } else if(!prev) {
      gsap.to(diagram, { attr:{viewBox:VB_ACTIVE}, duration:0.55, ease:'power2.inOut' })
    }

    if(disc) {
      bcDisc.textContent = DISC_NAMES[disc]
      bcDisc.style.color = DISC_COLORS[disc]
      breadcrumb.classList.add('show')
      backBtn.style.borderColor = DISC_COLORS[disc]
      gsap.to(backBtn, { opacity:1, duration:0.3, delay:0.35,
        onStart:()=>{ backBtn.style.pointerEvents='auto' } })
    } else {
      breadcrumb.classList.remove('show')
      gsap.to(backBtn, { opacity:0, duration:0.2,
        onComplete:()=>{ backBtn.style.pointerEvents='none' } })
    }

    const delayBase = prev ? 0 : 0.2
    if(prev && prev!==disc) collapseDisc(prev, true)
    if(disc) expandDisc(disc, delayBase)
    if(!disc && prev) collapseDisc(prev, false)

    DISC_LINKS['any'].forEach(i => {
      const e=edgeEls[i]; if(!e) return
      gsap.to(e, { opacity:disc?1:0, duration:0.35, delay:disc?0.55:0 })
      e.style.pointerEvents = disc ? 'auto' : 'none'
    })
    if(disc) {
      gsap.fromTo(cnClient,
        { x:302, y:-12, scale:0.1, opacity:0 },
        { x:0, y:0, scale:1, opacity:1, duration:0.8, delay:delayBase+0.3,
          ease:'elastic.out(1.1,0.6)', transformOrigin:'center center',
          onStart:()=>{ cnClient.style.pointerEvents='auto' } })
    } else {
      gsap.to(cnClient, { x:302, y:-12, scale:0.1, opacity:0, duration:0.3,
        onComplete:()=>{ cnClient.style.pointerEvents='none' } })
    }
  }

  ;['design','product','dev'].forEach(d => {
    vgEls[d].addEventListener('click', e => {
      e.stopPropagation()
      setDisc(activeDisc===d ? null : d)
    })
  })

  cnCanvas.addEventListener('click', e => { e.stopPropagation(); openPanel(CANVAS) })
  cnClient.addEventListener('click', e => { e.stopPropagation(); openPanel(CLIENT) })

  Object.entries(nodeEls).forEach(([id,g]) => {
    g.addEventListener('click', e => {
      e.stopPropagation()
      if(activeNodeId===id) { activeNodeId=null; closeNodePanel(); return }
      resetDim()
      activeNodeId = id
      openPanel(NM[id])
      applyDim(id)
    })
  })

  diagram.addEventListener('click', () => {
    if(activeNodeId) { activeNodeId=null; closeNodePanel() }
  })

  backBtn.addEventListener('click', () => setDisc(null))
  bcDisc.addEventListener('click', () => setDisc(null))

  function applyDim(id) {
    if(!activeDisc) return
    const rel = new Set([id,'canvas','client'])
    ;(ADJ[id]||new Set()).forEach(nb => rel.add(nb))
    const n=NM[id]
    if(n.owner) rel.add(n.owner)
    NODES.forEach(nd => { if(nd.owner===id) rel.add(nd.id) })
    DISC_NODES[activeDisc].forEach(nid => {
      nodeEls[nid].classList.toggle('dim', !rel.has(nid))
    })
    DISC_LINKS[activeDisc].forEach(i => {
      const l=LINKS[i], e=edgeEls[i]; if(!e) return
      e.classList.toggle('dim', !(rel.has(l.s)&&rel.has(l.t)))
    })
  }

  function resetDim() {
    if(!activeDisc) return
    DISC_NODES[activeDisc].forEach(nid => nodeEls[nid].classList.remove('dim'))
    DISC_LINKS[activeDisc].forEach(i => edgeEls[i]?.classList.remove('dim'))
  }

  const panel = document.getElementById('sm-panel')

  function openPanel(n) {
    const col   = (n.color===C.lgray||n.id==='canvas') ? '#9C9A92' : n.color
    const bgCol = (n.id==='canvas') ? '#F0EFEB' : (n.bg?.startsWith('#') ? n.bg : '#F0EFEB')
    document.getElementById('sm-p-badge').style.cssText = `background:${bgCol};color:${col}`
    document.getElementById('sm-p-dot').style.background = col
    document.getElementById('sm-p-type').textContent = TYPE_LABEL[n.type]||n.type
    document.getElementById('sm-p-name').textContent = n.label
    document.getElementById('sm-p-role').textContent = n.sub||''
    document.getElementById('sm-p-body').textContent = n.info
    panel.classList.add('active')
  }

  function closeNodePanel() {
    panel.classList.remove('active')
    resetDim()
  }

  document.getElementById('sm-panel-close').addEventListener('click', () => {
    activeNodeId=null; closeNodePanel()
  })
  panel.addEventListener('click', e => e.stopPropagation())

  // ── THEME INTEGRATION ────────────────────────────────────────────
  function getMapThemePalette() {
    const raw = document.documentElement.getAttribute('data-theme')
    // Obsidian uses data-theme="" (empty string — falsy), so check explicitly
    const theme = raw === '' ? 'obsidian' : (raw || 'canvas')

    const palettes = {
      canvas: {
        hostBg:        '#FCF9F6',
        diagramBg:     '#F5EFE8',
        diagramShadow: '0 1px 4px rgba(36,18,8,0.04), 0 12px 40px rgba(36,18,8,0.06)',
        panelBg:       '#F5EFE8',
        panelBorder:   'rgba(36,18,8,0.10)',
        panelText:     '#241208',
        panelSubtext:  'rgba(36,18,8,0.50)',
        panelTopBorder:'rgba(36,18,8,0.08)',
        closeBg:       '#EDE4D8',
        closeColor:    'rgba(36,18,8,0.50)',
        breadcrumbSep: 'rgba(36,18,8,0.25)',
        legendText:    'rgba(36,18,8,0.50)',
        idleRect:      { fill:'#F5EFE8', stroke:'#EDE4D8' },
        idleText1:     'rgba(36,18,8,0.35)',
        idleText2:     '#241208',
        idleText3:     'rgba(36,18,8,0.30)',
        canvasFill1:   '#EDE4D8',
        canvasFill2:   '#E5DCD0',
        canvasStroke:  '#D4CCC0',
        canvasText:    '#241208',
        canvasSubtext: 'rgba(36,18,8,0.50)',
      },
      obsidian: {
        hostBg:        '#18181B',
        diagramBg:     '#111113',
        diagramShadow: '0 1px 4px rgba(0,0,0,0.25), 0 12px 40px rgba(0,0,0,0.40)',
        panelBg:       '#111113',
        panelBorder:   'rgba(235,230,223,0.10)',
        panelText:     '#EBE6DF',
        panelSubtext:  'rgba(235,230,223,0.45)',
        panelTopBorder:'rgba(235,230,223,0.08)',
        closeBg:       '#1A1A1D',
        closeColor:    'rgba(235,230,223,0.45)',
        breadcrumbSep: 'rgba(235,230,223,0.25)',
        legendText:    'rgba(235,230,223,0.45)',
        idleRect:      { fill:'rgba(17,17,19,0.85)', stroke:'rgba(235,230,223,0.10)' },
        idleText1:     'rgba(235,230,223,0.28)',
        idleText2:     '#EBE6DF',
        idleText3:     'rgba(235,230,223,0.25)',
        canvasFill1:   '#1A1A1D',
        canvasFill2:   '#111113',
        canvasStroke:  'rgba(235,230,223,0.20)',
        canvasText:    '#EBE6DF',
        canvasSubtext: 'rgba(235,230,223,0.45)',
      },
      blueprint: {
        hostBg:        '#000000',
        diagramBg:     '#0A0A0A',
        diagramShadow: '0 0 0 1px rgba(185,218,255,0.06), 0 12px 40px rgba(0,0,0,0.70)',
        panelBg:       '#0A0A0A',
        panelBorder:   'rgba(185,218,255,0.10)',
        panelText:     '#ffffff',
        panelSubtext:  'rgba(255,255,255,0.45)',
        panelTopBorder:'rgba(185,218,255,0.08)',
        closeBg:       '#111111',
        closeColor:    'rgba(255,255,255,0.40)',
        breadcrumbSep: 'rgba(255,255,255,0.20)',
        legendText:    'rgba(255,255,255,0.40)',
        idleRect:      { fill:'rgba(10,10,10,0.90)', stroke:'rgba(185,218,255,0.10)' },
        idleText1:     'rgba(255,255,255,0.22)',
        idleText2:     '#B9DAFF',
        idleText3:     'rgba(255,255,255,0.20)',
        canvasFill1:   '#0F0F12',
        canvasFill2:   '#0A0A0D',
        canvasStroke:  'rgba(185,218,255,0.25)',
        canvasText:    '#ffffff',
        canvasSubtext: 'rgba(255,255,255,0.45)',
      },
    }

    return palettes[theme] || palettes.canvas
  }

  function applyMapTheme() {
    const p = getMapThemePalette()

    const host = document.getElementById('system-map-host')
    if (host) host.style.background = p.hostBg

    const diag = document.getElementById('sm-diagram')
    if (diag) {
      diag.style.background = p.diagramBg
      diag.style.boxShadow  = p.diagramShadow
    }

    const smPanel = document.getElementById('sm-panel')
    if (smPanel) {
      smPanel.style.background  = p.panelBg
      smPanel.style.borderColor = p.panelBorder
    }

    const hintTitle = document.querySelector('.sm-hint-title')
    const hintBody  = document.querySelector('.sm-hint-body')
    const pName     = document.getElementById('sm-p-name')
    const pBody     = document.getElementById('sm-p-body')
    const pRole     = document.getElementById('sm-p-role')
    if (hintTitle) hintTitle.style.color = p.panelText
    if (hintBody)  hintBody.style.color  = p.panelSubtext
    if (pName)     pName.style.color     = p.panelText
    if (pBody)     pBody.style.color     = p.panelSubtext
    if (pRole)     pRole.style.color     = p.panelSubtext

    const panelTop = document.querySelector('.sm-panel-top')
    if (panelTop) panelTop.style.borderBottomColor = p.panelTopBorder

    const closeBtn = document.querySelector('.sm-panel-close')
    if (closeBtn) {
      closeBtn.style.background = p.closeBg
      closeBtn.style.color      = p.closeColor
    }

    const header = document.querySelector('.sm-header h2')
    if (header) header.style.color = p.panelText

    const bcSep = document.querySelector('.sm-bc-sep')
    if (bcSep) bcSep.style.color = p.breadcrumbSep

    document.querySelectorAll('.sm-leg').forEach(el => {
      el.style.color = p.legendText
    })

    const idleRect = document.querySelector('#sm-idle-desc rect')
    if (idleRect) {
      idleRect.setAttribute('fill',   p.idleRect.fill)
      idleRect.setAttribute('stroke', p.idleRect.stroke)
    }

    const idleTexts = document.querySelectorAll('#sm-idle-desc text')
    if (idleTexts[0]) idleTexts[0].setAttribute('fill', p.idleText1)
    if (idleTexts[1]) idleTexts[1].setAttribute('fill', p.idleText2)
    if (idleTexts[2]) idleTexts[2].setAttribute('fill', p.idleText3)

    const canvasGrad1 = document.querySelector('#sm-rg-canvas stop:first-child')
    const canvasGrad2 = document.querySelector('#sm-rg-canvas stop:last-child')
    if (canvasGrad1) canvasGrad1.setAttribute('stop-color', p.canvasFill1)
    if (canvasGrad2) canvasGrad2.setAttribute('stop-color', p.canvasFill2)

    const canvasCircle = document.querySelector('#sm-cn-canvas .main-circle')
    if (canvasCircle) canvasCircle.setAttribute('stroke', p.canvasStroke)

    const canvasTexts = document.querySelectorAll('#sm-cn-canvas text')
    if (canvasTexts[0]) canvasTexts[0].setAttribute('fill', p.canvasText)
    if (canvasTexts[1]) canvasTexts[1].setAttribute('fill', p.canvasSubtext)

    const smBackBtn = document.getElementById('sm-back-btn')
    if (smBackBtn) {
      smBackBtn.style.background  = p.diagramBg
      smBackBtn.style.color       = p.panelText
      smBackBtn.style.borderColor = p.panelBorder
    }
  }

  applyMapTheme()

  new MutationObserver(applyMapTheme).observe(
    document.documentElement,
    { attributes: true, attributeFilter: ['data-theme'] }
  )
}

export default function TheSystem() {
  const { theme } = useTheme()
  const isCanvas = theme === 'canvas'
  const isObsidian = theme === 'obsidian'

  useEffect(() => {
    initSystemMap()
  }, [])

  const _content = (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">Architecture</p>
          <h1 className="section-title">The Weave System</h1>
          <div className="system-thread-intro">
            <p className="system-thread-context">
              Figma has nodes. Miro has connectors. Linear has issues. GitHub has commits.
            </p>
            <p className="system-thread-hero">
              Weave has <span className="system-thread-accent">the thread.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div
            className="system-map-host"
            id="system-map-host"
            dangerouslySetInnerHTML={{ __html: SYSTEM_MAP_HTML }}
          />
        </div>
      </section>

      <div id="sm-panel" dangerouslySetInnerHTML={{ __html: SM_PANEL_HTML }} />

      <Footer />
    </>
  )

  if (isCanvas) return (
    <div className="site-outer-frame">
      <div className="frame-dot frame-dot--tl"></div>
      <div className="frame-dot frame-dot--tr"></div>
      <div className="frame-dot frame-dot--bl"></div>
      <div className="frame-dot frame-dot--br"></div>
      {_content}
    </div>
  )
  if (isObsidian) return (
    <div className="site-outer-frame">
      <div className="obs-frame-dot obs-frame-dot--tl"></div>
      <div className="obs-frame-dot obs-frame-dot--tr"></div>
      <div className="obs-frame-dot obs-frame-dot--bl"></div>
      <div className="obs-frame-dot obs-frame-dot--br"></div>
      {_content}
    </div>
  )
  return _content
}
