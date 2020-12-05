import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Router from './router';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/details">Details</Link>
        </ul>
      </nav>

      <br />

      {Router}
    </div>
  );
}

export default App;
