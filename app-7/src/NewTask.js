import React, { useState } from 'react';

export const NewTask = ({ add }) => {
  const [task, setTask] = useState('');

  const handleChange = (value) => {
    setTask(value);
  };

  const handleAdd = () => {
    add(task);
    setTask('');
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        placeholder="Enter new task"
        onChange={(e) => handleChange(e.target.value)}
      ></input>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};
