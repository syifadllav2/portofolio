/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Smooth scroll helper
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('hero');
  };

  // Setup intersection observer to track active section while scrolling
  useEffect(() => {
    const sections = ['hero', 'profile', 'projects', 'contact'];
    
    const observerOptions = {
      root: null, // viewport
      rootMargin: '-30% 0px -40% 0px', // trigger near center of screen
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-amber-300 selection:text-slate-950">
      
      {/* Dynamic Animated Header */}
      <Header
        activeSection={activeSection}
        onNavigate={handleScrollToSection}
      />

      {/* Main Sections Stack */}
      <main className="w-full">
        {/* Hero Banner Section */}
        <section id="hero">
          <Hero onScrollTo={handleScrollToSection} />
        </section>

        {/* Profile/Bento grid Section */}
        <section id="profile">
          <Profile onScrollToContact={() => handleScrollToSection('contact')} />
        </section>

        {/* Project Gallery grid Section */}
        <section id="projects">
          <Projects />
        </section>

        {/* Contact Form Section */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer Branding Area */}
      <Footer onScrollToTop={handleScrollToTop} />

    </div>
  );
}
