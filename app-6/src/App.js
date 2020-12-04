import React, { useState } from 'react';
import './App.css';
import { Todo } from './Todo';

function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState('');

  const handleChange = (value) => {
    setTask(value);
  };

  const addTask = () => {
    setList((previousList) => {
      return [...previousList, task];
    });
    setTask('');
  };

  return (
    <div className="App">
      <h1>My to-do list:</h1>
      <div>
        <input
          type="text"
          value={task}
          placeholder="Enter new task"
          onChange={(e) => handleChange(e.target.value)}
        ></input>
        <button onClick={addTask}>Add</button>
      </div>

      <br />

      <Todo list={list} />
    </div>
  );
}

export default App;
