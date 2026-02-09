import React from 'react';
import { motion } from 'framer-motion';

const items = [
    { title: 'AI Video Gen', category: 'Motion', color: 'from-purple-500 to-indigo-500' },
    { title: 'Neural Brand', category: 'Design', color: 'from-cyan-500 to-blue-500' },
    { title: 'Smart Assets', category: '3D', color: 'from-pink-500 to-rose-500' },
    { title: 'Voice Synth', category: 'Audio', color: 'from-amber-500 to-orange-500' }
];

export default function Showcase() {
    return (
        <section id="showcase" className="py-20">
            <div className="container">
                <div className="flex justify-between items-end" style={{ marginBottom: '4rem' }}>
                    <div>
                        <h2 className="text-4xl" style={{ marginBottom: '1rem' }}>Created with <span className="gradient-text">Aura</span></h2>
                        <p style={{ color: '#94a3b8' }}>Explore the possibilities of AI-driven creativity.</p>
                    </div>
                    <button className="btn-secondary">View Gallery</button>
                </div>

                <div className="grid grid-cols-2" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card overflow-hidden group"
                            style={{ height: '350px', position: 'relative', cursor: 'pointer' }}
                        >
                            <div style={{
                                height: '100%',
                                width: '100%',
                                background: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <div style={{
                                    width: '120px',
                                    height: '120px',
                                    borderRadius: '30px',
                                    background: 'white',
                                    opacity: 0.1,
                                    transform: 'rotate(15deg)'
                                }}></div>
                            </div>

                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: '1.5rem',
                                background: 'linear-gradient(to top, rgba(3,0,20,0.9), transparent)',
                                backdropFilter: 'blur(4px)'
                            }}>
                                <span className="text-xs" style={{ color: '#9333ea', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{item.category}</span>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{item.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
