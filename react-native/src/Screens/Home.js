import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from "@react-navigation/native";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Alert, FlatList } from "react-native";
import { List } from "react-native-paper";

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

  const handlePress = (id) => navigation.navigate("Detalle", { id });

  const renderItem = ({ item }) => (
    <List.Item
      title={item.nombre}
      left={(props) => <List.Icon {...props} icon="folder" />}
      onPress={() => handlePress(item.id)}
    />
  );

  return <FlatList data={cursos} renderItem={renderItem} />;
}

export default HomeScreen;
