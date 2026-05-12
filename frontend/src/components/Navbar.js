import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const links = [
  { to: '/about', label: 'About Us', sub: ['About School', 'Vision & Mission', 'President Message'] },
  { to: '/admissions', label: 'Admission', sub: ['Admission Procedure', 'Online Registration', 'Fees Structure'] },
  { to: '/academics', label: 'Academics', sub: ['CBSE Programme', 'CI Curriculum', 'Pedagogy'] },
  { to: '/academics', label: 'Student Life', sub: ['Exchange Programme', 'Art & Culture', 'Sports School'] },
  { to: '/academics', label: 'Pastoral Care', sub: ['Overview', 'Infirmary', 'Dining Hall'] },
  { to: '/news', label: 'Career', sub: ['Work Culture', 'Training Session', 'Vacancies'] },
];

const ThemeIcon = ({ isDark }) => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    {isDark ? (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
      </>
    ) : (
      <path d="M21 13.5A8.5 8.5 0 1 1 10.5 3a6.5 6.5 0 0 0 10.5 10.5Z" />
    )}
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-top">
        <div className="container nav-top-inner">
          <a href="#download">Download TC</a>
          <a href="tel:+919557291888">Call +91-9557291888</a>
        </div>
      </div>
      <nav className="container nav-container" aria-label="Primary navigation">
        <Link to="/" className="nav-logo" aria-label="Ecole Globale International Girls' School home">
          <span className="logo-mark" aria-hidden="true">
            <svg viewBox="0 0 42 42" fill="none">
              <path d="M21 3 37 11.4v19.2L21 39 5 30.6V11.4L21 3Z" fill="currentColor" />
              <path d="M12 16.5 21 12l9 4.5-9 4.5-9-4.5Z" fill="#fff" opacity="0.92" />
              <path d="M14 20v6.2c4.3 2.5 9.7 2.5 14 0V20" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <span className="logo-copy">
            <strong>Ecole Globale</strong>
            <small>International Girls' School</small>
          </span>
        </Link>

        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.label}>
              <Link className={location.pathname === link.to ? 'active' : ''} to={link.to}>
                {link.label}
              </Link>
              <div className="nav-dropdown">
                {link.sub.map((item) => (
                  <Link key={item} to={link.to}>{item}</Link>
                ))}
              </div>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle theme">
            <ThemeIcon isDark={isDark} />
          </button>
          <Link to="/admissions" className="btn-primary nav-cta">Enquire Now</Link>
          <button
            className={`hamburger ${mobileOpen ? 'open' : ''}`}
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="mobile-menu">
          {links.map((link) => (
            <Link key={link.label} className={location.pathname === link.to ? 'active' : ''} to={link.to}>
              {link.label}
            </Link>
          ))}
          <Link to="/admissions" className="btn-primary">Enquire Now</Link>
        </div>
      )}
    </header>
  );
}
