import { Text, View, Image, StyleSheet, Button } from "react-native";
import { MenuItem } from "../components/MenuItem";
import { DisplayPicture } from "../components/DisplayPicture";
import { CustomButton } from "./CustomButton";
import { InfoTile } from "./InfoTile";
import { apiURL } from "../screens/constants";

export function Modal({ setShowModal, handleDelete }) {
  return (
    <View style={styles.container}>
      <View style={styles.backdrop} />
      <InfoTile type="modal">
        <Text style={styles.text}>
          Are you sure you want to delete this employee?
        </Text>
        <View style={styles.buttons}>
          <CustomButton text="Yes" size="small" handlePress={handleDelete} />
          <CustomButton
            text="No"
            size="small"
            handlePress={() => setShowModal(false)}
          />
        </View>
      </InfoTile>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  backdrop: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "black",
    opacity: "50%",
  },
  text: {
    color: "white",
    padding: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
