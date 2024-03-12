import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
	NoProps: undefined;
};

export type RootScreenProps = NativeStackScreenProps<
	RootStackParamList,
	"NoProps"
>;
