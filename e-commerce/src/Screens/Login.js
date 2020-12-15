import React, { useState } from "react";
import { Text, Input, Button, Layout, Spinner } from "@ui-kitten/components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Alert, AsyncStorage, Image, StyleSheet, View } from "react-native";
import http from "../helpers/axios";

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Debe ingresar un email")
    .email("Debe ingresar un formato de email valido"),
  password: Yup.string().required("Deber ingrear una contraseña"),
});

const initialValues = {
  email: "",
  password: "",
};

const Login = ({ navigation }) => {
  const [loading, setLoading] = useState(true);

  const onSubmit = async ({ email, password }) => {
    try {
      setLoading(true);
      const { data } = await http.post("/auth/local", {
        identifier: email,
        password,
      });
      console.log(data);
      // await AsyncStorage.setItem("jwt", data.jwt);
      // navigation.reset({
      //   index: 0,
      //   routes: [{ name: "Inicio" }],
      // });
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
      <Spinner size="small" style={{ width: 20, height: 20 }} />
    </View>
  );

  return (
    <Layout style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={{
            uri: "https://cdn.shopify.com/assets/images/logos/shopify-bag.png",
          }}
        />
      </View>
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
      <Button onPress={handleSubmit} accessoryLeft={LoadingIndicator}>
        Ingresar
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
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

export default Login;
