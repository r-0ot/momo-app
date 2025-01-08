import { Text, View, Image, StyleSheet, Button } from "react-native";
import { MenuItem } from "../components/MenuItem";
import { CustomButton } from "./CustomButton";

export function InfoTile({ width, type, children }) {
  return (
    <View style={styles.tileBg(type, width)}>
      <View style={styles.tile(width)}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  tileBg: (type, width) => ({
    width: width || 320,
    backgroundColor: "#661A15",
    borderRadius: 12,
    alignItems: "flex-end",
    position: type === "modal" ? "absolute" : "static",
    marginVertical: 5,
  }),
  tile: (width) => ({
    width: width - 5 || 315,
    backgroundColor: "black",
    borderRadius: 12,
    paddingVertical: width === "338" ? 15 : 0,
  }),
  text: {
    color: "white",
    padding: 10,
  },
});
