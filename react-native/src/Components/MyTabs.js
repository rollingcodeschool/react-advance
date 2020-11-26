import React, { useState } from "react";
import { Button, Text } from "react-native";

const MyTabs = () => {
  const [tabSelected, setTabSelected] = useState(2);

  const renderTab = () => {
    switch (tabSelected) {
      case 0:
        return <Text>Tab 0</Text>;
      case 1:
        return <Text>Tab 1</Text>;
      case 2:
        return <Text>Tab 2</Text>;
      default:
        break;
    }
  };
  return (
    <>
      {renderTab()}
      <Button title="Tab0" onPress={() => setTabSelected(0)} />
      <Button title="Tab1" onPress={() => setTabSelected(1)} />
      <Button title="Tab2" onPress={() => setTabSelected(2)} />
    </>
  );
};

export default MyTabs;
