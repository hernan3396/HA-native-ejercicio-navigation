import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Link } from "react-router-native";

export default function Movie({ movie }) {
  return (
    <Link
      to={`/movieDetails/${movie.imdbID}`}
      style={styles.card}
      component={TouchableOpacity}
    >
      <Image style={styles.thumb} source={{ uri: movie.Poster }} />
      <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
        {movie.Title}
      </Text>
    </Link>
  );
}

const styles = StyleSheet.create({
  thumb: {
    height: 150,
    width: 150,
    resizeMode: "cover",
    borderRadius: 10,
  },
  title: {
    fontSize: 15,
    width: 150,
    color: "white",
  },
  card: {
    padding: 10,
  },
});
