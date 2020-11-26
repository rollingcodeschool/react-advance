import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import React, { useState } from "react";
import { Alert, Button, Text, TextInput } from "react-native";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      if (username && password) {
        setLoading(true);
        const { data } = await axios.post(
          "https://react-advance-backend.herokuapp.com/auth/local",
          {
            identifier: username,
            password,
          }
        );
        await AsyncStorage.setItem("jwt", data.jwt);
        navigation.reset({
          index: 0,
          routes: [{ name: "Inicio" }],
        });
      }
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1, margin: 16 }}
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1, margin: 16 }}
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      {loading ? (
        <Text>Cargando...</Text>
      ) : (
        <Button title="Login" onPress={handleLogin} />
      )}
    </>
  );
};

export default Login;
