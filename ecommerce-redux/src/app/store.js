import { configureStore } from '@reduxjs/toolkit';
import carritoReducer from '../redux/productos/productoSlice';

export default configureStore({
  reducer: {
    carrito: carritoReducer,
  },
});
