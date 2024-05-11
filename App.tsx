import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { EerieBlack } from "src/constants/colors";
import Providers from "src/providers";
import RootRouter from "src/router/root-router";

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [fontsLoaded, fontError] = useFonts({
		"NunitoSans_7pt-Black": require("./src/assets/fonts/NunitoSans_7pt-Black.ttf"),
		"NunitoSans_7pt-Bold": require("./src/assets/fonts/NunitoSans_7pt-Bold.ttf"),
		"NunitoSans_7pt-Medium": require("./src/assets/fonts/NunitoSans_7pt-Medium.ttf"),
		"NunitoSans_7pt-Regular": require("./src/assets/fonts/NunitoSans_7pt-Regular.ttf"),
		"NunitoSans_7pt-SemiBold": require("./src/assets/fonts/NunitoSans_7pt-SemiBold.ttf"),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded || fontError) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded, fontError]);

	if (!fontsLoaded && !fontError) {
		return null;
	}

	return (
		<Providers>
			<View onLayout={onLayoutRootView} style={styles.container}>
				<RootRouter />
			</View>
			<StatusBar style="light" />
		</Providers>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: EerieBlack,
	},
	innerContainer: {
		padding: 20,
	},
});
