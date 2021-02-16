import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  EDIT_TODO
} from './actionTypes';

const addTodo = newTodo => ({
  type: ADD_TODO,
  payload: newTodo
});

const toggleTodo = todoId => ({
  type: TOGGLE_TODO,
  payload: todoId
});

const deleteTodo = todoId => ({
  type: DELETE_TODO,
  payload: todoId
});

const editTodo = todo => ({
  type: EDIT_TODO,
  payload: todo
});

export {
  addTodo,
  toggleTodo,
  deleteTodo,
  editTodo
};