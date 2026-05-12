import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const quickLinks = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/academics', 'Academics'],
  ['/admissions', 'Admissions'],
  ['/news', 'News'],
  ['/contact', 'Contact'],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="footer-logo-mark" aria-hidden="true">EG</span>
            <span>
              <strong>Ecole Globale International Girls' School</strong>
              <small>Girls boarding school in Dehradun</small>
            </span>
          </Link>
          <p>
            A fully residential girls' school focused on academics, leadership, pastoral care,
            student life, sports, confidence, and future readiness.
          </p>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          {quickLinks.map(([to, label]) => (
            <Link key={to} to={to}>{label}</Link>
          ))}
        </div>

        <div className="footer-col">
          <h3>Academics</h3>
          <a href="/academics">Early Years</a>
          <a href="/academics">Primary School</a>
          <a href="/academics">Middle School</a>
          <a href="/academics">Secondary School</a>
          <a href="/academics">Senior Secondary</a>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <p>Village Horawalla, Near Sahaspur, Dehradun, Uttarakhand 248197</p>
          <p>+91 9557291888</p>
          <p>ecoleglobale@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <span>Copyright {new Date().getFullYear()} Ecole Globale International Girls' School. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
