import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Play } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '100vh', paddingTop: '160px', paddingBottom: '100px' }}>
            {/* Background Decorative Elements */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, transparent 70%)',
                filter: 'blur(60px)',
                zIndex: 0
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '5%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
                filter: 'blur(80px)',
                zIndex: 0
            }}></div>

            <div className="container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center"
                >
                    <div className="glass-card" style={{ padding: '0.5rem 1rem', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '2rem' }}>
                        <Sparkles size={16} className="text-purple-500" />
                        <span className="text-sm" style={{ fontWeight: 500, color: '#e2e8f0' }}>Transforming Creativity with AI</span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-6xl"
                    style={{ marginBottom: '1.5rem', maxWidth: '900px', margin: '0 auto 1.5rem auto' }}
                >
                    Elevate Your Brand with <span className="gradient-text">Aura AI Studio</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{ fontSize: '1.25rem', color: '#94a3b8', maxWidth: '700px', margin: '0 auto 3rem auto' }}
                >
                    The next generation design tool powered by artificial intelligence. Create stunning visuals, videos, and social content in seconds.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex justify-center gap-4"
                >
                    <button className="btn-primary" style={{ fontSize: '1.1rem', padding: '16px 36px' }}>
                        Start Building Free <ArrowRight size={20} />
                    </button>
                    <button className="btn-secondary" style={{ fontSize: '1.1rem', padding: '16px 36px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Play size={20} fill="white" /> Watch Demo
                    </button>
                </motion.div>

                {/* Dashboard Preview Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-10 mx-auto"
                    style={{
                        maxWidth: '1000px',
                        height: '400px',
                        background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '24px 24px 0 0',
                        borderBottom: 'none',
                        position: 'relative',
                        overflow: 'hidden',
                        marginTop: '5rem'
                    }}
                >
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '40px',
                        background: 'rgba(255,255,255,0.05)',
                        borderBottom: '1px solid rgba(255,255,255,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0 1rem',
                        gap: '8px'
                    }}>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
                    </div>

                    <div style={{ padding: '60px 20px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
                        {[1, 2, 3].map(i => (
                            <div key={i} className="glass-card" style={{ height: '200px', animation: 'float 4s ease-in-out infinite', animationDelay: `${i * 0.5}s` }}></div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
