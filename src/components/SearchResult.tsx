import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { DisplayPicture } from "./DisplayPicture";
import { useNavigation } from "@react-navigation/native";

export function SearchResult({ data, view, edit, setShowModal }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <DisplayPicture imageSource={require(`../assets/dp.png`)} size={60} />
      <TouchableOpacity
        style={styles.content}
        onPress={() => navigation.navigate(view, { Id: data.id })}
      >
        <Text style={styles.title}>{data?.name || data?.full_name}</Text>
        <Text style={styles.subtitle}>{data?.gender || data?.email}</Text>
        <Text
          style={styles.location}
        >{`${data?.address?.city || data?.email} ${data.address ? "," : ""} ${data?.address?.state || ""}`}</Text>
      </TouchableOpacity>
      <View style={styles.actions}>
        <TouchableOpacity
          onPress={() => navigation.navigate(edit, { details: data })}
        >
          <Text style={styles.text}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowModal(true)}>
          <Text style={styles.text}>Del</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    margin: 10,
  },
  content: {
    width: "40%",
    fontSize: 14,
    lineHeight: 18,
  },
  title: { color: "white", fontWeight: 500 },
  subtitle: { color: "white", fontWeight: 400 },
  location: { color: "white", fontSize: 12, fontWeight: 400 },
  text: {
    color: "white",
    marginLeft: 17,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
