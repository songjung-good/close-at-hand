// src/screens/home/HomeScreen.tsx
import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { HomeInfo, MirrorConnection, TodayHome } from "../../components";

const HomeScreen: React.FC<RootNavigationProp> = ({ navigation }) => {
	return (
		<ScrollView style={styles.container}>
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
