import { useNavigation } from "@react-navigation/native";
import { useEffect, useRef } from "react";
import { FlatList, View } from "react-native";
import type { Anime, List } from "src/types";
import AnimeItem from "./anime-item";
import HeaderInfo from "./header-info";
import Text from "./text";

interface Props {
	transition: boolean;
	data: Anime | undefined;
}

export default function AnimeScreenView({ transition, data }: Readonly<Props>) {
	const ref = useRef<FlatList<List> | null>(null);
	const navigation = useNavigation();

	useEffect(() => {
		const unsubscribe = navigation.addListener("state", ({ data }) => {
			ref.current?.scrollToOffset({ offset: 0, animated: true });
		});

		return unsubscribe;
	}, [navigation]);

	if (transition) {
		return <Text as="H2">Loading...</Text>;
	}

	if (!data?.header) {
		return <Text as="H2">Category not found</Text>;
	}

	const renderHeaderInfo = () => <HeaderInfo data={data} />;

	const renderListItem = ({
		item,
	}: {
		item: Anime["list"][0];
	}) => <AnimeItem item={item} />;

	return (
		<View>
			<FlatList
				ref={ref}
				data={data.list}
				ListHeaderComponent={renderHeaderInfo}
				renderItem={renderListItem}
				keyExtractor={(item) => item.title}
				ListHeaderComponentStyle={{ marginBottom: 20 }}
			/>
		</View>
	);
}
