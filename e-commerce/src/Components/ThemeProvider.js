import { useStyleSheet, Layout, StyleService } from "@ui-kitten/components";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native";
import Router from "../Router";

const ThemeProvider = () => {
  const styles = useStyleSheet(themeStyles);

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <Layout style={{ flex: 1 }}>
          <Router />
        </Layout>
      </SafeAreaView>
    </>
  );
};

const themeStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: "background-basic-color-1",
  },
});

export default ThemeProvider;
