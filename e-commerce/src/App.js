import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  StyleService,
  useStyleSheet,
} from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import React from "react";
import Router from "./Router";
import { SafeAreaView } from "react-native";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

export default function App() {
  const styles = useStyleSheet(themeStyles);
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <SafeAreaView style={{ flex: 1 }}>
          <Layout style={styles.container}>
            <Router />
          </Layout>
        </SafeAreaView>
      </ApplicationProvider>
    </>
  );
}

const themeStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: "background-basic-color-2",
  },
});
