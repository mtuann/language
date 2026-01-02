import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Globe } from 'lucide-react';

export default function Layout() {
    const location = useLocation();

    // Don't show standard header/footer on the test simulator to minimize distractions
    const isTestTaking = location.pathname.includes('/test/');

    if (isTestTaking) {
        return <Outlet />;
    }

    return (
        <div>
            <div className="container">
                <header className="header">
                    <Link to="/" className="logo">
                        <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, var(--primary), var(--accent))', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                            <Globe size={20} />
                        </div>
                        Mtuann Language
                    </Link>
                    <nav style={{ display: 'flex', gap: '0.5rem' }}>
                        <Link to="/" className={`btn ${location.pathname === '/' ? 'btn-ghost' : 'btn-ghost'}`}>
                            Home
                        </Link>
                        <Link to="/english" className={`btn ${location.pathname.includes('/english') ? 'btn-secondary' : 'btn-ghost'}`}>
                            English
                        </Link>
                        <button className="btn btn-ghost" disabled title="Coming Soon">
                            Chinese
                        </button>
                    </nav>
                </header>
            </div>

            <main>
                <Outlet />
            </main>

            <footer style={{ background: 'white', borderTop: '1px solid var(--border-color)', padding: '4rem 0', marginTop: 'auto' }}>
                <div className="container" style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
                    <p>© 2026 Mtuann Language. Open Source Language Learning.</p>
                </div>
            </footer>
        </div>
    );
}
