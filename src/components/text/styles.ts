import { StyleSheet } from "react-native";

// Import color from your color constants file
import { FloralWhite } from "src/constants/colors";
import {
  NunitoSans_7pt_Bold,
  NunitoSans_7pt_Regular,
  NunitoSans_7pt_SemiBold,
} from "src/constants/fonts";
import adjust, { lineHeight } from "./logic";

/*
	For any common styles you can add them to base.
	Define a rule group for each of the types defined in Text.js
*/
export const styles = StyleSheet.create({
  base: { color: FloralWhite },
  H1: {
    fontFamily: NunitoSans_7pt_Bold,
    fontSize: adjust(30),
    lineHeight: lineHeight(30),
    marginVertical: lineHeight(30) * 0.5,
  },
  H2: {
    fontFamily: NunitoSans_7pt_SemiBold,
    fontSize: adjust(24),
    lineHeight: lineHeight(24),
    marginVertical: lineHeight(24) * 0.5,
  },
  H3: {
    fontFamily: NunitoSans_7pt_Bold,
    fontSize: adjust(16),
    lineHeight: lineHeight(16),
    marginVertical: lineHeight(16) * 0.5,
  },
  H4: {
    fontFamily: NunitoSans_7pt_Bold,
    fontSize: adjust(14),
    lineHeight: lineHeight(14),
    marginVertical: lineHeight(14) * 0.5,
  },
  P1: {
    fontFamily: NunitoSans_7pt_Regular,
    fontSize: adjust(16),
    lineHeight: lineHeight(16),
    marginVertical: lineHeight(16) * 0.5,
  },
  P2: {
    fontFamily: NunitoSans_7pt_Regular,
    fontSize: adjust(14),
    lineHeight: lineHeight(14),
    marginVertical: lineHeight(14) * 0.5,
  },
  P3: {
    fontFamily: NunitoSans_7pt_Regular,
    fontSize: adjust(10),
    lineHeight: lineHeight(10),
    marginVertical: lineHeight(10) * 0.5,
  },
});
