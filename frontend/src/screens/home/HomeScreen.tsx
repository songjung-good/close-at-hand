// src/screens/home/HomeScreen.tsx
import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { HomeInfo, MirrorConnection, TodayHome } from "../../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen: React.FC<RootNavigationProp> = ({ navigation }) => {
	const insets = useSafeAreaInsets();

	return (
		<ScrollView
			style={[
				styles.container,
				// headerShwon을 false로 지정하여 safeArea를 조정해야 한다.
				{
					paddingTop: insets.top,
					paddingBottom: insets.bottom,
					paddingLeft: insets.left,
					paddingRight: insets.right,
				},
			]}
		>
			<MirrorConnection />
			<TodayHome />
			<HomeInfo />
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 10,
	},
});

export default HomeScreen;
