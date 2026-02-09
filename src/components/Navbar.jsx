import React from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4" style={{ position: 'fixed', top: 0, left: 0, right: 0, padding: '1rem 1.5rem' }}>
            <div className="container glass-card flex items-center justify-between" style={{ padding: '0.75rem 1.5rem' }}>
                <div className="flex items-center gap-2">
                    <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'linear-gradient(135deg, #9333ea, #06b6d4)',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 15px rgba(147, 51, 234, 0.3)'
                    }}>
                        <Rocket color="white" size={24} />
                    </div>
                    <span className="text-2xl" style={{ fontWeight: 800, letterSpacing: '-0.025em' }}>
                        AURA<span style={{ color: '#9333ea' }}>AI</span>
                    </span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md-flex items-center gap-8" style={{ fontWeight: 500 }}>
                    <a href="#features" className="hover-purple">Features</a>
                    <a href="#showcase" className="hover-purple">Showcase</a>
                    <a href="#pricing" className="hover-purple">Pricing</a>
                    <button className="btn-primary">Get Started</button>
                </div>

                {/* Mobile Toggle */}
                <button className="md-hidden" onClick={() => setIsOpen(!isOpen)} style={{ background: 'transparent', color: 'white' }}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md-hidden mt-10 glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <a href="#features" onClick={() => setIsOpen(false)}>Features</a>
                    <a href="#showcase" onClick={() => setIsOpen(false)}>Showcase</a>
                    <a href="#pricing" onClick={() => setIsOpen(false)}>Pricing</a>
                    <button className="btn-primary w-full">Get Started</button>
                </div>
            )}

            <style>{`
        .hover-purple { transition: color 0.3s; }
        .hover-purple:hover { color: #a855f7; }
        @media (max-width: 767px) {
          .md-flex { display: none; }
          .md-hidden { display: block; }
        }
        @media (min-width: 768px) {
          .md-flex { display: flex; }
          .md-hidden { display: none; }
        }
        .fixed { position: fixed; }
        .top-0 { top: 0; }
        .left-0 { left: 0; }
        .right-0 { right: 0; }
      `}</style>
        </nav>
    );
}
