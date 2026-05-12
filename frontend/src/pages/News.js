import React, { useEffect, useState } from 'react';
import { getNews } from '../services/api';
import './News.css';

const fallbackNews = [
  {
    id: 1,
    category: 'latest updates',
    created_at: '2026-05-09',
    title: 'Trinity examinations for speech, drama, and communication skills',
    excerpt: 'A sample update section inspired by the official Ecole Globale latest updates area.',
  },
  {
    id: 2,
    category: 'events',
    created_at: '2026-05-09',
    title: 'Your Future Self 2036 reflective workshop',
    excerpt: 'A student workshop style update for senior grades and future readiness.',
  },
  {
    id: 3,
    category: 'events',
    created_at: '2026-05-09',
    title: 'English creative writing competition',
    excerpt: 'A language and literary activity update for the student life section.',
  },
];

export default function News() {
  const [news, setNews] = useState(fallbackNews);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    getNews()
      .then((response) => {
        if (Array.isArray(response.data.data) && response.data.data.length) {
          setNews(response.data.data);
        }
      })
      .catch(() => {});
  }, []);

  const categories = ['all', 'latest updates', 'events', 'academics', 'student life'];
  const filtered = filter === 'all' ? news : news.filter((item) => item.category === filter);

  return (
    <div className="news-page">
      <section className="news-hero">
        <div className="container">
          <span className="section-label">Latest Updates</span>
          <h1 className="section-title">Events, achievements, and school news.</h1>
          <p className="section-subtitle">A clearer, faster version of the official latest updates experience.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filters">
            {categories.map((category) => (
              <button key={category} className={filter === category ? 'active' : ''} type="button" onClick={() => setFilter(category)}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="news-list">
            {filtered.map((item) => (
              <article className="news-article" key={item.id || item.title}>
                <div className="article-meta">
                  <span>{item.category || 'news'}</span>
                  <time>{new Date(item.created_at || Date.now()).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
                </div>
                <h2>{item.title}</h2>
                <p>{item.excerpt || item.content || 'More details will be published soon.'}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
