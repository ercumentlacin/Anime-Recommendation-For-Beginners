import React, {
	type ComponentPropsWithoutRef,
	type PropsWithChildren,
} from "react";
import { Text as RNText } from "react-native";
import { styles } from "./styles";

const H1 = "H1";
const H2 = "H2";
const H3 = "H3";
const H4 = "H4";
const P1 = "P1";
const P2 = "P2";
const P3 = "P3";

interface Props extends ComponentPropsWithoutRef<typeof RNText> {
	as?:
		| typeof H1
		| typeof H2
		| typeof H3
		| typeof H4
		| typeof P1
		| typeof P2
		| typeof P3;
}

export default function Text({
	children = "",
	as = P1,
	style,
	...restProps
}: PropsWithChildren<Props>) {
	return (
		<RNText style={[styles.base, styles[as], style]} {...restProps}>
			{children}
		</RNText>
	);
}
