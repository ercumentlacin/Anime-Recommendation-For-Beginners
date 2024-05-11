import { Link } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Text from "src/components/text";
import { EerieBlack, Flame, FloralWhite } from "src/constants/colors";
import ActionScreen from "src/screens/action-screen";
import HomeScreen from "src/screens/home-screen";
import StartScreen from "src/screens/start-screen";
import type { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootRouter() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				headerStyle: {
					backgroundColor: EerieBlack,
				},
				contentStyle: {
					backgroundColor: EerieBlack,
				},
				headerTintColor: FloralWhite,
				headerBackTitleVisible: false,
				headerTitleStyle: {
					fontFamily: "NunitoSans_7pt-Bold",
				},
			}}
		>
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen
				name="Start"
				component={StartScreen}
				options={{
					headerShown: true,
					headerRight: () => (
						<Link to="/AnimeCategory?category=action">
							<Text as="H3" style={{ color: Flame }}>
								Next
							</Text>
						</Link>
					),
				}}
			/>
			<Stack.Screen
				name="AnimeCategory"
				component={ActionScreen}
				options={{
					headerShown: true,
					headerRight: () => (
						<Link to="Action">
							<Text as="H3" style={{ color: Flame }}>
								Next
							</Text>
						</Link>
					),
				}}
			/>
		</Stack.Navigator>
	);
}
