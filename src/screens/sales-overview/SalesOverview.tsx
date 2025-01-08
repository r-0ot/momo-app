import { Text, View, Image, StyleSheet, Button } from "react-native";
import { Title } from "../../components/Title";
import { Search } from "../../components/Search";
import { SearchResult } from "../../components/SearchResult";
import { Modal } from "../../components/Modal";
import { useState } from "react";

export function SalesOverview() {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.container}>
      <Title text="Sales Overview" path="Menu" />
      <Search placeholder={"Search by name"} />
      <SearchResult
        view={"ViewEmployee"}
        edit={"EditEmployee"}
        setShowModal={setShowModal}
      />
      {showModal && <Modal setShowModal={setShowModal} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "black",
    color: "white",
  },
  image: { width: 343, height: 255 },
});
