import React from 'react';
import './Academics.css';

const streams = [
  ['CBSE Programme', 'Classes IV to XII', 'A structured national curriculum with board readiness, subject mentoring, and academic tracking.'],
  ['Cambridge Curriculum', 'International pathway', 'A globally oriented curriculum focused on inquiry, communication, and independent learning.'],
  ['Pedagogy', 'Concept clarity', 'Teaching practices that connect classroom lessons with projects, discussion, reflection, and application.'],
  ['Student Life', 'Activities and exposure', 'Literary activities, art and culture, sports, trips, expeditions, exchange exposure, and community service.'],
  ['Pastoral Care', 'Residential wellbeing', 'Boarding house systems, dining hall, infirmary, supervision, hygiene, safety, and student support.'],
];

const facilities = [
  'Digital classrooms',
  'Science laboratories',
  'Library and reading spaces',
  'Swimming and sports facilities',
  'Art, culture, and theatre activities',
  'Boarding houses and dining hall',
];

export default function Academics() {
  return (
    <div className="academics-page">
      <section className="academics-hero">
        <div className="container">
          <span className="section-label">Academics and Student Life</span>
          <h1 className="section-title">CBSE, Cambridge, activities, sports, and residential care.</h1>
          <p className="section-subtitle">
            This page follows the official site structure by combining academics, student life,
            pastoral care, and facilities into a more scannable parent experience.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container stream-list">
          {streams.map(([name, grades, detail], index) => (
            <article className="stream-card" key={name}>
              <span className="stream-number">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h2>{name}</h2>
                <strong>{grades}</strong>
              </div>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section facilities-section">
        <div className="container">
          <span className="section-label">Facilities</span>
          <h2 className="section-title">Campus facilities parents expect to find quickly.</h2>
          <div className="facility-grid">
            {facilities.map((facility) => (
              <article className="facility-card" key={facility}>
                <span aria-hidden="true" />
                <h3>{facility}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
