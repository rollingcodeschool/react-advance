import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  EDIT_TODO
} from './actionTypes';

const initialState = [
  { id: 1, title: 'React Basic', completed: true },
  { id: 3, title: 'FullStack', completed: false },
  { id: 2, title: 'MongoDB', completed: false }
];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const title = action.payload;
      const ids = state.map(todo => todo.id);
      const newId = ids.length ? Math.max(...ids) + 1 : 1;
      const todo = {
        id: newId,
        title,
        completed: false
      };
      return [...state, todo];
    }

    case TOGGLE_TODO: {
      const todoId = action.payload;
      const newState = state.map(
        todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      return newState;
    }

    case DELETE_TODO: {
      const todoId = action.payload;
      const newState = state.filter(
        todo => todo.id !== todoId
      );
      return newState;
    }

    case EDIT_TODO: {
      const { todoId, newTitle } = action.payload;
      const newState = state.map(
        todo => todo.id === todoId ? { ...todo, title: newTitle } : todo
      );
      return newState;
    }
    default: return state;
  }
};

export default todoReducer;