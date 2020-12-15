import React from "react";
import { KeyboardAvoidingView, SafeAreaView, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";
import FormContent from "../Components/FormContent";
import ImagePickerExample from "../Components/ImagePicker";

const ImageViewer = () => {
  const [text, setText] = React.useState("");

  return (
    <FormContent>
      <ScrollView>
        <ImagePickerExample />
      </ScrollView>
    </FormContent>
  );
};

export default ImageViewer;
