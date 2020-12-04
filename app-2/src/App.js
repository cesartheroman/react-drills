import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState([
    'spaghetti',
    'ice cream',
    'sushi',
    'bologna',
    'cheese',
  ]);

  const foodsToDisplay = data.map((string, idx) => {
    return <h2 key={idx}>{string}</h2>;
  });

  return <div className="App">{foodsToDisplay}</div>;
};

export default App;
