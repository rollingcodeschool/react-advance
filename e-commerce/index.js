import 'react-native-gesture-handler';
import { registerRootComponent } from "expo";
import React from "react";
import App from './src/App';

export default function Index() {
  return <App />;
}

registerRootComponent(Index);
