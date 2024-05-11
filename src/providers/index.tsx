import type { PropsWithChildren } from "react";
import NavigationProvider from "./navigation-provider";

export default function Providers({ children }: Readonly<PropsWithChildren>) {
	return <NavigationProvider>{children}</NavigationProvider>;
}
