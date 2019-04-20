import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './TodoList.scss';

const TodoList = (props) => {
  const { todoList, onDelete } = props;

  return (
    <div>
      {todoList !== [] && (
        <ul>
          {todoList.map(todoItem => (
            <li key={todoItem.index} id={todoItem.index}>
              <Button type="button" onPress={event => onDelete(event, todoItem)} text="Delete" />
              {todoItem.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

TodoList.defaultProps = {
  todoList: [],
  onDelete: undefined,
};

TodoList.propTypes = {
  todoList: PropTypes.instanceOf(Array),
  onDelete: PropTypes.func,
};

export default TodoList;
