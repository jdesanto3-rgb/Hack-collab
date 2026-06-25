import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-copy">© 2025 Weave. Continuous Product Intelligence — built by Provoke.</span>
        <ul className="footer-links">
          <li><Link to="/how-it-works">How It Works</Link></li>
          <li><Link to="/the-system">The System</Link></li>
          <li><Link to="/agents">Agents</Link></li>
          <li><Link to="/why-chorus">Why Weave</Link></li>
          <li><Link to="/demo">Request Access</Link></li>
        </ul>
      </div>
    </footer>
  )
}
