import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

function App() {
  return (
    <View style={styles.container}>
      <Text>앱을 시작하려면 App.js를 열어보세요!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const AppEntryPoint = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED
  ? require("./.storybook").default
  : App;

export default AppEntryPoint;
