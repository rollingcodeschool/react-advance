import React, { useState } from "react";
import { AppContext } from "../context/AppContext";

const AppProvider = ({ children }) => {
  const [moneda, setMoneda] = useState("ARS");

  const handleSetMoneda = (value) => setMoneda(value);

  const values = {
    moneda,
    handleSetMoneda,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;
