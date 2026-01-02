import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Layers, Zap, Award } from 'lucide-react';

export default function Home() {
    return (
        <div>
            {/* Hero Section */}
            <div className="container" style={{ padding: '6rem 2rem 4rem', textAlign: 'center' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'white', border: '1px solid var(--primary-light)', borderRadius: '999px', marginBottom: '2rem', color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' }}>
                    <span style={{ display: 'block', width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '50%' }}></span>
                    New TOEFL Practice Available
                </div>

                <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', background: 'linear-gradient(135deg, var(--slate-900) 0%, var(--slate-600) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.03em' }}>
                    Master Your Language <br /> Exams with Confidence.
                </h1>

                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: '1.7' }}>
                    Free, open-source exam simulation for TOEFL and IELTS. Practice Reading, Listening, Speaking, and Writing in a realistic environment.
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <Link to="/english" className="btn btn-primary" style={{ height: '50px', padding: '0 2rem', fontSize: '1.1rem' }}>
                        Start Practicing <ArrowRight size={20} />
                    </Link>
                    <a href="https://github.com/mtuann/language" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ height: '50px', padding: '0 2rem', fontSize: '1.1rem' }}>
                        View on GitHub
                    </a>
                </div>
            </div>

            {/* Feature Grid */}
            <div style={{ background: 'white', borderTop: '1px solid var(--slate-200)', padding: '6rem 0' }}>
                <div className="container">
                    <div className="grid-3">
                        <div className="card-plain">
                            <div style={{ width: '50px', height: '50px', background: 'var(--primary-light)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                <Layers className="text-primary" size={24} color="var(--primary)" />
                            </div>
                            <h3>Realistic Structure</h3>
                            <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                                Tests are structured exactly like the real exams, including timing and section breaks.
                            </p>
                        </div>

                        <div className="card-plain">
                            <div style={{ width: '50px', height: '50px', background: '#ecfdf5', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                <Zap size={24} color="#059669" />
                            </div>
                            <h3>Instant Feedback</h3>
                            <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                                Get immediate grading on Reading and Listening sections to identify weak points instantly.
                            </p>
                        </div>

                        <div className="card-plain">
                            <div style={{ width: '50px', height: '50px', background: '#fff7ed', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                <Award size={24} color="#ea580c" />
                            </div>
                            <h3>All Skill Areas</h3>
                            <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                                We don't just quiz you. We provide simulations for Speaking and Writing tasks as well.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
