import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Chat from './pages/Chat';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/chat" element={<Chat />} />
          {/* Add more routes as needed */}
          <Route path="*" element={<div>Page not found</div>} /> {/* 404 fallback */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
