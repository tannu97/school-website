import React, { useState } from 'react';
import { submitAdmission } from '../services/api';
import './FormPage.css';

const initialForm = {
  student_name: '',
  parent_name: '',
  email: '',
  phone: '',
  grade_applying: '',
  date_of_birth: '',
  address: '',
  previous_school: '',
  message: '',
};

export default function Admissions() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const onChange = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');
    setError('');

    try {
      await submitAdmission(form);
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setError(err.response?.data?.message || 'The enquiry could not be submitted. Please check the details and try again.');
      setStatus('error');
    }
  };

  return (
    <div className="form-page">
      <section className="form-hero">
        <div className="container">
          <span className="section-label">Admissions 2026-27</span>
          <h1 className="section-title">Enquire for Ecole Globale International Girls' School</h1>
          <p className="section-subtitle">
            Request support for admission procedure, online registration, online application,
            fee structure, withdrawal policy, or a campus tour.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container form-grid">
          <aside className="form-info">
            <div className="info-card">
              <h3>Admission Journey</h3>
              <ol className="process-list">
                <li>Submit enquiry or online registration interest</li>
                <li>Speak with the admissions office</li>
                <li>Complete application and assessment steps</li>
                <li>Receive fee, boarding, and joining guidance</li>
              </ol>
            </div>
            <div className="info-card">
              <h3>Parent Quick Links</h3>
              <div className="date-item"><span>Admission procedure</span><strong>Available</strong></div>
              <div className="date-item"><span>Online registration</span><strong>Available</strong></div>
              <div className="date-item"><span>Fee structure</span><strong>Request details</strong></div>
              <div className="date-item"><span>Campus tour</span><strong>Call office</strong></div>
            </div>
          </aside>

          <div className="form-card">
            {status === 'success' ? (
              <div className="success-state">
                <span className="success-mark" aria-hidden="true" />
                <h2>Enquiry submitted</h2>
                <p>The admissions team will contact you with registration, application, and campus visit information.</p>
                <button className="btn-primary" type="button" onClick={() => setStatus('idle')}>Submit Another Enquiry</button>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <h2 className="form-title">Admission Enquiry Form</h2>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="student_name">Student full name</label>
                    <input id="student_name" name="student_name" value={form.student_name} onChange={onChange} required placeholder="Student name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="parent_name">Parent or guardian name</label>
                    <input id="parent_name" name="parent_name" value={form.parent_name} onChange={onChange} required placeholder="Parent name" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input id="email" type="email" name="email" value={form.email} onChange={onChange} required placeholder="parent@example.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone number</label>
                    <input id="phone" name="phone" value={form.phone} onChange={onChange} required placeholder="+91 9557291888" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="grade_applying">Class applying for</label>
                    <select id="grade_applying" name="grade_applying" value={form.grade_applying} onChange={onChange} required>
                      <option value="">Select class</option>
                      {Array.from({ length: 9 }, (_, index) => `Class ${index + 4}`).map((grade) => (
                        <option key={grade} value={grade}>{grade}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="date_of_birth">Date of birth</label>
                    <input id="date_of_birth" type="date" name="date_of_birth" value={form.date_of_birth} onChange={onChange} required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="previous_school">Previous school</label>
                    <input id="previous_school" name="previous_school" value={form.previous_school} onChange={onChange} placeholder="School name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">City and state</label>
                    <input id="address" name="address" value={form.address} onChange={onChange} placeholder="City, State" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Requirement</label>
                  <textarea id="message" name="message" value={form.message} onChange={onChange} rows={5} placeholder="Mention admission procedure, fee structure, hostel, campus tour, or curriculum query." />
                </div>
                {error && <div className="form-error">{error}</div>}
                <button type="submit" className="btn-primary submit-btn" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Submitting...' : 'Submit Enquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
