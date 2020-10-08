import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";

const NavLink = ({ to, text }) => (
  <Link to={to} underlayColor="red">
    <Text style={styles.linkText}>{text}</Text>
  </Link>
);

export default function Nav() {
  return (
    <View style={styles.nav}>
      <NavLink to="/home" text="Home" />
      <NavLink to="/search" text="Search" />
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "center",
  },
  linkText: {
    color: "white",
    padding: 5,
  },
});
