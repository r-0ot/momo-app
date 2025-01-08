import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

export function Search({ placeholder, handleChange }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={(text) => handleChange(text)}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "95%",
    margin: 10,
    height: 50,
    borderColor: "#661A15",
    borderWidth: 2,
    borderRadius: 19,
    fontSize: 16,
    fontWeight: 400,
    padding: 8,
    color: "white",
  },
});
