import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import React from "react";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import ThemeProvider from "./Components/ThemeProvider";

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <ThemeProvider />
      </ApplicationProvider>
    </>
  );
}
