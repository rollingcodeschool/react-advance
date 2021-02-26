import { createSlice } from "@reduxjs/toolkit";
import { fetchProductos } from "./actions";

export const counterSlice = createSlice({
  name: "carrito",
  initialState: {
    carritoCompras: [],
    loading: false,
    productos: [],
    error: false,
  },
  reducers: {
    agregarProducto: (state, { payload: producto }) => {
      state.carritoCompras.push({ ...producto, cantidad: 1 });
    },
  },
  extraReducers: {
    [fetchProductos.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchProductos.fulfilled]: (state, action) => {
      state.loading = false;
      state.productos = action.payload;
    },
    [fetchProductos.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export const { agregarProducto } = counterSlice.actions;

export const getCarrito = (state) => state.carrito.carritoCompras;

export const getProductos = (state) => state.carrito.productos;

export const getProductosLoading = (state) => state.carrito.loading;

export default counterSlice.reducer;
