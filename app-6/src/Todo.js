import React from 'react';

export const Todo = ({ list }) => {
  return list.map((task, idx) => {
    return <h2 key={idx}>{task}</h2>;
  });
};
