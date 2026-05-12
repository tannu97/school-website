import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Academics = lazy(() => import('./pages/Academics'));
const Admissions = lazy(() => import('./pages/Admissions'));
const Contact = lazy(() => import('./pages/Contact'));
const News = lazy(() => import('./pages/News'));

const Loader = () => (
  <div className="page-loader">
    <div className="loader-ring"/>
    <span style={{fontFamily:'Space Grotesk',color:'var(--text-muted)',fontSize:'0.85rem'}}>Loading...</span>
  </div>
);

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <main>
          <Suspense fallback={<Loader/>}>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/academics" element={<Academics/>}/>
              <Route path="/admissions" element={<Admissions/>}/>
              <Route path="/news" element={<News/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
          </Suspense>
        </main>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  );
}
