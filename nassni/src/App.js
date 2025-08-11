import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LiveSubtitlePanel from './pages/LiveSubtitlePanel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/live" element={<LiveSubtitlePanel />} />
      </Routes>
    </Router>
  );
}

export default App;