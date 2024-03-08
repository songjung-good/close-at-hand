/* eslint-disable @typescript-eslint/no-var-requires */

import { StatusBar } from "expo-status-bar";
import { Text, TextInput, View } from "react-native";
import { useOtherNameStore, usePersonStore } from "./src/app/store/store";

function App() {
	const { firstName, updateFirstName } = usePersonStore();
	const { name, updateName } = useOtherNameStore();
	return (
		<View className="flex-1 items-center justify-center bg-white">
			<Text>앱을 시작하려면 App.js를 열어보세요!</Text>
			<StatusBar style="auto" />
			<Text>{firstName}</Text>
			<TextInput
				className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
				onChangeText={(text) => updateFirstName(text)}
			></TextInput>
			<Text>{name.firstName}</Text>
			<TextInput
				className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
				onChangeText={(text) => updateName(text)}
			></TextInput>
		</View>
	);
}

const AppEntryPoint = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED
	? require("./.storybook").default
	: App;

export default AppEntryPoint;
