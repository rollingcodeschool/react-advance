import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from "@react-navigation/native";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Alert,
  Pressable,
  FlatList,
  TouchableOpacity,
} from "react-native";
import MyTabs from "../Components/MyTabs";

function HomeScreen() {
  const navigation = useNavigation();
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const jwt = await AsyncStorage.getItem("jwt");
        const { data } = await Axios.get(
          "https://react-advance-backend.herokuapp.com/cursos",
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );
        setCursos(data);
        console.log(data);
      } catch (error) {
        Alert.alert("Error", error.message);
      }
    };
    fetchCursos();
  }, []);

  const Item = ({ item: { nombre } }) => (
    <Pressable>
      <Image
        style={{ height: 180, width: 110, borderRadius: 10, margin: 10 }}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
    </Pressable>
  );

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <MyTabs />
      {/* <FlatList
        data={cursos}
        renderItem={Item}
        keyExtractor={(item) => item.id}
        horizontal
      /> */}
    </View>
  );
}

export default HomeScreen;
