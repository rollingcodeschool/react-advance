import { configureStore } from '@reduxjs/toolkit';
import carritoReducer from '../redux/productos/productoSlice';
import userReducer from '../redux/productos/userSlice';

export default configureStore({
  reducer: {
    carrito: carritoReducer,
    user: userReducer,
  },
});
