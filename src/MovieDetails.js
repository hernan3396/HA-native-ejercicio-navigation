import Axios from "axios";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useParams } from "react-router-native";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await Axios.get(
        `http://www.omdbapi.com/?i=${id}&apikey=93064b0b`
      );
      setMovie(response.data);
    };

    fetchMovie();
  }, []);
  return (
    <View style={styles.container}>
      {movie.Poster !== "N/A" && (
        <Image style={styles.poster} source={{ uri: movie.Poster }} />
      )}
      <Text numberOfLines={2} ellipsizeMode="tail" style={styles.h3}>
        {movie.Title} ({movie.Year})
      </Text>
      {movie.Plot !== "N/A" && <Text style={styles.plot}>{movie.Plot}</Text>}
    </View>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  poster: {
    width: 280,
    height: 420,
  },
  h3: {
    fontWeight: "bold",
    fontSize: 22,
    color: "white",
    width: 280,
    marginTop: 10,
  },
  plot: {
    marginTop: 10,
    color: "white",
    borderTopColor: "white",
    borderTopWidth: 1,
    width: 280,
  },
});
