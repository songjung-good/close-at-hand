import React from "react";
import { StyleSheet, Text } from "react-native";

interface Props {
	isLoading: boolean;
	isError: boolean;
	error: Error | null;
}

const LoadingOrError: React.FC<Props> = ({ isLoading, isError, error }) => {
	return (
		<>
			{isLoading && <Text>Loading...</Text>}
			{isError &&
				(error?.message ? (
					<Text>{error.message}</Text>
				) : (
					<Text>인터넷 연결을 확인하세요</Text>
				))}
		</>
	);
};

export default LoadingOrError;

const styles = StyleSheet.create({});
