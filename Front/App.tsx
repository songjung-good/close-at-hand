/* eslint-disable @typescript-eslint/no-var-requires */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
});

function App() {
  return (
    <View style={styles.container}>
      <Text>앱을 시작하려면 App.js를 열어보세요!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const AppEntryPoint = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED
  ? require("./.storybook").default
  : App;

export default AppEntryPoint;
