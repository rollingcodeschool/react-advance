import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await response.json();
  return data;
});

export const carritoSlice = createSlice({
  name: "carrito",
  initialState: {
    items: [],
    pepe: "hola",
    pepu: "chau",
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {
    agregar: (state, { payload: producto }) => {
      state.items.push(producto);
    },
  },
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export const { agregar } = carritoSlice.actions;

export const obtenerListaProductos = (state) => state.kevin.items;

export const obtenerPosts = (state) => state.kevin.posts;

export default carritoSlice.reducer;

// store = state
// const store = {
//   counter: {
//     value: 0,
//   },
//   kevin: {
//     items: [],
//     pepe: "hola",
//     pepu: "chau",
//     posts: [],
//     loading: false,
//     error: null,
//   },
// }
