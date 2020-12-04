import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [text, setText] = useState('');

  const handleChange = (value) => {
    setText(value);
  };

  return (
    <div className="App">
      <input
        type="text"
        value={text}
        onChange={(e) => handleChange(e.target.value)}
      ></input>
      <p>{text}</p>
    </div>
  );
};

export default App;
