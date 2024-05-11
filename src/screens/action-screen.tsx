import { Link } from "@react-navigation/native";
import { useEffect, useState, useTransition } from "react";
import { Dimensions, FlatList, Image, StyleSheet, View } from "react-native";
import Text from "src/components/text";

import type { ScreenProps } from "src/router/types";
import type { Anime } from "src/types";

const categoryMap = {
	action: "adventure",
	adventure: "comedy",
	comedy: "slice-of-life",
	"slice-of-life": "fantasy",
	fantasy: "science-fiction",
	"science-fiction": "drama",
	drama: "suspense",
	suspense: "romance",
	romance: "action",
};

export default function ActionScreen(
	props: Readonly<ScreenProps<"AnimeCategory">>,
) {
	const [data, setData] = useState<Anime>({} as Anime);
	const [transition, startTransition] = useTransition();

	useEffect(() => {
		startTransition(() => {
			try {
				const jsonFiles = require.context("../data", true, /\.json$/);

				jsonFiles.keys().forEach((key) => {
					if (key.includes(props.route.params.category)) {
						const json = jsonFiles(key) as Anime;
						setData(json);
					}
				});
			} catch (error) {
				console.warn("🚀 ~ startTransition ~ error", error);
			}
		});
	}, [props.route.params.category]);

	const nextCategory =
		categoryMap[props.route.params.category as keyof typeof categoryMap] ||
		"action";

	useEffect(() => {
		props.navigation.setOptions({
			title: data?.genre,
			headerRight: () => (
				<Link to={`/AnimeCategory?category=${nextCategory}`}>
					<Text as="H3" style={{ color: "red" }}>
						Next
					</Text>
				</Link>
			),
		});
	}, [data?.genre, props.navigation.setOptions, nextCategory]);

	if (transition) {
		return <Text as="H2">Loading...</Text>;
	}

	if (!data?.header) {
		return <Text as="H2">Category not found</Text>;
	}

	return (
		<View>
			<FlatList
				data={data.list}
				ListHeaderComponent={() => (
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
				)}
				renderItem={({ item }) => (
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
							<View
								style={{ flexDirection: "row", flexWrap: "wrap", columnGap: 5 }}
							>
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
				)}
				keyExtractor={(item) => item.title}
				ListHeaderComponentStyle={{ marginBottom: 20 }}
			/>
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
	card: {
		flexDirection: "row",
		flex: 1,
		margin: 10,
		gap: 20,
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
});
