import React from 'react';
import { Zap, Shield, Cpu, Layers, Globe, Smile } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    { icon: <Zap color="#9333ea" />, title: 'Real-time Processing', desc: 'Experience lightning fast AI generation with our distributed neural clusters.' },
    { icon: <Shield color="#9333ea" />, title: 'Enterprise Security', desc: 'Military grade encryption for all your creative assets and data.' },
    { icon: <Cpu color="#9333ea" />, title: 'Advanced Models', desc: 'Access to the world\'s most powerful LLMs and Diffusion models.' },
    { icon: <Layers color="#9333ea" />, title: 'Seamless Workflow', desc: 'Integrate with your favorite design tools like Figma and Adobe.' },
    { icon: <Globe color="#9333ea" />, title: 'Global Reach', desc: 'Deploy your content globally with localized AI understanding.' },
    { icon: <Smile color="#9333ea" />, title: 'Ease of Use', desc: 'No complex prompts needed. Our intuitive UI understands you.' }
];

export default function Features() {
    return (
        <section id="features" className="py-20" style={{ background: '#05011a' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '5rem' }}>
                    <h2 className="text-4xl" style={{ marginBottom: '1rem' }}>Engineered for <span className="gradient-text">Excellence</span></h2>
                    <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>Everything you need to scale your creative output without compromising on quality.</p>
                </div>

                <div className="grid grid-cols-3">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card"
                            style={{ padding: '2.5rem', transition: 'transform 0.3s' }}
                            whileHover={{ y: -10 }}
                        >
                            <div style={{
                                width: '50px',
                                height: '50px',
                                background: 'rgba(147, 51, 234, 0.1)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem'
                            }}>
                                {f.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>{f.title}</h3>
                            <p style={{ color: '#94a3b8' }}>{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
