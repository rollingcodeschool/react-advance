import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductos = createAsyncThunk(
  "productos/fetchProdcutos",
  async () => {
    const reponse = await fetch(
      "https://e-show-server.herokuapp.com/api/v1/products"
    );
    const data = await reponse.json();
    console.log(data);
    return data;
  }
);
