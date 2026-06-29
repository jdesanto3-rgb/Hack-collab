import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { ThemeProvider } from './ThemeContext'
import Nav from './components/Nav'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import TheSystem from './pages/TheSystem'
import Agents from './pages/Agents'
import WhyWeave from './pages/WhyWeave'
import Demo from './pages/Demo'
import Playground from './pages/Playground'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main style={{ paddingTop: 0 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/the-system" element={<TheSystem />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/why-chorus" element={<WhyWeave />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/playground" element={<Playground />} />
        </Routes>
      </main>
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}
