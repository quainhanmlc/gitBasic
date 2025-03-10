// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pagex/Home';
import Contact from './pagex/Contact';
import About from './pagex//About';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        <nav className="p-4 bg-blue-500 w-full">
          <div className="flex justify-center space-x-4">
            <Link to="/" className="text-white hover:underline">Home</Link>
            <Link to="/about" className="text-white hover:underline">About</Link>
            <Link to="/contact" className="text-white hover:underline">Contact</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;