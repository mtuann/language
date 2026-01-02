import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import English from './pages/English';
import TestTaking from './pages/TestTaking';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="english" element={<English />} />
          <Route path="english/test/:testId" element={<TestTaking />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
