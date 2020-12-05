import React from 'react';
import { Todo } from './Todo';

export const List = ({ list }) => {
  return list.map((task) => {
    return <Todo task={task} />;
  });
};
