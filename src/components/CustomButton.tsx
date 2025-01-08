import { TouchableOpacity, Text, StyleSheet } from "react-native";

export function CustomButton({ text, handlePress, size = "large" }) {
  return (
    <TouchableOpacity style={styles.button(size)} onPress={handlePress}>
      <Text style={styles.text(size)}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: (size) => ({
    backgroundColor: "#661A15",
    width: size === "large" ? 343 : size === "medium" ? 80 : 45,
    height: size === "small" ? 28 : 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: "white",
    borderRadius: 8,
    marginVertical: size === "large" ? 16 : 10,
    marginHorizontal: size === "small" ? 10 : 0,
  }),
  text: (size) => ({
    color: "white",
    fontSize: size === "small" ? 9 : 16,
    fontWeight: 700,
  }),
});
