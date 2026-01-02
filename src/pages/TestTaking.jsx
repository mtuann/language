import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getTestById } from '../data';
import { ChevronRight, ChevronLeft, CheckCircle, Clock, Volume2, Mic, FileText, Menu } from 'lucide-react';

export default function ExamSimulator() {
    const { testId } = useParams();
    const navigate = useNavigate();
    const [testData, setTestData] = useState(null);
    const [currentSectionIdx, setCurrentSectionIdx] = useState(0);
    const [partIdx, setPartIdx] = useState(0);

    // State for answers
    const [answers, setAnswers] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [viewMode, setViewMode] = useState('exam'); // 'exam' | 'results'
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        // Simulate data fetching
        const data = getTestById(testId);
        if (data) {
            setTestData(data);
        }
    }, [testId]);

    if (!testData) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h2>Loading Test...</h2>
                <p>If this takes too long, the test ID might be invalid.</p>
                <Link to="/english" className="btn btn-secondary" style={{ marginTop: '1rem' }}>Return to Dashboard</Link>
            </div>
        );
    }

    const sections = testData.sections;
    const currentSection = sections[currentSectionIdx];
    const currentPart = currentSection.parts[partIdx];
    const totalPartsInSection = currentSection.parts.length;

    const handleNext = () => {
        if (partIdx < totalPartsInSection - 1) {
            setPartIdx(prev => prev + 1);
        } else if (currentSectionIdx < sections.length - 1) {
            setCurrentSectionIdx(prev => prev + 1);
            setPartIdx(0);
        } else {
            // End of Exam
            if (window.confirm('You have reached the end of the exam. Submit now?')) {
                setIsSubmitted(true);
                setViewMode('results');
            }
        }
    };

    const handlePrev = () => {
        if (partIdx > 0) {
            setPartIdx(prev => prev - 1);
        } else if (currentSectionIdx > 0) {
            setCurrentSectionIdx(prev => prev - 1);
            // Go to last part of previous section (simplified: go to 0 for now)
            setPartIdx(0);
        }
    };

    const handleAnswerSelect = (qId, optionIdx) => {
        if (isSubmitted) return;
        setAnswers(prev => ({ ...prev, [qId]: optionIdx }));
    };

    const handleTextAnswer = (qId, text) => {
        if (isSubmitted) return;
        setAnswers(prev => ({ ...prev, [qId]: text }));
    };

    // Renderers
    const renderReading = () => (
        <div className="exam-layout">
            {/* Left Pane: Passage */}
            <div className="scroll-pane card-plain" style={{ background: '#f8fafc', borderLeft: '4px solid var(--primary)' }}>
                <h3 style={{ marginBottom: '1rem' }}>{currentPart.title}</h3>
                <p style={{ lineHeight: '1.8', whiteSpace: 'pre-wrap', fontSize: '1.05rem', color: 'var(--slate-700)' }}>
                    {currentPart.content}
                </p>
            </div>

            {/* Right Pane: Questions */}
            <div className="scroll-pane">
                <h3 style={{ marginBottom: '1.5rem', position: 'sticky', top: 0, background: 'white', paddingBottom: '1rem', zIndex: 10 }}>
                    Questions
                </h3>
                {currentPart.questions.map((q, idx) => (
                    <div key={q.id} style={{ marginBottom: '2.5rem' }}>
                        <p style={{ fontWeight: 600, marginBottom: '1rem', fontSize: '1.1rem' }}>
                            {idx + 1}. {q.text}
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {q.options.map((opt, optIdx) => {
                                const isSelected = answers[q.id] === optIdx;
                                const isCorrect = q.correctAnswer === optIdx;

                                let className = 'option-row';
                                if (isSelected) className += ' selected';

                                // Result Styles
                                let style = {};
                                if (isSubmitted) {
                                    if (isCorrect) {
                                        style = { borderColor: 'var(--success)', background: 'rgba(34, 197, 94, 0.1)' };
                                    } else if (isSelected) {
                                        style = { borderColor: 'var(--error)', background: 'rgba(239, 68, 68, 0.1)' };
                                    }
                                }

                                return (
                                    <div
                                        key={optIdx}
                                        className={className}
                                        onClick={() => handleAnswerSelect(q.id, optIdx)}
                                        style={style}
                                    >
                                        <div style={{
                                            width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #cbd5e1', marginRight: '1rem',
                                            borderColor: isSelected ? 'var(--primary)' : '#cbd5e1',
                                            background: isSelected ? 'var(--primary)' : 'transparent'
                                        }} />
                                        {opt}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderListening = () => (
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="card" style={{ marginBottom: '2rem', textAlign: 'center', padding: '3rem 2rem' }}>
                <div style={{ width: '80px', height: '80px', background: 'var(--primary-light)', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                    <Volume2 size={40} color="var(--primary)" />
                </div>
                <h2>{currentPart.title}</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Listen to the conversation carefully.</p>

                <audio controls style={{ width: '100%', maxWidth: '500px' }}>
                    {currentPart.audioSrc && <source src={currentPart.audioSrc} type="audio/mpeg" />}
                    Your browser does not support the audio element.
                </audio>

                {isSubmitted && (
                    <div style={{ marginTop: '2rem', textAlign: 'left', background: 'var(--slate-50)', padding: '1rem', borderRadius: '8px' }}>
                        <strong>Transcript:</strong>
                        <p style={{ marginTop: '0.5rem', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                            {currentPart.transcript}
                        </p>
                    </div>
                )}
            </div>

            <div className="card-plain">
                <h3>Questions</h3>
                {currentPart.questions.map((q, idx) => (
                    <div key={q.id} style={{ marginTop: '2rem', borderBottom: '1px solid var(--slate-100)', paddingBottom: '2rem' }}>
                        <p style={{ fontWeight: 600, marginBottom: '1rem' }}>{idx + 1}. {q.text}</p>
                        {q.options.map((opt, optIdx) => {
                            const isSelected = answers[q.id] === optIdx;
                            const isCorrect = q.correctAnswer === optIdx;
                            let style = {};
                            if (isSubmitted) {
                                if (isCorrect) style = { color: 'var(--success)', fontWeight: 'bold' };
                                else if (isSelected) style = { color: 'var(--error)' };
                            }

                            return (
                                <label key={optIdx} style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 0', cursor: 'pointer', ...style }}>
                                    <input
                                        type="radio"
                                        name={q.id}
                                        checked={isSelected}
                                        onChange={() => handleAnswerSelect(q.id, optIdx)}
                                        style={{ marginRight: '0.75rem', accentColor: 'var(--primary)' }}
                                    />
                                    {opt}
                                </label>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );

    const renderSpeakingWriting = (type) => (
        <div className="container" style={{ maxWidth: '900px' }}>
            <div className="card" style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    {type === 'speaking' ? <Mic size={24} color="var(--primary)" /> : <FileText size={24} color="var(--primary)" />}
                    <h2 style={{ margin: 0 }}>{currentPart.title}</h2>
                </div>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--slate-800)', whiteSpace: 'pre-wrap' }}>
                    {currentPart.prompt}
                </p>
                {currentPart.prepTime && (
                    <div style={{ marginTop: '1.5rem', display: 'inline-flex', gap: '1rem' }}>
                        <span className="badge badge-blue">Prep: {currentPart.prepTime}s</span>
                        <span className="badge badge-blue">Speak: {currentPart.speakTime}s</span>
                    </div>
                )}
            </div>

            <div className="card-plain">
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                    {type === 'speaking' ? 'Transcript Notes (Simulation)' : 'Your Response'}
                </label>
                <textarea
                    className="text-input"
                    style={{ minHeight: '300px', resize: 'vertical' }}
                    placeholder={type === 'speaking' ? "In a real exam, this would be an audio recorder. Use this space to type your notes or response script." : "Start typing your essay..."}
                    value={answers[currentPart.id] || ''}
                    onChange={(e) => handleTextAnswer(currentPart.id, e.target.value)}
                />
                <div style={{ marginTop: '1rem', color: 'var(--text-secondary)', textAlign: 'right' }}>
                    Word Count: {(answers[currentPart.id] || '').split(/\s+/).filter(w => w.length > 0).length}
                </div>
            </div>
        </div>
    );

    const renderResults = () => {
        let score = 0;
        let total = 0;
        const details = testData.sections.map((section, idx) => {
            let secScore = 0;
            let secTotal = 0;
            const questionMap = [];
            if (section.id === 'reading' || section.id === 'listening') {
                section.parts.forEach((part, pIdx) => {
                    part.questions.forEach((q, qIdx) => {
                        secTotal++;
                        const isCorrect = answers[q.id] === q.correctAnswer;
                        if (isCorrect) secScore++;
                        questionMap.push({ id: q.id, isCorrect, pIdx });
                    });
                });
            }
            score += secScore;
            total += secTotal;
            return { ...section, score: secScore, total: secTotal, idx, questionMap };
        });

        return (
            <div className="container" style={{ padding: '3rem 1rem', maxWidth: '800px' }}>
                <div className="card" style={{ textAlign: 'center', marginBottom: '3rem', borderTop: '4px solid var(--success)' }}>
                    <div style={{ margin: '0 auto 1.5rem', width: '80px', height: '80px', background: '#ecfdf5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <CheckCircle size={48} color="#059669" />
                    </div>
                    <h1 style={{ marginBottom: '1rem' }}>Test Completed!</h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>Here is your performance summary.</p>

                    <div style={{ margin: '2rem auto', padding: '2rem', background: '#f8fafc', borderRadius: '16px', border: '1px solid var(--slate-200)', maxWidth: '400px' }}>
                        <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--slate-900)', lineHeight: '1' }}>{score}<span style={{ fontSize: '1.5rem', color: 'var(--slate-400)', fontWeight: 600 }}>/{total}</span></div>
                        <div style={{ color: 'var(--text-secondary)', fontWeight: 600, marginTop: '0.5rem' }}>Auto-Graded Score</div>
                    </div>
                </div>

                <h3 style={{ marginBottom: '1.5rem' }}>Detailed Performance Overview</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {details.map((sec) => (
                        <div key={sec.id} className="card-plain">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                                <div>
                                    <h4 style={{ marginBottom: '0.25rem', fontSize: '1.2rem' }}>{sec.title}</h4>
                                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: 500 }}>
                                        {sec.id === 'speaking' || sec.id === 'writing' ?
                                            <span style={{ color: 'var(--slate-500)' }}>Performance-based Review</span> :
                                            <span style={{ color: sec.score === sec.total ? 'var(--success)' : 'var(--slate-700)' }}>{sec.score} of {sec.total} correct</span>
                                        }
                                    </div>
                                </div>
                                <button className="btn btn-secondary" onClick={() => {
                                    setCurrentSectionIdx(sec.idx);
                                    setPartIdx(0);
                                    setViewMode('exam');
                                }}>
                                    Review Section
                                </button>
                            </div>

                            {sec.questionMap.length > 0 && (
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', padding: '1rem', background: 'var(--slate-50)', borderRadius: '12px' }}>
                                    {sec.questionMap.map((q, qIdx) => (
                                        <button
                                            key={q.id}
                                            onClick={() => {
                                                setCurrentSectionIdx(sec.idx);
                                                setPartIdx(q.pIdx);
                                                setViewMode('exam');
                                            }}
                                            style={{
                                                width: '32px',
                                                height: '32px',
                                                borderRadius: '6px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '0.8rem',
                                                fontWeight: 700,
                                                background: q.isCorrect ? 'var(--success)' : 'var(--error)',
                                                color: 'white',
                                                cursor: 'pointer',
                                                border: 'none',
                                                transition: 'transform 0.2s'
                                            }}
                                            title={`Question ${qIdx + 1}: ${q.isCorrect ? 'Correct' : 'Incorrect'}`}
                                            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
                                            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                                        >
                                            {qIdx + 1}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <Link to="/english" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>Return to Dashboard</Link>
                </div>
            </div>
        );
    };

    if (viewMode === 'results') {
        return (
            <div style={{ minHeight: '100vh', background: 'var(--slate-50)' }}>
                <header style={{ background: 'white', padding: '1rem 2rem', borderBottom: '1px solid var(--slate-200)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Link to="/" style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--slate-900)' }}>Mtuann Language</Link>
                </header>
                {renderResults()}
            </div>
        );
    }

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
            {/* Navigation Overlay/Sidebar */}
            {showNav && (
                <div
                    style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(15, 23, 42, 0.4)', backdropFilter: 'blur(4px)', zIndex: 1000, display: 'flex', justifyContent: 'flex-start' }}
                    onClick={() => setShowNav(false)}
                >
                    <div
                        style={{ width: '350px', background: 'white', height: '100%', boxShadow: '10px 0 30px rgba(0,0,0,0.1)', padding: '2rem', overflowY: 'auto' }}
                        onClick={e => e.stopPropagation()}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                            <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Test Overview</h2>
                            <button className="btn btn-secondary" onClick={() => setShowNav(false)} style={{ padding: '0.5rem' }}>✕</button>
                        </div>

                        {sections.map((sec, sIdx) => (
                            <div key={sec.id} style={{ marginBottom: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: currentSectionIdx === sIdx ? 'var(--primary)' : 'var(--slate-800)' }}>
                                    <span style={{ fontWeight: 800 }}>{sIdx + 1}.</span>
                                    <h4 style={{ margin: 0, fontWeight: 700 }}>{sec.title}</h4>
                                </div>
                                <div style={{ paddingLeft: '1.5rem', borderLeft: '2px solid var(--slate-100)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    {sec.parts.map((part, pIdx) => {
                                        const isActive = currentSectionIdx === sIdx && partIdx === pIdx;
                                        return (
                                            <button
                                                key={part.id}
                                                onClick={() => {
                                                    setCurrentSectionIdx(sIdx);
                                                    setPartIdx(pIdx);
                                                    setShowNav(false);
                                                }}
                                                style={{
                                                    textAlign: 'left',
                                                    padding: '0.75rem 1rem',
                                                    borderRadius: '8px',
                                                    fontSize: '0.9rem',
                                                    background: isActive ? 'var(--primary-light)' : 'transparent',
                                                    color: isActive ? 'var(--primary)' : 'var(--slate-600)',
                                                    fontWeight: isActive ? 600 : 400,
                                                    transition: 'all 0.2s'
                                                }}
                                                className="btn-ghost"
                                            >
                                                {part.title}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Exam Header */}
            <div style={{ background: 'white', borderBottom: '1px solid var(--slate-200)', padding: '0 2rem', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button
                        className="btn btn-secondary"
                        onClick={() => setShowNav(true)}
                        style={{ background: 'var(--slate-50)', border: '1px solid var(--slate-200)' }}
                        title="Open Test Overview"
                    >
                        <Menu size={20} />
                    </button>
                    <h3 style={{ margin: 0 }}>{testData.title}</h3>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    {isSubmitted && (
                        <button className="btn btn-secondary" onClick={() => setViewMode('results')}>
                            <CheckCircle size={16} /> Results
                        </button>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--slate-600)' }}>
                        <Clock size={18} />
                        <span style={{ fontFamily: 'monospace', fontWeight: 600 }}>00:45:00</span>
                    </div>
                    <button className="btn btn-secondary" onClick={() => navigate('/english')}>Exit Exam</button>
                </div>
            </div>

            {/* Progress Bar */}
            <div style={{ background: 'var(--slate-100)', height: '4px', width: '100%' }}>
                <div style={{
                    height: '100%',
                    background: 'var(--primary)',
                    width: `${((currentSectionIdx + 1) / sections.length) * 100}%`,
                    transition: 'width 0.5s'
                }} />
            </div>

            {/* Main Content Area */}
            <div style={{ flex: 1, padding: '2rem', background: 'var(--slate-50)' }}>
                <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <span style={{ fontWeight: 800, fontSize: '2rem', color: 'var(--slate-300)' }}>
                        0{currentSectionIdx + 1}
                    </span>
                    <div>
                        <h2 style={{ margin: 0 }}>{currentSection.title}</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>{currentSection.instructions}</p>
                    </div>
                </div>

                {currentSection.id === 'reading' && renderReading()}
                {currentSection.id === 'listening' && renderListening()}
                {(currentSection.id === 'speaking' || currentSection.id === 'writing') && renderSpeakingWriting(currentSection.id)}
            </div>

            {/* Footer Nav */}
            <div style={{ background: 'white', borderTop: '1px solid var(--slate-200)', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between' }}>
                <button className="btn btn-secondary" onClick={handlePrev} disabled={currentSectionIdx === 0 && partIdx === 0}>
                    <ChevronLeft size={18} /> Previous
                </button>

                {!isSubmitted ? (
                    <button className="btn btn-primary" onClick={handleNext}>
                        {currentSectionIdx === sections.length - 1 && partIdx === totalPartsInSection - 1 ? 'Finish Exam' : 'Next'} <ChevronRight size={18} />
                    </button>
                ) : (
                    <div className="btn" style={{ color: 'var(--success)', fontWeight: 'bold' }}>
                        <CheckCircle size={18} style={{ marginRight: '0.5rem' }} /> Exam Submitted
                    </div>
                )}
            </div>
        </div>
    );
}
