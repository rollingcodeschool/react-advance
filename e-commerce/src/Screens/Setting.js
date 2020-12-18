import React from "react";
import {
  Button,
  Icon,
  Layout,
  Text,
  List,
  ListItem,
  TopNavigation,
} from "@ui-kitten/components";
import { AsyncStorage, StyleSheet } from "react-native";

const Setting = ({ navigation }) => {
  const renderItemAccessory = (props) => (
    <Icon {...props} name="arrow-ios-forward-outline" />
  );

  const renderItemIcon = (icon) => (props) => <Icon {...props} name={icon} />;

  const renderItem = ({ item, index }) => (
    <ListItem
      title={item.title}
      accessoryLeft={renderItemIcon(item.icon)}
      accessoryRight={renderItemAccessory}
      onPress={item.handlePress}
    />
  );

  const logout = async () => {
    await AsyncStorage.clear();
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  const data = [
    {
      title: "Cambiar apariencia",
      icon: "moon-outline",
      handlePress: () => console.log("jola"),
    },
    {
      title: "Salir",
      icon: "person",
      handlePress: logout
    },
  ];

  return (
    <Layout style={{ flex: 1 }}>
      <TopNavigation alignment="center" title="Confugiraciones" />
      <List data={data} renderItem={renderItem} />
    </Layout>
  );
};

const styles = StyleSheet.create({});

export default Setting;
