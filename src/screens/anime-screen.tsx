import { Link } from "@react-navigation/native";
import { useCallback, useEffect, useState, useTransition } from "react";
import AnimeScreenView from "src/components/action-screen-view";
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
				console.error("🚀 ~ startTransition ~ error", error);
			}
		});
	}, [props.route.params.category]);

	const nextCategory =
		categoryMap[props.route.params.category as keyof typeof categoryMap] ||
		"action";

	const renderNextLink = useCallback(
		() => (
			<Link to={`/AnimeCategory?category=${nextCategory}`}>
				<Text as="H3" style={{ color: "red" }}>
					Next
				</Text>
			</Link>
		),
		[nextCategory],
	);

	useEffect(() => {
		props.navigation.setOptions({
			title: data?.genre,
			headerRight: renderNextLink,
		});
	}, [data?.genre, props.navigation.setOptions, renderNextLink]);

	return <AnimeScreenView data={data} transition={transition} />;
}
