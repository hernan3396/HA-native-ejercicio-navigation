import React from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";

export default function Footer() {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  if (isLandscape) return null;

  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Made with React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footerText: {
    color: "white",
  },
  footer: {
    height: 30,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
