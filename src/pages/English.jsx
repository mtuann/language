import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mic, PenTool, Headphones, ArrowRight } from 'lucide-react';
import { testRegistry } from '../data';

const TestCard = ({ test }) => {
    const IconGroup = [BookOpen, Headphones, Mic, PenTool];

    return (
        <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem' }}>
                <div>
                    <span className="badge badge-blue" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>
                        {test.type}
                    </span>
                    <h2 style={{ fontSize: '1.5rem', margin: 0 }}>{test.title}</h2>
                </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
                {test.description}
            </p>

            <div style={{ padding: '1rem', background: 'var(--slate-50)', borderRadius: '8px', marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '0.75rem', color: 'var(--slate-400)' }}>
                    {IconGroup.map((Icon, i) => <Icon key={i} size={20} />)}
                </div>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--slate-600)' }}>
                    {test.duration}
                </span>
            </div>

            <Link to={`/english/test/${test.id}`} className="btn btn-primary" style={{ width: '100%' }}>
                Start Simulation <ArrowRight size={18} />
            </Link>
        </div>
    );
};

export default function English() {
    const tests = Object.values(testRegistry);

    return (
        <div className="container" style={{ paddingBottom: '4rem' }}>
            <div style={{ maxWidth: '800px', margin: '4rem auto 3rem', textAlign: 'center' }}>
                <h1 style={{ marginBottom: '1rem' }}>English Proficiency Tests</h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
                    Select a practice exam to simulate the real testing environment.
                </p>
            </div>

            <div className="grid-2">
                {tests.map(test => (
                    <TestCard key={test.id} test={test} />
                ))}

                {/* Coming Soon Card */}
                <div className="card" style={{ opacity: 0.7, borderStyle: 'dashed' }}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <span className="badge" style={{ background: 'var(--slate-100)', color: 'var(--slate-500)' }}>Coming Soon</span>
                        <h2 style={{ fontSize: '1.5rem', margin: '0.5rem 0 0' }}>IELTS Academic 1</h2>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                        Full Cambridge IELTS simulation including graph description writing tasks.
                    </p>
                    <button disabled className="btn btn-secondary" style={{ width: '100%' }}>
                        Prepare Interface
                    </button>
                </div>
            </div>
        </div>
    );
}
