import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodoRow from './TodoRow';
import TodoInput from './TodoInput';
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  editTodo
} from '../../redux/todos/TodoActions';
import { Empty } from 'antd';
import './todo.css';

/*Ejercicio: implementar edit */

const Todos = props => {
  console.log(props.todos);
  return (
    <div className='todos'>
      <h2>TODOS</h2>
      <TodoInput addTodo={props.addTodo} />
      <div className='todos-list'>
        {
          props.todos.length > 0
            ? props.todos.map(todo =>
              <TodoRow
                key={todo.id}
                todo={todo}
                deleteTodo={props.deleteTodo}
                editTodo={props.editTodo}
                toggleTodo={props.toggleTodo}
              />
            ) : <Empty />
        }
      </div>
    </div>
  );
};

Todos.propTypes = {
  todos: PropTypes.array
};

const mapStateToProps = state => {
  return { todos: state.todos }
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: newTodo => dispatch(addTodo(newTodo)),
    toggleTodo: todoId => dispatch(toggleTodo(todoId)),
    deleteTodo: todoId => dispatch(deleteTodo(todoId)),
    editTodo: (todoId, title) => dispatch(editTodo(todoId, title))
  }
};

const TodosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);

export default TodosContainer;
