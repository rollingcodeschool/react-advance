import { createContext } from "react";

export const AppContext = createContext({
  moneda: "",
  handleSetMoneda: (value) => value,
});
