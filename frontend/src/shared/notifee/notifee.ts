import notifee, {
	TriggerType,
	AndroidChannel,
	AndroidImportance,
	Trigger,
	RepeatFrequency,
} from "@notifee/react-native";

import { COLORS } from "../styles/STYLES";

const NotificationKey = {
	CloseAtHandHomeAlarm: "CloseAtHandHomeAlarm",
	CloseAtHandLaundryAlarm: "CloseAtHandLaundryAlarm",
	CloseAtHandClothesAlarm: "CloseAtHandClothesAlarm",
	CloseAtHandAirDresserAlarm: "CloseAtHandAirDresserAlarm",
};

export type NotificationType = {
	[key in keyof typeof NotificationKey]: boolean;
};

// 알람 권한
export async function getNotificationPermission() {
	await notifee.requestPermission();
}

function getRandomNum(min: number, max: number): number {
	// min (포함)와 max (제외) 시(hour) 사이의 랜덤 시간
	return Math.floor(Math.random() * (max - min) + min);
}

// 알람 설정
export async function scheduleDailyAlarm() {
	const date = new Date();
	const randomHour = getRandomNum(18, 25); // 6PM (18)와 8PM (20) 사이의 랜덤한 시간
	const randomMinute = getRandomNum(0, 60);
	const randomSecond = getRandomNum(0, 60);
	date.setHours(randomHour, randomMinute, randomSecond);

	console.debug("alarm set at", date.getTime());

	const trigger: Trigger = {
		type: TriggerType.TIMESTAMP,
		timestamp: date.getTime(),
		repeatFrequency: RepeatFrequency.DAILY,
	};

	const channelId: string = await notifee.createChannel({
		id: NotificationKey.CloseAtHandHomeAlarm,
		name: NotificationKey.CloseAtHandHomeAlarm,
		importance: AndroidImportance.DEFAULT,
	} as AndroidChannel);

	await notifee.createTriggerNotification(
		{
			title: "집에 도착하셨나요?",
			body: "오늘 입은 옷을 세탁바구니에 넣어주세요!",
			android: {
				channelId,
				color: COLORS.LightMint,
				pressAction: { id: "default" },
			},
			data: { notificationType: NotificationKey.CloseAtHandHomeAlarm },
		},
		trigger,
	);
}

export const notification: { id: null | "CloseAtHandHomeAlarm" } = { id: null };

export async function deleteNotification(channelId: string) {
	notifee.deleteChannel(channelId);
}
