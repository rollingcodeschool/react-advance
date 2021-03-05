import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isFirstTime,
  isLogged,
  login,
  logout,
} from "./redux/productos/userSlice";
import Main from "./Components/Main";
import "antd/dist/antd.css";
import "./App.css";
import Login from "./Components/Login";
import { auth } from "./utils/firebase";
import { Spin } from "antd";

function App() {
  const isLoggedIn = useSelector(isLogged);
  const firstTime = useSelector(isFirstTime);
  const dispatch = useDispatch();

  console.log(isLoggedIn);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user.uid);
        dispatch(login(user.uid));
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  if (firstTime)
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spin />
      </div>
    );

  return isLoggedIn ? <Main /> : <Login />;
}

export default App;
