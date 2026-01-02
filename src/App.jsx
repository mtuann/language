import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import English from './pages/English';
import Chinese from './pages/Chinese';
import TestTaking from './pages/TestTaking';

function App() {
  return (
    <Router basename="/language">
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
