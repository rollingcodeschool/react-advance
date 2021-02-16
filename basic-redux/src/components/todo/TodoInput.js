import React, { useState } from 'react';
import { Input, Button, message } from 'antd';
import { FaPlus } from 'react-icons/fa';

const TodoInput = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleAddTodo = () => {
    if (title) {
      if (title.length > 20) {
        message.error(`Title must be a maximum of 20 characters.`);
      } else {
        addTodo(title);
        setTitle('');
      }
    } else {
      message.error(`Title can't be empty.`);
    }
  };

  return (
    <div className='todo-input'>
      <Input
        value={title}
        placeholder='Add todo'
        onChange={event => setTitle(event.target.value)}
      />
      <Button onClick={handleAddTodo}>
        <FaPlus />
      </Button>
    </div>
  );
};

export default TodoInput;
