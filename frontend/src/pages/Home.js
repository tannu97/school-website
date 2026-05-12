import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const heroImage = 'https://blog.edhippo.com/wp-content/uploads/2024/07/Ecole-Globale-International-Girls-School-Dehradun.jpg';
const campusImage = 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80';
const studentsImage = 'https://cache.careers360.mobi/media/schools/social-media/media-gallery/20440/2022/9/13/doddddwnload.png';

const team = [
  [
    'Ms. Kanchan Khandke',
    'Principal',
    'https://tse1.mm.bing.net/th/id/OIP.nQzDaei93MQLE-kYqFxKEQAAAA?pid=Api&P=0&h=180'
  ],
  [
    'Ms. Puja Pant',
    'Vice Principal',
    'https://cdn-ileenie.nitrocdn.com/LVqEwhNYgwKgxeruYcPyEFOMoosVKWQO/assets/images/optimized/rev-0a3c827/www.ecoleglobale.com/wp-content/uploads/2024/12/puja-pant-1.png'
  ],
  [
    'Ms. Sohni Juneja',
    'Head Finishing School',
    'https://cdn-ileenie.nitrocdn.com/LVqEwhNYgwKgxeruYcPyEFOMoosVKWQO/assets/images/optimized/rev-0a3c827/www.ecoleglobale.com/wp-content/uploads/2025/11/Sohni-Juneja.jpg'
  ],
  [
    'Ms. Nidhi Singh',
    'Head of Admission',
    'https://cdn-ileenie.nitrocdn.com/LVqEwhNYgwKgxeruYcPyEFOMoosVKWQO/assets/images/optimized/rev-0a3c827/www.ecoleglobale.com/wp-content/uploads/2026/03/Ms.-Nidhi-Singh.jpg'
  ],
  [
    'Mr. Varun Kumar',
    'Academic Head',
    'https://cdn-ileenie.nitrocdn.com/LVqEwhNYgwKgxeruYcPyEFOMoosVKWQO/assets/images/optimized/rev-0a3c827/www.ecoleglobale.com/wp-content/uploads/2024/12/Varun-Kumar-1.png'
  ],
  [
    'Mr. Virender Singh',
    'Outreach & Operations Manager',
    'https://cdn-ileenie.nitrocdn.com/LVqEwhNYgwKgxeruYcPyEFOMoosVKWQO/assets/images/optimized/rev-0a3c827/www.ecoleglobale.com/wp-content/uploads/2024/12/mr.virender-1.jpg'
  ],
];

const updates = [
  ['Trinity Examinations for Speech and Drama & Communication Skills', 'May 9, 2026', 'Latest Updates'],
  ['Your Future Self @ 2036 - Reflective Workshop Brief', 'May 9, 2026', 'Events'],
  ['English Creative Writing', 'May 9, 2026', 'Events'],
];

const accolades = [
  ['Awards', 'Recognised among leading girls boarding schools for residential education and holistic growth.'],
  ['Placements', 'Focused guidance, communication skills, career awareness, and higher education readiness.'],
  ['Associates', 'Academic and enrichment associations that support student exposure and opportunities.'],
];

const testimonials = [
  ['Zubia & Munir Bari', 'Parents', 'The structured environment, caring staff, and range of activities helped our daughter grow with confidence.'],
  ['Gunisha Arora', 'Alumni', 'Ecole gave me discipline, leadership, confidence, and the foundation to pursue my career with clarity.'],
  ['Dr. Rajat Dang', 'Parent', 'The school has supported our child academically and personally while maintaining a safe boarding environment.'],
];

const faqs = [
  ['Which curriculum does Ecole Globale follow?', 'Students can choose between CBSE and Cambridge International Education pathways.'],
  ['Where is the campus located?', 'The campus is near Sahaspur in Dehradun, Uttarakhand, with a fully residential girls school environment.'],
  ['What facilities are important for parents?', 'Boarding houses, dining, infirmary, sports facilities, digital classrooms, library, and activity spaces are key parent decision points.'],
  ['How should the official site improve SEO?', 'The site should strengthen titles, metadata, schema, image optimization, internal links, FAQ content, and page-speed delivery.'],
];

const ArrowIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14" />
    <path d="m13 5 7 7-7 7" />
  </svg>
);

