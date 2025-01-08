import {
  Text,
  View,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export function MenuItem({
  title,
  imageSource,
  handlePress,
  width,
  height,
  logo = true,
}) {
  return (
    <ImageBackground
      source={imageSource}
      resizeMode="cover"
      style={styles.container(width, height)}
    >
      <View style={styles.overlay} />
      <TouchableOpacity style={styles.content} onPress={handlePress}>
        {logo ? (
          <Image
            source={require("../assets/momo-removebg.png")}
            style={styles.image}
          />
        ) : (
          <View style={styles.image}></View>
        )}
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: (width, height) => ({
    width: width,
    height: height,
    borderRadius: 15,
    overflow: "hidden",
  }),
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "absolute",
    width: "inherit",
    height: "inherit",
  },
  content: {
    zIndex: 1,
    justifyContent: "space-between",
    width: "inherit",
    height: "inherit",
  },
  image: { width: 100, height: 90 },
  title: {
    fontSize: 24,
    fontWeight: 600,
    color: "white",
    lineHeight: 35,
    marginBottom: 20,
    marginLeft: 5,
  },
});
