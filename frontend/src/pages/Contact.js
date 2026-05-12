import React, { useState } from 'react';
import { submitContact } from '../services/api';
import './FormPage.css';

const initialForm = { name: '', email: '', phone: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');

  const onChange = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');
    try {
      await submitContact(form);
      setForm(initialForm);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const contactItems = [
    ['Address', 'Village Horawalla, Near Sahaspur, Dehradun, Uttarakhand 248197'],
    ['Phone', '+91 9557291888'],
    ['Email', 'ecoleglobale@gmail.com'],
    ['Website', 'www.ecoleglobale.com'],
  ];

  return (
    <div className="form-page">
      <section className="form-hero">
        <div className="container">
          <span className="section-label">Contact Ecole Globale</span>
          <h1 className="section-title">Admissions, campus tours, and parent enquiries.</h1>
          <p className="section-subtitle">
            Contact the school for admissions, online registration, fees, boarding, academics, or pastoral care information.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container form-grid">
          <aside className="form-info">
            <div className="info-card">
              <h3>Contact Information</h3>
              {contactItems.map(([label, value]) => (
                <div className="contact-info-item" key={label}>
                  <span className="contact-symbol" aria-hidden="true" />
                  <div>
                    <strong>{label}</strong>
                    <p>{value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="map-panel">
              <span>Campus Location</span>
              <strong>Dehradun, Uttarakhand</strong>
            </div>
          </aside>

          <div className="form-card">
            {status === 'success' ? (
              <div className="success-state">
                <span className="success-mark" aria-hidden="true" />
                <h2>Message sent</h2>
                <p>Thank you for contacting Ecole Globale. The school office will respond soon.</p>
                <button className="btn-primary" type="button" onClick={() => setStatus('idle')}>Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <h2 className="form-title">Send a Message</h2>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full name</label>
                    <input id="name" name="name" value={form.name} onChange={onChange} required placeholder="Your name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input id="email" type="email" name="email" value={form.email} onChange={onChange} required placeholder="you@example.com" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone number</label>
                    <input id="phone" name="phone" value={form.phone} onChange={onChange} placeholder="+91 9557291888" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input id="subject" name="subject" value={form.subject} onChange={onChange} required placeholder="Admission, fees, campus tour..." />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" value={form.message} onChange={onChange} required rows={6} placeholder="Write your message here." />
                </div>
                {status === 'error' && <div className="form-error">The message could not be sent. Please try again.</div>}
                <button type="submit" className="btn-primary submit-btn" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
