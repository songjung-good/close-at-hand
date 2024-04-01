import { StyleSheet, Modal, Text, View, Pressable } from "react-native";
import { BasketProps } from "./LaundryBasket";
import { CENTER, COLORS, FONTSIZE, ROW, SHADOW } from "../../shared";
import { StyledButton } from "../buttons";

interface Props extends BasketProps {
	modalVisible: boolean;
	hideModal(): void;
	doLandry(): void;
}

const BasketModal: React.FC<Props> = ({
	modalVisible,
	textures,
	hideModal,
	doLandry,
}) => {
	const laundryTip: Record<BasketProps["textures"], string[]> = {
		"기능성 소재": [
			"섬유유연제는 옷의 흡수력을 떨어뜨릴 수 있습니다.",
			"부드러운 세탁 모드나 찬물 세탁을 권장합니다.",
		],
		"울 / 캐시미어": [
			"부드러운 중성세제를 사용하고, 찬물로 헹구어야 합니다.",
			"세탁망을 이용하여 울 코스로 세탁해주세요",
		],
		"일반 세탁": [
			"기름이 포함된 음석의 얼룩은 주방세제를 사용하면 쉽게 지워집니다.",
			"다른 기능성 소재와 혼합되어 있는 경우 세탁법이 달라질 수 있으므로 라벨을 참고하는 것이 좋습니다.",
		],
	};

	function handleYes() {
		doLandry();
		hideModal();
	}

	const randomIndex = Math.floor(Math.random() * laundryTip[textures].length);

	return (
		<Modal transparent={true} visible={modalVisible}>
			<View style={styles.outerContainer}>
				<View style={[SHADOW, CENTER, styles.container]}>
					<Text style={styles.title}>세탁 완료</Text>
					<Text style={styles.content}>
						선택한 옷들을 세탁 완료 상태로 바꿉니다.
					</Text>
					<Text numberOfLines={1} style={styles.content}>
						{laundryTip[textures][randomIndex]}
					</Text>
					<View style={[ROW]}>
						<StyledButton title="세탁 완료" onPress={handleYes} />
						<StyledButton
							title="취소"
							onPress={hideModal}
							backgroundColor="CarrotRed"
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default BasketModal;

const styles = StyleSheet.create({
	outerContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	container: {
		borderWidth: 0.3,
		borderColor: COLORS.Gray,
		borderRadius: 15,
		marginVertical: "50%",
		width: "95%",
		backgroundColor: COLORS.White,
		paddingVertical: 20,
	},
	title: {
		fontSize: FONTSIZE.Large,
		fontWeight: "bold",
	},
	content: {
		fontSize: FONTSIZE.ExtraSmall,
		color: COLORS.Gray,
	},
	image: {
		marginVertical: 3,
		marginHorizontal: 5,
		width: 54,
		height: 180,
	},
	list: {
		width: 60,
		height: 190,
	},
});
