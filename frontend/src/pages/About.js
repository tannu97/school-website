import React from 'react';
import './About.css';

const values = [
  ['Girls Empowerment', 'A residential environment that encourages girls to become articulate, confident, and independent.'],
  ['Academic Excellence', 'CBSE and Cambridge pathways supported by experienced faculty and structured review.'],
  ['Pastoral Care', 'Boarding, dining, infirmary, supervision, and wellbeing systems designed for student safety.'],
  ['Holistic Growth', 'Sports, arts, culture, trips, literary activities, exchange exposure, and community service.'],
];

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container about-hero-grid">
          <div>
            <span className="section-label">About Ecole</span>
            <h1 className="section-title">A fully residential girls school in the foothills of Dehradun.</h1>
            <p className="section-subtitle">
              Ecole Globale International Girls' School was established to provide a
              disciplined, caring, and globally aware education for girls from Class IV to XII.
            </p>
          </div>
          <div className="about-hero-card">
            <strong>No. 1</strong>
            <span>Girls boarding school positioning for Dehradun admissions</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mission-grid">
          {[
            ['Vision', 'To prepare girls for leadership through academic strength, personal confidence, and ethical conduct.'],
            ['Mission', 'To combine curriculum, activities, sports, service, and boarding care into a complete education.'],
            ['Campus', 'A residential campus near Sahaspur, Dehradun, shaped around learning, safety, and student wellbeing.'],
          ].map(([title, text], index) => (
            <article className="mission-card" key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <span className="section-label">What Parents Look For</span>
          <h2 className="section-title">Trust signals from the official school experience.</h2>
          <div className="values-grid">
            {values.map(([title, text]) => (
              <article className="value-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section principal-section">
        <div className="container principal-card">
          <div className="principal-photo" />
          <div>
            <span className="section-label">Leadership</span>
            <h2>Principal and School Team</h2>
            <p>
              The official website highlights the principal, vice principal, admission head,
              academic leadership, and operations team. This redesign keeps leadership visible
              while making the parent journey clearer and faster.
            </p>
            <strong>Ecole Globale International Girls' School, Dehradun</strong>
          </div>
        </div>
      </section>
    </div>
  );
}
