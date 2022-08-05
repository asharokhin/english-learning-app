import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Resources from './pages/Resources';
import Dictionary from './pages/Dictionary';
import PresentTenses from './pages/PresentTenses';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dictionary" element={<Dictionary />} />
        <Route path="/resources">
          <Route index element={<Resources />} />
          <Route path="grammar">
            <Route path="present-tense" element={<PresentTenses />} />
          </Route>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
