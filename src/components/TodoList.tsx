import * as React from 'react';
import './TodoList.css';

interface TodoListProps {
  items: {id: string, text: string}[],
  onDelete: (id: string) => void
}

const TodoList: React.FC<TodoListProps> = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map(todo => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={onDelete.bind(null, todo.id)}>X</button>
        </li>
      ))}
    </ul>
  )
};

export default TodoList;