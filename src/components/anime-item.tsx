import { Image, StyleSheet, View } from "react-native";
import type { Anime } from "src/types";
import Text from "./text";

export default function AnimeItem({
	item,
}: Readonly<{
	item: Anime["list"][0];
}>) {
	return (
		<View style={styles.card}>
			<Image source={{ uri: item.imgUrl }} width={100} height={150} />
			<View
				style={{
					flex: 1,
					justifyContent: "flex-start",
					alignItems: "flex-start",
				}}
			>
				<Text as="H3" style={{ marginVertical: 0 }}>
					{item.title}
				</Text>
				<Text as="P3" style={{ flex: 1 }}>
					{item.description}
				</Text>
				<View style={{ flexDirection: "row", flexWrap: "wrap", columnGap: 5 }}>
					{item.genres?.map((genre) => (
						<Text
							as="P3"
							key={genre}
							style={{
								backgroundColor: "rgba(0, 0, 0, 0.5)",
								paddingHorizontal: 5,
								paddingVertical: 2,
								borderRadius: 5,
							}}
						>
							{genre}
						</Text>
					))}
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		flexDirection: "row",
		flex: 1,
		margin: 10,
		gap: 20,
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
});
