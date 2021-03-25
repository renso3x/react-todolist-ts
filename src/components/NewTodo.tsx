import React, { useRef } from 'react';

import './NewTodo.css';

interface NewTodoProps {
  onSubmit: (text: string) => void
}

const NewTodo: React.FC<NewTodoProps> = ({
  onSubmit
}) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInputRef.current!.value;
    onSubmit(enteredText)
  }

  return (
    <form onSubmit={todoSubmitHandler} className="form">
      <div className="form-control">
        <label htmlFor="todo-text" >Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  )
}

export default NewTodo;