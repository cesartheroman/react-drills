import React, { useState } from 'react';
import './App.css';
import { List } from './List';
import { NewTask } from './NewTask';

function App() {
  const [list, setList] = useState([]);

  const addTask = (task) => {
    setList((previousList) => {
      return [...previousList, task];
    });
  };

  return (
    <div className="App">
      <h1>My to-do list:</h1>
      <NewTask add={addTask} />
      <List list={list} />
    </div>
  );
}

export default App;
