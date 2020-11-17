import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  const handlePress = () => setCount(count + 1);

  return (
    <View style={styles.container}>
      <Text style={styles.contador}>{count}</Text>
      <Button title="Incrementar" onPress={handlePress} />
      <Image
        style={{
          width: 20,
          height: 20,
        }}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  contador: {
    fontSize: 80,
  },
});
