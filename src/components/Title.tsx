import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function Title({ text, path }) {
  const navigation = useNavigation();
  return (
    <View style={styles.title}>
      <TouchableOpacity onPress={() => navigation.navigate(path)}>
        <Text style={styles.text}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flexDirection: "row",
    backgroundColor: "#661A15",
    width: "100%",
    height: 50,
    alignItems: "center",
    marginBottom: 5,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 24,
    marginLeft: 17,
  },
});
