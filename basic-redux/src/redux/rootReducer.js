import { combineReducers } from 'redux';
import todoReducer from './todos/todoReducer';
// import searchReducer from './search/searchReducer';

const rootReducer = combineReducers({
  todos: todoReducer,
  // searchKeyword: searchReducer
});

export default rootReducer;