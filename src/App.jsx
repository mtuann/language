import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import English from './pages/English';
import Chinese from './pages/Chinese';
import TestTaking from './pages/TestTaking';

// Component to handle ?p= parameter redirect (fallback if script didn't run)
function RedirectHandler() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if we have ?p=/path in the URL (fallback if script didn't run)
    // This handles the case where the script in index.html didn't run in time
    if (location.search) {
      const searchParams = new URLSearchParams(location.search);
      const pathParam = searchParams.get('p');
      
      if (pathParam && pathParam.startsWith('/')) {
        // Clean up the URL by removing the query parameter
        const cleanPath = pathParam + (location.hash || '');
        // Use replace to avoid adding to history and prevent infinite loops
        setTimeout(() => {
          navigate(cleanPath, { replace: true });
        }, 0);
      }
    }
  }, [location.search, location.hash, navigate]);

  return null;
}

function App() {
  return (
    <Router basename="/language">
      <RedirectHandler />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="english" element={<English />} />
          <Route path="english/test/:testId" element={<TestTaking />} />
          <Route path="chinese" element={<Chinese />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
