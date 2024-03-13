import { View, StyleSheet } from "react-native";
import { ManagementMenuList } from "../../components";

const ManagementScreen = () => {
	return (
		<View style={styles.conatiner}>
			<ManagementMenuList />
		</View>
	);
};

export default ManagementScreen;

const styles = StyleSheet.create({
	conatiner: {
		marginTop: 60,
	},
});
