import axios from "axios";
import { AsyncStorage } from "react-native";

const http = axios.create({
  baseURL: "https://react-advance-backend.herokuapp.com",
  timeout: 4000,
});

http.interceptors.request.use(async (config) => {
  const jwt = await AsyncStorage.getItem("token");
  if (jwt) {
    config.headers = {
      Authorization: `Bearer ${jwt}`,
    };
  }
  return config;
});

export default http;
