import { FlatList, View } from "react-native";
import type { Anime } from "src/types";
import AnimeItem from "./anime-item";
import HeaderInfo from "./header-info";
import Text from "./text";

interface Props {
	transition: boolean;
	data: Anime | undefined;
}

export default function AnimeScreenView({ transition, data }: Readonly<Props>) {
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
				data={data.list}
				ListHeaderComponent={renderHeaderInfo}
				renderItem={renderListItem}
				keyExtractor={(item) => item.title}
				ListHeaderComponentStyle={{ marginBottom: 20 }}
			/>
		</View>
	);
}
