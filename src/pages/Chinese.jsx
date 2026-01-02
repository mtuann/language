import React, { useState, useEffect } from 'react';
import { BookOpen, Search, RotateCcw, CheckCircle, XCircle, Play, RotateCw, Filter, Award, Zap, Volume2, ChevronDown, ChevronUp, Trash2, List } from 'lucide-react';
import { radicalsData, getRadicalsByHSK, getTopRadicals, getRemainingRadicals, getAllHSKLevels } from '../data/radicals';
import { pronunciationGroups, getAllGroups } from '../data/pronunciation';

const VIEW_MODES = {
    BROWSE: 'browse',
    FLASHCARD: 'flashcard',
    QUIZ: 'quiz',
    PRONUNCIATION: 'pronunciation',
    PROGRESS: 'progress'
};

const FILTER_MODES = {
    ALL: 'all',
    TOP50: 'top50',
    REMAINING: 'remaining',
    HSK1: 'hsk1',
    HSK2: 'hsk2',
    HSK3: 'hsk3',
    HSK4: 'hsk4',
    HSK5: 'hsk5',
    HSK6: 'hsk6'
};

export default function Chinese() {
    const [viewMode, setViewMode] = useState(VIEW_MODES.BROWSE);
    const [filterMode, setFilterMode] = useState(FILTER_MODES.ALL);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRadical, setSelectedRadical] = useState(null);
    
    // Flashcard state
    const [flashcardIndex, setFlashcardIndex] = useState(0);
    const [flashcardFlipped, setFlashcardFlipped] = useState(false);
    const [flashcardQueue, setFlashcardQueue] = useState([]);
    
    // Quiz state
    const [quizIndex, setQuizIndex] = useState(0);
    const [quizQueue, setQuizQueue] = useState([]);
    const [quizAnswer, setQuizAnswer] = useState('');
    const [quizResult, setQuizResult] = useState(null);
    const [quizScore, setQuizScore] = useState({ correct: 0, total: 0 });
    
    // Pronunciation state
    const [expandedGroups, setExpandedGroups] = useState({});
    const [pronunciationSearch, setPronunciationSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [progressSearch, setProgressSearch] = useState('');
    
    // Progress tracking
    const [progress, setProgress] = useState(() => {
        const saved = localStorage.getItem('chineseRadicalsProgress');
        return saved ? JSON.parse(saved) : {};
    });

    // Get filtered radicals based on filter mode
    const getFilteredRadicals = () => {
        let filtered = [];
        
        switch (filterMode) {
            case FILTER_MODES.TOP50:
                filtered = getTopRadicals(50);
                break;
            case FILTER_MODES.REMAINING:
                filtered = getRemainingRadicals();
                break;
            case FILTER_MODES.HSK1:
                filtered = getRadicalsByHSK(1);
                break;
            case FILTER_MODES.HSK2:
                filtered = getRadicalsByHSK(2);
                break;
            case FILTER_MODES.HSK3:
                filtered = getRadicalsByHSK(3);
                break;
            case FILTER_MODES.HSK4:
                filtered = getRadicalsByHSK(4);
                break;
            case FILTER_MODES.HSK5:
                filtered = getRadicalsByHSK(5);
                break;
            case FILTER_MODES.HSK6:
                filtered = getRadicalsByHSK(6);
                break;
            default:
                filtered = radicalsData;
        }
        
        // Apply search filter
        if (searchTerm) {
            filtered = filtered.filter(radical =>
                radical.radical.includes(searchTerm) ||
                radical.vietnamese.toLowerCase().includes(searchTerm.toLowerCase()) ||
                radical.pinyin.toLowerCase().includes(searchTerm.toLowerCase()) ||
                radical.meaning.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        
        return filtered;
    };

    const filteredRadicals = getFilteredRadicals();

    // Initialize flashcard queue
    useEffect(() => {
        if (viewMode === VIEW_MODES.FLASHCARD && filteredRadicals.length > 0) {
            const shuffled = [...filteredRadicals].sort(() => Math.random() - 0.5);
            setFlashcardQueue(shuffled);
            setFlashcardIndex(0);
            setFlashcardFlipped(false);
        }
    }, [viewMode, filterMode]);

    // Initialize quiz queue
    useEffect(() => {
        if (viewMode === VIEW_MODES.QUIZ && filteredRadicals.length > 0) {
            const shuffled = [...filteredRadicals].sort(() => Math.random() - 0.5).slice(0, 10);
            setQuizQueue(shuffled);
            setQuizIndex(0);
            setQuizAnswer('');
            setQuizResult(null);
            setQuizScore({ correct: 0, total: 0 });
        }
    }, [viewMode, filterMode]);

    // Save progress to localStorage
    useEffect(() => {
        localStorage.setItem('chineseRadicalsProgress', JSON.stringify(progress));
    }, [progress]);

    const updateProgress = (radicalId, mastered) => {
        setProgress(prev => ({
            ...prev,
            [radicalId]: {
                mastered,
                lastReviewed: new Date().toISOString(),
                reviewCount: (prev[radicalId]?.reviewCount || 0) + 1
            }
        }));
    };

    const handleFlashcardNext = () => {
        if (flashcardIndex < flashcardQueue.length - 1) {
            setFlashcardIndex(prev => prev + 1);
            setFlashcardFlipped(false);
        }
    };

    const handleFlashcardPrev = () => {
        if (flashcardIndex > 0) {
            setFlashcardIndex(prev => prev - 1);
            setFlashcardFlipped(false);
        }
    };

    const handleFlashcardMastered = () => {
        if (flashcardQueue[flashcardIndex]) {
            updateProgress(flashcardQueue[flashcardIndex].id, true);
            handleFlashcardNext();
        }
    };

    const handleQuizSubmit = () => {
        const currentRadical = quizQueue[quizIndex];
        if (!currentRadical) return;

        const isCorrect = quizAnswer.toLowerCase().trim() === currentRadical.vietnamese.toLowerCase().trim();
        setQuizResult(isCorrect);
        setQuizScore(prev => ({
            correct: prev.correct + (isCorrect ? 1 : 0),
            total: prev.total + 1
        }));

        updateProgress(currentRadical.id, isCorrect);
    };

    const handleQuizNext = () => {
        if (quizIndex < quizQueue.length - 1) {
            setQuizIndex(prev => prev + 1);
            setQuizAnswer('');
            setQuizResult(null);
        }
    };

    const handleQuizRestart = () => {
        const shuffled = [...filteredRadicals].sort(() => Math.random() - 0.5).slice(0, 10);
        setQuizQueue(shuffled);
        setQuizIndex(0);
        setQuizAnswer('');
        setQuizResult(null);
        setQuizScore({ correct: 0, total: 0 });
    };

    const getMasteredCount = () => {
        return Object.values(progress).filter(p => p.mastered).length;
    };

    const getMasteredRadicals = () => {
        return radicalsData.filter(radical => progress[radical.id]?.mastered);
    };

    const getNonMasteredRadicals = () => {
        return radicalsData.filter(radical => !progress[radical.id]?.mastered);
    };

    const resetProgress = () => {
        if (window.confirm('Bạn có chắc muốn xóa tất cả tiến trình học tập? Hành động này không thể hoàn tác.')) {
            localStorage.removeItem('chineseRadicalsProgress');
            setProgress({});
        }
    };

    const currentFlashcard = flashcardQueue[flashcardIndex];
    const currentQuiz = quizQueue[quizIndex];
    const masteredCount = getMasteredCount();

    return (
        <div className="container" style={{ paddingBottom: '4rem' }}>
            <div style={{ maxWidth: '1200px', margin: '4rem auto 3rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 style={{ marginBottom: '1rem' }}>Học Bộ Thủ Tiếng Trung</h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
                        Khám phá các bộ thủ cơ bản và ví dụ từ vựng tiếng Trung
                    </p>
                    {masteredCount > 0 && (
                        <div style={{ 
                            marginTop: '1rem', 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            gap: '0.75rem',
                            padding: '0.5rem 1rem',
                            background: 'var(--primary-light)',
                            borderRadius: '999px',
                            color: 'var(--primary)',
                            fontWeight: 600
                        }}>
                            <Award size={18} />
                            <span>Đã thuộc: {masteredCount} / {radicalsData.length} bộ thủ</span>
                            <button
                                onClick={resetProgress}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    color: 'var(--primary)',
                                    cursor: 'pointer',
                                    padding: '0.25rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    borderRadius: '4px',
                                    transition: 'background 0.2s'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)'}
                                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                title="Xóa tiến trình"
                            >
                                <Trash2 size={14} />
                            </button>
                        </div>
                    )}
                </div>

                {/* Mode Selector */}
                <div style={{ 
                    display: 'flex', 
                    gap: '1rem', 
                    marginBottom: '2rem',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    <button
                        onClick={() => setViewMode(VIEW_MODES.BROWSE)}
                        className={`btn ${viewMode === VIEW_MODES.BROWSE ? 'btn-primary' : 'btn-secondary'}`}
                    >
                        <BookOpen size={18} />
                        Duyệt
                    </button>
                    <button
                        onClick={() => setViewMode(VIEW_MODES.FLASHCARD)}
                        className={`btn ${viewMode === VIEW_MODES.FLASHCARD ? 'btn-primary' : 'btn-secondary'}`}
                    >
                        <RotateCcw size={18} />
                        Thẻ Ghi Nhớ
                    </button>
                    <button
                        onClick={() => setViewMode(VIEW_MODES.QUIZ)}
                        className={`btn ${viewMode === VIEW_MODES.QUIZ ? 'btn-primary' : 'btn-secondary'}`}
                    >
                        <Zap size={18} />
                        Kiểm Tra
                    </button>
                    <button
                        onClick={() => setViewMode(VIEW_MODES.PRONUNCIATION)}
                        className={`btn ${viewMode === VIEW_MODES.PRONUNCIATION ? 'btn-primary' : 'btn-secondary'}`}
                    >
                        <Volume2 size={18} />
                        Phát Âm
                    </button>
                    <button
                        onClick={() => setViewMode(VIEW_MODES.PROGRESS)}
                        className={`btn ${viewMode === VIEW_MODES.PROGRESS ? 'btn-primary' : 'btn-secondary'}`}
                    >
                        <List size={18} />
                        Tiến Trình
                    </button>
                </div>

                {/* Filter Selector */}
                {viewMode !== VIEW_MODES.PRONUNCIATION && (
                <div style={{ 
                    display: 'flex', 
                    gap: '0.5rem', 
                    marginBottom: '2rem',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    <button
                        onClick={() => setFilterMode(FILTER_MODES.ALL)}
                        className={`btn ${filterMode === FILTER_MODES.ALL ? 'btn-secondary' : 'btn-ghost'}`}
                        style={{ fontSize: '0.875rem' }}
                    >
                        Tất cả
                    </button>
                    <button
                        onClick={() => setFilterMode(FILTER_MODES.TOP50)}
                        className={`btn ${filterMode === FILTER_MODES.TOP50 ? 'btn-secondary' : 'btn-ghost'}`}
                        style={{ fontSize: '0.875rem' }}
                    >
                        Top 50
                    </button>
                    <button
                        onClick={() => setFilterMode(FILTER_MODES.REMAINING)}
                        className={`btn ${filterMode === FILTER_MODES.REMAINING ? 'btn-secondary' : 'btn-ghost'}`}
                        style={{ fontSize: '0.875rem' }}
                    >
                        Còn lại
                    </button>
                    {getAllHSKLevels().map(level => (
                        <button
                            key={level}
                            onClick={() => setFilterMode(`hsk${level}`)}
                            className={`btn ${filterMode === `hsk${level}` ? 'btn-secondary' : 'btn-ghost'}`}
                            style={{ fontSize: '0.875rem' }}
                        >
                            HSK {level}
                        </button>
                    ))}
                </div>
                )}

                {/* Search Bar */}
                {viewMode === VIEW_MODES.BROWSE && (
                    <div style={{ marginBottom: '2rem', position: 'relative' }}>
                        <Search 
                            size={20} 
                            style={{ 
                                position: 'absolute', 
                                left: '1rem', 
                                top: '50%', 
                                transform: 'translateY(-50%)',
                                color: 'var(--text-secondary)'
                            }} 
                        />
                        <input
                            type="text"
                            placeholder="Tìm kiếm bộ thủ, pinyin hoặc nghĩa tiếng Việt..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="text-input"
                            style={{ paddingLeft: '3rem' }}
                        />
                    </div>
                )}

                {/* Flashcard View */}
                {viewMode === VIEW_MODES.FLASHCARD && (
                    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                        {currentFlashcard ? (
                            <div>
                                <div style={{ 
                                    textAlign: 'center', 
                                    marginBottom: '1rem',
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.9rem'
                                }}>
                                    {flashcardIndex + 1} / {flashcardQueue.length}
                                </div>
                                <div
                                    className="card"
                                    style={{
                                        minHeight: '400px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        position: 'relative'
                                    }}
                                    onClick={() => setFlashcardFlipped(!flashcardFlipped)}
                                >
                                    {!flashcardFlipped ? (
                                        <div style={{ textAlign: 'center' }}>
                                            <div style={{
                                                fontSize: '6rem',
                                                fontWeight: 'bold',
                                                color: 'var(--primary)',
                                                marginBottom: '2rem'
                                            }}>
                                                {currentFlashcard.radical}
                                            </div>
                                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                                Nhấn để xem đáp án
                                            </p>
                                        </div>
                                    ) : (
                                        <div style={{ textAlign: 'center', width: '100%' }}>
                                            <div style={{
                                                fontSize: '4rem',
                                                fontWeight: 'bold',
                                                color: 'var(--primary)',
                                                marginBottom: '1rem'
                                            }}>
                                                {currentFlashcard.radical}
                                            </div>
                                            <h2 style={{ marginBottom: '0.5rem' }}>{currentFlashcard.vietnamese}</h2>
                                            <p style={{ 
                                                color: 'var(--text-secondary)', 
                                                fontStyle: 'italic',
                                                marginBottom: '0.5rem'
                                            }}>
                                                {currentFlashcard.pinyin}
                                            </p>
                                            <p style={{ color: 'var(--text-secondary)' }}>
                                                {currentFlashcard.meaning}
                                            </p>
                                            {progress[currentFlashcard.id]?.mastered && (
                                                <div style={{
                                                    marginTop: '1rem',
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: '0.5rem',
                                                    padding: '0.5rem 1rem',
                                                    background: 'var(--success)',
                                                    color: 'white',
                                                    borderRadius: '999px',
                                                    fontSize: '0.875rem'
                                                }}>
                                                    <CheckCircle size={16} />
                                                    Đã thuộc
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                                <div style={{ 
                                    display: 'flex', 
                                    gap: '1rem', 
                                    justifyContent: 'center',
                                    marginTop: '1.5rem'
                                }}>
                                    <button
                                        onClick={handleFlashcardPrev}
                                        disabled={flashcardIndex === 0}
                                        className="btn btn-secondary"
                                    >
                                        <RotateCcw size={18} />
                                        Trước
                                    </button>
                                    <button
                                        onClick={handleFlashcardMastered}
                                        className="btn btn-primary"
                                    >
                                        <CheckCircle size={18} />
                                        Đã thuộc
                                    </button>
                                    <button
                                        onClick={handleFlashcardNext}
                                        disabled={flashcardIndex === flashcardQueue.length - 1}
                                        className="btn btn-secondary"
                                    >
                                        Sau
                                        <RotateCw size={18} />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                                <p style={{ color: 'var(--text-secondary)' }}>
                                    Không có bộ thủ nào phù hợp với bộ lọc của bạn.
                                </p>
                            </div>
                        )}
                    </div>
                )}

                {/* Quiz View */}
                {viewMode === VIEW_MODES.QUIZ && (
                    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                        {currentQuiz ? (
                            <div>
                                <div style={{ 
                                    textAlign: 'center', 
                                    marginBottom: '1rem',
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.9rem'
                                }}>
                                    Câu {quizIndex + 1} / {quizQueue.length} | 
                                    Điểm: {quizScore.correct} / {quizScore.total}
                                </div>
                                <div className="card" style={{ marginBottom: '1.5rem' }}>
                                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                                        <div style={{
                                            fontSize: '6rem',
                                            fontWeight: 'bold',
                                            color: 'var(--primary)',
                                            marginBottom: '1rem'
                                        }}>
                                            {currentQuiz.radical}
                                        </div>
                                        <p style={{ 
                                            color: 'var(--text-secondary)', 
                                            fontStyle: 'italic',
                                            fontSize: '1.1rem'
                                        }}>
                                            {currentQuiz.pinyin}
                                        </p>
                                    </div>
                                    <div>
                                        <label style={{ 
                                            display: 'block', 
                                            marginBottom: '0.5rem',
                                            fontWeight: 600
                                        }}>
                                            Nghĩa tiếng Việt là gì?
                                        </label>
                                        <input
                                            type="text"
                                            value={quizAnswer}
                                            onChange={(e) => setQuizAnswer(e.target.value)}
                                            onKeyPress={(e) => {
                                                if (e.key === 'Enter' && !quizResult) {
                                                    handleQuizSubmit();
                                                } else if (e.key === 'Enter' && quizResult !== null) {
                                                    handleQuizNext();
                                                }
                                            }}
                                            disabled={quizResult !== null}
                                            className="text-input"
                                            placeholder="Nhập nghĩa tiếng Việt..."
                                            style={{ marginBottom: '1rem' }}
                                        />
                                        {quizResult !== null && (
                                            <div style={{
                                                padding: '1rem',
                                                borderRadius: '8px',
                                                marginBottom: '1rem',
                                                background: quizResult ? 'var(--success)' : 'var(--error)',
                                                color: 'white',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem'
                                            }}>
                                                {quizResult ? (
                                                    <>
                                                        <CheckCircle size={20} />
                                                        <div>
                                                            <strong>Đúng!</strong> {currentQuiz.vietnamese} - {currentQuiz.meaning}
                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <XCircle size={20} />
                                                        <div>
                                                            <strong>Sai!</strong> Đáp án đúng: {currentQuiz.vietnamese} - {currentQuiz.meaning}
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        )}
                                        <div style={{ display: 'flex', gap: '1rem' }}>
                                            {quizResult === null ? (
                                                <button
                                                    onClick={handleQuizSubmit}
                                                    className="btn btn-primary"
                                                    style={{ flex: 1 }}
                                                >
                                                    Kiểm tra
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={handleQuizNext}
                                                    className="btn btn-primary"
                                                    style={{ flex: 1 }}
                                                    disabled={quizIndex === quizQueue.length - 1}
                                                >
                                                    {quizIndex === quizQueue.length - 1 ? 'Hoàn thành' : 'Câu tiếp'}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {quizIndex === quizQueue.length - 1 && quizResult !== null && (
                                    <div className="card" style={{ textAlign: 'center' }}>
                                        <h2 style={{ marginBottom: '1rem' }}>Kết quả kiểm tra</h2>
                                        <div style={{
                                            fontSize: '3rem',
                                            fontWeight: 'bold',
                                            color: 'var(--primary)',
                                            marginBottom: '1rem'
                                        }}>
                                            {Math.round((quizScore.correct / quizScore.total) * 100)}%
                                        </div>
                                        <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                                            Bạn đã trả lời đúng {quizScore.correct} / {quizScore.total} câu
                                        </p>
                                        <button
                                            onClick={handleQuizRestart}
                                            className="btn btn-primary"
                                        >
                                            <Play size={18} />
                                            Làm lại
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                                <p style={{ color: 'var(--text-secondary)' }}>
                                    Không có bộ thủ nào phù hợp với bộ lọc của bạn.
                                </p>
                            </div>
                        )}
                    </div>
                )}

                {/* Browse View */}
                {viewMode === VIEW_MODES.BROWSE && (
                    <>
                        <div style={{ 
                            marginBottom: '1rem',
                            color: 'var(--text-secondary)',
                            fontSize: '0.9rem',
                            textAlign: 'center'
                        }}>
                            Hiển thị {filteredRadicals.length} bộ thủ
                        </div>
                        <div className="grid-2">
                            {filteredRadicals.map(radical => (
                                <div
                                    key={radical.id}
                                    className="card"
                                    style={{
                                        cursor: 'pointer',
                                        border: selectedRadical?.id === radical.id ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                                        position: 'relative'
                                    }}
                                    onClick={() => setSelectedRadical(selectedRadical?.id === radical.id ? null : radical)}
                                >
                                    {progress[radical.id]?.mastered && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '1rem',
                                            right: '1rem',
                                            background: 'var(--success)',
                                            color: 'white',
                                            borderRadius: '50%',
                                            width: '32px',
                                            height: '32px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <CheckCircle size={18} />
                                        </div>
                                    )}
                                    <div style={{ display: 'flex', alignItems: 'start', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                        <div style={{
                                            width: '80px',
                                            height: '80px',
                                            background: 'var(--primary-light)',
                                            borderRadius: '12px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '2.5rem',
                                            fontWeight: 'bold',
                                            color: 'var(--primary)',
                                            flexShrink: 0
                                        }}>
                                            {radical.radical}
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                                                <h3 style={{ margin: 0, fontSize: '1.5rem' }}>{radical.vietnamese}</h3>
                                                <span style={{ 
                                                    fontSize: '0.875rem', 
                                                    color: 'var(--text-secondary)',
                                                    fontStyle: 'italic'
                                                }}>
                                                    {radical.pinyin}
                                                </span>
                                                <span style={{
                                                    fontSize: '0.75rem',
                                                    padding: '0.25rem 0.5rem',
                                                    background: 'var(--slate-100)',
                                                    borderRadius: '4px',
                                                    color: 'var(--slate-600)',
                                                    fontWeight: 600
                                                }}>
                                                    HSK {radical.hskLevel}
                                                </span>
                                            </div>
                                            <p style={{ 
                                                color: 'var(--text-secondary)', 
                                                fontSize: '0.95rem',
                                                margin: 0
                                            }}>
                                                {radical.meaning}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Examples Section */}
                                    {selectedRadical?.id === radical.id && (
                                        <div style={{
                                            borderTop: '1px solid var(--slate-200)',
                                            paddingTop: '1.5rem',
                                            marginTop: '1.5rem'
                                        }}>
                                            <div style={{ 
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                gap: '0.5rem',
                                                marginBottom: '1rem',
                                                color: 'var(--primary)'
                                            }}>
                                                <BookOpen size={18} />
                                                <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>
                                                    Ví dụ từ vựng:
                                                </h4>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                                {radical.examples.map((example, idx) => (
                                                    <div
                                                        key={idx}
                                                        style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '1rem',
                                                            padding: '0.75rem',
                                                            background: 'var(--slate-50)',
                                                            borderRadius: '8px',
                                                            border: '1px solid var(--slate-200)'
                                                        }}
                                                    >
                                                        <span style={{
                                                            fontSize: '1.5rem',
                                                            fontWeight: 'bold',
                                                            color: 'var(--slate-800)',
                                                            minWidth: '40px'
                                                        }}>
                                                            {example.char}
                                                        </span>
                                                        <div style={{ flex: 1 }}>
                                                            <div style={{ 
                                                                fontSize: '0.875rem', 
                                                                color: 'var(--text-secondary)',
                                                                fontStyle: 'italic',
                                                                marginBottom: '0.25rem'
                                                            }}>
                                                                {example.pinyin}
                                                            </div>
                                                            <div style={{ 
                                                                fontSize: '1rem', 
                                                                fontWeight: 600,
                                                                color: 'var(--slate-700)'
                                                            }}>
                                                                {example.vietnamese}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {filteredRadicals.length === 0 && (
                            <div style={{ textAlign: 'center', padding: '4rem 2rem', color: 'var(--text-secondary)' }}>
                                <p style={{ fontSize: '1.1rem' }}>Không tìm thấy bộ thủ nào phù hợp với từ khóa của bạn.</p>
                            </div>
                        )}
                    </>
                )}

                {/* Pronunciation View */}
                {viewMode === VIEW_MODES.PRONUNCIATION && (() => {
                    const toggleGroup = (groupId) => {
                        setExpandedGroups(prev => ({
                            ...prev,
                            [groupId]: !prev[groupId]
                        }));
                    };

                    const filteredGroups = pronunciationGroups.filter(group => {
                        if (selectedCategory !== 'all' && group.category !== selectedCategory) return false;
                        if (!pronunciationSearch) return true;
                        const searchLower = pronunciationSearch.toLowerCase();
                        return (
                            group.title.toLowerCase().includes(searchLower) ||
                            group.description.toLowerCase().includes(searchLower) ||
                            group.sounds.some(sound => 
                                sound.pinyin.toLowerCase().includes(searchLower) ||
                                sound.vietnameseGuide.toLowerCase().includes(searchLower) ||
                                (sound.examples && sound.examples.some(ex => 
                                    ex.char.includes(searchLower) ||
                                    ex.vietnamese.toLowerCase().includes(searchLower) ||
                                    ex.pinyin.toLowerCase().includes(searchLower)
                                ))
                            )
                        );
                    });

                    const categories = [
                        { value: 'all', label: 'Tất cả', count: pronunciationGroups.length },
                        { value: 'Initials', label: 'Thanh mẫu', count: pronunciationGroups.filter(g => g.category === 'Initials').length },
                        { value: 'Finals', label: 'Vận mẫu', count: pronunciationGroups.filter(g => g.category === 'Finals').length },
                        { value: 'Tones', label: 'Thanh điệu', count: pronunciationGroups.filter(g => g.category === 'Tones').length }
                    ];

                    return (
                        <div>
                            <div style={{ 
                                textAlign: 'center', 
                                marginBottom: '2rem',
                                padding: '2rem',
                                background: 'white',
                                borderRadius: '12px',
                                border: '1px solid var(--border-color)'
                            }}>
                                <h2 style={{ marginBottom: '1rem' }}>Hướng Dẫn Phát Âm Tiếng Trung</h2>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
                                    Học cách phát âm các âm tiết tiếng Trung với hướng dẫn chi tiết về vị trí lưỡi, hình dạng miệng và so sánh với tiếng Việt
                                </p>
                            </div>

                            {/* Category Filter */}
                            <div style={{ 
                                display: 'flex', 
                                gap: '0.5rem', 
                                marginBottom: '1.5rem',
                                flexWrap: 'wrap',
                                justifyContent: 'center'
                            }}>
                                {categories.map(cat => (
                                    <button
                                        key={cat.value}
                                        onClick={() => setSelectedCategory(cat.value)}
                                        className={`btn ${selectedCategory === cat.value ? 'btn-primary' : 'btn-secondary'}`}
                                        style={{ fontSize: '0.875rem' }}
                                    >
                                        {cat.label} ({cat.count})
                                    </button>
                                ))}
                            </div>

                            {/* Search Bar */}
                            <div style={{ marginBottom: '2rem', position: 'relative' }}>
                                <Search 
                                    size={20} 
                                    style={{ 
                                        position: 'absolute', 
                                        left: '1rem', 
                                        top: '50%', 
                                        transform: 'translateY(-50%)',
                                        color: 'var(--text-secondary)'
                                    }} 
                                />
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm âm, pinyin, hoặc từ ví dụ..."
                                    value={pronunciationSearch}
                                    onChange={(e) => setPronunciationSearch(e.target.value)}
                                    className="text-input"
                                    style={{ paddingLeft: '3rem' }}
                                />
                            </div>

                            {/* Groups Overview - Compact Grid */}
                            <div className="grid-2" style={{ marginBottom: '2rem' }}>
                                {filteredGroups.map((group) => {
                                    const isExpanded = expandedGroups[group.id];
                                    const categoryIcon = group.category === 'Initials' ? '声' : group.category === 'Finals' ? '韵' : '调';
                                    const categoryColor = group.category === 'Initials' ? 'var(--primary)' : 
                                                         group.category === 'Finals' ? 'var(--accent)' : '#059669';
                                    
                                    return (
                                        <div key={group.id} className="card" style={{ cursor: 'pointer' }}>
                                            <div 
                                                onClick={() => toggleGroup(group.id)}
                                                style={{ 
                                                    display: 'flex', 
                                                    alignItems: 'center', 
                                                    gap: '1rem',
                                                    marginBottom: isExpanded ? '1rem' : 0
                                                }}
                                            >
                                                <div style={{
                                                    width: '56px',
                                                    height: '56px',
                                                    background: categoryColor + '15',
                                                    borderRadius: '12px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: categoryColor,
                                                    fontWeight: 'bold',
                                                    fontSize: '1.5rem',
                                                    flexShrink: 0
                                                }}>
                                                    {categoryIcon}
                                                </div>
                                                <div style={{ flex: 1, minWidth: 0 }}>
                                                    <h3 style={{ 
                                                        margin: 0, 
                                                        fontSize: '1.25rem',
                                                        marginBottom: '0.25rem'
                                                    }}>
                                                        {group.title}
                                                    </h3>
                                                    <p style={{ 
                                                        margin: 0,
                                                        color: 'var(--text-secondary)',
                                                        fontSize: '0.875rem'
                                                    }}>
                                                        {group.description}
                                                    </p>
                                                    <div style={{ 
                                                        marginTop: '0.5rem',
                                                        fontSize: '0.8rem',
                                                        color: 'var(--text-secondary)'
                                                    }}>
                                                        {group.sounds.length} âm
                                                    </div>
                                                </div>
                                                <div style={{ flexShrink: 0 }}>
                                                    {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                                                </div>
                                            </div>

                                            {/* Expanded Content */}
                                            {isExpanded && (
                                                <div style={{ 
                                                    marginTop: '1.5rem',
                                                    borderTop: '1px solid var(--slate-200)',
                                                    paddingTop: '1.5rem'
                                                }}>
                                                    <div style={{ 
                                                        display: 'grid',
                                                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                                                        gap: '1rem'
                                                    }}>
                                                        {group.sounds.map((sound, idx) => (
                                                            <div 
                                                                key={idx}
                                                                style={{
                                                                    padding: '1rem',
                                                                    background: 'var(--slate-50)',
                                                                    borderRadius: '8px',
                                                                    border: '1px solid var(--slate-200)',
                                                                    transition: 'all 0.2s'
                                                                }}
                                                                onMouseEnter={(e) => {
                                                                    e.currentTarget.style.background = 'white';
                                                                    e.currentTarget.style.borderColor = 'var(--primary)';
                                                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                                                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                                                                }}
                                                                onMouseLeave={(e) => {
                                                                    e.currentTarget.style.background = 'var(--slate-50)';
                                                                    e.currentTarget.style.borderColor = 'var(--slate-200)';
                                                                    e.currentTarget.style.transform = 'translateY(0)';
                                                                    e.currentTarget.style.boxShadow = 'none';
                                                                }}
                                                            >
                                                                <div style={{ 
                                                                    display: 'flex', 
                                                                    alignItems: 'center', 
                                                                    gap: '0.75rem',
                                                                    marginBottom: '0.75rem'
                                                                }}>
                                                                    <div style={{
                                                                        width: '40px',
                                                                        height: '40px',
                                                                        background: categoryColor,
                                                                        borderRadius: '8px',
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'center',
                                                                        color: 'white',
                                                                        fontWeight: 'bold',
                                                                        fontSize: sound.pinyin.length > 8 ? '0.7rem' : sound.pinyin.length > 5 ? '0.85rem' : '1rem',
                                                                        flexShrink: 0,
                                                                        padding: '0.25rem',
                                                                        wordBreak: 'break-word',
                                                                        textAlign: 'center',
                                                                        lineHeight: 1.2,
                                                                        textShadow: '0 1px 2px rgba(0,0,0,0.2)',
                                                                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                                                    }}>
                                                                        {sound.pinyin}
                                                                    </div>
                                                                    <div style={{ flex: 1, minWidth: 0 }}>
                                                                        <div style={{ 
                                                                            fontSize: '0.9rem',
                                                                            fontWeight: 600,
                                                                            color: 'var(--slate-700)',
                                                                            lineHeight: 1.3
                                                                        }}>
                                                                            {sound.vietnameseGuide}
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div style={{ 
                                                                    fontSize: '0.8rem',
                                                                    color: 'var(--text-secondary)',
                                                                    marginBottom: '0.5rem',
                                                                    lineHeight: 1.4
                                                                }}>
                                                                    <div><strong>Lưỡi:</strong> {sound.tonguePosition}</div>
                                                                    <div><strong>Miệng:</strong> {sound.mouthShape}</div>
                                                                </div>

                                                                {sound.tips && (
                                                                    <div style={{ 
                                                                        fontSize: '0.75rem',
                                                                        color: categoryColor,
                                                                        fontStyle: 'italic',
                                                                        marginTop: '0.5rem',
                                                                        paddingTop: '0.5rem',
                                                                        borderTop: '1px solid var(--slate-200)'
                                                                    }}>
                                                                        💡 {sound.tips}
                                                                    </div>
                                                                )}

                                                                {sound.examples && sound.examples.length > 0 && (
                                                                    <div style={{ 
                                                                        marginTop: '0.75rem',
                                                                        paddingTop: '0.75rem',
                                                                        borderTop: '1px solid var(--slate-200)'
                                                                    }}>
                                                                        {sound.examples.map((example, exIdx) => (
                                                                            <div 
                                                                                key={exIdx}
                                                                                style={{
                                                                                    display: 'flex',
                                                                                    alignItems: 'center',
                                                                                    gap: '0.5rem',
                                                                                    marginBottom: exIdx < sound.examples.length - 1 ? '0.5rem' : 0
                                                                                }}
                                                                            >
                                                                                <span style={{
                                                                                    fontSize: '1.75rem',
                                                                                    fontWeight: 'bold',
                                                                                    color: 'var(--slate-900)',
                                                                                    width: '48px',
                                                                                    height: '48px',
                                                                                    background: 'white',
                                                                                    padding: '0',
                                                                                    borderRadius: '8px',
                                                                                    border: '2px solid var(--slate-300)',
                                                                                    display: 'flex',
                                                                                    alignItems: 'center',
                                                                                    justifyContent: 'center',
                                                                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                                                                    flexShrink: 0,
                                                                                    lineHeight: 1
                                                                                }}>
                                                                                    {example.char}
                                                                                </span>
                                                                                <div style={{ flex: 1, minWidth: 0 }}>
                                                                                    <div style={{ 
                                                                                        fontSize: '0.8rem',
                                                                                        fontWeight: 600,
                                                                                        color: 'var(--slate-700)'
                                                                                    }}>
                                                                                        {example.vietnamese}
                                                                                    </div>
                                                                                    <div style={{ 
                                                                                        fontSize: '0.75rem', 
                                                                                        color: 'var(--text-secondary)',
                                                                                        fontStyle: 'italic'
                                                                                    }}>
                                                                                        {example.pinyin}
                                                                                    </div>
                                                                                    {example.pronunciation && (
                                                                                        <div style={{ 
                                                                                            fontSize: '0.7rem', 
                                                                                            color: categoryColor,
                                                                                            fontWeight: 500
                                                                                        }}>
                                                                                            {example.pronunciation}
                                                                                        </div>
                                                                                    )}
                                                                                </div>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            {filteredGroups.length === 0 && (
                                <div style={{ textAlign: 'center', padding: '4rem 2rem', color: 'var(--text-secondary)' }}>
                                    <p style={{ fontSize: '1.1rem' }}>Không tìm thấy kết quả phù hợp.</p>
                                </div>
                            )}
                        </div>
                    );
                })()}

                {/* Progress View - Mastered and Non-Mastered */}
                {viewMode === VIEW_MODES.PROGRESS && (() => {
                    const masteredRadicals = getMasteredRadicals();
                    const nonMasteredRadicals = getNonMasteredRadicals();

                    const filteredMastered = masteredRadicals.filter(radical =>
                        !progressSearch || 
                        radical.radical.includes(progressSearch) ||
                        radical.vietnamese.toLowerCase().includes(progressSearch.toLowerCase()) ||
                        radical.pinyin.toLowerCase().includes(progressSearch.toLowerCase())
                    );

                    const filteredNonMastered = nonMasteredRadicals.filter(radical =>
                        !progressSearch || 
                        radical.radical.includes(progressSearch) ||
                        radical.vietnamese.toLowerCase().includes(progressSearch.toLowerCase()) ||
                        radical.pinyin.toLowerCase().includes(progressSearch.toLowerCase())
                    );

                    return (
                        <div>
                            <div style={{ 
                                textAlign: 'center', 
                                marginBottom: '2rem',
                                padding: '2rem',
                                background: 'white',
                                borderRadius: '12px',
                                border: '1px solid var(--border-color)'
                            }}>
                                <h2 style={{ marginBottom: '1rem' }}>Tiến Trình Học Tập</h2>
                                <div style={{ 
                                    display: 'flex', 
                                    gap: '2rem', 
                                    justifyContent: 'center',
                                    marginTop: '1.5rem',
                                    flexWrap: 'wrap'
                                }}>
                                    <div style={{
                                        padding: '1rem 2rem',
                                        background: 'var(--success)',
                                        color: 'white',
                                        borderRadius: '12px',
                                        fontWeight: 600
                                    }}>
                                        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                                            {masteredRadicals.length}
                                        </div>
                                        <div>Đã thuộc</div>
                                    </div>
                                    <div style={{
                                        padding: '1rem 2rem',
                                        background: 'var(--slate-200)',
                                        color: 'var(--slate-700)',
                                        borderRadius: '12px',
                                        fontWeight: 600
                                    }}>
                                        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                                            {nonMasteredRadicals.length}
                                        </div>
                                        <div>Chưa thuộc</div>
                                    </div>
                                    <div style={{
                                        padding: '1rem 2rem',
                                        background: 'var(--primary-light)',
                                        color: 'var(--primary)',
                                        borderRadius: '12px',
                                        fontWeight: 600
                                    }}>
                                        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                                            {radicalsData.length}
                                        </div>
                                        <div>Tổng số</div>
                                    </div>
                                </div>
                            </div>

                            {/* Search Bar */}
                            <div style={{ marginBottom: '2rem', position: 'relative' }}>
                                <Search 
                                    size={20} 
                                    style={{ 
                                        position: 'absolute', 
                                        left: '1rem', 
                                        top: '50%', 
                                        transform: 'translateY(-50%)',
                                        color: 'var(--text-secondary)'
                                    }} 
                                />
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm bộ thủ..."
                                    value={progressSearch}
                                    onChange={(e) => setProgressSearch(e.target.value)}
                                    className="text-input"
                                    style={{ paddingLeft: '3rem' }}
                                />
                            </div>

                            {/* Mastered Section */}
                            <div style={{ marginBottom: '3rem' }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    marginBottom: '1.5rem',
                                    padding: '1rem',
                                    background: 'var(--success)',
                                    color: 'white',
                                    borderRadius: '12px',
                                    fontWeight: 600
                                }}>
                                    <CheckCircle size={24} />
                                    <h2 style={{ margin: 0, fontSize: '1.5rem' }}>
                                        Đã Thuộc ({filteredMastered.length})
                                    </h2>
                                </div>
                                {filteredMastered.length > 0 ? (
                                    <div className="grid-2">
                                        {filteredMastered.map(radical => (
                                            <div
                                                key={radical.id}
                                                className="card"
                                                style={{
                                                    border: '2px solid var(--success)',
                                                    background: 'var(--success)08'
                                                }}
                                                onClick={() => setSelectedRadical(selectedRadical?.id === radical.id ? null : radical)}
                                            >
                                                <div style={{ display: 'flex', alignItems: 'start', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                                    <div style={{
                                                        width: '80px',
                                                        height: '80px',
                                                        background: 'var(--success)',
                                                        borderRadius: '12px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        fontSize: '2.5rem',
                                                        fontWeight: 'bold',
                                                        color: 'white',
                                                        flexShrink: 0
                                                    }}>
                                                        {radical.radical}
                                                    </div>
                                                    <div style={{ flex: 1 }}>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                                                            <h3 style={{ margin: 0, fontSize: '1.5rem' }}>{radical.vietnamese}</h3>
                                                            <span style={{ 
                                                                fontSize: '0.875rem', 
                                                                color: 'var(--text-secondary)',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                {radical.pinyin}
                                                            </span>
                                                            <span style={{
                                                                fontSize: '0.75rem',
                                                                padding: '0.25rem 0.5rem',
                                                                background: 'var(--success)',
                                                                color: 'white',
                                                                borderRadius: '4px',
                                                                fontWeight: 600
                                                            }}>
                                                                HSK {radical.hskLevel}
                                                            </span>
                                                        </div>
                                                        <p style={{ 
                                                            color: 'var(--text-secondary)', 
                                                            fontSize: '0.95rem',
                                                            margin: 0
                                                        }}>
                                                            {radical.meaning}
                                                        </p>
                                                        {progress[radical.id] && (
                                                            <div style={{ 
                                                                marginTop: '0.5rem',
                                                                fontSize: '0.8rem',
                                                                color: 'var(--text-secondary)'
                                                            }}>
                                                                Đã ôn: {progress[radical.id].reviewCount} lần
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                {selectedRadical?.id === radical.id && radical.examples && (
                                                    <div style={{
                                                        borderTop: '1px solid var(--slate-200)',
                                                        paddingTop: '1.5rem',
                                                        marginTop: '1.5rem'
                                                    }}>
                                                        <div style={{ 
                                                            display: 'flex', 
                                                            alignItems: 'center', 
                                                            gap: '0.5rem',
                                                            marginBottom: '1rem',
                                                            color: 'var(--success)'
                                                        }}>
                                                            <BookOpen size={18} />
                                                            <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>
                                                                Ví dụ từ vựng:
                                                            </h4>
                                                        </div>
                                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                                            {radical.examples.map((example, idx) => (
                                                                <div
                                                                    key={idx}
                                                                    style={{
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        gap: '1rem',
                                                                        padding: '0.75rem',
                                                                        background: 'white',
                                                                        borderRadius: '8px',
                                                                        border: '1px solid var(--slate-200)'
                                                                    }}
                                                                >
                                                                    <span style={{
                                                                        fontSize: '1.5rem',
                                                                        fontWeight: 'bold',
                                                                        color: 'var(--slate-800)',
                                                                        minWidth: '40px'
                                                                    }}>
                                                                        {example.char}
                                                                    </span>
                                                                    <div style={{ flex: 1 }}>
                                                                        <div style={{ 
                                                                            fontSize: '0.875rem', 
                                                                            color: 'var(--text-secondary)',
                                                                            fontStyle: 'italic',
                                                                            marginBottom: '0.25rem'
                                                                        }}>
                                                                            {example.pinyin}
                                                                        </div>
                                                                        <div style={{ 
                                                                            fontSize: '1rem', 
                                                                            fontWeight: 600,
                                                                            color: 'var(--slate-700)'
                                                                        }}>
                                                                            {example.vietnamese}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div style={{ textAlign: 'center', padding: '3rem 2rem', color: 'var(--text-secondary)' }}>
                                        <p>Chưa có bộ thủ nào đã thuộc.</p>
                                    </div>
                                )}
                            </div>

                            {/* Non-Mastered Section */}
                            <div>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    marginBottom: '1.5rem',
                                    padding: '1rem',
                                    background: 'var(--slate-200)',
                                    color: 'var(--slate-700)',
                                    borderRadius: '12px',
                                    fontWeight: 600
                                }}>
                                    <XCircle size={24} />
                                    <h2 style={{ margin: 0, fontSize: '1.5rem' }}>
                                        Chưa Thuộc ({filteredNonMastered.length})
                                    </h2>
                                </div>
                                {filteredNonMastered.length > 0 ? (
                                    <div className="grid-2">
                                        {filteredNonMastered.map(radical => (
                                            <div
                                                key={radical.id}
                                                className="card"
                                                style={{
                                                    border: '1px solid var(--border-color)',
                                                    opacity: 0.8
                                                }}
                                                onClick={() => setSelectedRadical(selectedRadical?.id === radical.id ? null : radical)}
                                            >
                                                <div style={{ display: 'flex', alignItems: 'start', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                                    <div style={{
                                                        width: '80px',
                                                        height: '80px',
                                                        background: 'var(--slate-100)',
                                                        borderRadius: '12px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        fontSize: '2.5rem',
                                                        fontWeight: 'bold',
                                                        color: 'var(--slate-600)',
                                                        flexShrink: 0
                                                    }}>
                                                        {radical.radical}
                                                    </div>
                                                    <div style={{ flex: 1 }}>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                                                            <h3 style={{ margin: 0, fontSize: '1.5rem' }}>{radical.vietnamese}</h3>
                                                            <span style={{ 
                                                                fontSize: '0.875rem', 
                                                                color: 'var(--text-secondary)',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                {radical.pinyin}
                                                            </span>
                                                            <span style={{
                                                                fontSize: '0.75rem',
                                                                padding: '0.25rem 0.5rem',
                                                                background: 'var(--slate-100)',
                                                                color: 'var(--slate-600)',
                                                                borderRadius: '4px',
                                                                fontWeight: 600
                                                            }}>
                                                                HSK {radical.hskLevel}
                                                            </span>
                                                        </div>
                                                        <p style={{ 
                                                            color: 'var(--text-secondary)', 
                                                            fontSize: '0.95rem',
                                                            margin: 0
                                                        }}>
                                                            {radical.meaning}
                                                        </p>
                                                    </div>
                                                </div>
                                                {selectedRadical?.id === radical.id && radical.examples && (
                                                    <div style={{
                                                        borderTop: '1px solid var(--slate-200)',
                                                        paddingTop: '1.5rem',
                                                        marginTop: '1.5rem'
                                                    }}>
                                                        <div style={{ 
                                                            display: 'flex', 
                                                            alignItems: 'center', 
                                                            gap: '0.5rem',
                                                            marginBottom: '1rem',
                                                            color: 'var(--primary)'
                                                        }}>
                                                            <BookOpen size={18} />
                                                            <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>
                                                                Ví dụ từ vựng:
                                                            </h4>
                                                        </div>
                                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                                            {radical.examples.map((example, idx) => (
                                                                <div
                                                                    key={idx}
                                                                    style={{
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        gap: '1rem',
                                                                        padding: '0.75rem',
                                                                        background: 'var(--slate-50)',
                                                                        borderRadius: '8px',
                                                                        border: '1px solid var(--slate-200)'
                                                                    }}
                                                                >
                                                                    <span style={{
                                                                        fontSize: '1.5rem',
                                                                        fontWeight: 'bold',
                                                                        color: 'var(--slate-800)',
                                                                        minWidth: '40px'
                                                                    }}>
                                                                        {example.char}
                                                                    </span>
                                                                    <div style={{ flex: 1 }}>
                                                                        <div style={{ 
                                                                            fontSize: '0.875rem', 
                                                                            color: 'var(--text-secondary)',
                                                                            fontStyle: 'italic',
                                                                            marginBottom: '0.25rem'
                                                                        }}>
                                                                            {example.pinyin}
                                                                        </div>
                                                                        <div style={{ 
                                                                            fontSize: '1rem', 
                                                                            fontWeight: 600,
                                                                            color: 'var(--slate-700)'
                                                                        }}>
                                                                            {example.vietnamese}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div style={{ textAlign: 'center', padding: '3rem 2rem', color: 'var(--text-secondary)' }}>
                                        <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--success)' }}>
                                            🎉 Tuyệt vời! Bạn đã thuộc tất cả các bộ thủ!
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })()}
            </div>
        </div>
    );
}
