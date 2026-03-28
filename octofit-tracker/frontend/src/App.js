import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container py-4">
      <h1>OctoFit Tracker</h1>
      <p>Willkommen zum Frontend.</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">OctoFit</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
