import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import carritoReducer from '../slices/CarritoSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    kevin: carritoReducer,
  },
});
