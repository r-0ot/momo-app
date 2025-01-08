import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

export function Picker({ size, isOpen, options, handlePress }) {
  return (
    <>
      {" "}
      {isOpen && (
        <View style={{ ...styles.container, width: size ? 163 : 343 }}>
          <ScrollView indicatorStyle={styles.indicator}>
            {options.map((option, index) => (
              <TouchableOpacity
                style={styles.option}
                onPress={(e) => handlePress(e)}
              >
                <Text key={index} style={styles.text}>
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    width: 343,
    height: 120,
    borderRadius: 8,
    borderColor: "#3F3F46",
    borderWidth: 1,
  },
  indicator: {
    color: "#661A15",
  },
  option: {
    height: 40,
    justifyContent: "center",
  },
  text: {
    color: "#C6C6C6",
    fontSize: 12,
    fontWeight: 400,
    padding: 5,
  },
});
