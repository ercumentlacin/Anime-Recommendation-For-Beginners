import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Text from "src/components/text";
import { EerieBlack, Flame } from "src/constants/colors";

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
		<SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
			<ScrollView style={styles.innerContainer}>
				<Text as="H1" style={{ color: Flame }}>
					Anime Recommendations for Beginners
				</Text>
				<Text>
					This is a chart for those of you who want to get into the anime
					medium, but don't know where to start. It's is separated into nine
					genres, with a few shows or movies in each. I tried to give a decent
					variety of the different kinds of stories anime can tell, while not
					including anything that is too inaccessible. If you don't have a
					particular genre preference, or just want a good start, check out the
					show to the right of this.
				</Text>
				<Text>
					This list barely scathes the surface of noteworthy anime, so if you
					find this chart runs dry, you can always find dozens upon dozens of
					great anime yourself.
				</Text>
				<Text>This chart was made by DjappaT, and thanks it out.</Text>
				<StatusBar style="light" />
			</ScrollView>
		</SafeAreaView>
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
