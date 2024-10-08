import { Pressable, StyleSheet, Text, View } from "react-native";

import Wifi from "../../../assets/image/Wifi.svg";
import Alarm from "../../../assets/image/alarm.svg";
import Profile from "../../../assets/image/Profile.svg";
import { COLORS, FONTSIZE, ROW, SHADOW } from "../../shared";
import { useNavigation } from "@react-navigation/native";

interface Props {
	name: "bluetooth" | "alarm" | "profile";
	title: string;
}

const SettingsButton: React.FC<Props> = ({ name, title }) => {
	const navigation = useNavigation<Navigation>();

	let content;
	if (name === "alarm") {
		content = <Alarm height={100} />;
	} else if (name === "profile") {
		content = <Profile height={100} />;
	} else {
		content = <Wifi height={100} />;
	}
	return (
		<Pressable onPress={() => navigation.navigate(name)}>
			<View style={[SHADOW, ROW, styles.container]}>
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
