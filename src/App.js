import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './screens/Home';
import Info from './screens/Info';
import Contact from './screens/Contact';
import Senadis from './screens/Senadis';
import Wcag from './screens/Wcag';
import Inclusion from './screens/Inclusion';
import AccessibilityMenu from './components/MenuAccesibilidad';
import './App.css';

function App() {
  return (
    <AccessibilityMenu>
      <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/senadis" element={<Senadis />} />
          <Route path="/wcag" element={<Wcag />} />
          <Route path="/inclusion" element={<Inclusion />} />
        </Routes>
      </Router>
      </div>
    </AccessibilityMenu>
  );
}

export default App;
