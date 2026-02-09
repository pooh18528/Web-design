import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="py-20" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <div className="grid grid-cols-2" style={{ marginBottom: '4rem' }}>
          <div>
            <div className="flex items-center gap-2" style={{ marginBottom: '1.5rem' }}>
              <span className="text-2xl" style={{ fontWeight: 800 }}>AURA<span style={{ color: '#9333ea' }}>AI</span></span>
            </div>
            <p style={{ color: '#94a3b8', maxWidth: '300px' }}>
              Defining the future of creative intelligence. Join us on our journey to empower every creator on earth.
            </p>
          </div>
          <div className="flex justify-between" style={{ marginLeft: 'auto', width: '100%', maxWidth: '400px' }}>
            <div className="flex flex-col gap-4">
              <h4 style={{ fontWeight: 700 }}>Product</h4>
              <a href="#" style={{ color: '#94a3b8' }}>Features</a>
              <a href="#" style={{ color: '#94a3b8' }}>Showcase</a>
              <a href="#" style={{ color: '#94a3b8' }}>API</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 style={{ fontWeight: 700 }}>Company</h4>
              <a href="#" style={{ color: '#94a3b8' }}>About</a>
              <a href="#" style={{ color: '#94a3b8' }}>Blog</a>
              <a href="#" style={{ color: '#94a3b8' }}>Careers</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 style={{ fontWeight: 700 }}>Legal</h4>
              <a href="#" style={{ color: '#94a3b8' }}>Privacy</a>
              <a href="#" style={{ color: '#94a3b8' }}>Terms</a>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem' }}>
          <p style={{ color: '#64748b', fontSize: '0.875rem' }}>© 2024 Aura AI Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" style={{ color: '#94a3b8' }}><Twitter size={20} /></a>
            <a href="#" style={{ color: '#94a3b8' }}><Github size={20} /></a>
            <a href="#" style={{ color: '#94a3b8' }}><Linkedin size={20} /></a>
            <a href="#" style={{ color: '#94a3b8' }}><Mail size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Features />
      <Showcase />

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="glass-card text-center" style={{ padding: '5rem 2rem', background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)' }}>
            <h2 className="text-4xl" style={{ marginBottom: '1.5rem' }}>Ready to <span className="gradient-text">Level Up</span> Your Workflow?</h2>
            <p style={{ color: '#94a3b8', fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
              Join 10,000+ creators and companies building the future with Aura AI.
            </p>
            <button className="btn-primary" style={{ padding: '16px 48px', fontSize: '1.1rem' }}>
              Create Your Account Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
