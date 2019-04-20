import React, { useState } from 'react';
import TodoList from '../TodoList/TodoList';
import Button from '../Button/Button';
import './Todo.scss';

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState(undefined);
  const [index, setIndex] = useState(0);

  function onClick(event) {
    event.preventDefault();
    setIndex(index + 1);
    setTodo([...todo, { index, text }]);
  }

  function onDelete(event, todoItem) {
    event.preventDefault();
    setTodo(todo.filter(x => x.index !== todoItem.index));
  }

  return (
    <div>
      <form className="form" onSubmit={event => onClick(event)}>
        <input
          className="form__input"
          type="text"
          placeholder="Todo"
          name="todo"
          value={text || ''}
          onChange={event => setText(event.target.value)}
        />
        <Button type="submit" text="submit" />
      </form>
      <TodoList todoList={todo} onDelete={(event, todoItem) => onDelete(event, todoItem)} />
    </div>
  );
};

export default Todo;