export default function Home() {
  return (
    <div className="home ecole-home">
      <section className="ecole-hero">
        <img src={heroImage} alt="Ecole Globale style girls school campus" />
        <div className="ecole-hero-overlay" />
        <div className="ecole-hero-caption">
          <span>No. 1 Girls Boarding School in Dehradun</span>
          <h1>Admissions 2026-27</h1>
          <Link to="/admissions" className="hero-enquire">Enquire Now</Link>
        </div>
      </section>

      <section className="enquiry-strip" id="enquire">
        <div className="container enquiry-inner">
          <h2>Enquire Now</h2>
          <p>For admission procedure, registration, fee structure, and campus tour details.</p>
          <Link to="/admissions" className="btn-primary">I'm Interested <ArrowIcon /></Link>
        </div>
      </section>

      <section className="section welcome-section">
        <div className="container welcome-grid">
          <div className="welcome-copy">
            <span className="small-title">Welcome to</span>
            <h2>Ecole Globale International Girls' School in Dehradun</h2>
            <div className="official-tabs">
              <button>Overview</button>
              <button>Our Team</button>
              <button>Results</button>
              <button>About School</button>
            </div>
            <p>
              Ecole Globale is a fully residential girls school in Dehradun that combines
              academics, activities, sports, community service, and personal mentoring to
              prepare students for leadership and confident futures.
            </p>
            <p>
              This improved concept keeps the official information flow but makes the
              parent journey faster: admissions, curriculum, facilities, pastoral care,
              updates, testimonials, FAQ, and contact actions are easier to scan.
            </p>
          </div>
          <div className="welcome-media">
            <img src={studentsImage} alt="Girls students learning together" />
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="section-heading-center">
            <span className="small-title">Our Team</span>
            <h2>Leadership and academic support</h2>
          </div>
          <div className="team-grid">
            {team.map(([name, role, image]) => (
  <article className="team-card" key={name}>
    
    <img
      src={image}
      alt={name}
      className="team-image"
    />

    <h3>{name}</h3>
    <p>{role}</p>
  </article>
))}
          </div>
        </div>
      </section>

      <section className="results-section">
        <div className="container results-grid">
          <img src={campusImage} alt="School results and campus" />
          <div>
            <span className="small-title">About School</span>
            <h2>Residential learning with safety, care, and academic direction.</h2>
            <p>
              Parents searching for boarding schools need proof of security, medical
              facilities, accommodation, teaching quality, activities, and outcomes.
              This redesign brings those trust points forward and connects them to enquiry actions.
            </p>
            <Link to="/about" className="btn-primary">Learn more</Link>
          </div>
        </div>
      </section>

      <section className="section updates-section">
        <div className="container">
          <div className="section-heading-center">
            <h2>Latest Updates</h2>
          </div>
          <div className="updates-grid">
            {updates.map(([title, date, category]) => (
              <article className="update-card" key={title}>
                <div className="update-image" />
                <span>{category}</span>
                <h3>{title}</h3>
                <p>By Ecole Globale / {date}</p>
                <Link to="/news">Read More</Link>
              </article>
            ))}
          </div>
          <div className="center-action">
            <Link to="/news" className="btn-ghost">View All</Link>
          </div>
        </div>
      </section>

      <section className="accolades-section">
        <div className="container">
          <div className="section-heading-center">
            <h2>Ecole Globale Accolades</h2>
          </div>
          <div className="accolades-grid">
            {accolades.map(([title, text]) => (
              <article className="accolade-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="join-band">
        <div className="container">
          <h2>Join India's Premier Boarding School For Girls in Dehradun</h2>
          <p>To book a campus tour, please call +91-9557291888</p>
          <Link to="/admissions" className="btn-primary">I'm Interested</Link>
        </div>
      </section>

      <section className="section testimonial-section">
        <div className="container">
          <div className="section-heading-center">
            <span className="small-title">Testimonial</span>
            <h2>What They Say About Ecole Globale</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map(([name, role, text]) => (
              <article className="testimonial-card" key={name}>
                <p>{text}</p>
                <h3>{name}</h3>
                <span>{role}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <div className="section-heading-center">
            <h2>FAQ</h2>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>Q{index + 1}. {question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
