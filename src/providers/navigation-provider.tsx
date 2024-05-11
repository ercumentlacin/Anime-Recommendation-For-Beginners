import { NavigationContainer } from "@react-navigation/native";
import type { PropsWithChildren } from "react";

export default function NavigationProvider({
	children,
}: Readonly<PropsWithChildren>) {
	return <NavigationContainer>{children}</NavigationContainer>;
}
