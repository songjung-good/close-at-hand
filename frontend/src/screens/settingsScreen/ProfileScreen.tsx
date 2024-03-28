import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { ProfileInput, StyledButton } from "../../components";
import { useState } from "react";
import { FONTSIZE, ROW } from "../../shared";

import img from "../../../assets/image/foam.png";

const gender = "남성";
const id = "myIdentifier";

const ProfileScreen = () => {
	const [nickname, setNickname] = useState("");
	const [height, setHeight] = useState("");

	function handleChangeImage() {
		// 사진 바꾸는 로직
	}

	function handleSubmit() {
		// 저장 누르면
	}

	async function hadnleWifi() {
		Alert.alert(
			"자택 와이파이 설정",
			"현재 연결된 와이파이를 자택 와이파이로 설정합니다.",
			[
				{
					text: "재설정",
					onPress: () => console.log("재설정 누름"),
					style: "cancel",
				},
				{ text: "취소", onPress: () => console.log("취소") },
			],
			{ cancelable: true },
		);
	}

	return (
		<View style={styles.main}>
			<View style={styles.main}>
				<View style={[ROW, styles.margin]}>
					<View style={styles.container}>
						<Image style={styles.img} source={img} />
						<StyledButton
							title="프로필 사진 변경"
							backgroundColor="CarrotRed"
							onPress={handleChangeImage}
						/>
					</View>
					<View style={styles.container}>
						<Text style={styles.text}>닉네임</Text>
						<ProfileInput
							onChangeText={(text) => {
								setNickname(text);
							}}
							value={nickname}
						/>
					</View>
				</View>
				<View style={[ROW, styles.margin]}>
					<View style={styles.container}>
						<Text style={styles.text}>성별</Text>
						<ProfileInput value={gender} />
					</View>
					<View style={styles.container}>
						<Text style={styles.text}>키 (신장)</Text>
						<ProfileInput
							onChangeText={(text) => {
								setHeight(text);
							}}
							value={height}
						/>
					</View>
				</View>
				<View style={[ROW, styles.margin]}>
					<View style={styles.container}>
						<Text style={styles.text}>가입 아이디</Text>
						<ProfileInput value={id} />
					</View>
					<View style={styles.container}>
						<Text style={styles.text}>자택 와이파이</Text>
						<StyledButton
							title="자택 와이파이 재설정"
							backgroundColor="White"
							onPress={hadnleWifi}
						/>
						<Text></Text>
					</View>
				</View>
			</View>
			<StyledButton onPress={handleSubmit} title="저장하기" />
		</View>
	);
};

export default ProfileScreen;

const styles = StyleSheet.create({
	main: {
		flex: 1,
		marginTop: 30,
	},
	margin: {
		marginVertical: 15,
	},
	container: {
		flex: 1,
	},
	img: {
		height: 150,
		resizeMode: "contain",
		alignSelf: "center",
	},
	text: {
		textAlign: "center",
		fontSize: FONTSIZE.ExtraSmall,
		fontWeight: "bold",
	},
});
