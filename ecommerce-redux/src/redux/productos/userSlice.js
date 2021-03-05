import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogged: false,
    user: "",
    firstTime: true
  },
  reducers: {
    login: (state, { payload: user }) => {
      state.user = user;
      state.isLogged = true;
      state.firstTime = false;
    },
    logout: (state) => {
      state.user = "";
      state.isLogged = false;
      state.firstTime = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const getUser = (state) => state.user.user;

export const isLogged = (state) => state.user.isLogged;

export const isFirstTime = (state) => state.user.firstTime;

export default userSlice.reducer;
