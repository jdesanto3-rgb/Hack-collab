import { useState } from 'react'
import Footer from '../components/Footer'

const ROLES = [
  'Select your role',
  'Design Lead / Creative Director',
  'Product Manager',
  'Engineering Lead',
  'CTO / VP Engineering',
  'CEO / Founder',
  'Other',
]

const FEATURES = [
  {
    color: '#7F77DD',
    bg: 'rgba(127,119,221,0.12)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3"/>
        <path d="M9 3v18M3 9h6M3 15h6"/>
      </svg>
    ),
    title: 'Live Canvas Access',
    desc: 'You\'ll get access to a live Chorus canvas with sample projects loaded — Design, Product, and Dev tracks running in parallel.',
  },
  {
    color: '#1D9E75',
    bg: 'rgba(29,158,117,0.12)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4"/>
      </svg>
    ),
    title: 'Agent Walkthrough',
    desc: 'A Chorus team member will walk you through the ECD, EPM, and EDev agents — live, on a real brief, with real output.',
  },
  {
    color: '#378ADD',
    bg: 'rgba(55,138,221,0.12)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Governance Demo',
    desc: 'See Human Gates in action — approve, reject, and revision-request from the gate interface, with full audit trail visible.',
  },
]

const EXPECT = [
  'A 30-minute structured demo call with a Chorus team member',
  'Access to a sandbox environment to explore the canvas',
  'A follow-up with pricing and rollout options',
  'An intro to our implementation support team',
  'A custom proposal based on your team structure',
]

export default function Demo() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', role: '' })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.includes('@')) e.email = 'Valid email required'
    if (!form.company.trim()) e.company = 'Company is required'
    if (!form.role || form.role === ROLES[0]) e.role = 'Please select a role'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitted(true)
  }

  const handleChange = (field) => (e) => {
    setForm(f => ({ ...f, [field]: e.target.value }))
    if (errors[field]) setErrors(er => ({ ...er, [field]: null }))
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">Early Access</p>
          <h1 className="section-title">See Chorus in Action</h1>
          <p className="section-sub mx-auto">
            We're onboarding select teams now. Request a demo and we'll show you the full Chorus canvas — agents running, gates firing, output surfacing.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="demo-layout">
            {/* Form */}
            <div className="demo-form">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '32px 0' }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(29,158,117,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  </div>
                  <h2 style={{ marginBottom: 12 }}>Request received</h2>
                  <p style={{ color: 'var(--text-2)', fontSize: 15, lineHeight: 1.7 }}>
                    Thanks, {form.name.split(' ')[0]}. We'll be in touch within one business day to schedule your demo.
                  </p>
                </div>
              ) : (
                <>
                  <h2>Request Early Access</h2>
                  <p className="demo-form-sub">Fill in your details and we'll reach out to schedule your demo.</p>
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange('name')}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-err' : undefined}
                        style={errors.name ? { borderColor: '#EF9F27' } : {}}
                      />
                      {errors.name && <p id="name-err" style={{ color: '#EF9F27', fontSize: 13, marginTop: 4 }}>{errors.name}</p>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Work Email</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={handleChange('email')}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-err' : undefined}
                        style={errors.email ? { borderColor: '#EF9F27' } : {}}
                      />
                      {errors.email && <p id="email-err" style={{ color: '#EF9F27', fontSize: 13, marginTop: 4 }}>{errors.email}</p>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">Company</label>
                      <input
                        id="company"
                        type="text"
                        placeholder="Company name"
                        value={form.company}
                        onChange={handleChange('company')}
                        aria-invalid={!!errors.company}
                        aria-describedby={errors.company ? 'company-err' : undefined}
                        style={errors.company ? { borderColor: '#EF9F27' } : {}}
                      />
                      {errors.company && <p id="company-err" style={{ color: '#EF9F27', fontSize: 13, marginTop: 4 }}>{errors.company}</p>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="role">Your Role</label>
                      <select
                        id="role"
                        value={form.role}
                        onChange={handleChange('role')}
                        aria-invalid={!!errors.role}
                        aria-describedby={errors.role ? 'role-err' : undefined}
                        style={errors.role ? { borderColor: '#EF9F27' } : {}}
                      >
                        {ROLES.map(r => <option key={r} value={r === ROLES[0] ? '' : r}>{r}</option>)}
                      </select>
                      {errors.role && <p id="role-err" style={{ color: '#EF9F27', fontSize: 13, marginTop: 4 }}>{errors.role}</p>}
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
                      Request Access
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </button>
                    <p style={{ fontSize: 12, color: 'var(--text-3)', textAlign: 'center', marginTop: 16 }}>
                      No spam. We'll only reach out about your demo request.
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* Features + expect */}
            <div>
              <div className="demo-features">
                {FEATURES.map((f, i) => (
                  <div key={i} className="demo-feature">
                    <div className="demo-feature-icon" style={{ background: f.bg, color: f.color }}>
                      {f.icon}
                    </div>
                    <div>
                      <h4>{f.title}</h4>
                      <p>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="expect-list">
                <h4>What to expect</h4>
                <ul>
                  {EXPECT.map((e, i) => (
                    <li key={i}>
                      <div className="expect-check">
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                          <path d="M2 5.5l2.5 2.5 4.5-5" stroke="#1D9E75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
