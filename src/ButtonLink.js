import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ButtonLink({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#385f71",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
