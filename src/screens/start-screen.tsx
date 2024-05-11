import React from "react";
import {
	Dimensions,
	Image,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	View,
} from "react-native";
import Text from "src/components/text/text";
import { EerieBlack } from "src/constants/colors";

export default function StartScreen() {
	return (
		<SafeAreaView>
			<ScrollView style={styles.container}>
				<View style={styles.imageContainer}>
					<Image
						style={styles.image}
						source={{
							uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.cbrimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2019%2F12%2FFullmetal-Alchemist.jpg&f=1&nofb=1&ipt=c9ef8e74a05958e1460146a256730aac21edd2505178e5603de636fcfd09bff0&ipo=images",
						}}
						resizeMode="cover"
					/>
				</View>
				<View style={styles.body}>
					<Text as="H2">Fullmetal Alchemist: Brotherhood</Text>
					<Text>
						After failing the ressurect their mother using alchemy, Edward and
						Alphonse Elric try to get their bodies back working as State
						Alchemists under the military, which is brewing its own conspiracy.
						This epic adventure features a marvellous cast and an awesome
						steampunk world.
					</Text>

					<Text as="H3">Genres</Text>
					<View style={styles.genres}>
						{["Action", "Adventure", "Drama", "Fantasy"].map((genre) => (
							<Text as="P3" key={genre} style={styles.genre}>
								{genre}
							</Text>
						))}
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
	container: {
		backgroundColor: EerieBlack,
	},
	imageContainer: {
		width: width,
		aspectRatio: 4 / 3,
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		...StyleSheet.absoluteFillObject,
		objectFit: "cover",
		resizeMode: "cover",
	},
	body: {
		padding: 20,
	},
	genres: {
		flexDirection: "row",
		flexWrap: "wrap",
		marginTop: 10,
	},
	genre: {
		backgroundColor: "rgba(255, 255, 255, 0.2)",
		borderRadius: 200,
		paddingHorizontal: 12,
		paddingVertical: 6,
		marginRight: 10,
		marginBottom: 10,
	},
});
