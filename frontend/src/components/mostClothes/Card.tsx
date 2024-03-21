import { Image, Pressable, StyleSheet, Text } from "react-native";

interface Props {
	clothesImageUrl: string;
	clothesId: number;
	onPress: (clothesId: Props["clothesId"]) => void;
}

const Card: React.FC<Props> = ({ clothesImageUrl, clothesId, onPress }) => {
	return (
		<Pressable
			onPress={onPress.bind(this, clothesId)}
			testID={`test-${clothesId}`}
		>
			<Text>{`test-${clothesId}`}</Text>
			<Image source={{ uri: clothesImageUrl }} />
		</Pressable>
	);
};

export default Card;

const styles = StyleSheet.create({});
