import { Pressable, StyleSheet, Text, View } from "react-native";

import Wifi from "../../../assets/image/Wifi.svg";
import Alram from "../../../assets/image/Alram.svg";
import Profile from "../../../assets/image/Profile.svg";
import { COLORS, FONTSIZE, SHADOW } from "../../shared";
import { useNavigation } from "@react-navigation/native";

interface Props {
	name: "wifi" | "alram" | "profile";
	title: string;
}

const SettingsButton: React.FC<Props> = ({ name, title }) => {
	const navigation = useNavigation<Navigation>();

	let content;
	if (name === "alram") {
		content = <Alram with={100} height={100} />;
	} else if (name === "profile") {
		content = <Profile with={100} height={100} />;
	} else {
		content = <Wifi with={100} height={100} />;
	}
	return (
		<Pressable onPress={() => navigation.navigate(name)}>
			<View style={[styles.container, SHADOW]}>
				{content}
				<Text style={styles.text}>{title}</Text>
			</View>
		</Pressable>
	);
};

export default SettingsButton;

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.White,
		flexDirection: "row",
		alignItems: "center",
		height: FONTSIZE.Large * 2.5,
		marginVertical: 10,
		borderRadius: 15,
		paddingHorizontal: 10,
	},
	text: {
		fontSize: FONTSIZE.Large,
		marginLeft: 10,
		paddingHorizontal: 10,
		flex: 1,
	},
});
