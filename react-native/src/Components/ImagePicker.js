import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform, AsyncStorage } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import Axios from "axios";

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
      });

      console.log(result);

      if (!result.cancelled) {
        setImage(result.uri);
      }

      const formData = new FormData();
      formData.append("files", {
        name: "test2",
        type: 'multipart/form-data',
        uri: result.uri,
      });
      const jwt = await AsyncStorage.getItem("jwt");
      const response = await Axios.post(
        "https://react-advance-backend.herokuapp.com/upload",
        formData,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
}
