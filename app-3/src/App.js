import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([
    'spaghetti',
    'ice cream',
    'sushi',
    'bologna',
    'cheese',
  ]);

  const [filter, setFilter] = useState('');

  const handleChange = (val) => {
    setFilter(val);
  };

  const foodsToDisplay = data
    .filter((food) => {
      return food.includes(filter);
    })
    .map((food) => {
      return <h2>{food}</h2>;
    });

  return (
    <div className="App">
      <input type="text" onChange={(e) => handleChange(e.target.value)}></input>
      {foodsToDisplay}
    </div>
  );
}

export default App;
