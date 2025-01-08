import { View, Image, StyleSheet, ImageBackground } from "react-native";

export function DisplayPicture({ imageSource, size }) {
  return <Image source={imageSource} style={styles.image(size)} />;
}

const styles = StyleSheet.create({
  image: (size) => ({ width: size, height: size, borderRadius: size / 2 }),
});
