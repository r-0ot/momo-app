import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Title } from "../../components/Title";
import { Search } from "../../components/Search";
import { SearchResult } from "../../components/SearchResult";
import { InfoTile } from "../../components/InfoTile";
import { useState } from "react";
import { DisplayPicture } from "../../components/DisplayPicture";

export function Tabs({ tabs, activeTab, setActiveTab }) {
  return (
    <View style={styles.tabs}>
      {tabs.map((tabName, index) => (
        <TouchableOpacity
          style={styles.tab}
          onPress={() => setActiveTab(index)}
        >
          <Text style={styles.subtitle}>{tabName}</Text>
          <View
            style={{
              ...styles.tabLayout,
              backgroundColor: activeTab === index ? "#661A15" : "#3F3F46",
            }}
          ></View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    alignSelf: "center",
    color: "white",
    fontSize: 12,
    fontWeight: 500,
    marginBottom: 5,
  },
  tabs: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    margin: 15,
    alignItems: "center",
  },
  tab: {
    width: 105,
    height: 28,
    justifyContent: "space-around",
    alignItems: "space-around",
  },
  tabLayout: { width: 105, height: 4 },
});
