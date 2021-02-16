import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import {
  FaTrashAlt,
  FaToggleOn,
  FaToggleOff,
  FaCheckCircle,
  FaTimesCircle
} from 'react-icons/fa';

const TodoRow = ({ todo, deleteTodo, toggleTodo }) => {
  const handleDeleteTodo = id => deleteTodo(id);

  const handleToggleTodo = id => toggleTodo(id);

  return (
    <div className='todos-list--row'>
      <div>
        {todo.title}
      </div>
      <div>
        {todo.completed
          ? <FaCheckCircle color='green' style={{ marginRight: 10 }} />
          : <FaTimesCircle color='red' style={{ marginRight: 10 }} />
        }
        <Button onClick={() => handleDeleteTodo(todo.id)}>
          <FaTrashAlt />
        </Button>
        <Button onClick={() => handleToggleTodo(todo.id)}>
          {todo.completed ? <FaToggleOn /> : <FaToggleOff />}
        </Button>
      </div>
    </div>
  );
};

TodoRow.propTypes = {
  todo: PropTypes.object
};

export default TodoRow;
