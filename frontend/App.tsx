import Index from "./src/app/example/Index";
import { StatusBar } from "expo-status-bar";

function App() {
	return (
		<>
			<StatusBar style="auto" />
			<Index />
		</>
	);
}

const AppEntryPoint = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED
	? require("./.storybook").default
	: App;

export default AppEntryPoint;
