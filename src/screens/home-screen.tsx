import { useNavigation } from "@react-navigation/native";
import { Pressable, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Text from "src/components/text";
import { EerieBlack, Flame, FloralWhite } from "src/constants/colors";
import type { ScreenNavigationProp } from "src/router/types";

export default function HomeScreen() {
	const navigation = useNavigation<ScreenNavigationProp<"Home">>();
	return (
		<SafeAreaView style={styles.bg}>
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
				<Pressable
					style={styles.button}
					onPress={() => navigation.navigate("Start")}
				>
					<Text as="P2" style={styles.buttonText}>
						Anime Recommendations
					</Text>
				</Pressable>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	bg: {
		backgroundColor: EerieBlack,
		flex: 1,
	},
	innerContainer: {
		margin: 20,
		backgroundColor: EerieBlack,
		flex: 1,
	},
	button: {
		backgroundColor: Flame,
		color: FloralWhite,
		borderRadius: 200,
		paddingHorizontal: 24,
		paddingVertical: 12,
		alignItems: "center",
		marginTop: 20,
	},

	buttonText: {
		color: FloralWhite,
		margin: 0,
	},
});
