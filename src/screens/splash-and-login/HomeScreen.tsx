import { View, Image, StyleSheet } from "react-native";
import { CustomButton } from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

export function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/momo-sa-khang.png")}
        style={styles.image}
      />
      <CustomButton
        text="Get started"
        handlePress={() => navigation.navigate("Login")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "black",
  },
  image: { width: 343, height: 255 },
});
