import { Dimensions, Image, StyleSheet, View } from "react-native";
import type { Anime } from "src/types";
import Text from "./text";

export default function HeaderInfo({ data }: Readonly<{ data: Anime }>) {
	return (
		<View>
			<View style={styles.headerImgContainer}>
				<Image
					style={styles.headerImg}
					source={{ uri: data.header.imgUrl }}
					resizeMode="cover"
				/>
			</View>
			<View style={{ paddingHorizontal: 10 }}>
				<Text as="H2">{data.header.title}</Text>
				<Text as="P2">{data.header.description}</Text>
			</View>
		</View>
	);
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
	headerImgContainer: {
		width: width,
		aspectRatio: 4 / 3,
		justifyContent: "center",
		alignItems: "center",
	},
	headerImg: {
		...StyleSheet.absoluteFillObject,
		resizeMode: "cover",
		objectFit: "cover",
	},
});
