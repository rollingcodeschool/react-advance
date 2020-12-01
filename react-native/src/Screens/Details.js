import Axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Alert, AsyncStorage, StyleSheet, View, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  ActivityIndicator,
  Avatar,
  Button,
  Card,
  List,
  Paragraph,
  Subheading,
  Text,
  Title,
  TextInput,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Details({ route }) {
  const [loading, setLoading] = useState(true);
  const [curso, setCurso] = useState({});
  const [comentario, setComentario] = useState("");
  const [loadingComentario, setLoadingComentario] = useState(false);
  const { id } = route.params;

  useEffect(() => {
    const fetchCurso = async () => {
      try {
        const jwt = await AsyncStorage.getItem("jwt");
        const { data } = await Axios.get(
          `https://react-advance-backend.herokuapp.com/cursos/${id}`,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );
        console.log(data);
        setCurso(data);
        setLoading(false);
      } catch (error) {
        Alert.alert(error.message);
      }
    };
    fetchCurso();
  }, []);

  const renderCometario = ({ item }) => (
    <List.Item
      title={item.user}
      description={item.Value}
      left={(props) => (
        <Avatar.Image
          size={54}
          source={{
            uri:
              "https://callstack.github.io/react-native-paper/screenshots/avatar-image.png",
          }}
        />
      )}
    />
  );

  const handleAgregarComentario = async () => {
    try {
      if (!comentario) {
        return Alert.alert("Por favor agregue un comentario");
      }
      const payload = {
        Value: comentario,
        user: "5f84ad4c78bc400017eeb0f8",
        curso: curso.id,
      };
      const { data } = await Axios.post(
        "https://react-advance-backend.herokuapp.com/comentarios",
        payload
      );
      const copiaCurso = {
        ...curso,
        comentarios: [...curso.comentarios, data],
      };
      setCurso(copiaCurso);
    } catch (error) {
      console.log(error);
    } finally {
      setComentario("");
    }
  };

  if (loading) return <ActivityIndicator animating={true} />;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Title>{curso.nombre}</Title>
        <Card>
          <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        </Card>
        <Subheading>{curso.profesor.nombre}</Subheading>
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Paragraph>
        <Title>Comentarios</Title>
        <FlatList data={curso.comentarios} renderItem={renderCometario} />
        <Title>Agregar comentario</Title>
        <View>
          <TextInput
            label="Comentario"
            value={comentario}
            onChangeText={(text) => setComentario(text)}
            style={styles.input}
            mode="outlined"
          />
          <Button
            icon="comment"
            onPress={handleAgregarComentario}
            loading={loadingComentario}
            disabled={loadingComentario}
          >
            Agregar comentario
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    marginVertical: 10,
  },
});
