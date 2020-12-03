import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

const FormContent = ({ children }) => {
  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={104}>
      {children}
    </KeyboardAvoidingView>
  );
};

export default FormContent;
