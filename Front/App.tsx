/* eslint-disable @typescript-eslint/no-var-requires */

import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>앱을 시작하려면 App.js를 열어보세요!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const AppEntryPoint = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED
  ? require("./.storybook").default
  : App;

export default AppEntryPoint;
