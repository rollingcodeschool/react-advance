import React, { useState } from "react";
import {
  Text,
  Input,
  Button,
  Layout,
  Spinner,
  TopNavigation,
  TopNavigationAction,
  Icon,
} from "@ui-kitten/components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Alert, AsyncStorage, Image, StyleSheet, View } from "react-native";
import http from "../helpers/axios";

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Debe ingresar un email")
    .email("Debe ingresar un formato de email valido"),
  password: Yup.string().required("Deber ingrear una contraseña"),
  username: Yup.string().required("Deber ingrear un nombre de usuario"),
  confirmPassword: Yup.string()
    .required("Debe ingresar la confirmacion de la constraseña")
    .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir"),
});

const initialValues = {
  email: "",
  password: "",
  username: "",
  confirmPassword: "",
};

const Register = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async ({ username, email, password }) => {
    try {
      setLoading(true);
      const { data } = await http.post("/auth/local/register", {
        username,
        email,
        password,
      });
      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  const { values, handleChange, handleSubmit, handleBlur, errors } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const LoadingIndicator = (props) => (
    <View style={[props.style, styles.indicator]}>
      <Spinner
        size="small"
        style={{ width: 20, height: 20 }}
        status="success"
      />
    </View>
  );

  const submitProps = loading ? { accessoryLeft: LoadingIndicator } : {};

  const renderBackAction = () => (
    <TopNavigationAction
      icon={(props) => <Icon {...props} name="arrow-back" />}
      onPress={() => navigation.goBack()}
    />
  );
  return (
    <>
      <TopNavigation
        alignment="center"
        title="Registrate"
        accessoryLeft={renderBackAction}
      />
      <Layout style={styles.container}>
        <Input
          style={styles.inputs}
          label="Nombre de usuario"
          caption={errors.username}
          status={errors.username ? "danger" : "primary"}
          onChangeText={handleChange("username")}
          onBlur={handleBlur("username")}
          value={values.username}
        />
        <Input
          style={styles.inputs}
          label="Email"
          caption={errors.email}
          status={errors.email ? "danger" : "primary"}
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
          value={values.email}
        />
        <Input
          secureTextEntry
          style={styles.inputs}
          label="Contraseña"
          onChangeText={handleChange("password")}
          caption={errors.password}
          status={errors.password ? "danger" : "primary"}
          onBlur={handleBlur("password")}
          value={values.password}
        />
        <Input
          secureTextEntry
          style={styles.inputs}
          label="Confirmar contraseña"
          onChangeText={handleChange("confirmPassword")}
          caption={errors.confirmPassword}
          status={errors.confirmPassword ? "danger" : "primary"}
          onBlur={handleBlur("confirmPassword")}
          value={values.confirmPassword}
        />
        <Button onPress={handleSubmit} {...submitProps}>
          Registrarse
        </Button>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    flexDirection: "column",
  },
  loginContainer: {
    flex: 1,
  },
  inputs: {
    marginBottom: 16,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  logo: {
    width: 100,
    height: 100,
  },
  indicator: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Register;
